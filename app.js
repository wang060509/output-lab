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
      { label: "Claim Accuracy", value: 3, max: 5, color: "blue" },
      { label: "Causal Precision", value: 2, max: 5, color: "red" },
      { label: "Scope Fidelity", value: 3, max: 5, color: "blue" },
      { label: "Method Transparency", value: 2, max: 5, color: "red" },
      { label: "Nuance Preservation", value: 3, max: 5, color: "blue" },
      { label: "Audience Calibration", value: 4, max: 5, color: "blue" },
      { label: "Actionability", value: 2, max: 5, color: "red" }
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
    afterLabel: "Repaired Version",
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
      { label: "Claim Accuracy", value: 3, max: 5, color: "blue" },
      { label: "Causal Precision", value: 2, max: 5, color: "red" },
      { label: "Scope Fidelity", value: 3, max: 5, color: "blue" },
      { label: "Method Transparency", value: 2, max: 5, color: "red" },
      { label: "Nuance Preservation", value: 3, max: 5, color: "blue" },
      { label: "Audience Calibration", value: 4, max: 5, color: "blue" },
      { label: "Actionability", value: 2, max: 5, color: "red" }
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
    afterLabel: "Repaired Version",
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

const outputTypeProfiles = {
  "Policy Brief": {
    category: "Decision & Policy Outputs",
    audience: "Policy staff, program leads, and agency executives",
    mustInclude: "problem framing, key findings, limitations, implications, and recommendations",
    mainRisk: "Turning bounded evidence into broad policy prescription.",
    repairFocus: "Keep recommendations decision-ready while restoring evidence scope, limits, and causal caution."
  },
  "Policy Memo": {
    category: "Decision & Policy Outputs",
    audience: "Decision-makers or internal leadership audiences",
    mustInclude: "decision context, recommendation, evidence basis, tradeoffs, and next steps",
    mainRisk: "Overstating what the source supports for one decision context.",
    repairFocus: "Clarify the decision, narrow the recommendation, and make tradeoffs visible."
  },
  "Executive Summary": {
    category: "Decision & Policy Outputs",
    audience: "Senior leaders who need the core takeaway quickly",
    mustInclude: "purpose, headline findings, scope, implications, and limits",
    mainRisk: "Compressing away scope, method, or uncertainty.",
    repairFocus: "Preserve the minimum evidence signals while making the takeaway fast to scan."
  },
  "Q&A Guide": {
    category: "Public Communication Outputs",
    audience: "Practitioners, public-facing staff, and informed stakeholders",
    mustInclude: "audience questions, plain answers, evidence cues, caveats, and next-step guidance",
    mainRisk: "Giving confident answers where the source only supports a qualified response.",
    repairFocus: "Answer likely questions plainly while keeping caveats and evidence limits attached."
  },
  "Fact Sheet": {
    category: "Public Communication Outputs",
    audience: "Practitioners, advocates, media, and public-facing staff",
    mustInclude: "verified facts, definitions, source cues, concise context, and limits",
    mainRisk: "Presenting interpretive claims as settled facts.",
    repairFocus: "Separate facts from interpretations and keep every number or claim source-grounded."
  },
  "Plain Language Explainer": {
    category: "Public Communication Outputs",
    audience: "Non-specialist readers and cross-functional teams",
    mustInclude: "simple framing, key terms, plain evidence summary, why it matters, and limits",
    mainRisk: "Simplifying the source until nuance or uncertainty disappears.",
    repairFocus: "Reduce jargon without removing conditions, uncertainty, or method context."
  },
  "Op-Ed": {
    category: "Public Communication Outputs",
    audience: "Public readers, civic leaders, and opinion-page audiences",
    mustInclude: "clear thesis, evidence-backed argument, public relevance, counterpoint, and call to action",
    mainRisk: "Letting persuasion inflate certainty or causal strength.",
    repairFocus: "Keep the argument vivid but tether every persuasive claim to the evidence."
  },
  "Letter to the Editor": {
    category: "Public Communication Outputs",
    audience: "Editors, public readers, and civic stakeholders",
    mustInclude: "timely hook, concise claim, evidence cue, local relevance, and bounded ask",
    mainRisk: "Oversimplifying or overgeneralizing to fit a short format.",
    repairFocus: "Make one narrow public point and preserve the source boundary in compact wording."
  },
  "Press Release": {
    category: "Public Communication Outputs",
    audience: "Media, communications teams, and public stakeholders",
    mustInclude: "news hook, accurate summary, quote-ready language, source context, and caveat",
    mainRisk: "Inflating novelty, certainty, or impact for attention.",
    repairFocus: "Keep the announcement compelling while removing hype and unsupported impact claims."
  },
  "Elevator Pitch": {
    category: "Professional & Digital Outputs",
    audience: "Busy decision-makers, partners, or professional peers",
    mustInclude: "problem, core insight, evidence cue, audience payoff, and next step",
    mainRisk: "Dropping evidence limits in pursuit of speed.",
    repairFocus: "Make the pitch concise, specific, and bounded by what the source can support."
  },
  "Report Outline": {
    category: "Decision & Policy Outputs",
    audience: "Analysts, project teams, and report authors",
    mustInclude: "section sequence, research questions, evidence needs, limitations, and decision use",
    mainRisk: "Creating a polished structure that implies analysis not present in the source.",
    repairFocus: "Align sections with available evidence and mark where detail is missing or uncertain."
  },
  "Technical Note": {
    category: "Decision & Policy Outputs",
    audience: "Analysts, evaluators, and implementation teams",
    mustInclude: "method, data or source, assumptions, limitations, and technical implications",
    mainRisk: "Erasing method detail that changes interpretation.",
    repairFocus: "Restore method, assumptions, and interpretation limits before giving technical implications."
  },
  "Infographic Brief": {
    category: "Professional & Digital Outputs",
    audience: "Visual skimmers, policy-practice readers, and communications teams",
    mustInclude: "visual hierarchy, key data or claims, source notes, captions, and takeaway",
    mainRisk: "Making visuals cleaner by making claims less precise.",
    repairFocus: "Convert claims into visual-ready chunks while preserving labels, caveats, and source notes."
  },
  "Video Script": {
    category: "Professional & Digital Outputs",
    audience: "Viewers who need a short spoken explanation",
    mustInclude: "hook, narrative beats, evidence cue, plain-language explanation, and closing action",
    mainRisk: "Turning spoken clarity into unsupported certainty.",
    repairFocus: "Make the script conversational while keeping evidence limits audible."
  },
  "LinkedIn Post": {
    category: "Professional & Digital Outputs",
    audience: "Professional networks and policy-practice communities",
    mustInclude: "hook, takeaway, evidence cue, practical implication, and limitation",
    mainRisk: "Making a shareable claim stronger than the paper allows.",
    repairFocus: "Sharpen the hook and takeaway without overstating the evidence."
  },
  "LinkedIn Carousel": {
    category: "Professional & Digital Outputs",
    audience: "Skimming professional audiences",
    mustInclude: "slide sequence, one key message per slide, evidence cue, limitation, and takeaway",
    mainRisk: "Sacrificing nuance for slide-friendly simplicity.",
    repairFocus: "Break the draft into slide-sized claims with one evidence or caveat signal per move."
  },
  "Position Article": {
    category: "Professional & Digital Outputs",
    audience: "Professional readers, policy communities, and organizational stakeholders",
    mustInclude: "position, evidence-backed rationale, implications, counterpoint, and bounded recommendation",
    mainRisk: "Treating a defensible position as proven by the source alone.",
    repairFocus: "Strengthen the stance while distinguishing evidence, interpretation, and recommendation."
  },
  "Mechanism Map": {
    category: "Decision & Policy Outputs",
    audience: "Policy designers, analysts, and implementation teams",
    mustInclude: "actors, pathway, conditions, evidence strength, and uncertainty",
    mainRisk: "Turning hypothesized mechanisms into proven causal chains.",
    repairFocus: "Label actors, pathways, and conditions without implying stronger causality than the source supports."
  }
};

