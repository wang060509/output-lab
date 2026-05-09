window.APP_MODE = "demo";

const defaultCaseData = {
  text: "",
  topBar: {
    eyebrow: "AI Playbook QA Workspace",
    title: "Output Lab",
    fields: [
      { label: "Role", value: "Output-level QA" },
      { label: "Scope", value: "Fidelity + Repair" }
    ]
  },
  benchmark: {
    number: "01",
    title: "Workflow Position",
    description: "Fallback workflow context for auditing generated practitioner-ready output drafts.",
    badges: [
      { label: "Pipeline Context", color: "blue" },
      { label: "QA Gate", color: "green" }
    ],
    visualTitle: "AI Playbook Workflow Pipeline",
    visualPlaceholder: "Source Research -> Structured Extraction -> Output Generation -> Output Lab QA -> Repair Loop -> Final Portfolio",
    metadataTitle: "Output Lab Role",
    metadata: [
      { label: "Input", value: "Generated output draft" },
      { label: "Audit Focus", value: "Quality, fidelity risk, audience fit, and actionability" },
      { label: "Not For", value: "Full paper generation or API demonstration" },
      { label: "Next Step", value: "Targeted repair before portfolio submission" }
    ],
    cards: [
      { title: "Source Research", description: "Academic or evidence source selected in the AI Playbook workflow." },
      { title: "Structured Extraction", description: "Findings, methods, scope, limitations, and causal claims are separated before generation." },
      { title: "Output Generation", description: "A practitioner-ready draft is generated for a selected output type." },
      { title: "Output Lab QA", description: "The draft is checked for fidelity and communication risk." },
      { title: "Repair Loop", description: "Targeted revisions improve the draft before final use." }
    ]
  },
  audience: {
    number: "02",
    title: "Output Type Standards",
    description: "Fallback output standards for audience, required structure, and fidelity risk.",
    badges: [
      { label: "Output Standards", color: "blue" },
      { label: "Audience Fit", color: "orange" }
    ],
    cards: [
      {
        outputType: "Practitioner Output",
        audience: "Practitioners, analysts, or decision-support readers",
        mustInclude: "Source-grounded claim, audience context, limitations, and practical implication",
        mainRisk: "Making the draft more useful by making the evidence less accurate."
      }
    ]
  },
  compare: {
    number: "03",
    title: "Failure Mode Library",
    description: "Fallback library of common output-level QA failure modes.",
    badges: [
      { label: "Fidelity Risk", color: "red" },
      { label: "Repair Targets", color: "green" }
    ],
    failureModes: [
      {
        title: "Causal Upgrade",
        problem: "A bounded or associational claim is rewritten as causal proof.",
        badExample: "The intervention causes the outcome.",
        betterFix: "The source reports an association or suggests a possible mechanism; causal effects are not established.",
        relatedDimension: "Causal Precision"
      },
      {
        title: "Scope Loss",
        problem: "The draft drops population, setting, time, or evidence boundaries.",
        badExample: "This applies everywhere.",
        betterFix: "State the source context and describe transfer as a local test, not a universal rule.",
        relatedDimension: "Scope Fidelity"
      },
      {
        title: "False Actionability",
        problem: "The draft gives a confident next step that the source cannot support.",
        badExample: "Adopt this solution immediately.",
        betterFix: "Offer a bounded next step that fits the audience and preserves limitations.",
        relatedDimension: "Actionability"
      }
    ]
  },
  diagnose: {
    number: "04",
    title: "Diagnose",
    description: "Evaluate an output draft across fidelity and communication dimensions.",
    badges: [
      { label: "Rule-based Demo", color: "blue" },
      { label: "Risk Flags", color: "red" }
    ],
    scoreTitle: "Dimension Scores",
    scores: [
      { label: "Claim Accuracy", value: 6, max: 10, color: "blue" },
      { label: "Causal Precision", value: 5, max: 10, color: "red" },
      { label: "Scope Fidelity", value: 6, max: 10, color: "blue" },
      { label: "Method Transparency", value: 5, max: 10, color: "red" },
      { label: "Nuance Preservation", value: 6, max: 10, color: "blue" },
      { label: "Audience Calibration", value: 7, max: 10, color: "blue" },
      { label: "Actionability", value: 4, max: 10, color: "red" }
    ],
    analysisTitle: "QA Insight",
    flags: [
      { label: "causal risk", color: "red" },
      { label: "scope drift", color: "orange" },
      { label: "method omission", color: "red" },
      { label: "weak next step", color: "orange" }
    ],
    whyLowScore: "The draft needs visible source-fidelity signals before it can be treated as practitioner-ready.",
    priorityFixes: "Repair causal language, restore scope and method cues, then add a bounded audience-specific next step."
  },
  repair: {
    number: "05",
    title: "Repair",
    description: "Apply targeted QA repairs while preserving source fidelity.",
    badges: [
      { label: "QA Repair", color: "green" },
      { label: "Diff View", color: "blue" }
    ],
    checklistTitle: "Repair Protocol",
    checklist: [
      { status: "01", title: "Calibrate causal language", description: "Use association, indication, or evidence-limited wording unless the source design supports causality." },
      { status: "02", title: "Restore scope boundaries", description: "Name the population, setting, time period, or case boundary that limits transferability." },
      { status: "03", title: "Make the method visible", description: "Signal whether the evidence comes from a survey, interview, experiment, review, or theory paper." },
      { status: "04", title: "Define a realistic next step", description: "Tie the recommendation to what the intended practitioner audience can reasonably do." },
      { status: "05", title: "Keep limitations in view", description: "Preserve caveats before turning the evidence into practical guidance." }
    ],
    diffTitle: "Before / After Diff",
    beforeLabel: "Original Version",
    beforeText: "The draft makes a useful practitioner-facing point but does not yet show enough source scope, method, or limitation context.",
    afterLabel: "Improved Version",
    afterText: "The repaired draft keeps the practical takeaway while making the evidence boundary visible. It names the source context, avoids unsupported causal language, and gives the audience a bounded next step.",
    patchTitle: "Applied Prompt Patch",
    patchText: "Goal: Improve actionability without weakening fidelity.\n\nStrategy:\n- Fix causal overstatement\n- Restore scope condition\n- Add method signal\n- Improve audience-specific next step\n- Preserve limitations"
  },
  rightRail: {
    phasesTitle: "Workflow Phases",
    phases: [
      { id: "try-your-own", label: "00 Try Your Own" },
      { id: "benchmark", label: "01 Workflow Position" },
      { id: "audience", label: "02 Output Standards" },
      { id: "compare", label: "03 Failure Modes" },
      { id: "diagnose", label: "04 Diagnose" },
      { id: "repair", label: "05 Repair" }
    ],
    dimensionsTitle: "Fidelity Dimensions",
    dimensions: [
      { label: "Claim Accuracy", color: "blue" },
      { label: "Causal Precision", color: "red" },
      { label: "Scope Fidelity", color: "orange" },
      { label: "Method Transparency", color: "blue" },
      { label: "Nuance Preservation", color: "green" },
      { label: "Audience Calibration", color: "blue" },
      { label: "Actionability", color: "orange" }
    ],
    dimensionsDescription: "Use the sidebar to move through the QA workflow and review the evaluation dimensions.",
    failureModesTitle: "Active Failure Modes",
    failureModes: [
      { label: "causal upgrade", color: "red" },
      { label: "scope loss", color: "orange" },
      { label: "method omission", color: "red" },
      { label: "false actionability", color: "orange" }
    ]
  }
};

