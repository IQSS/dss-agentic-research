// console.js — the landing page's console. Hand-maintained, like index.qmd; not part of the sync.
// The figure is a parts kit: hat, eyes, arms, coat, held object and surroundings are separate groups in
// the SVG in index.qmd, and each chapter is a recipe over them. The controls are drawn here, one kind
// per chapter, and are real links to the chapter pages; the desk under them is modeled in 3D and drawn
// in perspective. Pointer: hover previews, a press opens the chapter. Touch: the first tap shows the
// chapter in the agent's speech bubble, with a link, and the second opens.
(function () {
  const SITE = "chapters/";
  const PARTS = {
    I:   { name: "Part I · Orientation",          dot: "var(--c-blue-2)" },
    II:  { name: "Part II · Teach them your way", dot: "var(--c-mustard)" },
    III: { name: "Part III · The work",           dot: "var(--c-rose)" },
    IV:  { name: "Part IV · Judgment",            dot: "var(--c-olive)" },
    A:   { name: "Appendices",                    dot: "var(--c-muted)" },
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
    { n: "1",  part: "I",   slug: "01-introduction", title: "Introduction", ctl: "dome",
      r: { hat: "fedora", eyes: "calm", arms: "wave", coat: "sage", gloves: "brown", holds: null, scene: null },
      body: "A chat assistant answers questions. An agent does work inside your project: it creates the folders, writes and runs the code, reads the error, fixes it, and updates the status file. This guide is about what follows from that when the output is a paper or a talk." },
    { n: "2",  part: "I",   slug: "02-what-an-agent-is", title: "What an agent is", ctl: "crt",
      r: { hat: "fedora", eyes: "alert", arms: "rest", coat: "sage", gloves: "mustard", holds: null, scene: "screens" },
      body: "Same models as the chat window. What differs is what the model can see and do: it reads the files that are there, runs the code, reads what the code printed, and edits in place. The model did not change. The room it works in did." },
    { n: "3",  part: "I",   slug: "03-where-to-run-it", title: "Where to run it", ctl: "lampgrid",
      r: { hat: "bowler", eyes: "calm", arms: "hold", coat: "slate", gloves: "cream", holds: "terminal", scene: null },
      body: "Two companies, four surfaces each, and the choice matters less than it looks. What differs is what you see while it works and how you sign in, and the second decides what data may pass through it." },
    { n: "4",  part: "I",   slug: "04-modes", title: "Modes", ctl: "rotary",
      r: { hat: "fedora", eyes: "alert", arms: "hold", coat: "mustard", gloves: "brown", holds: "dial", scene: null },
      body: "Three settings shape a session before the first request: how much the agent may do before it stops to ask, whether it plans before it edits, and which model runs at what effort. All three change in a few keystrokes." },
    { n: "5",  part: "I",   slug: "05-boundaries", title: "Boundaries", ctl: "toggles",
      r: { hat: "fedora", eyes: "alert", arms: "rest", coat: "slate", gloves: "mustard", holds: null, scene: "glassbox" },
      body: "The question is not whether the agent is malicious but what it can touch if it goes wrong, because it will. Four boundaries, each covering a failure the others do not, keep a mistake from being unrecoverable." },
    { n: "6",  part: "II",  slug: "06-the-files-the-agent-reads", title: "The files the agent reads", ctl: "cardslot",
      r: { hat: "fedora", eyes: "focus", arms: "hold", coat: "sage", gloves: "cream", holds: "sheet", scene: null },
      body: "How will it know to do things your way? A few plain-text files the agent reads at the start of every session: who you are, how you work, what this project is, and what is open." },
    { n: "7",  part: "II",  slug: "07-project-structure", title: "Project structure", ctl: "dpad",
      r: { hat: "hardhat", eyes: "calm", arms: "rest", coat: "mustard", gloves: "slate", holds: null, scene: "tree" },
      body: "An agent walking into a cloud-shared folder has the same problem a new RA does, with less context. Agree on one structure, use it for every project, and have the agent build it." },
    { n: "8",  part: "II",  slug: "08-repeatable-workflows", title: "Repeatable workflows", ctl: "keys",
      r: { hat: "bowler", eyes: "calm", arms: "hold", coat: "rose", gloves: "slate", holds: "gear", scene: null },
      body: "Once you have asked for the same thing three times, write it down as a skill: a named, packaged instruction the agent runs when you call it. A piece of your workflow stops being a conversation and becomes a command." },
    { n: "9",  part: "III", slug: "09-bookkeeping", title: "Bookkeeping", ctl: "counter",
      r: { hat: "none", eyes: "focus", arms: "hold", coat: "sage", gloves: "brown", holds: "clipboard", scene: null },
      body: "Where to start, and it never stops. Every session begins with the agent finding out where things stand and ends with it writing down where they now stand. The habit that makes every other chapter's checks possible." },
    { n: "10", part: "III", slug: "10-literature-search-and-synthesis", title: "Literature search and synthesis", ctl: "ledbar",
      r: { hat: "beret", eyes: "alert", arms: "hold", coat: "slate", gloves: "cream", holds: "books", scene: null },
      body: "Where the agent's speed and its worst habit meet. It can screen faster than you can read the first abstract, and it can produce a perfectly formatted citation for a paper that does not exist. One decision follows." },
    { n: "11", part: "III", slug: "11-getting-data", title: "Getting data", ctl: "jacks",
      r: { hat: "fedora", eyes: "calm", arms: "hold", coat: "slate", gloves: "mustard", holds: "key", scene: "database" },
      body: "Where an agent first touches the outside world. What comes in gets a provenance log; what is already in is read-only. Between them, a ladder of ways to fetch, from a documented interface down to a browser." },
    { n: "12", part: "III", slug: "12-analysis-simulation-first", title: "Analysis, simulation first", ctl: "scope",
      r: { hat: "hardhat", eyes: "focus", arms: "hold", coat: "mustard", gloves: "brown", holds: "dice", scene: null },
      body: "The agent writes the scripts; you own the model. Before a model is trusted with the real data, simulate from known parameters, fit the planned model, and see whether it recovers them." },
    { n: "13", part: "III", slug: "13-verification", title: "Verification", ctl: "twinmeters",
      r: { hat: "fedora", eyes: "alert", arms: "hold", coat: "sage", gloves: "mustard", holds: "magnifier", scene: null },
      body: "The failure to guard against is code that runs, passes a reading, and is still wrong. Re-running gives the same wrong answer. The check is to require the result from different code, in Stata, from the methods write-up alone." },
    { n: "14", part: "III", slug: "14-writing-revision-and-talks", title: "Writing, revision, and talks", ctl: "printer",
      r: { hat: "beret", eyes: "calm", arms: "hold", coat: "rose", gloves: "cream", holds: "pen", scene: null },
      body: "The artifact the agent should touch least and can help with most. It writes from your files, never from its sense of what papers like yours usually say. You rewrite what it drafts." },
    { n: "15", part: "III", slug: "15-reproducibility-and-hand-off", title: "Reproducibility and hand-off", ctl: "lever",
      r: { hat: "fedora", eyes: "calm", arms: "hold", coat: "slate", gloves: "brown", holds: "package", scene: null },
      body: "The analysis has to run without the agent. The test is a reviewer in five years with the folder and no chat history, who runs one command and gets the paper's tables." },
    { n: "16", part: "IV",  slug: "16-data-confidentiality", title: "Data confidentiality", ctl: "keyswitch",
      r: { hat: "fedora", eyes: "alarmed", arms: "hold", coat: "slate", gloves: "cream", holds: "lock", scene: null },
      body: "The agent reads whatever folder it is pointed at, and everything it reads goes to the model. Two concrete questions: what do your protocol and agreements permit, and is the vendor covered?" },
    { n: "17", part: "IV",  slug: "17-cost-and-the-map", title: "Cost, and the map", ctl: "gauge",
      r: { hat: "bowler", eyes: "calm", arms: "hold", coat: "mustard", gloves: "slate", holds: "meter", scene: null },
      body: "Four tiers run from the chat window you already use to a pipeline that runs without you. Each is priced, so that you climb as far as your work needs and no further." },
    { n: "18", part: "IV",  slug: "18-failure-modes-and-habits", title: "Failure modes and habits", ctl: "stop",
      r: { hat: "fedora", eyes: "alarmed", arms: "up", coat: "rose", gloves: "brown", holds: null, scene: null },
      body: "The agent is fluent, tireless, and confident, and those are exactly the qualities that make a supervisor stop supervising. The habits that prevent the failures are not settings." },
    { n: "A",  part: "A",   slug: "appendix-a-starter-files", title: "Starter files", ctl: "key",
      r: { hat: "none", eyes: "calm", arms: "hold", coat: "sage", gloves: "cream", holds: "sheet", scene: null },
      body: "Five files to copy and edit, plus the full project layouts. Every line is a decision you can reverse; starting from a file rather than a blank page makes the decisions visible." },
    { n: "B",  part: "A",   slug: "appendix-b-prompt-bank", title: "Prompt bank", ctl: "key",
      r: { hat: "bowler", eyes: "focus", arms: "hold", coat: "mustard", gloves: "brown", holds: "clipboard", scene: null },
      body: "Prompts that have worked, three to five per stage, each with the line that says when to use it. None asks the agent to confirm its own work." },
    { n: "C",  part: "A",   slug: "appendix-c-the-terminal-in-two-pages", title: "The terminal in two pages", ctl: "key",
      r: { hat: "none", eyes: "alert", arms: "hold", coat: "slate", gloves: "mustard", holds: "terminal", scene: null },
      body: "The desktop apps need none of this. If you run the agent in a terminal, you need about this much and no more." },
    { n: "D",  part: "A",   slug: "appendix-d-institutional-access-at-harvard", title: "Institutional access at Harvard", ctl: "key",
      r: { hat: "fedora", eyes: "calm", arms: "hold", coat: "crimson", gloves: "cream", holds: "key", scene: null },
      body: "Specific to Harvard and dated August 2026. How to run through the university's gateway, how to keep a personal plan intact, and what data may go through it." },
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
      [["R", -22], ["STATA", 22]].forEach(([s, dx]) => {
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

  function control(g, ch, x, y) {
    // A chapter opens in a new tab: this page is the way into the guide and stays put, the same rule the
    // training index and every other link to materials follows. Without it readers get a same-tab jump --
    // browser extensions that rewrite links can mask this locally, so it has to be set here to be real.
    const a = el("a", { href: SITE + ch.slug + ".html", class: "hot", "data-n": ch.n, tabindex: "0", role: "link", target: "_blank", rel: "noopener" }, g);
    el("title", {}, a).textContent = ch.n + ". " + ch.title;
    const h = CTL[ch.ctl](a, x, y, PARTS[ch.part].dot, ch);
    if (ch.ctl !== "key") txt(a, x, y + h + 12, ch.n, "lbl", { "text-anchor": "middle" });
  }
  const heading = (g, s, x, y) => txt(g, x, y, s, "eng", { "text-anchor": "middle" });
  const byN = n => CH.find(c => c.n === n);
  const place = (g, list) => list.forEach(([n, x, y]) => control(g, byN(n), x, y));

  // Left wing: Part I. Local coordinates, x in [-260, 0], y in [0, 196].
  const wl = document.getElementById("wingL");
  heading(wl, "ORIENTATION", -101, 26);
  // Spacing set against a mock-up, 2026-09-13. Every row is distributed with an even gap and centred
  // in the panel rather than pushed to one end. The panel face is longer than the join line suggests --
  // the mitre extends it, to lx +43 at the top row's depth and +17 at the bottom row's -- so the inner
  // end had ~59 units of dead panel on the top row and ~44 on the bottom. Top row: 14 between controls.
  // Bottom row: the slack split three ways. Control 3 stops short of the mitre on purpose; at a wider
  // gap its lower inner corner crosses the panel edge, which slants with depth.
  place(wl, [["1", -212, 70], ["2", -120, 70], ["3", -18, 62], ["4", -191, 148], ["5", -86, 150]]);

  // Centre: Part II left of the divider, Part III right of it.
  const ce = document.getElementById("centre");
  // The heading keeps its height; only the controls drop (8), so the label does not crowd them.
  // x pulled left from 366: "THEM" is two characters longer than "IT" and ran 7 units past the
  // Part II | Part III divider at 540.
  heading(ce, "TEACH THEM YOUR WAY", 417, 408);
  place(ce, [["6", 378, 450], ["7", 492, 460], ["8", 420, 520]]);
  heading(ce, "THE WORK", 723, 408);
  place(ce, [["9", 598, 438], ["10", 686, 438], ["11", 766, 438], ["15", 832, 474], ["12", 600, 512], ["13", 694, 512], ["14", 775, 512]]);

  // Right wing: Part IV above, the appendices as a keypad below.
  const wr = document.getElementById("wingR");
  heading(wr, "JUDGMENT", 101, 26);
  place(wr, [["16", 11, 70], ["17", 103, 66], ["18", 201, 70]]);          // 14 between controls, as on the left
  heading(wr, "APPENDICES", 119, 130);
  // The keys keep their original 6-unit gap -- they read as one block, which is right for four
  // appendices -- but the block is centred in the panel now rather than sitting inboard of it.
  place(wr, [["A", 55, 160], ["B", 101, 160], ["C", 147, 160], ["D", 193, 160]]);

  // decorative status strip on the centre panel
  const ss = document.getElementById("statusStrip");
  for (let i = 0; i < 8; i++) el("rect", { x: 744 + i * 12, y: 392, width: 8, height: 5, rx: 1, fill: i < 6 ? "var(--c-olive)" : "var(--c-mustard)", opacity: 0.9 }, ss);
  txt(ss, 736, 397, "SYS", "tag", { "text-anchor": "end", style: "font-size:6px" });

  // ---- the console in perspective ----
  // The console is modeled in 3D and projected: x right, y up, z toward the viewer, one unit a pixel at z = 0.
  // Its three segments share one profile, a sloping control face over a vertical apron with a recessed
  // toe-kick. The wings turn toward the viewer and meet the centre in mitered joins, so their outer ends come
  // nearer, grow, and show end caps; faces are shaded from a light at the upper left. The controls above are
  // drawn flat, in each panel's own coordinates, and each is then fitted to its face by the affine map tangent
  // to the projection at the control's centre.
  {
    const CX = 600, HORIZON = 90, CAM_Z = 1600, CAM_Y = 470;
    const HALF = 250, DEPTH = 200, RISE = 138, APRON = 60, KICK = 9, WING = 250, TURN = rad(36);
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
      const [a, b] = inset(0.06, 12), [c, d] = inset(0.94, 12);
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
    txt(shell, tx, (ty + 4).toFixed(1), "AGENT CONTROL CONSOLE MK III", "eng", { "text-anchor": "middle", style: "fill:var(--c-ground);opacity:.8" });

    // fit each control, heading and lamp to its face
    const onWing = (g, sign) => (lx, ly) => proj(slope(g, sign * lx * WING / 260, 1 - ly / 196));
    const onCentre = (lx, ly) => proj(slope(SEG.centre, lx - 350, 1 - (ly - 385) / 180));
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
  let pinned = null;
  function show(ch, preview) {
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
    const keep = pinned || (!preview ? ch : null);
    if (keep) { const k = document.querySelector('.hot[data-n="' + keep.n + '"]'); if (k) k.classList.add("on"); }
  }
  function restore() {
    if (pinned) { show(pinned, false); return; }
    applyRecipe(DEFAULT);
    ro.dataset.preview = "0"; ro.style.setProperty("--dot", "var(--c-mustard)");
    roChapter.hidden = true; roIntro.hidden = false;
  }
  const find = a => CH.find(c => c.n === a.dataset.n);
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!fine) roHow.textContent = "Tap one to see what it covers, and tap it again to open that chapter.";
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
  applyRecipe(DEFAULT);
})();