const outputTypeGroups = [
  {
    category: "Decision & Policy Outputs",
    description: "Decision-support formats for briefs, memos, summaries, outlines, technical interpretation, and causal pathway thinking.",
    types: ["Policy Brief", "Policy Memo", "Executive Summary", "Report Outline", "Technical Note", "Mechanism Map"],
    commonRisk: "Recommendations can outrun the source evidence.",
    qaFocus: "Check decision context, evidence limits, method signals, and bounded next steps."
  },
  {
    category: "Public Communication Outputs",
    description: "Public-facing formats that translate evidence for stakeholders, media, civic audiences, and non-specialist readers.",
    types: ["Fact Sheet", "Plain Language Explainer", "Press Release", "Op-Ed", "Letter to the Editor", "Q&A Guide"],
    commonRisk: "Clarity or persuasion can flatten uncertainty.",
    qaFocus: "Separate facts from interpretation and keep caveats visible in plain language."
  },
  {
    category: "Professional & Digital Outputs",
    description: "Compact professional formats for spoken, visual, social, and thought-leadership communication.",
    types: ["Elevator Pitch", "Infographic Brief", "Video Script", "LinkedIn Post", "LinkedIn Carousel", "Position Article"],
    commonRisk: "Shareability can make claims too broad or too confident.",
    qaFocus: "Make the format scannable while preserving source cues, scope, and limitations."
  }
];

window.outputTypeProfiles = outputTypeProfiles;

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
const AUDIT_HISTORY_KEY = "output-lab-audit-history";
const MAX_AUDIT_HISTORY = 10;
let latestDiagnoseState = null;
let typeWriterToken = 0;
let panelSwitchToken = 0;
let isApiRepair = false;

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

function readAuditHistory() {
  try {
    const storedHistory = window.localStorage?.getItem(AUDIT_HISTORY_KEY);
    if (!storedHistory) {
      return [];
    }

    const parsedHistory = JSON.parse(storedHistory);
    return Array.isArray(parsedHistory) ? parsedHistory.filter(isPlainObject) : [];
  } catch (error) {
    return [];
  }
}

function writeAuditHistory(history) {
  try {
    const trimmedHistory = Array.isArray(history) ? history.slice(0, MAX_AUDIT_HISTORY) : [];
    window.localStorage?.setItem(AUDIT_HISTORY_KEY, JSON.stringify(trimmedHistory));
  } catch (error) {
    console.warn("Audit history could not be saved.", error);
  }
}

