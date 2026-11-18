// console.js — the landing page's console. Hand-maintained, like index.qmd; not part of the sync.
// The figure is a parts kit: hat, eyes, arms, coat, held object and surroundings are separate groups in
// the SVG in index.qmd, and each chapter is a recipe over them. The controls are drawn here, one kind
// per chapter, and are real links to the chapter pages; the desk under them is modeled in 3D and drawn
// in perspective. Pointer: hover previews, a press opens the chapter. Touch: the first tap shows the
// chapter in the agent's speech bubble, with a link, and the second opens.
// Draw SVG links after Quarto has normalized the page's HTML links.
document.addEventListener("DOMContentLoaded", function () {
  const SITE = "chapters/";
  const PARTS = {
    I: { name: "Part I · Orientation", dot: "var(--c-blue-2)" },
    II: { name: "Part II · Direct the work", dot: "var(--c-mustard)" },
    III: { name: "Part III · Do the research", dot: "var(--c-part-research)" },
    A: { name: "Reference", dot: "var(--c-part-reference)" },
  };
  const COATS = {
    sage:    { c: "#6f7f76", dk: "#55635b", lt: "#8a9a90" },
    slate:   { c: "#4f6478", dk: "#3b4c5c", lt: "#6a8098" },
    mustard: { c: "#b8963a", dk: "#8f7228", lt: "#d1b05a" },
    rose:    { c: "#b08984", dk: "#8b6a66", lt: "#c7a39e" },
    crimson: { c: "#8c3a45", dk: "#6a2a33", lt: "#a95560" },
  };
  // Gloves: chosen per chapter to contrast with the coat, since a hand the coat's own color disappears.
  const GLOVES = {
    brown:   { c: "#7a5535", dk: "#5c3f27" },
    cream:   { c: "#e3d9c1", dk: "#c9bda0" },
    mustard: { c: "#c8a23c", dk: "#8f7228" },
    slate:   { c: "#4f6478", dk: "#3b4c5c" },
  };
  const EYES = {
    calm:    { color: "#f0d67a", r: 9,  brows: false },
    alert:   { color: "#6fa3e6", r: 11, brows: false },
    alarmed: { color: "#e07a7a", r: 13, brows: true },
    focus:   { color: "#8fd39a", r: 6,  brows: true },
  };
  const ARMS = {
    rest: { L: [8, -6],   R: [-8, 6] },
    wave: { L: [8, -6],   R: [-135, -45] },
    hold: { L: [8, -6],   R: [-35, -85] },
    up:   { L: [140, 30], R: [-140, -30] },
  };
  const SHOULDER = { L: [556, 160], R: [644, 160] };
  const SEG = { sleeve: 64, forearm: 44, hand: 22 };

  // ---- chapters: a recipe for the figure and a control on the console ----
  const CH = [
    { n: "1", part: "I", slug: "research-uses", title: "How agents can help your research", ctl: "dome",
      r: { hat: "fedora", eyes: "calm", arms: "wave", coat: "sage", gloves: "brown", holds: null, scene: null },
      body: "Research depends on more than getting an answer quickly. We need to know what was done, whether it matches the question, and whether someone can reproduce it. An agent can help maintain that connection while doing much of the coding, searching, checking, and documentation. Used well, it can make research faster, more robust, reproducible, and auditable." },
    { n: "2", part: "I", slug: "first-session", title: "Get started with the app", ctl: "app",
      r: { hat: "bowler", eyes: "calm", arms: "hold", coat: "slate", gloves: "cream", holds: "terminal", scene: null },
      body: "You can use an agent with familiar research files and software without first learning a terminal. This chapter introduces the app and its main controls, so that later instructions about a folder, a session, or a permission mode have a clear meaning." },
    { n: "3", part: "I", slug: "research-limits", title: "Know where your data goes", ctl: "transfer",
      r: { hat: "fedora", eyes: "alert", arms: "rest", coat: "slate", gloves: "mustard", holds: null, scene: "glassbox" },
      body: "Protected research material can reach an external service through an agent's normal work. Before using it, establish where the information will go, whether that processing is permitted, and what copies may remain. These decisions affect the research environment you choose and the records you need to keep." },
    { n: "4", part: "I", slug: "agent-access", title: "Control what the agent can do", ctl: "stop",
      r: { hat: "fedora", eyes: "alert", arms: "rest", coat: "slate", gloves: "mustard", holds: null, scene: "glassbox" },
      body: "You decide which files the agent may read or change and which services it may use. The agent can configure and check those controls, so routine work can proceed while other files remain protected. This chapter explains permission rules, sandbox restrictions, and when a separate environment helps." },
    { n: "5", part: "I", slug: "directing-work", title: "Choose settings for the task", ctl: "rotary",
      r: { hat: "fedora", eyes: "alert", arms: "hold", coat: "mustard", gloves: "brown", holds: "dial", scene: null },
      body: "Choose whether the agent should plan before acting, how actions receive approval, and which LLM and reasoning effort to use. A figure-label change can proceed directly; conflicting estimates may need investigation. The app also shows your usage allowance and reset information." },
    { n: "6", part: "II", slug: "project-organization", title: "Organize your research projects", ctl: "folder",
      r: { hat: "fedora", eyes: "focus", arms: "hold", coat: "sage", gloves: "cream", holds: "sheet", scene: null },
      body: "An agent needs to find the right files before it can do useful work. A consistent project structure helps it locate the current analysis, preserve original inputs, and save results where you and your collaborators expect them. The same organization makes it easier to explain how a result was produced or return to an earlier version." },
    { n: "7", part: "II", slug: "project-context", title: "Give the agent context for your project", ctl: "context",
      r: { hat: "fedora", eyes: "focus", arms: "hold", coat: "sage", gloves: "cream", holds: "sheet", scene: null },
      body: "An agent joining a research project needs to know what you are trying to establish, which files to use, and which decisions have already been made. Saving that knowledge in the project lets it begin useful work without repeatedly asking you to reconstruct the study. The records also help you and your collaborators understand changes made along the way." },
    { n: "8", part: "II", slug: "shared-conventions", title: "Apply your conventions across projects", ctl: "defaults",
      r: { hat: "hardhat", eyes: "calm", arms: "rest", coat: "mustard", gloves: "slate", holds: null, scene: "tree" },
      body: "You should not have to explain the same coding, modeling, or writing preferences whenever you begin a project. Shared instructions let the agent reuse those conventions while keeping each study's question, data, and decisions in its own records. Corrections made during one project can then improve work on the next." },
    { n: "9", part: "II", slug: "reusable-procedures", title: "Use skills for recurring tasks", ctl: "keys",
      r: { hat: "bowler", eyes: "calm", arms: "hold", coat: "rose", gloves: "slate", holds: "gear", scene: null },
      body: "Many research tasks recur with different inputs: setting up a paper, checking citations, or preparing figures for a manuscript. A *skill* saves instructions for an agent to carry out a task, including the checks that make its result useful. It can preserve lessons from earlier work and reduce the need to explain the same steps again." },
    { n: "10", part: "III", slug: "example-project", title: "The example research project", ctl: "study",
      r: { hat: "hardhat", eyes: "focus", arms: "hold", coat: "mustard", gloves: "brown", holds: "dice", scene: null },
      body: "How does heat exposure relate to birthweight, and does that relationship vary with maternal age? This question connects the following chapters. An agent can help develop it, examine the evidence, and build an analysis whose results can be checked and reproduced." },
    { n: "11", part: "III", slug: "literature", title: "Find and assess research literature", ctl: "references",
      r: { hat: "beret", eyes: "alert", arms: "hold", coat: "slate", gloves: "cream", holds: "books", scene: null },
      body: "An agent can help find evidence, compare explanations, and identify gaps in a proposed study. Its synthesis is useful only if you can locate the sources and check what they support." },
    { n: "12", part: "III", slug: "data-acquisition", title: "Bring data into the project", ctl: "datainputs",
      r: { hat: "fedora", eyes: "calm", arms: "hold", coat: "slate", gloves: "mustard", holds: "key", scene: "database" },
      body: "An agent needs the intended research inputs and enough documentation to use them correctly. Whether files arrive from a collaborator, already sit on disk, or must be collected, establish what they contain and preserve where they came from." },
    { n: "13", part: "III", slug: "research-workflows", title: "Build a modular analysis workflow", ctl: "sequencer",
      r: { hat: "hardhat", eyes: "focus", arms: "hold", coat: "mustard", gloves: "brown", holds: "dice", scene: null },
      body: "Research analyses change repeatedly. Separating the work into independently runnable steps lets an agent revise one part without rerunning everything. Saved inputs and outputs also make errors easier to locate." },
    { n: "14", part: "III", slug: "simulation", title: "Test the analysis against known truth", ctl: "scope",
      r: { hat: "hardhat", eyes: "focus", arms: "hold", coat: "mustard", gloves: "brown", holds: "dice", scene: null },
      body: "Simulation can check whether the code an agent builds runs successfully and whether a statistical method produces reliable estimates and uncertainty intervals. Repeating the analysis on synthetic datasets with known truth lets you assess its performance under different conditions." },
    { n: "15", part: "III", slug: "checking-analysis", title: "Check the agent with independent implementations", ctl: "twinmeters",
      r: { hat: "fedora", eyes: "alert", arms: "hold", coat: "sage", gloves: "mustard", holds: "magnifier", scene: null },
      body: "Independently built implementations give mistakes a chance to produce observable disagreements. Each agent receives the same specification and inputs, works through the analysis separately, and saves comparable outputs. A rerun of the same code cannot provide this check." },
    { n: "16", part: "III", slug: "llm-measurements", title: "Use LLM outputs as research data", ctl: "measurement",
      r: { hat: "fedora", eyes: "calm", arms: "hold", coat: "slate", gloves: "brown", holds: "package", scene: null },
      body: "LLMs can classify documents, extract information, or assess material that would take a research team considerable time to read. When their responses become variables in an analysis, errors in those responses affect the evidence. Define what the LLM should produce and evaluate whether it does that well enough for the study." },
    { n: "17", part: "III", slug: "research-models", title: "Run and adapt LLMs for your research", ctl: "adaptlever",
      r: { hat: "hardhat", eyes: "focus", arms: "hold", coat: "slate", gloves: "brown", holds: "gear", scene: null },
      body: "Running an LLM yourself can give you control over where research material is processed and preserve access to the weights used in a study. Training an existing LLM on reviewed examples may improve a recurring task. These are separate choices, with different costs and checks." },
    { n: "18", part: "III", slug: "research-writing", title: "Write and revise the manuscript", ctl: "paperprinter",
      r: { hat: "beret", eyes: "calm", arms: "hold", coat: "rose", gloves: "cream", holds: "pen", scene: null },
      body: "A manuscript can retain an outdated estimate after the analysis has changed. An agent can help keep the text, tables, and figures consistent with the saved results, and identify interpretations that need reconsidering." },
    { n: "19", part: "III", slug: "research-handoff", title: "Reproduce and hand off the research", ctl: "rerun",
      r: { hat: "none", eyes: "focus", arms: "hold", coat: "sage", gloves: "brown", holds: "clipboard", scene: null },
      body: "Another researcher should be able to reproduce the reported results using the supplied files and instructions. An agent can prepare and test those materials, finding dependencies that are easy to miss in a familiar working project." },
    { n: "A", part: "A", slug: "starter-files", title: "Project scaffolds and starter files", ctl: "key",
      r: { hat: "none", eyes: "calm", arms: "hold", coat: "sage", gloves: "cream", holds: "sheet", scene: null },
      body: "Choose a paper, dataset, or website scaffold, then have the agent adapt its folders and project context files to your work. Downloadable specifications accompany templates for project context files and global user instructions." },
    { n: "B", part: "A", slug: "prompt-index", title: "Prompt bank", ctl: "key",
      r: { hat: "bowler", eyes: "focus", arms: "hold", coat: "mustard", gloves: "brown", holds: "clipboard", scene: null },
      body: "Find a prompt for your research task, supply the listed files or decisions, and adapt it to the project. Prompts are grouped by task and link to their explanations in the guide." },
    { n: "C", part: "A", slug: "troubleshooting", title: "Troubleshooting", ctl: "key",
      r: { hat: "fedora", eyes: "alarmed", arms: "up", coat: "rose", gloves: "brown", holds: null, scene: null },
      body: "Find the problem you have encountered and what to ask the agent to investigate. Preserve the affected files and establish the cause before changing the analysis." },
    { n: "D", part: "A", slug: "glossary", title: "Glossary", ctl: "key",
      r: { hat: "bowler", eyes: "calm", arms: "hold", coat: "sage", gloves: "cream", holds: "sheet", scene: null },
      body: "Look up an unfamiliar term, then follow its link to the explanation in the guide. Definitions distinguish agents, LLMs, and statistical concepts." },
  ];
  const DEFAULT = { hat: "fedora", eyes: "calm", arms: "wave", coat: "sage", gloves: "brown", holds: null, scene: null };

  const svgNS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(svgNS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const txt = (parent, x, y, s, cls, extra) => {
    const t = el("text", Object.assign({ x, y, class: cls }, extra || {}), parent); t.textContent = s; return t;
  };

  // ---- arms ----
  const rad = d => d * Math.PI / 180;
  function armGroup(side, a1, a2) {
    const [sx, sy] = SHOULDER[side];
    const g = el("g", { class: "arm-seg", transform: `translate(${sx},${sy}) rotate(${a1})` });
    el("rect", { x: -13, y: -4, width: 26, height: SEG.sleeve + 4, rx: 6, class: "coat" }, g);
    el("rect", { x: -13, y: SEG.sleeve - 8, width: 26, height: 9, class: "coat-dk" }, g);
    el("circle", { cx: 0, cy: 0, r: 9, class: "coat-dk" }, g);
    const f = el("g", { class: "arm-seg", transform: `translate(0,${SEG.sleeve}) rotate(${a2})` }, g);
    el("circle", { cx: 0, cy: 0, r: 8, fill: "var(--c-metal-3)" }, f);
    el("rect", { x: -10, y: 0, width: 20, height: SEG.forearm, rx: 4, fill: "var(--c-metal)" }, f);
    el("rect", { x: -10, y: SEG.forearm - 6, width: 20, height: 6, fill: "var(--c-metal-3)" }, f);
    el("rect", { x: -12, y: SEG.forearm, width: 24, height: SEG.hand, rx: 4, fill: "var(--gloves)" }, f);
    [-9, -2, 5].forEach(x => el("rect", { x, y: SEG.forearm + SEG.hand - 4, width: 6, height: 12, rx: 2, fill: "var(--gloves-dk)" }, f));
    el("rect", { x: -12, y: SEG.forearm, width: 24, height: 4, fill: "var(--gloves-dk)" }, f);
    return g;
  }
  function handAnchor(side, a1, a2) {
    const [sx, sy] = SHOULDER[side];
    const d1 = rad(a1), d2 = rad(a1 + a2);
    const ex = sx - Math.sin(d1) * SEG.sleeve, ey = sy + Math.cos(d1) * SEG.sleeve;
    const len = SEG.forearm + SEG.hand + 10;
    return [ex - Math.sin(d2) * len, ey + Math.cos(d2) * len];
  }

  const figure = document.getElementById("figure");
  const arms = document.getElementById("arms");
  const held = document.getElementById("held");
  function showPart(container, name) {
    container.querySelectorAll(".part").forEach(p => { if (p.dataset.part === name) p.classList.add("show"); });
  }
  function applyRecipe(r) {
    const c = COATS[r.coat];
    figure.style.setProperty("--coat", c.c); figure.style.setProperty("--coat-dk", c.dk); figure.style.setProperty("--coat-lt", c.lt);
    const g = GLOVES[r.gloves];
    figure.style.setProperty("--gloves", g.c); figure.style.setProperty("--gloves-dk", g.dk);
    const e = EYES[r.eyes];
    figure.querySelectorAll(".iris").forEach(i => { i.setAttribute("r", e.r); i.setAttribute("fill", e.color); });
    document.querySelectorAll(".part").forEach(p => p.classList.remove("show"));
    showPart(figure, r.hat === "none" ? "antenna" : r.hat);
    if (e.brows) showPart(figure, "brows");
    if (r.scene) showPart(document.getElementById("surround"), r.scene);
    arms.replaceChildren();
    const A = ARMS[r.arms];
    arms.appendChild(armGroup("L", ...A.L)); arms.appendChild(armGroup("R", ...A.R));
    if (r.holds) {
      const [hx, hy] = handAnchor("R", ...A.R);
      held.setAttribute("transform", `translate(${hx.toFixed(1)},${hy.toFixed(1)})`);
      showPart(held, r.holds);
    }
  }

  // ---- the control kit: each draws itself around (x, y) and returns half its height, for the number below ----
  const EDGE = "var(--c-panel-edge)", DEEP = "var(--c-panel-3)", PAPER = "var(--c-paper)", INK = "#262c2d";
  const CTL = {
    dome(a, x, y, dot) {
      el("circle", { cx: x, cy: y, r: 26, fill: EDGE }, a);
      el("circle", { cx: x, cy: y, r: 22, fill: DEEP }, a);
      el("circle", { cx: x, cy: y - 1, r: 18, fill: dot, class: "lamp" }, a);
      el("ellipse", { cx: x - 6, cy: y - 8, rx: 6, ry: 4, fill: "#fff", opacity: 0.35 }, a);
      txt(a, x, y + 3, "START", "tag", { "text-anchor": "middle", style: "font-size:6.5px" });
      el("circle", { cx: x, cy: y, r: 30, class: "ring" }, a);
      return 28;
    },
    crt(a, x, y) {
      el("rect", { x: x - 44, y: y - 32, width: 88, height: 64, rx: 7, fill: EDGE }, a);
      el("rect", { x: x - 37, y: y - 26, width: 74, height: 50, rx: 5, fill: "var(--c-screen)", class: "glow" }, a);
      txt(a, x - 31, y - 12, "read files", "scr"); txt(a, x - 31, y - 1, "run code", "scr");
      txt(a, x - 31, y + 10, "read output", "scr"); txt(a, x - 31, y + 21, "edit  _", "scr");
      el("rect", { x: x - 37, y: y - 26, width: 74, height: 50, rx: 5, fill: "url(#scan)" }, a);
      el("circle", { cx: x + 36, cy: y + 26, r: 3, fill: "var(--c-olive)", class: "lamp" }, a);
      el("rect", { x: x - 48, y: y - 36, width: 96, height: 72, rx: 9, class: "ring" }, a);
      return 34;
    },
    lampgrid(a, x, y, dot) {
      el("rect", { x: x - 36, y: y - 22, width: 72, height: 44, rx: 4, fill: EDGE }, a);
      txt(a, x - 32, y - 12, "claude", "tag", { style: "fill:var(--c-plate);opacity:.9" });
      txt(a, x - 32, y + 16, "codex", "tag", { style: "fill:var(--c-plate);opacity:.9" });
      [0, 1].forEach(r => [0, 1, 2, 3].forEach(c => {
        const lit = !(r === 1 && c === 3);
        el("circle", { cx: x - 2 + c * 10, cy: y - 7 + r * 14, r: 3.6, fill: lit ? dot : DEEP, class: lit ? "lamp" : "" }, a);
      }));
      el("rect", { x: x - 40, y: y - 26, width: 80, height: 52, rx: 6, class: "ring" }, a);
      return 24;
    },
    rotary(a, x, y, dot) {
      el("circle", { cx: x, cy: y, r: 26, fill: EDGE }, a);
      [[-0.85, "ask"], [0, "plan"], [0.85, "auto"]].forEach(([t, s]) => {
        const ang = -Math.PI / 2 + t * 1.05;
        el("line", { x1: x + Math.cos(ang) * 22, y1: y + Math.sin(ang) * 22, x2: x + Math.cos(ang) * 26, y2: y + Math.sin(ang) * 26, stroke: "var(--c-plate)", "stroke-width": 2 }, a);
        txt(a, x + Math.cos(ang) * 35, y + Math.sin(ang) * 35 + 2.5, s, "tag", { "text-anchor": "middle" });
      });
      el("circle", { cx: x, cy: y, r: 17, fill: dot, class: "lamp" }, a);
      el("circle", { cx: x, cy: y, r: 17, fill: "none", stroke: DEEP, "stroke-width": 2 }, a);
      el("line", { x1: x, y1: y, x2: x - 11, y2: y - 11, stroke: EDGE, "stroke-width": 3.5, "stroke-linecap": "round" }, a);
      el("circle", { cx: x, cy: y, r: 30, class: "ring" }, a);
      return 28;
    },
    toggles(a, x, y, dot) {
      el("rect", { x: x - 40, y: y - 24, width: 80, height: 48, rx: 4, fill: EDGE }, a);
      txt(a, x - 36, y - 15, "ON", "tag", { style: "fill:var(--c-plate);opacity:.8" });
      txt(a, x - 36, y + 21, "OFF", "tag", { style: "fill:var(--c-plate);opacity:.8" });
      [0, 1, 2, 3].forEach(i => {
        const cx = x - 16 + i * 16;
        el("rect", { x: cx - 5, y: y - 15, width: 10, height: 30, rx: 5, fill: DEEP }, a);
        el("circle", { cx, cy: i === 2 ? y + 8 : y - 8, r: 5.5, fill: i === 2 ? "var(--c-metal-2)" : dot, class: i === 2 ? "" : "lamp" }, a);
      });
      el("rect", { x: x - 44, y: y - 28, width: 88, height: 56, rx: 6, class: "ring" }, a);
      return 26;
    },
    cardslot(a, x, y, dot) {
      el("rect", { x: x - 30, y: y - 26, width: 56, height: 40, rx: 2, fill: PAPER, stroke: "#4f5856", "stroke-width": 1.5, transform: `rotate(-6 ${x} ${y})` }, a);
      el("rect", { x: x - 30, y: y - 26, width: 56, height: 6, fill: dot, class: "lamp", transform: `rotate(-6 ${x} ${y})` }, a);
      txt(a, x - 25, y - 9, "AGENTS.md", "tiny", { style: `fill:${INK};font-size:7.5px`, transform: `rotate(-6 ${x} ${y})` });
      [-2, 4].forEach(dy => el("rect", { x: x - 25, y: y + dy, width: 36 - Math.abs(dy) * 2, height: 2.5, fill: "#cfc8b9", transform: `rotate(-6 ${x} ${y})` }, a));
      el("rect", { x: x - 38, y: y + 10, width: 76, height: 14, rx: 3, fill: EDGE }, a);
      el("rect", { x: x - 32, y: y + 14, width: 64, height: 5, rx: 2, fill: DEEP }, a);
      el("rect", { x: x - 42, y: y - 30, width: 84, height: 58, rx: 6, class: "ring" }, a);
      return 26;
    },
    dpad(a, x, y, dot) {
      el("path", { d: `M${x - 10} ${y - 30} h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 v-20 h20 z`, fill: EDGE }, a);
      el("path", { d: `M${x - 7} ${y - 27} h14 v20 h20 v14 h-20 v20 h-14 v-20 h-20 v-14 h20 z`, fill: DEEP }, a);
      const tri = "var(--c-plate)";
      el("polygon", { points: `${x},${y - 24} ${x - 5},${y - 16} ${x + 5},${y - 16}`, fill: tri }, a);
      el("polygon", { points: `${x},${y + 24} ${x - 5},${y + 16} ${x + 5},${y + 16}`, fill: tri }, a);
      el("polygon", { points: `${x - 24},${y} ${x - 16},${y - 5} ${x - 16},${y + 5}`, fill: tri }, a);
      el("polygon", { points: `${x + 24},${y} ${x + 16},${y - 5} ${x + 16},${y + 5}`, fill: tri }, a);
      el("circle", { cx: x, cy: y, r: 7, fill: dot, class: "lamp" }, a);
      el("rect", { x: x - 34, y: y - 34, width: 68, height: 68, rx: 8, class: "ring" }, a);
      return 32;
    },
    keys(a, x, y, dot) {
      ["/lit", "/sim", "/pdf"].forEach((s, i) => {
        const kx = x - 30 + i * 30;
        el("rect", { x: kx - 13, y: y - 11, width: 26, height: 26, rx: 4, fill: EDGE }, a);
        el("rect", { x: kx - 12, y: y - 13, width: 24, height: 24, rx: 4, fill: dot, class: "lamp" }, a);
        txt(a, kx, y + 1.5, s, "tag", { "text-anchor": "middle" });
      });
      el("rect", { x: x - 48, y: y - 18, width: 96, height: 38, rx: 6, class: "ring" }, a);
      return 18;
    },
    counter(a, x, y, dot) {
      el("rect", { x: x - 36, y: y - 15, width: 72, height: 30, rx: 3, fill: EDGE }, a);
      txt(a, x - 32, y - 6, "TASKS DONE", "tag", { style: "fill:var(--c-plate);opacity:.8;font-size:6px" });
      "0042".split("").forEach((d, i) => {
        el("rect", { x: x - 30 + i * 12, y: y - 2, width: 10, height: 14, rx: 1.5, fill: PAPER }, a);
        txt(a, x - 25 + i * 12, y + 9, d, "tiny", { "text-anchor": "middle", style: `fill:${INK};font-size:9.5px;font-weight:600` });
      });
      el("circle", { cx: x + 27, cy: y + 5, r: 3.5, fill: dot, class: "lamp" }, a);
      el("rect", { x: x - 40, y: y - 19, width: 80, height: 38, rx: 5, class: "ring" }, a);
      return 17;
    },
    ledbar(a, x, y, dot) {
      el("rect", { x: x - 36, y: y - 14, width: 72, height: 28, rx: 3, fill: EDGE }, a);
      txt(a, x - 32, y - 5, "VERIFIED", "tag", { style: "fill:var(--c-plate);opacity:.8;font-size:6px" });
      for (let i = 0; i < 10; i++) {
        const lit = i < 7;
        el("rect", { x: x - 31 + i * 6.4, y: y, width: 4.6, height: 9, rx: 1, fill: lit ? (i < 5 ? dot : "var(--c-mustard)") : DEEP, class: lit ? "lamp" : "" }, a);
      }
      el("rect", { x: x - 40, y: y - 18, width: 80, height: 36, rx: 5, class: "ring" }, a);
      return 16;
    },
    jacks(a, x, y, dot) {
      el("rect", { x: x - 30, y: y - 16, width: 60, height: 32, rx: 3, fill: EDGE }, a);
      ["api", "file", "web"].forEach((s, i) => {
        const cx = x - 18 + i * 18;
        el("circle", { cx, cy: y - 3, r: 6.5, fill: "var(--c-metal-2)" }, a);
        el("circle", { cx, cy: y - 3, r: 3.5, fill: DEEP }, a);
        txt(a, cx, y + 11, s, "tag", { "text-anchor": "middle", style: "fill:var(--c-plate);opacity:.85;font-size:5.5px" });
      });
      el("circle", { cx: x - 18, cy: y - 3, r: 3.5, fill: dot, class: "lamp" }, a);
      el("rect", { x: x - 21, y: y - 6, width: 6, height: 12, rx: 1.5, fill: "var(--c-metal-3)" }, a);
      el("path", { d: `M${x - 18} ${y + 5} C ${x - 18} ${y + 22}, ${x - 34} ${y + 18}, ${x - 34} ${y + 34}`, fill: "none", stroke: dot, "stroke-width": 3, "stroke-linecap": "round" }, a);
      el("rect", { x: x - 34, y: y - 20, width: 68, height: 40, rx: 5, class: "ring" }, a);
      return 18;
    },
    scope(a, x, y, dot) {
      el("rect", { x: x - 42, y: y - 30, width: 84, height: 60, rx: 6, fill: EDGE }, a);
      el("rect", { x: x - 35, y: y - 24, width: 70, height: 48, rx: 4, fill: "var(--c-screen)", class: "glow" }, a);
      for (let i = 1; i < 5; i++) el("line", { x1: x - 35 + i * 14, y1: y - 24, x2: x - 35 + i * 14, y2: y + 24, stroke: "var(--c-phosphor)", "stroke-width": 0.5, opacity: 0.25 }, a);
      el("line", { x1: x - 35, y1: y, x2: x + 35, y2: y, stroke: "var(--c-phosphor)", "stroke-width": 0.5, opacity: 0.35 }, a);
      const sine = (amp, ph) => { let d = ""; for (let i = 0; i <= 28; i++) { const px = x - 33 + i * 2.36, py = y + Math.sin(i / 28 * Math.PI * 3 + ph) * amp; d += (i ? "L" : "M") + px.toFixed(1) + " " + py.toFixed(1); } return d; };
      el("path", { d: sine(13, 0), fill: "none", stroke: "var(--c-phosphor)", "stroke-width": 1.8 }, a);
      el("path", { d: sine(11, 0.25), fill: "none", stroke: "var(--c-mustard-2)", "stroke-width": 1.2, "stroke-dasharray": "3 2" }, a);
      txt(a, x - 33, y - 16, "truth / fit", "scr", { style: "font-size:6.5px" });
      el("circle", { cx: x + 36, cy: y + 24, r: 3, fill: dot, class: "lamp" }, a);
      el("rect", { x: x - 46, y: y - 34, width: 92, height: 68, rx: 8, class: "ring" }, a);
      return 32;
    },
    twinmeters(a, x, y, dot) {
      [["R", -22], ["Python", 22]].forEach(([s, dx]) => {
        const mx = x + dx;
        el("rect", { x: mx - 19, y: y - 22, width: 38, height: 40, rx: 3, fill: EDGE }, a);
        el("rect", { x: mx - 16, y: y - 19, width: 32, height: 26, rx: 2, fill: PAPER }, a);
        el("path", { d: `M${mx - 12} ${y + 3} A13 13 0 0 1 ${mx + 12} ${y + 3}`, fill: "none", stroke: "#cfc8b9", "stroke-width": 3 }, a);
        el("path", { d: `M${mx + 4} ${y - 9} A13 13 0 0 1 ${mx + 12} ${y + 3}`, fill: "none", stroke: "var(--c-red)", "stroke-width": 3 }, a);
        el("line", { x1: mx, y1: y + 4, x2: mx - 5, y2: y - 8, stroke: INK, "stroke-width": 1.6, "stroke-linecap": "round" }, a);
        txt(a, mx, y + 15, s, "tag", { "text-anchor": "middle", style: "fill:var(--c-plate);opacity:.9" });
      });
      el("circle", { cx: x, cy: y + 12, r: 3.5, fill: dot, class: "lamp" }, a);
      el("rect", { x: x - 43, y: y - 26, width: 86, height: 48, rx: 6, class: "ring" }, a);
      return 22;
    },
    printer(a, x, y, dot) {
      el("rect", { x: x - 20, y: y - 34, width: 40, height: 36, fill: PAPER, stroke: "#4f5856", "stroke-width": 1.2 }, a);
      [-27, -21, -15, -9].forEach((dy, i) => el("rect", { x: x - 15, y: y + dy, width: 30 - i * 6, height: 2.4, fill: i === 3 ? "var(--c-rose)" : "#cfc8b9" }, a));
      el("rect", { x: x - 28, y: y - 2, width: 56, height: 26, rx: 4, fill: EDGE }, a);
      el("rect", { x: x - 20, y: y - 5, width: 40, height: 5, rx: 2, fill: DEEP }, a);
      txt(a, x - 24, y + 17, "DRAFT", "tag", { style: "fill:var(--c-plate);opacity:.8;font-size:6px" });
      el("circle", { cx: x + 20, cy: y + 13, r: 3.5, fill: dot, class: "lamp" }, a);
      el("rect", { x: x - 32, y: y - 38, width: 64, height: 66, rx: 6, class: "ring" }, a);
      return 26;
    },
    lever(a, x, y, dot) {
      el("rect", { x: x - 16, y: y - 48, width: 32, height: 96, rx: 5, fill: EDGE }, a);
      el("rect", { x: x - 5, y: y - 40, width: 10, height: 80, rx: 5, fill: DEEP }, a);
      txt(a, x, y - 43 + 4, "RUN", "tag", { "text-anchor": "middle", style: "fill:var(--c-plate);opacity:.9;font-size:5.5px" });
      txt(a, x, y + 45, "ALL", "tag", { "text-anchor": "middle", style: "fill:var(--c-plate);opacity:.9;font-size:5.5px" });
      el("rect", { x: x - 4, y: y - 12, width: 8, height: 38, rx: 3, fill: "var(--c-metal)" }, a);
      el("circle", { cx: x, cy: y - 16, r: 10, fill: dot, class: "lamp" }, a);
      el("ellipse", { cx: x - 3, cy: y - 20, rx: 3, ry: 2, fill: "#fff", opacity: 0.4 }, a);
      el("rect", { x: x - 20, y: y - 52, width: 40, height: 104, rx: 7, class: "ring" }, a);
      return 50;
    },
    keyswitch(a, x, y, dot) {
      el("rect", { x: x - 24, y: y - 24, width: 48, height: 48, rx: 5, fill: EDGE }, a);
      el("circle", { cx: x, cy: y - 2, r: 16, fill: "var(--c-metal-2)" }, a);
      el("circle", { cx: x, cy: y - 2, r: 11, fill: "var(--c-metal)" }, a);
      el("rect", { x: x - 2, y: y - 12, width: 4, height: 20, rx: 1.5, fill: EDGE, transform: `rotate(-30 ${x} ${y - 2})` }, a);
      txt(a, x, y + 20, "LOCKED", "tag", { "text-anchor": "middle", style: "fill:var(--c-plate);opacity:.9;font-size:5.5px" });
      el("circle", { cx: x + 17, cy: y - 17, r: 3, fill: "var(--c-red)", class: "lamp" }, a);
      el("rect", { x: x - 28, y: y - 28, width: 56, height: 56, rx: 7, class: "ring" }, a);
      return 26;
    },
    gauge(a, x, y, dot) {
      el("rect", { x: x - 46, y: y - 30, width: 92, height: 60, rx: 6, fill: EDGE }, a);
      el("rect", { x: x - 41, y: y - 25, width: 82, height: 50, rx: 4, fill: PAPER }, a);
      const arc = (a0, a1, col, w) => { const p = t => [x + Math.cos(t) * 28, y + 12 + Math.sin(t) * 28]; const [x0, y0] = p(a0), [x1, y1] = p(a1); el("path", { d: `M${x0} ${y0} A28 28 0 0 1 ${x1} ${y1}`, fill: "none", stroke: col, "stroke-width": w }, a); };
      arc(Math.PI, Math.PI * 1.45, "var(--c-olive)", 6); arc(Math.PI * 1.45, Math.PI * 1.75, "var(--c-mustard)", 6); arc(Math.PI * 1.75, Math.PI * 2, "var(--c-red)", 6);
      for (let i = 0; i <= 8; i++) { const t = Math.PI + i * Math.PI / 8; el("line", { x1: x + Math.cos(t) * 21, y1: y + 12 + Math.sin(t) * 21, x2: x + Math.cos(t) * 24, y2: y + 12 + Math.sin(t) * 24, stroke: INK, "stroke-width": 1 }, a); }
      el("line", { x1: x, y1: y + 12, x2: x - 14, y2: y - 10, stroke: INK, "stroke-width": 2, "stroke-linecap": "round" }, a);
      el("circle", { cx: x, cy: y + 12, r: 4, fill: INK }, a);
      txt(a, x - 36, y + 20, "chat", "tag", { style: `fill:${INK}` }); txt(a, x + 36, y + 20, "pipeline", "tag", { "text-anchor": "end", style: `fill:${INK}` });
      txt(a, x, y - 14, "SPEND", "tag", { "text-anchor": "middle", style: `fill:${INK};opacity:.6` });
      el("circle", { cx: x + 36, cy: y - 20, r: 3, fill: dot, class: "lamp" }, a);
      el("rect", { x: x - 50, y: y - 34, width: 100, height: 68, rx: 8, class: "ring" }, a);
      return 32;
    },
    stop(a, x, y) {
      el("circle", { cx: x, cy: y, r: 30, fill: EDGE }, a);
      el("circle", { cx: x, cy: y, r: 27, fill: "url(#hazard)" }, a);
      el("circle", { cx: x, cy: y, r: 21, fill: EDGE }, a);
      el("circle", { cx: x, cy: y - 1, r: 18, fill: "var(--c-red)", class: "glow" }, a);
      el("ellipse", { cx: x - 6, cy: y - 9, rx: 6, ry: 3.5, fill: "#fff", opacity: 0.3 }, a);
      txt(a, x, y + 2.5, "STOP", "tag", { "text-anchor": "middle", style: "fill:#fff;opacity:1;font-size:7px" });
      el("circle", { cx: x, cy: y, r: 34, class: "ring" }, a);
      return 32;
    },
    key(a, x, y, dot, ch) {
      el("rect", { x: x - 16, y: y - 14, width: 32, height: 32, rx: 4, fill: EDGE }, a);
      el("rect", { x: x - 15, y: y - 16, width: 30, height: 30, rx: 4, fill: dot, class: "lamp" }, a);
      txt(a, x, y + 3.5, ch.n, "tag", { "text-anchor": "middle", style: "font-size:11px" });
      el("rect", { x: x - 20, y: y - 20, width: 40, height: 40, rx: 6, class: "ring" }, a);
      return 20;
    },
  };

  // Chapter-specific instruments. Draw at the origin; placement sets size and
  // position on the taller control face. The console's width is unchanged.
  const instrument = {
    rect(a, x, y, w, h, fill, rx = 2, extra = {}) {
      return el("rect", { x, y, width: w, height: h, rx, fill, ...extra }, a);
    },
    circle(a, x, y, r, fill, extra = {}) {
      return el("circle", { cx: x, cy: y, r, fill, ...extra }, a);
    },
    path(a, d, stroke, width = 1.5, fill = "none", extra = {}) {
      return el("path", { d, fill, stroke, "stroke-width": width, "stroke-linecap": "round", "stroke-linejoin": "round", ...extra }, a);
    },
    text(a, x, y, s, color = PAPER, size = 6, anchor = "middle") {
      return txt(a, x, y, s, "tag", { "text-anchor": anchor, style: `fill:${color};font-size:${size}px;opacity:1;letter-spacing:0` });
    },
    frame(a, x, y, w, h, rx = 5) {
      this.rect(a, x, y, w, h, "none", rx, { class: "ring" });
    },
    screw(a, x, y) {
      this.circle(a, x, y, 1.3, "var(--c-metal)");
      this.path(a, `M${x - .6} ${y + .6} l1.2 -1.2`, EDGE, .65);
    }
  };
  const I = instrument;
  const BLUE = "var(--c-instrument-blue)", SAGE = "var(--c-instrument-sage)";
  const CREAM = "var(--c-instrument-cream)", ROSE = "var(--c-instrument-rose)";
  Object.assign(CTL, {
    app(a) {
      I.rect(a, -40, -29, 80, 58, EDGE, 6);
      I.rect(a, -34, -23, 68, 45, CREAM, 3);
      I.rect(a, -34, -23, 68, 10, BLUE, 3);
      I.rect(a, -34, -18, 68, 5, BLUE, 0);
      I.text(a, -17, -16, "Claude", INK, 5.5);
      I.rect(a, -2, -21, 31, 7, PAPER, 2);
      I.text(a, 13, -16, "Code", INK, 5.5);
      I.rect(a, -34, -13, 15, 35, "var(--c-plate)", 0);
      [-6, 1, 8].forEach(y => I.rect(a, -30, y, 7, 2, "var(--c-metal-3)", .5));
      I.rect(a, -14, -8, 42, 8, BLUE, 2);
      I.path(a, "M-10 -4 h24", INK, 1);
      [-1, 4, 9].forEach((y, i) => I.path(a, `M-11 ${y + 5} h${31 - i * 6}`, "var(--c-metal-2)", 1.5));
      I.rect(a, -14, 15, 42, 4, PAPER, 1);
      I.circle(a, 32, 25.5, 1.7, SAGE, { class: "lamp" });
      I.frame(a, -44, -33, 88, 66, 8);
    },
    transfer(a) {
      I.rect(a, -38, -25, 76, 50, EDGE, 4);
      I.text(a, -20, -15, "LOCAL", CREAM, 5.2);
      I.text(a, 19, -15, "PROVIDER", CREAM, 5.2);
      [-21, 21].forEach(x => {
        I.circle(a, x, -1, 8, "var(--c-metal)");
        I.circle(a, x, -1, 5, DEEP);
        I.circle(a, x, -1, 2, CREAM);
      });
      I.path(a, "M-21 2 C-21 24 21 24 21 2", ROSE, 3.5);
      [-21, 21].forEach(x => I.rect(a, x - 3, -4, 6, 13, BLUE, 1.5));
      I.path(a, "M-6 2 h12 m-3 -3 l3 3 -3 3", CREAM, 1.3);
      I.screw(a, -33, 20); I.screw(a, 33, 20);
      I.frame(a, -42, -29, 84, 58, 6);
    },
    folder(a) {
      I.rect(a, -38, 12, 76, 16, EDGE, 4);
      I.rect(a, -31, 16, 62, 5, DEEP, 2);
      I.path(a, "M-29 15 V-23 Q-29 -27 -25 -27 H-9 L-3 -20 H27 Q31 -20 31 -16 V15 Z", EDGE, 1.4, SAGE);
      I.path(a, "M-27 13 L-23 -12 H34 L29 15 Z", EDGE, 1.4, CREAM);
      I.rect(a, -17, -5, 37, 11, PAPER, 1);
      I.text(a, 1, 2.5, "project/", INK, 7);
      I.circle(a, 31, 22, 2.2, "var(--c-mustard)", { class: "lamp" });
      I.frame(a, -42, -31, 84, 63, 6);
    },
    context(a) {
      I.path(a, "M-24 -22 L30 -27 L34 11 L-20 15 Z", EDGE, 1.2, SAGE);
      I.path(a, "M-31 -27 L22 -31 L25 11 L-28 15 Z", EDGE, 1.2, CREAM);
      const sheet = el("g", { transform: "rotate(-5)" }, a);
      I.rect(sheet, -28, -27, 53, 44, PAPER, 1, { stroke: EDGE, "stroke-width": 1.2 });
      I.rect(sheet, -28, -27, 53, 5, "var(--c-mustard)", 0);
      I.text(sheet, -2, -11, "CLAUDE.md", INK, 7.3);
      I.path(sheet, "M-21 -3 h33 M-21 3 h25 M-21 9 h30", "var(--c-metal)", 2.2);
      I.rect(a, -38, 13, 76, 15, EDGE, 3);
      I.rect(a, -31, 17, 62, 4, DEEP, 2);
      I.circle(a, 31, 23, 2.2, BLUE, { class: "lamp" });
      I.frame(a, -42, -35, 84, 67, 6);
    },
    defaults(a) {
      I.path(a, "M0 8 v12 M-27 27 v-7 h54 v7", EDGE, 2);
      I.circle(a, 0, -6, 23, EDGE);
      I.circle(a, 0, -6, 18, "var(--c-metal)");
      I.circle(a, 0, -6, 14, "var(--c-mustard)", { class: "lamp" });
      I.path(a, "M0 -6 l8 -9", INK, 3);
      [-27, 0, 27].forEach((x, i) => {
        I.rect(a, x - 9, 24, 18, 12, EDGE, 2);
        I.circle(a, x, 30, 3.4, [BLUE, SAGE, ROSE][i]);
      });
      I.frame(a, -40, -33, 80, 73, 6);
    },
    study(a) {
      I.rect(a, -41, -28, 82, 56, EDGE, 5);
      I.rect(a, -35, -22, 70, 42, CREAM, 3);
      I.text(a, 0, -13, "HEAT & BIRTHWEIGHT", INK, 5.8);
      I.path(a, "M-25 -4 v15", EDGE, 8);
      I.path(a, "M-25 -4 v15", PAPER, 5);
      I.path(a, "M-25 0 v11", ROSE, 2.6);
      I.circle(a, -25, 12, 5, EDGE); I.circle(a, -25, 12, 3.2, ROSE);
      I.path(a, "M-9 -5 v20 h36", "var(--c-metal-3)", 1);
      [[-4, 0], [2, 4], [6, 1], [11, 7], [16, 5], [22, 10], [27, 9]].forEach(([x,y]) => I.circle(a, x, y, 1.8, "var(--c-blue)"));
      I.circle(a, 33, 24, 2.2, SAGE, { class: "lamp" });
      I.frame(a, -45, -32, 90, 64, 7);
    },
    references(a) {
      I.rect(a, -37, -27, 74, 54, EDGE, 4);
      I.rect(a, -30, -21, 51, 36, BLUE, 2);
      I.rect(a, -25, -17, 39, 30, CREAM, 1, { transform: "rotate(-5)" });
      I.rect(a, -21, -18, 38, 30, PAPER, 1, { stroke: "var(--c-metal)", "stroke-width": .8 });
      I.text(a, -3, -10, "SOURCES", INK, 5.2);
      I.path(a, "M-15 -4 h22 M-15 1 h17 M-15 6 h20", "var(--c-metal-2)", 1.5);
      I.circle(a, 17, 3, 9, "var(--c-instrument-lens)", { stroke: EDGE, "stroke-width": 2.7 });
      I.path(a, "M23 10 l8 8", "var(--c-metal)", 5);
      I.path(a, "M23 10 l8 8", EDGE, 2.4);
      I.circle(a, -26, 21, 2.8, SAGE, { class: "lamp" });
      I.text(a, 0, 23, "VERIFY", CREAM, 5.2);
      I.frame(a, -41, -31, 82, 62, 6);
    },
    sequencer(a) {
      I.rect(a, -43, -27, 86, 54, EDGE, 4);
      I.text(a, 0, -17, "WORKFLOW", CREAM, 6);
      I.path(a, "M-29 -3 h58 M-29 14 h58 M0 -3 v17", "var(--c-metal)", 1.5);
      [-29, 0, 29].forEach((x, i) => {
        I.rect(a, x - 9, -10, 18, 15, DEEP, 2);
        I.rect(a, x - 8, -12, 16, 14, [BLUE, SAGE, ROSE][i], 2, { class: "lamp" });
        I.text(a, x, -3, String(i + 1), INK, 7);
      });
      [-29, 0, 29].forEach((x, i) => {
        I.rect(a, x - 9, 9, 18, 13, DEEP, 2);
        I.circle(a, x, 15, 3, i === 1 ? "var(--c-mustard)" : "var(--c-metal-2)", i === 1 ? { class: "lamp" } : {});
      });
      I.frame(a, -47, -31, 94, 62, 6);
    },
    labeler(a) {
      I.rect(a, -42, -23, 84, 46, EDGE, 4);
      I.rect(a, -35, -14, 28, 27, PAPER, 1);
      I.path(a, "M-30 -8 h18 M-30 -3 h15 M-30 2 h19 M-30 7 h12", "var(--c-metal-2)", 1.5);
      I.path(a, "M-4 0 h11 m-3 -3 l3 3 -3 3", CREAM, 1.5);
      [BLUE, SAGE, ROSE].forEach((color, i) => {
        I.circle(a, 20, -12 + i * 12, 3.4, color, i === 1 ? { class: "lamp" } : {});
        I.text(a, 31, -10 + i * 12, ["A", "B", "?"][i], CREAM, 5.5);
      });
      I.text(a, -20, 20, "LABEL", CREAM, 5.5);
      I.frame(a, -46, -27, 92, 54, 6);
    },
    adapter(a) {
      I.rect(a, -36, -24, 58, 49, EDGE, 5);
      I.rect(a, -29, -18, 44, 29, BLUE, 3);
      I.rect(a, -18, -11, 21, 14, CREAM, 2);
      [-14, -8, -2].forEach(x => { I.path(a, `M${x} -14 v3 M${x} 3 v3`, CREAM, 1.2); });
      I.text(a, -7, -1, "LLM", INK, 6.5);
      I.text(a, -8, 20, "LOCAL", CREAM, 5.6);
      I.rect(a, 11, -6, 29, 24, EDGE, 3);
      I.rect(a, 15, -10, 26, 24, ROSE, 2, { stroke: EDGE, "stroke-width": 1 });
      I.text(a, 28, 0, "+", INK, 12);
      I.text(a, 28, 9, "LoRA", INK, 5.4);
      [18, 24, 30, 36].forEach(x => I.rect(a, x, 14, 2.5, 4, "var(--c-mustard)", .5));
      I.circle(a, -27, 20, 2, SAGE, { class: "lamp" });
      I.frame(a, -40, -28, 85, 57, 6);
    },
    handoff(a) {
      I.rect(a, -41, -25, 24, 50, EDGE, 4);
      I.text(a, -29, -16, "RUN", CREAM, 5.5);
      I.rect(a, -32, -10, 6, 29, DEEP, 3);
      I.rect(a, -31, -3, 4, 18, "var(--c-metal)", 2);
      I.circle(a, -29, -4, 7, ROSE, { class: "lamp" });
      I.circle(a, -31, -6, 2, CREAM, { opacity: .65 });
      I.rect(a, -10, 12, 51, 13, EDGE, 3);
      I.path(a, "M-5 15 V-17 h13 l5 5 h23 v27 Z", EDGE, 1.4, SAGE);
      I.rect(a, -1, -5, 32, 9, CREAM, 1);
      I.text(a, 15, 1.5, "archive/", INK, 5.9);
      I.circle(a, 23, 15, 6, CREAM);
      I.path(a, "M20 15 l2 2 4 -5", "var(--c-instrument-check)", 1.7);
      I.frame(a, -45, -29, 90, 58, 6);
    },
    measurement(a) {
      I.rect(a, -52, -32, 104, 64, EDGE, 6);
      I.rect(a, -46, -27, 92, 53, CREAM, 4);
      const arc = (from, to, color) => {
        const point = t => [Math.cos(t) * 32, 15 + Math.sin(t) * 32];
        const [x0, y0] = point(from), [x1, y1] = point(to);
        I.path(a, `M${x0} ${y0} A32 32 0 0 1 ${x1} ${y1}`, color, 6);
      };
      arc(Math.PI, Math.PI * 1.42, SAGE);
      arc(Math.PI * 1.42, Math.PI * 1.76, "var(--c-mustard)");
      arc(Math.PI * 1.76, Math.PI * 2, ROSE);
      for (let i = 0; i <= 10; i++) {
        const t = Math.PI + i * Math.PI / 10;
        const inner = i % 5 ? 24 : 22;
        I.path(a, `M${Math.cos(t) * inner} ${15 + Math.sin(t) * inner} L${Math.cos(t) * 28} ${15 + Math.sin(t) * 28}`, INK, i % 5 ? .8 : 1.3);
      }
      I.text(a, 0, -20, "MEASURE", INK, 6.8);
      I.path(a, "M0 15 L-7 -14", INK, 2.3);
      I.circle(a, 0, 15, 4.2, INK);
      I.circle(a, -1, 14, 1.2, "var(--c-metal)");
      I.circle(a, 39, -20, 2.7, SAGE, { class: "lamp" });
      I.screw(a, -48, 28); I.screw(a, 48, 28);
      I.frame(a, -56, -36, 112, 72, 8);
    },
    adaptlever(a) {
      I.rect(a, -24, -36, 39, 72, EDGE, 5);
      I.rect(a, -19, -32, 29, 64, BLUE, 3);
      I.text(a, -4, -25, "ADAPT", INK, 6);
      I.rect(a, -7, -19, 6, 43, DEEP, 3);
      [-17, -7, 3, 13, 23].forEach((y, i) => I.path(a, `M-16 ${y} h${i % 2 ? 3 : 5}`, INK, 1.1));
      I.rect(a, -5.5, -3, 3, 24, "var(--c-metal)", 1.5);
      I.rect(a, -17, -8, 26, 14, EDGE, 5);
      I.rect(a, -16, -10, 24, 13, ROSE, 5, { class: "glow" });
      I.path(a, "M-11 -6 h14", CREAM, 1.3, "none", { opacity: .65 });
      I.text(a, -4, 30, "BASE", INK, 5.2);
      // A smaller plug-in module gives the lever its LLM meaning without
      // enclosing the instrument in another large rectangular housing.
      I.path(a, "M15 19 h6", "var(--c-metal)", 4);
      I.rect(a, 18, 5, 27, 30, EDGE, 3);
      I.rect(a, 20, 3, 23, 27, CREAM, 2, { stroke: EDGE, "stroke-width": 1 });
      I.rect(a, 25, 10, 13, 11, SAGE, 1, { stroke: "var(--c-metal-3)", "stroke-width": .8 });
      I.text(a, 31.5, 17.5, "LLM", INK, 4.7);
      [24, 29, 34, 39].forEach(x => I.rect(a, x, 30, 2, 4, "var(--c-mustard)", .5));
      I.frame(a, -28, -40, 77, 80, 7);
    },
    datainputs(a) {
      I.rect(a, -39, -26, 78, 49, EDGE, 5);
      I.rect(a, -36, -23, 72, 43, "var(--c-metal-2)", 3);
      I.text(a, 0, -15, "DATA IN", CREAM, 6.6);
      [-24, 0, 24].forEach((x, i) => {
        I.circle(a, x, 0, 8.5, [BLUE, CREAM, SAGE][i]);
        I.circle(a, x, 0, 5.5, EDGE);
        I.text(a, x, 15, ["API", "FILE", "WEB"][i], CREAM, 6);
      });
      I.rect(a, -4, -2, 8, 4, "var(--c-metal)", .8);
      I.circle(a, 24, 0, 2.8, "var(--c-metal)");
      I.path(a, "M-24 7 C-36 7 -44 7 -44 19 V28", EDGE, 5);
      I.path(a, "M-24 7 C-36 7 -44 7 -44 19 V28", ROSE, 3);
      I.rect(a, -28, -3, 8, 12, "var(--c-metal-3)", 2);
      I.path(a, "M-27 1 h6 M-27 4 h6", "var(--c-plate)", 1);
      I.circle(a, 29, -17.5, 2, SAGE, { class: "lamp" });
      I.screw(a, -35, -21); I.screw(a, 35, 18);
      I.frame(a, -48, -30, 91, 63, 7);
    },
    paperprinter(a) {
      // The sheet feeds through an exposed roller above the projecting tray.
      I.path(a, "M-30 -1 L24 -5 L35 4 L-21 9 Z", EDGE, 1.2, BLUE);
      I.path(a, "M24 4 L35 4 V22 L24 26 Z", EDGE, 1.2, "var(--c-metal-2)");
      I.path(a, "M-19 -31 H14 L21 -24 V5 H-19 Z", EDGE, 1, PAPER);
      I.path(a, "M14 -31 V-24 H21", EDGE, .8, CREAM);
      I.text(a, -1, -20, "DRAFT", INK, 6);
      I.path(a, "M-13 -13 H13 M-13 -8 H8 M-13 -3 H12", "var(--c-metal)", 1.8);
      I.rect(a, -31, 4, 56, 20, "var(--c-printer-case)", 4, { stroke: EDGE, "stroke-width": 1.3 });
      I.rect(a, -25, -2, 50, 9, "var(--c-metal-3)", 4);
      [-23, 23].forEach(x => I.circle(a, x, 2.5, 3.3, "var(--c-metal)"));
      I.path(a, "M-18 0 H18", "var(--c-plate)", 1.4);
      I.path(a, "M-21 15 H20 L29 28 H-29 Z", EDGE, 1.1, BLUE);
      I.path(a, "M-25 25 H25", "var(--c-metal-2)", 1);
      I.circle(a, -25, 12, 2, SAGE, { class: "lamp" });
      I.rect(a, 16, 9, 6, 3, CREAM, 1);
      I.frame(a, -35, -35, 74, 67, 6);
    },
    rerun(a) {
      I.circle(a, -10, 1, 30, EDGE);
      I.circle(a, -10, 1, 26, "var(--c-metal)");
      I.circle(a, -10, 1, 22, "var(--c-rerun-dark)");
      I.circle(a, -10, -2, 21, "var(--c-rerun)", { class: "glow" });
      el("ellipse", { cx: -16, cy: -11, rx: 7, ry: 3.5, fill: CREAM, opacity: .4 }, a);
      I.text(a, -10, 2, "RE-RUN", PAPER, 7.1);
      I.path(a, "M-17 10 C-11 15 -4 13 -3 7 M-6 8 l3 -1 1 3", CREAM, 1.2);
      I.path(a, "M20 1 h4", "var(--c-metal)", 2);
      I.rect(a, 23, -6, 33, 13, EDGE, 2);
      I.rect(a, 25, -4, 29, 9, CREAM, 1);
      I.text(a, 39.5, 2.4, "archive/", INK, 5.3);
      I.frame(a, -44, -33, 104, 68, 8);
    },
    appendix(a, x, y, dot, ch) {
      I.rect(a, -12, -10, 24, 22, EDGE, 3);
      I.rect(a, -11, -12, 22, 20, "var(--c-plate)", 3, { class: "lamp" });
      I.text(a, 0, 3, ch.n, INK, 10);
      I.frame(a, -15, -15, 30, 29, 5);
    }
  });

  function control(g, ch, x, y, options = {}) {
    // A chapter opens in a new tab: this page is the way into the guide and stays put, the same rule the
    // training index and every other link to materials follows. Without it readers get a same-tab jump --
    // browser extensions that rewrite links can mask this locally, so it has to be set here to be real.
    const a = el("a", { href: SITE + ch.slug + ".html", class: "hot", "data-n": ch.n, tabindex: "0", role: "link", target: "_blank", rel: "noopener" }, g);
    el("title", {}, a).textContent = ch.n + ". " + ch.title;
    const drawing = el("g", { class: "control-art", transform: `translate(${x},${y}) scale(${options.scale || 1})` }, a);
    const appendix = ch.part === "A";
    CTL[appendix ? "appendix" : ch.ctl](drawing, 0, 0, PARTS[ch.part].dot, ch);
    if (!appendix) {
      const labelX = options.labelX ?? x;
      const labelY = options.labelY ?? y + 42;
      const badgeX = options.badgeX ?? labelX;
      const badgeWidth = options.badgeWidth ?? 60;
      txt(a, labelX, labelY, ch.n, "lbl chapter-number", { "text-anchor": "middle" });
      const badge = el("g", { class: "sequence-badge", transform: `translate(${badgeX},${labelY - 4})`, "aria-hidden": "true" }, a);
      I.rect(badge, -badgeWidth / 2, -8, badgeWidth, 16, "var(--c-sequence-label)", 4);
      txt(badge, 0, 3, "", "sequence-label", { "text-anchor": "middle" });
    }
  }
  const heading = (g, s, x, y, part, extra = {}) => {
    const group = el("g", { class: "panel-heading", "data-part": part }, g);
    const label = txt(group, x, y, s, "eng", { "text-anchor": "middle", ...extra });
    const bounds = label.getBBox();
    el("circle", {
      cx: bounds.x - 8, cy: bounds.y + bounds.height / 2, r: 3.5,
      fill: PARTS[part].dot, stroke: "var(--c-label)", "stroke-width": .6,
      "aria-hidden": "true"
    }, group);
  };
  const byN = n => CH.find(c => c.n === n);
  const place = (g, list) => list.forEach(([n, x, y, options]) => control(g, byN(n), x, y, options));

  // Left wing: Part I. The taller face provides more space between the rows.
  const wl = document.getElementById("wingL");
  heading(wl, "ORIENTATION", -101, 23, "I");
  // Spacing set against a mock-up, 2026-09-13. Every row is distributed with an even gap and centred
  // in the panel rather than pushed to one end. The panel face is longer than the join line suggests --
  // the mitre extends it, to lx +43 at the top row's depth and +17 at the bottom row's -- so the inner
  // end had ~59 units of dead panel on the top row and ~44 on the bottom. Top row: 14 between controls.
  // Bottom row: the slack split three ways. Control 3 stops short of the mitre on purpose; at a wider
  // gap its lower inner corner crosses the panel edge, which slants with depth.
  place(wl, [
    ["1", -212, 69, { labelY: 112 }],
    ["2", -122, 69, { labelY: 112, scale: .94 }],
    ["3", -24, 69, { labelY: 112 }],
    ["4", -167, 165, { labelY: 212, scale: 1.05 }],
    ["5", -63, 165, { labelY: 212 }]
  ]);

  // Centre: Part II left of the divider, Part III right of it.
  const ce = document.getElementById("centre");
  // Taller file controls sit lower beneath the heading. Number positions follow
  // each instrument's height so short controls do not leave an oversized gap.
  heading(ce, "DIRECT THE WORK", 430, 405, "II");
  place(ce, [
    ["6", 382, 451, { labelY: 496 }],
    ["7", 485, 451, { labelY: 496 }],
    ["8", 390, 535, { labelY: 580, scale: .82 }],
    ["9", 485, 539, { labelY: 573, scale: 1.05 }]
  ]);
  heading(ce, "DO THE RESEARCH", 690, 405, "III");
  place(ce, [
    ["10", 598, 445, { labelY: 490 }],
    ["11", 704, 445, { labelY: 490 }],
    ["12", 815, 447, { labelY: 493 }],
    ["13", 598, 535, { labelY: 580 }],
    ["14", 698, 532, { labelY: 580 }],
    ["15", 798, 535, { labelY: 570 }]
  ]);

  // Right wing: the research sequence finishes above a separate reference keypad.
  const wr = document.getElementById("wingR");
  heading(wr, "DO THE RESEARCH", 110, 18, "III");
  place(wr, [
    ["16", 43, 66, { labelY: 118 }],
    ["17", 168, 66, { labelY: 118 }],
    ["18", 43, 157, { labelY: 201 }],
    ["19", 160, 156, { labelX: 199.5, labelY: 182, badgeX: 205, badgeWidth: 50 }]
  ]);
  heading(wr, "APPENDICES", 61, 218, "A", { style: "font-size:9.5px;letter-spacing:.06em" });
  place(wr, [["A", 115, 211], ["B", 151, 211], ["C", 187, 211], ["D", 223, 211]]);

  // Status lamps occupy the narrow band between the back edge and inset line.
  const ss = document.getElementById("statusStrip");
  for (let i = 0; i < 8; i++) el("rect", { x: 756 + i * 12, y: 377, width: 8, height: 5, rx: 1, fill: i < 6 ? "var(--c-olive)" : "var(--c-mustard)", opacity: 0.9 }, ss);
  txt(ss, 748, 382, "SYS", "tag", { "text-anchor": "end", style: "font-size:6px" });

  // ---- the console in perspective ----
  // The console is modeled in 3D and projected: x right, y up, z toward the viewer, one unit a pixel at z = 0.
  // Its three segments share one profile, a sloping control face over a vertical apron with a recessed
  // toe-kick. The wings turn toward the viewer and meet the centre in mitered joins, so their outer ends come
  // nearer, grow, and show end caps; faces are shaded from a light at the upper left. The controls above are
  // drawn flat, in each panel's own coordinates, and each is then fitted to its face by the affine map tangent
  // to the projection at the control's centre.
  {
    // Extra height creates a clear header band without stretching the controls.
    // Lower the console to preserve clearance beneath the unchanged agent.
    const CX = 600, HORIZON = 126, CAM_Z = 1600, CAM_Y = 470;
    const HALF = 250, DEPTH = 200, RISE = 187, APRON = 60, KICK = 9, WING = 250, TURN = rad(36);
    const S = Math.sin(TURN), C = Math.cos(TURN), T2 = Math.tan(TURN / 2);
    const norm = v => { const l = Math.hypot(...v); return v.map(c => c / l); };
    const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const LIGHT = norm([-0.4, 0.75, 0.55]), UP = [0, 1, 0];
    const proj = p => { const k = CAM_Z / (CAM_Z - p[2]); return [CX + p[0] * k, HORIZON + (CAM_Y - p[1]) * k]; };
    // a segment: an origin on its front top edge, an axis along that edge, a normal toward the viewer, and its
    // extent along the axis at depth w; the mitres make each back edge longer than its front edge
    const SEG = {
      left:   { o: [-HALF, 0, 0], d: [-C, 0, S], w: [S, 0, C],  lo: w => w * T2, hi: () => WING },
      centre: { o: [-HALF, 0, 0], d: [1, 0, 0],  w: [0, 0, 1],  lo: w => w * T2, hi: w => 2 * HALF - w * T2 },
      right:  { o: [HALF, 0, 0],  d: [C, 0, S],  w: [-S, 0, C], lo: w => w * T2, hi: () => WING },
    };
    const ALL = [SEG.left, SEG.centre, SEG.right];
    const at = (g, u, w, v) => [0, 1, 2].map(i => g.o[i] + g.d[i] * u + g.w[i] * w + UP[i] * v);
    const slope = (g, u, s) => at(g, u, -DEPTH * s, RISE * s);          // s is 0 at the front edge, 1 at the back
    const pts = ps => ps.map(p => proj(p).map(c => c.toFixed(1)).join(",")).join(" ");
    const shell = document.getElementById("shell");
    const poly = (ps, attrs) => el("polygon", Object.assign({ points: pts(ps) }, attrs), shell);
    const face = (ps, fill, n, upright) => {
      poly(ps, { fill, stroke: EDGE, "stroke-width": 1.5, "stroke-linejoin": "round" });
      const b = dot(n, LIGHT), pivot = upright ? 0.6 : 0.92, lit = b > pivot;
      const amt = Math.min(0.45, lit ? (b - pivot) * (upright ? 0.7 : 2.0) : (pivot - b) * (upright ? 0.75 : 1.05));
      if (amt > 0.005) poly(ps, { fill: lit ? "#fff" : "#000", opacity: amt.toFixed(3) });
    };

    // a contact shadow along the foot of the aprons
    poly([at(SEG.left, WING, 0, -APRON), [-HALF, -APRON, 0], [HALF, -APRON, 0], at(SEG.right, WING, 0, -APRON),
          at(SEG.right, WING, 14, -APRON), [HALF, -APRON, 14], [-HALF, -APRON, 14], at(SEG.left, WING, 14, -APRON)],
         { fill: "#000", opacity: 0.35, filter: "url(#consoleShadow)" });
    for (const g of ALL)                                                  // control faces
      face([slope(g, g.lo(0), 0), slope(g, g.hi(0), 0), slope(g, g.hi(-DEPTH), 1), slope(g, g.lo(-DEPTH), 1)],
           "url(#panelFace)", norm([0, 1, 2].map(i => UP[i] * DEPTH + g.w[i] * RISE)), false);
    for (const g of ALL) {                                                // aprons, each with a recessed toe-kick
      const a = g.lo(0), b = g.hi(0);
      face([at(g, a, 0, 0), at(g, b, 0, 0), at(g, b, 0, -APRON), at(g, a, 0, -APRON)], "url(#panelFront)", g.w, true);
      poly([at(g, a, 0, KICK - APRON), at(g, b, 0, KICK - APRON), at(g, b, 0, -APRON), at(g, a, 0, -APRON)], { fill: "#000", opacity: 0.28 });
    }
    for (const g of [SEG.left, SEG.right])                                // end caps
      face([at(g, WING, 0, 0), at(g, WING, -DEPTH, RISE), at(g, WING, -DEPTH, -APRON), at(g, WING, 0, -APRON)],
           "url(#panelFront)", g.d, true);
    for (const g of ALL) {                                                // inset panel lines and screws
      const inset = (s, m) => [slope(g, g.lo(-DEPTH * s) + m, s), slope(g, g.hi(-DEPTH * s) - m, s)];
      const [a, b] = inset(0.03, 12), [c, d] = inset(0.94, 12);
      poly([a, b, d, c], { fill: "none", stroke: "#000", "stroke-opacity": 0.2, "stroke-width": 1 });
      for (const p of [...inset(0.025, 7), ...inset(0.975, 7)]) {
        const [x, y] = proj(p);
        el("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: 2.6, fill: EDGE, opacity: 0.7 }, shell);
      }
    }
    const line = (ps, attrs) => el("polyline", Object.assign({ points: pts(ps), fill: "none", "stroke-linejoin": "round" }, attrs), shell);
    line([slope(SEG.centre, 190, 0.94), slope(SEG.centre, 190, 0.06)], { stroke: EDGE, "stroke-width": 1.5, opacity: 0.5 });   // Part II | Part III
    line([at(SEG.left, WING, 0, 0), [-HALF, 0, 0], [HALF, 0, 0], at(SEG.right, WING, 0, 0)],                                  // the front edge catches the light
         { stroke: "#fff", "stroke-opacity": 0.4, "stroke-width": 1.6 });
    line([at(SEG.left, WING, -DEPTH, RISE), slope(SEG.centre, SEG.centre.lo(-DEPTH), 1),                                        // the back edge a little
          slope(SEG.centre, SEG.centre.hi(-DEPTH), 1), at(SEG.right, WING, -DEPTH, RISE)],
         { stroke: "#fff", "stroke-opacity": 0.22, "stroke-width": 1.4 });
    const vent = (g, u0) => {
      for (let i = 0; i < 3; i++)
        poly([at(g, u0, 0, -13 - 7 * i), at(g, u0 + 22, 0, -13 - 7 * i), at(g, u0 + 22, 0, -16 - 7 * i), at(g, u0, 0, -16 - 7 * i)], { fill: EDGE, opacity: 0.6 });
    };
    vent(SEG.centre, 12); vent(SEG.centre, 466); vent(SEG.left, WING - 40); vent(SEG.right, WING - 40);
    const [tx, ty] = proj([0, -APRON * 0.58, 0]);
    txt(shell, tx, (ty + 4).toFixed(1), "AGENT CONTROL CONSOLE MK III", "eng", { "text-anchor": "middle", style: "fill:var(--c-console-inscription);opacity:.8" });

    // fit each control, heading and lamp to its face
    const onWing = (g, sign) => (lx, ly) => proj(slope(g, sign * lx * WING / 260, 1 - (ly + 14) / 250));
    const onCentre = (lx, ly) => proj(slope(SEG.centre, lx - 350, 1 - (ly - 385 + 12) / 226));
    const fit = (node, map) => {
      const bb = node.getBBox(), cx = bb.x + bb.width / 2, cy = bb.y + bb.height / 2, h = 8;
      const P = map(cx, cy), X1 = map(cx + h, cy), X0 = map(cx - h, cy), Y1 = map(cx, cy + h), Y0 = map(cx, cy - h);
      const a = (X1[0] - X0[0]) / (2 * h), b = (X1[1] - X0[1]) / (2 * h), c = (Y1[0] - Y0[0]) / (2 * h), d = (Y1[1] - Y0[1]) / (2 * h);
      const wrap = el("g", { transform: "matrix(" + [a, b, c, d, P[0] - a * cx - c * cy, P[1] - b * cx - d * cy].map(n => +n.toFixed(4)).join(" ") + ")" });
      node.parentNode.insertBefore(wrap, node); wrap.appendChild(node);
    };
    for (const [id, map] of [["wingL", onWing(SEG.left, -1)], ["wingR", onWing(SEG.right, 1)], ["centre", onCentre], ["statusStrip", onCentre]])
      [...document.getElementById(id).children].forEach(n => fit(n, map));
  }

  const lg = document.getElementById("legend");
  for (const k in PARTS) { const s = document.createElement("span"); s.style.setProperty("--dot", PARTS[k].dot); s.textContent = PARTS[k].name; lg.appendChild(s); }

  // ---- readout ----
  const ro = document.getElementById("readout");
  const roIntro = document.getElementById("ro-intro"), roChapter = document.getElementById("ro-chapter"), roHow = document.getElementById("ro-how");
  const roPart = document.getElementById("ro-part"), roTitle = document.getElementById("ro-title"),
        roBody = document.getElementById("ro-body"), roLink = document.getElementById("ro-link"), roHint = document.getElementById("ro-hint");
  const controls = [...document.querySelectorAll(".hot")];
  const nextLink = document.createElement("a");
  nextLink.className = "sequence-next-link";
  nextLink.target = "_blank"; nextLink.rel = "noopener";
  const actions = document.createElement("div");
  actions.className = "sequence-actions";
  actions.append(roLink, nextLink);
  roChapter.insertBefore(actions, roHint);
  const chapterName = n => /^[A-Z]$/.test(n) ? "Appendix " + n : "Chapter " + n;
  function cueSequence(ch) {
    controls.forEach(a => a.classList.remove("sequence-next", "sequence-start"));
    const next = ch ? CH[CH.indexOf(ch) + 1] : CH[0];
    if (next) {
      const target = controls.find(a => a.dataset.n === next.n);
      target.classList.add(ch ? "sequence-next" : "sequence-start");
      const label = target.querySelector(".sequence-label");
      if (label) label.textContent = (ch ? "Next" : "Start") + " · " + next.n;
    }
    nextLink.hidden = !ch || !next;
    if (ch && next) {
      nextLink.textContent = "Next: " + chapterName(next.n) + " →";
      nextLink.href = SITE + next.slug + ".html";
      nextLink.setAttribute("aria-label", "Next: " + chapterName(next.n) + ": " + next.title);
    }
  }
  let pinned = null, explored = null;
  function show(ch, preview) {
    explored = ch;
    applyRecipe(ch.r);
    roIntro.hidden = true; roChapter.hidden = false;
    ro.style.setProperty("--dot", PARTS[ch.part].dot);
    ro.dataset.preview = preview ? "1" : "0";
    roPart.textContent = PARTS[ch.part].name;
    roTitle.innerHTML = '<span class="n">' + ch.n + '</span>' + ch.title;
    roBody.textContent = ch.body;
    roLink.href = SITE + ch.slug + ".html"; roLink.textContent = "Open chapter " + ch.n + " →"; roLink.hidden = preview;
    roHint.textContent = preview ? "Press the control to open the chapter." : "Tap the control again to open the chapter, or use the link.";
    document.querySelectorAll(".hot.on").forEach(a => a.classList.remove("on"));
    controls.find(a => a.dataset.n === ch.n).classList.add("on");
    cueSequence(ch);
  }
  function restore() {
    if (explored) { show(explored, !pinned || pinned.n !== explored.n); return; }
    applyRecipe(DEFAULT);
    ro.dataset.preview = "0"; ro.style.setProperty("--dot", "var(--c-mustard)");
    roChapter.hidden = true; roIntro.hidden = false;
  }
  const find = a => CH.find(c => c.n === a.dataset.n);
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!fine) roHow.textContent = "Tap to explore; tap again to open. The blue glow marks the next chapter.";
  document.querySelectorAll(".hot").forEach(a => {
    a.addEventListener("click", e => {
      if (fine) return;                          // pointer: hover previews, a press opens the chapter
      const ch = find(a);                        // touch: first tap shows the readout, second opens
      if (pinned && pinned.n === ch.n) return;
      e.preventDefault(); pinned = ch; show(ch, false);
    });
    a.addEventListener("focus", () => show(find(a), !pinned || pinned.n !== a.dataset.n));
    a.addEventListener("blur", restore);
    if (fine) {
      a.addEventListener("mouseenter", () => show(find(a), !pinned || pinned.n !== a.dataset.n));
      a.addEventListener("mouseleave", restore);
    }
  });
  // ---- the speech bubble ----
  // The readout lives in the bubble, whose outline is redrawn to fit the text whenever the text changes height.
  // The bubble's type scales with the drawing, so below 760px the readout moves out under the scene instead.
  const bubble = document.getElementById("bubble"), home = document.getElementById("bubble-home");
  const shape = bubble.querySelector(".bubble-shape"), scene = document.querySelector(".console-scene");
  const narrow = window.matchMedia("(max-width: 760px)");
  const placeReadout = () => {
    if (narrow.matches) { scene.after(ro); bubble.style.display = "none"; }
    else { home.appendChild(ro); bubble.style.display = ""; }
  };
  narrow.addEventListener("change", placeReadout); placeReadout();
  const fitBubble = () => {
    const bottom = 38 + Math.max(150, home.offsetHeight) + 16;
    shape.setAttribute("d", `M36 22 H462 a16 16 0 0 1 16 16 V84 L502 106 L478 124 V${bottom - 16} a16 16 0 0 1 -16 16 H36 a16 16 0 0 1 -16 -16 V38 a16 16 0 0 1 16 -16 Z`);
  };
  new ResizeObserver(fitBubble).observe(home); fitBubble();
  cueSequence(null);
  applyRecipe(DEFAULT);
});