const staticRedesignData = {
  topBar: {
    eyebrow: "AI Playbook QA Workspace",
    title: "Output Lab",
    fields: [
      { label: "Role", value: "Output-level QA" },
      { label: "Scope", value: "Fidelity + Repair" }
    ]
  },
  benchmark: {
    number: "01",
    title: "Workflow Position",
    description: "Shows where Output Lab sits inside the AI Playbook workflow as an output-level QA and repair interface.",
    badges: [
      { label: "Pipeline Context", color: "blue" },
      { label: "QA Gate", color: "green" }
    ],
    visualTitle: "AI Playbook Workflow Pipeline",
    visualPlaceholder: "Source Research \u2192 Structured Extraction \u2192 18 Output Types \u2192 Output Lab QA \u2192 Repair Loop \u2192 Final Portfolio",
    metadataTitle: "Output Lab Role",
    metadata: [
      { label: "Input", value: "Already generated practitioner-ready output draft" },
      { label: "Audit Focus", value: "Output quality, fidelity risk, audience fit, and actionability" },
      { label: "Not For", value: "Full paper generation or API demonstration" },
      { label: "Next Step", value: "Targeted repair before final portfolio submission" }
    ],
    cards: [
      { title: "Source Research", description: "peer-reviewed public administration/public policy paper" },
      { title: "Structured Extraction", description: "findings, methods, scope, limitations, causal claims" },
      { title: "Output Generation", description: "one of 18 practitioner-ready output types" },
      { title: "Output Lab QA", description: "fidelity and communication-risk audit" },
      { title: "Repair Loop", description: "targeted revision before portfolio submission" }
    ]
  },
  audience: {
    number: "02",
    title: "Output Type Standards",
    description: "Compares practitioner-ready output types by audience, required structure, and primary fidelity risk.",
    badges: [
      { label: "Output Standards", color: "blue" },
      { label: "Audience Fit", color: "orange" }
    ],
    cards: [
      {
        outputType: "Policy Brief",
        audience: "Policy staff, program leads, agency executives",
        mustInclude: "Problem framing, key findings, limitations, implications, recommendations",
        mainRisk: "Turning bounded evidence into broad policy prescription."
      },
      {
        outputType: "Policy Memo",
        audience: "Decision-maker or internal leadership audience",
        mustInclude: "Decision context, recommendation, evidence basis, tradeoffs, next steps",
        mainRisk: "Overstating what the source supports for a specific decision."
      },
      {
        outputType: "Executive Summary",
        audience: "Senior leaders who need the core takeaway quickly",
        mustInclude: "Purpose, headline findings, scope, implications, limits",
        mainRisk: "Compressing away scope, method, or uncertainty."
      },
      {
        outputType: "Fact Sheet",
        audience: "Practitioners, advocates, media, public-facing staff",
        mustInclude: "Verified facts, definitions, source cues, concise context",
        mainRisk: "Presenting interpretive claims as settled facts."
      },
      {
        outputType: "Press Release",
        audience: "Media, communications teams, public stakeholders",
        mustInclude: "News hook, accurate summary, quote-ready language, source context",
        mainRisk: "Inflating novelty, certainty, or impact for attention."
      },
      {
        outputType: "Technical Note",
        audience: "Analysts, evaluators, implementation teams",
        mustInclude: "Method, data/source, assumptions, limitations, technical implications",
        mainRisk: "Erasing method detail that changes interpretation."
      },
      {
        outputType: "LinkedIn Post",
        audience: "Professional network and policy-practice community",
        mustInclude: "Hook, takeaway, evidence cue, practical implication, limitation",
        mainRisk: "Making a shareable claim stronger than the paper allows."
      },
      {
        outputType: "LinkedIn Carousel",
        audience: "Skimming professional audience",
        mustInclude: "Slide sequence, key message per slide, evidence cue, takeaway",
        mainRisk: "Sacrificing nuance for slide-friendly simplicity."
      },
      {
        outputType: "Mechanism Map",
        audience: "Policy designers, analysts, implementation teams",
        mustInclude: "Actors, pathway, conditions, evidence strength, uncertainty",
        mainRisk: "Turning hypothesized mechanisms into proven causal chains."
      }
    ]
  },
  compare: {
    number: "03",
    title: "Failure Mode Library",
    description: "Common failure modes identified in the Assignment 3 pilot for output-level QA.",
    badges: [
      { label: "Pilot Findings", color: "green" },
      { label: "Fidelity Risk", color: "red" }
    ],
    failureModes: [
      {
        title: "Causal Upgrade",
        problem: "Associational or descriptive findings are rewritten as causal proof.",
        badExample: "Autonomy causes better agency performance.",
        betterFix: "The study finds an association between autonomy and reported performance; causal effects are not established.",
        relatedDimension: "Causal Precision"
      },
      {
        title: "Scope Loss",
        problem: "Population, place, time, or setting constraints disappear from the output.",
        badExample: "This applies to all public agencies.",
        betterFix: "In the U.S. federal workforce context studied here, the finding suggests a bounded relationship worth testing locally.",
        relatedDimension: "Scope Fidelity"
      },
      {
        title: "Method Erasure",
        problem: "The evidence type is omitted, making claims sound more certain than the method allows.",
        badExample: "Research shows accountability improves performance.",
        betterFix: "Survey-based evidence links accountability practices with reported performance, with limits on causal inference.",
        relatedDimension: "Method Transparency"
      },
      {
        title: "Nuance Averaging",
        problem: "Mixed, conditional, or qualified findings are flattened into one simple message.",
        badExample: "Accountability works.",
        betterFix: "Accountability appears more useful when paired with autonomy, and effects may vary by HRM domain.",
        relatedDimension: "Nuance Preservation"
      },
      {
        title: "False Actionability",
        problem: "The output gives confident operational advice that the source evidence does not support.",
        badExample: "Every agency should adopt this HR model immediately.",
        betterFix: "Practitioners can use the finding as a diagnostic prompt and test changes under local constraints.",
        relatedDimension: "Actionability"
      }
    ]
  },
  diagnose: {
    number: "04",
    title: "Diagnose",
    description: "Audit an output draft across course-aligned fidelity dimensions before repair.",
    badges: [
      { label: "Fidelity Dimensions", color: "blue" },
      { label: "Risk Flags", color: "red" }
    ],
    scoreTitle: "Dimension Scores",
    scores: [
      { label: "Claim Accuracy", value: 6, max: 10, color: "blue" },
      { label: "Causal Precision", value: 5, max: 10, color: "red" },
      { label: "Scope Fidelity", value: 6, max: 10, color: "blue" },
      { label: "Method Transparency", value: 5, max: 10, color: "red" },
      { label: "Nuance Preservation", value: 6, max: 10, color: "blue" },
      { label: "Audience Calibration", value: 7, max: 10, color: "blue" },
      { label: "Actionability", value: 4, max: 10, color: "red" }
    ],
    analysisTitle: "QA Insight",
    flags: [
      { label: "causal risk", color: "red" },
      { label: "scope drift", color: "orange" },
      { label: "method omission", color: "red" },
      { label: "weak next step", color: "orange" }
    ],
    whyLowScore: "The draft needs stronger source fidelity signals. It should preserve causal limits, restore scope conditions, name the method or evidence type, and make the practitioner next step more specific.",
    priorityFixes: "Repair causal language first, then restore scope and method cues. Add an audience-specific next step only after the evidence limits are visible."
  },
  repair: {
    number: "05",
    title: "Repair",
    description: "Apply targeted QA repairs while preserving research fidelity.",
    badges: [
      { label: "QA Repair", color: "green" },
      { label: "Diff View", color: "blue" }
    ],
    checklistTitle: "Repair Protocol",
    checklist: [
      { status: "01", title: "Calibrate causal language", description: "Use association, indication, or evidence-limited wording unless the source design supports causality." },
      { status: "02", title: "Restore scope boundaries", description: "Name the population, setting, time period, or case boundary that limits transferability." },
      { status: "03", title: "Make the method visible", description: "Signal whether the evidence comes from a survey, interview, experiment, review, or theory paper." },
      { status: "04", title: "Define a realistic next step", description: "Tie the recommendation to what the intended practitioner audience can reasonably do." },
      { status: "05", title: "Keep limitations in view", description: "Preserve caveats before turning the evidence into practical guidance." }
    ],
    diffTitle: "Before / After Diff",
    beforeLabel: "Original Version",
    beforeText: "This study examines the relationship between accountability and organizational performance in the U.S. federal government. Findings suggest that accountability is positively associated with performance, and autonomy may influence these relationships.",
    afterLabel: "Improved Version",
    afterText: "A study of the U.S. federal workforce finds that accountability practices are associated with reported organizational performance, especially when paired with employee autonomy.\n\nFor practitioners, the useful next step is not to assume a universal causal fix. Instead, review where accountability systems may be too rigid, test changes in the local agency context, and preserve employee discretion where the evidence suggests it matters.\n\nLimit: the evidence is survey-based and should not be presented as proof that accountability reforms alone cause performance gains.",
    patchTitle: "Applied Prompt Patch",
    patchText: "Goal: Improve actionability without weakening fidelity.\n\nStrategy:\n- Fix causal overstatement\n- Restore scope condition\n- Add method signal\n- Improve audience-specific next step\n- Preserve limitations\n\nWhy score improved:\nThe revised version gives practitioners a clearer next step while keeping causal limits, scope boundaries, and method constraints visible."
  },
  rightRail: {
    phasesTitle: "Workflow Phases",
    phases: [
      { id: "try-your-own", label: "00 Try Your Own" },
      { id: "benchmark", label: "01 Workflow Position" },
      { id: "audience", label: "02 Output Standards" },
      { id: "compare", label: "03 Failure Modes" },
      { id: "diagnose", label: "04 Diagnose" },
      { id: "repair", label: "05 Repair" }
    ],
    dimensionsTitle: "Fidelity Dimensions",
    dimensions: [
      { label: "Claim Accuracy", color: "blue" },
      { label: "Causal Precision", color: "red" },
      { label: "Scope Fidelity", color: "orange" },
      { label: "Method Transparency", color: "blue" },
      { label: "Nuance Preservation", color: "green" },
      { label: "Audience Calibration", color: "blue" },
      { label: "Actionability", color: "orange" }
    ],
    dimensionsDescription: "Use the sidebar to move through the QA workflow and review the evaluation dimensions.",
    failureModesTitle: "Active Failure Modes",
    failureModes: [
      { label: "causal upgrade", color: "red" },
      { label: "scope loss", color: "orange" },
      { label: "method omission", color: "red" },
      { label: "false actionability", color: "orange" }
    ]
  }
};

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(base, override) {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return override === undefined ? base : override;
  }

  const result = { ...base };
  Object.keys(override).forEach((key) => {
    const baseValue = base[key];
    const overrideValue = override[key];
    result[key] = deepMerge(baseValue, overrideValue);
  });
  return result;
}