function createAuditRecordId() {
  return `audit-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function formatAuditTimestamp(timestamp) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return "Recent";
  }

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function formatAverageScore(score) {
  const numericScore = Number(score);
  return Number.isFinite(numericScore) ? numericScore.toFixed(1) : "0.0";
}

function getScoreRowsFromMap(scores = {}) {
  return [
    { label: "Claim Accuracy", key: "claimAccuracy" },
    { label: "Causal Precision", key: "causalPrecision" },
    { label: "Scope Fidelity", key: "scopeFidelity" },
    { label: "Method Transparency", key: "methodTransparency" },
    { label: "Nuance Preservation", key: "nuancePreservation" },
    { label: "Audience Calibration", key: "audienceCalibration" },
    { label: "Actionability", key: "actionability" }
  ].map((score) => ({
    label: score.label,
    value: clampScore(Number(scores[score.key]) || 3)
  }));
}

function getAverageScore(scoreRows) {
  if (!scoreRows.length) {
    return 0;
  }

  return scoreRows.reduce((sum, score) => sum + score.value, 0) / scoreRows.length;
}

function getAuditProfile(profile = {}) {
  return {
    audience: profile.audience || "",
    mainRisk: profile.mainRisk || "",
    repairFocus: profile.repairFocus || ""
  };
}

function renderSelectedOutputTypeMeta(outputType, profile = {}) {
  const selectedOutputMeta = document.getElementById("selectedOutputTypeMeta");
  if (!selectedOutputMeta) {
    return;
  }

  selectedOutputMeta.innerHTML = `
    <p><strong>Selected Output Type:</strong> ${escapeHtml(outputType)}</p>
    <p><strong>Audience:</strong> ${escapeHtml(profile.audience || "")}</p>
    <p><strong>Main Fidelity Risk:</strong> ${escapeHtml(profile.mainRisk || "")}</p>
  `;
}

function renderAuditHistoryList(history) {
  if (!history.length) {
    return `<p class="history-empty">No audits yet.</p>`;
  }

  return history
    .map((record) => {
      const outputType = record.outputType || "Audit";
      return `
        <button class="history-item" type="button" data-history-id="${escapeHtml(record.id || "")}">
          <span class="history-item-main">${escapeHtml(outputType)} · ${escapeHtml(formatAverageScore(record.overallAverage))}/5</span>
          <span class="history-item-time">${escapeHtml(formatAuditTimestamp(record.timestamp))}</span>
        </button>
      `;
    })
    .join("");
}

function renderHistoryRail() {
  const historyList = document.getElementById("auditHistoryList");
  const clearButton = document.getElementById("btn-clear-history");
  if (!historyList) {
    return;
  }

  const history = readAuditHistory();
  historyList.innerHTML = renderAuditHistoryList(history);

  if (clearButton) {
    clearButton.disabled = history.length === 0;
  }
}

function saveDiagnoseHistoryRecord(state) {
  const scoreRows = state.rows || getScoreRowsFromMap(state.scores);
  const overallAverage = getAverageScore(scoreRows);
  const overallVerdict = getOverallVerdict(overallAverage);
  const id = state.historyRecordId || createAuditRecordId();
  const record = {
    id,
    timestamp: new Date().toISOString(),
    outputType: state.outputType,
    input: state.input,
    scores: { ...state.scores },
    issues: [...state.issues],
    overallAverage,
    overallVerdict: overallVerdict.text,
    profile: getAuditProfile(state.profile),
    scoreJustifications: state.scoreJustifications || {}
  };
  const history = readAuditHistory().filter((item) => item.id !== id);

  history.unshift(record);
  writeAuditHistory(history);
  renderHistoryRail();

  return id;
}

function updateLatestHistoryRepair(repairText) {
  if (!latestDiagnoseState) {
    return;
  }

  const history = readAuditHistory();
  const targetIndex = history.findIndex((record) => record.id === latestDiagnoseState.historyRecordId);
  const fallbackIndex = targetIndex === -1
    ? history.findIndex((record) => record.input === latestDiagnoseState.input && record.outputType === latestDiagnoseState.outputType)
    : targetIndex;

  if (fallbackIndex === -1) {
    return;
  }

  history[fallbackIndex] = {
    ...history[fallbackIndex],
    repairText,
    isApiRepair
  };
  latestDiagnoseState.repairText = repairText;
  writeAuditHistory(history);
  renderHistoryRail();
}

function clearAuditHistory() {
  try {
    window.localStorage?.removeItem(AUDIT_HISTORY_KEY);
  } catch (error) {
    console.warn("Audit history could not be cleared.", error);
  }

  renderHistoryRail();
}

function restoreAuditRecord(recordId) {
  const record = readAuditHistory().find((item) => item.id === recordId);
  if (!record) {
    return;
  }

  const outputType = record.outputType || "Policy Brief";
  const input = record.input || "";
  const profile = outputTypeProfiles[outputType] || record.profile || {};
  const scoreRows = getScoreRowsFromMap(record.scores);
  const overallAverage = Number.isFinite(Number(record.overallAverage))
    ? Number(record.overallAverage)
    : getAverageScore(scoreRows);
  const verdict = getOverallVerdict(overallAverage);
  
  // Restore or generate scoreJustifications (with fallback for old records)
  let scoreJustifications = record.scoreJustifications;
  if (!scoreJustifications || typeof scoreJustifications !== "object" || Object.keys(scoreJustifications).length === 0) {
    // Fallback: generate justifications from saved scores for old records
    scoreJustifications = createScoreJustifications(input, record.scores || {}, outputType, profile);
  }
  
  const inputElement = document.getElementById("userInput");
  const outputTypeSelect = document.getElementById("outputTypeSelect");
  const beforeOutput = document.getElementById("beforeOutput");
  const afterOutput = document.getElementById("afterOutput");
  const scoresBox = document.getElementById("diagnoseScores");
  const liveScore = document.getElementById("liveScore");
  const liveDiagnose = document.getElementById("liveDiagnose");
  const aiWhyLowScore = document.getElementById("aiWhyLowScore");
  const aiRepairPatch = document.getElementById("aiRepairPatch");
  const issues = Array.isArray(record.issues) ? [...record.issues] : [];

  typeWriterToken += 1;

  if (inputElement) {
    inputElement.value = input;
  }

  if (outputTypeSelect) {
    outputTypeSelect.value = outputType;
  }

  caseData.text = input;
  caseData.repair.beforeText = input;

  renderSelectedOutputTypeMeta(outputType, { ...profile, ...record.profile });

  if (beforeOutput) {
    beforeOutput.textContent = input;
  }

  if (afterOutput) {
    afterOutput.textContent = record.repairText || "No repair saved for this audit yet.";
  }

  // Restore and show/hide disclaimer based on whether repair was from API
  isApiRepair = record.isApiRepair || false;
  const disclaimerElement = document.getElementById("repairDisclaimer");
  if (disclaimerElement) {
    disclaimerElement.style.display = isApiRepair ? "block" : "none";
  }

  if (scoresBox) {
    const scoreLabelsToKeys = {
      "Claim Accuracy": "claimAccuracy",
      "Causal Precision": "causalPrecision",
      "Scope Fidelity": "scopeFidelity",
      "Method Transparency": "methodTransparency",
      "Nuance Preservation": "nuancePreservation",
      "Audience Calibration": "audienceCalibration",
      "Actionability": "actionability"
    };
    
    scoresBox.innerHTML = `
      <div style="margin-bottom: 16px;">
        <p style="margin: 0 0 6px; font-size: 12px; color: var(--muted); font-family: var(--font-mono); text-transform: uppercase;">Overall Verdict</p>
        <p id="diagnoseVerdict" style="margin: 0; font-weight: 700; color: ${verdict.color}; min-height: 20px;">${escapeHtml(verdict.text)}</p>
        <button id="btn-copy-audit-summary" class="action secondary" type="button" style="margin-top: 8px;">Copy Audit Summary</button>
      </div>
      ${scoreRows
        .map((score) => {
          const width = `${(score.value / 5) * 100}%`;
          const color = getScoreColor(score.value);
          const justificationKey = scoreLabelsToKeys[score.label];
          const justification = justificationKey ? (scoreJustifications[justificationKey] || getScoreExplanation(score.label, score.value)) : getScoreExplanation(score.label, score.value);
          return `
            <div style="margin-bottom: 16px;">
              <div class="score-row" style="margin-bottom: 6px;">
                <span>${escapeHtml(score.label)}</span>
                <div>
                  <div class="bar"><div class="fill ${escapeHtml(color)}" style="width: ${width}"></div></div>
                  ${escapeHtml(`${score.value}/5`)}
                </div>
              </div>
              <p style="margin: 0; color: var(--muted); font-size: 12px; line-height: 1.5; min-height: 18px;">${escapeHtml(justification)}</p>
            </div>
          `;
        })
        .join("")}
    `;
  }

  if (liveScore) {
    liveScore.textContent = "Restored from Recent Audits";
  }

  if (liveDiagnose) {
    liveDiagnose.textContent = `Rule-based flags: ${issues.length ? issues.join(", ") : "None"}`;
  }

  const fallback = generateLocalInsight(input, record.scores || {});
  if (aiWhyLowScore) {
    aiWhyLowScore.textContent = fallback.insight;
  }

  if (aiRepairPatch) {
    aiRepairPatch.textContent = fallback.repair;
  }

  latestDiagnoseState = {
    input,
    outputType,
    profile,
    issues,
    scores: { ...(record.scores || {}) },
    rows: scoreRows,
    historyRecordId: record.id,
    repairText: record.repairText || "",
    scoreJustifications
  };

  showPanel("diagnose");

  bindActions();
}

function bindHistoryActions() {
  const rail = document.getElementById("right-rail");
  if (!rail || rail.dataset.historyBound === "true") {
    return;
  }

  rail.dataset.historyBound = "true";
  rail.addEventListener("click", (event) => {
    const clearButton = event.target.closest("#btn-clear-history");
    if (clearButton) {
      clearAuditHistory();
      return;
    }

    const historyButton = event.target.closest("[data-history-id]");
    if (historyButton) {
      restoreAuditRecord(historyButton.getAttribute("data-history-id"));
    }
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
    if (!element.isConnected) {
      return;
    }

    if (token !== typeWriterToken) {
      return;
    }

    element.textContent += text[index];
    // eslint-disable-next-line no-await-in-loop
    await wait(speed);
  }

  if (!shouldShowCursor || token !== typeWriterToken || !element.isConnected) {
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

function renderWorkflowTimeline(placeholder) {
  const steps = String(placeholder || "")
    .split(/\s*(?:\u2192|->)\s*/)
    .map((step) => step.trim())
    .filter(Boolean);

  return `
    <div class="workflow-timeline">
      ${steps
        .map(
          (step, index) => `
            <div class="workflow-step">
              <span>${escapeHtml(String(index + 1).padStart(2, "0"))}</span>
              <strong>${escapeHtml(step)}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
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
        <button class="mode-btn active" type="button" aria-disabled="true">Demo QA Mode</button>
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
          ${renderWorkflowTimeline(caseData.benchmark.visualPlaceholder)}
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
        ${outputTypeGroups
          .map((group, index) => `
            <div class="aud-card output-standard-card">
              <div class="icon">${escapeHtml(`GROUP_${String(index + 1).padStart(2, "0")}`)}</div>
              <h3>${escapeHtml(group.category)}</h3>
              <p class="output-standard-description">${escapeHtml(group.description)}</p>
              <div class="output-type-tags">
                ${group.types.map((type) => `<span class="output-type-tag">${escapeHtml(type)}</span>`).join("")}
              </div>
              <div class="output-standard-meta">
                <p><strong>Common Fidelity Risk:</strong> ${escapeHtml(group.commonRisk)}</p>
                <p><strong>QA Focus:</strong> ${escapeHtml(group.qaFocus)}</p>
              </div>
            </div>
          `)
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
          <div class="assessment-badge"><span class="status-dot"></span><span>Rule-based Demo Assessment</span></div>
          <p id="liveDiagnose" style="color: var(--ink); margin: 12px 0 0;"></p>
        </div>
        <div class="box">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
            <h3 style="margin: 0;">${escapeHtml(caseData.diagnose.scoreTitle)}</h3>
            <button id="btn-run-diagnose" class="action primary" type="button">Run Diagnose</button>
          </div>
          <div class="framework-badge">Evaluation Protocol: Output Lab Fidelity QA v1.0</div>
          <div id="selectedOutputTypeMeta" class="output-type-summary">
            <p><strong>Selected Output Type:</strong> ${escapeHtml("Policy Brief")}</p>
            <p><strong>Audience:</strong> ${escapeHtml(outputTypeProfiles["Policy Brief"].audience)}</p>
            <p><strong>Main Fidelity Risk:</strong> ${escapeHtml(outputTypeProfiles["Policy Brief"].mainRisk)}</p>
          </div>
          <p style="margin: 0 0 14px; color: var(--muted); font-size: 12px; line-height: 1.5;">Demo scores follow the course 1&ndash;5 fidelity scoring framework. Scores of 2 or below and 5 require written justification in the portfolio.</p>
          <div id="diagnoseScores">
            <p id="diagnosePlaceholder" style="color: var(--muted); margin: 0 0 16px;">Run diagnose to see evaluation</p>
          </div>
          <div id="scoreResult">
            ${caseData.diagnose.scores
              .map((score) => {
                const width = `${(score.value / 5) * 100}%`;
                const color = getScoreColor(score.value);
                return `
                  <div class="score-row">
                    <span>${escapeHtml(score.label)}</span>
                    <div>
                      <div class="bar"><div class="fill ${escapeHtml(color)}" style="width: ${width}"></div></div>
                      ${escapeHtml(`${score.value}/5`)}
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
          <div id="repairApiStatus" style="font-size: 12px; color: var(--muted); margin-bottom: 12px; font-family: var(--font-mono);"></div>
          <div class="repair-compare-layout">
            <div class="text-block before-report">
              <strong style="color: var(--muted); display:block; margin-bottom: 8px; font-family: var(--font-mono);">${escapeHtml(caseData.repair.beforeLabel)}</strong>
              <p id="beforeOutput">${escapeHtml(caseData.repair.beforeText)}</p>
            </div>
            <div class="text-block after-report">
              <div class="repair-output-header">
                <strong>${escapeHtml(caseData.repair.afterLabel)}</strong>
                <button id="btn-copy-repair" class="action secondary repair-copy" type="button">Copy</button>
              </div>
              <div id="repairDisclaimer" style="display: none; margin-bottom: 12px; padding: 8px 12px; border-left: 2px solid var(--muted-soft); background-color: rgba(110, 110, 115, 0.04);">
                <p style="margin: 0; font-size: 12px; color: var(--muted); font-family: var(--font-mono); line-height: 1.5;">AI-assisted repair draft. Review against source evidence before use.</p>
              </div>
              <pre id="afterOutput">${escapeHtml(caseData.repair.afterText)}</pre>
            </div>
          </div>
          <div class="text-block repair-patch-block">
            <strong style="color: var(--brand-hover); display:block; margin-bottom: 8px; font-family: var(--font-mono);">${escapeHtml(caseData.repair.patchTitle)}:</strong>
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
              ? '<div class="rail-section-label">Demo Sandbox</div>'
              : "";

            return `
              ${demoHeader}
              <a class="anchor-link ${index === 0 ? "active" : ""}" href="#" data-target="${escapeHtml(phase.id)}">
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
    <div class="rail-card history-card">
      <div class="history-header">
        <h3>Recent Audits</h3>
        <button id="btn-clear-history" class="history-clear" type="button">Clear History</button>
      </div>
      <div class="history-list" id="auditHistoryList"></div>
    </div>
  `;

  renderHistoryRail();
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
    const fillSampleBtn = document.getElementById("btn-fill-sample");
    const diagnoseBtn = document.getElementById("btn-run-diagnose");
    const repairBtn = document.getElementById("btn-run-repair");
    const copyRepairBtn = document.getElementById("btn-copy-repair");

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

    if (fillSampleBtn) {
      fillSampleBtn.onclick = () => {
        const userInput = document.getElementById("userInput");
        if (userInput) {
          userInput.value = "Policy Brief: Enhancing Productivity Through New Initiatives\n\nIntroduction:\nIn an effort to improve operational efficiency, a new policy has been proposed based on emerging research findings. This brief outlines the key recommendations and expected outcomes.\n\nBackground:\nA comprehensive study conducted in various organizational settings revealed promising results regarding productivity enhancements. Participants in the pilot program reported substantial improvements in their daily workflows.\n\nKey Findings:\n- Efficiency gains of up to 30% were observed among test groups.\n- Reduction in administrative overhead by approximately 20%.\n- Increased satisfaction levels among staff members.\n\nRecommendations:\nIt is strongly advised that all relevant departments implement this policy without delay. The broad application of these measures will lead to widespread benefits for the entire organization. Responsible parties should prioritize quick adoption to maximize impact.\n\nPotential Challenges:\nWhile the evidence supports positive changes, some uncertainties remain regarding long-term sustainability. Timeline for full implementation is flexible, depending on departmental readiness.\n\nConclusion:\nAdopting this policy will undoubtedly transform our approach to productivity, leading to better outcomes for all stakeholders. Further monitoring and evaluation will be necessary to refine the process.";
        }
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

    const copyAuditSummaryBtn = document.getElementById("btn-copy-audit-summary");
    if (copyAuditSummaryBtn) {
      copyAuditSummaryBtn.onclick = copyAuditSummary;
    }

    bindHistoryActions();
  }, 0);
}

function clampScore(value) {
  return Math.max(1, Math.min(5, Math.round(value)));
}

function getScoreExplanation(label, score) {
  const anchors = {
    1: "1/5 Unacceptable: Major fidelity failure; substantial revision required before portfolio use.",
    2: "2/5 Poor: The output has a visible fidelity risk and requires written justification.",
    3: "3/5 Adequate: Usable but needs targeted editing.",
    4: "4/5 Good: Mostly aligned with minor improvements needed.",
    5: "5/5 Excellent: Strong fidelity; requires justification in portfolio."
  };

  const dimensionNotes = {
    "Claim Accuracy": "Check whether the claim stays within what the source evidence supports.",
    "Causal Precision": "Check whether causal strength matches the research design and wording.",
    "Scope Fidelity": "Check whether population, setting, context, or time boundaries remain visible.",
    "Method Transparency": "Check whether the method or evidence type is clear enough for interpretation.",
    "Nuance Preservation": "Check whether limitations, caveats, and uncertainty are preserved.",
    "Audience Calibration": "Check whether the output is tuned to the named reader and use case.",
    Actionability: "Check whether the next step is realistic, bounded, and evidence-aligned."
  };

  const anchor = anchors[clampScore(score)] || anchors[3];
  const note = dimensionNotes[label];
  return note ? `${anchor} ${note}` : anchor;
}

function getOverallVerdict(averageScore) {
  if (averageScore <= 2) {
    return {
      text: "Poor \u2014 substantial revision needed",
      color: "var(--bad)"
    };
  }

  if (averageScore <= 3) {
    return {
      text: "Adequate \u2014 targeted editing needed",
      color: "var(--warn)"
    };
  }

  if (averageScore <= 4) {
    return {
      text: "Good \u2014 minor revision needed",
      color: "var(--good)"
    };
  }

  return {
    text: "Excellent \u2014 portfolio-ready",
    color: "var(--good)"
  };
}

function getScoreColor(score) {
  if (score <= 2) {
    return "red";
  }

  if (score === 3) {
    return "orange";
  }

  return score >= 5 ? "green" : "blue";
}

function buildRepairSuggestions(scoreMap) {
  const suggestionLibrary = [
    {
      key: "claimAccuracy",
      label: "Claim Accuracy",
      build: () => "Improve Claim Accuracy: Tighten wording so the claim matches what the source actually says."
    },
    {
      key: "causalPrecision",
      label: "Causal Precision",
      build: () => "Improve Causal Precision: Replace unsupported causal verbs with association or evidence-limited language."
    },
    {
      key: "scopeFidelity",
      label: "Scope Fidelity",
      build: () => "Improve Scope Fidelity: Restore the population, setting, time period, or boundary condition."
    },
    {
      key: "methodTransparency",
      label: "Method Transparency",
      build: () => "Improve Method Transparency: Add a visible method or evidence signal such as survey, interview, experiment, or review."
    },
    {
      key: "nuancePreservation",
      label: "Nuance Preservation",
      build: () => "Improve Nuance Preservation: Keep limitations, conditional findings, and uncertainty visible."
    },
    {
      key: "actionability",
      label: "Actionability",
      build: () => "Improve Actionability: Add a concrete next step that is feasible for the intended practitioner audience."
    },
    {
      key: "audienceCalibration",
      label: "Audience Calibration",
      build: () => "Improve Audience Calibration: Rewrite key lines for the audience's role, constraints, and decision context."
    }
  ];

  const ranked = suggestionLibrary
    .map((item) => ({ ...item, value: scoreMap[item.key] }))
    .sort((a, b) => a.value - b.value);

  return ranked
    .filter((item, index) => item.value <= 3 || index < 2)
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
    .sort((a, b) => a[1] - b[1])[0]?.[0] || "claimAccuracy";

  const repairMap = {
    claimAccuracy: "Tighten the main claim so it stays closer to the source evidence.",
    causalPrecision: "Downgrade causal language where the source does not establish causation.",
    scopeFidelity: "Restore the relevant population, setting, or scope condition.",
    methodTransparency: "Add a visible method signal so readers know how the evidence was produced.",
    nuancePreservation: "Preserve limitations and conditional findings instead of flattening the nuance.",
    audienceCalibration: "Rewrite key lines with a clearer audience payoff for practitioners.",
    actionability: "Add a practical next step that stays within the evidence limits."
  };

  return {
    insight: `The provided ${topic} content has usable source material, but it needs stronger fidelity cues before it becomes practitioner-ready.`,
    repair: repairMap[weakDimension]
  };
}

function buildAuditSummaryText(state) {
  const scoreRows = state.rows || getScoreRowsFromMap(state.scores);
  const averageScore = getAverageScore(scoreRows);
  const verdict = getOverallVerdict(averageScore);
  const outputType = state.outputType || "Policy Brief";
  const profile = state.profile || {};
  const issues = state.issues || [];
  const inputExcerpt = (state.input || "").substring(0, 300);
  const scoreJustifications = state.scoreJustifications || {};

  const scoreLabelsToKeys = {
    "Claim Accuracy": "claimAccuracy",
    "Causal Precision": "causalPrecision",
    "Scope Fidelity": "scopeFidelity",
    "Method Transparency": "methodTransparency",
    "Nuance Preservation": "nuancePreservation",
    "Audience Calibration": "audienceCalibration",
    "Actionability": "actionability"
  };

  let summary = `Output Lab Audit Summary

Output Type: ${outputType}

Overall Average: ${averageScore.toFixed(1)}/5

Overall Verdict: ${verdict.text}

Dimension Scores:
`;

  for (const score of scoreRows) {
    const justificationKey = scoreLabelsToKeys[score.label];
    const justification = justificationKey ? (scoreJustifications[justificationKey] || getScoreExplanation(score.label, score.value)) : getScoreExplanation(score.label, score.value);
    summary += `${score.label}: ${score.value}/5
${justification}

`;
  }

  summary += `Failure Flags: ${issues.length ? issues.join(", ") : "None"}

Repair Focus: ${profile.repairFocus || "Not available"}

Input Excerpt: ${inputExcerpt}
`;

  return summary;
}

function copyAuditSummary() {
  if (!latestDiagnoseState) {
    alert("Run Diagnose before copying an audit summary.");
    return;
  }

  const summaryText = buildAuditSummaryText(latestDiagnoseState);
  const button = document.getElementById("btn-copy-audit-summary");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summaryText).then(() => {
      if (button) {
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy Audit Summary";
        }, 2000);
      }
    }).catch(() => {
      fallbackCopyText(summaryText);
      if (button) {
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy Audit Summary";
        }, 2000);
      }
    });
  } else {
    fallbackCopyText(summaryText);
    if (button) {
      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = "Copy Audit Summary";
      }, 2000);
    }
  }
}

