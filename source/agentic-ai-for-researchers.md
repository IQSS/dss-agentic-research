---
title: Doing Research with AI Agents
title-page: |
  Doing Research\
  with AI Agents
version: "1.5"
---

<!--
OUTLINE STUB (2026-08-26). Each chapter carries a comment with:
  STATUS  adapt | mixed | new     — how much is repurposed vs written fresh
  PHASE   1–3                     — writing order (see TASKS.md); Phase 1 backs the 19 Nov talk
  SOURCE  where the material comes from (tool-chain = agentic-ai-tool-chain; quickstart = agentic-ai-quickstart;
          deck / content bank = agentic-ai-research-workflow)
  COVERS  the chapter's contents, from the scoping brief
  VERIFY  claims that date quickly and must be checked at writing time
Repurposing rules for adapted material: AGENTS.md § "Source material and repurposing rules".
Part III chapters share one skeleton as H2s: What to ask for / What the agent does / What you check / What goes wrong.
2026-09-06 dedup (v1.5): the tool-chain map's usage passages absorbed here, essentially verbatim
(ledger: the map's docs/briefs/2026-09-06-dedup-ledger.md); per-section footnotes to the map
culled so the guide stands alone; the full project shapes added as Appendix A.6.
-->

<!-- ===================== PART I — ORIENTATION ===================== -->

# 1. Introduction

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-26 (first draft; needs a read-through)
SOURCE: source/pitch.md; tool-chain "The Operating Model" (introduction; four-pillars figure); deck "The shift, in one idea", "What changes when AI acts in your project"
COVERS: The pitch, expanded. Bookkeeping, simulation, verification, plus the writing and literature layer. What agents don't do. The four pillars: be a supervisor; teach it your way; verify and reproduce; keep it bounded. How to read this guide.
-->

An AI chat assistant answers questions. An AI agent works inside your project: it creates files and folders, writes and runs code, reads errors, fixes them, keeps track of tasks and the current project status, all without you copying text back and forth between a chat window and your project files. This guide is about how to make that process work efficiently when the output is an academic paper or talk.

You may already use AI chat for writing and for code. A chat assistant runs on a *large language model* (LLM), the AI that generates the text; an agent runs on the same LLM, with access to *tools*: the ability to read your files, run your code, and write results. Your job moves from transcriber to supervisor: you describe the goal and its constraints, let the agent work, and check the result rather than each step. §2 explains why an agent that can act is more reliable than a chat window.

## Where it pays to use an agent

The best places to use an agent are those parts of the research lifecycle that are time-consuming or tedious for you to do yourself.

*Bookkeeping.* Modern research is files and folders. Agents are excellent project managers. They can design project structures, organize files, keep a running to-do list and status snapshot. This is the tedious, unglamorous part of research, and it will save you tens of hours per project (§9).

*Simulation.* Simulate data from known parameters and see whether your model recovers them. Run a power analysis by simulation instead of a formula that doesn't fit your design. Everyone *should* do this but few do, because writing the simulation is tedious. The agent removes the tedium, and the known truth built into the simulation tells you whether it did the job right (§12).

*Verification.* Have the agent re-implement your analysis in a second language (Python if you work in R; R if you work in Stata) and compare the numbers. Two independent implementations that agree are strong evidence. A disagreement locates a bug you may not have found by reading (§13).

*Writing and literature.* An agent can search, fetch, screen, and tabulate faster than you can; just make sure it records and checks every DOI (§10, §14).

What these four areas have in common is that something other than the agent's own confidence tells you whether the work is right: a truth you built into the simulation, a second implementation, a reference you opened, a folder listing you can read. Choosing tasks with that property is the core of this guide, and Part III is organized around it.

## What agents don't do

Agents don't know your field's conventions. Your estimands, your journal's style, the folder layout you have used for a decade, your coauthor's insistence on Stata: none of that is in the model. Part II addresses these gaps: you write your conventions down once, in a file the agent reads at the start of every session.

Agents don't know whether your data are sensitive. The agent doesn't know that an IRB protocol, a data-use agreement, or a business-associate agreement exists. Given access to a folder, it will read the folder. So rules have to be written where the agent reads them, and if the rule must never be broken it has to be enforced by a setting rather than a sentence (§5, §16).

Agents don't know when they are confidently wrong. The same fluent tone comes with a correct answer and an invented one, and nothing in the output distinguishes them. Only a check does (§13, §18).

Your job is the same one you'd do with a human research assistant: specify the task, delegate it, check the result, and keep the assistant away from the restricted drive. The habits transfer, but at far greater speed: you can have many agents running tasks around the clock.

::: {.needspace height="19cm"}
:::

## Four pillars

Everything in this guide serves one of four principles, and each principle maps to the chapters that discuss it.

![](figures/four-pillars.svg){#fig-four-pillars fig-alt="The four pillars: be a supervisor; teach agents your way; verify and reproduce; keep it bounded — four panels connected top to bottom, each naming the chapters that carry it." above="6pt" below="6pt"}

## Non-traditional research outputs

The examples in this guide are papers and talks, and most research still ends in one or the other. Some projects end in something else: a dashboard that lets colleagues explore your results, an interactive tool, or a bot that answers questions from a body of documents. The practices here carry over: the conventions (§6), the project structure (§7), and version control and the data rules (§5, §16) hold whatever the output is.

A running tool also has to be kept up, fixed when it breaks, and supported for the people who use it, often long after the grant that paid for it has ended, so decide who owns that upkeep before you build. And a tool that interacts with people raises questions of its own: what it does with what users tell it, whether it stores that, and who those users are. A bot that children might use, or that gives advice someone could act on, falls under the same human-subjects and ethics review as any research involving people, so clear it with your IRB before you build it.

## How to read this guide

Part I orients: what an agent is (§2), where to run one (§3), the modes it runs in (§4), and the boundaries that keep it safe (§5). Part II discusses the two things that make an agent useful and reliable, the files it reads (§6) and the shape of a project (§7), and then how to package a workflow you repeat (§8). Part III walks the stages of a research paper, from project setup to archival repository (§9–§15). Every chapter there uses the same four headings, so you can skim: *What to ask for*, *What the agent does*, *What you check*, *What goes wrong*. Part IV is judgment: confidentiality (§16), cost (§17), and failure modes (§18). The appendices hold files to copy and edit (A), prompts (B), a description of the terminal (C), and a glossary (D); institutional access is in §3.

If you have never run an agent, read §2 through §4, then §6, §7, and §9, and start with a folder you wouldn't mind reorganizing. If you already use one, start at §6, then go to the Part III chapter for the stage you are at in your research project. Read §16 before an agent goes near restricted data.

A few conventions. This guide assumes **Claude** — the Claude desktop app and Claude Code. Almost everything here transfers to agents from other vendors, which work the same way; where a detail is Claude-specific, the text says so. File conventions stay agent-agnostic (`AGENTS.md`, §6). Where a language has to be picked, the worked examples are in R. Harvard-specific detail lives in short sidebars, never in the body, so the guide ports to other institutions. The guide makes no tool arguments and gives no install recipes: those live on a companion website. Terms are defined at first use, and Appendix D is a glossary.

# 2. What an agent is

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-26 (first draft; needs a read-through)
SOURCE: content bank concepts/three-paradigms.md (folded in; module points back here); deck "The shift, in one idea", "What changes when AI acts in your project", "Why it doesn't just make things up" (think/act/observe loop figure); tool-chain §10 introduction
COVERS: Chat vs agent. The think/act/observe loop and why the agent "sees the real error". Three ways of working: messenger, driver, supervisor.
-->

A chat assistant and an agent run on the same models. The difference is reach: a chat window sees only what you paste into it and hands back text; an agent works inside your project. The model didn't change — its access to your files and your machine did.

## Chat versus agent

Consider what happens when a chat assistant writes you a cleaning script. It has never seen your data, so you have to tell it the column names. You paste the script into RStudio and run it. It fails on line 14, because the ID column is character and the script treated it as numeric. You copy the error back into the chat, describe the column, and get a corrected script. Three or four rounds later it runs. Every round, you carried information across the gap: the file to the model, the model's code to the file, the error back to the model. The chat assistant may not have been wrong about anything it could see. It just couldn't see the actual file you were working with.

An agent closes that gap because it can use *tools* that allow it to read and write files and execute commands on your computer. Given the same task, it opens the data file, reads the first rows, notices the ID column is character, writes the script accordingly, runs it, reads the output, and fixes what failed. You see the finished script and the log of what it did. You have stopped conversing with an assistant and started delegating to a process that acts in your project.

An agent also changes what you can sustain across a long project, not just within one task. A chat has one context window, its working memory, and nothing behind it: as the conversation grows the earliest messages drop out of view, and past a certain length the assistant loses the thread. An agent keeps going. When the context window fills it compacts, summarizing the older turns so the essentials survive in less space, and it writes what matters to files on disk: a running to-do list, a status snapshot, notes to itself (§6, §9). Those files outlast the session, so a fresh agent the next day can read them and pick up where the last one left off.

## The loop: think, act, observe

Earlier AI tools did one of two things. They reasoned without acting, which is how a chat window produces confident code that has never been run, or they acted without reasoning, which is blind trial and error. An agent alternates the two in a loop.

![](figures/think-act-observe.svg){#fig-think-act-observe fig-alt="The agent's loop: three boxes, Think, Act and Observe, with a repeat arrow returning from Observe to Think." above="6pt" below="6pt"}

*Think* is the plan for the next step. *Act* is a concrete operation in your project: read a file, run a script, list a folder, edit a line. *Observe* is reading what actually came back. Then the loop repeats, with the observation feeding the next plan. The observe step is what keeps the agent tied to your project rather than to a guess about it. When the agent reads a file, it sees the actual contents; when it runs a script, it sees the actual error output. A chat model reasons about a plausible file and a plausible error; an agent reasons about the real ones. An agent that can act is more reliable than a chat window: the loop keeps pulling it back to the facts on disk.

The loop verifies that something happened, not that it should have. A model that converged with a warning, a regression that answers the wrong research question, a merge that silently dropped a third of the rows: each of these *ran*. The observe step reports success because the script exited cleanly. Nothing in the loop knows the estimand, the design, or the data-use agreement. That knowledge has to come from you, in the files the agent reads (§6) and in the checks you run afterward (§12, §13).

And the loop can converge on the wrong target. Asked to make a failing script work, an agent will sometimes make the failure go away rather than fix its cause: wrap the call so the error is swallowed, drop the rows that won't merge, relax the check that was failing. Each step looked like progress in the observe step. This is the most important habit in checking an agent's work: determine *how* it made an error disappear, not just that it did (§18).

## Three ways of working

The same models are reachable in three places, and the place determines your role.

| | Chat window | Editor autocomplete | Agent |
|:--|:--|:--|:--|
| Where it lives | a browser tab | RStudio, VS Code, Positron | your project folder |
| Project context | what you paste | the open files | reads the whole project |
| Runs your code | no | no | yes |
| Sees real errors | no | partly | yes |
| Your role | messenger | driver | supervisor |

The roles matter more than the tools. As a *messenger* you carry context in and answers out by hand. The right shape for a question with no project attached (a statistics question, a paragraph to rephrase), but the model never sees the project, so it can't catch what wasn't pasted. As a *driver* you stay at the wheel while the model makes suggestions inside your editor, accepting or rejecting a line at a time; good for code you are actively writing and reading. As a *supervisor* you delegate a task with a defined outcome, then review what the agent did and decide what to keep. Less typing, more judgment. Moving rightward, the agent does more of the work, and your attention shifts from producing it to directing and checking it. That shift is the focus of this guide. The same role scales past one agent: a planner checked by a critic, or several independent runs compared against a known answer, are this supervision applied to a team (§4, §13).

The supervisor's job is to describe the outcome and its constraints, not the steps. When the shape of the task isn't obvious, ask for a plan first and edit it before the agent starts (§4). Let it run without narrating each step back to you. When it finishes, check the result against something other than its own report: a folder listing, a simulation with a known answer, a second implementation, a reference you opened. And keep it inside a boundary you set in advance: one project folder, under version control, with the data rule written where the agent reads it and enforced where it can't be talked around (§5, §16). 

## The tools are programs on your machine

An agent is a large language model with access to tools that enable it to read, edit, and write files, as well as run any programs installed on your machine. What the agent can do therefore depends on which tools you have available. The analysis language you use (e.g., R, Python, Stata) and `git` are the two tools covered in this guide. But there is a rich ecosystem of command line tools that cover other jobs a research project throws up, and installing one gives the agent something new it can do:

| The job | The kind of tool | Examples |
|:--|:--|:--|
| Find files or text fast | a fast searcher | `ripgrep`, `fd` |
| Turn analyses into a paper or deck | a document engine | Quarto, pandoc |
| Run or queue long jobs | a runner, a queue | `just`, `pueue` |
| Re-run only what changed | a pipeline runner | targets, Snakemake |
| Reproduce your analysis environment | a lockfile manager | `renv`, `uv` |
| Query data and API responses | a data processor | `jq`, `yq` |
| Keep API keys out of your files | a secrets store | 1Password, direnv |

You need none of these to start, but the companion tool-kit guide provides a catalog of tools that will make your research more efficient and reproducible.

# 3. Where to run it

<!--
STATUS: mixed · PHASE: 3 · DRAFTED: 2026-08-27 · REVISED: 2026-09-15 (reoriented to Claude; the account section replaces the old Appendix D, the HUIT API-gateway setup)
SOURCE: quickstart §4-5 (interfaces); the Claude Code setup and desktop-app docs, fetched 2026-08-27; FAS/HUIT "AI Tools: A Menu for the Harvard FAS/SEAS Community" (compiled 2026-09-04) and the HUIT/FAS AI pages, for the account sidebar
COVERS: Entry points: Claude desktop app, Claude Code (CLI, IDE extension, web/cloud). Which for whom. Which account — the institutional plan, not a personal one or an API key, and what each implies for data; Harvard sidebar (Claude Standard/Premium; Gemini and ChatGPT Edu named briefly). What must be installed (git; the R / Python / Stata you already have).
VERIFY: Claude interfaces checked 2026-08-27. Claude desktop app: Chat, Cowork, Code tabs; macOS, Windows, Linux (beta); the Code tab requires a paid plan; shares CLAUDE.md, settings, skills with the CLI; Git required on Windows for local sessions. Claude Code CLI: native installer for macOS, Linux, WSL, and Windows (PowerShell and CMD); Git for Windows optional (enables the Bash tool, otherwise PowerShell); auto-updates. Sandbox (re-checked 2026-09-02 against code.claude.com/docs/en/sandboxing): built into Claude Code, scoped by platform not interface — macOS, Linux and WSL2, not native Windows; configured with /sandbox and settings.json, shared across interfaces. Account (Harvard, checked 2026-09-15 against the FAS/HUIT menu compiled 2026-09-04): FAS licenses Claude (Standard = Chat/Code/Cowork; Premium adds usage and the top model), unit-funded, requested via the FAS/GSAS/SEAS GenAI Tool License Request form, HarvardKey sign-in, approved to Harvard Level 3; personal accounts are Level 1 only; HUIT pairing Claude with Gemini and winding down ChatGPT Edu (legacy). Re-check interfaces and the tool menu at release; they change quarterly.
-->

Claude Code runs as a desktop app, an editor extension, or a terminal command; whichever you use, it reads the same files and obeys the same settings. The interface changes only what you see while it works.

## The entry points

As of September 2026:

| Interface | What it is | Who it suits |
|:--|:--|:--|
| Desktop app | The Claude app, *Code* tab. Mac, Windows, Linux (beta). | Most researchers. Start here. |
| In the editor | The Claude Code extension for VS Code and Positron. | Readers who already write code in Positron or VS Code: the driver's seat (§2). |
| Terminal | `claude`. Mac, Windows, Linux, and WSL2. | Readers who want the full command-line toolkit. Appendix C. |
| Web and cloud | Claude Code on the web; cloud sessions from the app. | Tasks that should keep running when the laptop closes. Not for restricted data (§16). |

Start with the desktop app. It's graphical — you point and click rather than type commands. It's a download from Anthropic with nothing else to install, the controls (§4) are on menus, and it shows each change it made as a diff you can open and review (§9). Switch to the terminal when you want a fuller command-line toolkit (Appendix C): its one-line installer is a script from `claude.ai` (run in the terminal, or in PowerShell on Windows), it likewise needs nothing else installed, and it updates itself. If you prefer writing code in Positron or VS Code, use the editor extension there instead.

You can move between the three, or keep two sessions open on one project, without redoing anything: all three share your settings (§5), brief (§6), and skills (§8).

## Which account

Harvard licenses these agents under enterprise and education agreements: the vendor doesn't train on what you send. That coverage is what lets confidential level-3 data reach the agent (§16). Getting on the institutional plan is one request form and then signing in with your normal university login.

> **Harvard (FAS/SEAS), as of September 2026.** FAS licenses **Claude** at no cost to you; a school, department, or PI budget covers it. Request a seat through the FAS/GSAS/SEAS GenAI Tool License Request form, then sign in with HarvardKey. Two tiers: **Standard** — Claude Chat, Code, and Cowork under one license — is where everyone should start; **Premium** adds higher usage limits and Claude's most capable model, for a sustained heavy-use case. Signed in this way, Claude Chat and Code carry Harvard's data coverage (§16), which a personal account doesn't. HUIT is pairing Claude with **Google Gemini** as a second supported agent and winding down **ChatGPT Edu** (legacy, existing accounts only); those are the other institutional options, but this guide's examples use Claude. Other schools license their own set; the HUIT and school IT pages stay current.

## What else should be installed

Your analysis language: R, Stata, Python, etc.

Git. Version control for your project files provides a safety net.  

# 4. Modes

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-26 (first draft; needs a read-through)
SOURCE: tool-chain §10 "Permission modes", "Plan mode", "Model and effort" (two-gears figure)
COVERS: Permission modes (Manual, Accept edits, Plan, Auto, plus the two non-cycling modes bypassPermissions and dontAsk) in Claude Code. Plan mode: when, and when not. Model and effort as two gears that turn together with how scripted the task is. Other agents have analogous modes (noted once).
VERIFY: checked 2026-08-26 against the Claude Code permission-modes and model-config docs. Claude Code: Manual (`default`) / Accept edits / Plan / Auto, Shift+Tab cycle, Auto is the starting mode on Pro, Max, and Team, Manual on Enterprise or an institutional gateway; effort low/medium/high/xhigh/max, default high, max session-only; aliases sonnet/opus/fable. The full six-mode set was re-confirmed 2026-09-22 against the Claude Code permissions docs: default/acceptEdits/plan/auto are the everyday Shift+Tab cycle, plus two non-cycling modes, bypassPermissions (auto-approves all; flag `--allow-dangerously-skip-permissions`) and dontAsk (auto-denies anything that would prompt, runs only reads and allow-rule pre-approvals; for unattended/CI runs, session never waits for input; flag `--permission-mode dontAsk`; not in the app picker or the Shift+Tab cycle). Re-check at release; model names date fastest. (Codex mode/effort specifics archived 2026-09-15; see docs/archive.)
-->

Three settings set the stage for a session before you type the first request: how much the agent may do before it stops to ask, whether it plans before it edits, and which model runs at what effort level. The first two are about oversight. The third is about how hard and long the model thinks. All three can change within a session and the right settings change with the task.

## Permission modes

A *permission mode* sets which actions the agent may take without asking you first. Every action an agent takes is one of four kinds: read a file, edit a file, run a command, or reach the internet. The modes differ in which of those stop for a prompt. A prompt is a yes-or-no question in the session: *run this command?*, with the command shown.

In Claude Code, four modes are in everyday use. The desktop app and VS Code extension have a mode selector button, and in the terminal you cycle through them with `Shift+Tab`; 

| Mode | What runs without asking | Best for |
|:--|:--|:--|
| Manual | Reads only. Every edit and every command prompts. | Restricted data |
| Accept edits | Reads, file edits, and file housekeeping (`mkdir`, `mv`, `cp`) inside the project. Commands still prompt. | Potentially sensitive data |
| Plan | Reads and read-only commands. No edits until you approve a plan. | Any task whose shape isn't obvious (next section) |
| Auto | Everything, with a second model (a *classifier*) reviewing each action against your request and blocking the ones it judges unsafe. | Most daily work |

The default mode on a fresh install is `auto`. A starting mode can be pinned with `defaultMode` in the settings file (§5), under the modes' setting names: `default`, `acceptEdits`, `plan`, `auto`.  Two further modes remove prompting, in opposite directions. `bypassPermissions` runs every tool call with no prompt and no safety check — recommended for isolated containers only with all data backed up, and reachable from the app's mode selector (behind a settings toggle) or a terminal flag (`claude --allow-dangerously-skip-permissions`). `dontAsk` does the reverse: it auto-denies anything that would have prompted and runs only what your allow rules pre-approved. That makes it the mode for running the agent unattended, from a shell script, a scheduled job, or a continuous integration pipeline, where no one is present to answer a prompt and the session never waits for one. It is not offered in the app; you set it at launch from the terminal (`claude --permission-mode dontAsk`). 

Three things to keep in mind. First, a mode only dictates which actions require the agent to stop and ask your permission; it doesn't block anything outright. If something must never happen it belongs in a deny rule (§5), which blocks the action in every mode, whatever the agent or its classifier decides. For example, a data rule for restricted paths should be a deny rule. Second, the blanket-bypass mode sits outside the normal cycle on purpose — it's not something designed for everyday work. Third, more prompts aren't automatically safer. A session that asks forty questions trains you to answer yes without reading, and the resulting click-fest could be much worse than having Auto mode's classifier determine the risk (§5). The aim is a mode where every prompt you see is one you actually read.

## Plan mode

For any task whose shape isn't obvious to both you and the agent before work starts, ask for a plan before any edits. Claude Code builds this in: pick it in the app's mode selector (or cycle to Plan with `Shift+Tab` in the terminal) and describe the task. You can also ask your current agent to spin up a separate planning agent. The planning agent reads what it needs to, drafts a step-by-step plan naming the files it intends to touch and the changes it intends to make, but never starts implementation without your input. You edit the plan in place, then approve it, and only then does the agent start making changes. The plan becomes a fleshed out starting prompt for the task. It can also be useful to have a separate agent (either in a separate session or spun out by the current agent) antagonistically review the drafted plan and modify sections that can be improved. This process can iterate a few cycles until a consolidated plan is in place.

The payoff is catching the wrong-shaped solution at the plan stage instead of two-hundred file edits later. Even on tasks where you think the implementation is obvious, the plan surfaces assumptions the agent is making that you hadn't noticed: which files it considers in scope, which conventions it is inferring from your global metadata files (§6) and which from the surrounding code, and what it intends to check when it is done. If a step is wrong, you change it. If the scope drifted, you narrow it. If something is unsafe, you strike it. None of that requires unwinding edits.

## Model and effort

Two settings govern how much thinking the agent brings to a task, and for both, the right level depends on how much of the method is already worked out and how much the agent has to invent. The first is which *model* runs the job: Claude Code lets you pick in the session, from the vendor's most capable model (the frontier model) down to a smaller, faster one. The second is *effort*: how much the model reasons before it acts.

In Claude Code, `/model` picks the model, by name or by family alias (`sonnet`, `opus`, `fable`), and `/effort` picks the level: `low`, `medium`, `high`, `xhigh`, or `max`. The default is `high`; `max` is deliberately session-only and resets when you close the session. It can be pinned rather than picked each session: `effortLevel` in the settings file persists a level — any level but `max`, which the file refuses on purpose.

| Effort | What it's for |
|:--|:--|
| `low` | High-volume or latency-sensitive work |
| `medium` | Balanced speed, cost, and quality |
| `high` | The default: complex reasoning, quality over speed |
| `xhigh` | Deepest level that persists in settings |
| `max` | Session-only ceiling: unconstrained thinking, resets when the session ends |

![](figures/two-gears.svg){#fig-two-gears fig-alt="Two coupled bars, model and effort, each ramping from left to right beneath a scale that runs from scripted work to open-ended work." above="6pt" below="6pt"}

Think of them as two gears that turn together with how scripted the task is. A deterministic recipe, such as scaffolding a project whose shape is already written down (§7) or applying a known pattern across scripts, runs well on a smaller model at lower effort: it thinks less and does more, and is faster for it. A job where the agent has to work out its own approach and change course as evidence arrives wants the frontier model and the depth. What links the two gears is a single dimension: how much of the approach is given, and how much the agent has to invent.

For research work the practical rule is simpler than the figure. Latency rarely matters; the real budget is your plan's usage allowance, which higher effort spends faster (§17). I pin it high and drop a session down when a task is clearly mechanical, rather than the reverse: a wrong turn on a statistical question costs more than the minutes saved. Two cautions. The names of the models change every few months, so treat the aliases as the stable part. And the top model tier may bill outside your plan's allowance (Claude Code says so in the `/model` picker when it does); check before an overnight run.

# 5. Boundaries

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §13 introduction (banded security-layers figure, band 4 relabelled from "containment" to version control since containers are out of scope), §13a "Three tiers of command policy", "Conservative starting posture for new agent users", "The blind-click-fest failure mode", "Two write channels"; §13b sandbox role; §1b (git)
COVERS: Allow / prompt / deny as a starting posture. The sandbox in one paragraph. Version control as the undo button. Why anything that must never happen should not be promptable. The .claude/settings.json deny file that §16 points to.
VERIFY: checked 2026-08-27 against the Claude Code permissions and sandboxing docs: rule forms `Bash(cmd *)`, `Read(./path/**)`, `Edit(path)`, `PowerShell(Cmdlet *)`; deny rules apply in every mode; the sandbox is built in, enabled with `/sandbox`, runs on macOS, Linux, and WSL2 but not native Windows; sandboxed commands write only to the project and temp by default; no network domains pre-allowed; auto-allow mode. (Codex rules-file specifics archived 2026-09-15; see docs/archive.)
-->

Limiting what an agent can do. The question isn't whether the agent is malicious but what it can touch if it goes wrong, because it will go wrong: it will misread a request, run a command that does more than it meant, or act on something it read in a file. Boundaries keep a mistake from being unrecoverable. There are four, and each covers a failure the others don't.

![](figures/four-boundaries.svg){#fig-four-boundaries fig-alt="Four boundaries in two groups: deny rules and prompts, which bind a cooperating agent; the sandbox and version control, which hold whatever the session has read." above="6pt" below="6pt"}

The split that matters is between the first two and the last two. Rules and prompts bind a *cooperating* agent: a deny rule matches the command as the agent wrote it, and a prompt depends on a person reading it. Both are excellent against accidents. Neither is a wall. The sandbox and version control hold whatever the session has read and whatever the agent has decided, because the operating system and git enforce them rather than the agent's good behavior or your attention.

## Allow, prompt, deny

Every action an agent takes falls into one of three tiers, and the settings file is where you say which. *Allowed* actions run without asking. *Prompted* actions stop for a yes or no, with the command or the edit shown. *Denied* actions are refused, in every mode, and the agent is told so.

A conservative starting posture for a researcher, in shape rather than as a copyable file:

- *Allow* what only reads or builds: reading files in the project, `git status`, `git diff`, `git log`, running your own scripts and the build command. With the sandbox on (below), most local commands can sit here because the sandbox bounds them.
- *Prompt* on what is visible outside the machine or hard to undo: `git push`, installing or removing packages (system packages too: `brew`, `apt`, `winget`), deleting files, anything that reaches the network, any command that touches `data/`.
- *Deny* the destructive set outright: `rm -rf`, `sudo`, `git push --force`, `git reset --hard`, `git clean`, and every read of a restricted data path (§16).

The relaxation path runs one way. When you notice you have approved the same prompt ten times without reading it, that command moves from prompt to allow, one at a time, as you come to trust the boundary. When you discover an action you would never have approved had you read the prompt, it moves to deny. Items rarely move from allow back to prompt, unless a tool turns out to do something you didn't expect.

Here is that posture as the file §16 points to. It is `.claude/settings.json` in the project folder, committed to git so every session on every machine inherits it; the personal `settings.local.json` beside it holds machine-specific overrides and isn't committed (Appendix A.5). The same rules in `~/.claude/settings.json` apply to every project.

```
{
  "permissions": {
    "allow": [
      "Bash(Rscript *)",
      "Bash(git status *)", "Bash(git diff *)", "Bash(git log *)",
      "Bash(just build)"
    ],
    "ask": [
      "Bash(git push *)",
      "Bash(install.packages *)", "Bash(renv::install *)"
    ],
    "deny": [
      "Read(./data/raw/**)",
      "Edit(./data/raw/**)",
      "Bash(rm -rf *)", "Bash(sudo *)",
      "Bash(git push --force *)", "Bash(git reset --hard *)", "Bash(git clean *)",
      "PowerShell(Remove-Item *)",
      "Edit(./.claude/settings.json)"
    ]
  }
}
```

The rule form is the tool, then the command or path in parentheses, with `*` standing for whatever follows; `Read(./data/raw/**)` covers the folder and everything beneath it. Deny rules apply in every permission mode (§4), including Auto, which is why the data rule belongs here and not in a mode. And the last line denies the agent the ability to edit the file itself, so a rule can't be talked away in the session it is meant to bind. Other agents keep the same posture in their own rules file; the forms differ, the idea doesn't.

## Why anything that must never happen should not be promptable

A prompt is only as good as the attention reading it, and attention is the resource an agent session spends fastest. A session that asks forty questions trains you to press yes; by the fortieth you are approving the shape of the dialog, not the content. This is the click-fest, and it is the ordinary failure of a permission system that prompts too much. Two facts make it worse than it sounds. A prompt gates an action before its content arrives: approving "run the script that fetches the page" happens before the page exists, so nothing that happens afterward can depend on asking again. And once a session has read something you wouldn't fully trust (a page it fetched, a README from a package, an issue thread, a collaborator's file), every subsequent request looks plausible, because the request is shaped by what was read.

What stays dependable at that point is what doesn't depend on reading the prompt: the deny rules, the sandbox, the version control. So the corollary: anything that must never happen shouldn't be promptable. The data rule is the clearest case. "Ask before reading `data/raw/`" is a prompt you will one day approve without reading. "Never read `data/raw/`" as a deny rule, with the data outside the folder besides, isn't.

The aim is a prompt rate low enough that you read every prompt. Reaching it means moving the safe routine to allow, the truly dangerous to deny, and leaving in the middle only the handful of actions you actually want to decide each time.

## The sandbox in one paragraph

A *sandbox* is a fence the operating system puts around a command: inside it, the command can write only to the project folder and a temporary directory, and can reach only network hosts you have approved, and this holds for any program the command starts in turn. It is the third boundary, and what it adds is the kind of guarantee: a deny rule binds the command as written, a prompt binds what you catch, the sandbox binds what the process can physically do. In Claude Code the sandbox is built in and off until you turn it on with `/sandbox`; it runs on a Mac, on Linux, and on Windows inside WSL2, not on native Windows, and its auto-allow mode runs sandboxed commands without prompting, which is how you get fewer prompts *and* more safety at once. (Some agents turn a sandbox on by default; the guarantee is the same.) One caveat: the fence bounds writes and network, not reads. Inside it the agent can still read whatever is in the folder, which is why the data rule (§16) is a deny rule and a location, not a sandbox setting.

## Version control as the undo button

Every change an agent makes is a git change, and that is what makes delegating tolerable. Before a task, the working copy is clean: `git status` shows nothing, so whatever the agent does will show up, alone, as a diff. After the task, `git diff` is the review (§9 covers reading it, in the app or the terminal). A single file the agent got wrong comes back with `git restore <file>`. A whole task that went wrong comes back with `git revert` of its commit, and a task you approved but regret next week comes back the same way, because the history is still there. The habit that makes this work is a commit before every task you delegate and one after, so that each commit is one task and the undo is one command.

Two limits. Git undoes what it tracks, and it doesn't track data files or model fits (§7), which is one more reason `data/raw/` is read-only and rebuildable outputs are rebuilt rather than restored. And the undo has to be protected from the agent: `git reset --hard`, `git clean`, and `git push --force` are the commands that destroy history or uncommitted work, and they are on the deny list for that reason. If the agent can run them, the history you were relying on to reverse its work is the thing at risk.

## When to reach for a container

The four boundaries above cover the ordinary case: an agent that might go wrong on your own code and data. A few situations call for a heavier one, a *container*: a sealed environment with its own copy of the files and no path to the rest of your machine, so nothing that runs inside it can touch anything outside. Reach for one when the risk is the code or data itself rather than the agent. You are about to run something you don't trust: a reviewer's replication package, a scraped dataset, a repository you were sent. Or a task needs the agent to run with the prompts and the sandbox relaxed (§4), and you want that freedom walled off from everything else. Or you want to hand a collaborator an environment that runs the analysis exactly as yours does.

This guide doesn't set one up: which container tool to use, and how to install it, is the companion guide's, *Extending Your Agent's Toolkit*. What belongs here is the judgment. The sandbox above already bounds what a command can write and reach, and for your own work that is enough; the container is the fence you add when you don't trust what you are about to run.

## A starting posture

In order: the project folder under git, committed, and clean before each task. The deny file above in place, committed. The sandbox turned on. Restricted data outside the folder (§16). Manual mode for the first sessions (§4), until you have seen what the prompts look like. Then relax one prompt at a time, and never past the point where you stop reading them.

<!-- ===================== PART II — TEACH THEM YOUR WAY ===================== -->

# 6. The files the agent reads

<!--
STATUS: mixed · PHASE: 1 · DRAFTED: 2026-08-26 (first draft; needs a read-through)
SOURCE: tool-chain §12 "AGENTS.md / CLAUDE.md hierarchy", "Context economy", "Anti-patterns" (hub-and-spoke figure, simplified), §17b "Task planner"; content bank framings/agent-metadata-my-way.md (folded in; module points back here); deck "You write your conventions once", "What goes in them"
COVERS: Global vs project. AGENTS.md / CLAUDE.md; the ancillary files (writing, coding, modeling); STATUS.md (the current-state snapshot, read first) and TASKS.md (the task record); METHODOLOGY.md and PLAN.md; four files, four roles. What goes where. Context economy. Anti-patterns (the STATUS.md / TASKS.md seam under Duplicated state). Two worked examples: a 26-line global file for a researcher, and a project brief for a paper (full text in Appendix A).
VERIFY: checked 2026-08-26 against the Claude Code memory docs: Claude Code reads CLAUDE.md, not AGENTS.md; `@path` imports load at launch; Windows symlinks need admin rights; ~/.claude/CLAUDE.md is the user file; auto memory on by default under ~/.claude/projects/; 200-line guidance; has /init. Re-check at release. (Codex file-convention specifics archived 2026-09-15.)
-->

Anyone who has done this work for years asks the same question: how will it know to do things *my* way? A general model writes generic code and generic prose, and organizes a project the generic way. Your naming, your folder layout, your estimands and priors, your citation style, the journal's conventions: none of that is in the model. The answer is concrete. The agent reads a few plain-text files at the start of every session, and you write them once. This is most of what "setup" means.

## Two layers

Global files hold *how you work*: code style, prose voice, statistical defaults, file naming, the things you would tell any new research assistant on their first day. The agent reads them in every project, so you never restate them. A project file adds *what this project is*: what it is for, where things live, how to run it, and what is off limits. It is the onboarding document you would write for a new RA, except that you write it once and it is followed every time.

![](figures/hub-and-spoke.svg){#fig-hub-and-spoke fig-alt="A global box holding AGENTS.md with three convention files linked to it, above a local box of three project types, with arrows running from global to local." above="6pt" below="6pt"}

The files are plain markdown in ordinary folders: no settings screen, no vendor format, readable by you, by a collaborator, and by whichever agent you run. That has a consequence beyond convenience. Conventions written down are conventions a collaborator, or you in a year, can reproduce. The brief that makes the agent consistent is also project documentation, and it outlasts any one session.

## Where the files live

Claude Code reads a file named `CLAUDE.md`. It reads a global file from your home folder (written `~` below; `/Users/you` on a Mac, `C:\Users\you` on Windows) and a project file from the folder you point it at. It also reads a file in a subfolder, so a rule can apply to `manuscript/` alone.

| | Where |
|:--|:--|
| Global (how you work) | `~/.claude/CLAUDE.md` |
| Project (what this is) | `CLAUDE.md` in the project folder |
| A subfolder | `CLAUDE.md` there, read when the agent works in it |

`CLAUDE.md` isn't the only such name in the wild. `AGENTS.md` is an emerging cross-vendor standard other agents read directly, and tools have proposed their own over the years — Cursor's `rules.mdc`, GitHub's `copilot-instructions.md`. That is the case for keeping one file as the source of truth and bridging every expected name to it, so the brief ports when you or a coauthor works in a different agent.

Keep `AGENTS.md` as the file you edit, and make `CLAUDE.md` a one-line file that imports it:

```
@AGENTS.md
```

Claude Code expands the import when the session starts, as if the text were in `CLAUDE.md` itself, and anything you write below that line is Claude-specific. On a Mac a symlink (`ln -s AGENTS.md CLAUDE.md`, run in the project folder) does the same job; on Windows a symlink needs administrator rights, so use the import. Either way there is one file to maintain and no drift between two copies.

Claude Code has an `/init` command that drafts a starting project file from what it finds in the folder. The draft describes the folder. What it can't know are the rules you would have told a new assistant, and those are what you add.

## What goes in the global file

Two kinds of content. Your craft: folder layout and naming, coding style, statistical conventions (estimands, priors, interval types), citation and prose style. Your guardrails: never send identifiable data to a model, always pin dependencies, follow the journal's disclosure policy. The same file that makes the agent work your way is where the responsible-use rules live, as standing instructions rather than things you remember to type.

Here is a complete global file for a researcher. Twenty-six lines; Appendix A has it as a file to copy and edit.

```
# How I work

Quantitative social scientist. R first, Stata for collaborators, some Python.

## Projects
- One folder per paper, under git. Its AGENTS.md says where things live.
- `data/raw/` is read-only. Derived files go in `data/processed/`.
- Paths via `here::here()`. No `setwd()`, no absolute paths.
- Lowercase, hyphenated file names: `clean-acs-2022.R`, not `Clean ACS 2022.R`.

## Code
- R: tidyverse style, the native pipe `|>`, one script per stage.
- Packages pinned with `renv`. Never install one without updating the lockfile.
- Comment what a block is for, not what each line does.

## Statistics
- State the estimand before fitting. Report every estimate with an interval.
- No model is trusted until it recovers known parameters from simulated data.
- Fits longer than a few minutes run outside the session, not inside it; I read the log when it finishes.

## Writing
- Short sentences. Point first, then the qualification. Prose, not bullets.
- Methods: the equation first, then the prose that explains it.
- American spelling. Oxford comma.

## Never
- Never read, print, or copy `data/raw/`, or anything a project marks restricted.
- Never delete or overwrite a data file. Never rewrite git history.
- Ask before anything that takes more than a few minutes or reaches the network.

## Every session
- Read `STATUS.md`, then `TASKS.md`, at the start.
- Update `TASKS.md` before finishing; rewrite `STATUS.md` if the state moved.
```

Every line is concrete enough to check: "use `here::here()` for paths" can be verified in a script, "keep paths tidy" can't, and an instruction the agent can't verify is one it will follow inconsistently. The *Never* section is short and absolute, and it isn't the enforcement: a sentence in a file is advice the agent will almost always take, and §5 and §16 show how to make the data rule impossible to break rather than merely forbidden. And the file is short on purpose, for a reason the *Context economy* section below explains.

## What goes in the project file

The project file answers the questions a new RA would ask in the first hour: what is this, where is everything, how do I run it, and what must I not touch. Add the conventions that hold for this project only (the coauthor's software, the journal, the variable-naming scheme) and pointers to the files that hold the rest. Here is a project file for a paper; Appendix A has the full text.

```
# heat-birthweight

Paper with J. Smith: county-level heat exposure and birthweight, US 2010–2020.
Target: Demography. Decisions live in METHODOLOGY.md, the current state in
STATUS.md, open tasks in TASKS.md.

## Where things live
- `data/raw/natality/`: restricted microdata under a DUA. See Off limits below.
- `data/raw/public/`: ACS and PRISM downloads; `data/raw/sources.md` logs each.
- `data/processed/`: what we build. Working file: `natality-county.parquet`.
- `code/`: `clean-natality.R`, `model-heat-bwt.R`, then `_final/figures.R`.
  `run-all.R` runs all three in order.
- `outputs/`: figures and tables the manuscript reads.
- `manuscript/`: the paper, Quarto to Word for the coauthor.

## This project
- Coauthor works in Stata. Every R model has a `.do` mirror in `code/stata/`.
  The two must agree before a number goes in the paper.
- Estimand: the effect of one more third-trimester day above 35 °C on county
  mean birthweight. Two-way fixed effects with county-clustered standard errors.
- Variable names: `bwt_` prefix for outcomes, `heat_` for exposures.

## Off limits
- `data/raw/natality/` is restricted. Never read, list, or copy it.
- Work only from `data/processed/natality-county.parquet`.
- Never send any file under `data/` to a web search or an external service.
```

Notice what isn't there. No history of how the analysis evolved (that is `METHODOLOGY.md`), no statement of where the project stands (`STATUS.md`), no list of what remains to do (`TASKS.md`), no description for a reader who isn't the agent (`README.md`). The project file is rules and pointers, and it stays readable because it is nothing else.

## The other files

Five more files do specific jobs. None is required on day one.

*Convention files.* When one topic in the global file outgrows a screen, move it to its own file alongside (`WRITING.md`, `CODING.md`, `MODELING.md`) and leave a one-line pointer behind: "For prose voice, see `WRITING.md`." The agent reads the pointer every session and the file only when the task calls for it. Two rules make this work: name the file for what it contains, so the agent can choose it from the name alone, and make each one self-contained, so it can be read without the others.

*`STATUS.md`.* Where the project stands right now, on one screen: the stage and the date it was last updated, the main result so far, what is in motion, what is waiting on someone else, the facts the agent would otherwise hunt for (the current N, the specification in force, the working file), and the risks that aren't yet tasks. It is rewritten in place when the state changes and never added to, so it says where the project is and not how it got there. The agent reads it first in every session, before `TASKS.md`; you read it when a coauthor asks how the paper is going.

*`TASKS.md`.* The record of open and finished work: three headings, *To Do*, *In Progress*, and *Done*, with a date on each finished item. The agent reads it after `STATUS.md` to see what is open and what is half-done, and updates it as work happens; you read it on Monday to remember Friday. Deliberately low-tech. §9 covers the session habits around it.

```
# Tasks

## To Do
- Sensitivity analysis: drop 2020 and refit.
- Figure 2: switch to per-capita exposure.

## In Progress
- Stata mirror of `model-heat-bwt.R`. Estimates agree; SEs differ in 3rd decimal.

## Done
- 2026-08-19 — Cleaning script reproduces the coauthor's N (1,214,308 births).
```

*`METHODOLOGY.md`.* Dated entries recording why: why this model, why this prior, why these exclusions, what was tried and rejected. It is what the agent consults before proposing an alternative you already ruled out, and it is the seed of the paper's methods section (§14).

*`PLAN.md`.* The analysis sequence and its milestones, for projects large enough to need one. Four files, four roles: `STATUS.md` carries the current state, `TASKS.md` carries the record, `PLAN.md` carries sequence, `METHODOLOGY.md` carries reasoning. Don't mix them. The agent reads the right file for the right question only if each file has one job.

## Context economy

An agent's working memory for a session is its *context window*: everything it has read so far, from your files to the output of the last command, which it reasons over and which is finite. Every line loaded that doesn't bear on the task is a line not spent on the task, and a long brief is followed less reliably than a short one, not more. Claude Code's own guidance is to keep a `CLAUDE.md` under 200 lines.

The pattern, then: keep the global file to the rules that apply to everything, link the rest, and let the agent pull in a convention file only when the task needs it. The pointers can sit together at the top of the file as a small dispatch index:

```
For prose voice and style -> see WRITING.md
For code style -> see CODING.md
For statistical modeling -> see MODELING.md
```

The agent then knows where to look. When the task is "rewrite this section of the manuscript," the agent reads `WRITING.md` and leaves `CODING.md` alone. One distinction matters here. A *pointer* ("see `WRITING.md`") is read on demand. Claude Code's `@` *import* is loaded at the start of every session, whatever the task. Use the import for the one-line bridge between `CLAUDE.md` and `AGENTS.md`, and pointers for everything else.

## Memory

Claude Code also keeps notes for itself across sessions (it calls this auto memory, and it is on by default): your corrections, your preferences, and project context it couldn't derive from the files, saved as markdown under `~/.claude/projects/` and opened with `/memory`. Treat it as a convenience. Memory is for what the agent noticed; the files are for what you decided. When the two disagree, the file wins, and a rule you find yourself relying on memory to keep belongs in `AGENTS.md`.

## Anti-patterns

*Vague rules.* "Write clean code" and "organize files sensibly" produce generic behavior. Say the concrete thing, with an example: the pipe, the path function, the naming pattern.

*The growing file.* A brief that gains a paragraph per session until it is 800 lines, most of them narrative. Move the reasoning to `METHODOLOGY.md`, the sequence to `PLAN.md`, to-dos to `TASKS.md`, and the current state to `STATUS.md`; save the README narrative for the `README.md`; keep the brief to rules and pointers.

*Duplicated state.* The same fact in the brief, in `STATUS.md`, in `TASKS.md`, and in memory. When it changes, one copy will be missed. Pick one home per kind of fact and point to it from the others. The pair to watch is `STATUS.md` and `TASKS.md`, because finishing a task usually changes the state. Record the completion once, in `TASKS.md`; then rewrite the line of `STATUS.md` it changed, rather than copying the entry over. A `STATUS.md` that starts to keep a history has become a second task list, and the agent now has two to reconcile.

*Pasting whole files.* Pasting a script into the chat when naming it would do. The agent can read the file, and the name wins three ways: the agent sees the current version on disk rather than a possibly stale copy; the name survives a compaction (§18), so the agent can re-read the file where a paste is gone; and a name costs nothing, where a paste fills the context window and is paid for again on every turn after.

*Stale memory.* A note that was true once (a renamed file, a reversed decision) acted on without being flagged. Worse than no memory. Open the notes occasionally and delete what has expired.

*A rule where a setting is needed.* "Never read `data/raw/`" as a sentence is advice. If it must never happen, it needs a permission setting that stops the read regardless of what the agent decides (§5, §16). Write the rule in both places.

## Writing your first file

Don't write it from scratch. Start with the twenty-six lines above, or with `/init`, and then run the agent on a real task. Each time you correct it, ask whether the correction would apply next week; if so, it is a rule, and it goes in the file. Three corrections make a good first session. The file is loaded when a session starts, so after editing it, start a new session or tell the agent to re-read it.

# 7. Project structure

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: ~/.config/agents/TEMPLATES.md § Paper Project Template (the shape only, simplified); tool-chain §12 "Workspace structure", "Project shapes"; quickstart §7; deck "Modern research is folders on a computer", "See it: scaffold a project, live"; ~/.config/agents/skills/scaffold/SKILL.md (the walk-through)
COVERS: The messy-folder problem. The paper shape and the reason for each directory (raw data read-only; code tiers; outputs; docs; manuscript). Scaffolding a new project: the /scaffold walk-through, which is also the talk demo. Converting an existing folder. Dropbox and OneDrive caveats.
VERIFY: checked 2026-08-27: Dropbox ignore is `xattr -w com.dropbox.ignored 1` on a Mac and `Set-Content -Stream com.dropbox.ignored -Value 1` in PowerShell (Dropbox help, "How to set a file or folder to be ignored"); OneDrive has no user-settable per-folder ignore (an administrator-controlled folder-exclusion feature began rolling out in August 2026, off by default). Re-check the OneDrive claim at release.
-->

Most research lives in cloud-shared folders: dozens of them, each organized differently, hard to navigate even for the person who built them. An agent walking into one has the same problem you do, with less context. The fix is the one that helps a new RA: agree on a structure that works, use it for every project, and have the agent build it.

## The messy folder

Here is a folder every reader will recognize.

```
mortality_disparities_study/
|-- Data/                       412 files
|-- data_clean/                  88 files
|-- Analysis FINAL/
|-- analysis_v2_USE_THIS/
|-- figures/                     51 files
|-- figures_new/                 37 files
|-- figs_FINAL_v3/               44 files
|-- from_coauthor/               63 files
|-- Stata_do/                    19 files
|-- Paper draft v7 (1).docx
`-- ... 18 more folders
```

You can work in this folder because you remember what happened. An agent can't. Asked to update a figure, it has to choose among three figure folders by name, and the names don't say which is current. Asked to fix the cleaning script, it has to find out which of two analysis folders is live. Asked to read the data, it faces 412 files with no marker for which are the originals and which are derived, so nothing stops it from writing into an original. And a fix it makes in one copy of a duplicated script doesn't reach the other. Every one of these is a mistake you would make too, on a bad day; the agent has more bad days, because it starts every session with no memory of the folder.

Structure fixes this for both of you. A folder whose layout is written down (§6) is a folder the agent can navigate by name, and the layout is what makes bookkeeping (§9), a one-command build (§15), and a data rule you can enforce (§5, §16) possible at all.

## The paper shape

One layout for every paper. Here it is for the project from §6, with the reason for each part below.

```
heat-birthweight/
|-- AGENTS.md              # the brief (§6); CLAUDE.md imports it
|-- README.md              # for humans: what this is and how to run it
|-- STATUS.md              # where things stand, one screen; rewritten
|-- TASKS.md               # open and finished work
|-- METHODOLOGY.md         # dated entries: why each analytic choice was made
|-- .here                  # zero-byte marker for the project root
|-- code/
|   |-- _startup/          # sourced at the top of every script: packages,
|   |                      #   options, data loading, shared functions
|   |-- _experiments/      # simulations and checks (§12); not in the build
|   |-- _data-acquisition/ # fetch scripts (§11); run when data are refreshed
|   |-- clean-natality.R   # one script per stage; each starts from _startup/
|   |-- model-heat-bwt.R
|   `-- _final/            # manuscript figures and tables; run last
|-- data/
|   |-- raw/               # as received; never modified; often not committed
|   `-- processed/         # built from raw by code/; rebuildable
|-- outputs/
|   |-- figures/           # committed: the exact versions matter
|   |-- tables/            # committed
|   `-- models/            # saved fits: large, rebuildable, not committed
|-- manuscript/            # drafts, submissions, reviewer responses
|-- docs/
|   |-- briefs/            # dated: what collaborators sent, plans shared
|   |-- notes/             # undated: reference material, explainers
|   `-- references/        # the PDFs you cite
`-- logs/                  # output of long runs; not committed
```

*The root files* are the agent's brief and the project's state, covered in §6. `.here` is a zero-byte file whose only job is to mark the project root, so that every script names a file by its path from the root and works from RStudio, from the command line, and from the agent alike. In Stata the equivalent is a `setup.do` at the root that defines a global for the project root, and every path is built from it:

```
dat <- read_parquet(here("data", "processed", "natality-county.parquet"))  # R
use "${root}/data/processed/natality-county.dta", clear            * Stata
```

No `setwd()`, no absolute paths, no `../`: a project with those breaks the moment it is moved or opened on a coauthor's machine.

*Raw data is read-only.* `data/raw/` holds data exactly as received, and nothing ever changes a file there; new data arrives as a new, dated file (§11). The pipeline reads it; getting new raw data is a deliberate act (a download script, a fresh extract), never a side effect of an analysis. State the rule in `AGENTS.md`, and enforce it with a permission rule (§5) and, for restricted data, with a read-only file permission as well. Everything in `data/processed/` is built from `data/raw/` by code, which makes it rebuildable and therefore not precious: if a derived file is wrong, fix the script and rebuild rather than editing the file, because the next run would overwrite the edit without record.

*Code in three tiers.* `_startup/` holds what every script needs: the packages, the options, the data loading, the functions you reuse. Every analysis script begins by sourcing it, which is why the agent can run any one analysis without the others. The analyses themselves sit at the top level of `code/`, one script per stage or question, named for what they do rather than numbered, so a new one can be added without renumbering. `_final/` builds the manuscript's figures and tables from the saved results and runs last. The underscore on the tier folders sorts them to the top of the listing and leaves the analyses in alphabetical order beneath.

*Outputs split by whether the exact version matters.* Figures and tables are committed to version control: the version in the submitted manuscript is a fact you will need again at revision. Saved model fits are large and rebuildable from code and data, so they aren't. `logs/` is where long runs (§12) write their output so the agent, and you, can read what happened; not committed either.

*Documents, dated or evergreen.* `docs/briefs/` holds what came from collaborators and what you shared with them, with a date prefix (`2026-08-19-coauthor-comments.md`) so the folder sorts into a timeline. `docs/notes/` holds reference material that stays true across revisions, undated. `docs/references/` holds the papers. `manuscript/` holds the paper itself and, when the time comes, one folder per submission.

The whole folder is under version control from the first day, which is what makes an agent's changes reviewable and reversible (§5). What git carries is code and text. The `.gitignore` excludes `outputs/models/`, `logs/`, `data/processed/` when it is large, and `data/raw/` from the first day (Appendix A.5): a data-use agreement almost always forbids copying the data to a third party, and pushing to GitHub is exactly that (§16).

This is a cut-down version of the layout I use myself, which adds a pipeline manifest, a causal-DAG folder, a working report, and a finer split of `docs/`; Appendix A.6 has the full template, with the data-project and publishing shapes alongside it. A talk or a report is a smaller shape: a source folder, an output folder, a template, and the root files other than `METHODOLOGY.md`. Start with the shape above and add parts when a project needs them. What matters isn't this layout but *one* layout: that every paper you and the agent open has its raw data, its scripts, and its outputs in the same place.

## One workspace

One convention pays off across projects rather than within one: keep every active project under a single workspace directory, organized by what each produces. Throughout, `<workspace-root>/` stands for that directory; substitute your own (a common choice is `~/workspace/`). Mine sits inside a cloud-synced folder; the Dropbox rules at the end of this chapter are what make that workable.

```
<workspace-root>/
|-- papers/        # peer-reviewed manuscripts + analyses (paper shape)
|   |-- lee-bone-density/
|   |-- jones-gait-study/
|   `-- ...
|-- publishing/    # polished deliverables (guides, decks, CVs)
|-- data/          # data collection / analysis without a manuscript
|   |-- publication-survey/
|   `-- ...
|-- consulting/    # statistical consulting engagements
|-- ops/           # operational management of ongoing concerns
|-- business/      # market research, branding, finance
|-- software/      # application logic and product behavior
|-- tools/         # utilities, automation, templates, workflow infrastructure
|-- sites/         # content-first or identity-first websites
|-- notes/         # personal knowledge management
`-- archived/      # fully inactive projects (mirror of the categories above)
    |-- papers/
    |-- data/
    `-- ...
```

The top-level folder tells you, and the agent, a project's kind without opening any file: `papers/` holds paper-shaped projects, `data/` data projects, each in the layouts of Appendix A.6. Names are lowercase and hyphenated throughout: `lee-bone-density`, `publication-survey`, `heat-birthweight`. No spaces, no underscores, no CamelCase. A paper is `collaborator-topic` (`jones-gait-study`), a consulting project `client-topic`, and everything else a descriptive slug. Filenames inside projects follow the same convention, with R-tooling extensions (`.R`, `.Rmd`, `.Rproj`) keeping their canonical capitalization.

The structure is also what makes reorganizing safe. Because every script anchors its paths to the project root (the `.here` marker above), a finished paper moves from `papers/heat-birthweight` to `archived/papers/heat-birthweight` without a single script edit. In Python the same anchor is a few lines at the top of a script:

```
PROJECT_ROOT = next(p for p in Path(__file__).resolve().parents
                    if (p / "AGENTS.md").exists())
DATA = PROJECT_ROOT / "data"
```

## Scaffolding a new project

Standing up a new project in this shape is the first thing worth delegating, and the easiest way to watch an agent work. I keep it as a packaged workflow, `/scaffold` (§8); you can do the same with one request, once the layout is in your global file (§6) or copied from Appendix A.

Make an empty folder named for the project (`heat-birthweight`; for a paper, `collaborator-topic`), drop into it any loose files you already have (the analysis plan, the coauthor's draft, a data extract), and start the agent there. Then ask:

> Scaffold this folder as a paper project using the layout in my global file. Sort the loose files into it and show me the plan before moving anything. Create the root files, `.here`, and a `.gitignore` that excludes `data/raw/`, `outputs/models/`, and `logs/`. Initialize git. Do not commit yet.

What a good run looks like. The agent confirms the project name and shape in one line and waits. It lists the loose files and proposes a destination for each in a table (the `.docx` to `manuscript/`, the analysis plan to `docs/briefs/` with a date prefix, the `.csv` to `data/raw/`), flags anything ambiguous rather than guessing, and waits again. Then it creates the tree, writes a first `AGENTS.md` from what it saw in the files it sorted, writes `README.md`, a `STATUS.md` whose stage line says only that the project was scaffolded today, and an empty `TASKS.md` and `METHODOLOGY.md`, adds an empty placeholder file in every empty folder so git keeps them, writes the `.gitignore`, and runs `git init`. It ends with a folder listing and a three-line "what to do next".

What you check. The listing matches the shape. The draft `AGENTS.md` says what the project is and where things live, and you correct what it guessed. The `.gitignore` contains the data rule. `git status` shows no data file waiting to be committed. Then commit, yourself or by asking.

If the folder lives inside Dropbox, one more thing must happen in a particular order, described below, and the agent should do it as part of scaffolding.

## Converting an existing folder

The folder in the first section can be converted to the shape, but it is a bigger job than scaffolding and the wrong one to do casually. Do it in plan mode (§4), with three rules fixed in advance.

Nothing is deleted. Files move; duplicates are set aside in a holding folder (`_old/`, excluded from git), not removed. Raw data is moved, never rewritten. And before anything moves, a compressed copy of the whole folder is made, outside the folder, and its name written into `TASKS.md`.

Then the work is an inventory and a mapping. Ask the agent to list every file with its size and date, and to propose a table: each old path, its new home, and a one-line reason. The interesting rows are the duplicates: three figure folders whose contents overlap, two analysis folders of which one is live. Ask it to resolve those by modification date and by what the current manuscript actually references, and to show its reasoning; you decide. Approve the table, and save it in `docs/notes/` as the migration log. Only then does anything move.

After the move, the scripts are broken, because every `setwd()` and absolute path now points at the old layout. Ask the agent to find all of them and replace each with a path from the project root, then to run every script that still matters and report which ran clean. The scripts that fail are the second inventory: some are dead, some need a package, some read a file that was never in the folder. Nothing in `_old/` is deleted until the manuscript's figures rebuild from the new layout, which is also the first reproducibility check the project has ever had (§15).

One folder is often shared with a coauthor who won't adopt the structure. That is fine. Their material arrives into `docs/briefs/`, dated; the manuscript goes to them as Word and comes back as Word (§14); and the analysis folder is yours.

## Dropbox and OneDrive

Most research folders are cloud-synced, and two things go wrong when a project of this shape lives in one.

The first is volume. `.git/`, an R package library (`renv/`), a Python environment (`.venv/`), saved model fits, and logs contain thousands of small files or large binaries that change on every run. A sync client tries to upload all of it, every time, and a project can stall for hours while it does. The second is worse: two machines, or you and a coauthor, editing the same `.git/` through sync corrupts it, because the sync client and git both believe they own the files.

Dropbox has a fix, with a rule about order. Any folder can be marked ignored, so that it stays on disk but never syncs. On a Mac the mark is set in the Terminal; on Windows, in PowerShell:

```
xattr -w com.dropbox.ignored 1 .git                              # Mac
Set-Content -Path '.git' -Stream com.dropbox.ignored -Value 1    # Windows
```

The mark must go on *before the folder fills*. Create the folder empty, mark it, confirm the mark is there, and only then run the command that populates it (`git init`, `renv::init()`, the first model fit). Marking a folder that Dropbox has already indexed makes it un-index every file inside, and while that runs, which can take hours for a package library, the folder can be unreadable. Put the sequence in your global file so the agent does it every time, in that order, for `.git/`, `renv/`, `.venv/`, `outputs/models/`, and `logs/`.

OneDrive has no mark you can set yourself: as of this writing, folder exclusion is an administrator setting that is off by default, and the usual advice to make a folder "online-only" doesn't stop a repository from being uploaded. Keep the project outside OneDrive, in a plain local folder, and let GitHub carry the code and text between machines. The shared drive is then for what it is good at: the coauthor's Word drafts, and the data hand-off.

Whichever client you use, one rule covers the rest. Code and text travel by git; drafts and data travel by the shared folder; no file travels by both.

# 8. Repeatable workflows

<!--
STATUS: mixed · PHASE: 3 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §10 "Patterns and extension points worth knowing inside Claude Code" (skills, hooks); ~/.config/agents/skills/ (scaffold, eda, dag, review-plan, review-analysis, targets, pueue); the Claude Code skills and hooks docs, fetched 2026-08-27
COVERS: Skills and slash commands: what to package once you have done a thing three times. Examples from my own set. Hooks in one paragraph.
VERIFY: checked 2026-08-27. Claude Code: skills at ~/.claude/skills/<name>/SKILL.md (personal) and .claude/skills/<name>/SKILL.md (project); frontmatter name and description; /name to invoke, automatic when the description matches; custom commands merged into skills; the body loads only when used; the Agent Skills open standard; the desktop app lists skills under "/"; Cowork and cloud sessions do not read personal skills. Hooks: Claude Code hooks block in settings.json, events PreToolUse (exit 2 blocks), PostToolUse, Notification, SessionStart, Stop. Re-check at release. (Codex skills/hooks specifics archived 2026-09-15.)
-->

Once you have asked for the same thing three times, write it down as a *skill*: a named, packaged instruction that the agent runs when you call it, or picks up itself when a task matches it. After the brief and the task list (§6), it is the next file worth writing, and it turns a request you keep retyping into a command you run by name.

## What a skill is

A folder with one required file, `SKILL.md`: a short header that says what the skill is called and when it applies, then the procedure, written the way a good request is written (§9–§15 and Appendix B). You run it by name, `/status-report`, and the agent also reaches for it on its own when your request matches the description. Unlike the brief, which is loaded every session, a skill's body is loaded only when it is used, so a long procedure costs nothing until you need it (§6).

```
---
name: status-report
description: Draft a one-paragraph status for a coauthor from TASKS.md and
  the recent commits. Use when asked for a status, an update, or "where are
  we". Not for the session-start summary; that is a plain request.
---

Read TASKS.md and the commits of the last two weeks. Draft one paragraph in
docs/responses/YYYY-MM-DD-status.txt, plain text, no headings: what is done,
what is in progress, what is next, with dates. Describe nothing as done that
is still under In Progress. Show me the draft; send nothing.
```

The description is the part to write carefully. It decides when the agent invokes the skill unasked, so it says when to use it and when not to, in the same spirit as a rule in the brief. The body is the prompt you would otherwise retype, with the same discipline: where the output goes, what to report, what not to do.

Both agents follow the same open format for the file, and differ only on where they look for it. Each skill is a folder named for the skill, holding `SKILL.md`, under:

| | Where |
|:--|:--|
| Every project | `~/.claude/skills/` |
| This project (committed) | `.claude/skills/` |
| Run it | `/name`, or automatically |

The Claude app lists skills under the same slash menu. A skill that needs more than instructions (a report template, a script it should run) keeps those files in the same folder and refers to them by name.

## What to package

The rule is three. The first time you write a request, it is a request; the second, you copy it from your notes or from Appendix B; the third, it becomes a skill. The candidates in this guide are already written: the session rituals (§9), a fetch with its provenance entry (§11), the calibration check (§12), the second implementation and its comparison (§13), the number-traceability table (§14), the fresh-clone check and the pre-deposit audit (§15). Each prompt in Appendix B is a skill body waiting for a header.

Facts about a project (where things live, what is restricted) don't belong in a skill; they are the brief's, and a skill that hard-codes them breaks in the next project. Nor do standing rules (how you write, what to never do); they are the global file's, and a skill that repeats them drifts from it. A skill holds a *procedure*, and reads the facts and the rules from the files that hold them.

My own set, as examples of the shape. `/scaffold` builds a new project in the paper layout, the demonstration in §7. `/eda` renders a first-look report on a new dataset (types, missingness, distributions, correlations, outliers) into `outputs/eda/`, dated, the afternoon the data arrive. `/dag` draws a causal diagram from a written graph, with the adjustment set computed rather than guessed. `/review-plan` is a Reviewer 2 critique of an analysis plan before the work is done, and `/review-analysis` an audit of an analysis after it is done: identification, convergence, conventions. `/targets` and `/pueue` are the pipeline and long-job helpers from the fuller stack, outside this guide. Each is a hundred to two hundred lines, most of it the checks; each started as a prompt I had typed three times.

A skill that fails is a skill you edit, the same way a correction becomes a rule in the brief (§6). Keep each one to a screen or two, and put anything longer (a template, a checklist the agent reads in full) in a file beside it.

## Hooks in one paragraph

A *hook* is a shell command the agent runs at a fixed moment: before a command executes, after a file is edited, when a session starts, when the agent is waiting for you. What distinguishes it from anything in the brief is that it always runs; it doesn't depend on the agent choosing to follow an instruction, which makes it an enforcement mechanism of the same standing as a deny rule (§5). Three uses cover most of what a researcher would want. A hook that blocks any edit to a protected path, alongside the deny rule on `data/raw/` (§16), so that two mechanisms would have to fail together. A hook that runs the build (§15) after the agent edits a script, so a broken change is caught in the session that made it. And a notification when the agent needs you, so you can leave it running. In Claude Code, hooks are a block in the same settings file as the permission rules, personal or per project, and a hook that exits with the code 2 blocks the action it was checking. Most readers need none of this at first; the protected-path hook is the one to add when restricted data are in play.

<!-- ===================== PART III — THE WORK ===================== -->

# 9. Bookkeeping

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §17 (TASKS.md; four files, four roles), §12 (STATUS.md read first; the STATUS.md / TASKS.md seam), §15 "Reviewing what the agent changed" (the idea, not the pager tooling), §1b; ~/.config/agents/AGENTS.md § Task Management (session start and end)
COVERS: Session start and end. STATUS.md then TASKS.md at the start; TASKS.md as the task record, STATUS.md rewritten only when the state moves. README, status, renames, migrations. Reviewing what changed in the app's diff view. Commit habits.
VERIFY: Claude Code has no diff command; the VS Code extension and the desktop app show changed files as diffs, and the terminal uses `git diff` (checked 2026-08-26). §3 (drafted 2026-08-27) verified the app interfaces.
-->

Bookkeeping is where to start with an agent, and it never stops. Every session begins with the agent finding out where things stand and ends with it writing down where they now stand; in between it keeps the folder, the README, and the task list true. Tedious, and harmless when it gets a name wrong. It is also the habit that makes every other chapter's checks possible: you can review what the agent changed only if you know what the folder looked like before.

## What to ask for

Two rituals, one at each end of a session, and a handful of standing tasks between them.

*At the start.* The agent has no memory of Friday. `STATUS.md` says where the project stands, `TASKS.md` is Friday's memory, and git's log is the record of what actually changed, so the first request of every session is the same:

> Read `STATUS.md`, then `TASKS.md`, and tell me where we are. Then run `git status` and tell me if anything is uncommitted.

The agent summarizes what is in progress and what is next, and flags anything half-finished. You answer with the session's goal in one sentence, and ask for it to be added under *In Progress*. That sentence is the session's scope; when the agent drifts from it, you point back.

*At the end.* Before you close the session, not after:

> Update `TASKS.md`: move what is finished to Done with today's date, and on each In Progress item say what is left, not what was done. If that moved the project's state, rewrite the line of `STATUS.md` it changed, and the date. Then show me `git status` and propose a commit message.

You read the diff (below), then commit, or let the agent commit with a prompt (§5). What you are protecting is Monday: a session that starts from a `TASKS.md` that wasn't updated on Friday will repeat work, or undo it.

*Between.* The README stays true: when the folder's structure changes, the README says so, because the README is what a coauthor and a future you open first. Renames follow the conventions in your global file (§6), and a rename that touches more than one file (a variable used across scripts, a set of files that break the naming rule, a folder that moves) is done with a plan (§4) and with `git mv`, so that history follows the file. A migration a collaborator would need to know about gets a dated note in `docs/notes/`. And status reports come from the bookkeeping rather than from memory: "write a one-paragraph status for my coauthor from `TASKS.md` and the last two weeks of commits" produces a draft for `docs/responses/` that is right about dates.

*Commits.* One task, one commit, with a message that says what changed and why. A commit before you delegate a big task, so its diff is only the agent's work. No commit the agent makes unprompted, unless you have decided it may (a prompt on `git commit` is a one-line addition to the settings file in §5). No push without you.

## What the agent does

Reads `STATUS.md`, `TASKS.md`, and the git log, and summarizes. Writes the task lines and the dates. Rewrites the README sections that describe structure when structure changes. Runs renames with `git mv` and then finds every reference to the old name and updates it, including the ones in the build file and in comments. After a rename or a move, runs the build (§15) to confirm nothing broke, and reports the result rather than assuming it. Drafts the commit message from the diff.

Where you see what it did depends on where you run it. In the terminal, `git diff` shows every change since the last commit. The desktop app and the VS Code extension show each session's changed files as a diff you click through. All of these are the same review, and none of them requires the terminal tooling that makes diffs nicer to read for people who live in them.

## What you check

The diff, but not every line of it. Read the parts where a silent, plausible-looking change would do damage: model code, data handling, anything under `data/` or `outputs/tables/`, the build file. Let the rerun catch the rest, which is what §15's one-command build is for. A diff that touches files the task had no reason to touch is the first thing to ask about.

`TASKS.md` against reality. Pick one item the agent moved to Done and confirm it: the file exists, the script ran, the figure changed. "Done" from an agent sometimes means "I wrote the code", and the difference is the one this chapter exists to catch.

The commit before it lands: one task, an accurate message, nothing unexpected staged. `git status` should list no data file, ever (§16), and no file from `outputs/models/` or `logs/`. If it does, the `.gitignore` is wrong (Appendix A.5), and that is the bug to fix, not the commit.

After a rename: a search for the old name across the project returns nothing, and `git log --follow` on the renamed file shows its history intact.

The README, by using it: the run instructions work when you follow them without the agent.

## What goes wrong

*Done means started.* The agent marks a task finished when the code is written, not when it ran clean. Ask for the evidence: the build output, the listing, the number in the table.

*The task list becomes a diary.* Paragraphs of what happened, in `TASKS.md`. Keep it to task lines; the narrative belongs in `METHODOLOGY.md` if it is about why and in the git log if it is about what.

*The bundled commit.* Three tasks in one commit, so the undo for one is the undo for all. Or the opposite: the agent commits mid-task, and the diff you review is half a change. A commit per task, at the end of the task.

*The rename that missed one.* The Quarto file, the justfile, the coauthor's do-file, a string inside a plotting call. The search for the old name is the check; the build is the second check.

*The stale README.* It still describes `analysis_v2_USE_THIS`. Structure changes and the README doesn't, because nobody asked. Make "update the README" part of every structural task.

*The unasked tidy.* Asked to fix one function, the agent reformats every file it opened, and the real change is buried in two hundred lines of whitespace. The rule for the global file: change only what the task requires, and never reformat a file the task didn't need to edit.

*The session that didn't read.* A fresh session started in a hurry, without the opening ritual, repeats Friday's work or reverts it. The ritual is two lines; make it a habit before it is a loss.

# 10. Literature search and synthesis

<!--
STATUS: mixed · PHASE: 3 · DRAFTED: 2026-09-01 (read through against WRITING.md the same day: 14 em-dashes and 3 of 4 bolds removed, the document's rate being 3 em-dashes in 31k words)
SOURCE: the /litsearch skill (~/.config/agents/skills/litsearch/) and its first real run; docs/briefs/2026-08-31-litsearch-skill-scope.md (the design decisions and what the field already has)
COVERS: Protocol before searching. Search, screen, extract into an evidence table. The fabricated-citation problem and the rule (open every reference). Identifier resolution against Crossref, DataCite, PubMed, arXiv. Handoff as .bib and .ris, no reference manager assumed.
VERIFY: the run described here was made on 2026-08-31 against OpenAlex, Crossref, PubMed and arXiv, on the question behind papers/worthington-journal-review-times; 15 queries, 604 records retrieved, 507 after deduplication, 37 included, 11 borderline, and the counts in the table are that run's. The three failures reported are all from it: the retrieval cap that stopped the run, the DataCite record reported as a probable fabrication, and the preprint pair deduplication missed. Rerun and re-check the counts if the protocol changes.
-->

Literature search is where the agent's speed and its worst habit meet. It can search, fetch, screen and tabulate faster than you can read the first abstract. It can also produce a citation that is perfectly formatted, plausibly titled, published in a journal that exists, and attributed to authors who work in the field. The paper doesn't exist. Everything in this chapter follows from one decision about that: not to make fabrication less likely, but to make it impossible to miss.

## What to ask for

*The protocol, before a single query runs.* Write down the question, what counts as included and excluded, the date range, the languages, which sources will be searched, and what "done" means. Have the agent draft it from your description, then read it and approve it. This is the step you already know how to do, and it is what makes the search auditable, re-runnable, and arguable by a reviewer. Skipping it because the question looks simple is how you end up with a set of papers nobody can defend.

Vagueness is the thing to fix here rather than later. "Papers about social mobility" isn't a protocol; it names a topic, not the criteria that decide what is in and out. If the agent can't tell from your question whether a single-journal study counts, it will guess, and the guess will be invisible in the output.

*The rule that makes the rest work.* State it in the protocol, in one line: **no record enters the evidence table without a resolved identifier.** Every included row carries a DOI, a PubMed ID, or an arXiv ID that was fetched from a live interface, and whose title, first author and year were compared against what the table claims. Anything the agent believes but can't resolve goes to a quarantine file. It doesn't enter the table, and it isn't cited.

*Which sources.* Name them, because coverage is a claim you will have to defend. OpenAlex and Crossref are cross-domain, free, and need no account: OpenAlex for finding, Crossref for confirming. Add PubMed for anything health-related, arXiv for preprints, and SSRN, RePEc or NBER where your field lives there. Web of Science and Scopus need a license, so if you have one, say so and use it; if you don't, record their absence as a gap rather than pretending the search was exhaustive.

*What you want back.* A dated, self-contained directory, not a chat answer: the protocol; every query string with its source and date; the raw responses, unmodified; a screening log with a recorded reason for every exclusion; the evidence table; the quarantine; and a bibliography in both `.bib` and `.ris`, because no single format is universal.

> Run a literature search on how long peer review takes and what it varies with. Write `protocol.md` first and show it to me before running any query: the question, inclusion and exclusion criteria, 2000 onwards, English, and which sources. Search OpenAlex and Crossref, plus PubMed. Save every raw response and log every query with its date. Deduplicate by identifier then by title and year. Screen on title, then abstract, recording a reason from the protocol for every exclusion, and bring me the borderline set rather than deciding it. Then re-fetch every surviving record by its identifier and check the title, first author and year against what you have; anything that will not resolve goes in `unverified.md` with a note of where it came from, and is not cited. Extract one row per included paper with design, data source, coverage, period, which interval was measured, which determinants were examined, the finding, and the stated limitation. Leave a cell empty rather than filling it from an abstract that does not say. Emit `references.bib` and `references.ris`.

Three parts of that request carry the weight. *Show me the protocol first*, because approval before searching is the only cheap moment to change the scope. *Record a reason from the protocol for every exclusion*, because an exclusion without a reason is indistinguishable from an oversight, and 459 of them are impossible to audit after the fact. And *leave a cell empty*, because an empty cell is a reading task, while a guessed one is a fabrication with more steps.

## What the agent does

It queries the interfaces rather than answering from what it has read. That distinction is the whole chapter: a model asked "what does the literature say" will produce fluent, sourced-looking prose from memory, and a model asked to query OpenAlex will return records that exist.

Run on the question behind a real paper (how submission-to-acceptance times vary across fields, publishers, and journal prestige), the stages produced this:

| stage | n |
|:--|--:|
| retrieved, across 15 queries | 604 |
| dropped: no identifier | 6 |
| after deduplication | 507 |
| excluded at screening | 459 |
| borderline, referred back for a ruling | 11 |
| included | 37 |

Of the 37, twenty-five were screened on an abstract the agent actually fetched and twelve on the title alone, because no abstract came back. The table says which, in a column, for every row. That column is the difference between a reading plan and a list of things somebody skimmed.

The exclusions aren't a black box either. They resolve into the protocol's own categories: 424 with no duration outcome at all, 26 measuring the wrong interval (grant review, cancer treatment delay, time to tuberculosis diagnosis), 7 with no data, and 2 single-journal reports.

Then the verification pass re-fetches every surviving record by its identifier and compares. This is mechanical and belongs in a script rather than in a conversation, because you will run it more than once and because a check you can rerun is a check you will rerun.

## What you check

*That the verifier passed, and what it said.* Not "the agent said it verified them". The output should name a count and the checks it ran.

*The quarantine, especially when it is empty.* Ask for the number every time. Zero records reaching the table from the model is the result you want, and you only know it because somebody counted. A quarantine that is quietly deleted when empty teaches you nothing; one that is reported at zero teaches you the check ran.

*The evidence level, row by row.* Any row screened on title alone is a paper nobody has read. That is fine at this stage, and it isn't fine in the sentence you write about it.

*Whether the counts reconcile.* Records in, records after deduplication, records excluded with reasons, records included. If they don't add up, one of the stages is lying.

*Every reference you cite.* Open it. Not all 37; the ones that end up in the paper. Verification proves a record exists and its metadata matches; it doesn't prove the paper supports what the row claims about it. That last step is yours, and it is done by reading the paper.

## What goes wrong

*The citation that doesn't exist.* The failure this chapter is built around. It doesn't look like an error: the formatting is right, the journal is real, the authors publish in the field, and the year is plausible. It can't be caught by reading carefully, because careful reading is what it is designed to survive. It can only be caught by resolution, which means asking the registrar whether that identifier exists. That is why the rule is mechanical rather than a matter of vigilance.

*The accusation that was wrong.* On the run above, the verifier reported a real and directly relevant paper as a probable fabrication. It wasn't: the record is registered with DataCite, and the verifier had asked only Crossref, which is one registrar among several. Had that message been believed, a good paper would have been thrown away. A tool that cries fabrication has to be right: "it didn't resolve" must mean that no registrar has it, not that the first place asked didn't. Treat a fabrication verdict as a claim to check, not a fact.

*The constraint that was the wrong instrument.* The protocol for that run set a cap on how many records could be retrieved. It fired, 604 against a cap of 300, and stopping was correct. The cap itself was the mistake, and it was withdrawn rather than raised. A retrieval cap doesn't constrain a search methodologically; the question and the criteria do that. What it does is make your evidence base a function of each interface's relevance ranking, which is opaque and differs between them. "The first 300 by relevance" isn't a defensible sampling frame. Bound the search with the criteria and a stopping rule, and if you want a number, make it a checkpoint that reports and continues rather than a wall.

*The duplicate that survived.* Deduplication matched on identifier, then on title and year, and still let through a preprint and its published version, because the two titles differ by a single word. Both would have been counted. Cross-field and cross-repository work is full of these, and the fix is a human eye on the borderline set rather than a cleverer rule.

*Screening from memory.* If the agent excludes a paper because it knows the paper, the exclusion is unauditable and probably wrong. The instruction is that a screening decision cites the text that was fetched, and that where no abstract came back the record was screened on title, with the table saying so.

*The empty column read as a finding.* In the run above, the limitation column was empty for all 37 rows, because no retrieved abstract stated one. That is a gap in what was read, not a property of the literature. An empty cell is honest; the danger is reading a column of blanks as though the papers had no limitations.

# 11. Getting data

<!--
STATUS: mixed · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §11 "The scraping ladder"; ~/.config/agents/CODING.md "Web scraping / data acquisition: method ladder" (the cross-cutting hygiene); tool-chain §15 "Data and artifact boundary"
COVERS: The ladder: API, static fetch, headless browser, agent browser. Public sources common in population health (ACS, IPUMS, CDC WONDER, WHO GHO, World Bank). Terms of service and rate limits. Provenance log. Raw data read-only.
VERIFY: checked 2026-08-27. Census Data API: 500 queries per IP per day without a key, a key beyond that; tidycensus no longer requires a key (Census user guide, tidycensus changelog). IPUMS terms fetched directly: redistribution needs permission except a subset published for a journal's data requirement; IPUMS International forbids it. CDC WONDER API page fetched directly (last reviewed 2026-08-25): consent parameter required, national data only for NVSS through the API, one query at a time about two minutes apart, credit WONDER. WHO GHO API page fetched directly: endpoint ghoapi.azureedge.net/api, no key, replacement announced without a date. World Bank: Indicators API, no key, WDI package (secondary). Re-check the table at release; access paths move.
-->

Getting data is where an agent first touches the outside world, and the boundary matters in both directions. What comes in must be recorded: where from, when, under what terms. What is already in must not be changed. The rule for the first is a provenance log, and the rule for the second is that raw data is read-only. Between them sits a ladder of ways to fetch, from a documented interface down to a browser, and the discipline is to stop at the highest rung that works.

## What to ask for

*The access path and the terms, before any download.* Every public source has a way it is meant to be reached and a page that says what you may do with what you get. Ask for both first:

> Before downloading anything from IPUMS USA, tell me how it is meant to be accessed (an API, a bulk file, a query tool), whether it needs a key, and what its terms say about redistribution, attribution, and linking. Quote the terms; do not summarize them.

Then decide, and only then fetch.

*The ladder.* Four rungs, from the most robust to the least, and the instruction is to stop at the first that works.

1. *A structured source.* A documented API; a bulk export; or the address the page itself calls to get its data, visible in the browser's network panel, which turns many "needs a browser" jobs back into a plain request. Stable, typed, and usually what the terms sanction.
2. *Fetch and parse.* When there is no interface, download the page and parse it. Works when the content is in the page as served.
3. *A scripted browser.* Only when the content is drawn by JavaScript after the page loads, or the task needs a login or a scroll. Slow and fragile; even here, capture the data the page requests rather than the page as rendered.
4. *The agent's own browser.* For a one-off, for finding out how a site is built (and so which rung above will work), and for anything that needs a person in the loop. Never for bulk collection: it is the slowest and least repeatable rung, and nothing it does is part of the pipeline.

Rungs one to three are scripts, committed in `code/_data-acquisition/` and rerunnable; rung four is an action in a session.

*The sources.* For this readership, the common ones and what an agent needs to know about each, as of August 2026:

| Source | How it is reached | Terms worth knowing |
|:--|:--|:--|
| American Community Survey (Census Bureau) | The Census Data API; in R, `tidycensus`. Five hundred queries a day per address without a key; a key beyond that. | Public domain. Record the vintage: one-year versus five-year, and which years. |
| IPUMS (USA, International, NHIS, NHGIS) | The IPUMS API with a key; in R, `ipumsr`. You define an extract, submit it, and download it. | Redistribution needs IPUMS's permission, with one allowance: a subset published to meet a journal's data requirement. IPUMS International forbids redistribution outright. The extract *definition* is shareable and is the reproducible object. Cite as they specify. |
| CDC WONDER | A web query tool, with an API for some databases. Each API request carries your consent to the data-use restrictions; the API asks for one query at a time, about two minutes apart. | Sub-national vital statistics (state, county) can't be queried through the API, only the web tool. No linking to identify individuals; suppression rules apply; credit CDC WONDER when you publish. Microdata is separate, under a data user agreement. |
| WHO Global Health Observatory | A documented API, no key, at a fixed address; a replacement has been announced, so have the agent read the current documentation page. | Attribution required. |
| World Bank indicators | The Indicators API, no key; in R, `WDI`. | Open license with attribution. Record the indicator code and the download date; series are revised. |

*The provenance log.* `data/raw/sources.md` (it is in the §6 brief) has one entry per file: the source, the exact request (the API call, the extract definition, the query as saved from the web tool), the date, the vintage or version, the two lines of the terms that matter (redistribution, attribution), who fetched it, and a checksum (a fingerprint of the file's contents, so a changed file is detectable). The agent writes the entry when it fetches, not afterward:

> Fetch the 2018–2022 ACS five-year county estimates for the variables in `METHODOLOGY.md` § Covariates, through the Census API, with the script in `code/_data-acquisition/fetch-acs.R`. Save the response exactly as received to `data/raw/public/acs-5yr-2022.csv`, and add an entry to `data/raw/sources.md` with the request, the date, the vintage, and the file's checksum. Do not modify anything else in `data/raw/`.

*Raw data read-only.* What arrives is saved as received and never edited. Cleaning is a separate script that reads raw and writes to `data/processed/` (§7), so a mistake in cleaning costs a rerun rather than a refetch, and the file you deposit or cite is the file you got. A refetch is a new, dated file beside the old one, never an overwrite: next year's ACS release changes numbers, and the paper has to know which release it used. The permission rule that denies writes to `data/raw/` (§5) makes this hold whatever the agent decides.

## What the agent does

Reads the source's documentation and finds the interface. Writes the fetch script with a pause between requests and a retry on failure, identifying itself honestly (a user-agent string that names the script, and an email address where the source asks for one). Saves the raw response first and parses it in a second pass, so a parsing bug never costs a refetch. For a long collection, saves a checkpoint so an interrupted run resumes instead of restarting. Writes the provenance entry. When a site needs the fourth rung, uses the browser to find the address the page calls and reports it, so the job moves back to the first rung and into a script.

Keys are handled by name. An API key lives in an environment variable (`CENSUS_API_KEY`, `IPUMS_API_KEY`), set in a file the repository ignores or in the operating system's keychain; the script reads the variable, and the agent refers to it by name and never sees or prints the value. A key that appears in a script is in the repository's history for good.

## What you check

The terms, yourself, once per source: whether the processed extract may go in the deposit, what attribution text is required, and what may not be linked to what. This is the one thing in the chapter the agent can't decide for you, because the consequence of getting it wrong lands on you.

The provenance entry: complete enough that rerunning the request gives the same file, or a new dated one, and that the paper's data section can be written from it.

The raw file is what the source sent. Row and column counts against the source's own description; one cell checked against the web tool by hand; no recoding, renaming, or filtering on the way in.

The fetch is a script in the repository, rerunnable, and it touched nothing already in `data/raw/`. The key isn't in the script, and a search of the repository for the key's value finds nothing.

The vintage is recorded, and the same one is used throughout: which ACS, which IPUMS sample, which WONDER data year, which indicator revision.

## What goes wrong

*The browser did the collection.* Two thousand pages clicked through by the agent: slow, irreproducible, and not in the pipeline. Use the browser to work out how the site serves its data, then write a script that asks for it the same way.

*Scraping what had an interface.* Parsing rendered pages when the data were one request away, and being blocked or served stale content for the trouble. Ask for the access path first.

*The restriction treated as an obstacle.* The API refuses county-level vital statistics, so the agent drives the web tool by script to get them. That refusal isn't a technical limit to work around; it is the provider saying you may not have those data that way. What the web tool allows by hand and what a script may do with it are different questions, and the terms answer the second.

*Cleaned on the way in.* The "raw" file has been recoded, filtered, and renamed by the fetch script, and no one can say what the source sent. A file is raw only if it is exactly what the source sent; anything you have altered belongs in `data/processed/` instead.

*Overwritten raw.* A refetch replaced last year's file, the numbers in Table 1 shifted, and the cause took a week to find. Dated files, and a deny rule on the folder.

*The key in the repository.* In the script, or in a commit from the first week. Rotate it, and add the ignore rule before the next one.

*Rate limits hit.* A script with no pause, blocked after an hour, and with it every address behind the institution's network. Throttle, identify yourself, and cache.

*The log written from memory.* Provenance filled in a month later, from what the agent or you recall. Write the entry in the same step that saves the file, or it will be written from memory.

# 12. Analysis, simulation first

<!--
STATUS: mixed · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: ~/.config/agents/MODELING.md (pre-inference: plasticity and decision-rule calibration; the general loop; failure modes; the wallace M=1 worked example); tool-chain §15 (validation), §7 (one paragraph on long fits); source/pitch.md
COVERS: The agent writes scripts; you own the model. Calibration by simulation (simulate from known parameters, recover them). Power by simulation. Decision-rule calibration. Long fits run outside the agent. Worked example in R; Stata is the reader's assumed home language.
VERIFY: the script was run verbatim on 2026-08-27 (R 4.6.1, fixest 0.14.2) on a synthetic design of 25 counties × 2016–2020 × 12 months = 1,500 county-months; the table is that run's output, and the generator, the design summary, and an exploratory run over more effect sizes and a larger design are in docs/notes/sim-main-model-run.md. Rerun if the script or the design changes.
-->

The agent writes the scripts; you own the model. The estimand, the design, the priors or the test, and the claim the paper will make are yours, and the agent's job is to turn them into code. Code that runs isn't code that is right (§2). So before a model is trusted with the real data, check what it says under a known truth: simulate data from known parameters, fit the planned model, and see whether it recovers them. Almost nobody does this, because writing the simulation is the tedious part. That part is now delegable.

## What to ask for

Write the specification first, in `METHODOLOGY.md` (§6), and have the agent draft it from your description if that is faster: the estimand (the quantity the analysis is meant to estimate); the model, with its family, fixed effects, clustering, and weights; the design (the number of units, the clusters, the covariates and their distribution); and the *decision rule*, meaning what the paper will claim and on what basis ("the interval excludes zero", "the posterior probability exceeds 0.95", "the effect is at least 10 g"). The simulation checks that rule on that design with that model, and if any of the three drifts from the plan, the check is of something else.

Then ask for two checks, in one script.

*Recovery.* Simulate data from the model with known parameters, using the real design (the real covariates and cluster structure; a synthetic design of the same shape when the data are restricted, §16), fit the planned model, and compare the estimate to the truth. Do this for many simulated datasets, not one, and under a small set of truths: no effect, a small effect, and the effect the paper hopes to find. Report bias (the average distance from the truth) and coverage (how often the 95 percent interval contains it). If the model assumes a shape (linear in the exposure, say), add a truth that breaks it (a threshold, a saturating curve) and see what the model reports; that tells you what the claim means when the shape is wrong.

*The decision rule.* Under the no-effect truth, how often does the rule fire? That rate is the model's false-positive rate on this design, and it should be at or below what the paper claims. Under each effect truth, how often does it fire? That is power, and power by simulation replaces a formula that never fit your design: clustered, two-way fixed effects, unequal groups, a rule that isn't a t-test. Power minus the false-positive rate is what the design can actually resolve.

The request for the paper from §6 and §7:

> Write `code/_experiments/simulate-main-model.R`. Read the county-month design from `data/processed/county-month-design.rds` (the real covariates, no outcome). For each of three truths (no effect; −1 g per hot day; −15 g), simulate 200 datasets from the model in `METHODOLOGY.md` § Main model, with county and year effects and noise at the scale we saw in the pilot, using seed = the simulation index so runs are reproducible. Fit the planned model (`feols`, two-way fixed effects, county-clustered errors) to each. Report, per truth: bias, coverage of the 95 percent interval, the rate at which the interval excludes zero, and its Monte Carlo standard error. Write the table to `outputs/tables/sim-main-model.csv`. Do not read anything under `data/raw/`.

Three numbers in that request carry the weight. Two hundred datasets, because the rate at which a rule fires is estimated from the fraction that fire, and a fraction from twenty datasets has a standard error near 0.1; twenty is the floor, two hundred is comfortable and cheap for a fast model. The seed tied to the simulation index, so every candidate model sees the same datasets and a rerun reproduces the table. And the Monte Carlo standard error (the uncertainty in a rate that comes from simulating only so many datasets) beside every rate, so you can tell a rate of 0.06 from a rate of 0.05 on the evidence rather than on hope.

## What the agent does

The script is short, and this is what it looks like for that request.

```
# code/_experiments/simulate-main-model.R
# Does the planned model recover a known effect on this design? (guide §12)
library(here); library(dplyr); library(tidyr); library(purrr); library(fixest)

design <- readRDS(here("data", "processed", "county-month-design.rds"))
# columns: county, year, month, hot_days (the real design; no outcome)

simulate_once <- function(design, beta) {
  cs <- unique(design$county); ys <- unique(design$year)
  county_u <- tibble(county = cs, u_c = rnorm(length(cs), 0, 40))
  year_u   <- tibble(year = ys,   u_y = rnorm(length(ys), 0, 15))
  design |>
    left_join(county_u, by = "county") |>
    left_join(year_u, by = "year") |>
    mutate(bwt = 3300 + beta * hot_days + u_c + u_y + rnorm(n(), 0, 60))
}

fit_once <- function(dat) {
  m <- feols(bwt ~ hot_days | county + year, data = dat, cluster = ~county)
  tibble(est = coef(m)[["hot_days"]], se = se(m)[["hot_days"]])
}

truths <- c(none = 0, small = -1, main = -15)   # grams per additional hot day
M <- 200

results <- expand_grid(truth = names(truths), sim = seq_len(M)) |>
  mutate(fit = map2(truth, sim, function(t, s) {
    set.seed(s)
    fit_once(simulate_once(design, truths[[t]]))
  })) |>
  unnest(fit) |>
  mutate(beta = truths[truth])

summary <- results |>
  group_by(truth) |>
  summarise(bias     = mean(est - beta),
            coverage = mean(abs(est - beta) <= 1.96 * se),
            reject   = mean(abs(est / se) > 1.96),
            mc_se    = sqrt(reject * (1 - reject) / M))

readr::write_csv(summary, here("outputs", "tables", "sim-main-model.csv"))
```

What it produced, run as written on a synthetic design of the paper's shape (25 counties, 2016 to 2020, 1,500 county-months, two thirds of them with no hot day):

| truth | bias | coverage | reject | mc\_se |
|:--|--:|--:|--:|--:|
| none (0) | −0.04 | 0.955 | 0.045 | 0.015 |
| small (−1) | −0.04 | 0.955 | 0.545 | 0.035 |
| main (−15) | −0.04 | 0.955 | 1.00 | 0 |

Read it row by row. Under no effect, the interval excludes zero 4.5 percent of the time: the rule is calibrated on this design, and a positive result isn't an artifact of the clustering. Coverage sits at 95.5 percent in every row, so the standard errors are honest. The bias is the same in every row to the third decimal, which is what matched seeds do to a linear estimator: the same 200 noise draws, shifted by the true effect, so the rows differ only in what they were asked to detect. At the effect the paper hopes for, power is 100 percent, and the Monte Carlo standard error of zero says only that all 200 datasets rejected; a rate of 1.00 from 200 datasets means a rate above 0.985, not certainty. At a 1 g effect, a plausible size for this exposure, power is 55 percent: a coin flip. That is the finding that changes the paper. If the true effect is small, the design misses it half the time, so an interval that includes zero isn't evidence of absence, and the discussion section should say so. That sentence is worth the entire exercise, and it cost a few minutes of the agent's time and ten of yours.

For a Bayesian model the script is the same shape with a different fit and a different rule (the posterior probability exceeding a threshold, the credible interval excluding zero), fewer simulated datasets because each fit is slower, and one more check: that the prior actually in force in the fitted model is the prior the paper says, because fitting software fills in defaults you didn't set.

*Long fits run outside the agent.* A model that takes more than a few minutes to fit doesn't belong inside the agent's session. The session can reset, and the fit dies with it, silently; and while the fit runs, the session waits and spends your usage allowance doing nothing (§17). The zero-install fix is to run the fit outside the session yourself: start the script from a terminal or from RStudio, and point the agent at the log when it finishes. For fits you run routinely, a job queue does this properly, taking the command, keeping it alive after the session or terminal closes, and reporting where each job stands, so the agent submits each fit and reads the log while you carry on; the companion guide, *Extending Your Agent's Toolkit*, sets one up, and a standing line in your global file (§6, Appendix A.1) tells the agent to send long fits there. (For a pipeline of many *dependent* steps rather than a queue of independent jobs, a pipeline runner reruns only what changed and resumes an interrupted fit, §15.) None of this is needed for the calibration check above, which is fast.

A queue runs the job in the background, but still on your own machine. When a fit needs more compute than a laptop has (a long simulation, a large Bayesian model, or running a local open-weight model over a lot of data, §16), the place for it is your institution's research-computing cluster.

The agent can write the cluster's job script for you, the same way it writes any other script; you submit it and collect the result when it finishes. You don't have to learn the scheduler to do this, and this guide goes no further into cluster use: your institution's research-computing documentation has the access steps, the partitions, and the submission commands.

> **Harvard.** Compute too heavy for a laptop goes to FAS Research Computing (FASRC): the Cannon cluster for general work, and FASSE for restricted data (§16). FASRC permits AI tools on the cluster and runs an AI-facilitation service; the agent can draft the cluster job scripts and you submit them. Their documentation has the current access steps and partitions.

## What you check

That the simulation is of the *planned* analysis. The same model, the same clustering, the same decision rule as the paper; the real design or a faithful synthetic one. A simulation of a simpler model on an idealized design passes easily and tells you nothing about the paper.

That the rates are estimated, not observed. Two hundred datasets, or at least twenty, with the Monte Carlo standard error printed beside every rate. One simulated dataset gives one draw from the rate's sampling distribution, and a single draw can land anywhere.

That the table says what a pass looks like before you read it: false-positive rate at or below the nominal level, coverage near nominal, bias near zero, power at the effect size the paper cares about. Then read the table against that, and write the result into `METHODOLOGY.md` with the date and the script's name: "Calibration check, `simulate-main-model.R`, 2026-08-27: passes; power 0.31 at −5 g."

That the truths span what the truth could be. A null and one alternative is the minimum; a small effect and a wrong shape are the ones that change how the paper reads.

That the check was a gate and not a selector. If several candidate models were run, choose among the ones that pass on substantive grounds (the estimand, the design, prior knowledge), not by picking the one with the prettiest calibration numbers. Choosing a model by its simulation performance is the simulation-era form of running regressions until one is significant.

That the script is committed and runs from the build command (§15), so the check reruns when the model changes.

## What goes wrong

*One simulated dataset.* The most expensive mistake in this chapter, and the commonest. A colleague's project tested thirteen candidate models against two truths with one simulated dataset each, found every model "miscalibrated" at a rate near 0.75 under the null, and spent three days chasing a mechanism that didn't exist. With twenty-five datasets per cell the same models were calibrated at 0.48, and the 0.75 was one draw from a distribution with a standard deviation of 0.17. The rerun took ten minutes. Never treat a single-simulation number as a rate.

*The simulation is of a different model.* Independent errors when the data are clustered; a balanced design when the real one isn't; the outcome on a convenient scale. Each makes the check pass and the paper wrong. Clustered data treated as independent is the classic: the false-positive rate under the null comes out at 0.2 or 0.4 instead of 0.05, and only a simulation on the real cluster structure shows it.

*Calibration mistaken for power, and the reverse.* Coverage and false-positive rate ask whether the instrument reads true; power asks how fine its scale is. A model can have excellent power and terrible coverage, in which case its power is meaningless. Report both, in that order.

*Defaults taken for choices.* The prior, the variance estimator, the small-sample correction, the treatment of singleton groups (clusters with one observation): whatever you didn't set, the software set. The simulation checks the model as fitted, defaults included, which is a virtue; the trap is describing the model in the paper as the one you meant rather than the one that ran.

*The agent tunes until it passes.* Asked to run the check, an agent that sees a failure may adjust the model (tighten a prior, drop a term, change the rule) until the table looks right, and report the result as a pass. The instruction is the same as in §13: report, don't fix. A failed calibration is a finding about the design, and the response is yours to choose: a different specification, a narrower claim, a note in the discussion, or not making the claim.

*The fit runs in the session.* A three-hour model started inside the agent's session ends when the session does, with no error and no output. Long fits run outside the agent, from a script, to a log.

*The design was skipped.* The simulation used a made-up design because the real one was restricted. That is fine, and §16 recommends it, provided the synthetic design has the real design's shape: the same number of counties, the same distribution of hot days, the same imbalance. A design with a hundred clusters of equal size says nothing about a design with fifty of wildly different sizes.

# 13. Verification

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: content bank judgment/verification-cross-language.md (folded in; module points back here); tool-chain §15 "Cross-implementation verification", "Validation, unit tests, and model checks"; deck "Verification: don't trust, re-run"
COVERS: Cross-implementation: R vs Python vs Stata, with Stata first-class. Independence: a different agent, a different reasoning path, the written spec rather than each other's code. What counts as agreement: exact vs Monte Carlo error. Assertions and tests in one page.
VERIFY: Stata batch mode checked 2026-08-27 against Stata's FAQs: `stata-mp -b do file.do` (Mac/Unix; executable name by flavor) and `StataMP-64.exe /e do file.do` (Windows) write a log of the same name. The worked-example table is illustrative, not from a real project.
-->

The failure worth guarding against isn't code that breaks; that you catch. It is code that runs, passes a reading, and is still wrong: off by a merge key, a default argument, a silent type conversion. The output looks reasonable, so the error survives into the table. Reproducing the result doesn't catch it, because the same code re-run gives the same wrong answer (§15). The check is to require the result from *different* code, written independently, and to compare.

## What to ask for

The strongest check you have on whether a result is correct, rather than merely reproducible, is a second implementation in a second language. If you work in Stata, ask for the analysis in R; if in R, ask for Python or Stata. A mistake made while writing the analysis in one language rarely recurs, in the same place, in another: the two implementations fail independently, and that is what makes agreement mean something. Stata works well here. Agents write `.do` files competently, and they can run them without you: Stata's batch mode (`stata-mp -b do model.do` on a Mac, `StataMP-64.exe /e do model.do` on Windows) executes a do-file and writes a log of the same name, which the agent then reads in the observe step (§2).

The language is necessary but not sufficient. What has to be independent is the *reasoning*. If the agent that wrote the R version translates its own code into Stata, the two carry the same misreading of the design and agree on the wrong answer. So the second implementation is written by a different agent, or at least a fresh session, working from the written specification and not from the first implementation's code. Two agents reasoning separately from the same specification keep their errors uncorrelated. Two different agents — Claude and one from another vendor — is the cleanest version; a fresh session of the same agent, told not to read `code/`, is the next best.

That puts weight on the specification. For the check to work, `METHODOLOGY.md` (§6) has to state what a second implementer needs and nothing they should infer: the estimand; the sample, with every exclusion in the order applied; how each variable is constructed; the model, down to the family, the fixed effects, the clustering, and the weights; and which quantity is the result (a coefficient, a marginal effect, an odds ratio, a predicted contrast). If the file can't say these things, that is a finding in itself, and it is the same finding a referee will make later.

The request has three parts, and they go to different sessions. To the first:

> Working only from `METHODOLOGY.md` § Main model and the data in `data/processed/`, implement the main model in Stata. Do not read anything in `code/`. Write `code/stata/model.do`, run it in batch mode, and save every estimate you report to `outputs/verification/stata-main.csv` with six decimals.

The R side already exists, so ask its session to write the same estimates to `r-main.csv` in the same folder and layout. Then, to either session:

> Compare `outputs/verification/r-main.csv` with `stata-main.csv`. For every quantity, show both values, the difference, and whether it is within the tolerance in `METHODOLOGY.md` § Verification. Report; do not change either implementation.

The tolerance is decided before the comparison, and it depends on the computation. Deterministic results (descriptive statistics, a least-squares or maximum-likelihood fit, a fixed transformation) should match to numerical precision; a difference past rounding is a real discrepancy to chase, not noise. Sampling-based results (Markov chain Monte Carlo, a bootstrap, multiple imputation, a simulation) won't match bit for bit, so the comparison is against *Monte Carlo error*, the sampling noise implied by the number of draws: posterior means and intervals should agree within it. Write the tolerance down first, so that a near miss isn't talked into a pass afterward.

Do this for the results that carry a claim: the primary estimate, the model behind a decision, the number in the abstract. A second implementation roughly doubles the cost of that analysis, which is why it isn't for every intermediate step.

The same logic scales up when the agent rebuilt more than the model. If it reassembled the dataset itself, a merged file or a cleaned extract, run the whole pipeline several times over, each in a fresh session that sees only the raw inputs and the specification, nothing an earlier run made, and in a different language where you can. Implementation slips are effectively random, so independent runs rarely repeat one, and quantities that agree across all of them (to rounding, or to Monte Carlo error) don't depend on which agent or which software produced them. If you already have a result you trust, anchor the runs to it: have each one reproduce the published table, or the number from the pipeline it replaces, before touching anything new. That anchor is the tie-breaker, because two agents can share a mistake, so a majority vote among runs settles nothing and a known answer does. A separate session can lay the runs side by side, one column each plus the known value, and flag every quantity that disagrees by more than the tolerance.

## What the agent does

The second implementation is ordinary agent work: read the specification, read the data, write the do-file, run it, read the log, fix what failed, write the estimates out. The comparison is a short script that reads two files and prints a table. What makes the exercise different from any other task is only what the agent is *not* allowed to read, and what it isn't allowed to do when the numbers disagree.

The agent also builds the cheaper layer of verification, the one that runs every time rather than once. These are *assertions*: one-line checks written into a script that stop it, loudly, when a stated expectation fails. In R, `stopifnot()`; in Stata, `assert`; in Python, `assert`. Ask for them at the points where analyses go silently wrong.

```
# after every merge or filter: the N you expect, stated
dat <- left_join(births, heat, by = c("county", "year", "month"))
stopifnot(nrow(dat) == 1214308)          # no rows gained or lost in the merge
stopifnot(!anyDuplicated(dat$birth_id))  # one row per birth
stopifnot(all(dat$bwt_g >= 200 & dat$bwt_g <= 7000, na.rm = TRUE))
stopifnot(all(c("2010", "2020") %in% levels(dat$year)))
```

```
* the same checks in Stata
merge 1:1 county year month using "${root}/data/processed/heat.dta"
assert _merge == 3
drop _merge
assert _N == 1214308
isid birth_id
assert inrange(bwt_g, 200, 7000) if !missing(bwt_g)
```

The expectations come from you (the N in the paper, the plausible range, the levels that must be present); the agent writes and places the checks. Two more belong in every project: a convergence check after each model fit, and a check that the sample size the model used is the sample size the paper reports. Formal unit tests, with a test runner such as `testthat`, are for functions you reuse across scripts; a paper doesn't need to become a package to be checked.

## What you check

Read the comparison table yourself. Every quantity, both values, the difference, the tolerance, pass or fail. "They agree" from the agent isn't a result; the table is.

Check the independence. The second session's record shows which files it read; if the R model script is among them, the check is void and you run it again. Identical variable names, identical comment wording, and identical structure in the two implementations mean the same thing: the second implementation was copied from the first rather than written from `METHODOLOGY.md`, and it verifies nothing. For the primary result, put the first implementation out of reach: copy `METHODOLOGY.md` and `data/processed/` into a separate folder with nothing else in it and run the second implementation there.

Here is what a comparison looks like when it has done its job.

| Specification | R | Stata | Match |
|:--|--:|--:|:--:|
| OLS baseline | −0.423148 | −0.423148 | yes |
| + county fixed effects | −0.384721 | −0.384921 | no |
| + year fixed effects | −0.291553 | −0.291553 | yes |

The second row is what the check was for. The implementations disagree at the fourth decimal on a deterministic fit, so at least one is wrong, and the disagreement says where to look: in what the two fixed-effects routines do differently. Here it was a default: one drops counties with a single observation before fitting and the other keeps them. Neither is wrong, but the paper has to say which sample the estimate is from, and the difference wouldn't have been found by reading either script.

That is the division of labor. The agent localizes the discrepancy; you interpret it and decide what to correct, and you write the resolution into `METHODOLOGY.md` so the next implementer doesn't rediscover it. The usual sources are worth knowing in advance, because most discrepancies on deterministic fits are one of them: small-sample corrections in clustered standard errors, which differ across packages by default; the flavor of robust variance estimator; the reference level of a factor; how missing values enter a mean or a merge; whether singleton groups are dropped; weights applied or not. A discrepancy that is one of these explains itself in ten minutes. One that is none of them is the bug you were looking for.

Agreement rules out implementation error, not specification error. If `METHODOLOGY.md` describes the wrong model, both implementations follow it faithfully and agree on the wrong answer. The check on the specification is a different one: simulate data from the model with known parameters and confirm the analysis recovers them (§12). Run both, and the two checks cover different failures.

## What goes wrong

*The port.* Asked for a second implementation, the agent translates the first one, because it is right there in the folder. The result agrees perfectly and proves nothing. Tell it what not to read, check what it read, or use the separate folder.

*Agreement by adjustment.* Seeing a mismatch, the agent changes options in the second implementation until the numbers match the first. That destroys the check while producing a clean table. The instruction is *report, don't reconcile*; reconciling is your decision, made in the open.

*The tolerance moves.* A near miss becomes "close enough" after the fact. Set the tolerance before the comparison and write it in `METHODOLOGY.md`.

*Same name, different quantity.* The two files both have a column called `effect`, and one holds a coefficient while the other holds a marginal effect, or one a log-odds and the other an odds ratio, or one a conventional standard error and the other a clustered one. Compare the quantity the specification names, and make each file say which it holds.

*The samples differ.* The most common discrepancy isn't in the model but in who is in it: a filter applied in one implementation and not the other, missing values dropped by default in one routine and kept in another. The first number to compare is the N, before any coefficient.

*The vote.* Three runs agree, so the number must be right. But two agents can make the same mistake, most often a shared misreading of an ambiguous specification or source, which no amount of replication catches because every run reads the same words. The tie-breaker is a known answer, not a majority; and the guard against a shared misreading is a small hand check, tracing ten or twenty records, chosen to include the awkward cases (near-duplicate names, a boundary year, anything the codebook recoded), from the result back to the sources.

*Verifying everything.* Doubling the cost of every intermediate step is how the practice gets abandoned. Verify the claims.

*Mistaking reproduction for verification.* A pipeline that rebuilds the same tables from the same code (§15) has shown the result is stable, not that it is right. Both matter, and they are different chapters for that reason.

# 14. Writing, revision, and talks

<!--
STATUS: mixed · PHASE: 3 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: ~/.config/agents/WRITING.md (the voice rules that transfer); TEMPLATES.md "Manuscript output" (Word by collaborator workflow; responses markdown → Word; figures as PDF); the research-workflow deck build (markdown to slides); disclosure material new
COVERS: Drafting from METHODOLOGY.md and results. The Word-collaborator reality (markdown → docx). Reviewer responses. Voice rules that transfer. AI-disclosure norms (ICMJE, journals, NIH): what to disclose and how, in a dated table. Slide decks from the paper.
VERIFY: disclosure table checked 2026-08-27, then re-verified the same day. Primary wording now for ICMJE, Elsevier, PLOS, NIH NOT-OD-25-132 and NOT-OD-23-149, Science (editorial-policies page read in the browser: AI section under Image and Text Integrity), Nature Portfolio (policy page fetched with curl past the cookie wall: the Springer Nature risk-assessment framework, which replaced the older Methods/Acknowledgments wording), and JAMA's 2024 reporting guidance (Acknowledgment: platform, version, manufacturer, dates, use, portions; Methods for research use) plus the opinion-piece ban from the instructions page. Still secondary: JAMA's August 2026 bans on peer review and clinical images. pandoc's `--track-changes` and docx/pptx writers as of pandoc 3.
-->

The paper is the artifact the agent should touch least and can help with most. It drafts fast and fluently, which is exactly the property to distrust in a methods section. The rules are three. The agent writes from your files (`METHODOLOGY.md`, the tables the build produced, the figure captions) and never from its own sense of what papers like yours usually say. You rewrite what it drafts. And what goes to the journal says what the agent did, in the form the journal asks for.

## What to ask for

*Drafts from the files.* The methods section from `METHODOLOGY.md` and the scripts: the estimand and the model as fitted, equation first and then the prose that explains it, with every choice the file records and none it doesn't. The results from `outputs/tables/`: every number read from the file and placed, never typed from memory, and a bracketed gap wherever the file has no number for a sentence. A first pass at the discussion only from the results and a list of limitations you write yourself. The instruction that makes this work is one line, and it goes in every request:

> Use only what is in `METHODOLOGY.md`, `outputs/tables/`, and the figure captions. Where a claim, a number, or a reference is not in those files, leave a bracketed gap and list it at the end. Do not fill it from what you know.

*The voice.* The rules that transfer from a conventions file to a manuscript are short (§6, Appendix A). Short sentences; the point first, then the qualification; concrete over abstract, with the number, the file, the date. Sparse emphasis. No throat-clearing ("it is worth noting that"), no conspicuous vocabulary, no three-part lists in every paragraph. Methods equation-first. Results in the past tense, interpretation in the present, and no drifting between them. Limitations stated before a reviewer states them. A paragraph that reads as the agent's rather than yours has usually broken one of these, and the fix is to name the rule in the global file so the next draft doesn't.

*The Word round trip.* Coauthors work in Word, with tracked changes, and no amount of markdown enthusiasm changes that. The pipeline that respects both sides: you write in markdown (or Quarto), and pandoc produces the `.docx`, with a reference document that carries the journal's styles. The coauthor edits and returns a `.docx`. Then pandoc reads it back, either showing the tracked changes or accepting them, and the agent produces the diff against your markdown and a list of the substantive edits, separated from the typographic ones. Each round trip is a dated pair in `manuscript/` (§7). Figures are PDFs from the build (§15), placed by Word; they are never redrawn in Word.

*Reviewer responses.* Each comment quoted, then the response, with the substantive answer first and the courtesies after (or not at all), and line numbers for every change. The agent drafts from two inputs: your bullet notes on what to do about each comment, and the text that changed. The decisions are yours, and each one that changes the analysis gets a dated entry in `METHODOLOGY.md` (§6), because the next revision, or the next paper, will need the reasoning.

> Draft the response to reviewer 2 in `docs/briefs/2026-09-02-r2-response.md`. Quote each comment in full, then respond. My decisions are in the bullets under each comment in `docs/notes/r2-plan.md`; do not add concessions I did not make. Where the manuscript changed, cite the new line numbers from `manuscript/revision-1.docx`. Lead each response with the answer.

*Talks.* A deck isn't the paper in bullets. Ask for an outline first, one claim per slide, drawn from the paper's sections, with the figure that carries each claim named from `outputs/figures/`; cut it by half; then ask for the slides. The output can be PowerPoint from pandoc, a web deck from Quarto, or Beamer (the LaTeX slide format), and the choice is the venue's, not the agent's. A deck built this way comes out of the same markdown and the same build as the paper, which is the point: the claim on the slide and the number in the table have one source.

## What the agent does

Reads the files and writes markdown; places numbers by reading the tables; runs the conversions (`pandoc paper.md -o paper.docx` with the reference document; the reverse with tracked changes accepted or shown); diffs the returned draft against yours and sorts the edits; drafts the responses from your notes; builds the outline and then the deck. The conversion steps are mechanical and reliable. The drafting is where the one-line instruction above does its work: an agent told to use only the files will leave gaps, and the gaps are the list of what you haven't yet decided or measured.

## What you check

Every number, against the file it came from. Ask for the check as a table (number, file, row, column) and read it; a number the agent can't trace is a number it typed.

Every reference, opened. The invented citation is the failure specific to this stage, and the rule from §10 holds for every sentence the agent wrote: if a reference wasn't in your files, it isn't in the paper until you have opened it.

The methods against the scripts. The section must describe the model as fitted, defaults included (§12), not the model as intended; the agent can produce the cross-check by reading the script beside the paragraph.

The voice, by reading a paragraph aloud. If it isn't how you write, it isn't done.

The disclosure, below, and its placement, which differs by journal.

### Disclosure

Every journal that matters to this readership now asks the same three things in different places: that AI-assisted tools aren't authors, that their use is disclosed with enough detail to be understood, and that the authors take responsibility for everything the tools produced. The differences are where the statement goes and what it must contain. As of August 2026:

| Body | What it asks | Where it goes |
|:--|:--|:--|
| ICMJE (recommendations updated January 2026) | Disclose at submission whether AI-assisted technologies were used and how. AI isn't an author. Authors are responsible for accuracy and for the absence of plagiarism, including in AI-produced text and images. | The cover letter and the submitted work: the acknowledgments for writing assistance; the methods for data collection, analysis, or figures. |
| Nature Portfolio (the Springer Nature risk framework) | Use is governed by risk, not by tool. Language polishing, formatting, translation, and data cleaning are permitted; uses that shape interpretation (suggesting analyses, drafting summaries, extensive writing support) are permitted with human oversight and disclosure; presenting AI reasoning as your own, fabricated data or citations, AI authorship, delegating peer review, and photorealistic AI images aren't permitted. Reviewers may not put manuscripts into public AI tools. | Authors disclose AI use; the framework fixes no single location, so follow the journal's instructions. |
| Elsevier journals | Permitted to improve language and readability and for some organizing tasks, with author oversight. AI-generated primary research images prohibited. No AI authors. Reviewers may not upload manuscripts. | A separate declaration section before the references, naming the tool and the purpose, which appears in the published article. |
| JAMA Network (guidance of August 2026) | Report the platform, version, manufacturer, dates of use, what it did, and on which portions; confirm responsibility. Barred outright: peer review, opinion pieces, clinical images. | The acknowledgment; the methods when the tool is part of the research design. |
| Science journals | AI as a component of the research or an aid to writing is permitted with disclosure. No AI authors, and no AI-authored sources in the reference list. AI-generated images and multimedia aren't permitted without the editors' explicit permission. Reviewers may not enter any part of a manuscript into an AI tool. Accountable for accuracy, citation, and plagiarism. | The cover letter, and the methods or acknowledgments; the AAAS guidelines for AI use say which for each use. |
| PLOS | Report the tools, how they were used and evaluated, and which parts of the study or article were affected. Not authors. The hypotheses, interpretations, and conclusions are the authors' own. | A dedicated section of the methods; the acknowledgments where there is no methods section. |
| NIH, applications (NOT-OD-25-132, effective 25 September 2025) | Applications substantially developed by AI aren't the applicant's original ideas. Limited assistive use may be appropriate. Six applications per investigator per year. | No disclosure field; detection and post-award enforcement. |
| NIH, peer review (NOT-OD-23-149, June 2023) | Reviewers may not use generative AI to analyze or critique applications, and may not upload any part of one. | Not applicable: a prohibition. |

Most policies were written for text and images and say little about code; treat code assistance as a "component of the research" and disclose it in the methods, with the verification that stands behind it, which is a stronger statement than most authors can make. And a generic sentence ("AI tools were used in preparing this manuscript") satisfies none of them. The statement names the tool and version, the vendor, the period, what it did and to which parts, and who checked it. For the paper of §6:

> The authors used Claude Code (Anthropic; Claude Opus 5; May to August 2026) to draft and test the analysis code in `code/` from the authors' written specification, and to edit the language of the Methods and Results sections. All code was verified by an independent re-implementation in Stata, all analyses were re-run by the authors from the raw data, and the authors take full responsibility for the content.

Adapt the location to the journal. And note the two prohibitions that are absolute: a manuscript you are reviewing never goes into any tool (NIH, Elsevier, JAMA, and most others), and your own unpublished text never goes into a consumer plan with training on (§16).

## What goes wrong

*Numbers typed by the model.* A transposed digit, a rounded value, an estimate from nowhere that reads exactly like the real one. The traceability table catches it after the fact; the one-line instruction above stops it happening.

*The invented reference.* Plausible authors, a real journal, a year, and no such paper (§10). Open every one.

*Methods for the model you meant.* The section describes the intended model; the script ran another (a default, a dropped term, a different clustering). Cross-check against the code, not against `METHODOLOGY.md` alone.

*The voice of the machine.* The reviewer notices before you do. Read aloud; put the broken rule in the global file.

*The round trip that loses edits.* The agent accepts the coauthor's tracked changes silently, or overwrites the returned draft with a regenerated one. Keep every returned `.docx`, dated; diff before anything is merged.

*The generic disclosure.* "AI was used." Tool, version, vendor, dates, purpose, parts, checker.

*The manuscript under review in a tool.* A paper you are reviewing is someone else's unpublished work, and it goes into no tool, ever. That is a confidentiality breach whatever the tool's terms say.

*The deck that is the abstract in bullets.* The agent's default. One claim per slide, one figure per claim, half the slides you first asked for.

# 15. Reproducibility and hand-off

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §15 "The agent-detachment pattern", "When this matters most"; TEMPLATES.md "Pre-deposit audit", "Remediating a deposit that has already been published"; quickstart §8 (the justfile shape); deck "Reproducibility: it has to run without the agent"
COVERS: It has to run without the agent. One-command build. Lockfiles (renv, uv; Stata's `require`). The acceptance check. Pipeline as audit trail. Deposit (OSF, Dataverse, Zenodo, openICPSR) and the pre-deposit audit.
VERIFY: `require` (Correia and Seay, Stata Journal 24(4), 2024; `require setup` writes exact versions by default) checked 2026-08-27. Zenodo's 30-day self-deletion window per TEMPLATES.md; re-check the repository policies at release. renv and uv command names as of 2026.
-->

The agent helped build the analysis; the analysis has to run without it. A pipeline that works only with the agent in the loop, re-explaining and re-fixing as it goes, isn't reproducible. What you have is a record of a conversation, and nobody else can re-run a conversation. The test is a reviewer in five years with the folder and no chat history, who runs one command and gets the paper's tables. This chapter is that test, and the hand-off that follows from passing it: to a coauthor, to a journal, to a repository.

Reproducibility means two different things, and this chapter is about the harder one. The first: can someone get the same results from your raw data using the methods described in the paper? That needs no language, package, or environment pinned down; it needs the raw data and a clear written recipe. The second: can someone reproduce the entire analysis pipeline that produced the results? That needs everything pinned. The first would be enough if papers gave enough detail to reproduce the analysis, but they rarely do, so in practice we rely on the second: a replication package that runs. This chapter builds that package.

Almost everything this chapter describes predates agents: the lockfiles, the containers, the pipeline runners. A determined researcher could always have set them up, and most never did, because the tools are technical and take time to wire together, and that time competes with the research itself. So reproducible practice stayed the exception. What an agent changes is the cost of entry: it handles the technical setup while you stay on the substantive questions. The bar to a reproducible project is lower now, and that is the reason to clear it, not evidence that it was ever optional.

![](figures/two-pipelines.svg){#fig-two-pipelines .tall width="90%" fig-align="center" fig-alt="Two modes of analysis compared down a single column. A fork splits a task and your data into two branches: the LLM writes the code (deterministic) or the LLM does the analysis (stochastic). For each concern the code side (blue) and the model side (brown) are stacked: what happens, how to reproduce, how to verify, how it ages, and what to report." above="12pt" below="12pt"}

## What to ask for

*One command.* Everything the paper reports is produced by a script, and one command runs the scripts in order and stops at the first failure. The zero-install version is a short `run-all.R` (Appendix A.4): it runs each script and halts on the first error, using only the R you already have. A command runner, `just`, does the same more cleanly, with named recipes anyone can list and run; it is a small install the companion guide, *Extending Your Agent's Toolkit*, covers. Ask for it early, when the project has two scripts, so that it grows with the project rather than being reconstructed at submission. The build is a contract, and the one file the agent shouldn't edit freely: it may propose changes, and you review each one, because a change to the build changes what "reproduced" means.

*A lockfile.* The scripts need the packages they were written against, at the versions they were written against. In R, `renv` does this: `renv::init()` once at the start of a project, `renv::snapshot()` whenever a package is added, and a committed `renv.lock` from which `renv::restore()` rebuilds the library on any machine. In Python, `uv` does the same with `pyproject.toml` and `uv.lock`, restored by `uv sync`. Stata has no lockfile, and two habits stand in: a `version` line at the top of every do-file, which pins Stata's own behavior, and Correia and Seay's `require`, which pins the community packages (`require reghdfe==6.12.3`), with `require setup` writing the list for you.[^require] Ask the agent to add the lockfile the first time it installs a package, and never to install one without recording it: that line is in the global file (§6) for this reason.

[^require]: Sergio Correia and Matthew P. Seay, "require: Package dependencies for reproducible research", *Stata Journal* 24(4), 2024.

*Re-run only what changed.* `run-all.R` and `just` rerun everything from the top. That is fine until a step takes hours or the steps grow interdependent, when rerunning the whole build to change one figure wastes time and the agent starts skipping steps to save it. The tool for this is a pipeline runner: it maps which step depends on which, reruns only the steps whose inputs changed, and resumes a build interrupted partway. In R that is `targets`; the cross-language equivalent is Snakemake. Reach for one past roughly ten interdependent steps, or when a single step takes long enough that you wouldn't want to rerun it needlessly. The command in front stays the same; what changes is that a rerun is cheap. Which runner, and how to set it up, is the companion guide's; the judgment here is when the pipeline earns the extra structure, which is rarely on a first paper and often by the third.

*The LLM and the prompt.* When the LLM performs a step of the analysis itself rather than writing the code for it, what has to be reproduced is a result, not a script, and both reproducing it and checking it work differently. That case has a section of its own at the end of this chapter.

*The acceptance check.* Before the work is called done, the whole pipeline runs clean from a fresh copy: not the folder you have been working in, with its accumulated state, but a clone of the repository into an empty directory, the environment restored from the lockfile, the one command run, and the outputs compared with the committed ones. Ask the agent to do exactly that in a temporary folder and report what happened, including whether the tables match to the decimal (they should; for sampling-based results, within Monte Carlo error, §13).

> Clone this repository into a temporary folder, restore the environment from the lockfile, and run the build there. Report every step's outcome. Then compare every file in `outputs/tables/` and `outputs/figures/` with the committed version and list any that differ. Do not fix anything; report.

*The deposit.* When the paper is accepted, or before, the code and what data may be shared go to a repository that gives them a persistent identifier: OSF, Dataverse, Zenodo, or openICPSR, whichever your field and journal expect. What goes, assembled first as a snapshot folder (`outputs/archive/deposit-v1/`) that is exactly what will be uploaded: the scripts, the build file, the lockfile, a README with the run order and the software versions, a data README documenting every column the code reads, and the processed data if the agreement allows it. What doesn't go, ever, and has never been in the repository's history: restricted data (§16). Between the decision and the upload sits the audit below.

## What the agent does

Writes the build file and keeps it in step with the scripts. Adds the lockfile and updates it. Writes the run order into the README from the build file, so the two can't disagree. Runs the fresh-clone test and reports. Drafts the data README by reading the scripts for every column they use. And, for the deposit, does the reading that the audit turns on.

For a project that has outgrown one command, two tools from the fuller stack take the next step. `targets` for R, and Snakemake for pipelines that mix languages, are runners that track which outputs are current, rerun only the steps whose inputs changed, and resume a run that was interrupted. They matter when a single step takes hours; for a pipeline of fast scripts, rerunning everything is cheaper than the setup. Both are outside this guide; the one command above is enough for most papers.

## What you check

The fresh-clone run, yourself, once. Not the agent's report of it: the run. On a second account, a colleague's machine, or a clean directory, restore and build, and compare. If it works there, it will work for the reviewer; if it works only in your folder, something in your folder is doing work the repository doesn't know about.

That every package the code loads is in the lockfile. The agent can list the difference between what the scripts load and what the lockfile pins; the list should be empty.

That the README's run order names every script the build runs and no script that doesn't exist, and that the software versions it states are the ones in the lockfile.

That the pipeline is the audit trail. Anything the paper reports that was produced in a chat, by hand, or by a step nobody scripted isn't reproducible, however correct. When a session ends, the pipeline you can rerun is the evidence of what the work does; the transcript isn't.

For the deposit, the audit, in two halves.

*Contamination: what must not be in a public snapshot.* Absolute paths and home-directory names. Any reference to an AI assistant or agent, in files, in `.gitignore`, in empty directories, and in commit messages, which aren't files and are the place such references survive. Other people's unpublished words: reviewer comments quoted, reviewer names. Internal codenames, including the ones printed at run time by `cat()` or `display`. Development history in comments ("fixed on", "used to"). Worklists: TODOs, placeholders, "still outstanding". And restricted data, anywhere in the history: `git log --all --diff-filter=A --name-only` lists every file ever added, and the largest objects in the history are worth listing too.

*Correctness: an archive can be tidy and wrong.* Every documented claim matches the code: the model form, the adjustment set, the outputs, the units. Every filename mentioned resolves to a file that exists or that the build produces. The data README documents every column the code reads. The author list on the record matches the manuscript's byline exactly, same people, same order; a DOI'd record that omits a coauthor isn't fixable afterward.

The rule the audit turns on: *read, do not search.* A pattern search finds only what you already thought of, returns clean, and you believe it. Have the agent extract every comment line in every tracked file and read them in batches, then read the rest against the code. Use a search to verify a fix, never to find the problem. And when a comment carries a reference that has to go, rewrite it rather than delete it: the reasoning in it is usually why the code looks the way it does, which is worth more to a replicator than the reference was. Never add a line to the public README saying the repository was cleaned; it tells a reader what to hunt for.

## What goes wrong

*It works on my machine.* An absolute path, a `setwd()`, a package installed but never snapshotted, a file the scripts read from a folder git ignores. Each passes in your folder and fails in the clone. The fresh-clone test exists for these, and it is the only test that finds them.

*The build passes and the numbers differ.* A seed that was never set, so a bootstrap or a fit gives a different answer each run. A data file refreshed since the table was made. A figure that was edited by hand after the script drew it. The comparison step of the acceptance check is what catches this; a build that merely exits clean doesn't.

*The transcript problem.* A step that was done in the chat (a recode the agent applied once, a filter agreed in conversation) and never written into a script. It is in the results and nowhere in the repository. Everything the paper reports comes from the build, or it isn't in the paper.

*Restricted data in the history.* Removed from the folder months ago, still in a commit from the first week. The history check above finds it; fixing it means rewriting history before anything is public, which is why the audit runs before the first tag.

*Audit by search.* The sweep for "agent" returns nothing, and the comment says "assistant". The sweep for "Claude" returns nothing, and the commit message says "Co-Authored-By". Read.

*The late audit.* A deposit is public and, after a short window, permanent: Zenodo lets the depositor remove a version for thirty days and then not at all. Before the first tag every one of these problems costs a commit; after a DOI exists, the cheap fixes are gone. Audit before the tag, and if a deposit went out unaudited, audit it the same day.

*Building the pipeline for a paper in review.* A near-final project with three fits left and no iteration ahead is below the line where a runner pays off; rerun by hand and finish. The one-command build pays for itself on the next paper, where it can be there from the first script.

## When the LLM is in the loop

Most of this guide has the agent write code, and what has to be reproducible is the code: rerun the script and the result returns. Sometimes the LLM does a step of the analysis itself. It sorts documents into categories, pulls a variable out of free text, codes open-ended answers. Now the LLM is not writing the instrument, it is the instrument, and its output is a result the paper rests on. Reproducing that result takes more than the script that called the LLM, and checking it is a measurement question rather than a code review. This case is a different pipeline, and it repays being treated as one.

*Pin the model.* A result is reproducible only against a fixed model, and "the current Claude" is not fixed. There are two ways to pin it, and they promise different things. A hosted model is pinned by its exact version identifier: from the Claude 4.6 generation on, an identifier names one frozen snapshot and the weights behind it never change, so a run you pin today returns the same answer next year, for as long as that version still exists. An open-weight model, one whose weights you download and keep, is pinned harder: you record the exact release and a checksum of the files, and because the weights sit on your own disk, nothing upstream can alter them. Record the version either way, and with it the prompt, the temperature, and any random seed, since each of those shapes the output.

*Build a gold set and score against it.* The hand-check from verification (§13), a sample you label yourself and compare the LLM against, becomes a standing asset here rather than a one-time test. Label a few hundred cases by hand, keep them, and score every run against them: percent agreement for a clear-cut task, a chance-corrected statistic such as Cohen's kappa when the categories are uneven. That agreement is the LLM's evaluation. It belongs in the methods (§14), and it is what you rerun whenever anything changes.

*Plan for the model going away.* Hosted models are retired. Anthropic gives at least sixty days' notice and has committed to preserving old weights, but a retired model stops answering, and a pinned version that no longer runs reproduces nothing. An open-weight model cannot be retired out from under you: the copy you saved is the copy that runs. So the model you pick sets the result's shelf life, and for a step central to the paper, one a replicator will need years out, prefer an open-weight model you can archive beside the data. When you do change models, by choice or because the old one is leaving, do not simply switch: rerun the gold set on the candidate, compare its agreement to the model it replaces, and adopt it only if the agreement holds. The gold set is what makes a swap safe, and what turns "the model changed" from a silent risk into a number you can see.

*Save the run, and disclose it.* The inputs the LLM saw and the raw outputs it returned are data, stored as data (§11), not regenerated on demand from a model that may be gone. The methods name the model, its version, and the dates it ran (§14), so a reader can see what was asked, what came back, and how closely it matched the hand-labeled truth. For one step in one paper, a script that calls the pinned model, saves its inputs and outputs, and prints the agreement against the gold set is the whole apparatus, and it sits in the one-command build above like any other step. When the loop grows, several models compared, the step rerun as new data arrives, an experiment tracker records each run and scores it for you; which tool, and how to set it up, is the companion guide's, *Extending Your Agent's Toolkit*. A hosted tracker is one more service the data travels to, so for restricted data the rule of §16 applies and a local option is the safer default.

<!-- ===================== PART IV — JUDGMENT ===================== -->

# 16. Data confidentiality

<!--
STATUS: mixed · PHASE: 1 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §13a "Data permissions" and the auth-path table; deck "Data confidentiality: what you can send, and where"; Harvard specifics (sidebar; the account path is §3)
COVERS: IRB, DUA, BAA. Harvard data security levels (sidebar). What may reach a cloud model: identifiable, never; de-identified, only under coverage. The rule in AGENTS.md and its enforcement in permissions. Local models for restricted data. Vendor training and retention, dated.
VERIFY: checked 2026-08-27, Harvard levels re-checked 2026-09-15. Anthropic: Free/Pro/Max, "including when they use Claude Code", train unless the setting is off (retention 5 years on, 30 days off); Work/Education/API/Bedrock/Vertex excluded (anthropic.com/news/updates-to-our-consumer-terms). Harvard levels: privsec.harvard.edu/classify-risk defines Level 4 as Restricted Personal Information (HIPAA-protected health information, identifiable genetic data, government IDs) and contractually restricted data, and Level 3 as sensitive confidential information including most personal data. Tool-by-level and the institutional Claude license: see §3 and the FAS/HUIT menu (compiled 2026-09-04); HMS guidance maps L1 public tools / L3 Sandbox, Claude, Gemini, Copilot, ChatGPT Edu / L4 special-request / L5 none, and says a DUA may separately restrict AI use. Some HUIT/HMS pages block direct fetch; those claims rest on the FAS/HMS documents and search summaries. Re-check at release; the sidebar carries the date. (OpenAI/Codex training and local-model specifics archived 2026-09-15.) Retention (checked 2026-09-18): Anthropic commercial/edu tiers do not train; claude.ai content follows the org retention policy and persists until deleted, purged ~30 days after deletion; the most capable ("Covered") models keep data 30 days even under a zero-retention agreement (privacy.claude.com; CNBC 2026-09-01 on the policy churn). HUIT states it cannot read Claude conversations (huit.harvard.edu/claude, blocks direct fetch; rests on a search summary). Confirm the Harvard-specific retention/deletion path against the HUIT Claude page at release. Open-weight models (checked 2026-09-18 via search): Meta Muse Glimmer 30B (Apache 2.0, released 2026-08-10) and Google Gemma 4 (E2B–31B, Apache 2.0, 2026-04-02) both confirmed real; family licenses per HF/vendor pages — Qwen, Mistral, Gemma 4, Muse Glimmer Apache 2.0; DeepSeek, Phi MIT; Llama a community license with use restrictions. Model names date fast, so the table is a snapshot; older Gemma used stricter terms, hence "read the license".
-->

The failure mode for this readership is specific: identifiable population or health data in a consumer chatbot. With an agent, no paste is needed. The agent reads whatever folder it is pointed at, and everything it reads goes to the model. So the question isn't whether this is risky but two concrete ones: what do your protocol and agreements permit, and is the vendor covered? This chapter answers them for the case where the sending happens without your hand on the keyboard.

## What "reach a model" means

An agent works by sending the model what it has read. Every file it opens, every command's output, and every error message becomes part of the context that travels to the vendor's servers on each turn (§6). That includes the first rows of a data file it opened "to see the columns", the row that an error message printed, the log a script wrote, and the summary table a session produced. There is no "just the code" once the code prints data. The unit of disclosure isn't the file you attached; it is whatever the agent looked at.

Three documents decide what may be looked at, and by whom.

Your *IRB protocol* says where the data are stored, who accesses them, and what happens to them. An AI vendor's servers are a storage location and the vendor is a third party; if the protocol doesn't name that path, it isn't permitted, and the choices are to amend the protocol or not send.

A *data-use agreement* with the data provider (a natality file from a statistics agency, a state registry, a claims database) usually forbids disclosure to third parties, storage outside named systems, and sometimes any processing by an AI service unless the provider consents. A DUA binds regardless of what your institution has approved: institutional coverage makes a vendor permissible under university policy, and the DUA can still say no.

A *business associate agreement* is the HIPAA instrument. Protected health information may go only to a vendor that has signed one with your institution. Consumer plans never have one. Institutional arrangements sometimes do, and the arrangement, not the vendor's name, is what counts.

## What may reach a cloud model

Two lines cover most cases, and the rest of the chapter is how to live inside them.

*Identifiable data: never.* Not through a consumer plan, not with training turned off, not "just the header". The exception is a path your institution has covered for that level of data *and* your DUA and protocol permit, which for most readers means no such path exists.

*De-identified data: only under coverage.* Through an institutional agreement (an enterprise plan or a gateway) whose terms exclude training and are approved for that data's security level, and only if the DUA allows processing by the service. On a personal plan, the answer is still no.

Everything else (code, text, public and aggregate data, synthetic data) can go where you like, with one caveat below about unpublished results.

The rule that makes this workable is that the agent needs the *shape* of your data far more than the data itself. Give it the data dictionary and a synthetic file with the same columns, types, and plausible ranges, and it can write and test the entire pipeline (cleaning, model, figures, assertions) without ever seeing the real data. You then run the finished scripts on the real data yourself, in a session with no agent in it. §12 uses the same move for a different reason: simulated data with known parameters is how you check the model. In §12 the point is that you know the true values and can see whether the model recovers them. In this chapter the point is that none of your real data ever left your machine. For restricted data this is the default.

## Training and retention, dated

Separate from whether a vendor may *see* your data is whether it may *train* on it, and the answer depends on how you sign in. As of August 2026:

| Sign-in | Used for training by default | The switch |
|:--|:--|:--|
| Claude Free, Pro, or Max, including Claude Code under those plans | Yes, unless turned off. Retention five years if on, thirty days if off. | claude.ai, Settings, Privacy |
| Claude Team or Enterprise, or an institutional plan | No | None needed |

Other vendors' consumer plans follow the same pattern — training on by default, an opt-out in the data-controls settings, and institutional plans excluded. Vendors change these terms more than once, so treat the table as a snapshot and check the data-controls page at the start of each project. Two consequences. First, turn training off on any consumer plan you use for research, today, and record the date you did it in your global file (§6); it affects unpublished results and draft text, which are yours and not yet public. For a project under an NDA, IRB review, or client confidentiality, verify the state again when the project starts and record it in the project file, beside the data rule. Second, the switch doesn't change the disclosure question. A consumer plan with training off is still a consumer plan: uncovered, and not a permitted destination for restricted data.

Whether a vendor trains on your data and whether it keeps a copy are two separate things. An institutional account answers the first (it does not train on your inputs) but not the second: your inputs are still stored. On a claude.ai plan, your conversations stay under the organization's retention policy until you delete them, and a deleted conversation is removed within about thirty days; the most capable models keep data for thirty days even under a zero-retention agreement. These terms changed more than once in 2026, so treat the numbers as current only. Deletion is always manual: your institution cannot read your conversations, but they do not disappear on their own, so delete the ones that held sensitive data yourself, and do not rely on a retention window to protect confidential data.

## The rule, and its enforcement

The rule goes in the project file, where the agent reads it every session (§6):

> `data/raw/natality/` is restricted. Never read, list, or copy it. Work only from `data/processed/synthetic-natality.parquet`.

A sentence in a file is advice the agent will almost always take, and "almost always" is the wrong standard for a DUA. So the rule is enforced twice more, in ways that don't depend on what the model decides.

*A deny rule.* Claude Code's permission settings accept a rule that refuses any read of a path (`Read(./data/raw/**)` in the project's `.claude/settings.json`, which is committed so every session on every machine inherits it; §5 shows the file). The agent then can't open the file even if asked to. (Not every agent has a read-deny of this kind; where one doesn't, the enforcement is the next one, location.)

*Location.* Restricted data lives outside the project folder, in a place the agent is never pointed at: an encrypted disk image you mount only for your own runs, or a folder owned by a different user account. The scripts reach it through a path variable that is set only in your session. The project folder holds the synthetic file. An agent can't leak what it can't reach, and this works for any agent and every mode.

Two smaller leaks are worth closing at the same time. Data files never go into git, because a push copies them to a third party; `data/raw/` is in `.gitignore` from the day the project is scaffolded (§7). And an agent with web access can carry a data value into a search query or a bug report without noticing; the rule "never send any file under `data/` to a web search or an external service" is in the §6 brief for that reason.

## Local models for restricted data

When no covered vendor exists for the data, and the synthetic-data route won't do (you need the agent's help interpreting a real anomaly, say), the remaining option is a model that runs on your own machine, so that nothing leaves it. This means an open-weight model served locally through an agent that supports one; Claude Code doesn't, so it means a different tool for this narrow case. Local models are weaker and slower than the cloud ones, which makes them a fit for the mechanical parts of the work (scaffolding, assertions, format conversion, first drafts of a cleaning script) rather than the judgment-heavy parts.

Running a model locally has two advantages beyond confidentiality. First, it is the only way to make an LLM analysis step (§15) fully reproducible: a hosted model can change or be withdrawn, while an open-weight model has a fixed version you can pin and cite like any other dependency. Second, you control the hardware, and that is also the cost: a capable open-weight model needs a GPU, so you need a machine with one or a secure cluster (at Harvard, FASSE, §12), and someone has to run and maintain that server.

Which model depends on the hardware you have and the license you need. As of September 2026:

| Size | Where it runs | Examples |
|:--|:--|:--|
| Small (about 1–8B) | a laptop, on CPU or a modest GPU | Phi-4-mini, small Gemma 4, Qwen3 4–8B |
| Mid (about 30B) | one consumer GPU, roughly 20–32 GB | Muse Glimmer, Gemma 4 31B, Qwen3 35B |
| Large (70B and up) | a workstation GPU or a cluster | Llama 4, DeepSeek V4 |

A bigger model is more capable and needs more hardware; a mid-size model on one GPU is enough for most of the mechanical work above. Licenses differ and matter here: Qwen, Mistral, Gemma 4, and Muse Glimmer are Apache 2.0, and DeepSeek and Phi are MIT, all permissive, while Llama carries a community license with use restrictions. Read the license before you rely on a model, and check that it allows what your DUA and IRB require. The names change every few months, so treat these as examples and check the current field; a bigger model will always cost more hardware, and the license will always decide whether you may use it the way you intend.

Running a model locally does not settle the compliance question. A DUA that restricts AI processing restricts it on your laptop too: doing the processing yourself controls where the data went, not whether you were allowed to process it that way.

> **Harvard.** Harvard classifies data in five levels; identifiable health data is Level 4, and so is contractually restricted data, which covers most DUAs. As of September 2026, the institutional Claude license (§3) — signed in with HarvardKey — is approved for data up to Level 3, and the vendor doesn't train on inputs; a personal account is Level 1 (public) only. HUIT cannot read your Claude conversations, but they stay until you delete them; remove any that held restricted data yourself. HMS guidance maps the tools by level: public and consumer tools for Level 1 only; Claude, Google Gemini, the HUIT AI Sandbox, Copilot, and ChatGPT Edu for Level 3; special-request systems for Level 4; nothing for Level 5. The same guidance notes that a DUA may separately restrict a dataset's use with AI, and to ask the Office of Research Administration before using a restricted dataset. Check the current pages before relying on any of this; the levels are stable, the tool list is not.

## In order

Classify the data first: the institution's level, then the DUA, then the protocol; the strictest of the three governs. Pick the path that classification allows: a covered gateway for de-identified data, synthetic data for the agent and your own runs on the real file for anything restricted, a local model if neither will do. Write the rule in the project file and enforce it with a deny rule and a location the agent can't reach. Turn training off on any consumer plan you use, and note the date. Keep data out of git. Then, and only then, let the agent into the folder.

# 17. Cost, and the map

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: deck "The map, honestly costed", "Where to start"; tool-chain §14 (only the idea of usage windows)
COVERS: Tiers: chat, editor agent, CLI agent, pipelines. Setup cost and money for each. Usage windows. When not to bother.
VERIFY: prices checked 2026-08-27. Claude: Pro $20/month ($17 annual), Max $100 and $200, Team $25/seat ($20 annual), Enterprise per seat plus usage (claude.com/pricing). Usage windows: rolling five-hour plus weekly, `/usage` in Claude Code, per the tool-chain map §14. No wall-clock setup estimates by design (global rule). (ChatGPT/Codex pricing archived 2026-09-15.)
-->

Four tiers run from the chat window you already use to a pipeline that runs without you. Each costs something to set up and something to run, and the payoff at each rung has to justify the friction of getting there. This chapter prices each tier, so that you climb as far as your work needs and no further.

## Four tiers

| Tier | What it is | What it takes to set up | What it buys |
|:--|:--|:--|:--|
| 0. Chat | A browser tab. Where you already are. | Nothing. | Answers, drafts, explanations. You are the messenger (§2). |
| 1. Editor agent | Claude Code inside VS Code or Positron, next to the file you are editing. | Install the extension, sign in, write a first project file (§6). | Edits in place, with the project in view. You are the driver. |
| 2. Agent in a folder | The same agent in a terminal or the desktop app, pointed at a project folder. | Git, one project in the paper shape (§7), the global and project files (§6), a permission posture (§5). | Whole tasks delegated and checked. You are the supervisor. This guide. |
| 3. Pipeline | A one-command build with pinned packages that reproduces the paper (§15). | Grows over a project: the build command, the lockfile, assertions (§13). | Runs without the agent. The hand-off and the deposit. |

Tier 1 pays for itself in the first hour. Tier 2 pays for itself in the first week, on bookkeeping alone, and it is where the three tasks in §1 (simulation, verification, literature) become possible. Tier 3 pays for itself on the second paper that reuses the pipeline, and at deposit, when a reviewer or a repository asks for the code to run. Nobody should build tier 3 in a week; it accretes, one build step at a time, and the agent does most of the accreting.

## Money

Claude comes with the plan; there's nothing separate to buy. At an institution that licenses it, the plan is unit-funded — a school, department, or PI budget covers it (§3) — so for most researchers the cost question isn't dollars but the usage allowance the plan carries, which the next section is about.

## Usage windows

On a subscription, cost arrives as an allowance rather than dollars: a rolling five-hour window that starts at your first prompt, plus a weekly cap, shared across everything you do with the vendor (Claude Code and the claude.ai chat draw from one bucket). The quotas change too often to print, but the agent shows where you stand: `/usage` in Claude Code. A metered institutional plan counts tokens instead, against a spending limit the unit sets.

What spends the allowance isn't the number of requests but their weight. Every turn resends everything the session has read so far, so a long session with many files open costs more per message as it goes; a higher effort level and a larger model cost more per turn (§4); and a model fit that runs inside the agent's session, streaming output, spends the window while it waits. What saves it: one session per task, closed when the task is done; `/compact` when a session runs long; naming files rather than pasting them; a lower effort for mechanical work; and long fits run outside the agent, from a script, with the agent reading the log afterward (§12). Running several agents at once, or the same analysis several times to verify it (§13), multiplies the spend, so save it for the results that carry a claim.

## When not to bother

Some work is cheaper without an agent, and knowing which is part of the judgment. A question with no project attached belongs in the chat window. A ten-line script you can write faster than describe is faster to write. A task whose result would take as long to check as to do (a one-off table you will read once) gains nothing from delegation, because the checking is the work. Anything touching data you can't cover and can't fake (§16) is off the table until you can do one or the other. And a project you are handing off next month doesn't need tier 3; it needs a README.

The rule holds: climb only when the payoff justifies the friction. Most researchers reading this should live at tier 2, with tier 3 growing underneath the papers that will be deposited.

## Where to start

Pick one task you already do badly and wouldn't mind seeing done differently: organizing a project folder, drafting a reviewer response from your notes, writing the simulation you keep meaning to write. Watch the agent do it once, in Manual mode (§4), reading every prompt. Write down the conventions the first time you correct it; that file is the start of your global file (§6), and Appendix A has one to copy. Then read the Part III chapter for the next stage of the paper you are on. Tier 3 accretes from there, one build step at a time.

# 18. Failure modes and habits

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §12 "Anti-patterns", §13a "The blind-click-fest failure mode", §10 "Context hygiene"; synthesizes §2, §5, §6, §9, §12, §13, §15 of this guide
COVERS: Confident-but-wrong. Context blow-up. Stale memory. The click-fest. Over-delegation. The supervisor stance as the habit that prevents most of it.
VERIFY: `/compact` and `/context` exist in Claude Code (checked 2026-08-26 against the slash-command docs). Auto memory is Claude Code's.
-->

Every failure in this chapter has appeared in an earlier one. What collects them here is a shared cause. The agent is fluent, tireless, and confident, and those are exactly the qualities that make a supervisor stop supervising. The habits that prevent the failures aren't settings. They are the stance of §2, kept up on the days it is inconvenient.

## Confident but wrong

The failure that matters isn't the script that breaks; that one announces itself. It is the script that runs, the number that looks reasonable, and the summary that says the work is done, when it isn't. The agent's tone is the same for a correct answer and an invented one, so nothing in the output tells you which you have. Code that runs isn't code that is right (§2); a rule that fired isn't a finding (§12); two numbers that agree aren't two independent numbers (§13).

The habit: never accept a report as a result. "Done", "they agree", "it works", and "I verified" are claims, and the response to each is the same question: show me. The listing, the build output, the comparison table, the simulation table, the opened reference. If the artifact doesn't exist, the claim isn't yet true. The chapters of Part III are organized around what that artifact is for each stage, and each *What you check* section names the artifacts for its stage.

## Context blow-up

An agent's working memory for a session (one conversation, from its start to `/exit`) is finite (§6), and a long session fills it: every file read, every command's output, every diff rides along on each subsequent turn. The symptoms are recognizable once you have seen them. The agent forgets a rule from the brief it followed an hour ago. It repeats work it already did. It contradicts an earlier answer without noticing. It slows, and on a metered plan it starts to cost (§17). Then, near the limit, the session is compacted into a summary, and whatever didn't make the summary is gone.

The habits: one session per task, closed when the task is done, with `STATUS.md` and `TASKS.md` as the hand-off to the next (§9). Name files rather than pasting them. When a session has to run long, compact it yourself with `/compact`, while you can still say what the summary should keep, rather than waiting for the automatic one; in Claude Code, `/context` shows what is filling the window (my own habit: glance at it once a session has run long, and compact when usage passes roughly 300,000 tokens). Keep the brief short (§6), because it is loaded every time. And treat a session that has started to forget as finished: restart, and let the files carry the state.

## Stale memory

Two kinds. The agent's own notes across sessions (§6), which record what it noticed, and can record a file that has since been renamed or a decision that has since been reversed. And the agent's assumptions from earlier in a session, formed when a file said one thing, and kept after you changed it. Both are worse than no memory, because the agent acts on them without flagging that they are memories.

The habits: the file wins over the note, always, and a rule you rely on memory to keep belongs in the brief. Decisions are dated in `METHODOLOGY.md`, and a reversal is a new dated entry, not an edit of the old one, so the record shows which came later. After you change a file the agent has already read, say so; and open the agent's notes now and then and delete what has expired.

## The click-fest

A permission system that prompts too often trains you to approve without reading (§5). By the fortieth prompt you are approving the shape of the dialog. And a session that has read something you wouldn't fully trust makes every subsequent request look plausible, because the requests are shaped by what was read. At that point the prompts are the least dependable control you have. For code or data you actively distrust, rather than merely haven't vetted, the dependable fence isn't a prompt but a container that seals it off from the rest of your machine (§5).

The habits are the posture in §5: the routine allowed, the never denied, and prompts kept only for what you will actually read. The signal that the balance is wrong is your own behavior. Approving the same prompt for the tenth time means that action belongs on the allow list; approving something you would have refused had you read it means it belongs on the deny list. A prompt rate you can't keep up with is a setting to change, not a discipline to summon.

## Over-delegation

The agent will take whatever you hand it, including the parts of the work that were yours. Three hand-offs go wrong.

*Delegating the judgment.* The estimand, the exclusion rule, the prior, the interpretation of a discrepancy between two implementations, the decision about what to do when a calibration fails. Asked, the agent decides, fluently, and the decision looks like analysis. These are yours, and the sign that one has slipped is a number in your table you can't explain in your own words.

*Delegating the checking.* "Check that this is right" returns "it is right." An agent verifying its own work has the same blind spots the work has. The check comes from something else: a simulation with a known truth, a second implementation by a different session, a reference you opened, a build you ran yourself (§12, §13, §15). A second agent helps only if it is genuinely independent: a critic that shares the session's context tends to agree, and among several runs a majority isn't proof, since two agents can make the same mistake. Anchor the check to something outside them all, a known answer or a simulation (§13).

*Delegating the boundary.* Letting the agent write its own permission rules, edit the brief that constrains it, or decide which data are restricted. The boundary is set outside the session it binds (§5, §16), or it isn't a boundary.

There is a quieter form. Work that happens in the conversation and never reaches a script: a recode applied once, a filter agreed in chat, a table produced from a session and pasted into the manuscript. It is in the paper and nowhere in the repository. The rule from §15 is the cure: everything the paper reports comes from the build.

## The loop that fixes the wrong thing

Asked to make a failing script work, an agent can make the failure disappear instead of fixing its cause: wrap the call so the error is swallowed, drop the rows that won't merge, relax the assertion that fired, change an option until the numbers match the other implementation, adjust the model until the calibration passes (§2, §12, §13). Every step looked like progress in the loop's own terms, and the report says the problem is solved.

The habit is one question, asked every time an error goes away: how? If the answer is that the check was weakened rather than satisfied, then the fix has introduced a worse problem than the one it closed. The instruction that prevents most of it is the one from §13, *report, don't reconcile*: a failing check is a finding for you, not a task for the agent.

## The supervisor stance

Most of this chapter is prevented by the stance §2 set out, held consistently. Describe the outcome and its constraints rather than the steps. Ask for a plan when the shape of the task isn't obvious, and edit it before the agent starts. Let it run without narrating each step back to you. When it finishes, check the result against something other than its own account. Keep it inside a boundary you set in advance. Open and close every session with the two rituals of §9. And let nothing into the paper that the build can't reproduce.

An agent is a research assistant with more speed and less judgment than any you have had. Treat it the way you would treat an assistant you have known for a week: clear instructions, real trust for the mechanical work, and your own eyes on everything that carries a claim. The difference is that you can apply that scrutiny to everything it does, where a person would resent it.

<!-- ===================== APPENDICES ===================== -->

# Appendix A. Starter files

<!--
STATUS: new · PHASE: 1 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: A.1 and A.2 are the §6 worked files, copied verbatim by the build-time splice (edit them in §6, then re-run the splice; do not edit here). A.3–A.5 derived from ~/.config/agents/ (AGENTS.md, TEMPLATES.md paper template) cut to a researcher's needs.
COVERS: Global AGENTS.md (researcher edition). Project AGENTS.md for a paper. TASKS.md. A minimal justfile (with a no-extra-tool R alternative). A .gitignore. Copy and edit.
VERIFY: `set windows-shell` is a documented just setting; Stata batch-mode forms per §13's VERIFY note. Re-check the just syntax at release.
-->

Five files to copy and edit, and a closing reference (A.6) with the full project layouts that §7 cut down. The first two files are the worked examples from §6, reproduced without change so you can take them from here. Each file's lead says where it goes. Every line in them is a decision you can reverse; the point of starting from a file rather than a blank page is that the decisions are visible.

## A.1 The global file

Where it goes: `~/.claude/CLAUDE.md`, the global brief — or an agent-agnostic `AGENTS.md` it imports (§6). Replace the first paragraph with your own description, and cut any rule you don't actually hold; a rule you wouldn't enforce on yourself teaches the agent to ignore the others.

```
# How I work

Quantitative social scientist. R first, Stata for collaborators, some Python.

## Projects
- One folder per paper, under git. Its AGENTS.md says where things live.
- `data/raw/` is read-only. Derived files go in `data/processed/`.
- Paths via `here::here()`. No `setwd()`, no absolute paths.
- Lowercase, hyphenated file names: `clean-acs-2022.R`, not `Clean ACS 2022.R`.

## Code
- R: tidyverse style, the native pipe `|>`, one script per stage.
- Packages pinned with `renv`. Never install one without updating the lockfile.
- Comment what a block is for, not what each line does.

## Statistics
- State the estimand before fitting. Report every estimate with an interval.
- No model is trusted until it recovers known parameters from simulated data.
- Fits longer than a few minutes run outside the session, not inside it; I read the log when it finishes.

## Writing
- Short sentences. Point first, then the qualification. Prose, not bullets.
- Methods: the equation first, then the prose that explains it.
- American spelling. Oxford comma.

## Never
- Never read, print, or copy `data/raw/`, or anything a project marks restricted.
- Never delete or overwrite a data file. Never rewrite git history.
- Ask before anything that takes more than a few minutes or reaches the network.

## Every session
- Read `STATUS.md`, then `TASKS.md`, at the start.
- Update `TASKS.md` before finishing; rewrite `STATUS.md` if the state moved.
```

## A.2 The project file for a paper

Where it goes: `AGENTS.md` in the project folder, with a `CLAUDE.md` beside it containing the line `@AGENTS.md`. The example is the paper from §6 and §7; every path and name is specific to it, and that is what makes it useful. Replace the description, the layout, and the conventions with yours; keep the four headings. If the raw data are restricted, the working file named under *Where things live* is the synthetic file of §16, and the *Off limits* section is where the restricted path is named.

```
# heat-birthweight

Paper with J. Smith: county-level heat exposure and birthweight, US 2010–2020.
Target: Demography. Decisions live in METHODOLOGY.md, the current state in
STATUS.md, open tasks in TASKS.md.

## Where things live
- `data/raw/natality/`: restricted microdata under a DUA. See Off limits below.
- `data/raw/public/`: ACS and PRISM downloads; `data/raw/sources.md` logs each.
- `data/processed/`: what we build. Working file: `natality-county.parquet`.
- `code/`: `clean-natality.R`, `model-heat-bwt.R`, then `_final/figures.R`.
  `run-all.R` runs all three in order.
- `outputs/`: figures and tables the manuscript reads.
- `manuscript/`: the paper, Quarto to Word for the coauthor.

## This project
- Coauthor works in Stata. Every R model has a `.do` mirror in `code/stata/`.
  The two must agree before a number goes in the paper.
- Estimand: the effect of one more third-trimester day above 35 °C on county
  mean birthweight. Two-way fixed effects with county-clustered standard errors.
- Variable names: `bwt_` prefix for outcomes, `heat_` for exposures.

## Off limits
- `data/raw/natality/` is restricted. Never read, list, or copy it.
- Work only from `data/processed/natality-county.parquet`.
- Never send any file under `data/` to a web search or an external service.
```

## A.3 TASKS.md

Where it goes: the project root. Three headings, one line per task, a date on each finished item. The agent reads it at the start of every session, after `STATUS.md`, and updates it as it works (§6, §9); you read it to remember where you were. The comment at the top tells the agent the conventions and costs nothing.

```
# Tasks

<!--
One line per task. Move lines between sections as status changes; never
delete a line, move it to Done with the date. An In Progress line says
what is left, not what was done. Read this file at session start; update
it before the session ends.
-->

## To Do
- Write the simulation study for the main model (guide §12).
- Stata mirror of the main model, from METHODOLOGY.md only (guide §13).

## In Progress
- (nothing)

## Done
- 2026-08-27 — Scaffolded the project in the paper shape (guide §7).
```

## A.4 A minimal justfile

The one-command build of §15, in two forms, both shown below. The zero-install form is `run-all.R`: it runs each script in order, stops at the first failure, and needs only the R you already have. If you add a command runner, `just` (which the companion guide sets up), the same build is a `justfile` at the project root, whose named recipes `just` lists and runs.[^just] Use whichever you have.

[^just]: The just recipes need Rscript on your PATH; on Windows, R's installer doesn't add it by default, and the agent can do that for you. Installing just itself is in the companion guide.

```
# Command front door: `just` lists the recipes, `just build` runs the pipeline.
set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

# Rebuild everything from raw data to manuscript figures, in order.
build:
    Rscript code/clean-natality.R
    Rscript code/model-heat-bwt.R
    Rscript code/_final/figures.R

# Manuscript figures and tables only, from saved results.
figures:
    Rscript code/_final/figures.R

# The Stata mirror of the main model, in batch mode (guide §13). The log is
# written next to the do-file. Windows: replace the command with
#   & "C:\Program Files\Stata19\StataMP-64.exe" /e do code/stata/model.do
stata:
    stata-mp -b do code/stata/model.do
```

The same build without `just`: save the script below as `code/run-all.R` and run it from the project root with Rscript.

```
# run-all.R: the one-command build. Stops at the first script that fails.
scripts <- c("code/clean-natality.R", "code/model-heat-bwt.R",
             "code/_final/figures.R")
for (s in scripts) {
  message("== ", s)
  if (system2("Rscript", s) != 0) stop("Failed: ", s)
}
```

## A.5 .gitignore

Where it goes: the project root. It says what git doesn't carry: data, because a push copies it to a third party (§16); rebuildable outputs and logs, because they are large and the code remakes them (§7); and the files RStudio and the operating system leave behind. The shared agent settings file is committed so every session inherits the deny rule (§5, §16); the personal one isn't.

```
# Data never leaves the machine (§16); processed data is rebuilt by code/
data/raw/
data/processed/

# Rebuildable or large
outputs/models/
logs/
_old/

# Editor and OS leftovers
.Rproj.user/
.Rhistory
.DS_Store
Thumbs.db

# Personal agent settings; the shared .claude/settings.json is committed
.claude/settings.local.json
```

## A.6 The full project shapes

<!--
STATUS: adapt · DRAFTED: 2026-09-06 (ported essentially verbatim from the tool-chain map's §12 in the dedup; this appendix is now the canonical home of the templates — the map no longer carries them)
SOURCE: tool-chain map v1.7, "Workspace structure" and "Project shapes and conditional propagation", section references adapted to this guide
COVERS: The shape taxonomy; the full paper, data, and publishing layouts with canonical / recommended / optional parts; the five universal meta-files.
-->

§7 taught a cut-down paper layout; this appendix is the full version, with the two other shapes I use most beside it. Different kinds of projects need different scaffolds. A paper project has a manuscript, a methodology file, a code directory, and a strict reproducibility expectation. A web-scrape project has a data directory, numbered scripts, log files, and pinned dependencies. A publishing project (a guide, a report, a deck) has a template, a build file, and a single source. Forcing one universal template onto all of them either over-builds (a scrape doesn't need `manuscript/`) or under-builds (a paper without `METHODOLOGY.md` loses the methodological audit trail).

The solution is a shape taxonomy, written down once where the agent can read it (the global file, or a `TEMPLATES.md` beside it, §6). Each shape has a name; a directory layout; a set of canonical root files; and optional conditional rules ("if the project uses a pipeline runner, scaffold its manifest"). When an agent starts a new project, it is told the shape or it asks; it never guesses, because wrong-shape scaffolding is annoying to undo and the question costs one sentence. The result: every project of the same shape looks the same, an agent walking into any of them knows where everything is, and conventions don't drift.

*Paper shape* (statistical analysis ending in a manuscript). A representative layout:

```
<workspace-root>/papers/lee-test-project/
|-- AGENTS.md                      # project brief
|-- CLAUDE.md     -> AGENTS.md     # symlink (or the one-line import, §6)
|-- README.md
|-- METHODOLOGY.md                 # dated entries: *why* behind choices
|-- STATUS.md                      # current state, one screen; rewritten in place
|-- TASKS.md                       # to do / in progress / done; accumulates
|-- proj-lee-test-project.Rproj
|-- .here                          # 0-byte sentinel for here::here()
|-- _targets.R                     # pipeline manifest (when targets is used)
|-- _targets/                      # per-target object store (gitignored)
|-- justfile                       # project-wide command interface
|-- .graveyard/                    # transient working copies (gitignored)
|-- code/
|   |-- _startup/                  # tier 1: session-start bootstrap
|   |   |-- init.R                 # entry: sources the rest in order
|   |   |-- functions.R            # project helpers (defines load_pkgs())
|   |   |-- packages.R             # load_pkgs() calls
|   |   |-- options.R              # options() — sampler defaults, mc.cores
|   |   |-- data.R                 # read + prep the project dataset(s)
|   |   |-- specifications.R       # spec registry (model_templates etc.)
|   |   `-- pipeline-helpers.R     # parameterized callables for _targets.R
|   |-- _experiments/              # investigative work (sourced on demand)
|   |-- _data-acquisition/         # external-data fetchers
|   |-- _final/                    # tier 3: figure assembly (figures.R)
|   |-- _report/                   # tier 3: working Quarto summary
|   `-- <topic>-<variant>.R        # tier 2: analyses (semantic kebab-case)
|-- dags/                          # causal DAG sources + measurement model
|-- data/
|   |-- raw/                       # original data, never modified
|   `-- processed/                 # transformations (often empty)
|-- outputs/
|   |-- archive/zenodo-vN/         # archival snapshots (own repo)
|   |-- eda/                       # first-look EDA reports
|   |-- figures/{final/,working/}  # publication-ready + diagnostic
|   |-- models/<script>/           # saved fits (gitignored)
|   |-- results/                   # serialized analysis bundles (gitignored)
|   `-- tables/                    # committed; exact versions matter
|-- logs/                          # long-running-job logs (gitignored)
|-- manuscript/                    # drafts, response letters
`-- docs/
    |-- briefs/                    # dated · collaborator-facing incoming
    |-- responses/                 # dated · collaborator-facing outgoing
    |-- findings/                  # dated · internal: results, decisions
    |-- notes/                     # evergreen reference material
    `-- references/                # methodology PDFs
```

Canonical for this shape: the meta files (`AGENTS.md`, `CLAUDE.md`, `README.md`, `STATUS.md`, `TASKS.md`, `METHODOLOGY.md`, the `.Rproj`, `.here`), `code/_startup/` with its seven canonical files, `code/`, `data/`, `outputs/` with its six subdirectories (`archive/`, `eda/`, `figures/`, `models/`, `results/`, `tables/`), `manuscript/`, `renv.lock`. The three-tier `code/` layout (`_startup/`, then the top-level analyses, then `_final/` + `_report/`), the two non-tier sibling directories (`_experiments/` for investigative work, `_data-acquisition/` for external-data fetchers), and the per-script subdirectories under `outputs/figures/working/` and `outputs/models/` are paper-shape convention. Recommended: `_targets.R` + `_targets/` + `justfile` for projects with a pipeline runner (§15), `logs/` (Bayesian fits run long enough that you want the job output captured somewhere, §12), `dags/` (when the project uses a causal-DAG identification strategy), `docs/` (four-way split: `briefs/`, `responses/`, `findings/`, `notes/`, meaning dated collaborator-facing incoming, dated collaborator-facing outgoing, dated internal, evergreen reference). Optional: `.graveyard/`, `outputs/archive/zenodo-vN/` (only when depositing, §15).

*Data shape* (web scrape or data-collection pipeline ending in a structured dataset). A representative layout:

```
<workspace-root>/data/example-scrape/
|-- AGENTS.md
|-- CLAUDE.md     -> AGENTS.md
|-- README.md
|-- STATUS.md                      # current state, one screen; rewritten in place
|-- TASKS.md                       # to do / in progress / done; accumulates
|-- pyproject.toml                 # uv project manifest
|-- uv.lock                        # pinned dependency closure (committed)
|-- .python-version                # interpreter version pin (committed)
|-- .venv/                         # virtual env (gitignored; sync-ignored)
|-- .graveyard/                    # transient working copies (gitignored)
|-- justfile                       # command front door: just build
|-- scripts/                       # numbered pipeline scripts
|   |-- 01-collect-source-a.py
|   |-- 02-collect-source-b.py
|   `-- 03-merge.py
|-- data/
|   |-- sources/                   # raw per-source downloads
|   |-- checkpoints/               # resumable collection state (JSON)
|   `-- validation/                # independent validation checks
|-- outputs/
|   |-- eda/                       # first-look EDA reports
|   |-- figures/                   # interactive HTML + PNG
|   |-- reports/                   # assembled PDFs + writeups
|   `-- tables/                    # target lists, summary CSV/XLSX
|-- logs/                          # pipeline progress logs
|-- site/                          # built dashboard (when applicable)
|-- templates/                     # Jinja2 templates for dashboards
`-- docs/
    |-- briefs/                    # dated · collaborator-facing incoming
    |-- responses/                 # dated · collaborator-facing outgoing
    |-- findings/                  # dated · internal: QA, decisions, results
    `-- notes/                     # evergreen reference material
```

Canonical for this shape: the meta files, `justfile` (the command front door, §15, where `just build` / `just scrape` wrap the pipeline), `pyproject.toml` + `uv.lock` + `.python-version` (the pinned Python environment, §15), `scripts/`, `data/`, `data/sources/`, `data/checkpoints/`. The numbered-script convention (`01-`, `02-`, and so on) signals execution order to anyone reading the project, including agents. Recommended: `outputs/` with its four standard subdirectories (`eda/`, `figures/`, `reports/`, `tables/`), `logs/` (scrape scripts almost always run long enough that you want the job output captured somewhere), `docs/` (the same four-way split as the paper shape). Optional: `site/` + `templates/` (only if the project produces a deployable dashboard), `.graveyard/`. The `.venv/` directory exists locally but is gitignored, and when the project sits in a synced folder it is also kept out of sync (§7): the environment contains thousands of files that would otherwise storm a service like Dropbox. For projects whose dependencies include conda-forge / CUDA / Bioconda / R-mixed components, a `pixi` variant (`pixi.toml` + `pixi.lock` + `.pixi/`) replaces the `uv` files, and the rest of the shape is identical.

*Publishing shape* (markdown to pandoc to XeTeX to PDF, for design-controlled standalone publishing). A representative layout:

```
<workspace-root>/publishing/methods-guide/
|-- AGENTS.md
|-- CLAUDE.md             -> AGENTS.md
|-- README.md
|-- STATUS.md                            # current state, one screen; rewritten in place
|-- TASKS.md                             # to do / in progress / done; accumulates
|-- source/                              # markdown source
|   `-- methods-guide.md
|-- assets/                              # images, logos, embedded resources
|-- filters/                             # project pandoc Lua filters
|-- template.tex                         # custom XeLaTeX template
|-- justfile                             # build front door: just build
|-- output/                              # the PDF deliverable (committed)
|   `-- methods-guide.pdf
`-- docs/                                # working notes (recommended)
    |-- briefs/                          # dated incoming
    |-- responses/                       # dated outgoing
    `-- notes/                           # evergreen reference
```

Canonical for this shape: the meta files, `template.tex`, `justfile`, `source/`, `output/` (committed, since the PDF is the deliverable and the exact version matters). Recommended: `filters/` (any pandoc Lua filters the document needs; most documents need none), `assets/` (anything the template embeds), and `docs/` for any project that will accumulate audit reports, draft outlines, collaborator feedback, or decision logs over time; the `briefs/` / `responses/` / `notes/` split mirrors the paper shape, and filenames are `YYYY-MM-DD-<slug>.md`. Trivial one-off documents (CVs, single-shot reports) can omit `docs/` entirely. Filters worth reusing across projects belong in a shared location rather than copied per project. One compatibility note: with TeX Live 2026 and later, a pandoc-driven `template.tex` must define a `none` counter for `\LTcaptype` (newer `longtable` and `caption` releases validate it), or tables without captions fail the build.

The pattern across shapes is the same: `AGENTS.md`, `CLAUDE.md` (the bridge to it), `STATUS.md`, `TASKS.md`, `README.md` are universal. Five files, whatever the shape. Shape-specific files (`METHODOLOGY.md` for papers, the numbered `scripts/` and the lockfile pair for data projects, `template.tex` + `justfile` for publishing projects) come from the shape's template.

# Appendix B. Prompt bank

<!--
STATUS: new · PHASE: 3 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: the prompts written into §7, §9, §10, §11–§16, repeated here verbatim, plus new ones to fill each Part III chapter out to three to five.
COVERS: Three to five prompts per Part III chapter that have worked, with a one-line lead each: when to use it and what the chapter says to check. A first-session pair from §7 opens the bank.
VERIFY: §10's entries were added 2026-09-01 when that chapter was written; its first prompt is the verbatim copy from §10. Keep each repeated prompt identical to its chapter's copy.
-->

Prompts that have worked, three to five per stage, each with the line that says when to use it. Most are repeated from the chapters, so that the bank and the chapter agree; the rest fill the gaps. They are written for the paper of §6 and §7, and the file names are the part to change. Every one ends where the chapter says the checking starts: none of them asks the agent to confirm its own work, and several tell it not to fix what it finds.

## The first session (§7)

*Scaffold a new project.* In an empty folder named for the project, with any loose files dropped in:

> Scaffold this folder as a paper project using the layout in my global file. Sort the loose files into it and show me the plan before moving anything. Create the root files, `.here`, and a `.gitignore` that excludes `data/raw/`, `outputs/models/`, and `logs/`. Initialize git. Do not commit yet.

*Convert an existing folder.* In plan mode, after a compressed copy of the folder exists outside it:

> Inventory every file in this folder with its size and modification date. Propose a table mapping each old path to its place in the paper layout from my global file, with a one-line reason per row, and flag every duplicate (the three figure folders, the two analysis folders) with your reasoning for which is current. Move nothing until I approve the table. Nothing is deleted; duplicates go to `_old/`.

## Bookkeeping (§9)

*Session start.*

> Read `STATUS.md`, then `TASKS.md`, and tell me where we are. Then run `git status` and tell me if anything is uncommitted.

*Session end.*

> Update `TASKS.md`: move what is finished to Done with today's date, and on each In Progress item say what is left, not what was done. If that moved the project's state, rewrite the line of `STATUS.md` it changed, and the date. Then show me `git status` and propose a commit message.

*A rename across the project.*

> Rename the variable `hot_days` to `heat_days` everywhere it appears: scripts, the Stata mirror, comments, the build file, and the README. Use `git mv` for any file whose name changes. Then search the project for the old name and show me the result, and run the build to confirm nothing broke. Report the build output; do not summarize it.

*A status report for a coauthor.*

> From `TASKS.md` and the commits of the last two weeks, draft a one-paragraph status for my coauthor in `docs/responses/2026-09-05-status.txt`: what is done, what is in progress, what is next, with dates. Plain text, no headings. Do not describe anything as done that is still under In Progress.

## Getting data (§11)

*Terms before download.*

> Before downloading anything from IPUMS USA, tell me how it is meant to be accessed (an API, a bulk file, a query tool), whether it needs a key, and what its terms say about redistribution, attribution, and linking. Quote the terms; do not summarize them.

*A fetch with provenance.*

> Fetch the 2018–2022 ACS five-year county estimates for the variables in `METHODOLOGY.md` § Covariates, through the Census API, with the script in `code/_data-acquisition/fetch-acs.R`. Save the response exactly as received to `data/raw/public/acs-5yr-2022.csv`, and add an entry to `data/raw/sources.md` with the request, the date, the vintage, and the file's checksum. Do not modify anything else in `data/raw/`.

*Find the interface before scraping.*

> The county heat tables at this address appear only after the page loads. Before writing any scraper, find out how the page gets its data: look for a documented API, a bulk download, or the request the page itself makes. Report what you find and which rung of the ladder it puts us on. Do not collect anything yet.

*A long collection that can resume.*

> Write `code/_data-acquisition/fetch-stations.py` to download the daily station files listed in `data/raw/public/stations.csv`, one request every two seconds, identifying us with a real user agent and my email. Save each file as received under `data/raw/public/stations/`, record progress in `data/checkpoints/stations.json` so an interrupted run resumes rather than restarts, and add one provenance entry for the batch. Stop and tell me if any request is refused.

## Analysis, simulation first (§12)

*The specification entry.*

> From my description below, draft a dated entry for `METHODOLOGY.md` § Main model with four parts: the estimand; the model, with family, fixed effects, clustering, and weights; the design, with the number of counties, months, and the distribution of hot days from `data/processed/county-month-design.rds`; and the decision rule the paper will use. Mark anything I have not told you with a bracketed question rather than a guess.

*The calibration check.*

> Write `code/_experiments/simulate-main-model.R`. Read the county-month design from `data/processed/county-month-design.rds` (the real covariates, no outcome). For each of three truths (no effect; −1 g per hot day; −15 g), simulate 200 datasets from the model in `METHODOLOGY.md` § Main model, with county and year effects and noise at the scale we saw in the pilot, using seed = the simulation index so runs are reproducible. Fit the planned model (`feols`, two-way fixed effects, county-clustered errors) to each. Report, per truth: bias, coverage of the 95 percent interval, the rate at which the interval excludes zero, and its Monte Carlo standard error. Write the table to `outputs/tables/sim-main-model.csv`. Do not read anything under `data/raw/`.

*A wrong-shape truth.*

> Add a fourth truth to the simulation: no effect below five hot days a month and −15 g per day above five. Fit the planned linear model to it as before and report the same table, plus what the fitted coefficient means when the truth has that shape. Do not change the model; report.

*A power curve.*

> Extend the simulation to effects of −0.5, −1, −2, −3, and −5 g per hot day, 200 datasets each, and report the rejection rate with its Monte Carlo standard error at each, as a table and as a figure in `outputs/figures/working/power-main-model.pdf`. Use the same seeds as the calibration run.

*After a failure.*

> The calibration table shows a false-positive rate of 0.19 under no effect. Do not change the model. List the plausible reasons, in order of likelihood for this design, and for each say what one additional simulation would confirm or rule it out.

## Verification (§13)

*The second implementation.* To a fresh session, or a different agent:

> Working only from `METHODOLOGY.md` § Main model and the data in `data/processed/`, implement the main model in Stata. Do not read anything in `code/`. Write `code/stata/model.do`, run it in batch mode, and save every estimate you report to `outputs/verification/stata-main.csv` with six decimals.

*The comparison.*

> Compare `outputs/verification/r-main.csv` with `stata-main.csv`. For every quantity, show both values, the difference, and whether it is within the tolerance in `METHODOLOGY.md` § Verification. Report; do not change either implementation.

*Assertions where analyses go wrong.*

> In `code/clean-natality.R`, add a `stopifnot()` after every merge and every filter stating the number of rows I expect there, using the counts in `METHODOLOGY.md` § Sample. Add a check that `birth_id` is unique and that `bwt_g` lies in 200 to 7000. Run the script and report which assertions fired.

*A discrepancy to localize.*

> The county-fixed-effects estimate differs between R and Stata at the fourth decimal. List the settings that could account for a difference of that size on a deterministic fit (singleton groups, small-sample corrections, the variance estimator, the reference level, missing-value handling), check which of them differ between the two implementations, and report. Do not change either implementation.

## Writing, revision, and talks (§14)

*The standing instruction.* Prepended to every drafting request:

> Use only what is in `METHODOLOGY.md`, `outputs/tables/`, and the figure captions. Where a claim, a number, or a reference is not in those files, leave a bracketed gap and list it at the end. Do not fill it from what you know.

*The methods section.*

> With the standing instruction above: draft the Methods section in `manuscript/methods.md` from `METHODOLOGY.md` and the scripts in `code/`, describing the model as fitted, including any default the script relies on. Equation first, then the prose. Past tense for what was done. Then produce a table of every number in the draft with the file, row, and column it came from.

*The reviewer response.*

> Draft the response to reviewer 2 in `docs/briefs/2026-09-02-r2-response.md`. Quote each comment in full, then respond. My decisions are in the bullets under each comment in `docs/notes/r2-plan.md`; do not add concessions I did not make. Where the manuscript changed, cite the new line numbers from `manuscript/revision-1.docx`. Lead each response with the answer.

*The Word round trip.*

> Convert `manuscript/revision-1-returned.docx` back to markdown with the coauthor's tracked changes shown, and diff it against `manuscript/revision-1.md`. Sort the changes into substantive (a claim, a number, a method) and typographic, and list the substantive ones with their location. Do not merge anything.

*The talk outline.*

> From `manuscript/paper.md`, propose a twelve-slide outline for a twenty-minute talk: one claim per slide, in the paper's order, with the figure from `outputs/figures/final/` that carries each claim. No bullets from the abstract. I will cut it before you draft any slide.

## Reproducibility and hand-off (§15)

*The fresh-clone check.*

> Clone this repository into a temporary folder, restore the environment from the lockfile, and run the build there. Report every step's outcome. Then compare every file in `outputs/tables/` and `outputs/figures/` with the committed version and list any that differ. Do not fix anything; report.

*The lockfile audit.*

> List every package the scripts in `code/` load and compare the list with `renv.lock`. Report any package that is loaded but not pinned, and any pinned package no script loads. Do not change the lockfile.

*The data README.*

> Write `data/README.md` documenting every column the scripts read from `data/processed/natality-county.parquet`: name, type, units, source per `data/raw/sources.md`, and how it was derived. Read the scripts to find the columns; do not infer from the column names.

*The pre-deposit audit.*

> Audit the deposit snapshot in `outputs/archive/deposit-v1/`. Extract every comment line from every tracked file and read them; do not search for patterns. Report anything in these categories with file and line: absolute paths or home-directory names; any reference to an AI assistant or agent, including in `.gitignore` and commit messages; other people's unpublished words; internal codenames, including strings printed at run time; development history in comments; TODOs and placeholders; and any data file ever added to the history. Then read the documentation against the code and report every claim that does not match. Report; change nothing.

## Literature search and synthesis (§10)

*A search from scratch.* The long one, because the protocol is the point; everything after it is the agent working.

> Run a literature search on how long peer review takes and what it varies with. Write `protocol.md` first and show it to me before running any query: the question, inclusion and exclusion criteria, 2000 onwards, English, and which sources. Search OpenAlex and Crossref, plus PubMed. Save every raw response and log every query with its date. Deduplicate by identifier then by title and year. Screen on title, then abstract, recording a reason from the protocol for every exclusion, and bring me the borderline set rather than deciding it. Then re-fetch every surviving record by its identifier and check the title, first author and year against what you have; anything that will not resolve goes in `unverified.md` with a note of where it came from, and is not cited. Extract one row per included paper with design, data source, coverage, period, which interval was measured, which determinants were examined, the finding, and the stated limitation — leave a cell empty rather than filling it from an abstract that does not say. Emit `references.bib` and `references.ris`.

*Check a reference list you already have.* For a draft written before any of this, or one a coauthor sent:

> Take every reference in `manuscript/references.bib` and resolve each one by its DOI, or by title and first author where there is no DOI. Report three lists: resolved and matching, resolved but with a title, author or year that differs from the entry, and did not resolve anywhere. Check Crossref and DataCite both before calling anything unresolved. Change nothing; I will fix them.

*Extend a search that has run.* When the first round is in and you want to know whether it is done:

> Using the terms that appear in the included set, build a second round of queries and run them against the same sources. Report only records that are new after deduplication against what we already have, and screen them on the same criteria. If the round adds nothing that meets them, say so — that is the stopping rule, and I would rather hear it than have you keep going.

*Rule on the borderline set.* When the agent brings back the ones it wouldn't decide:

> For each borderline record, quote the sentence from the fetched abstract that makes it borderline, and name which criterion it sits on the edge of. Do not recommend include or exclude. I will decide, and then you record my reason in the screening log.

# Appendix C. The terminal in two pages

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: quickstart Appendix B "Terminal Concepts", cut to what this guide's readers meet (no TTY history, no subshells, no aliases, no login shells)
COVERS: For readers who choose the CLI path: opening a terminal on Mac and Windows, the working directory and paths, running a script, output to a log, environment variables, starting the agent in a folder, six git commands, WSL2 in one paragraph.
VERIFY: Claude Code's sandbox needs WSL2 on Windows (checked 2026-08-27); both CLIs otherwise run natively on Windows per the docs consulted for §4 and §5. Re-check native-Windows support at release.
-->

The desktop app needs none of this. If you run Claude Code in a terminal, you need about this much and no more: the vocabulary is old and odd, but the set of things you actually do is small.

## The terminal and the shell

A *terminal* is a window that shows text and takes typed commands; a *shell* is the program inside it that reads each command, runs it, and prints the result. On a Mac the terminal is the Terminal app (Command-Space, type Terminal) and the shell is `zsh`; on Windows it is Windows Terminal (or PowerShell from the Start menu) and the shell is PowerShell. The line ending in `%`, `$`, or `>` is the *prompt*: the shell waiting for a command. Type one, press Return, read what comes back.

Every command runs in a *working directory*, the folder the shell is currently in. `pwd` prints it (on Windows too); `cd heat-birthweight` moves into a folder, `cd ..` moves up one, and `ls` (Windows: `dir`, or `ls` in PowerShell) lists what is there. A *path* names a file by its folders: `code/model.R` is relative to the working directory, `~` is your home folder, and a path beginning with `/` (Windows: `C:\`) is absolute. Nearly everything in this guide assumes the working directory is the project folder, and the first command in any session is the `cd` that gets you there.

## Running things

`Rscript code/model.R` runs an R script and prints what it prints; `stata-mp -b do model.do` runs a do-file in batch mode and writes its log beside it (§13). If the shell answers *command not found*, the program is installed but its folder isn't on the `PATH`, the list of folders the shell searches for commands; on Windows, R's installer doesn't add its folder, and the agent can fix that when asked. Output can be sent to a file instead of the screen: `Rscript code/fit.R > logs/fit.log 2>&1` writes both the normal output and the errors to the log, which is how a long fit (§12) leaves a record the agent can read later. Control-C stops a running program.

An *environment variable* is a named value the shell hands to every program it starts, and it is where a key lives (§11): `export CENSUS_API_KEY=...` in the shell for this session, or a line in R's `.Renviron` file so every R session has it; on Windows PowerShell, `$env:CENSUS_API_KEY = "..."`. The agent refers to the variable by name and never needs the value.

## The agent, and git

Start the agent in the project folder: `cd` there, then `claude`. Everything the agent reads and writes is relative to that folder, and the brief it loads is the one there (§6). `/exit` or Control-C twice leaves it.

Six git commands cover this guide. `git status` says what has changed since the last commit. `git diff` shows the changes. `git add -A` followed by `git commit -m "message"` records them as one commit (§9). `git log --oneline` lists the commits. `git restore code/model.R` puts one file back to its last committed state, the undo of §5. And `git clone <address> folder` copies a repository from GitHub into a new folder, which is the first step of the fresh-clone check in §15. The rest of git the agent can drive, with you reading the prompts.

## Windows

Both CLIs run on Windows itself. One thing doesn't: Claude Code's sandbox (§5), which needs WSL2, a Linux environment inside Windows with its own terminal and files. If you want the sandbox, install WSL2 (`wsl --install` in an administrator PowerShell, then restart), open the Ubuntu app it adds, and do everything in this appendix there; the commands are then the Mac ones, and the project folder lives on the Linux side. If you don't want the sandbox, stay in PowerShell and use the deny rules and Manual mode (§4, §5) as your boundaries.

# Appendix D. Glossary

<!--
STATUS: adapt · DRAFTED: 2026-08-27 (moved out of Appendix C on 2026-09-16 to
stand as its own appendix at the end). Built from the terms the guide defines at
first use; keep it in step with those definitions.
-->

*Agent.* An LLM given the ability to read files, run commands, and edit files in a folder, and a loop in which to do so (§2). Distinct from a chat assistant, which only returns text.

*Assertion.* A one-line check in a script that stops it when a stated expectation fails: `stopifnot()` in R, `assert` in Stata and Python (§13).

*Auto mode.* A Claude Code permission mode in which a second model, the *classifier*, reviews each action against your request and blocks the ones it judges unsafe (§4).

*Batch mode.* Running Stata from the command line on a do-file, with the output written to a log instead of a window (§13).

*Brief.* The project's `AGENTS.md`: what the project is, where things live, how to run it, what is off limits (§6). Claude Code reads it through a `CLAUDE.md` that imports it.

*Build.* The one command that produces every output the paper reports from the scripts and the data (§15). *One-command build* means the same.

*Calibration.* Checking what a model says under a known truth before trusting what it says under an unknown one: recovery of known parameters, and the rate at which the decision rule fires when it should and when it shouldn't (§12).

*Commit.* A recorded snapshot of the project's tracked files, with a message; the unit of undo (§5, §9).

*Context window.* The agent's working memory for a session: everything it has read so far, finite (§6, §18).

*Decision rule.* What the paper will claim and on what basis: an interval excluding zero, a posterior probability above a threshold (§12).

*Deny rule.* A permission setting that refuses an action in every mode, whatever the agent decides (§5). The form for restricted data is a deny on reading the path (§16).

*Diff.* The line-by-line difference between two versions of the files; what you review after a task (§9).

*Effort.* How much the model reasons before it acts; a setting with levels (§4).

*Environment variable.* A named value the shell passes to every program it starts; where an API key lives (§11, Appendix C).

*Estimand.* The quantity the analysis is trying to estimate, stated before the model is fitted (§12).

*Global file.* The file the agent reads in every project, holding how you work (§6). The project file is its counterpart, and is listed in this glossary under *brief*.

*Import.* In a `CLAUDE.md`, a line beginning with `@` that pulls another file in at the start of the session (§6).

*LLM.* Large language model: the AI that generates the text, and what a chat assistant and an agent both run on (§1). Which LLM, and at which version, is what this guide calls the *model* (§4, §15).

*Lockfile.* A committed list of every package and its version, from which the environment can be rebuilt: `renv.lock`, `uv.lock` (§15).

*Model.* Two senses. The specific LLM an agent runs on, a tier such as Sonnet or Opus, pinned to a version when a result must be reproduced (§4, §15); and a *statistical model*, the specification fitted to data (§12).

*Monte Carlo error.* The noise in a result that comes from random draws (a bootstrap, a Markov chain), against which two sampling-based results are compared (§13).

*Permission mode.* The setting that decides which actions the agent may take without asking (§4).

*Plan mode.* A permission mode in which the agent reads and drafts a plan but edits nothing until you approve it (§4).

*Prompt.* Two senses. A yes-or-no question the agent puts to you before an action, with the action shown (§4, §5); and, in Appendix B, a request you type to the agent.

*Provenance.* The record of where a data file came from, when, by what request, and under what terms (§11).

*Raw data.* Data as received, never modified; everything derived from it is rebuilt by code (§7, §11).

*Sandbox.* A fence the operating system puts around a command, limiting where it may write and which hosts it may reach (§5).

*Session.* One conversation with the agent, from start to `/exit`, with its own context window (§18).

*Usage window.* On a subscription, the allowance a session spends: a rolling five-hour window plus a weekly cap (§17).

*Version control.* Git: the system that records every change to the project's files and can undo any of them (§5).

*WSL2.* Windows Subsystem for Linux, a Linux environment inside Windows; where Claude Code's sandbox runs on a Windows machine (Appendix C).