const caseData = deepMerge(deepMerge(defaultCaseData, staticRedesignData), window.caseData || {});
window.caseData = caseData;
let latestDiagnoseState = null;
let typeWriterToken = 0;
let panelSwitchToken = 0;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function typeWriter(elementId, text, speed = 15) {
  const element = typeof elementId === "string" ? document.getElementById(elementId) : elementId;
  if (!element) {
    return;
  }

  const token = ++typeWriterToken;
  element.textContent = "";
  const shouldShowCursor = element.id === "aiWhyLowScore" || element.id === "aiRepairPatch" || element.id === "afterOutput";

  for (let index = 0; index < text.length; index += 1) {
    if (token !== typeWriterToken) {
      return;
    }

    element.textContent += text[index];
    // eslint-disable-next-line no-await-in-loop
    await wait(speed);
  }

  if (!shouldShowCursor || token !== typeWriterToken) {
    return;
  }

  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.textContent = "|";
  element.appendChild(cursor);
}

function renderPills(items) {
  return items
    .map((item) => `<span class="pill ${escapeHtml(item.color)}">${escapeHtml(item.label)}</span>`)
    .join("");
}

function renderPanelHeader(panel) {
  return `
    <div class="panel-header">
      <div>
        <h2><span class="num">${escapeHtml(panel.number)}</span>${escapeHtml(panel.title)}</h2>
        <p>${escapeHtml(panel.description)}</p>
      </div>
      <div class="panel-tools">${renderPills(panel.badges)}</div>
    </div>
  `;
}

function renderTopBar() {
  const topBar = document.getElementById("topbar");
  if (!topBar) {
    return;
  }

  topBar.innerHTML = `
    <div class="brand">
      <span class="eyebrow">${escapeHtml(caseData.topBar.eyebrow)}</span>
      <h1>${escapeHtml(caseData.topBar.title)}</h1>
      <p style="color: var(--muted); font-size: 14px; margin-top: 4px;">Output-Level QA and Repair Interface</p>
    </div>
    <div>
      <div class="mode-toggle" style="display:flex; gap:8px; align-items:center;">
        <span style="font-size:12px; color: var(--muted);">Mode:</span>
        <button class="mode-btn active" type="button" aria-disabled="true">Demo</button>
      </div>
    </div>
  `;
}