function createScoreJustifications(input, scores, outputType, profile) {
  const text = String(input || "").trim();
  const lowerText = text.toLowerCase();

  // Detect presence of various evidence cues
  const hasOverclaim = /\balways\b|\bguarantees?\b|\bproves?\b|\bproven\b|\bsolves?\b|\beliminates?\b|\beveryone\b|\beverywhere\b|\bwill ensure\b|\bdefinitively\b/.test(lowerText);
  const hasEvidenceLimited = /\bsuggests?\b|\bevidence suggests\b|\bassociated with\b|\bindicates?\b|\bmay\b|\bappears?\b|\bcould\b|\blinked to\b/.test(lowerText);
  const hasCausalLanguage = /\bcauses?\b|\bleads to\b|\blead to\b|\bimproves?\b|\breduces?\b|\bincreases?\b|\bdrives?\b|\bresults in\b|\bboosts?\b/.test(lowerText);
  const hasCausalDesign = /\bexperiments?\b|\brandomized\b|\brandomised\b|\bcausal\b|\bfield experiment\b/.test(lowerText);
  const hasAssociationLanguage = /\bassociated with\b|\blinked to\b|\bcorrelational\b|\bnot causal\b|\bnot proof\b/.test(lowerText);
  const hasScopeSignals = /\bsample\b|\bpopulation\b|\bsetting\b|\bcontext\b|\bu\.s\.|\bfederal\b|\blocal\b|\bcanadian\b|\bdanish\b|\btime period\b|\bworkforce\b|\bagency context\b/.test(lowerText);
  const hasOverScope = /\ball agencies\b|\ball public agencies\b|\bevery government\b|\bevery agency\b|\buniversal\b|\beverywhere\b/.test(lowerText);
  const hasMethodSignal = /\bsurveys?\b|\binterviews?\b|\bexperiments?\b|\bmeta-analysis\b|\bmeta analysis\b|\bsystematic review\b|\bqualitative\b|\bquantitative\b|\bmixed-method\b|\bmixed method\b|\bdata\b|\bdataset\b|\bregression\b|\badministrative records\b|\bcase study\b/.test(lowerText);
  const hasNuanceCues = /\blimitations?\b|\bcaveats?\b|\bhowever\b|\bmay\b|\bcould\b|\bvaries\b|\bcontext\b|\bnot proof\b|\bconditional\b|\buncertainty\b|\bdepends\b/.test(lowerText);
  const hasAudienceLanguage = /\bpolicymakers\b|\bpolicy makers\b|\bpractitioners\b|\bagency leaders\b|\bpublic managers\b|\banalysts\b|\bcitizens\b|\bdecision-makers\b|\bdecision makers\b|\bprogram leads\b|\bagency executives\b/.test(lowerText);
  const hasActionLanguage = /\bpilot\b|\breview\b|\bconsider\b|\btest\b|\badapt\b|\bnext step\b|\brecommend\b|\brecommendation\b|\bdiagnostic\b|\buse the finding\b|\bmonitor\b|\bassess\b|\bevaluate\b/.test(lowerText);
  const hasRecklessAction = /\bmust immediately\b|\bshould immediately\b|\bevery agency should\b|\bevery government should\b|\ball agencies should\b|\buniversal solution\b|\badopt this solution immediately\b/.test(lowerText);
  const hasAcademicOnly = /\bp-value\b|\bregression coefficient\b|\btheoretical contribution\b|\bliterature gap\b|\bmodel specification\b/.test(lowerText);

  const claimAccuracyScore = scores.claimAccuracy || 3;
  const causalPrecisionScore = scores.causalPrecision || 3;
  const scopeFidelityScore = scores.scopeFidelity || 3;
  const methodTransparencyScore = scores.methodTransparency || 3;
  const nuancePreservationScore = scores.nuancePreservation || 3;
  const audienceCalibrateScore = scores.audienceCalibration || 3;
  const actionabilityScore = scores.actionability || 3;

  // Generate justifications based on scores and cues
  let claimAccuracyJustification;
  if (claimAccuracyScore >= 4) {
    claimAccuracyJustification = "The draft makes claims that are well-grounded in evidence and appropriately cautious.";
  } else if (claimAccuracyScore === 3) {
    claimAccuracyJustification = hasOverclaim
      ? "The draft uses some absolute language, but the core claim is defensible with closer source grounding."
      : "The draft stays reasonably close to the source, though some claims could be tightened.";
  } else {
    claimAccuracyJustification = hasOverclaim
      ? "The draft uses overclaim language (e.g., 'always,' 'guarantees') that outruns the source evidence."
      : "The draft makes claims that need closer source grounding before it becomes practitioner-ready.";
  }

  let causalPrecisionJustification;
  if (causalPrecisionScore >= 4) {
    causalPrecisionJustification = "The draft uses causal language only where the source design supports it, or appropriately signals associations.";
  } else if (causalPrecisionScore === 3) {
    causalPrecisionJustification = hasCausalLanguage && !hasCausalDesign
      ? "The draft uses causal verbs, but the source method is not visible enough to support the causal claim."
      : hasAssociationLanguage
        ? "The draft includes some nuance around causality, but could be clearer about the evidence type."
        : "The draft's causal precision is borderline and needs method context to strengthen.";
  } else {
    causalPrecisionJustification = hasCausalLanguage && !hasCausalDesign
      ? "The draft makes causal claims without visible evidence for causality; reword as associations or evidence-limited language."
      : "The draft's causal framing is risky given the research design; add method cues or downgrade causal language.";
  }

  let scopeFidelityJustification;
  if (scopeFidelityScore >= 4) {
    scopeFidelityJustification = "The draft clearly names the population, setting, or context that defines where the evidence applies.";
  } else if (scopeFidelityScore === 3) {
    scopeFidelityJustification = hasScopeSignals
      ? "The draft includes some scope cues, but they could be more prominent or precise."
      : "The draft lacks clear scope signals; add population, setting, or context boundaries.";
  } else {
    scopeFidelityJustification = hasOverScope
      ? "The draft overgeneralizes (e.g., 'all agencies,' 'everywhere'), removing the source's scope limits."
      : "The draft does not make its scope visible; readers cannot tell if this applies locally or universally.";
  }

  let methodTransparencyJustification;
  if (methodTransparencyScore >= 4) {
    methodTransparencyJustification = "The draft signals the evidence type (survey, experiment, case study, etc.) so readers can calibrate interpretation.";
  } else if (methodTransparencyScore === 3) {
    methodTransparencyJustification = hasMethodSignal
      ? "The draft mentions the method, but the signal is weak or buried in the text."
      : "The draft does not name the evidence type; add a visible method cue (survey, case study, etc.).";
  } else {
    methodTransparencyJustification = "The draft omits the method or evidence type, making claims sound more certain than the source allows.";
  }

  let nuancePreservationJustification;
  if (nuancePreservationScore >= 4) {
    nuancePreservationJustification = "The draft preserves limitations, caveats, and conditional findings; readers see the evidence boundaries.";
  } else if (nuancePreservationScore === 3) {
    nuancePreservationJustification = hasNuanceCues
      ? "The draft includes some nuance language, but limitations could be more visible or concrete."
      : "The draft lacks clear limitation signals; add caveats or conditional phrasing.";
  } else {
    nuancePreservationJustification = hasOverclaim
      ? "The draft flattens uncertainty by using absolute language and omitting qualifications."
      : "The draft erases limitations and context, presenting findings as more certain than the source supports.";
  }

  let audienceCalibrateJustification;
  if (audienceCalibrateScore >= 4) {
    audienceCalibrateJustification = "The draft is clearly tuned to the named audience (practitioners, policymakers, etc.) with relevant examples and language.";
  } else if (audienceCalibrateScore === 3) {
    audienceCalibrateJustification = hasAudienceLanguage
      ? "The draft names the audience, but the language or examples could be more audience-specific."
      : "The draft lacks clear audience signals; add practitioner-relevant language or examples.";
  } else {
    audienceCalibrateJustification = hasAcademicOnly
      ? "The draft uses academic language (p-values, regression coefficients) that will not resonate with practitioners."
      : "The draft does not clearly signal who the reader is or why this evidence matters to them.";
  }

  let actionabilityJustification;
  if (actionabilityScore >= 4) {
    actionabilityJustification = "The draft offers a realistic, bounded next step that fits what the audience can do with the evidence.";
  } else if (actionabilityScore === 3) {
    actionabilityJustification = hasActionLanguage
      ? "The draft hints at next steps, but the recommendation is not concrete or bounded enough."
      : "The draft lacks a clear action or next step; add a specific, evidence-aligned recommendation.";
  } else {
    actionabilityJustification = hasRecklessAction
      ? "The draft pushes immediate universal action; replace with a bounded next step tied to the evidence scope."
      : "The draft gives no clear next step, or the recommendation is too vague to be actionable.";
  }

  return {
    claimAccuracy: claimAccuracyJustification,
    causalPrecision: causalPrecisionJustification,
    scopeFidelity: scopeFidelityJustification,
    methodTransparency: methodTransparencyJustification,
    nuancePreservation: nuancePreservationJustification,
    audienceCalibration: audienceCalibrateJustification,
    actionability: actionabilityJustification
  };
}

