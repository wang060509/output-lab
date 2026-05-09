window.APP_MODE = "demo";

const defaultCaseData = {
  text: "",
  topBar: {
    eyebrow: "AI Analysis Workspace",
    title: "Output Lab",
    fields: [
      { label: "Type", value: "LinkedIn Carousel" },
      { label: "Benchmark", value: "Brookings-style policy communication" }
    ]
  },
  benchmark: {
    number: "01",
    title: "Benchmark",
    description: "用于放这个 case 的 benchmark 参考结构、来源与基础说明。",
    badges: [
      { label: "Single Case", color: "blue" },
      { label: "Static Data", color: "green" }
    ],
    visualTitle: "Accountability and Autonomy in Federal HRM",
    visualPlaceholder: "Policy Brief Structure:\n• Problem framing\n• Key findings\n• Limitations\n• Recommendations\n• Scope conditions",
    metadataTitle: "Metadata",
    metadata: [
      { label: "Case", value: "Han & Hong (2019) + LinkedIn Carousel" },
      { label: "Title", value: "Accountability and Autonomy in Federal HRM (Policy-style communication benchmark)" },
      { label: "Source", value: "Brookings-style policy brief (representative benchmark)" },
      { label: "Rationale", value: "This benchmark represents how real-world policy communication formats clearly structure problem, findings, limitations, and actionable recommendations for practitioner audiences." }
    ],
    cards: [
      { title: "Problem Statement", description: "Public agencies often treat accountability and autonomy as competing goals, creating tension in HRM system design." },
      { title: "Findings", description: "Accountability in staffing, evaluation, and compensation is positively associated with performance. Autonomy strengthens these relationships in some areas." },
      { title: "Limitations", description: "Findings are based on cross-sectional survey data and do not establish causality." },
      { title: "Recommendations", description: "Strengthen merit-based staffing, improve evaluation systems, and pair accountability with employee autonomy." },
      { title: "Scope Conditions", description: "U.S. federal workforce only; based on employee perception data from 2012 survey." },
      { title: "Cautions", description: "Results should guide experimentation, not be treated as universally causal or generalizable." }
    ]
  },
  audience: {
    number: "02",
    title: "Audience",
    description: "用于定义这个 case 面向谁、他们关心什么、会忽略什么，以及应该采用什么表达语气。",
    badges: [
      { label: "Reader Fit", color: "blue" },
      { label: "Decision Context", color: "orange" }
    ],
    cards: [
      { icon: "AUD_01", title: "Who reads this", description: "Policy practitioners, analysts, and public administration professionals on LinkedIn." },
      { icon: "AUD_02", title: "What they know", description: "Familiar with general policy issues but unlikely to read full academic papers." },
      { icon: "AUD_03", title: "Decision needed", description: "Quickly assess whether research insights are relevant for practice or worth sharing." },
      { icon: "AUD_04", title: "Why ignore", description: "Too abstract, too academic, lacks clear takeaway or actionable relevance." },
      { icon: "AUD_05", title: "What counts as useful", description: "Clear takeaway, simplified insights, practical implications, and shareable messaging." }
    ]
  },
  compare: {
    number: "03",
    title: "Compare",
    description: "Review the gap between the original output and the improved version.",
    badges: [
      { label: "Side-by-Side", color: "green" },
      { label: "Gap Check", color: "red" }
    ],
    left: {
      title: "Benchmark Structure",
      badge: { label: "Ref", color: "green" },
      outlineItems: [
        { label: "Opening Hook", text: "The benchmark uses a policy-facing hook to frame why accountability and autonomy matter for real HRM decisions." },
        { label: "Evidence Move", text: "It presents findings in a structured sequence rather than as one dense summary paragraph." },
        { label: "Limitation Cue", text: "It explicitly notes the non-causal and survey-based nature of the evidence before moving to recommendations." }
      ],
      textSnippet: "Benchmark clearly includes a policy hook, structured findings, explicit limitations, and actionable recommendations."
    },
    right: {
      title: "Current Output",
      badge: { label: "Current", color: "orange" },
      statusLabel: "",
      text: "This study examines the relationship between accountability and organizational performance in the U.S. federal government. Findings suggest that accountability is positively associated with performance, and autonomy may influence these relationships.",
      gapsTitle: "Identified Gaps",
      gaps: [
        { label: "Generic opening", color: "red" },
        { label: "Weak actionability", color: "orange" },
        { label: "Missing limitation emphasis", color: "red" },
        { label: "No structured takeaway", color: "orange" }
      ]
    }
  },
  diagnose: {
    number: "04",
    title: "Diagnose",
    description: "Evaluate this draft across the key dimensions that shape output quality.",
    badges: [
      { label: "Static Scores", color: "blue" },
      { label: "Risk Flags", color: "red" }
    ],
    scoreTitle: "Dimension Scores",
    scores: [
      { label: "Clarity", value: 6, max: 10, color: "blue" },
      { label: "Engagement", value: 7, max: 10, color: "blue" },
      { label: "Structure", value: 6, max: 10, color: "blue" },
      { label: "Credibility", value: 5, max: 10, color: "red" },
      { label: "Visual Impact", value: 6, max: 10, color: "blue" },
      { label: "CTA Strength", value: 4, max: 10, color: "red" },
      { label: "Audience Fit", value: 7, max: 10, color: "blue" }
    ],
    analysisTitle: "AI Insight",
    flags: [
      { label: "genre mismatch", color: "red" },
      { label: "weak action cue", color: "orange" },
      { label: "method omission", color: "red" },
      { label: "summary not decision support", color: "orange" }
    ],
    whyLowScore: "The output reads like a generic summary rather than a LinkedIn Carousel. It lacks an engaging hook, clear audience payoff, and actionable guidance. Method limitations and scope conditions are underrepresented, reducing fidelity and usability.",
    priorityFixes: "Add a strong opening hook tailored to practitioners; convert summary into structured, slide-style insights; explicitly include limitations and non-causal language; add clear action-oriented takeaway."
  },
  repair: {
    number: "05",
    title: "Repair",
    description: "Improve audience fit and actionability while preserving research fidelity.",
    badges: [
      { label: "Prompt Patch", color: "green" },
      { label: "Diff View", color: "blue" }
    ],
    checklistTitle: "Repair Checklist",
    checklist: [
      { status: "Completed", title: "Add LinkedIn-style hook", description: "Use an engaging opening that fits practitioner attention patterns on LinkedIn." },
      { status: "Completed", title: "Break into slide-like structure", description: "Convert the paragraph summary into short carousel-ready slide units." },
      { status: "Completed", title: "Highlight limitations explicitly", description: "State clearly that the evidence is correlational and not causal." },
      { status: "Completed", title: "Add practical takeaway", description: "End with a clear implication for policymakers and practitioners." }
    ],
    diffTitle: "Before / After Diff",
    beforeLabel: "Original Version",
    beforeText: "This study examines the relationship between accountability and organizational performance in the U.S. federal government. Findings suggest that accountability is positively associated with performance, and autonomy may influence these relationships.",
    afterLabel: "Improved Version",
    afterText: "Slide 1: Can accountability improve government performance? It depends.\n\nSlide 2: A large U.S. federal study finds:\nAccountability in staffing, evaluation, and compensation is linked to better performance.\n\nSlide 3: But here's the key:\nAutonomy makes accountability more effective.\n\nSlide 4: Why it matters:\nRigid systems without flexibility may reduce impact.\n\nSlide 5: Important limitation:\nThis is correlational survey data - not proof of causation.\n\nSlide 6: What practitioners can take away:\nFocus on BOTH accountability design AND employee discretion.\n\nSlide 7: Bottom line:\nBetter HRM systems are not just stricter - they are smarter.",
    patchTitle: "Applied Prompt Patch",
    patchText: "Goal: Improve audience fit and actionability while preserving research fidelity.\n\nStrategy:\n- Add LinkedIn-style hook\n- Break content into slide-like structure\n- Highlight limitations explicitly\n- Add practical takeaway for policymakers\n\nWhy score improved:\nThe revised version improves audience calibration by aligning with LinkedIn format and improves actionability by clearly stating what practitioners should do."
  },
  rightRail: {
    phasesTitle: "Workflow Phases",
    phases: [
      { id: "try-your-own", label: "00. Try Your Own" },
      { id: "benchmark", label: "01. Sample Benchmark" },
      { id: "audience", label: "02. Sample Audience" },
      { id: "compare", label: "03. Sample Compare" },
      { id: "diagnose", label: "04. Diagnose" },
      { id: "repair", label: "05. Repair" }
    ],
    dimensionsTitle: "Target Dimensions",
    dimensions: [
      { label: "Single Case", color: "blue" },
      { label: "Static Rendering", color: "orange" }
    ],
    dimensionsDescription: "Use the sidebar to move through the workflow and review the key evaluation dimensions.",
    failureModesTitle: "Active Failure Modes",
    failureModes: [
      { label: "genre mismatch", color: "red" },
      { label: "weak action cue", color: "orange" },
      { label: "method omission", color: "red" },
      { label: "summary not decision support", color: "orange" }
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

const caseData = deepMerge(defaultCaseData, window.caseData || {});
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
      <p style="color: var(--muted); font-size: 14px; margin-top: 4px;">AI Content Audit Tool</p>
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
          .map(
            (card) => `
              <div class="aud-card">
                <div class="icon">${escapeHtml(card.icon)}</div>
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.description)}</p>
              </div>
            `
          )
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
      <div class="compare-grid">
        <div class="compare-side before-state" id="before">
          <h3>
            <span>Before (Original)</span>
            <span class="mini-badge orange">Original</span>
          </h3>
          <div class="text-block"><p>${escapeHtml(caseData.compare.right.text)}</p></div>
          <div class="box" style="margin-top: auto;">
            <h3 style="margin-bottom: 10px;">Observed Weaknesses</h3>
            <div class="panel-tools">${renderPills(caseData.compare.right.gaps)}</div>
          </div>
        </div>
        <div class="compare-side after-state" id="after">
          <h3>
            <span>After (Repaired)</span>
            <span class="mini-badge green">Repaired</span>
          </h3>
          <div class="text-block">
            ${caseData.compare.right.statusLabel ? `<p style="color: var(--good); font-family: var(--font-mono); margin-bottom: 8px;">${escapeHtml(caseData.compare.right.statusLabel)}</p>` : ""}
            <p>${escapeHtml(caseData.repair.afterText)}</p>
          </div>
          <div class="box" style="margin-top: auto;">
            <h3 style="margin-bottom: 10px;">Repaired Strengths</h3>
            <div class="panel-tools">
              <span class="pill green">Stronger structure</span>
              <span class="pill green">Clearer takeaway</span>
              <span class="pill green">Higher scanability</span>
            </div>
          </div>
        </div>
      </div>
      <div class="box compare-insights">
        <h3>Key Differences & Insights</h3>
        <ul>
          ${getCompareInsights()
            .map((insight) => `<li>${escapeHtml(insight)}</li>`)
            .join("")}
        </ul>
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
          <div class="ai-confidence"><span class="pulse-dot"></span><span>AI Confidence: 93%</span></div>
          <p id="liveDiagnose" style="color: var(--ink); margin: 12px 0 0;"></p>
        </div>
        <div class="box">
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
            <h3 style="margin: 0;">${escapeHtml(caseData.diagnose.scoreTitle)}</h3>
            <button id="btn-run-diagnose" class="action primary" type="button">Run Diagnose</button>
          </div>
          <div class="framework-badge">Evaluation Protocol: Brookings Policy Communication Standard v1.2</div>
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
      label: "Clarity",
      build: () => "Improve Clarity: Shorten sentences and remove jargon so the message scans faster."
    },
    {
      key: "engagement",
      label: "Engagement",
      build: () => "Improve Engagement: Add a stronger hook or contrast statement to create immediate interest."
    },
    {
      key: "structure",
      label: "Structure",
      build: () => "Improve Structure: Break the content into clearer sections or slide-like chunks."
    },
    {
      key: "credibility",
      label: "Credibility",
      build: () => "Improve Credibility: Add evidence cues such as study, data, survey, or numeric findings."
    },
    {
      key: "visual",
      label: "Visual Impact",
      build: () => "Improve Visual Impact: Use shorter blocks, labeled takeaways, and more scan-friendly formatting."
    },
    {
      key: "cta",
      label: "CTA Strength",
      build: () => 'Improve CTA: Add a clear action phrase like "Learn more" or a practical next step.'
    },
    {
      key: "audience",
      label: "Audience Fit",
      build: () => "Improve Audience Fit: Rewrite key lines for practitioners and make the payoff more explicit."
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
    clarity: "Reduce sentence density and make the opening easier to scan.",
    engagement: "Add a stronger hook that shows why the content matters immediately.",
    structure: "Break the content into clearer sections with stronger signposting.",
    credibility: "Add more visible evidence cues such as data points or study references.",
    visual: "Use shorter content blocks so the message feels easier to scan visually.",
    cta: "End with a more explicit next step for the audience.",
    audience: "Rewrite key lines with a clearer audience payoff for practitioners."
  };

  return {
    insight: `The provided ${topic} content demonstrates strong technical depth but requires better structural signposting for non-experts.`,
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
  if (data.audience.cards.some((card) => lowerText.includes(card.title.toLowerCase()) || lowerText.includes(card.description.toLowerCase().split(" ")[0].toLowerCase()))) {
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
    liveScore.textContent = `Demo Score -> A:${scoreMap.audience} | Ac:${scoreMap.cta} | S:${scoreMap.structure} | M:${scoreMap.credibility}`;
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

    if (!lowerInput.includes("should")) {
      issues.push("weak_action_cue");
    }

    if (!lowerInput.includes("limitation")) {
      issues.push("missing_limitation");
    }

    if (localScoreMap.structure <= 4) {
      issues.push("weak_structure");
    }

    if (localScoreMap.audience <= 5) {
      issues.push("weak_audience_fit");
    }

    const scoreMap = localScoreMap;
    const scoreRows = [
      { label: "Clarity", value: scoreMap.clarity },
      { label: "Engagement", value: scoreMap.engagement },
      { label: "Structure", value: scoreMap.structure },
      { label: "Credibility", value: scoreMap.credibility },
      { label: "Visual Impact", value: scoreMap.visual },
      { label: "CTA Strength", value: scoreMap.cta },
      { label: "Audience Fit", value: scoreMap.audience }
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