function renderBenchmark() {
  const panel = document.getElementById("benchmark");
  if (!panel) {
    return;
  }

  panel.innerHTML = `
    ${renderPanelHeader(caseData.benchmark)}
    <div class="panel-body">
      <div class="meta-grid">
        <div class="box" style="border-left: 2px solid var(--brand)">
          <h3>${escapeHtml(caseData.benchmark.visualTitle)}</h3>
          <div style="min-height: 180px; background: rgba(6,182,212,0.05); border: 1px dashed var(--line-2); display: flex; align-items: center; justify-content: center; color: var(--muted); font-family: var(--font-mono); font-size: 12px; text-align: center; padding: 16px; border-radius: 8px;">
            <pre style="margin: 0; white-space: pre-wrap; font: inherit; color: inherit; text-align: center; line-height: 1.8;">${escapeHtml(caseData.benchmark.visualPlaceholder)}</pre>
          </div>
        </div>
        <div class="box">
          <h3>${escapeHtml(caseData.benchmark.metadataTitle)}</h3>
          ${caseData.benchmark.metadata
            .map(
              (item) => `
                <div class="key-value">
                  <div class="k">${escapeHtml(item.label)}</div>
                  <div class="v">${escapeHtml(item.value)}</div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="tag-grid">
        ${caseData.benchmark.cards
          .map(
            (card) => `
              <div class="tag-card">
                <strong>${escapeHtml(card.title)}</strong>
                <p>${escapeHtml(card.description)}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderAudience() {
  const panel = document.getElementById("audience");
  if (!panel) {
    return;
  }

  panel.innerHTML = `
    ${renderPanelHeader(caseData.audience)}
    <div class="panel-body">
      <div class="audience-grid">
        ${caseData.audience.cards
          .map((card, index) => {
            const outputType = card.outputType || card.title;
            const audience = card.audience || "";
            const mustInclude = card.mustInclude || "";
            const mainRisk = card.mainRisk || "";

            return `
              <div class="aud-card">
                <div class="icon">${escapeHtml(card.icon || `TYPE_${String(index + 1).padStart(2, "0")}`)}</div>
                <h3>${escapeHtml(outputType)}</h3>
                ${audience ? `<p><strong>Audience:</strong> ${escapeHtml(audience)}</p>` : ""}
                ${mustInclude ? `<p><strong>Must Include:</strong> ${escapeHtml(mustInclude)}</p>` : ""}
                ${mainRisk ? `<p><strong>Main Fidelity Risk:</strong> ${escapeHtml(mainRisk)}</p>` : ""}
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderCompare() {
  const panel = document.getElementById("compare");
  if (!panel) {
    return;
  }

  panel.innerHTML = `
    ${renderPanelHeader(caseData.compare)}
    <div class="panel-body">
      <div class="tag-grid">
        ${caseData.compare.failureModes
          .map(
            (mode) => `
              <div class="tag-card">
                <strong>${escapeHtml(mode.title)}</strong>
                <p><span class="metric-label">Problem:</span> ${escapeHtml(mode.problem)}</p>
                <p><span class="metric-label">Bad Example:</span> ${escapeHtml(mode.badExample)}</p>
                <p><span class="metric-label">Better Fix:</span> ${escapeHtml(mode.betterFix)}</p>
                <p><span class="metric-label">Related Fidelity Dimension:</span> ${escapeHtml(mode.relatedDimension)}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderDiagnose() {
  const panel = document.getElementById("diagnose");
  if (!panel) {
    return;
  }

  panel.innerHTML = `
    ${renderPanelHeader(caseData.diagnose)}
    <div class="panel-body">
      <div class="diagnose-grid">
        <div class="box" id="diagnoseResult" style="margin-bottom: 24px;">
          <h3>${escapeHtml(caseData.diagnose.analysisTitle)}</h3>
          <div style="margin-bottom: 16px;">${renderPills(caseData.diagnose.flags)}</div>
          <p style="margin-bottom: 12px; color: var(--ink);"><strong>Insight:</strong> <span id="aiWhyLowScore">${escapeHtml(caseData.diagnose.whyLowScore)}</span></p>
          <p style="color: var(--ink);"><strong>Suggested Improvement:</strong> <span id="aiRepairPatch">${escapeHtml(caseData.diagnose.priorityFixes)}</span></p>
          <div class="ai-confidence"><span class="pulse-dot"></span><span>Rule-based Demo Assessment</span></div>
          <p id="liveDiagnose" style="color: var(--ink); margin: 12px 0 0;"></p>
        </div>
        <div class="box">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
            <h3 style="margin: 0;">${escapeHtml(caseData.diagnose.scoreTitle)}</h3>
            <button id="btn-run-diagnose" class="action primary" type="button">Run Diagnose</button>
          </div>
          <div class="framework-badge">Evaluation Protocol: Output Lab Fidelity QA v1.0</div>
          <div id="diagnoseScores">
            <p id="diagnosePlaceholder" style="color: var(--muted); margin: 0 0 16px;">Run diagnose to see evaluation</p>
          </div>
          <div id="scoreResult">
            ${caseData.diagnose.scores
              .map((score) => {
                const width = `${(score.value / score.max) * 100}%`;
                return `
                  <div class="score-row">
                    <span>${escapeHtml(score.label)}</span>
                    <div>
                      <div class="bar"><div class="fill ${escapeHtml(score.color)}" style="width: ${width}"></div></div>
                      ${escapeHtml(`${score.value}/${score.max}`)}
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
          <p id="liveScore" style="color: var(--ink); margin: 12px 0 0;"></p>
        </div>
      </div>
    </div>
  `;
}

function renderRepair() {
  const panel = document.getElementById("repair");
  if (!panel) {
    return;
  }

  panel.innerHTML = `
    ${renderPanelHeader(caseData.repair)}
    <div class="panel-body">
      <div class="repair-grid">
        <div class="box">
          <h3>${escapeHtml(caseData.repair.checklistTitle)}</h3>
          ${caseData.repair.checklist
            .map(
              (item) => `
                <div class="check">
                  <div class="mark">${escapeHtml(item.status)}</div>
                  <div>
                    <strong>${escapeHtml(item.title)}</strong>
                    <p>${escapeHtml(item.description)}</p>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="box">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
            <h3 style="margin: 0;">${escapeHtml(caseData.repair.diffTitle)}</h3>
            <button id="btn-run-repair" class="action primary" type="button">Generate Repair</button>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="text-block" style="border-color: var(--line-2);">
              <strong style="color: var(--muted); display:block; margin-bottom: 8px; font-family: var(--font-mono);">${escapeHtml(caseData.repair.beforeLabel)}</strong>
              <p id="beforeOutput">${escapeHtml(caseData.repair.beforeText)}</p>
            </div>
            <div class="text-block" style="border-color: var(--good); background: rgba(16,185,129,0.05);">
              <div class="repair-output-header">
                <strong>${escapeHtml(caseData.repair.afterLabel)}</strong>
                <button id="btn-copy-repair" class="action secondary repair-copy" type="button">Copy</button>
              </div>
              <pre id="afterOutput">${escapeHtml(caseData.repair.afterText)}</pre>
            </div>
          </div>
          <div class="text-block" style="margin-top: 16px; background: var(--bg); border: 1px solid var(--brand);">
            <strong style="color: var(--brand); display:block; margin-bottom: 8px; font-family: var(--font-mono);">${escapeHtml(caseData.repair.patchTitle)}:</strong>
            <p style="font-family: var(--font-mono); font-size: 11px; color: var(--muted);">${escapeHtml(caseData.repair.patchText)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRightRail() {
  const rail = document.getElementById("right-rail");
  if (!rail) {
    return;
  }

  rail.innerHTML = `
    <div class="rail-card">
      <h3>${escapeHtml(caseData.rightRail.phasesTitle)}</h3>
      <div class="anchor-list" id="tab-nav">
        ${caseData.rightRail.phases
          .map((phase, index) => {
            const demoHeader = phase.id === "benchmark"
              ? '<div style="font-size: 0.75rem; color: #666; margin: 20px 0 8px 0; text-transform: uppercase; letter-spacing: 1px;">Demo Sandbox</div>'
              : "";

            return `
              ${demoHeader}
              <a class="anchor-link ${index === 0 ? "active" : ""}" data-target="${escapeHtml(phase.id)}">
                <span>${escapeHtml(phase.label)}</span>
              </a>
            `;
          })
          .join("")}
      </div>
    </div>
    <div class="rail-card">
      <h3>${escapeHtml(caseData.rightRail.dimensionsTitle)}</h3>
      <div class="panel-tools" style="margin-bottom: 12px;">
        ${renderPills(caseData.rightRail.dimensions)}
      </div>
      <p style="font-size: 12px; color: var(--muted); line-height: 1.5;">${escapeHtml(caseData.rightRail.dimensionsDescription)}</p>
    </div>
    <div class="rail-card">
      <h3>${escapeHtml(caseData.rightRail.failureModesTitle)}</h3>
      <div class="panel-tools">${renderPills(caseData.rightRail.failureModes)}</div>
    </div>
  `;
}

function renderApp() {
  renderTopBar();
  renderBenchmark();
  renderAudience();
  renderCompare();
  renderDiagnose();
  renderRepair();
  renderRightRail();
}

function bindNavigation() {
  document.querySelectorAll("[data-target], [data-switch-target]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const target = button.getAttribute("data-target") || button.getAttribute("data-switch-target");
      showPanel(target);
    });
  });
}

function showPanel(id) {
  const currentActive = document.querySelector(".panel.active");
  const links = document.querySelectorAll(".anchor-link");
  links.forEach((link) => {
    link.classList.remove("active");
  });

  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  target.classList.add("active");

  const targetLink = document.querySelector(`.anchor-link[data-target="${id}"]`);
  if (targetLink) {
    targetLink.classList.add("active");
  }

  const switchId = ++panelSwitchToken;

  if (!currentActive || currentActive === target) {
    document.querySelectorAll(".panel").forEach((panel) => {
      if (panel !== target) {
        panel.classList.remove("active", "fade-in", "fade-out");
      }
    });
    target.classList.add("active");
    target.classList.add("fade-in");
    window.setTimeout(() => {
      if (switchId !== panelSwitchToken) {
        return;
      }
      target.classList.remove("fade-in");
    }, 250);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  currentActive.classList.add("fade-out");

  window.setTimeout(() => {
    if (switchId !== panelSwitchToken) {
      return;
    }

    document.querySelectorAll(".panel").forEach((panel) => {
      panel.classList.remove("active", "fade-in", "fade-out");
    });
    target.classList.add("active", "fade-in");

    window.setTimeout(() => {
      if (switchId !== panelSwitchToken) {
        return;
      }
      target.classList.remove("fade-in");
    }, 250);
  }, 250);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindActions() {
  setTimeout(() => {
    const inputDiagnoseBtn = document.getElementById("btn-run-diagnose-input");
    const exploreSampleBtn = document.getElementById("btn-explore-sample");
    const diagnoseBtn = document.getElementById("btn-run-diagnose");
    const repairBtn = document.getElementById("btn-run-repair");
    const copyRepairBtn = document.getElementById("btn-copy-repair");
    const toggleBtn = document.getElementById("btn-toggle-compare");

    if (inputDiagnoseBtn) {
      inputDiagnoseBtn.onclick = async () => {
        const didRun = await runDiagnose();
        if (didRun) {
          showPanel("diagnose");
        }
      };
    }

    if (exploreSampleBtn) {
      exploreSampleBtn.onclick = () => {
        showPanel("benchmark");
      };
    }

    if (diagnoseBtn) {
      diagnoseBtn.onclick = runDiagnose;
    }

    if (repairBtn) {
      repairBtn.onclick = generateRepair;
    }

    if (copyRepairBtn) {
      copyRepairBtn.onclick = copyAfterOutput;
    }

    if (toggleBtn) {
      toggleBtn.onclick = toggleCompare;
    }
  }, 0);
}

function clampScore(value) {
  return Math.max(0, Math.min(10, value));
}

function getScoreExplanation(label, score) {
  const templates = {
    "Claim Accuracy": {
      low: "The draft risks saying more than the source supports or blurring core findings.",
      mid: "The main claim is mostly aligned, but key wording should be tightened against the source.",
      high: "The claim tracks the source accurately and keeps the main finding intact."
    },
    "Causal Precision": {
      low: "Causal language appears stronger than the evidence allows.",
      mid: "Some causal caution is present, but the draft should distinguish association from proof more clearly.",
      high: "Causal strength is framed carefully and matches the evidence type."
    },
    "Scope Fidelity": {
      low: "The draft drops important population, setting, or time boundaries.",
      mid: "Some scope cues are present, but transfer limits need to be more visible.",
      high: "Scope conditions are clear enough to prevent overgeneralization."
    },
    "Method Transparency": {
      low: "The method or evidence type is missing, which can inflate reader certainty.",
      mid: "The evidence basis is hinted at, but the method signal should be easier to see.",
      high: "The draft gives readers enough method context to interpret the claim."
    },
    "Nuance Preservation": {
      low: "Important qualifications or conditional findings have been flattened.",
      mid: "The draft preserves some nuance, but conditional language could be stronger.",
      high: "Nuance, limitations, and conditional findings remain visible."
    },
    "Audience Calibration": {
      low: "The draft does not fit the intended practitioner audience's decision context.",
      mid: "The audience fit is workable, but the payoff could be more specific.",
      high: "The draft is well tuned to the audience and their use case."
    },
    Actionability: {
      low: "The next step is missing, vague, or not supported by the evidence.",
      mid: "The draft offers a usable next step, but it should be more bounded and audience-specific.",
      high: "The action cue is clear, useful, and appropriately limited by the evidence."
    },
    Clarity: {
      low: "The message is too dense, which may increase cognitive load and reduce readability.",
      mid: "The message is generally clear, but could be simplified for faster scanning.",
      high: "The message is clear and well-paced, making it easy to grasp key ideas quickly."
    },
    Engagement: {
      low: "The opening lacks a strong hook, which may reduce initial engagement.",
      mid: "The content has moderate engagement, but could benefit from stronger emotional or contrast elements.",
      high: "The content maintains attention well with a strong and engaging flow."
    },
    Structure: {
      low: "The structure is unclear, making it difficult for readers to follow the information.",
      mid: "The structure is acceptable, but transitions and segmentation could be improved.",
      high: "The structure is clear and well-organized, supporting easy navigation."
    },
    Credibility: {
      low: "The content lacks strong evidence signals, reducing perceived credibility.",
      mid: "Some credibility signals are present, but more data or references could strengthen trust.",
      high: "Strong use of data and evidence enhances credibility and trust."
    },
    "Visual Impact": {
      low: "The content lacks visual hierarchy, making it harder to scan quickly.",
      mid: "There is some visual structure, but it could be more defined.",
      high: "The content has strong visual rhythm and is easy to scan."
    },
    "CTA Strength": {
      low: "The call-to-action is unclear, leaving the reader without a next step.",
      mid: "There is some action guidance, but it could be more direct and compelling.",
      high: "The call-to-action is clear and effectively guides the reader."
    },
    "Audience Fit": {
      low: "The content does not align well with the target audience's needs.",
      mid: "The content partially matches the audience, but could be more tailored.",
      high: "The content is well-aligned with the target audience and their expectations."
    }
  };

  const group = templates[label];
  if (!group) {
    return "";
  }

  if (score <= 4) {
    return group.low;
  }

  if (score <= 7) {
    return group.mid;
  }

  return group.high;
}

function getOverallVerdict(averageScore) {
  if (averageScore <= 4) {
    return {
      text: "Critical Improvement Needed",
      color: "var(--bad)"
    };
  }

  if (averageScore <= 7) {
    return {
      text: "Solid Foundation, Optimization Recommended",
      color: "var(--warn)"
    };
  }

  return {
    text: "High-Performing Output",
    color: "var(--good)"
  };
}

function buildRepairSuggestions(scoreMap) {
  const suggestionLibrary = [
    {
      key: "clarity",
      label: "Claim Accuracy",
      build: () => "Improve Claim Accuracy: Tighten wording so the claim matches what the source actually says."
    },
    {
      key: "engagement",
      label: "Causal Precision",
      build: () => "Improve Causal Precision: Replace unsupported causal verbs with association or evidence-limited language."
    },
    {
      key: "structure",
      label: "Scope Fidelity",
      build: () => "Improve Scope Fidelity: Restore the population, setting, time period, or boundary condition."
    },
    {
      key: "credibility",
      label: "Method Transparency",
      build: () => "Improve Method Transparency: Add a visible method or evidence signal such as survey, interview, experiment, or review."
    },
    {
      key: "visual",
      label: "Nuance Preservation",
      build: () => "Improve Nuance Preservation: Keep limitations, conditional findings, and uncertainty visible."
    },
    {
      key: "cta",
      label: "Actionability",
      build: () => "Improve Actionability: Add a concrete next step that is feasible for the intended practitioner audience."
    },
    {
      key: "audience",
      label: "Audience Calibration",
      build: () => "Improve Audience Calibration: Rewrite key lines for the audience's role, constraints, and decision context."
    }
  ];

  const ranked = suggestionLibrary
    .map((item) => ({ ...item, value: scoreMap[item.key] }))
    .sort((a, b) => a.value - b.value);

  return ranked
    .filter((item, index) => item.value < 7 || index < 2)
    .slice(0, 4)
    .map((item) => item.build());
}

function getCompareInsights() {
  return [
    "Original output is text-heavy and summary-led; the repaired version uses scannable sections.",
    "Repaired version introduces a stronger practical takeaway, which lifts perceived usefulness.",
    "Logical flow improves when the repaired version splits insight, implication, and limitation into distinct units.",
    "The repaired version feels more carousel-ready because each message block has a clearer visual role."
  ];
}

function generateLocalInsight(input, scoreMap) {
  const lowerInput = input.toLowerCase();
  let topic = "General Academic";

  if (lowerInput.includes("climate") || lowerInput.includes("green")) {
    topic = "Environmental";
  } else if (lowerInput.includes("health") || lowerInput.includes("doctor")) {
    topic = "Medical";
  }

  const weakDimension = Object.entries(scoreMap)
    .sort((a, b) => a[1] - b[1])[0]?.[0] || "structure";

  const repairMap = {
    clarity: "Tighten the main claim so it stays closer to the source evidence.",
    engagement: "Downgrade causal language where the source does not establish causation.",
    structure: "Restore the relevant population, setting, or scope condition.",
    credibility: "Add a visible method signal so readers know how the evidence was produced.",
    visual: "Preserve limitations and conditional findings instead of flattening the nuance.",
    cta: "Add a practical next step that stays within the evidence limits.",
    audience: "Rewrite key lines with a clearer audience payoff for practitioners."
  };

  return {
    insight: `The provided ${topic} content has usable source material, but it needs stronger fidelity cues before it becomes practitioner-ready.`,
    repair: repairMap[weakDimension]
  };
}

function generateDynamicScores(input) {
  const base = simulateDiagnoseScores(input, caseData);
  const text = input.trim();
  const lowerText = text.toLowerCase();
  const sections = text.split(/\n\s*\n/).filter(Boolean).length;
  const hasNumbers = /\d/.test(text);
  const hasCTA = /(learn more|sign up|read more|download|contact|explore|apply|what to do|take away)/i.test(text);
  const hasHook = /(\?|why it matters|here's the key|bottom line)/i.test(text);
  const jitter = () => Math.floor(Math.random() * 3) - 1;

  const scoreMap = {
    clarity: clampScore(Math.max(4, Math.min(9, base.clarity + jitter()))),
    engagement: clampScore(Math.max(4, Math.min(9, base.engagement + (hasHook ? 1 : 0) + jitter()))),
    structure: clampScore(Math.max(4, Math.min(9, base.structure + (sections >= 2 ? 1 : 0) + jitter()))),
    credibility: clampScore(Math.max(4, Math.min(9, base.credibility + (hasNumbers ? 1 : 0) + jitter()))),
    visual: clampScore(Math.max(4, Math.min(9, base.visual + (sections >= 3 ? 1 : 0) + jitter()))),
    cta: clampScore(Math.max(4, Math.min(9, base.cta + (hasCTA ? 2 : 0) + jitter()))),
    audience: clampScore(Math.max(4, Math.min(9, base.audience + ((lowerText.includes("policy") || lowerText.includes("practitioner")) ? 1 : 0) + jitter())))
  };

  return scoreMap;
}

function simulateDiagnoseScores(input, data) {
  const text = input.trim();
  const lowerText = text.toLowerCase();
  const sections = text
    .split(/\n\s*\n/)
    .map((section) => section.trim())
    .filter(Boolean);
  const bulletCount = (text.match(/(^|\n)\s*([-*]|\d+\.)\s+/g) || []).length;
  const sentenceCount = (text.match(/[.!?]+/g) || []).length;
  const numberCount = (text.match(/\d+/g) || []).length;
  const ctaKeywords = ["learn more", "sign up", "read more", "try", "download", "contact", "explore", "act now"];
  const audienceKeywords = ["policy", "practitioner", "analyst", "public", "government", "leader", "decision"];
  const visualKeywords = ["slide", "carousel", "step", "key takeaway", "why it matters", "bottom line"];
  const credibilityKeywords = ["study", "data", "survey", "evidence", "research", "sample", "federal"];

  let clarity = 5;
  if (text.length < 50) clarity -= 2;
  if (text.length >= 80 && text.length <= 500) clarity += 2;
  if (sentenceCount > 0 && text.length / sentenceCount < 160) clarity += 1;
  if (text.length > 900) clarity -= 1;

  let engagement = 4;
  if (text.includes("?")) engagement += 2;
  if (visualKeywords.some((keyword) => lowerText.includes(keyword))) engagement += 2;
  if (lowerText.includes("why it matters") || lowerText.includes("here's the key")) engagement += 1;
  if (text.length < 50) engagement -= 1;

  let structure = 3;
  if (sections.length >= 3) structure += 3;
  if (bulletCount >= 2) structure += 2;
  if (visualKeywords.some((keyword) => lowerText.includes(keyword))) structure += 1;
  if (sections.length <= 1 && bulletCount === 0) structure -= 1;

  let credibility = 4;
  if (numberCount > 0) credibility += 2;
  if (credibilityKeywords.some((keyword) => lowerText.includes(keyword))) credibility += 2;
  if (lowerText.includes("correlational") || lowerText.includes("not proof of causation") || lowerText.includes("limitation")) credibility += 1;

  let visual = 3;
  if (sections.length >= 4) visual += 3;
  if (bulletCount >= 3) visual += 2;
  if (visualKeywords.some((keyword) => lowerText.includes(keyword))) visual += 2;

  let cta = 2;
  if (ctaKeywords.some((keyword) => lowerText.includes(keyword))) cta += 5;
  if (lowerText.includes("what practitioners can take away") || lowerText.includes("what to do")) cta += 2;
  if (lowerText.includes("focus on") || lowerText.includes("should")) cta += 1;

  let audience = 4;
  if (audienceKeywords.some((keyword) => lowerText.includes(keyword))) audience += 2;
  if (data.audience.cards.some((card) => {
    const title = card.title || card.outputType || "";
    const description = card.description || card.audience || "";
    const firstWord = description.split(" ")[0] || "";
    return (title && lowerText.includes(title.toLowerCase())) || (firstWord && lowerText.includes(firstWord.toLowerCase()));
  })) {
    audience += 1;
  }
  if (lowerText.includes("policy") || lowerText.includes("practitioner")) audience += 1;
  if (text.length > 900) audience -= 1;

  return {
    clarity: clampScore(clarity),
    engagement: clampScore(engagement),
    structure: clampScore(structure),
    credibility: clampScore(credibility),
    visual: clampScore(visual),
    cta: clampScore(cta),
    audience: clampScore(audience)
  };
}

async function renderDiagnoseResults(scoreRows, insightText, repairText, scoreMap) {
  const scoresBox = document.getElementById("diagnoseScores");
  const liveScore = document.getElementById("liveScore");
  const aiWhyLowScore = document.getElementById("aiWhyLowScore");
  const aiRepairPatch = document.getElementById("aiRepairPatch");

  if (scoresBox) {
    const averageScore = scoreRows.reduce((sum, score) => sum + score.value, 0) / scoreRows.length;
    const verdict = getOverallVerdict(averageScore);
    scoresBox.innerHTML = scoreRows
      .map((score) => {
        const width = `${score.value * 10}%`;
        return `
          <div style="margin-bottom: 16px;">
            <div class="score-row" style="margin-bottom: 6px;">
              <span>${escapeHtml(score.label)}</span>
              <div>
                <div class="bar"><div class="fill blue" style="width: ${width}"></div></div>
                ${escapeHtml(`${score.value}/10`)}
              </div>
            </div>
            <p id="score-expl-${escapeHtml(score.label.toLowerCase().replace(/\s+/g, "-"))}" style="margin: 0; color: var(--muted); font-size: 12px; line-height: 1.5; min-height: 18px;"></p>
          </div>
        `;
      })
      .join("");

    scoresBox.innerHTML = `
      <div style="margin-bottom: 16px;">
        <p style="margin: 0 0 6px; font-size: 12px; color: var(--muted); font-family: var(--font-mono); text-transform: uppercase;">Overall Verdict</p>
        <p id="diagnoseVerdict" style="margin: 0; font-weight: 700; color: ${verdict.color}; min-height: 20px;"></p>
      </div>
      ${scoresBox.innerHTML}
    `;

    await typeWriter("diagnoseVerdict", verdict.text, 14);

    for (const score of scoreRows) {
      const explanationId = `score-expl-${score.label.toLowerCase().replace(/\s+/g, "-")}`;
      const explanation = getScoreExplanation(score.label, score.value);
      // eslint-disable-next-line no-await-in-loop
      await typeWriter(explanationId, explanation, 10);
    }
  }

  if (liveScore) {
    liveScore.textContent = `Demo Score -> Audience:${scoreMap.audience} | Action:${scoreMap.cta} | Scope:${scoreMap.structure} | Method:${scoreMap.credibility}`;
  }

  if (aiWhyLowScore) {
    await typeWriter(aiWhyLowScore, insightText, 12);
  }

  if (aiRepairPatch) {
    await typeWriter(aiRepairPatch, repairText, 12);
  }
}

async function runDiagnose() {
  const inputElement = document.getElementById("userInput");
  const input = inputElement ? inputElement.value.trim() : "";
  const diagnoseButton = document.getElementById("btn-run-diagnose");
  const scoresBox = document.getElementById("diagnoseScores");
  const resultBox = document.getElementById("diagnoseResult");
  const liveScore = document.getElementById("liveScore");
  const aiWhyLowScore = document.getElementById("aiWhyLowScore");
  const aiRepairPatch = document.getElementById("aiRepairPatch");

  if (!input) {
    alert("Paste your content to run Diagnose.");
    return false;
  }

  const isTryYourOwnMode = document.querySelector(".panel.active")?.id === "try-your-own";

  showPanel("diagnose");
  caseData.text = input;
  caseData.repair.beforeText = input;

  const beforeOutput = document.getElementById("beforeOutput");
  if (beforeOutput) {
    beforeOutput.textContent = input;
  }

  const originalLabel = diagnoseButton ? diagnoseButton.textContent : "";
  if (diagnoseButton) {
    diagnoseButton.disabled = true;
    diagnoseButton.textContent = "Analyzing...";
  }

  if (scoresBox) {
    scoresBox.innerHTML = `<p style="color: var(--muted); margin: 0;">Analyzing content structure...</p>`;
  }

  if (resultBox) {
    let live = document.getElementById("liveDiagnose");
    if (!live) {
      live = document.createElement("div");
      live.id = "liveDiagnose";
      live.style.marginTop = "12px";
      live.style.color = "var(--brand)";
      live.style.whiteSpace = "pre-wrap";
      resultBox.appendChild(live);
    }
    live.textContent = "";
  }

  if (liveScore) {
    liveScore.textContent = "";
  }

  if (aiWhyLowScore) {
    aiWhyLowScore.textContent = "Generating demo analysis...";
  }

  if (aiRepairPatch) {
    aiRepairPatch.textContent = "Preparing strategic repair patch...";
  }

  try {
    if (scoresBox) {
      scoresBox.innerHTML = `<p style="color: var(--muted); margin: 0;">Analyzing structure...</p>`;
    }
    await wait(600);

    if (scoresBox) {
      scoresBox.innerHTML = `<p style="color: var(--muted); margin: 0;">Evaluating audience fit...</p>`;
    }
    await wait(600);

    const issues = [];
    const lowerInput = input.toLowerCase();
    const localScoreMap = isTryYourOwnMode
      ? generateDynamicScores(input)
      : simulateDiagnoseScores(input, caseData);

    if (!lowerInput.includes("should") && !lowerInput.includes("next step") && !lowerInput.includes("practitioner")) {
      issues.push("weak_actionability");
    }

    if (!lowerInput.includes("limitation") && !lowerInput.includes("limit")) {
      issues.push("missing_limitation");
    }

    if (localScoreMap.structure <= 4) {
      issues.push("scope_or_structure_gap");
    }

    if (localScoreMap.audience <= 5) {
      issues.push("weak_audience_calibration");
    }

    const scoreMap = localScoreMap;
    const scoreRows = [
      { label: "Claim Accuracy", value: scoreMap.clarity },
      { label: "Causal Precision", value: scoreMap.engagement },
      { label: "Scope Fidelity", value: scoreMap.structure },
      { label: "Method Transparency", value: scoreMap.credibility },
      { label: "Nuance Preservation", value: scoreMap.visual },
      { label: "Audience Calibration", value: scoreMap.audience },
      { label: "Actionability", value: scoreMap.cta }
    ];

    latestDiagnoseState = {
      input,
      issues: [...issues],
      scores: { ...scoreMap },
      rows: scoreRows
    };

    if (resultBox) {
      let live = document.getElementById("liveDiagnose");

      if (!live) {
        live = document.createElement("div");
        live.id = "liveDiagnose";
        live.style.marginTop = "12px";
        live.style.color = "var(--brand)";
        resultBox.appendChild(live);
      }

      live.style.whiteSpace = "pre-wrap";
      const issueList = latestDiagnoseState.issues;
      const issueText = `Demo issues: ${issueList.length ? issueList.join(", ") : "None"}`;
      await typeWriter(live, issueText, 12);
    }

    const fallback = generateLocalInsight(input, scoreMap);
    const insightText = fallback.insight;
    const repairText = fallback.repair;

    await renderDiagnoseResults(scoreRows, insightText, repairText, scoreMap);
  } finally {
    if (diagnoseButton) {
      diagnoseButton.disabled = false;
      diagnoseButton.textContent = originalLabel;
    }
  }

  return true;
}

async function generateRepair() {
  const input = document.getElementById("userInput")?.value.trim() || "";
  const beforeOutput = document.getElementById("beforeOutput");
  const outputBox = document.getElementById("afterOutput");
  const repairButton = document.getElementById("btn-run-repair");

  if (!outputBox) {
    return;
  }

  if (!input) {
    alert("Paste your content to generate Repair.");
    return;
  }

  caseData.text = input;
  caseData.repair.beforeText = input;

  if (beforeOutput) {
    beforeOutput.textContent = input;
  }

  const originalLabel = repairButton ? repairButton.textContent : "";
  if (repairButton) {
    repairButton.disabled = true;
    repairButton.textContent = "Generating...";
  }

  try {
    outputBox.textContent = "Generating strategic repair patches...";
    await wait(1200);

    const activeScores = latestDiagnoseState ? latestDiagnoseState.scores : simulateDiagnoseScores(input, caseData);
    const suggestions = buildRepairSuggestions(activeScores);
    const repaired = ["Suggestions:", "", ...suggestions.map((suggestion) => `* ${suggestion}`)].join("\n");

    await typeWriter(outputBox, repaired, 10);
  } finally {
    if (repairButton) {
      repairButton.disabled = false;
      repairButton.textContent = originalLabel;
    }
  }
}

async function copyAfterOutput() {
  const outputBox = document.getElementById("afterOutput");
  const copyButton = document.getElementById("btn-copy-repair");

  if (!outputBox || !copyButton) {
    return;
  }

  const text = outputBox.textContent || "";

  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        fallbackCopyText(text);
      }
    } else {
      fallbackCopyText(text);
    }

    const originalLabel = copyButton.textContent;
    copyButton.textContent = "Copied!";
    window.setTimeout(() => {
      copyButton.textContent = originalLabel;
    }, 1200);
  } catch (error) {
    console.error("Copy failed", error);
  }
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function toggleCompare() {
  const before = document.getElementById("before");
  const after = document.getElementById("after");

  if (!before || !after) {
    return;
  }

  const beforeActive = before.classList.toggle("before-state");
  const afterActive = after.classList.toggle("after-state");

  if (!beforeActive && !afterActive) {
    before.classList.add("before-state");
    after.classList.add("after-state");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp();

  setTimeout(() => {
    bindNavigation();
    bindActions();
  }, 0);
});

window.showPanel = showPanel;
window.switchTab = showPanel;
window.runDiagnose = runDiagnose;
window.generateRepair = generateRepair;
window.toggleCompare = toggleCompare;