function includesAny(text, cues) {
  return cues.some((cue) => cue instanceof RegExp ? cue.test(text) : text.includes(cue));
}

function countCueHits(text, cues) {
  return cues.reduce((count, cue) => count + (cue instanceof RegExp ? Number(cue.test(text)) : Number(text.includes(cue))), 0);
}

function createFidelityScores(input) {
  const text = String(input || "").trim();
  const lowerText = text.toLowerCase();

  const overclaimCues = [/\balways\b/, /\bguarantees?\b/, /\bproves?\b/, /\bproven\b/, /\bsolves?\b/, /\beliminates?\b/, /\beveryone\b/, /\beverywhere\b/, /\bwill ensure\b/, /\bdefinitively\b/];
  const evidenceLimitedCues = [/\bsuggests?\b/, /\bevidence suggests\b/, /\bassociated with\b/, /\bindicates?\b/, /\bmay\b/, /\bappears?\b/, /\bcould\b/, /\blinked to\b/];
  const causalVerbCues = [/\bcauses?\b/, /\bleads to\b/, /\blead to\b/, /\bimproves?\b/, /\breduces?\b/, /\bincreases?\b/, /\bdrives?\b/, /\bresults in\b/, /\bboosts?\b/];
  const causalDesignCues = [/\bexperiments?\b/, /\brandomized\b/, /\brandomised\b/, /\bcausal\b/, /\bfield experiment\b/];
  const associationCues = [/\bassociated with\b/, /\blinked to\b/, /\bcorrelational\b/, /\bnot causal\b/, /\bnot proof\b/, /\bnot proof of causation\b/, /\bdoes not prove causation\b/];
  const scopeCues = [/\bsample\b/, /\bpopulation\b/, /\bsetting\b/, /\bcontext\b/, /\bu\.s\./, /\bfederal\b/, /\blocal\b/, /\bcanadian\b/, /\bdanish\b/, /\btime period\b/, /\bworkforce\b/, /\bagency context\b/];
  const overScopeCues = [/\ball agencies\b/, /\ball public agencies\b/, /\bevery government\b/, /\bevery agency\b/, /\buniversal\b/, /\beverywhere\b/];
  const methodCues = [/\bsurveys?\b/, /\binterviews?\b/, /\bexperiments?\b/, /\bmeta-analysis\b/, /\bmeta analysis\b/, /\bsystematic review\b/, /\bqualitative\b/, /\bquantitative\b/, /\bmixed-method\b/, /\bmixed method\b/, /\bdata\b/, /\bdataset\b/, /\bregression\b/, /\badministrative records\b/, /\bcase study\b/];
  const nuanceCues = [/\blimitations?\b/, /\bcaveats?\b/, /\bhowever\b/, /\bmay\b/, /\bcould\b/, /\bvaries\b/, /\bcontext\b/, /\bnot proof\b/, /\bconditional\b/, /\buncertainty\b/, /\bdepends\b/];
  const audienceCues = [/\bpolicymakers\b/, /\bpolicy makers\b/, /\bpractitioners\b/, /\bagency leaders\b/, /\bpublic managers\b/, /\banalysts\b/, /\bcitizens\b/, /\bdecision-makers\b/, /\bdecision makers\b/, /\bprogram leads\b/, /\bagency executives\b/];
  const academicOnlyCues = [/\bp-value\b/, /\bregression coefficient\b/, /\btheoretical contribution\b/, /\bliterature gap\b/, /\bmodel specification\b/];
  const actionCues = [/\bpilot\b/, /\breview\b/, /\bconsider\b/, /\btest\b/, /\badapt\b/, /\bnext step\b/, /\brecommend\b/, /\brecommendation\b/, /\bdiagnostic\b/, /\buse the finding\b/, /\bmonitor\b/, /\bassess\b/, /\bevaluate\b/];
  const recklessActionCues = [/\bmust immediately\b/, /\bshould immediately\b/, /\bevery agency should\b/, /\bevery government should\b/, /\ball agencies should\b/, /\buniversal solution\b/, /\badopt this solution immediately\b/];

  const overclaimCount = countCueHits(lowerText, overclaimCues);
  const evidenceLimitedCount = countCueHits(lowerText, evidenceLimitedCues);
  const causalVerbCount = countCueHits(lowerText, causalVerbCues);
  const hasCausalDesign = includesAny(lowerText, causalDesignCues);
  const associationCount = countCueHits(lowerText, associationCues);
  const scopeCount = countCueHits(lowerText, scopeCues);
  const overScopeCount = countCueHits(lowerText, overScopeCues);
  const methodCount = countCueHits(lowerText, methodCues);
  const nuanceCount = countCueHits(lowerText, nuanceCues);
  const audienceCount = countCueHits(lowerText, audienceCues);
  const actionCount = countCueHits(lowerText, actionCues);
  const hasRecklessAction = includesAny(lowerText, recklessActionCues);

  let claimAccuracy = 3;
  if (overclaimCount > 0) claimAccuracy -= Math.min(2, overclaimCount);
  if (evidenceLimitedCount > 0) claimAccuracy += evidenceLimitedCount >= 2 ? 2 : 1;
  if (text.length < 40) claimAccuracy -= 1;

  let causalPrecision = 3;
  if (causalVerbCount > 0 && !hasCausalDesign) causalPrecision -= causalVerbCount >= 2 ? 2 : 1;
  if (hasCausalDesign && causalVerbCount > 0) causalPrecision += 1;
  if (associationCount > 0) causalPrecision += associationCount >= 2 ? 2 : 1;

  let scopeFidelity = 3;
  if (scopeCount > 0) scopeFidelity += scopeCount >= 2 ? 2 : 1;
  if (overScopeCount > 0) scopeFidelity -= overScopeCount >= 2 ? 2 : 1;
  if (scopeCount === 0 && text.length > 120) scopeFidelity -= 1;

  let methodTransparency = 3;
  if (methodCount > 0) methodTransparency += methodCount >= 2 ? 2 : 1;
  if (methodCount === 0) methodTransparency -= 1;

  let nuancePreservation = 3;
  if (nuanceCount > 0) nuancePreservation += nuanceCount >= 2 ? 2 : 1;
  if ((overclaimCount > 0 || overScopeCount > 0) && nuanceCount === 0) nuancePreservation -= 1;
  if (nuanceCount === 0 && text.length > 120) nuancePreservation -= 1;

  let audienceCalibration = 3;
  if (audienceCount > 0) audienceCalibration += audienceCount >= 2 ? 2 : 1;
  if (audienceCount === 0 && includesAny(lowerText, academicOnlyCues)) audienceCalibration -= 1;
  if (text.length < 50) audienceCalibration -= 1;

  let actionability = 3;
  if (actionCount > 0) actionability += actionCount >= 2 ? 2 : 1;
  if (actionCount === 0) actionability -= 1;
  if (hasRecklessAction) actionability -= 2;

  return {
    claimAccuracy: clampScore(claimAccuracy),
    causalPrecision: clampScore(causalPrecision),
    scopeFidelity: clampScore(scopeFidelity),
    methodTransparency: clampScore(methodTransparency),
    nuancePreservation: clampScore(nuancePreservation),
    audienceCalibration: clampScore(audienceCalibration),
    actionability: clampScore(actionability)
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
        const width = `${(score.value / 5) * 100}%`;
        const color = getScoreColor(score.value);
        return `
          <div style="margin-bottom: 16px;">
            <div class="score-row" style="margin-bottom: 6px;">
              <span>${escapeHtml(score.label)}</span>
              <div>
                <div class="bar"><div class="fill ${escapeHtml(color)}" style="width: ${width}"></div></div>
                ${escapeHtml(`${score.value}/5`)}
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
        <button id="btn-copy-audit-summary" class="action secondary" type="button" style="margin-top: 8px;">Copy Audit Summary</button>
      </div>
      ${scoresBox.innerHTML}
    `;

    await typeWriter("diagnoseVerdict", verdict.text, 14);

    const scoreLabelsToKeys = {
      "Claim Accuracy": "claimAccuracy",
      "Causal Precision": "causalPrecision",
      "Scope Fidelity": "scopeFidelity",
      "Method Transparency": "methodTransparency",
      "Nuance Preservation": "nuancePreservation",
      "Audience Calibration": "audienceCalibration",
      "Actionability": "actionability"
    };

    for (const score of scoreRows) {
      const explanationId = `score-expl-${score.label.toLowerCase().replace(/\s+/g, "-")}`;
      const justificationKey = scoreLabelsToKeys[score.label];
      let explanation = getScoreExplanation(score.label, score.value);
      
      // Use scoreJustifications from latestDiagnoseState if available
      if (latestDiagnoseState && latestDiagnoseState.scoreJustifications && justificationKey) {
        explanation = latestDiagnoseState.scoreJustifications[justificationKey] || explanation;
      }
      
      // eslint-disable-next-line no-await-in-loop
      await typeWriter(explanationId, explanation, 10);
    }
  }

  if (liveScore) {
    liveScore.textContent = "1\u20135 Fidelity Demo Score | Anchor-based QA";
  }

  if (aiWhyLowScore) {
    await typeWriter(aiWhyLowScore, insightText, 12);
  }

  if (aiRepairPatch) {
    await typeWriter(aiRepairPatch, repairText, 12);
  }

  bindActions();
}

