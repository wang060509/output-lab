export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { input, outputType, profile, scores, issues } = req.body;

    // Validate input
    if (!input || typeof input !== 'string') {
      return res.status(400).json({ error: 'Input must be a non-empty string' });
    }

    if (input.length > 4000) {
      return res.status(400).json({ error: 'Input too long (max 4000 characters)' });
    }

    if (!outputType || typeof outputType !== 'string') {
      return res.status(400).json({ error: 'Output type must be a string' });
    }

    // SiliconFlow API call
    const SILICONFLOW_MODEL = process.env.SILICONFLOW_MODEL || "Qwen/Qwen2.5-7B-Instruct";

    const systemPrompt = `You are repairing an already-generated practitioner-ready research translation draft.
Do not invent evidence.
Do not add new statistics.
Do not strengthen causal claims.
Preserve limitations, scope, method cues, and uncertainty.
Use the selected output type and audience profile.
This is not source verification.
Produce concise repair guidance or a repaired draft.`;

    const userPrompt = `Selected output type: ${outputType}
Audience: ${profile?.audience || 'Practitioners'}
Must include: ${profile?.mustInclude || 'Source-grounded claim, audience context, limitations, practical implication'}
Main risk: ${profile?.mainRisk || 'Overstated causality, missing scope limits'}
Repair focus: ${profile?.repairFocus || 'Tighten causal language, restore scope and method cues'}
Scores: ${JSON.stringify(scores)}
Issues: ${JSON.stringify(issues)}
Original draft:
${input}

Please provide a repaired version of this draft that addresses the identified issues while preserving fidelity to the original research.`;

    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SILICONFLOW_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: SILICONFLOW_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 2000,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      throw new Error(`SiliconFlow API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const repairText = data.choices?.[0]?.message?.content?.trim();

    if (!repairText) {
      throw new Error('No repair text generated');
    }

    res.status(200).json({ repairText });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Failed to generate repair' });
  }
}