const caseData = {
  topBar: {
    eyebrow: "Output Lab / Case",
    title: "paper1 -> LinkedIn Carousel",
    subtitle: "Static case workspace. No API connected.",
    fields: [
      { label: "Paper", value: "paper1" },
      { label: "Method", value: "TODO: 填入 paper1 的研究方法" },
      { label: "Type", value: "LinkedIn Carousel" },
      { label: "Benchmark", value: "TODO: 填入 benchmark 来源" },
      { label: "AI Model", value: "Not connected" },
      { label: "Prompt", value: "TODO: 填入当前 prompt 版本" }
    ],
    actions: [
      { label: "Compare", target: "compare", variant: "secondary" },
      { label: "Diagnose", target: "diagnose", variant: "primary" }
    ]
  },
  notice: {
    code: "[CASE_STATUS]",
    title: "当前页面已切换为单 case 静态数据驱动模式。",
    message: "现在所有主区域都从 app.js 里的 caseData 渲染。若真实内容还未准备好，会明确显示 TODO 占位。"
  },
  benchmark: {
    number: "01",
    title: "Benchmark",
    description: "用于放这个 case 对标参考的结构拆解与基础说明。",
    badges: [
      { label: "Single Case", color: "blue" },
      { label: "Static Data", color: "green" }
    ],
    visualTitle: "Visual Structure Reference",
    visualPlaceholder: "TODO: 放入 paper1 + LinkedIn Carousel 的参考截图或结构草图",
    metadataTitle: "Metadata",
    metadata: [
      { label: "Case", value: "paper1 + LinkedIn Carousel" },
      { label: "Source", value: "TODO: 填入 benchmark 来源名称" },
      { label: "Rationale", value: "TODO: 说明为什么这个 benchmark 值得参考" }
    ],
    cards: [
      { title: "Problem Statement", description: "TODO: 写这个 benchmark 如何开场并定义问题。" },
      { title: "Findings", description: "TODO: 写 benchmark 如何呈现核心发现。" },
      { title: "Limitations", description: "TODO: 写 benchmark 如何保留边界与限制。" },
      { title: "Recommendations", description: "TODO: 写 benchmark 如何给出行动建议。" },
      { title: "Scope Conditions", description: "TODO: 写适用对象、场景和条件。" },
      { title: "Cautions", description: "TODO: 写需要提醒读者的风险或误读点。" }
    ]
  },
  audience: {
    number: "02",
    title: "Audience",
    description: "用于定义这个 case 面向谁、他们关心什么、会忽略什么。",
    badges: [
      { label: "Reader Fit", color: "blue" },
      { label: "Decision Context", color: "orange" }
    ],
    cards: [
      { icon: "AUD_01", title: "Who reads this", description: "TODO: 填入这组 LinkedIn Carousel 的主要读者。" },
      { icon: "AUD_02", title: "What they know", description: "TODO: 填入读者默认已知背景。" },
      { icon: "AUD_03", title: "What they need", description: "TODO: 填入读者想得到什么结论或帮助。" },
      { icon: "AUD_04", title: "Ignore trigger", description: "TODO: 填入什么表达会让他们跳过。" },
      { icon: "AUD_05", title: "Action cue", description: "TODO: 填入怎样的表达会促使他们继续看。" }
    ]
  },
  compare: {
    number: "03",
    title: "Compare",
    description: "对比 benchmark 结构和当前输出版本，方便看出差距。",
    badges: [
      { label: "Side-by-Side", color: "green" },
      { label: "Gap Check", color: "red" }
    ],
    left: {
      title: "Benchmark Structure",
      badge: { label: "Ref", color: "green" },
      outlineItems: [
        { label: "Opening Hook", text: "TODO: 填入 benchmark 的开场方式。" },
        { label: "Evidence Move", text: "TODO: 填入 benchmark 如何组织证据。" },
        { label: "Limitation Cue", text: "TODO: 填入 benchmark 如何保留限制条件。" }
      ],
      textSnippet: "TODO: 放 benchmark 的关键片段。"
    },
    right: {
      title: "Current Output",
      badge: { label: "Current", color: "orange" },
      statusLabel: "[TODO] Current output content pending",
      text: "TODO: 放当前 paper1 carousel 版本的主要文案或摘要。",
      gapsTitle: "Identified Gaps",
      gaps: [
        { label: "TODO: 填入缺口 1", color: "red" },
        { label: "TODO: 填入缺口 2", color: "orange" }
      ]
    }
  },
  diagnose: {
    number: "04",
    title: "Diagnose",
    description: "把这个 case 的问题拆成可判断、可修改的几个维度。",
    badges: [
      { label: "Static Scores", color: "blue" },
      { label: "Risk Flags", color: "red" }
    ],
    scoreTitle: "Dimension Scores",
    scores: [
      { label: "Audience Calibration", value: 2, max: 5, color: "blue" },
      { label: "Actionability", value: 2, max: 5, color: "blue" },
      { label: "Scope Fidelity", value: 1, max: 5, color: "red" },
      { label: "Method Transparency", value: 1, max: 5, color: "red" }
    ],
    analysisTitle: "Failure Mode Analysis",
    flags: [
      { label: "TODO: genre mismatch?", color: "red" },
      { label: "TODO: weak action cue?", color: "orange" }
    ],
    whyLowScore: "TODO: 用 2-3 句说明当前版本为什么分数不高。",
    priorityFixes: "TODO: 写接下来最优先要修的 1-3 个点。"
  },
  repair: {
    number: "05",
    title: "Repair",
    description: "记录这个 case 下一步怎么修，以及修前修后的文本差异。",
    badges: [
      { label: "Prompt Patch", color: "green" },
      { label: "Diff View", color: "blue" }
    ],
    checklistTitle: "Repair Checklist",
    checklist: [
      { status: "[TODO]", title: "补上读者收益", description: "TODO: 写清楚第一屏为什么值得读。" },
      { status: "[TODO]", title: "补上适用范围", description: "TODO: 避免把 paper1 结论写得过度泛化。" },
      { status: "[TODO]", title: "补上行动指令", description: "TODO: 给出 carousel 最后应落到的下一步。" }
    ],
    diffTitle: "Before / After Diff",
    beforeLabel: "[BEFORE]",
    beforeText: "TODO: 放当前待修版本文本。",
    afterLabel: "[AFTER]",
    afterText: "TODO: 放修订后的目标版本文本。",
    patchTitle: "Applied Prompt Patch",
    patchText: "TODO: 填入准备采用的修订提示词或改写规则。"
  },
  rightRail: {
    phasesTitle: "Workflow Phases",
    phases: [
      { id: "benchmark", label: "01. Benchmark" },
      { id: "audience", label: "02. Audience" },
      { id: "compare", label: "03. Compare" },
      { id: "diagnose", label: "04. Diagnose" },
      { id: "repair", label: "05. Repair" }
    ],
    dimensionsTitle: "Target Dimensions",
    dimensions: [
      { label: "Single Case", color: "blue" },
      { label: "Static Rendering", color: "orange" }
    ],
    dimensionsDescription: "这个侧栏现在也由 caseData 渲染，用来固定展示当前 case 的工作流和重点维度。",
    failureModesTitle: "Active Failure Modes",
    failureModes: [
      { label: "TODO: missing benchmark detail", color: "red" },
      { label: "TODO: audience unclear", color: "orange" },
      { label: "TODO: repair text pending", color: "red" }
    ]
  }
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
  topBar.innerHTML = `
    <div class="brand">
      <span class="eyebrow">${escapeHtml(caseData.topBar.eyebrow)}</span>
      <h1>${escapeHtml(caseData.topBar.title)}</h1>
      <p>${escapeHtml(caseData.topBar.subtitle)}</p>
    </div>
    <div class="control-grid">
      ${caseData.topBar.fields
        .map(
          (field) => `
            <div class="field">
              <div class="field-label">${escapeHtml(field.label)}</div>
              <div class="field-value">${escapeHtml(field.value)}</div>
            </div>
          `
        )
        .join("")}
      ${caseData.topBar.actions
        .map(
          (action) => `
            <a class="action ${escapeHtml(action.variant)}" href="#" data-switch-target="${escapeHtml(action.target)}">
              ${escapeHtml(action.label)}
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function renderNotice() {
  const notice = document.getElementById("notice");
  notice.innerHTML = `
    <div>${escapeHtml(caseData.notice.code)}</div>
    <div>
      <strong>${escapeHtml(caseData.notice.title)}</strong>
      <small>${escapeHtml(caseData.notice.message)}</small>
    </div>
  `;
}

function renderBenchmark() {
  const panel = document.getElementById("benchmark");
  panel.innerHTML = `
    ${renderPanelHeader(caseData.benchmark)}
    <div class="panel-body">
      <div class="meta-grid">
        <div class="box" style="border-left: 2px solid var(--brand)">
          <h3>${escapeHtml(caseData.benchmark.visualTitle)}</h3>
          <div style="height: 180px; background: rgba(6,182,212,0.05); border: 1px dashed var(--line-2); display: flex; align-items: center; justify-content: center; color: var(--muted); font-family: var(--font-mono); font-size: 12px; text-align: center; padding: 16px;">
            ${escapeHtml(caseData.benchmark.visualPlaceholder)}
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
  panel.innerHTML = `
    ${renderPanelHeader(caseData.compare)}
    <div class="panel-body">
      <div class="compare-grid">
        <div class="compare-side">
          <h3>
            <span>${escapeHtml(caseData.compare.left.title)}</span>
            <span class="mini-badge ${escapeHtml(caseData.compare.left.badge.color)}">${escapeHtml(caseData.compare.left.badge.label)}</span>
          </h3>
          ${caseData.compare.left.outlineItems
            .map(
              (item) => `
                <div class="outline-item">
                  <strong>${escapeHtml(item.label)}</strong>
                  <p>${escapeHtml(item.text)}</p>
                </div>
              `
            )
            .join("")}
          <div class="text-block" style="margin-top: 10px;"><p>${escapeHtml(caseData.compare.left.textSnippet)}</p></div>
        </div>
        <div class="compare-side">
          <h3>
            <span>${escapeHtml(caseData.compare.right.title)}</span>
            <span class="mini-badge ${escapeHtml(caseData.compare.right.badge.color)}">${escapeHtml(caseData.compare.right.badge.label)}</span>
          </h3>
          <div class="text-block" style="border-color: var(--bad); background: rgba(239, 68, 68, 0.05);">
            <p style="color: var(--bad); font-family: var(--font-mono); margin-bottom: 8px;">${escapeHtml(caseData.compare.right.statusLabel)}</p>
            <p>${escapeHtml(caseData.compare.right.text)}</p>
          </div>
          <div class="box" style="margin-top: auto;">
            <h3>${escapeHtml(caseData.compare.right.gapsTitle)}</h3>
            <div class="panel-tools">${renderPills(caseData.compare.right.gaps)}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDiagnose() {
  const panel = document.getElementById("diagnose");
  panel.innerHTML = `
    ${renderPanelHeader(caseData.diagnose)}
    <div class="panel-body">
      <div class="diagnose-grid">
        <div class="box">
          <h3>${escapeHtml(caseData.diagnose.scoreTitle)}</h3>
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
        <div class="box">
          <h3>${escapeHtml(caseData.diagnose.analysisTitle)}</h3>
          <div style="margin-bottom: 16px;">${renderPills(caseData.diagnose.flags)}</div>
          <p style="margin-bottom: 12px; color: var(--ink);"><strong>Why low score:</strong> ${escapeHtml(caseData.diagnose.whyLowScore)}</p>
          <p style="color: var(--ink);"><strong>Priority Fixes:</strong> ${escapeHtml(caseData.diagnose.priorityFixes)}</p>
        </div>
      </div>
    </div>
  `;
}

function renderRepair() {
  const panel = document.getElementById("repair");
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
          <h3>${escapeHtml(caseData.repair.diffTitle)}</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="text-block" style="border-color: var(--line-2);">
              <strong style="color: var(--muted); display:block; margin-bottom: 8px; font-family: var(--font-mono);">${escapeHtml(caseData.repair.beforeLabel)}</strong>
              <p>${escapeHtml(caseData.repair.beforeText)}</p>
            </div>
            <div class="text-block" style="border-color: var(--good); background: rgba(16,185,129,0.05);">
              <strong style="color: var(--good); display:block; margin-bottom: 8px; font-family: var(--font-mono);">${escapeHtml(caseData.repair.afterLabel)}</strong>
              <p>${escapeHtml(caseData.repair.afterText)}</p>
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
  rail.innerHTML = `
    <div class="rail-card">
      <h3>${escapeHtml(caseData.rightRail.phasesTitle)}</h3>
      <div class="anchor-list" id="tab-nav">
        ${caseData.rightRail.phases
          .map(
            (phase, index) => `
              <a class="anchor-link ${index === 0 ? "active" : ""}" data-target="${escapeHtml(phase.id)}">
                <span>${escapeHtml(phase.label)}</span>
              </a>
            `
          )
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
  renderNotice();
  renderBenchmark();
  renderAudience();
  renderCompare();
  renderDiagnose();
  renderRepair();
  renderRightRail();
}

function bindNavigation() {
  document.querySelectorAll(".anchor-link, [data-switch-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.getAttribute("data-target") || link.getAttribute("data-switch-target");
      switchTab(target);
    });
  });
}

function switchTab(targetId) {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });

  const links = document.querySelectorAll(".anchor-link");
  links.forEach((link) => {
    link.classList.remove("active");
  });

  const targetPanel = document.getElementById(targetId);
  if (!targetPanel) {
    return;
  }

  targetPanel.classList.add("active");

  const targetLink = document.querySelector(`.anchor-link[data-target="${targetId}"]`);
  if (targetLink) {
    targetLink.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  bindNavigation();
});

window.switchTab = switchTab;
