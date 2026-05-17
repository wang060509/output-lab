// Input cleaning function to remove chat artifacts
function cleanInput(text) {
  return text
    .split('\n')
    .filter((line) => {
      const trimmed = line.trim();
      // Remove lines that only say "user"
      if (trimmed === 'user') return false;
      // Remove "Revised Draft:" lines
      if (trimmed === 'Revised Draft:') return false;
      // Remove very short standalone fragments that look like artifacts
      if (trimmed.length > 0 && trimmed.length <= 2) return false;
      return true;
    })
    .join('\n')
    .replace(/\n\n\n+/g, '\n\n') // Replace multiple blank lines with double newline
    .trim();
}

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

    // Clean the input before processing
    const cleanedInput = cleanInput(input);
    console.log('[repair.js] POST /api/repair called');
    console.log(`[repair.js] Input: ${cleanedInput.length} characters`);

    // SiliconFlow API call
    const SILICONFLOW_MODEL = process.env.SILICONFLOW_MODEL || "Qwen/Qwen2.5-7B-Instruct";
    console.log(`[repair.js] Using model: ${SILICONFLOW_MODEL}`);

    const systemPrompt = `You are repairing an already-generated practitioner-ready research translation draft.
  Follow these rules strictly:
  - Rewrite the draft cleanly and clearly.
  - Preserve the original structure (headings, sections, and order).
  - Do not invent evidence, data, or statistics.
  - Do not strengthen causal claims beyond what the source supports.
  - Do not repeat words or phrases.
  - Stop after the Recommendations section; do not add content after that.
  - Return only the revised draft with no explanatory commentary.`;

    const userPrompt = `Selected output type: ${outputType}
  Audience: ${profile?.audience || 'Practitioners'}
  Must include: ${profile?.mustInclude || 'Source-grounded claim, audience context, limitations, practical implication'}
  Main risk: ${profile?.mainRisk || 'Overstated causality, missing scope limits'}
  Repair focus: ${profile?.repairFocus || 'Tighten causal language, restore scope and method cues'}
  Scores: ${JSON.stringify(scores)}
  Issues: ${JSON.stringify(issues)}
  Original draft:
  ${cleanedInput}

  Please rewrite the draft into a repaired version that follows the system rules above. Return only the revised draft; do not add commentary.`;

    try {
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
          max_tokens: 600,
          temperature: 0.2,
          top_p: 0.8,
          // If provider supports repetition_penalty, include a mild penalty to reduce verbatim repetition
          repetition_penalty: 1.1
        })
      });

      if (!response.ok) {
        throw new Error(`SiliconFlow API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const repairText = data.choices?.[0]?.message?.content?.trim() || '';

      // Output quality checks
      function outputFailsQualityChecks(text, sourceInput) {
        if (!text || text.trim().length === 0) return { fail: true, reason: 'empty' };

        const normalized = text.replace(/[\r\n]+/g, ' ').trim();

        // 1) any single word repeats 5 or more times in a row (e.g., "on on on on on")
        const repeatedFive = /\b(\w+)(?:\s+\1){4,}\b/i;
        if (repeatedFive.test(normalized)) return { fail: true, reason: 'repeated_word_5_plus' };

        // 2) obvious repeated phrases like "limited limited limited" (3 or more repeats)
        const repeatedThree = /\b(\w+)(?:\s+\1){2,}\b/i;
        if (repeatedThree.test(normalized)) return { fail: true, reason: 'repeated_phrase_3_plus' };

        // 3) more than 3 duplicated adjacent words occurrences (many small repeats)
        const dupAdjacentRegex = /\b(\w+)\s+\1\b/gi;
        let dupCount = 0;
        while (dupAdjacentRegex.exec(normalized)) {
          dupCount += 1;
          if (dupCount > 3) return { fail: true, reason: 'too_many_adjacent_duplicates' };
        }

        // 4) output much shorter than expected: less than 25% of source or under 100 chars
        const expectedMin = Math.max(100, Math.floor((sourceInput?.length || 0) * 0.25));
        if (normalized.length < expectedMin) return { fail: true, reason: 'too_short' };

        return { fail: false };
      }

      const quality = outputFailsQualityChecks(repairText, cleanedInput);
      if (quality.fail) {
        console.warn('[repair.js] API output failed quality check:', quality.reason);
        // Do not return the API output — instruct frontend to use local fallback
        return res.status(200).json({
          repairText: null,
          apiUsed: false,
          provider: 'local-fallback',
          errorMessage: 'API output failed quality check. Demo fallback repair used.'
        });
      }

      console.log('[repair.js] API call successful');
      res.status(200).json({
        repairText,
        apiUsed: true,
        model: SILICONFLOW_MODEL,
        provider: 'SiliconFlow'
      });
    } catch (apiError) {
      console.warn('[repair.js] API call failed:', apiError.message);
      // Return error response for frontend to handle fallback
      res.status(200).json({
        repairText: null,
        apiUsed: false,
        provider: 'local-fallback',
        errorMessage: 'SiliconFlow API temporarily unavailable. Please try again or use demo mode.'
      });
    }
  } catch (error) {
    console.error('[repair.js] Unexpected error:', error.message);
    res.status(500).json({ error: 'Failed to process repair request' });
  }
}