async function runDiagnose() {
  const inputElement = document.getElementById("userInput");
  const input = inputElement ? inputElement.value.trim() : "";
  const selectedOutputType = document.getElementById("outputTypeSelect")?.value || "Policy Brief";
  const profile = outputTypeProfiles[selectedOutputType];
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

  showPanel("diagnose");
  caseData.text = input;
  caseData.repair.beforeText = input;

  renderSelectedOutputTypeMeta(selectedOutputType, profile);

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
    scoresBox.innerHTML = `<p style="color: var(--muted); margin: 0;">Analyzing fidelity cues...</p>`;
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
    aiWhyLowScore.textContent = "Preparing rule-based assessment...";
  }

  if (aiRepairPatch) {
    aiRepairPatch.textContent = "Preparing repair notes...";
  }

  try {
    if (scoresBox) {
      scoresBox.innerHTML = `<p style="color: var(--muted); margin: 0;">Analyzing fidelity anchors...</p>`;
    }
    await wait(600);

    if (scoresBox) {
      scoresBox.innerHTML = `<p style="color: var(--muted); margin: 0;">Evaluating course dimensions...</p>`;
    }
    await wait(600);

    const issues = [];
    const lowerInput = input.toLowerCase();
    const scores = createFidelityScores(input);

    if (scores.actionability <= 3) {
      issues.push("weak_actionability");
    }

    if (scores.nuancePreservation <= 3 && !lowerInput.includes("limitation") && !lowerInput.includes("limit")) {
      issues.push("missing_limitation");
    }

    if (scores.scopeFidelity <= 3) {
      issues.push("scope_fidelity_gap");
    }

    if (scores.methodTransparency <= 2) {
      issues.push("method_omission");
    }

    if (scores.causalPrecision <= 2) {
      issues.push("causal_precision_risk");
    }

    if (scores.audienceCalibration <= 3) {
      issues.push("weak_audience_calibration");
    }

    const scoreRows = [
      { label: "Claim Accuracy", value: scores.claimAccuracy },
      { label: "Causal Precision", value: scores.causalPrecision },
      { label: "Scope Fidelity", value: scores.scopeFidelity },
      { label: "Method Transparency", value: scores.methodTransparency },
      { label: "Nuance Preservation", value: scores.nuancePreservation },
      { label: "Audience Calibration", value: scores.audienceCalibration },
      { label: "Actionability", value: scores.actionability }
    ];

    const scoreJustifications = createScoreJustifications(input, scores, selectedOutputType, profile);

    latestDiagnoseState = {
      input,
      outputType: selectedOutputType,
      profile,
      issues: [...issues],
      scores: { ...scores },
      rows: scoreRows,
      scoreJustifications
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
      const issueText = `Rule-based flags: ${issueList.length ? issueList.join(", ") : "None"}`;
      await typeWriter(live, issueText, 12);
    }

    const fallback = generateLocalInsight(input, scores);
    const insightText = fallback.insight;
    const repairText = fallback.repair;

    await renderDiagnoseResults(scoreRows, insightText, repairText, scores);
    latestDiagnoseState.historyRecordId = saveDiagnoseHistoryRecord(latestDiagnoseState);
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
  const selectedOutputType = document.getElementById("outputTypeSelect")?.value || "Policy Brief";
  const profile = outputTypeProfiles[selectedOutputType];
  const beforeOutput = document.getElementById("beforeOutput");
  const outputBox = document.getElementById("afterOutput");
  const repairButton = document.getElementById("btn-run-repair");
  const statusElement = document.getElementById("repairApiStatus");

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

  if (statusElement) {
    statusElement.textContent = "";
  }

  try {
    // Build fallback repair text first
    const activeScores = latestDiagnoseState ? latestDiagnoseState.scores : createFidelityScores(input);
    const suggestions = buildRepairSuggestions(activeScores);
    const fallbackRepair = [
      `Output Type: ${selectedOutputType}`,
      `Repair Focus: ${profile.repairFocus}`,
      "",
      `Format Check: This draft should include ${profile.mustInclude}.`,
      "",
      "Suggestions:",
      "",
      ...suggestions.map((suggestion) => `* ${suggestion}`)
    ].join("\n");

    let finalRepair = fallbackRepair;
    let statusMessage = "Demo mode only. No external API was called.";
    let apiProvider = null;
    let apiModel = null;
    isApiRepair = false;

    // Try API call
    try {
      outputBox.textContent = "Attempting AI-assisted repair...";
      await wait(500);

      const apiResponse = await fetch("/api/repair", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input,
          outputType: selectedOutputType,
          profile,
          scores: activeScores,
          issues: latestDiagnoseState ? latestDiagnoseState.issues : []
        })
      });

      if (apiResponse.ok) {
        const apiData = await apiResponse.json();
        
        // Check if API was successfully used
        if (apiData.apiUsed === true && apiData.repairText) {
          finalRepair = apiData.repairText;
          statusMessage = `AI-assisted repair generated via ${apiData.provider || 'SiliconFlow'} API.`;
          apiProvider = apiData.provider;
          apiModel = apiData.model;
          isApiRepair = true;
          console.log(`[app.js] API repair successful using model: ${apiModel}`);
        } 
        // API exists but failed (apiUsed === false)
        else if (apiData.apiUsed === false) {
          // If backend provided an errorMessage (e.g., quality check failure), show it exactly.
          statusMessage = apiData.errorMessage || "API unavailable. Demo fallback repair used.";
          apiProvider = apiData.provider;
          isApiRepair = false;
          console.warn(`[app.js] API failed, using fallback. Provider: ${apiProvider}`, apiData.errorMessage);
        }
      } else {
        console.warn("[app.js] API call failed with status:", apiResponse.status);
        statusMessage = "API unavailable. Demo fallback repair used.";
      }
    } catch (apiError) {
      console.warn("[app.js] API unavailable:", apiError.message);
      statusMessage = "API unavailable. Demo fallback repair used.";
    }
    
    console.log(`[app.js] /api/repair called. Using: ${isApiRepair ? 'SiliconFlow API' : 'local fallback'}`);
    console.log(`[app.js] Status message: ${statusMessage}`);

    // Display the repair
    outputBox.textContent = "Drafting repair...";
    await wait(300);
    await typeWriter(outputBox, finalRepair, 10);

    // Show or hide disclaimer based on repair source
    const disclaimerElement = document.getElementById("repairDisclaimer");
    if (disclaimerElement) {
      disclaimerElement.style.display = isApiRepair ? "block" : "none";
    }

    // Update status
    if (statusElement) {
      statusElement.textContent = statusMessage;
    }

    updateLatestHistoryRepair(finalRepair);
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
