---
title: Doing Research with AI Agents
title-page: |
  Doing Research\
  with AI Agents
version: "1.6.1"
---

<!--
OUTLINE STUB (2026-08-26). Each chapter carries a comment with:
  STATUS  adapt | mixed | new     — how much is repurposed vs written fresh
  PHASE   1–3                     — writing order (see TASKS.md); Phase 1 backs the 19 Nov talk
  SOURCE  where the material comes from (tool-chain = agentic-ai-toolkit; quickstart = agentic-ai-quickstart;
          deck / content bank = agentic-ai-research-workflow)
  COVERS  the chapter's contents, from the scoping brief
  VERIFY  claims that date quickly and must be checked at writing time
Repurposing rules for adapted material: AGENTS.md § "Source material and repurposing rules".
Part III chapters usually share one skeleton as H2s: What to ask for / What the agent does / What you check / What goes wrong. §13 instead uses the two verification questions; §15 adds a section on the LLM in the analysis.
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

You may already use AI chat for writing and for code. A chat assistant runs on a *large language model* (LLM), the AI that generates the text; an agent runs on the same LLM, with access to *tools*: the ability to read your files, run your code, and write results. Your job moves from transcriber to supervisor: you describe the goal and its constraints, let the agent work, and check the result rather than each step. §2 explains how tool access lets an agent check its work against your project.

## Where it pays to use an agent

The best places to use an agent are those parts of the research lifecycle that are time-consuming or tedious for you to do yourself.

*Bookkeeping.* Modern research is files and folders. Agents are excellent project managers. They can design project structures, organize files, keep a running to-do list and status snapshot. Delegating that maintenance can leave more time for the research itself (§9).

*Simulation.* Simulate data from known parameters and see whether your model recovers them. Run a power analysis by simulation instead of a formula that doesn't fit your design. The agent can do much of the implementation, and the known truth lets you assess the implemented method under the scenarios you examine (§12).

*Verification.* Have the agent re-implement your analysis in a second language (Python if you work in R; R if you work in Stata) and compare the numbers. Agreement helps establish that the implementations follow the same specification; a disagreement gives you a problem to investigate that you may not have found by reading the code (§13).

*Writing and literature.* An agent can search, fetch, screen, and tabulate faster than you can; ask it to record where each reference and claim came from, and check the sources you cite (§10, §14).

What these four areas have in common is that something other than the agent's own confidence tells you whether the work is right: a truth you built into the simulation, a second implementation, a reference you opened, a folder listing you can read. Choosing tasks with that property is the core of this guide, and Part III is organized around it.

## What agents don't do

Agents don't know your field's conventions. Your estimands, your journal's style, the folder layout you have used for a decade, your coauthor's insistence on Stata: none of that is in the model. Part II addresses these gaps: you write your conventions down once, in a file the agent reads at the start of every session.

Agents don't know whether your data are sensitive. They cannot infer the permissions in your IRB protocol, data-use agreement, or business-associate agreement from a folder name. Establish which inputs the service may process, document that decision, and make prohibited inputs inaccessible through the actual execution routes (§5, §16).

Agents can sound equally confident when an answer is correct and when it is invented. Check the result against evidence, such as the source data or an independently implemented analysis, rather than relying on the tone of the response (§13, §18).

Your job is the same one you'd do with a human research assistant: specify the task, delegate it, check the result, and keep the assistant away from the restricted drive. The habits transfer, but at far greater speed: you can have many agents running tasks around the clock.

::: {.needspace height="19cm"}
:::

## Four pillars

Everything in this guide serves one of four principles, and each principle maps to the chapters that discuss it.

![](figures/four-pillars.svg){#fig-four-pillars fig-alt="The four pillars: be a supervisor; teach agents your way; verify and reproduce; keep it bounded — four panels connected top to bottom, each naming the chapters that carry it." above="6pt" below="6pt"}

## Non-traditional research outputs

The examples in this guide are papers and talks, and most research still ends in one or the other. Some projects end in something else: a dashboard that lets colleagues explore your results, an interactive tool, or a bot that answers questions from a body of documents. The practices here carry over: the conventions (§6), the project structure (§7), and version control and the data rules (§5, §16) hold whatever the output is.

A running tool also has to be kept up, fixed when it breaks, and supported for the people who use it, often long after the grant that paid for it has ended, so decide who owns that upkeep before you build. And a tool that interacts with people raises questions of its own: what it does with what users tell it, whether it stores that, and who those users are. For a bot that children might use, or that gives advice someone could act on, establish the applicable ethics, privacy, and human-subjects requirements with your institution before involving users. Whether IRB review is required depends on the project and intended use.

## How to read this guide

Part I orients: what an agent is (§2), where to run one (§3), the modes it runs in (§4), and the boundaries that keep it safe (§5). Part II discusses the two things that make an agent useful and reliable, the files it reads (§6) and the shape of a project (§7), and then how to package a workflow you repeat (§8). Part III walks the stages of a research paper, from project setup to archival repository (§9–§15). Most chapters there use four recurring headings, so you can skim: *What to ask for*, *What the agent does*, *What you check*, *What goes wrong*. Verification (§13) separates implementation checks from methodological justification and statistical performance. Part IV is judgment: confidentiality (§16), cost (§17), and failure modes (§18). The appendices hold adaptable starter files (A), prompts (B), and a glossary (C). Institutional access is in §3; terminal instruction is in the toolkit.

If you have never run an agent, read §2 and the boundaries in §5, then complete the harmless first session in §3. Use §4 to understand the modes. Add project instructions from §6 and turn to the research task you need. You can return to project structure (§7) and skills (§8) when they become useful; neither is a prerequisite for the first exercise. If you already use agents, start at §6 or the relevant Part III chapter. Read §16 before exposing any confidential material.

This guide uses Claude Code through the Mac desktop app, with git and the research language you already use. Worked code examples use R; Stata and Python remain useful analysis and verification languages. Harvard-specific details appear in short sidebars. The companion, [*Extending Your Agent's Toolkit*](https://dss-agentic-toolkit.pages.dev/), covers additional tools and optional terminal use. Appendix C defines the terms used here.

# 2. What an agent is

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-26 (first draft; needs a read-through)
SOURCE: content bank concepts/three-paradigms.md (folded in; module points back here); deck "The shift, in one idea", "What changes when AI acts in your project", "Why it doesn't just make things up" (think/act/observe loop figure); tool-chain §10 introduction
COVERS: Chat vs agent. The think/act/observe loop and why the agent "sees the real error". Three ways of working: messenger, driver, supervisor.
-->

A chat assistant and an agent can use the same language model. In the chat-only workflow considered here, you supply the relevant material and carry answers back to your project. An agent has tools that can work directly with project files. Products can combine these capabilities; the useful distinction is what access the assistant has and what work you delegate.

## Chat versus agent

Consider what happens when a chat assistant writes you a cleaning script. It has never seen your data, so you have to tell it the column names. You paste the script into RStudio and run it. It fails on line 14, because the ID column is character and the script treated it as numeric. You copy the error back into the chat, describe the column, and get a corrected script. Three or four rounds later it runs. Every round, you carried information across the gap: the file to the model, the model's code to the file, the error back to the model. The chat assistant may not have been wrong about anything it could see. It just couldn't see the actual file you were working with.

An agent closes that gap because it can use *tools* that allow it to read and write files and execute commands on your computer. Given the same task, it opens the data file, reads the first rows, notices the ID column is character, writes the script accordingly, runs it, reads the output, and fixes what failed. You see the finished script and the log of what it did. You have stopped conversing with an assistant and started delegating to a process that acts in your project.

An agent also changes what you can sustain across a long project, not just within one task. A long conversation can lose important context, even when the product offers memory or summarization. An agent can maintain explicit project records: a running to-do list, a status snapshot, and decision notes (§6, §9). These provide a source to consult when a conversation is summarized or replaced. Those files outlast the session, so a fresh agent the next day can read them and pick up where the last one left off.

## The loop: think, act, observe

An agent works through a repeated sequence: choose an action, carry it out with a tool, and use the result to decide what to do next. This lets it test and revise its work within the project.

![](figures/think-act-observe.svg){#fig-think-act-observe fig-alt="The agent's loop: three boxes, Think, Act and Observe, with a repeat arrow returning from Observe to Think." above="6pt" below="6pt"}

*Think* means deciding on the next step. *Act* means performing an operation in your project: reading a file, running a script, listing a folder, or editing a line. *Observe* means reading what the tool returned, such as file contents or an error message. The agent uses that information to decide on its next action. This feedback can catch errors that would survive in an untested chat answer. Its value depends on what the agent inspects and which checks it runs.

A script can finish without an error even though a model produced a convergence warning, a regression answers the wrong research question, or a merge dropped a third of the rows. If the agent checks only whether the script ran, it can miss these problems. Give it the estimand, design, and data-use restrictions in the project instructions (§6), and specify checks that address the results you need (§12, §13).

An agent asked to make a failing script work may suppress an error message, drop rows that will not merge, or relax the check that was failing. The script then runs, but the original problem remains or the analysis has changed. When an agent reports that it fixed an error, inspect how it did so (§18).

## Three ways of working

You can use AI in three ways, each giving you a different role in the work. A single product may support more than one of these workflows.

| | Chat window | Editor autocomplete | Agent |
|:--|:--|:--|:--|
| Where it lives | a browser tab | RStudio, VS Code, Positron | your project folder |
| Project context | what you paste | the open files | reads the whole project |
| Runs your code | no | no | yes |
| Sees real errors | no | partly | yes |
| Your role | messenger | driver | supervisor |

As a *messenger*, you supply the context and carry answers back to your project by hand. This works for a question that needs no project access, such as a statistics question or a paragraph to rephrase. The assistant cannot check anything you have not supplied. As a *driver*, you accept or reject suggestions inside your editor as you write. This works for code you are actively writing and reading.

As a *supervisor*, you delegate a task with a defined outcome, then review what the agent did and decide what to keep. Your attention shifts from producing the work to directing and checking it. That shift is the focus of this guide. You can supervise several agents in the same way: have one critique another's plan, or compare independent implementations against a known answer (§4, §13).

Describe the outcome and constraints, including any procedure the agent must follow. Ask for a plan when important choices remain unresolved (§4), then let the agent carry out the agreed work. Check the result using evidence such as the resulting files, a simulation with a known answer, an independent implementation, or a source you opened. Specify the project folder and permitted inputs in advance, check the access controls, and keep recoverable versions of the files (§5, §16).

## The tools are programs on your machine

An agent is a large language model with access to tools that enable it to read, edit, and write files, as well as run programs available within its execution environment and permissions. What the agent can do therefore depends on which tools you have available. The analysis language you use (e.g., R, Python, Stata) and `git` are the two tools covered in this guide. But there is a rich ecosystem of command line tools that cover other jobs a research project throws up, and installing one gives the agent something new it can do:

| The job | The kind of tool | Examples |
|:--|:--|:--|
| Find files or text fast | a fast searcher | `ripgrep`, `fd` |
| Turn analyses into a paper or deck | a document engine | Quarto, pandoc |
| Run or queue long jobs | a runner, a queue | `just`, `pueue` |
| Re-run only what changed | a pipeline runner | targets, Snakemake |
| Reproduce your analysis environment | a lockfile manager | `renv`, `uv` |
| Query data and API responses | a data processor | `jq`, `yq` |
| Keep API keys out of your files | a secrets store | 1Password |

You need none of these to start, but the companion tool-kit guide provides a catalog of tools that will make your research more efficient and reproducible.

# 3. Where to run it

<!--
STATUS: mixed · PHASE: 3 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26
SOURCE: Claude desktop quickstart; HUIT Claude guidance; two-guide content audit
COVERS: Supported Mac app and institutional account; prerequisites; a harmless first session with a checkpoint, edit, review, undo, and restart.
VERIFY: Documentation checked 2026-09-26 at https://code.claude.com/docs/en/desktop-quickstart and https://www.huit.harvard.edu/claude. This walkthrough has not yet been observed end to end with a new reader. The author's last recorded app observation was v2.2553.1 on macOS (2026-09-21), with no integrated terminal pane. Recheck labels and record the app version and Harvard account tier during the reader trial.
-->

This chapter gets you started with Claude Code in the Claude desktop app on a Mac. It covers the account and software you need, then takes you through a practice session: creating files, reviewing an edit, undoing it, and resuming work in a new session. You describe the work in the app; the agent can run your existing R, Stata, or Python installation without you opening a terminal.

## Before opening a project

Use your institutional account and a folder whose contents you are permitted to share with that service. A local session runs commands on your Mac, but the agent sends material it reads to the hosted model. “Local” describes where the tools run; it does not mean the model stays on your computer. Read §5 before using a research folder, and §16 for the full data decision.

The starting requirements are the Claude app, git from Apple's Command Line Tools, and the analysis language you already use. The exercise below needs only the app and git. If either is missing, follow your institution's setup instructions before continuing; no other tool is needed here.

> **Harvard, September 2026.** Request Claude through [HUIT's Claude page](https://www.huit.harvard.edu/claude), using the form for your school or unit. Standard is the usual starting tier; Premium provides more capacity for sustained use. Confirm that the app is signed into the Harvard account. HUIT approves Claude Chat and Code for data up to Level 3 and states that submitted data are not used for model training. Your project's consent, DUA, IRB, or other terms may impose narrower limits (§16).

## A first session you can undo

Use this exercise to learn the controls before opening a working research project. Experienced users can skip it and go to §6 or the research task they need.

### Open an empty folder

In Finder, create a folder called `agent-practice` in a local location outside your shared research folders. In Claude, select *Code*, choose *Local*, and select that folder. Choose *Manual* for this demonstration so that you can see a proposed edit before it happens; §4 explains the modes, including the Auto mode I recommend for ordinary work. These controls follow the [desktop getting-started instructions](https://code.claude.com/docs/en/desktop-quickstart).

Give the agent this request:

> This is an empty practice folder. Create `notes.md` with exactly these three lines: “Meeting: Friday.” “Bring: draft figure.” “Open question: label units.” Create a short `CLAUDE.md` saying that this folder contains invented practice notes, that only files in this folder are in scope, and that nothing should be published or sent to another service. Initialize git, review which files will be tracked, and make an initial local commit. Do not set up a remote repository.

Read the proposed changes and approve them. Open `notes.md` in the app or Finder and check the three lines. Ask the agent to show the commit identifier, the list of tracked files, and whether any changes remain uncommitted. You should have a small folder and a recorded starting version. If git asks for a name and email, supply the identity you use for research work; the agent should not invent them.

### Make and inspect one change

Now ask:

> In `notes.md`, change Friday to Monday and turn the open question into a checkbox. Keep the other wording. Show the changes, but do not commit them yet.

The proposed edit should affect only those two lines. Once you approve it, open the changed file and the app's change view. A *diff* shows what was added and removed; §9 explains how to read one. Check the file itself as well as the agent's summary.

If you need to interrupt an action, use the stop button. You can also send a correction while the agent works. Stopping does not reverse edits already made, so ask what changed before deciding how to continue. These controls and the change view are described in the [desktop reference](https://code.claude.com/docs/en/desktop).

### Undo, then keep an edit

Practice recovery while the file is disposable:

> Restore only `notes.md` to its initial committed version. Leave every other file alone. Show the restored contents and confirm that this file has no remaining changes.

Open it and check that Friday and the original question are back. Then repeat the Monday-and-checkbox request. This time, once you have reviewed the result, ask the agent to commit only that edit. A commit records an approved version locally; it does not publish anything.

### Resume with a fresh session

Ask the agent to create `TASKS.md` with a short record of the completed exercise and one open task: add the figure's units when you provide them. Commit that file. Start a new Code session on the same folder and ask it to read `CLAUDE.md` and `TASKS.md`, then summarize the next task without changing anything.

The new session should identify the missing units rather than invent them. You have now supplied a task, reviewed an edit, restored a file, and resumed from a written record. These are the same habits used in the larger research examples.

# 4. Modes

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-26 · REVISED: 2026-09-26
SOURCE: Claude desktop reference, permission-modes and model-config documentation; author-confirmed app-only scope
COVERS: All permission modes, planning and critical review, model and effort; app operation only.
VERIFY: Checked 2026-09-26 against https://code.claude.com/docs/en/desktop, /permission-modes and /model-config. Availability depends on account, model and managed policy. No terminal launch instructions retained.
-->

Three choices affect a session: how much the agent can do without asking, whether it should plan before acting, and how much reasoning to spend on the task. This chapter explains how to make those choices in the app and when to change them for different tasks. Access limits (§5) and verification (§13) remain necessary whichever settings you choose.

## Permission modes

A *permission mode* determines when an action needs approval. Use the mode selector beside the app's prompt box. As of September 2026, the everyday choices are:

| Mode | What it changes | When it is useful |
|:--|:--|:--|
| Manual | Usually asks before edits and commands, subject to existing rules | Learning the controls or deciding individual actions |
| Accept edits | Allows file edits and common file operations; other commands may prompt | Work where edits are routine but command execution needs attention |
| Plan | Explores the project and proposes an approach before changing the analysis | Work with unresolved scope or consequential choices |
| Auto | Reviews actions automatically and permits routine work with fewer interruptions | Most daily work within established boundaries |

The names and availability follow [Claude's permission-mode documentation](https://code.claude.com/docs/en/permission-modes). An institution may restrict the choices. Existing allow and deny rules also affect what happens, so Manual is not a promise to ask about every possible action, and Auto is not unrestricted access.

Two additional modes are worth understanding. *Bypass permissions* removes most permission checks; its availability is controlled by the app settings or your organization. It requires a separately isolated environment and is not the recommended mode for an ordinary local research project. *Don't ask* refuses actions that would otherwise need approval. It is intended for unattended use and has no app selector; the toolkit covers that terminal workflow. Neither is a substitute for setting the access limits in §5.

For normal work, I use Auto after defining the permitted files and actions and checking the safeguards. I then review the result. Repeatedly approving routine edits adds little if I stop reading the prompts. For a genuinely consequential action, such as publishing results or changing a data-access boundary, I want a deliberate decision. If Auto is unavailable, use the modes your institution provides.

A more cautious mode does not authorize the use of restricted data. Establish whether the service and the intended processing are permitted before opening those files (§16).

## Plan mode

Use Plan when the agent needs to make choices that you should review before implementation. Select it in the app and describe the result, constraints, and relevant files. Ask for a plan that names the proposed changes, unresolved questions, and evidence it will use to check the work.

Read for assumptions, not just steps. Has it chosen the right input file? Does it intend to preserve the original sample? Has it silently replaced an expensive model with an easier one? Correct those choices, then authorize implementation and select an execution mode.

For a difficult plan, give the proposal to a fresh session and ask it to look for omissions and counterarguments. Supply the research question and relevant literature as well as the plan. A critic that sees only the proposed answer can accept its assumptions too readily. You decide which criticisms require changes; agreement between agents is useful scrutiny, not methodological validation (§13).

Routine work within a clear specification does not need a separate planning round. If you have already supplied the transformation rules, the agent can implement them and show the checks.

## Model and effort

The *model* is the LLM doing the work. *Effort* controls how much reasoning it uses. Pick the model in the app's model menu; use the effort control there when it is offered. Available models, effort levels, and defaults vary by account and model, so use the labels in your installation rather than memorizing a list. The [model documentation](https://code.claude.com/docs/en/model-config) explains the current options and usage implications.

![](figures/two-gears.svg){#fig-two-gears fig-alt="Model capability and reasoning effort can both increase as a task moves from a specified procedure to an open-ended problem." above="6pt" below="6pt"}

A routine formatting change rarely needs the same resources as designing a calibration study or investigating conflicting estimates. I start consequential research work with a capable model and high effort, then reduce them for clearly specified, repetitive tasks. More reasoning can improve a difficult implementation, but it cannot supply evidence the agent has not read or make an unsuitable specification appropriate.

Check the account's usage display before launching several substantial tasks (§17). Model names change, and a newly offered model may have different usage terms. A faster response is useful only if the result still meets the checks you set.

# 5. Boundaries

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26
SOURCE: Claude permissions, sandboxing and security documentation; two-guide content audit
COVERS: Data access, allow/ask/deny, sandbox limits and exceptions, harmless checks, git recovery, proportionate container use.
VERIFY: Permissions and sandbox documentation checked 2026-09-26. The maintained configuration example belongs to the toolkit; this chapter does not claim that file rules alone contain arbitrary subprocesses.
-->

Before delegating work, decide what the agent may read, change, and send elsewhere. An agent can misunderstand a request or follow misleading instructions embedded in a document. This chapter explains how permission rules and sandboxing limit its access, how to check those limits, and how version control helps you recover earlier versions of files.

![](figures/four-boundaries.svg){#fig-four-boundaries fig-alt="Four safeguards with different limits: permission rules, approval prompts, operating-system isolation for sandboxed commands, and recovery of tracked files through git." above="6pt" below="6pt"}

## Decide what the agent may see

Selecting a project folder tells the agent where to work. It does not, by itself, prevent access to other readable files on the computer. A file's contents can reach the hosted model when a tool opens it or a script prints it, even if you never attach the file to a message.

Begin with public, synthetic, or explicitly approved material. Keep restricted inputs in storage the agent's process cannot access, unless you are working in an environment and service approved for that processing (§16). A folder elsewhere on the same drive may still be readable. An encrypted volume that is not mounted, or a separate account without permission to the data, can provide a stronger separation.

Preserving originals and preventing disclosure are different rules. Approved raw data may be read by an analysis, but should not be overwritten. Restricted data may need to be unreadable to the agent altogether. Derived data and aggregate tables need their own disclosure decision; neither is automatically safe to expose.

## Allow, ask, and deny

Permission rules determine which recognized actions are allowed, require approval, or are refused. Use them to keep routine work moving and make consequential actions explicit. A useful project policy permits ordinary work on approved inputs, asks before publishing or expanding access, and refuses destructive operations that would remove the recovery history.

These rules are evaluated by the agent software, not merely read as instructions by the LLM. Their coverage still has limits. A file rule can block the built-in file tools and recognized file commands without blocking every script that opens the same path indirectly. The [permissions documentation](https://code.claude.com/docs/en/permissions#read-and-edit) explains this distinction. The toolkit's *Keeping the agent's reach in proportion* section supplies the maintained configuration example and explains how to combine it with the sandbox.

Do not approve an unfamiliar request just to keep work moving. Ask what it will change and why the existing access is insufficient. Repeated approval requests may indicate a missing routine permission; they do not justify allowing every command. Changes to security settings deserve a separate review because they affect later tasks too.

## What the sandbox adds

A *sandbox* restricts the programs running inside it at the operating-system level. Depending on its configuration, it limits file reads, writes, and network access, including access by subprocesses. It adds protection beyond matching the command the agent proposed.

The qualification is important: those limits apply to sandboxed execution. A command exempted from the sandbox, a queued job launched by another service, or a separately connected tool may have different access. Read restrictions also have to be configured; do not assume the selected folder is the only readable location. See [Claude's sandbox documentation](https://code.claude.com/docs/en/sandboxing) and the toolkit's configuration section.

From the app, ask the agent to report which settings apply to the project, whether its command tool is sandboxed, and which exceptions exist. It should inspect the effective configuration, not infer protection from the mode's name. If a required control is unavailable in your app or institution's configuration, use only material safe for that environment while IT resolves the access requirement.

## Check the boundary without sensitive data

Use harmless test files to check a configuration before relying on it. For example, create a file containing an invented phrase in a path intended to be unreadable, and another approved file that the agent should read. Test both the direct file tool and a small script that tries to read the denied test file. The expected result is a refusal for the denied path and success for the approved one. Test write protection on a disposable file too.

Ask for the actual success or failure messages. If a call prompts to bypass the restriction, decline it; retrying outside the sandbox would test a different boundary. These checks can reveal a misconfiguration, but they do not certify every tool or future session. Repeat them when access settings or execution routes change. Never use a real confidential file as the test.

## Keep a recoverable version

Before a task, ask the agent to show any existing changes. Review them and record a checkpoint of the files you intend to track. After the task, inspect the diff and the outputs, then commit the accepted work. This makes it possible to distinguish the agent's changes from edits already in progress.

You can ask for a single file to be restored, as in §3, or for a completed task's commit to be reversed. Name exactly what should be recovered and have the agent show the proposed scope first. §9 explains the review in more detail.

Git protects files it tracks. It does not recover ignored data, reverse an upload, or substitute for a backup. Keep source data protected separately, and do not give routine tasks permission to erase uncommitted work or rewrite shared history.

## When a container helps

A *container* supplies a separate software environment and can limit what a task reaches. It is useful for running an unfamiliar replication package or preparing an environment to hand to a collaborator. Its protection depends on the folders mounted into it, credentials passed to it, network access, and privileges. Anything made available through those routes remains available to the code inside.

The toolkit's container section explains the setup and its limits. A container is not permission to expose restricted data or to disregard the source of code you run. For ordinary tasks, start with approved inputs, the configured safeguards, and a recoverable checkpoint; add a container when the task needs that extra separation.

<!-- ===================== PART II — TEACH THEM YOUR WAY ===================== -->

# 6. The files the agent reads

<!--
STATUS: mixed · PHASE: 1 · DRAFTED: 2026-08-26 (first draft; needs a read-through)
SOURCE: tool-chain §12 "AGENTS.md / CLAUDE.md hierarchy", "Context economy", "Anti-patterns" (hub-and-spoke figure, simplified), §17b "Task planner"; content bank framings/agent-metadata-my-way.md (folded in; module points back here); deck "You write your conventions once", "What goes in them"
COVERS: Global vs project. AGENTS.md / CLAUDE.md; the ancillary files (writing, coding, modeling); STATUS.md (the current-state snapshot, read first) and TASKS.md (the task record); METHODOLOGY.md and PLAN.md; four files, four roles. What goes where. Context economy. Anti-patterns (the STATUS.md / TASKS.md seam under Duplicated state). Two worked examples: a 26-line global file for a researcher, and a project brief for a paper (full text in Appendix A).
VERIFY: Instruction file locations and imports checked against https://code.claude.com/docs/en/memory on 2026-09-26. Terminal setup removed; templates are adaptable examples.
-->

An agent will not know your preferred folder layout, coding conventions, or journal requirements unless you tell it. This chapter shows how to save those instructions in files the agent can read across sessions, and how to keep project status, tasks, and methodological decisions available without repeating them in every conversation.

## Start with one project file

A first project needs a short instruction file, not a complete personal system. In the app, ask the agent to create `CLAUDE.md` with the project's purpose, the files it may use, the current analysis entry point, and the choices it should bring back to you. Review the file yourself. Add `TASKS.md` when you need a record of unfinished work, as in §3.

For an existing lab project, describe the conventions it already uses. There is no need to rename its folders or adopt a second language. A useful first rule might be: “Run `analysis.do` using the approved teaching dataset; preserve the existing variable names; report unmatched records instead of dropping them.”

The rest of this chapter shows how to extend that small start. Global rules become useful when the same correction recurs across projects. Separate status and methods files become useful when a task list no longer explains the project adequately.

## Two layers

Global files hold instructions that apply across your projects: code style, prose voice, statistical defaults, and file naming. A project file adds the details a new research assistant would need for this project: its purpose, where the files are, how to run the analysis, and what is off limits. Keep these files current, and check that the agent follows them; loading instructions does not guarantee compliance.

![](figures/hub-and-spoke.svg){#fig-hub-and-spoke fig-alt="A global box holding AGENTS.md with three convention files linked to it, above a local box of three project types, with arrows running from global to local." above="6pt" below="6pt"}

These are plain Markdown files in ordinary folders. You and your collaborators can read and revise them as project documentation, and future sessions can consult them when the original conversation is no longer available.

## Where the files live

Claude Code reads `CLAUDE.md` from the project folder. A personal file at `~/.claude/CLAUDE.md` supplies rules across projects; the tilde means your Mac home folder. You can ask the agent to create or edit these files from the app, then inspect the changes. The [memory documentation](https://code.claude.com/docs/en/memory) explains how project, personal, and subfolder instructions are loaded.

The examples in this guide use `AGENTS.md` for the project brief so that the instructions can also be reused with other tools. If you choose that convention, ask the agent to create a `CLAUDE.md` containing this single line:

```
@AGENTS.md
```

Claude loads the imported text. Edit `AGENTS.md` as the one maintained copy. You can also keep everything directly in `CLAUDE.md` when starting out; the import is an organizational choice, not a requirement for useful work.

## What goes in the global file

Include your working conventions: folder layout and naming, coding style, statistical conventions (estimands, priors, interval types), and citation and prose style. Add standing requirements about access, software versions, and disclosure. For example, you might require the agent to use only approved inputs, record package versions, and follow the journal's disclosure policy. Keeping these requirements in the global file makes them available across projects.

Here is an optional global file for a researcher who uses R. Adapt the software and conventions to your own work; Appendix A repeats it for copying.

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
- Preserve the project environment. Record package versions before changes.
- Use the existing lockfile tool; see the toolkit for adding one.
- Comment what a block is for, not what each line does.

## Statistics
- State the estimand before fitting. Report every estimate with an interval.
- Assess the method with a calibration plan before substantive use (§13).
- Fits longer than a few minutes run outside the session, not inside it; I read the log when it finishes.

## Writing
- Short sentences. Point first, then the qualification. Prose, not bullets.
- Methods: the equation first, then the prose that explains it.
- American spelling. Oxford comma.

## Access and limits
- Read only inputs approved for this service. Never expose restricted files.
- Public-data acquisition may add approved new files; preserve originals.
- Never overwrite original data. Rebuild derived files from recorded scripts.
- Never rewrite shared git history.
- Ask before publishing, adding a service, or exceeding the agreed resources.

## Every session
- Read `STATUS.md`, then `TASKS.md`, at the start.
- Update `TASKS.md` before finishing; rewrite `STATUS.md` if the state moved.
```

Write instructions that can be checked. For example, you can inspect a script for `here::here()` calls; “keep paths tidy” leaves the agent to decide what tidy means. The *Access and limits* section documents the rules, but does not enforce them: written instructions can be missed or overridden by other context. §§5 and 16 explain the additional access controls and their limits.

## What goes in the project file

The project file answers the questions a new RA would ask in the first hour: what is this, where is everything, how do I run it, and what must I not touch. Add the conventions that hold for this project only (the coauthor's software, the journal, the variable-naming scheme) and pointers to the files that hold the rest. Here is a project file for a paper; Appendix A has the full text.

```
# heat-birthweight

Paper with J. Smith: county-level heat exposure and birthweight, US 2010–2020.
Target: Demography. Decisions live in METHODOLOGY.md, the current state in
STATUS.md, open tasks in TASKS.md.

## Where things live
- Restricted microdata is held separately in approved storage, unavailable here.
- `data/raw/public/`: ACS and PRISM downloads; `data/raw/sources.md` logs each.
- `data/processed/`: derived files. Use `synthetic-natality.parquet` here.
  It contains invented records, not a de-identified extract.
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
- Work only from the synthetic file and approved public downloads above.
- Do not substitute real natality inputs or request access to restricted storage.
- Never send any file under `data/` to a web search or an external service.
```

Keep the project file focused on instructions and references to other files. Put the analysis history in `METHODOLOGY.md`, the current state in `STATUS.md`, open work in `TASKS.md`, and the collaborator-facing introduction in `README.md`. This avoids repeating information that will need to be updated elsewhere.

## The other files

Add the following files when the project needs them. None is required on day one.

*Convention files.* When one topic in the global file outgrows a screen, move it to its own file alongside (`WRITING.md`, `CODING.md`, `MODELING.md`) and leave a one-line pointer behind: "For prose voice, see `WRITING.md`." The agent reads the pointer every session and the file only when the task calls for it. Two rules make this work: name the file for what it contains, so the agent can choose it from the name alone, and make each one self-contained, so it can be read without the others.

*`STATUS.md`.* Summarize where the project stands now in about one screen of text. Include the date, project stage, main result so far, work underway, and anything waiting on someone else. Record facts the agent would otherwise have to find, such as the current sample size, model specification, and working data file. Update the affected lines when these facts change; keep the history of completed tasks in `TASKS.md`. Have the agent read `STATUS.md` first in each session, before the task list. It also gives you a quick answer when a coauthor asks how the paper is going.

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

*`PLAN.md`.* Set out the analysis sequence and its milestones when the project is large enough to need a separate plan. Keep explanations of methodological choices in `METHODOLOGY.md` and the completion status of individual tasks in `TASKS.md`, so a change does not require updating the same information in several files.

## Context economy

An agent's *context window* is the limited amount of material it can use at once: your messages, file contents, and tool results. Unneeded instructions take up space alongside the material relevant to the task, and long instruction files can be harder to follow consistently. Claude Code's own guidance is to keep a `CLAUDE.md` under 200 lines.

Keep the global file to rules that apply across tasks. Put detailed guidance in separate files and tell the agent when to read each one. These directions can sit together at the top of the global file:

```
For prose voice and style -> see WRITING.md
For code style -> see CODING.md
For statistical modeling -> see MODELING.md
```

The agent then knows where to look. When the task is "rewrite this section of the manuscript," the agent reads `WRITING.md` and leaves `CODING.md` alone. One distinction matters here. A *pointer* ("see `WRITING.md`") is read on demand. Claude Code's `@` *import* is loaded at the start of every session, whatever the task. Use the import for the one-line bridge between `CLAUDE.md` and `AGENTS.md`, and pointers for everything else.

## Memory

Claude Code also saves notes across sessions about your corrections, preferences, and project context. This feature is called auto memory and is on by default. Ask the agent to show these notes and check for stale assumptions. If a note conflicts with an instruction file you maintain, have the agent follow the file and correct the note. Put rules you need to rely on in the instruction file rather than leaving them only in auto memory.

## Anti-patterns

*Vague rules.* "Write clean code" and "organize files sensibly" produce generic behavior. Say the concrete thing, with an example: the pipe, the path function, the naming pattern.

*The growing file.* A brief that gains a paragraph per session until it is 800 lines, most of them narrative. Move the reasoning to `METHODOLOGY.md`, the sequence to `PLAN.md`, to-dos to `TASKS.md`, and the current state to `STATUS.md`; save the README narrative for the `README.md`; keep the brief to rules and pointers.

*Duplicated state.* The same fact in the brief, in `STATUS.md`, in `TASKS.md`, and in memory. When it changes, one copy will be missed. Pick one home per kind of fact and point to it from the others. The pair to watch is `STATUS.md` and `TASKS.md`, because finishing a task usually changes the state. Record the completion once, in `TASKS.md`; then rewrite the line of `STATUS.md` it changed, rather than copying the entry over. A `STATUS.md` that starts to keep a history has become a second task list, and the agent now has two to reconcile.

*Pasting whole files.* Give the agent the path to a script it can access, so it can read the current version and return to it later. Pasted text can become stale after an edit and occupies space in the conversation. A saved path also lets the agent reopen the file after the conversation has been summarized (§18).

*Stale memory.* The agent follows an old note about a file that has been renamed or a decision you have reversed. Review its notes occasionally and correct or remove outdated entries.

*A rule without enforcement.* An instruction to avoid a restricted path is useful documentation. It needs effective access controls as well, including subprocess restrictions where relevant (§5, §16).

## Writing your first file

Start with the small project file described at the beginning of this chapter. After each task, add a correction only if it will matter again. Ask the agent to reread a changed instruction file, or start a fresh session. Promote recurring project rules to the global file once you know they apply more widely.

# 7. Project structure

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: ~/.config/agents/TEMPLATES.md § Paper Project Template (the shape only, simplified); tool-chain §12 "Workspace structure", "Project shapes"; quickstart §7; deck "Modern research is folders on a computer", "See it: scaffold a project, live"; ~/.config/agents/skills/scaffold/SKILL.md (the walk-through)
COVERS: The messy-folder problem. The paper shape and the reason for each directory (raw data read-only; code tiers; outputs; docs; manuscript). Scaffolding a new project: the /scaffold walk-through, which is also the talk demo. Converting an existing folder. Dropbox and OneDrive caveats.
VERIFY: Scope revised 2026-09-26. Platform-specific sync configuration belongs in the toolkit; the manuscript teaches a local-folder starting path and adaptable project structure.
-->

When a project has several folders labeled “final,” an agent may choose the wrong script or figure because it lacks the history you remember. This chapter shows how to make the current inputs, code, and outputs easy to identify. It provides a layout for new projects and a procedure for reorganizing an existing folder when needed.

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

You may remember which files are current, but an agent needs that information recorded. To update a figure in this folder, it must distinguish three sets of figures. To fix the cleaning script, it must identify which analysis folder is in use. Without a record of which data files are originals, it may mistake one for a derived file it can replace. Duplicated scripts cause another problem: a correction in one copy does not reach the other.

A documented layout (§6) helps both you and the agent find the right files. It also makes it easier to review changes (§9), record the analysis sequence (§15), and identify which inputs need protection (§5, §16).

## The paper shape

Here is a fuller layout for the example paper. Use it as a reference when a project needs these parts; retain an established lab layout if it already makes the inputs, current code, and outputs clear.

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
|   |-- _experiments/      # exploratory work; promote required checks below
|   |-- validation/        # checks required for the reported analysis
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

*Raw data is read-only.* `data/raw/` holds data exactly as received. Preserve those files and save new downloads as new, dated files (§11). An analysis reads the saved inputs; downloading a new release is a separate task. State this rule in `AGENTS.md` and configure the access controls described in §5. Keep any data the agent must not see inaccessible to its process: read-only access prevents changes but still permits disclosure.

Scripts create the files in `data/processed/` from the raw inputs. If a derived file is wrong, fix the script and rebuild it. Editing the derived file directly leaves an unrecorded correction that the next run will overwrite.

*Code in three tiers.* `_startup/` holds what every script needs: the packages, the options, the data loading, the functions you reuse. Every analysis script begins by sourcing it, which is why the agent can run any one analysis without the others. The analyses themselves sit at the top level of `code/`, one script per stage or question, named for what they do rather than numbered, so a new one can be added without renumbering. `_final/` builds the manuscript's figures and tables from the saved results and runs last. The underscore on the tier folders sorts them to the top of the listing and leaves the analyses in alphabetical order beneath.

*Outputs split by whether the exact version matters.* Figures and tables are committed to version control: the version in the submitted manuscript is a fact you will need again at revision. Saved model fits are large and rebuildable from code and data, so they aren't. `logs/` is where long runs (§12) write their output so the agent, and you, can read what happened; not committed either.

*Documents, dated or evergreen.* `docs/briefs/` holds what came from collaborators and what you shared with them, with a date prefix (`2026-08-19-coauthor-comments.md`) so the folder sorts into a timeline. `docs/notes/` holds reference material that stays true across revisions, undated. `docs/references/` holds the papers. `manuscript/` holds the paper itself and, when the time comes, one folder per submission.

Record the project's intended source files in version control from the first day so their changes can be reviewed and restored (§5). What git carries is code and text. The `.gitignore` excludes `outputs/models/`, `logs/`, `data/processed/` when it is large, and `data/raw/` from the first day (Appendix A.5): pushing a tracked file to a remote copies it to that service. Include data only when its sharing terms permit this (§16).

Appendix A.6 has a fuller paper template, with layouts for data projects and publishing projects alongside it. A talk or report usually needs fewer parts: source and output folders, a template, and the relevant project records. Use consistent locations for inputs, scripts, and outputs where you can, and document any differences so the agent can find the files without guessing.

## Keep an existing project usable

You do not have to migrate a working project to use an agent. First document its current entry point, input locations, and the output you consider the baseline. Put the code and appropriate documentation under version control, then give the agent one bounded task. Compare the result with that baseline before considering a larger reorganization.

A shared workspace and consistent naming can make projects easier to find. They are optional conventions. The essential requirement is that the agent can identify the current files without guessing from names such as “final” or “new.”

## Scaffolding a new project

For a new project, start with the folders you need now. After checking the data decision in §5, select the project folder in the app and ask:

> Set up this folder for the paper described in my notes. Create a short `CLAUDE.md`, a `README.md`, and a `TASKS.md`, plus folders for approved inputs, code, and outputs. Use my existing naming conventions. If loose files need moving, show the proposed destinations first. Preserve originals. Set up git and an ignore file that excludes restricted inputs, credentials, and rebuildable caches. Show the resulting tree and proposed tracked files before committing.

Check the file list, the input locations, and the project description. Correct any inferred facts. The expected result is a small project you understand, with one place to start the analysis and a record of unfinished work. Add the fuller structure above only as it becomes useful.

## Converting an existing folder

Reorganizing an existing project can break scripts and make current files harder to identify. Use Plan mode (§4) and agree on the changes before moving anything.

Nothing is deleted. Files move; duplicates are set aside in a holding folder (`_old/`, excluded from git), not removed. Raw data is moved, never rewritten. And before anything moves, a compressed copy of the whole folder is made, outside the folder, and its name written into `TASKS.md`.

Ask the agent to list every file with its size and date, then propose a table with each old path, its intended destination, and a one-line reason. Pay particular attention to duplicates and overlapping folders. Have the agent compare modification dates and references in the current manuscript, then explain which files it proposes to keep in use. Review those choices yourself. Save the approved table in `docs/notes/` as the migration log before any files move.

After the move, scripts may still refer to old locations. Ask the agent to update those references to paths from the project root, then run the scripts needed for the current analysis and report any failures. Investigate each failure: the script may need a package, refer to a missing input, or belong to an analysis you no longer use. Keep everything in `_old/` until the manuscript's figures rebuild from the new layout (§15).

One folder is often shared with a coauthor who won't adopt the structure. That is fine. Their material arrives into `docs/briefs/`, dated; the manuscript goes to them as Word and comes back as Word (§14); and the analysis folder is yours.

## Dropbox and OneDrive

Most research folders are cloud-synced, and two things go wrong when a project of this shape lives in one.

The first is volume. `.git/`, an R package library (`renv/`), a Python environment (`.venv/`), saved model fits, and logs contain thousands of small files or large binaries that change on every run. A sync client tries to upload all of it, every time, and a project can stall for hours while it does. The second is worse: two machines, or you and a coauthor, editing the same `.git/` through sync corrupts it, because the sync client and git both believe they own the files.

For a first project, a plain local folder avoids these conflicts. Keep backups and use your institution's approved route for sharing data. If you use Dropbox, ask the agent to follow the toolkit's *Review and recover tracked files* guidance for excluding generated folders before they are populated. Do not retrofit the setting casually onto a large existing environment.

Treat a shared drive as a separate collaboration route, with a clear owner for each working file. Cloud synchronization is not a substitute for git history or a tested backup, and two machines should not write the same repository metadata through it.

# 8. Repeatable workflows

<!--
STATUS: mixed · PHASE: 3 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §10 "Patterns and extension points worth knowing inside Claude Code" (skills, hooks); ~/.config/agents/skills/ (scaffold, eda, dag, review-plan, review-analysis, targets, pueue); the Claude Code skills and hooks docs, fetched 2026-08-27
COVERS: Skills and slash commands: what to package once you have done a thing three times. Examples from my own set. Hooks in one paragraph.
VERIFY: checked 2026-08-27. Claude Code: skills at ~/.claude/skills/<name>/SKILL.md (personal) and .claude/skills/<name>/SKILL.md (project); frontmatter name and description; /name to invoke, automatic when the description matches; custom commands merged into skills; the body loads only when used; the Agent Skills open standard; the desktop app lists skills under "/"; Cowork and cloud sessions do not read personal skills. Hooks: Claude Code hooks block in settings.json, events PreToolUse (exit 2 blocks), PostToolUse, Notification, SessionStart, Stop. Re-check at release. (Codex skills/hooks specifics archived 2026-09-15.)
-->

Once a procedure works and you find yourself repeating it, consider saving it as a *skill*: a named set of instructions the agent can load for that task. This chapter explains what to put in a skill, how to use it from the app, and when an automatic check may help. Skills are optional until you have a procedure worth reusing.

## What a skill is

A skill is stored in a folder containing a file called `SKILL.md`. The file begins with a short header naming the skill and describing when to use it. The rest of the file gives the procedure, much like the requests in §§9–15 and Appendix B. In the app, select the skill from the slash menu, or ask for it by name. The agent may also select it when the request matches its description. Unlike the project instructions, which are loaded every session, a skill's full procedure is loaded only when it is used (§6).

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

For Claude Code, ask the agent to place the skill in the appropriate location. Each skill is a folder named for it, holding `SKILL.md`:

| | Where |
|:--|:--|
| Every project | `~/.claude/skills/` |
| This project (committed) | `.claude/skills/` |
| Run it | `/name`, or automatically |

The Claude app lists skills under the same slash menu. A skill that needs more than instructions (a report template, a script it should run) keeps those files in the same folder and refers to them by name.

## What to package

Repeating a procedure a few times is a useful signal that it may deserve a skill. First confirm that its inputs, outputs, and checks are stable enough to reuse. The candidates in this guide are already written: the session rituals (§9), a fetch with its provenance entry (§11), the calibration check (§12), the second implementation and its comparison (§13), the number-traceability table (§14), the fresh-clone check and the pre-deposit audit (§15). Each prompt in Appendix B is a skill body waiting for a header.

Keep project-specific facts, such as file locations and data restrictions, in the project instructions. A reusable skill should tell the agent to consult those instructions. Similarly, refer to your global conventions rather than copying them into each skill. This lets you reuse the procedure across projects and update a rule in one place.

My own skills illustrate the kinds of procedures you can save. `/scaffold` creates a project in the paper layout described in §7. `/eda` produces a dated report on a dataset's types, missingness, distributions, correlations, and outliers. `/dag` draws a causal diagram from a written graph and computes the adjustment set. `/review-plan` critiques an analysis plan before implementation, while `/review-analysis` audits a completed analysis for issues with identification, convergence, and project conventions. I also use `/targets` and `/pueue` for pipelines and long jobs, whose tools are covered in the companion. Each skill began as a repeated request and includes checks specific to its task.

When a skill produces an unsatisfactory result, revise the instructions or checks that allowed the problem. Keep the main procedure to a screen or two, and put longer templates or checklists in files beside it.

## When an automatic check helps

A *hook* runs a configured action at a supported event, such as before a tool call or after an edit. It can help run a quick check or notify you that the agent needs attention. Whether it can block an action depends on the event and configuration; a check after an edit cannot prevent that edit from having occurred. Hooks also need testing and protected configuration. They do not replace the access limits in §5.

Most readers can begin by asking for the appropriate checks at the end of a task. Add automation when a repeated omission justifies it, and avoid a hook that launches a full expensive analysis after every small edit. The toolkit covers tool-specific configuration; Claude's [hooks documentation](https://code.claude.com/docs/en/hooks) describes the current event behavior.

<!-- ===================== PART III — THE WORK ===================== -->

# 9. Bookkeeping

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §17 (TASKS.md; four files, four roles), §12 (STATUS.md read first; the STATUS.md / TASKS.md seam), §15 "Reviewing what the agent changed" (the idea, not the pager tooling), §1b; ~/.config/agents/AGENTS.md § Task Management (session start and end)
COVERS: Session start and end. STATUS.md then TASKS.md at the start; TASKS.md as the task record, STATUS.md rewritten only when the state moves. README, status, renames, migrations. Reviewing what changed in the app's diff view. Commit habits.
VERIFY: App diff route checked against Claude desktop documentation 2026-09-26; no terminal interface taught here.
-->

Returning to a project after a few days often means reconstructing what was finished, what remains open, and which files changed. An agent can maintain those records as it works. This chapter covers starting and closing a session, keeping project documentation current, reviewing changes, and recording completed work in git.

## What to ask for

Give the agent a routine for starting and closing each session, along with instructions for keeping the documentation current during the work.

*At the start.* Have the agent read the project records before proposing work. `STATUS.md` describes the current state, `TASKS.md` lists open and completed tasks, and git records changes to tracked files:

> Read `STATUS.md`, then `TASKS.md`, and tell me where we are. Then run `git status` and tell me if anything is uncommitted.

Check the agent's summary for unfinished work, then state the session's goal and ask for it to be added under *In Progress*. Refer back to that goal if the agent begins making unrelated changes.

*At the end.* Before you close the session, not after:

> Update `TASKS.md`: move what is finished to Done with today's date, and on each In Progress item say what is left, not what was done. If that moved the project's state, rewrite the line of `STATUS.md` it changed, and the date. Then show me `git status` and propose a commit message.

Review the changes as described below, then make a commit or authorize the agent to make one (§5). Updating the records before you leave helps the next session recognize completed work and resume anything unfinished.

*During the work.* Ask the agent to update the README whenever the project structure or run instructions change. Renames should follow your conventions (§6). Plan changes that affect several files, such as moving a folder or renaming a variable used across scripts (§4). Have the agent use `git mv` for tracked file moves and check that their history remains available. Record reorganizations a collaborator needs to know about in a dated note in `docs/notes/`.

Use these records to draft status reports. For example, ask for a paragraph for your coauthor based on `TASKS.md` and the last two weeks of commits, saved in `docs/responses/`. Check the draft against those records before sharing it.

*Commits.* Record each completed task in a commit with a message explaining what changed and why. Before delegating a substantial task, review and commit existing work so you can distinguish it from the agent's changes. Decide whether the agent may commit on its own or must ask each time. Require approval before it pushes commits to a remote repository, because that sends the tracked files to another service.

## What the agent does

The agent reads the project records and summarizes the next work. As tasks progress, it updates the task list and any affected documentation. After renaming a file, it searches for references to the old name, including in the build file and comments, and updates them. It then runs the build (§15), reports the result, and drafts a commit message from the changes.

## What you check

Open the app's changed-files view and inspect the diff. Ask the agent to identify any staged changes or earlier uncommitted work so you can distinguish this task from work already in the folder. Focus your review on consequential changes: model code, data handling, tables, and the build sequence. Review the affected outputs as well. Ask about any files the task had no reason to touch. Use the verification checks in §13 and the rerun in §15 alongside this review.

Pick an item the agent moved to Done and confirm the claimed result: the file exists, the script ran, or the figure changed. Writing the code is only part of a task that also requires running it and checking the output.

Before committing, check that the proposed commit contains one completed task, an accurate message, and the expected files. Include data only if its sharing terms permit it (§16), and exclude generated model files and logs unless the project deliberately preserves them. A `.gitignore` does not stop tracking a file already committed; ask the agent to identify that case before proceeding (Appendix A.5).

After a rename, have the agent search the project for references to the old name and show that `git log --follow` can still trace the renamed file's history. Investigate any remaining references.

Test the README by following its run instructions without asking the agent to fill in missing steps.

## What goes wrong

*Done means started.* The agent marks a task finished when the code is written, not when it ran clean. Ask for the evidence: the build output, the listing, the number in the table.

*The task list becomes a diary.* Long accounts of each session make open tasks hard to find. Keep `TASKS.md` to task entries. Record the reasons for analytical decisions in `METHODOLOGY.md`; use commit messages to explain changes to files.

*The bundled commit.* Three tasks in one commit, so the undo for one is the undo for all. Or the opposite: the agent commits mid-task, and the diff you review is half a change. A commit per task, at the end of the task.

*The rename that missed one.* A reference to the old name remains in the Quarto document, main script, coauthor's do-file, or plotting code. Search for the old name after the change, then run the build to check that the analysis still works.

*The stale README.* It still describes `analysis_v2_USE_THIS`. Structure changes and the README doesn't, because nobody asked. Make "update the README" part of every structural task.

*The unasked tidy.* Asked to fix one function, the agent reformats every file it opened, and the real change is buried in two hundred lines of whitespace. The rule for the global file: change only what the task requires, and never reformat a file the task didn't need to edit.

*The session that didn't read.* A fresh session repeats or reverses earlier work because it did not consult the project records. Begin by having the agent read the status and task files, even when the next task seems obvious.

# 10. Literature search and synthesis

<!--
STATUS: mixed · PHASE: 3 · DRAFTED: 2026-09-01 (read through against WRITING.md the same day: 14 em-dashes and 3 of 4 bolds removed, the document's rate being 3 em-dashes in 31k words)
SOURCE: the /litsearch skill (~/.config/agents/skills/litsearch/) and its first real run; docs/briefs/2026-08-31-litsearch-skill-scope.md (the design decisions and what the field already has)
COVERS: Protocol before searching. Search, screen, extract into an evidence table. The fabricated-citation problem and the rule (open every reference). Identifier resolution against Crossref, DataCite, PubMed, arXiv. Handoff as .bib and .ris, no reference manager assumed.
VERIFY: the run described here was made on 2026-08-31 against OpenAlex, Crossref, PubMed and arXiv, on the question behind papers/worthington-journal-review-times; 15 queries, 604 records retrieved, 507 after deduplication, 37 included, 11 borderline, and the counts in the table are that run's. The three failures reported are all from it: the retrieval cap that stopped the run, the DataCite record reported as a probable fabrication, and the preprint pair deduplication missed. Rerun and re-check the counts if the protocol changes.
-->

An agent can help search for papers, screen records, and organize findings, but it can also invent citations or misrepresent a source. This chapter explains how to specify the search, obtain a record of the screening decisions, verify sources, and request a synthesis whose claims can be traced to the papers themselves.

First specify the kind of search. A reading list for background and a systematic review have different coverage requirements. The run below illustrates discovery and screening for a research project; it is not a universal review protocol. If completeness supports the paper's claim, involve a librarian or information specialist and follow the relevant review standard. The [Cochrane search chapter](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04) explains the importance of coverage, search design, and information-specialist input.

## What to ask for

*The protocol, before searching.* Give the agent the question, inclusion and exclusion criteria, date range, languages, sources to search, and stopping rule. Have it draft the protocol from your description, then review and approve it before any query runs. The written protocol lets you inspect the agent's screening decisions and repeat the search.

Vagueness is the thing to fix here rather than later. "Papers about social mobility" isn't a protocol; it names a topic, not the criteria that decide what is in and out. If the agent can't tell from your question whether a single-journal study counts, it will guess, and the guess will be invisible in the output.

*Verify each source.* Usually the quickest route is to resolve its DOI, PubMed ID, or arXiv ID and compare the title, authors, and year. Legitimate books, reports, and historical material may have none of these. For those, record a stable catalog or publisher record, a copy or location a reader can inspect, and who checked it. Unresolved records remain flagged until reviewed; lacking an identifier is not itself a reason to exclude relevant evidence.

*Which sources.* Name them, because coverage is a claim you will have to defend. OpenAlex can help discover records across fields, and Crossref can help check DOI metadata. Ask the agent to consult their current access requirements and limits rather than assume that every request is anonymous or free. Add PubMed for anything health-related, arXiv for preprints, and SSRN, RePEc or NBER where your field lives there. Web of Science and Scopus need a license, so if you have one, say so and use it; if you don't, record their absence as a gap rather than pretending the search was exhaustive.

*What you want back.* Ask the agent to save its work in a dated directory: the protocol; every query with its source and date; unmodified responses; a screening log with a reason for every exclusion; and an evidence table summarizing the included studies. Keep unresolved records in a separate file for review, called `unverified.md` in the example below. Request the bibliography in both `.bib` and `.ris` formats so it can be imported into different writing and reference tools.

> Run a literature search on how long peer review takes and what it varies with. Write `protocol.md` first and show it to me before running any query: the question, inclusion and exclusion criteria, 2000 onwards, English, and which sources. Search OpenAlex and Crossref, plus PubMed. Save every raw response and log every query with its date. Deduplicate by identifier then by title and year. Screen on title, then abstract, recording a reason from the protocol for every exclusion, and bring me the borderline set rather than deciding it. Then re-fetch every surviving record by its identifier and check the title, first author and year against what you have; anything that will not resolve goes in `unverified.md` with its source and a proposed manual-verification route. Do not cite an unverified record. Do not exclude a relevant book or report solely because it lacks an identifier. Extract one row per included paper with design, data source, coverage, period, which interval was measured, which determinants were examined, the finding, and the stated limitation. Leave a cell empty rather than filling it from an abstract that does not say. Emit `references.bib` and `references.ris`.

Reviewing the protocol first lets you correct the scope before the search produces hundreds of records. Recorded exclusion reasons let you check whether the agent applied that protocol. Empty evidence cells identify information that still needs to be extracted; guessing would conceal that unfinished work.

## What the agent does

The agent searches the specified sources and saves the returned records. It uses those records for screening and extraction, so you can inspect the material behind its decisions. A general answer about the literature, without retrieved sources, does not provide that record.

Run on the question behind a real paper (how submission-to-acceptance times vary across fields, publishers, and journal prestige), the stages produced this:

| stage | n |
|:--|--:|
| retrieved, across 15 queries | 604 |
| set aside for lacking an identifier in the original run | 6 |
| after deduplication | 507 |
| excluded at screening | 459 |
| borderline, referred back for a ruling | 11 |
| included | 37 |

The original run used an identifier-only inclusion rule. Under the broader practice recommended here, its six unresolved records would need manual verification before any exclusion on that basis. These counts describe the historical run, not a rerun with that correction.

Of the 37 included records, twenty-five were screened using a retrieved abstract and twelve using only the title because no abstract was returned. A column in the evidence table records which text was available for each decision, so the title-only records can be identified for further review.

The exclusions aren't a black box either. They resolve into the protocol's own categories: 424 with no duration outcome at all, 26 measuring the wrong interval (grant review, cancer treatment delay, time to tuberculosis diagnosis), 7 with no data, and 2 single-journal reports.

The verification script then retrieves each remaining record by its identifier and compares the title, first author, and year with the saved record. Saving this check as a script lets you rerun it when the search results change.

## What you check

*The verification output.* Read the saved report. It should state how many records were checked, which comparisons were made, and which records remain unresolved.

*Unverified records.* Inspect `unverified.md` and decide how to check each unresolved source. Require the verification report to state the unresolved count even when it is zero; an absent file does not tell you whether the check ran. Confirm that unresolved records have not been presented as verified evidence.

*The evidence level, row by row.* Any row screened on title alone is a paper nobody has read. Refer it for abstract or full-text retrieval rather than treating a missing abstract as evidence of ineligibility. A title alone cannot support a synthesis claim.

*Whether the counts reconcile.* Account for retrieved records, duplicates, exclusions, borderline cases, unresolved records, and included studies. If the counts do not add up, ask the agent to identify the missing or double-counted records.

*Every reference you cite.* Open the sources used in your manuscript and check the passages supporting its claims. Matching a citation to a real record does not establish that the paper supports the agent's summary.

*Coverage and exclusions.* Give the agent a few known relevant studies and check whether the search recovered them. Inspect a sample of exclusions, especially borderline cases and records without abstracts. Check cited sources for corrections or retractions. A query expansion returning nothing new is useful information, but it does not establish completeness.

### From full texts to a synthesis

Ask for a claim-to-source table before prose: the proposed claim, the source, the supporting page or passage, and the limitation or disagreement that constrains it. Distinguish “the study did not report this” from “the agent has not extracted it.”

For example, imagine two *invented teaching sources*, A and B, supplied as full texts:

| Source passage | Extracted evidence | Limit on the claim |
|:--|:--|:--|
| A, p. 4, Results | Median submission-to-first-decision time: 42 days across all submissions | Includes desk rejections |
| B, p. 6, Table 2 and note | Median submission-to-acceptance time: 110 days among accepted papers | Excludes rejected papers; uses a later endpoint |

A defensible synthesis would read: “The two studies measured different stages of review. A reported a median of 42 days to first decision across submissions (p. 4), while B reported 110 days to acceptance among accepted papers (p. 6, Table 2). These figures do not establish that B's journals reviewed comparable submissions more slowly.”

The source labels and numbers above are invented solely to show the requested output. In your project, each label should resolve to an actual verified full text. If papers disagree on a comparable result, preserve that disagreement and identify the relevant differences; do not ask the agent to smooth them into a consensus.

> Using only the verified full texts, draft a synthesis of the findings relevant to our question. First give a table linking each claim to its supporting page, table, or passage. Distinguish reported limitations from information not yet extracted. Preserve disagreements and differences in outcome definitions or samples. Flag corrections, retractions, and sources unavailable in full text. Leave unsupported claims out of the draft and list them as open questions.

## What goes wrong

*The citation that doesn't exist.* An invented citation can have correct formatting, a real journal name, and authors who publish in the field. Inspecting the citation alone may not reveal the problem. Resolve the identifier where one exists, then compare the actual source with the citation. For other material, inspect the catalog or publisher record and the source itself.

*The accusation that was wrong.* In the run above, the verifier reported a real and directly relevant paper as a probable fabrication. Its record was registered with DataCite, but the verifier had asked only Crossref. A failed lookup can also reflect an unavailable service or incorrect metadata. Investigate the failed check before accepting a fabrication verdict or excluding the paper.

*An arbitrary retrieval limit.* The protocol for that run capped retrieval at 300 records. The agent stopped when retrieval reached 604, as instructed, but the cap was then removed. Limiting the search to the first records returned would make inclusion depend on each source's relevance ranking. Define the search through the question, criteria, and stopping rule. A record count can trigger a progress review without becoming a reason to discard the remaining results.

*The duplicate that survived.* Deduplication matched on identifier, then on title and year, and still let through a preprint and its published version, because the two titles differ by a single word. Both would have been counted. Cross-field and cross-repository work is full of these, and the fix is a human eye on the borderline set rather than a cleverer rule.

*Screening from memory.* The agent excludes a paper using its recollection instead of the retrieved text. Require it to cite the text supporting each screening decision and record whether it used the title, abstract, or full text.

*The empty column read as a finding.* In the run above, the limitation column was empty for all 37 rows because no retrieved abstract stated one. Those blanks identify information still to be extracted from the full texts; they do not show that the studies had no limitations.

# 11. Getting data

<!--
STATUS: mixed · PHASE: 2 · DRAFTED: 2026-08-27; prose clarity pass 2026-09-27
SOURCE: tool-chain §11 "The scraping ladder"; ~/.config/agents/CODING.md "Web scraping / data acquisition: method ladder" (the cross-cutting hygiene); tool-chain §15 "Data and artifact boundary"
COVERS: Acquisition method, current access terms, source provenance, original-response preservation, and credential handling. No browser installation or API-key setup instructions.
VERIFY: Current source links checked 2026-09-26: Census API user guide, IPUMS USA terms, CDC WONDER restrictions. Removed the product/access table; current requirements must be checked per acquisition.
-->

Downloading data for many places or time periods can involve repeating the same steps on a website. An agent can automate that work. This chapter explains how to choose a download method, record where each file came from and the conditions on its use, and preserve the downloaded files unchanged.

## What to ask for

*Access and terms of use.* Before authorizing a download, ask the agent to find how the source provides its data and what its terms allow you to do with them. One option is an *API*: an interface through which a script can request data directly from the source.

> Before downloading anything from IPUMS USA, tell me how it is meant to be accessed (an API, a bulk file, a query tool), whether it needs a key, and what its terms say about redistribution, attribution, and linking. Link the current terms and quote the short clauses relevant to this request. Separate those clauses from your interpretation, and flag anything requiring my decision.

Decide whether the proposed download and your intended use are permitted before asking the agent to proceed.

*Choosing a download method.* Ask the agent to consider these four methods in order and use the first that is permitted and can retrieve the data you need.

1. *A structured source.* Look for a documented API or bulk export. The address a webpage uses to request its data, visible in the browser's network panel, may also let a script request the data directly. Check that the source permits this use; a documented interface usually gives clearer instructions than extracting data from a displayed page.
2. *Fetch and parse.* If there is no suitable data interface, download the webpage and extract its data with a script. This works when the data are already included in the downloaded page.
3. *A scripted browser.* Use a script to control a browser when the data load only after the page opens, or when obtaining them requires logging in or scrolling. These scripts can be slow and can break when the site changes. Where possible, capture the data the page requests rather than extracting them from its display.
4. *The agent's own browser.* Use the agent's browser for a one-off task, to explore how a site supplies its data, or when a person needs to complete part of the interaction. For recurring or bulk work, use the exploration to develop a permitted script with saved inputs, outputs, and failure handling.

For the first three methods, save the acquisition script in `code/_data-acquisition/` and commit it so the download can be repeated. Actions the agent takes through its own browser do not by themselves produce a script you can rerun.

*The sources.* Ask the agent to use current documentation for the source you need. For example, consult the [Census API guide](https://www.census.gov/data/developers/guidance/api-user-guide.html), [IPUMS terms](https://usa.ipums.org/usa/terms.shtml), or [CDC WONDER data-use restrictions](https://wonder.cdc.gov/datause.html). Record the relevant access and sharing terms with the download. An undocumented endpoint visible in a browser is not automatically an authorized collection route.

*The provenance log.* Ask the agent to record each download in `data/raw/sources.md`, introduced in §6. Each entry identifies the file's source and contains:

- The exact request: the API call, extract definition, or saved query from the web tool.
- The download date and the data release or version.
- The relevant conditions on use, including redistribution and attribution.
- Who downloaded the file and its checksum. A checksum is a fingerprint of the file's contents that can be used to detect changes.

Have the agent write the entry as part of the download:

> Fetch the 2018–2022 ACS five-year county estimates for the variables in `METHODOLOGY.md` § Covariates, through the Census API, with the script in `code/_data-acquisition/fetch-acs.R`. Save the JSON response exactly as received to `data/raw/public/acs-5yr-2022.json`, and add an entry to `data/raw/sources.md` with the request, the date, the vintage, and the file's checksum. Do not modify anything else in `data/raw/`.

*Preserve raw data.* Save each download exactly as received. Cleaning belongs in a separate script that reads from `data/raw/` and writes to `data/processed/` (§7). If cleaning goes wrong, you can rerun it using the saved original. If you download the data again, save a new, dated file beside the old one: later releases may change the numbers, and you need to know which release the paper used.

During acquisition, allow the agent to add the files you have authorized and update the provenance log. During analysis, protect the originals from changes. A rule that prevents all writes to `data/raw/` would also block the approved download and log entry, so the access settings must match the task (§5).

## What the agent does

The agent reads the source's documentation and writes the acquisition script using the method you agreed on. The script pauses between requests and retries failed requests. It identifies itself to the source with a user-agent string that names the script, and an email address where the source asks for one.

The script saves each response before extracting data from it, so an extraction error can be fixed using the saved response. For a long collection, it records progress so an interrupted run can resume without downloading everything again. It also writes the provenance entries. If the agent uses a browser to investigate the site, it reports whether it found a permitted way to request the data through a script.

Keep API keys out of the script. Supply a key through an approved credential mechanism as an *environment variable*: a named value available to a running program. The script can then read, for example, `CENSUS_API_KEY` or `IPUMS_API_KEY`. Ask the agent to refer to the variable by name without printing the key itself. Code that receives a key can still expose it, so review access and logging. The toolkit's secrets section explains the setup. If a key enters repository history, revoke it and issue a replacement; deleting the current line is insufficient.

## What you check

Read the source's terms yourself. Check whether you may include the processed extract in a public deposit, what attribution is required, and whether there are restrictions on linking these data to other datasets. The agent can identify relevant clauses, but you need to decide whether your planned use complies with them.

Check that the provenance entry contains enough detail to repeat the request and write the paper's data section. Confirm which release, sample, or revision was used and that it is consistent across the files used in the analysis.

Check the row and column counts against the source's description, and compare a value with the source's web tool by hand. Confirm that the saved original has not been recoded, renamed, or filtered during the download.

Confirm that the acquisition script is saved in the repository, can be rerun, and has not changed any existing raw data files. Check that no credential appears in the scripts, outputs, or proposed commit. Use a local secret scan that reports locations without printing values; do not paste a secret into the agent conversation to search for it.

## What goes wrong

*The browser did the collection.* Two thousand pages clicked through without saved requests or extraction code leave a weak reproduction record. Use the browser to work out how the site serves its data, then write a script that asks for it the same way.

*Scraping what had an interface.* The agent extracts data from displayed webpages even though the source provides an API or bulk download. Ask it to look for those options before writing a scraper.

*The restriction treated as an obstacle.* The API refuses county-level vital statistics, so the agent drives the web tool by script to get them. That refusal isn't a technical limit to work around; it is the provider saying you may not have those data that way. What the web tool allows by hand and what a script may do with it are different questions, and the terms answer the second.

*Cleaned on the way in.* The "raw" file has been recoded, filtered, and renamed by the fetch script, and no one can say what the source sent. A file is raw only if it is exactly what the source sent; anything you have altered belongs in `data/processed/` instead.

*Overwritten raw.* A refetch replaced last year's file, the numbers in Table 1 shifted, and the cause took a week to find. Use dated files and protect existing originals while permitting specifically authorized acquisitions.

*The key in the repository.* A key appears in a script or remains in an earlier commit. Revoke it and issue a replacement. Keep the replacement out of tracked files, and exclude any local credential file from git before saving it.

*Rate limits hit.* The script sends requests too quickly and the source blocks access, potentially affecting colleagues who share the same network address. Have the script respect the source's request limits, identify itself as required, and reuse saved responses when possible.

*The log written from memory.* You or the agent tries to reconstruct the download details a month later. Write the provenance entry in the same step that saves the file.

# 12. Analysis: data, models, and figures

<!--
STATUS: mixed · PHASE: 2 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26
SOURCE: Agreed analysis playbook in the two-guide audit; original calibration example; Morris, White and Crowther (2019)
COVERS: Shared delegation pattern; data understanding and cleaning; model and figure implementation; LLM measurement; calibration demonstration and its limits; long computation.
VERIFY: The calibration code and numeric table are unchanged from the 2026-08-27 run recorded in docs/notes/sim-main-model-run.md (R 4.6.1, fixest 0.14.2; synthetic 25-county design). Its normal-cutoff inference is now explicitly distinguished from finite-cluster procedures. New cleaning, visualization and LLM examples are instructional examples, not claims of completed analyses.
-->

Data preparation, model fitting, and visualization use the same delegation pattern. Give the agent the inputs, decisions, and intended result; have it identify unresolved choices; let it implement the agreed work; then inspect evidence of what it did. What changes between tasks is the specification and the evidence you need back.

You already know the research problem. The purpose of this chapter is to make that knowledge usable by an agent and to expose places where it has substituted its own choices. §13 separates checking the implementation from justifying the method and assessing its statistical behavior.

## What to ask for

Start with the permitted input files, their documentation, and your project's conventions. State the output you need and the decisions already made. Ask the agent to flag ambiguities that affect the result, while proceeding with routine work within that specification. An extra approval round is useful when something is unresolved; it need not precede every transformation or plot.

| Task | Specify | Ask to see |
|:--|:--|:--|
| Data understanding and cleaning | Whether to inspect or modify data; documented variable meanings; approved transformations; unresolved codes or joins | Questions tied to specific files and fields, transformation records, unmatched records, sample changes, checks on derived values |
| Modeling | Sample, specification, estimation settings, exact postestimation quantities | Implemented specification, sample membership, diagnostics, saved estimates, calibration and independent comparisons |
| Visualization | Source quantities, intended comparison, labels, scales, uncertainty | Plotting data, mapping from columns to visual elements, rendered figure, checks against saved estimates |

### Understand and clean a dataset

When a dataset is unfamiliar, separate learning what it contains from changing it. Ask for questions tied to particular fields and documentation. “The value 9 appears in this field, but the codebook describes only 0 and 1” is useful. Silently treating 9 as missing is a research decision made without you.

For the heat-and-birthweight example, use approved public or synthetic files:

> Inspect the synthetic birth records and county-month heat file named in `CLAUDE.md`, alongside their data dictionaries. Identify the observation unit, key fields, duplicate keys, missing-value codes, and any discrepancy between the files and documentation. Do not alter data yet. List questions that affect the planned join or derived variables, with the field and evidence behind each question.

Once the rules are settled, give them explicitly:

> Implement the approved cleaning rules in `METHODOLOGY.md`. Preserve the original files. Join each birth to its county-month heat record, requiring at most one heat record for each key. Keep unmatched births flagged for review; do not drop them or fill their exposure values. Save the derived file, the script, and a report of duplicate keys, unmatched records, row counts before and after each step, and checks on the derived values. Stop if a join duplicates birth records. Do not replace missing inputs with simulated values.

The resulting report should let you account for the sample and trace each derived value to a recorded transformation. For a consequential pipeline, ask fresh agents to implement it independently from the same original inputs and agreed rules (§13). Agreement supports implementation fidelity; it does not establish that the exclusion or transformation rules were scientifically appropriate.

### Fit a model and produce the requested quantities

Name the estimand and the model as precisely as you would in an analysis plan. Include weights, clustering, missing-data handling, finite-sample corrections, and the quantities you want after estimation. “Fit the model and report the effect” leaves room for the agent to choose a coefficient when you wanted a standardized contrast.

> Implement the main model in `METHODOLOGY.md` on the approved analysis file. Save the exact specification, estimation sample identifiers, software settings, diagnostics, and the postestimation quantities listed there at full precision. Flag any unavailable option or unidentified parameter rather than substituting another specification. Keep the real-data analysis separate from all simulation code. Report discrepancies without adjusting the model to remove them.

### Draw a figure from saved results

A plotting task should identify which results to display and what comparison the figure should support. This avoids a polished plot that quietly changes the denominator, aggregates away a subgroup, or omits uncertainty.

> Build the planned exposure-response figure from the saved prediction table, without refitting the model. Use hot days on the horizontal axis and predicted birthweight in grams on the vertical axis. Show the saved interval bounds and the groups specified in the figure plan. Save the plotting script, the exact plotting data, and the figure. Report any missing groups or intervals; do not interpolate missing estimates or change the scale without asking.

Inspect the plotting data beside the rendered figure. Check selected points and interval endpoints against the saved results, and confirm that the labels and scale describe the actual quantities.

### When the LLM supplies a measurement

If the LLM labels interview responses or extracts values from documents, its answers become research data. Matching two code implementations is then insufficient: the labels themselves need evaluation. §15 gives a worked example using human labels, separate development and evaluation samples, and an explicit route for uncertain cases. You can learn and apply those checks in the app; automated model-serving setup is a separate tooling task.

### Delegate a calibration study

Calibration assesses how the requested method behaves in specified scenarios. Ask for a written plan before a large run: the estimand, plausible data-generating processes, candidate methods, performance measures, and the precision needed for the comparison. Check the generated outcomes' range, dispersion, dependence, and missingness before interpreting fitted results. A convenient simulation can be a poor representation of the quantity you measure.

The [ADEMP framework](https://pmc.ncbi.nlm.nih.gov/articles/PMC6492164/) provides a useful structure for this plan. §13 explains how calibration differs from implementation verification and methodological justification, including why a misspecified model can still perform adequately for a particular estimand or decision rule.

The compact example below demonstrates the workflow. It uses an entirely synthetic county-month design and 200 repetitions per effect size. Its intervals deliberately use the normal cutoff 1.96 with county-clustered standard errors. This is the procedure being evaluated; it is not a demonstration of a finite-cluster t interval or bootstrap. If your intended procedure uses either, the calibration must use it too.

> Reproduce the teaching calibration in `code/_experiments/simulate-main-model.R` using the synthetic county-month design. Use the three stated effect sizes, 200 repetitions each, and the specified normal-cutoff intervals with county-clustered standard errors. Save bias, coverage, rejection rate, and Monte Carlo uncertainty. Identify which features of the demonstration would need changing for the actual analysis. Do not read restricted data, modify the empirical pipeline, or describe this small demonstration as validation of the paper's method.

## What the agent does

It writes scripts that preserve the original inputs, run the agreed transformations and calculations, and save reviewable outputs. For cleaning, that includes an account of sample changes. For modeling, it includes the implemented specification and quantities. For figures, it includes the plotting data. The work should remain repeatable after the conversation ends.

For the calibration request, this is the original teaching script, retained with the results of its recorded run:

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

On the synthetic design of 25 counties, five years, and 1,500 county-months, the recorded run produced:

| truth | bias | coverage | reject | mc\_se |
|:--|--:|--:|--:|--:|
| none (0) | −0.04 | 0.955 | 0.045 | 0.015 |
| small (−1) | −0.04 | 0.955 | 0.545 | 0.035 |
| main (−15) | −0.04 | 0.955 | 1.00 | 0 |

Under the null, the estimated rejection rate is 0.045, with a Monte Carlo standard error of about 0.015. That is consistent with 0.05 but too imprecise to distinguish 0.05 from 0.06. Coverage of 0.955 is also an estimate from these scenarios, not proof that the standard errors behave well under other forms of dependence or misspecification.

At the small effect, estimated power is 0.545; at the large effect all 200 runs reject. The plug-in standard error printed as zero in the last row does not imply certainty. A substantive report needs an interval suitable for a proportion at the boundary. The repeated bias across rows reflects the shared random draws and this linear construction.

For a real calibration study, choose the repetition count from the precision required for the decision. Near a rate of 0.05, about 1,900 independent repetitions give a Monte Carlo standard error of 0.005. Slow models may require staged runs or a narrower comparison; they do not make an imprecise rate more conclusive. Preserve the planned scenarios, failed fits, and changes to the study rather than reporting only the favorable cells.

### Long computation

For a long fit, have the agent save a runnable script and a log. Without extra tools, run it in your existing RStudio or Stata application and bring the permitted output back to the agent. A job queue can manage recurring long jobs; the toolkit's queue section explains submission, resource limits, and status checks. A queue runs locally and does not make a laptop compute while asleep or survive every reboot with its processes intact.

Compacting a conversation, closing an app, and terminating a process are different events. Do not infer job status from the chat. Check the process or queue state, the log, and the expected output before reporting completion. A pipeline runner (§15) can reuse completed steps after an interruption; resuming a fit within a step requires the fitting program's own checkpoint support.

When the work exceeds local resources, follow your institution's research-computing route. The agent can draft a job script, but the resource request, permitted environment, and resulting files still need review.

> **Harvard.** Consult [FAS Research Computing](https://docs.rc.fas.harvard.edu/) for compute access and the appropriate environment for the data. Use the current cluster guidance for submission and data restrictions; an agent-generated job script is not evidence that either is correct.

## What you check

Compare the deliverables with the request. For a join, account for unmatched and duplicated records. For a model, compare the sample, settings, and exact reported quantities. For a figure, check how the values in the source table appear as points, lines, or intervals in the plot. Use independent implementations for important results, with suitable exact, numerical, or Monte Carlo tolerances (§13).

For calibration, check the simulated worlds before the performance table. Then check that the fitting procedure and decision rule match the intended analysis, and that Monte Carlo uncertainty is small enough to support the conclusion. Record what passed, under which scenarios, and what remains uncertain.

Method comparison by simulation is legitimate when the candidate methods, scenarios, and criteria address the research question. The problem is quietly changing them until a preferred conclusion passes. Document changes and evaluate a revised method across the full relevant set of scenarios.

Keep exploratory scripts in `_experiments/`. Once a check supports the reported analysis, make it part of the documented validation sequence, for example under `code/validation/`, and record when it must rerun. A figure-label edit need not rerun a large calibration study; a change to the estimator may.

## What goes wrong

*An undocumented choice keeps the pipeline moving.* The agent guesses a missing-value code, drops an unmatched record, simplifies the model, or changes a plot denominator. Ask it to surface unresolved decisions and show the evidence for completed steps.

*Simulation enters the real-data pipeline.* An unavailable input is replaced with plausible values and the analysis finishes. Keep simulation inputs and outputs separate, and require the empirical pipeline to fail when required inputs are absent.

*The check changes until it passes.* A comparison tolerance grows, an assertion disappears, or difficult scenarios are removed. Have the agent report the failure and its cause before proposing a change.

*The output looks convincing.* A clean table, a converged fit, and a polished figure can all implement the wrong request. Check the underlying quantities and sample, not the presentation alone.

# 13. Verification

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26 (implementation checks separated from methodological justification and statistical performance)
SOURCE: content bank judgment/verification-cross-language.md (folded in; module points back here); author's 2026-09-26 verification structure; §12 simulation workflow
COVERS: Independent implementations from original inputs and an agreed specification; data provenance, sample, model, and postestimation comparisons; assertions. Methodological justification through literature and critical consultation. Calibration across plausible truth worlds, including misspecification, with limits stated separately.
VERIFY: Conceptual rewrite; no vendor controls or platform commands introduced. The comparison table lists checks, not empirical results. Deliberate exception to the usual Part III headings: two questions organize the chapter.
-->

Verification has two jobs. One is to establish whether the agent implemented the analysis you asked for. The other is to assess whether that analysis is appropriate for the research question and has the statistical properties you need. An analysis can pass the first check and fail the second.

The practical check on implementation is to have two or three agents build the analysis independently from the same inputs and written specification, then compare what they produce. That makes substantial verification possible when the volume of generated code, or the language it uses, puts a complete manual review out of reach. Methodological judgment and simulation then address what agreement between implementations cannot.

## Did the agent implement what you asked for?

An agent can produce code that runs and yields plausible results while doing the wrong analysis. It might invent a missing column, substitute simulated values for observed ones, merge on the wrong identifier, or fit a different model from the one you specified. It might fit the right model and report the wrong quantity afterward: a coefficient where you requested an average marginal effect, or predictions for the wrong population.

Re-running that code reproduces the error (§15). Independent implementation gives you another route from the inputs to the result, so you can check where those routes agree and where they diverge.

### Give each agent the same written target

Start with `METHODOLOGY.md` (§6). It should state:

- The research quantity to estimate (the *estimand*), including the population, comparison, and scale.
- The input files and their meanings, the unit represented by each row, the merge keys, and the rules for constructing variables.
- The sample restrictions and missing-data rules, including the order in which exclusions apply.
- The model specification: outcome, predictors, interactions, fixed effects, weights, and relevant estimation settings.
- The quantities to report after fitting: coefficients, uncertainty intervals, predictions, or contrasts, with any averaging population and uncertainty method specified.

A request for “the effect of heat on birthweight” leaves too much to infer. A request for the average predicted difference between two stated heat exposures, averaged over a specified set of births, gives the implementers a common target. An agent can help you make the specification explicit; you decide whether it describes the analysis you intend.

Keep a fixed copy of that specification for the comparison. If an implementer finds an ambiguity, resolve it and give the same clarification to every session. Letting each agent silently choose a different interpretation makes a later disagreement harder to diagnose.

### Have two or three agents implement it separately

Open fresh Claude Code sessions in separate project folders. Each gets the specification, the data dictionary, and the same approved input files. Keep the other implementations' code, processed datasets, and results out of those folders. The sessions can run one after another or in parallel; you do not need an agent orchestration tool since files are written in separate folders.

If the agent built the dataset as well as the model, each implementation should start from the original inputs and independently perform the cleaning, merges, and variable construction. Starting both from one agent's processed dataset leaves that processing unchecked. If you are checking only model fitting on an already verified dataset, the shared processed file is an appropriate starting point.

Use only inputs the agent is permitted to access (§16). For restricted data, have the agents develop their implementations against a permitted synthetic example and data dictionary, then run the scripts independently on the real data in the approved environment. Review the comparison there; return only information that is permitted to leave.

Different languages or statistical packages add a useful check on software defaults and implementation choices. If R, Python, and Stata are already available, use one for each implementation. Fresh sessions using the same language are still useful. Independence begins with each agent working out the implementation from the specification; translating the first agent's code carries its decisions into the second version.

In each separate folder, put the approved starting files in `inputs/`. Adapt the language in this request:

> Working only from `METHODOLOGY.md`, the data dictionary, and the files in `inputs/`, independently implement the complete analysis in Stata, from input processing through the reported estimates and postestimation quantities. Do not consult another implementation or its results. Stop and report any missing input or ambiguity; do not invent columns or values, or substitute simulated data. Save your code, a record of the inputs used, sample membership and exclusion counts, the derived analysis data, and labelled results at full available precision. Keep all outputs in this project folder.

Two implementations provide the first comparison. A third gives you another independent attempt, especially when the first two disagree. Let each finish before showing it anyone else's code or results. If there is already a primary implementation, a fresh attempt can check it; keep that fresh session separate from the original conversation.

### Compare the data and the reported quantities

Once the implementations are complete, give their outputs to a separate comparison session. Ask it to compare the stages that lead to the main claim, as well as the final estimate. An invented covariate or a different exclusion rule may be obvious in a data comparison even when the headline estimates happen to be close.

| What to compare | What a discrepancy can reveal |
|:--|:--|
| Input file versions and variable sources | A different extract, an invented field, or a synthetic file used in the real analysis |
| Record identifiers and exclusion counts | Different samples, duplicate records, or a filter applied at the wrong stage |
| Merge matches and derived values for each record | Wrong keys, units, recoding, or variable construction |
| Model terms, weights, and fitting diagnostics | A different specification, an unintended default, or a failed fit |
| Estimates, intervals, predictions, and contrasts | Different calculations or a different quantity reported after fitting |

Matching sample sizes are not enough: two datasets can contain the same number of different records. Likewise, two columns called `effect` may hold different quantities. Require labels that identify what each result estimates, its units, and how its uncertainty was calculated.

Set the comparison tolerances in advance, in `METHODOLOGY.md`. Record membership and categorical values should agree exactly. Numerical results from deterministic calculations should agree within a justified tolerance for numerical precision and the fitting algorithms. Results that use random draws, such as a bootstrap or posterior sampling, need a tolerance that accounts for *Monte Carlo error*: variation caused by using a finite number of draws. Compare full-precision results before rounding them for the paper.

> Compare the completed implementations against `METHODOLOGY.md` and its verification tolerances. Check their input files, record membership, exclusions, derived variables, model specifications, and reported quantities. Produce a table of agreements and discrepancies, with the values from each implementation where applicable. For each discrepancy, identify the earliest stage at which the implementations diverge. Report your findings without changing either implementation or its outputs.

Read that report yourself. If samples differ, resolve that before interpreting coefficient differences. If coefficients agree but standard errors do not, inspect the uncertainty calculation. If fitted models agree but predicted contrasts do not, inspect the exposure values, averaging population, and scale used for the contrasts. Ask the agent to show the relevant records, settings, or calculations so you can judge the discrepancy without reading every script.

Correct against the written specification and the source data. Matching the first result is not itself a reason to change the second implementation. Document the explanation, make the justified correction, and rerun the affected comparisons. If the specification changes, every implementation must follow the revised version.

Agreement across independently built pipelines is strong evidence that they implemented the requested analysis consistently. Its strength comes from giving implementation mistakes a chance to produce observable differences. It is not a guarantee: agents can share a mistaken interpretation or use the same faulty software routine. Where available, compare against a trusted benchmark with the same definitions, or a small example whose answer is known. Trace a few deliberately chosen records through the transformations, including difficult cases such as duplicates, missing values, and boundary dates. These focused checks supplement the independent runs without requiring a manual audit of all the code.

### Keep checks that run every time

Have the agent retain *assertions*: checks embedded in a script that stop the analysis when an expectation fails. Useful ones cover required columns, unique identifiers, permitted values, merge relationships, exclusions, and the sample actually used by the model. A required column that is absent should cause a failure; the agent should not manufacture it to keep the script running.

Keep simulation code and synthetic outputs separate from the real-data analysis. Require the real-data pipeline to record the files it used and to stop if a required input is missing. After fitting, check convergence where applicable and confirm that the reported sample and model match what actually ran.

The expectations need a basis in the specification, the source documentation, or a result you have independently checked. An assertion that merely repeats the number the agent just produced will not detect the error that produced it. For a calculation reused across analyses, ask for a small test with a known answer.

Concentrate independent implementation on the pipelines supporting substantive claims. Keep inexpensive checks throughout those pipelines and rerun the affected comparisons when inputs, code, or the specification change.

## Is the requested analysis appropriate?

All three agents can faithfully implement an analysis that does not answer your research question. Address that risk in two parts: justify the method, then assess its statistical behavior.

### Justify the method

Methodological justification starts with the research question and the literature. Does the estimand represent what you want to learn? Can this design identify it? Are the assumptions credible for these data? Does the model account for the sampling design, repeated observations, and missingness? If you intend a causal interpretation, what makes that interpretation defensible?

Use agents to help investigate those questions before implementation (§12). Ask separate sessions to assess the proposed analysis, find relevant methodological literature, and look for objections. Give them the design and proposed specification so they can identify what information is missing. Follow their citations to the original sources and check that the methods apply to your setting (§10).

> Review the analysis proposed in `METHODOLOGY.md` against the research question and study design. Identify assumptions needed for the intended interpretation, choices the available information does not justify, and relevant methodological literature. Explain where each source applies to this design and where it does not. List unresolved questions for a statistician. Do not change the specification.

Independent consultations can broaden the objections you consider; agreement among agents does not establish that the method is appropriate. Ideally, discuss the design and unresolved questions with a human statistician, especially where the method or its assumptions are unfamiliar. Record the justification and remaining limitations in `METHODOLOGY.md`. This gives later implementation checks a target you have actually considered.

### Assess statistical behavior with a calibration harness

A *calibration harness* is an automated simulation workflow. It generates repeated datasets for which the relevant truth is known, applies your planned analysis to each, and measures how the estimates and decisions behave. §12 gives the worked example and the mechanics.

Decide what acceptable behavior means for the quantities you will report. Does the estimator recover the target across a useful range of true values? How large is its bias? How often do its intervals contain the truth? Under a null condition, how often does the decision rule report an effect? How often does it detect effects of substantive interest? Record failed fits as well as successful ones, and report simulation uncertainty so that a small number of repetitions is not mistaken for a precise performance estimate.

The simulated worlds must be plausible for the data. Preserve features that matter to the analysis: outcome bounds, cluster sizes, dependence, missingness, and the distribution of predictors. Include departures from the fitted model that concern you, such as nonlinear effects or unequal variances. A simulation drawn only from the model you plan to fit tests performance under those assumptions; it does not test how the method behaves when they fail.

The harness also needs implementation checks. Confirm that the generated data have the intended properties and that the “known truth” is the quantity the analysis actually estimates. Check the simulation generator and truth calculation separately from the fitting code. Reusing the same mistaken formula in both can make recovery look perfect.

> Propose a calibration plan for the estimand, analysis, and decision rule in `METHODOLOGY.md`. Include plausible data-generating scenarios and departures from the fitted model. For each scenario, state the known target, how you will calculate it, the performance measures, and how you will quantify simulation uncertainty. Explain how you will check that the generated data respect the design and outcome constraints. Keep simulated files separate from real-data inputs. Present the plan before running it; do not change the analysis to make it pass.

A misspecified model can be well calibrated for a particular estimand or decision rule. For example, an imperfect description of individual outcomes may still yield an interval with the intended coverage for an average contrast. Calibration therefore does not establish that the model describes the data-generating process correctly. Nor does it establish that the estimand answers the scientific question, or that a causal interpretation is justified.

Read the calibration results alongside the methodological justification. State which scenarios were checked, which properties were acceptable, and where performance failed. A failure may call for a different analysis, a narrower claim, or more information. That decision belongs to you; the agent should report the failure before changing the method.

Keep the implementation comparison, methodological justification, and calibration results with the project. They answer different questions, and a satisfactory result in one does not substitute for the others.

# 14. Writing, revision, and talks

<!--
STATUS: mixed · PHASE: 3 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: ~/.config/agents/WRITING.md (the voice rules that transfer); TEMPLATES.md "Manuscript output" (Word by collaborator workflow; responses markdown → Word; figures as PDF); the research-workflow deck build (markdown to slides); disclosure material new
COVERS: Drafting from METHODOLOGY.md and results. The Word-collaborator reality (markdown → docx). Reviewer responses. Voice rules that transfer. AI-disclosure norms (ICMJE, journals, NIH): what to disclose and how, in a dated table. Slide decks from the paper.
VERIFY: disclosure table checked 2026-08-27, then re-verified the same day. Primary wording now for ICMJE, Elsevier, PLOS, NIH NOT-OD-25-132 and NOT-OD-23-149, Science (editorial-policies page read in the browser: AI section under Image and Text Integrity), Nature Portfolio (policy page fetched with curl past the cookie wall: the Springer Nature risk-assessment framework, which replaced the older Methods/Acknowledgments wording), and JAMA's 2024 reporting guidance (Acknowledgment: platform, version, manufacturer, dates, use, portions; Methods for research use) plus the opinion-piece ban from the instructions page. Still secondary: JAMA's August 2026 bans on peer review and clinical images. pandoc's `--track-changes` and docx/pptx writers as of pandoc 3.
-->

An agent can turn your analysis records and saved results into draft text, reviewer responses, and slides. This chapter explains how to supply the evidence it should use, review its wording and claims, work with coauthors' documents, and disclose its contribution. You remain responsible for ensuring that the final text describes the research you actually did.

## What to ask for

*Drafts from the files.* Ask for methods text based on `METHODOLOGY.md` and the analysis scripts, describing the estimand, fitted model, and recorded decisions. Put the model equation before the prose that explains it. For the results section, have the agent take numbers from `outputs/tables/` and mark any claim for which the files provide no support. Supply your own list of limitations alongside the results when requesting a discussion draft.

Make the source restriction explicit in each request:

> Use only what is in `METHODOLOGY.md`, `outputs/tables/`, and the figure captions. Where a claim, a number, or a reference is not in those files, leave a bracketed gap and list it at the end. Do not fill it from what you know.

*Your writing conventions.* Give the agent the style guidance you maintain (§6, Appendix A). Ask it to state the point directly, name what each claim refers to, and explain the connections between ideas. A short sentence still needs enough context to be understood. Remove repeated explanations and decorative closing lines. Include conventions specific to the manuscript, such as tense, terminology, and the placement of limitations. When you make a recurring correction, record it in the relevant instruction file.

*If you write in Word.* Keep the manuscript in Word. Give the agent an approved section and the supporting results, and ask for proposed wording with a record of what changed and why. You can paste accepted passages into the document yourself, preserving tracked changes and the coauthor workflow. For direct document editing, work on a copy and inspect the returned file in Word, including comments, citations, equations, and layout.

If you already write in markdown or Quarto, you can keep that as the source and export a Word copy for collaborators. The toolkit's document-production section covers that setup. Save each returned Word file before reconciling edits. Conversion can lose information or change formatting; it is not a substitute for inspecting the document.

*Reviewer responses.* Give the agent your decisions about each comment and the revised manuscript. Ask it to quote each comment, lead the response with the substantive answer, and cite the line numbers of the changes. Record decisions that change the analysis in `METHODOLOGY.md` (§6), so their reasons remain available at the next revision.

> Draft the response to reviewer 2 in `docs/briefs/2026-09-02-r2-response.md`. Quote each comment in full, then respond. My decisions are in the bullets under each comment in `docs/notes/r2-plan.md`; do not add concessions I did not make. Where the manuscript changed, cite the new line numbers from `manuscript/revision-1.docx`. Lead each response with the answer.

*Talks.* Ask for an outline before requesting slides. Give each slide one main claim and identify the supporting figure from `outputs/figures/`. Review the outline for repetition and detail the audience does not need; an initial draft may need substantial cutting. Choose the output format for the venue: PowerPoint, a Quarto web deck, or Beamer, the LaTeX slide format. Use the same saved results and figures as the paper so the slides report the same analysis. The toolkit's document-production section covers those formats.

## What the agent does

It drafts from the supplied evidence, traces numbers to saved outputs, and identifies missing support. It can compare manuscript versions, prepare responses from your decisions, and propose a talk outline using the existing figures. Keep a source file and a returned document for each editing round so that changes remain reviewable. A request to leave unsupported claims blank reduces invention but does not guarantee it; check the draft.

## What you check

Ask for a table tracing each reported number to its source file, row, and column. Check those locations against the manuscript, and investigate any number the agent cannot trace.

Open every cited source and confirm that it supports the associated claim (§10). Do this for references added during drafting as well as those already in the project.

Compare the methods section with the scripts, including software defaults (§12). The agent can help by reading each paragraph beside the relevant code and listing discrepancies. Resolve any difference between the intended analysis and what actually ran before finalizing the description.

Read a paragraph aloud to check whether it uses your language and explains the point as you would. Revise phrasing that sounds unlike you or leaves the reader to infer a connection.

Check the AI-use disclosure and its placement against the journal's instructions, as described below.

### Disclosure

Check the target journal's current instructions at submission. Policies differ in the uses they permit, the details required, and where the statement belongs. As of September 2026, [ICMJE's author guidance](https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html) calls for disclosure of AI assistance, human responsibility for the submitted work, and no AI authorship. Use the journal's own instructions to determine the applicable wording.

Keep a record of the tool and model information available, dates, tasks performed, affected parts of the work, and how the authors checked them. Distinguish language assistance, code generation, and an LLM used to produce measurements (§15). The last requires enough methodological detail to assess the measurement procedure, not just an acknowledgment.

An adaptable disclosure template is:

> We used [tool and observed model/version; dates] to [specified tasks]. The authors reviewed [affected text or outputs] and checked the analysis using [checks actually completed]. For LLM-derived measurements, the Methods describe the inputs, prompts, evaluation, and human review. The authors take responsibility for the reported work.

Fill the brackets from the project's records. Do not claim an independent implementation, a successful rerun, or an exact model version that you cannot document. Preserve this disclosure and relevant provenance in the public research package (§15), even when private working notes are removed.

Treat peer-review material separately. This guide's conservative working rule is to keep confidential manuscripts and applications you are reviewing out of agent sessions. Follow the journal's or funder's current reviewer policy; permission to use an agent on your own work does not authorize its use on someone else's confidential submission.

## What goes wrong

*An unsupported or altered number.* The draft contains a transposed digit, an incorrectly rounded value, or an estimate absent from the results. Requiring the agent to use saved outputs reduces this risk; checking each number against its source is still necessary.

*The invented reference.* Plausible authors, a real journal, a year, and no such paper (§10). Open every one.

*Methods for the model you meant.* The section describes the intended model; the script ran another (a default, a dropped term, a different clustering). Cross-check against the code, not against `METHODOLOGY.md` alone.

*Prose that does not sound like you.* The draft uses generic phrasing or explanations you would not give. Revise it and record recurring corrections in your writing instructions.

*The round trip that loses edits.* The agent accepts the coauthor's tracked changes silently, or overwrites the returned draft with a regenerated one. Keep every returned `.docx`, dated; diff before anything is merged.

*The generic disclosure.* “AI was used” leaves the reader unable to assess its role. State the tool and available version information, dates, tasks, affected parts of the work, and checks the authors performed, following the journal's requirements.

*Confidential review material enters the session.* Check the reviewer policy before exposing any material, including correspondence and quotations in notes. The conservative rule above avoids assuming permission from the account alone.

*Slides that repeat the abstract.* A sequence of dense text slides gives the audience little help following the results. Return to the outline and identify the claim and supporting evidence each slide needs to convey.

# 15. Reproducibility and hand-off

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26
SOURCE: Two-guide audit; original reproducibility chapter; Zenodo record management; Anthropic glossary
COVERS: Runnable analysis and accessible inputs; pinned environments; proportional validation; transparent deposit; saved LLM measurements, rerunning inference, and held-out evaluation.
VERIFY: Zenodo metadata and deletion distinctions checked 2026-09-26 at https://help.zenodo.org/docs/deposit/manage-records/. Non-determinism checked against https://platform.claude.com/docs/en/about-claude/glossary. Evaluation counts below are an explicitly invented teaching example.
-->

A collaborator should be able to repeat the analysis from its files and instructions without asking an agent to reconstruct what happened. This chapter explains how to assemble and test that package, prepare it for sharing, and preserve and evaluate measurements produced by an LLM.

Keep this reproduction test distinct from independent implementation (§13). A fresh implementation tests whether the written method is sufficiently precise and whether separately built analyses agree. Rerunning the original code tests whether a collaborator can reproduce the supplied analysis. Both require the right inputs and enough detail about software-dependent behavior; neither establishes the scientific validity of the method.

The agent can inspect the project, record the sequence that produces its results, and identify missing inputs or software. Have it save those details as run instructions and test them before hand-off.

![](figures/two-pipelines.svg){#fig-two-pipelines .tall width="90%" fig-align="center" fig-alt="Two analysis workflows: an LLM writes code that is then executed, or its answers become measurements. Both need saved inputs and settings. LLM measurements additionally need saved responses and evaluation against independently labeled cases; neither workflow guarantees identical reruns." above="12pt" below="12pt"}

## What to ask for

*An execution sequence.* For a small R project, `run-all.R` can run the scripts in order and stop on an error (Appendix A.4). In Stata, a master do-file serves the same purpose. Have the agent identify any manual input or hidden dependency and document it. A nearly finished paper still needs a repeatable sequence, even if a sophisticated runner would add little value.

*The environment.* Record the language version, packages, and relevant system dependencies before changing a working setup. A lockfile records package versions for restoration: `renv.lock` for an R project using renv, or `uv.lock` for Python using uv. The toolkit's environment section covers installation and use. For Stata, record the Stata version, the do-files' version settings, and the versions and sources of community commands. A version statement alone does not preserve user-written packages.

*An input manifest.* For every required input, record its version or checksum, how an authorized researcher obtains it, and where the analysis expects it. A fresh copy of the code will not contain inputs excluded from git. Public downloads may change, so preserve the version used when sharing terms allow it. For restricted data, provide access instructions and a synthetic example that tests execution without disclosing the real records.

*Proportionate checks.* Keep a quick check for routine edits, a way to rerun affected steps, and a full reproduction check for a release. Required calibration and validation scripts belong in that documented sequence, with the conditions that trigger a rerun. Pipeline runners such as targets or Snakemake become useful when dependencies or expensive steps make this difficult to manage; the toolkit explains them.

> Prepare a clean-copy reproduction test using the README and input manifest. Identify missing inputs and their approved acquisition route before running anything. Restore the recorded environment without upgrading it. For shareable inputs, run the documented analysis and compare the reported quantities with the saved results using the agreed tolerances. For restricted inputs unavailable here, run only the synthetic smoke test and state that real-data reproduction remains to be completed in the approved environment. Save commands, logs, and discrepancies. Report failures without changing the analysis or comparison criteria.

*A reviewable deposit.* Assemble a separate snapshot folder before uploading to OSF, Dataverse, Zenodo, or the repository your field uses. Include the code, environment records, input manifest, data documentation, run instructions, and the inputs and outputs you are allowed to share. Document where access restrictions prevent a public reproduction. Decide with coauthors which contributors and licenses belong on the record.

## What the agent does

It turns the actual scripts into an execution sequence, checks that the README describes that sequence, and records what the environment and inputs require. It runs the permitted clean-copy test and saves evidence of the outcome. For a deposit, it inventories the snapshot, traces reported results to files, and flags material that needs a human decision before release.

The package should distinguish rebuilding the published tables from rerunning an expensive fit or querying a model service again. If a table is reconstructed from saved fit objects or saved LLM responses, say so. Those saved objects are inputs to that reproduction route and need to be preserved and documented accordingly.

## What you check

Inspect the execution log and comparison results. A successful exit is insufficient if the sample, coefficients, labels, or plotted values differ. Use exact comparison for identifiers and deterministic counts, suitable numerical tolerances for floating-point calculations, and justified Monte Carlo tolerances for stochastic analyses (§13). Record which environment and input versions were actually tested.

A synthetic smoke test establishes that the supplied example runs. It does not reproduce the restricted-data results. Have an authorized researcher complete and record that test in the approved environment before claiming the empirical analysis reproduces.

For a public snapshot, review both its contents and its claims:

- Remove credentials, restricted records, confidential correspondence, personal paths, and working notes that do not belong in the release. If the release includes repository history, review the history as well as the current files.
- Preserve scientific provenance: AI-use disclosure, the model and prompts used for measurement, the evaluation procedure, and the checks on generated code. Removing an agent authorship trailer is separate from documenting its role in the research.
- Confirm that the README describes the implemented model, units, inputs, and outputs. Check that filenames resolve and that access instructions are usable.
- Check authors, affiliations, licenses, and the relationship between the deposit version and manuscript version.

Use searches to locate likely problems and read the surrounding material. Neither a keyword sweep nor a complete read guarantees that a credential or misleading statement will be found; combine them with an inventory and the reproduction test.

> Review the proposed deposit folder against the manuscript, code, and input manifest. Report confidential material, credentials, unresolved paths, missing dependencies, incomplete input-access instructions, and claims the code does not support. Preserve relevant AI disclosure and research provenance, including prompts and model-evaluation records. Check contributor metadata and licenses. Do not upload, delete files, rewrite history, or remove methodological documentation; propose specific corrections for review.

## What goes wrong

*A hidden input makes the original folder special.* A cached fit or local data file never appeared in the manifest. The clean-copy test should identify it and record how it is supplied.

*A conversation supplies an undocumented step.* A recode or manual exclusion reaches the results but never reaches a script or decision record. Ask the agent to trace each reported output back through its inputs and transformations.

*Reproduction is overstated.* Only the synthetic example ran, or only the table-rendering step ran from saved results. Report exactly what was tested and what remains necessary.

*An archive is cleaned too aggressively.* Removing every mention of an agent erases disclosure or a measurement procedure. Remove irrelevant working material while preserving what a reader needs to understand and assess the research.

*A correction is needed after deposit.* Check the repository's policy rather than assuming all changes are impossible. As of September 2026, [Zenodo permits edits to published metadata](https://help.zenodo.org/docs/deposit/manage-records/), including creators, without changing the DOI. Replacing research files involves different versioning rules. Owners can delete a record within its initial 30-day window; later removal requests go through support and need justification. Review before publication because a correction cannot recall copies already downloaded.

## When the LLM is in the loop

When an LLM codes responses, classifies documents, or extracts a variable from text, its answers become measurements. Keep three questions separate:

1. Can a reader recover the published results from the saved measurements?
2. Can someone rerun the inference procedure that produced them?
3. Are the measurements adequate for the research task?

Saving the responses helps answer the first. Recording the model and procedure helps with the second. Evaluation addresses the third. Success on one does not imply success on the others.

### Preserve the run

Save the exact inputs presented to the LLM, prompts and examples, raw responses, parsing and postprocessing code, dates, model information, and available generation settings. Keep failures, retries, and human corrections traceable to the original case. Apply the same access rules to these records as to the source data.

Use an exact model identifier when the interface exposes one, and record limitations when it does not. A model name in an app menu may be less specific than a version identifier. Do not claim to have pinned information you could not observe. Pinning reduces one source of change; it does not guarantee the same answer on a rerun. Anthropic notes that [outputs can vary even at temperature zero](https://platform.claude.com/docs/en/about-claude/glossary#temperature).

Keeping open model weights can preserve access after a hosted model is retired, but repeatability also depends on preprocessing, runtime, numerical precision, quantization, and generation settings. Choose a model for demonstrated performance on the task as well as its availability and licensing. Reevaluate any replacement. This guide does not require a different model service or teach its installation.

### Evaluate a labeling task

Suppose you want to label whether a response describes an unmet service need. Write a rubric defining that category, exclusions, and ambiguous cases. Have two people apply it independently to a development sample, discuss disagreements, and record any adjudication. Human labels are a reference with their own uncertainty, not unquestionable truth.

Use the development sample to revise the rubric and prompt. Then freeze them and evaluate on a separate sample whose labels have not been shown to the LLM or used to choose the prompt. If related responses come from the same person or document, keep them together when separating samples to reduce leakage.

Here is an invented evaluation result for 200 responses:

| Human reference | LLM: need present | LLM: need absent |
|:--|--:|--:|
| Need present | 10 | 10 |
| Need absent | 5 | 175 |

Overall agreement is 185/200, or 92.5 percent. Yet the LLM detects only 10 of the 20 positive cases. Of its 15 positive labels, five are false positives. The overall figure would conceal poor performance on the category the study needs.

Ask for category-specific errors and uncertainty, including the uncertainty around estimates based on few cases. Inspect whether errors differ by relevant document type or subgroup. A chance-corrected agreement statistic can supplement these results, but it does not replace them or resolve an ambiguous rubric.

Decide acceptable error rates and how uncertain cases will be handled before inspecting the evaluation result. For example, the rubric may require a human decision when the response lacks context or contains conflicting statements. Save the abstention or referral as a distinct outcome, report its frequency and workload, and include those cases when describing performance. The LLM's self-reported confidence is not an established error probability.

> Apply the frozen labeling rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. Once labeling is complete, compare with the independently adjudicated reference. Report the confusion table, errors by category, uncertainty, referral rate, and the prespecified acceptance criteria. Do not tune the prompt on this sample or drop difficult cases. List disagreements for human review.

If you revise the prompt after seeing those errors, the sample has become development material. Use a new held-out sample for a fresh performance claim, or disclose the reuse and its limitations. Report the evaluation, human review, and saved-output reproduction route in the paper's methods (§14).

<!-- ===================== PART IV — JUDGMENT ===================== -->

# 16. Data confidentiality

<!--
STATUS: mixed · PHASE: 1 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26
SOURCE: HUIT Claude guidance; Anthropic Enterprise retention documentation; two-guide audit
COVERS: Service approval and project-specific restrictions; indirect disclosure; synthetic-data route; access controls and incident response. Local-model product table removed from the app-only guide.
VERIFY: HUIT https://www.huit.harvard.edu/claude and Anthropic https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans checked 2026-09-26. Harvard-specific retention duration is not established here.
-->

Decide what the agent may see before opening a research folder. This chapter explains how to check whether your account and project terms permit the planned work, use synthetic inputs when needed, and respond if information is exposed accidentally. Your institution's current rules determine what is allowed; the access controls in §5 help enforce that decision.

## What can reach the model

The agent can expose information without you pasting it into a message. A tool may read the first rows of a file, a failed command may print a record, or a log may contain identifiers. That output can become context sent to the hosted model. An aggregate table can also disclose a small group or remain subject to a sharing restriction.

Review code, dictionaries, filenames, logs, and derived outputs as well as data files. A synthetic dataset should contain invented records rather than lightly altered confidential ones. A dictionary can itself reveal sensitive project details and needs the same assessment.

## Establish the permitted route

Check the data classification, the service and account approved for it, and the terms governing this particular project. These may include consent, a data-use agreement, an IRB protocol, contractual confidentiality, or health-data requirements. If the intended AI processing is unclear, ask the responsible institutional office before proceeding. An account setting cannot override those terms.

> **Harvard, September 2026.** [HUIT's Claude guidance](https://www.huit.harvard.edu/claude) approves Harvard Claude Chat and Code for data up to Level 3 and states that inputs are not used for training. It also requires security and privacy approval for connectors. Confirm the applicable account and project terms; do not infer that another account, feature, or connected service has the same approval.

Record the decision in the project file: which inputs the agent may use, which processing is allowed, and which outputs may be shared. Distinguish approved public-data acquisition from ordinary analysis: the former can create a new original file and provenance entry, while the latter should preserve those originals.

## Training and retention are separate

A promise not to train on submitted data does not mean that no copy is retained. Retention can depend on the product, organization policy, and contractual arrangement. Anthropic documents [organization-controlled retention for Enterprise plans](https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans); this guide does not establish Harvard's current retention duration. Confirm it through the institutional service guidance when it matters to the project.

Deleting a conversation is not a substitute for having permission to submit the material. Nor does an opt-out setting on a personal account give it the coverage of an institutional agreement. Use the approved route established above.

## Work with synthetic inputs when access is not permitted

The agent can write and test code using an approved schema and invented records with the relevant types and structure. Keep that work in a folder available to the agent. Run the resulting code on real data only in the approved environment, with no agent access unless separately authorized. Share only outputs that have been cleared for that purpose.

This is a development and testing route, not proof that the code will handle every feature of the real data. Check the actual run, and use the implementation and calibration checks in §13 within the permitted environment.

## Enforce and check the rule

Write the restriction in `CLAUDE.md` or the imported project brief, but also use effective access controls (§5). A direct file-tool denial and a sandboxed subprocess restriction cover different execution routes. Check any exception that lets code run outside those restrictions.

Keep data the agent must not access in storage its process cannot read. Merely choosing another project folder is insufficient. An unmounted encrypted volume or a separately permissioned account can prevent access; a read-only folder still allows its contents to be read. Test the arrangement with harmless files before using it for sensitive work.

Keep restricted data and credentials out of version-control history. A git ignore rule prevents accidental addition of untracked files; it does not remove files already tracked, block the agent from reading them, or make a remote service an approved destination.

## If material is exposed accidentally

Stop further agent access and any ongoing transfer. Record what was exposed, to which service and account, when, and through which tool. Use your institution's incident-reporting route promptly and follow its instructions for containment and record handling. Do not assume that deleting the conversation resolves the incident or erase the evidence needed to assess it.

## When this app cannot support the task

If the approved route cannot process the required data and synthetic inputs are insufficient, consult research IT about an appropriate environment. Running a model locally may offer more control over data flow, but still requires authorization, suitable security, and evaluation of the model's performance. It is a different setup, outside this guide's app-only path.

# 17. Cost, and the map

<!--
STATUS: adapt · PHASE: 1 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26
SOURCE: Original usage guidance; Claude desktop documentation; HUIT Claude guidance
COVERS: Selective adoption, app usage controls, proportionate delegation, reproducibility for existing projects.
VERIFY: App usage controls and HUIT account limits checked against current documentation 2026-09-26. Exact quotas and model prices intentionally omitted.
-->

This chapter helps you choose which tasks to delegate, manage the account's usage allowance, and decide when additional tools are worth setting up. Start with work that takes your time repeatedly and produces a result you can check. Add structure and tools as you encounter a need for them.

## A useful progression

First complete the app exercise in §3. Then bring one bounded task from an existing project, with a short instruction file and a recoverable checkpoint. Once the agent is useful, record recurring conventions (§6), preserve the analysis sequence (§15), and package repeated procedures as skills (§8).

The toolkit is a reference for a need you have encountered: preserving a software environment, managing long fits, rendering documents, or coordinating dependent steps. These are not levels every researcher must climb. A Stata project with a documented master do-file may have no need for an R pipeline runner.

## Usage and cost

Use the app's usage display to see the applicable allowance and reset information; the [desktop reference](https://code.claude.com/docs/en/desktop#check-usage) describes its location. Available models and extra usage can have different terms, so check what the account offers before a large task. For Harvard, the current license route is in §3.

Large inputs, lengthy outputs, higher reasoning effort, and several concurrent agents can increase usage. The accounting also depends on caching and the plan, so message count is a poor proxy for cost. Keep requests focused, refer to files rather than pasting repeated copies, and save results and decisions outside the conversation.

A long computation does not inherently consume LLM tokens while it runs. Repeated progress queries and large logs can, however, use the agent unnecessarily. Let a suitable application or queue run the saved script, then have the agent inspect the relevant log and outputs (§12). Verify that the job actually completed.

## When extra setup can wait

A small, occasional task may be quicker to do yourself. A sophisticated runner may also be unnecessary for a nearly finished paper. That paper still needs the inputs, environment record, and repeatable sequence required for hand-off; a README should explain a procedure that someone has actually tested (§15).

Use the simplest arrangement that meets the research and collaboration needs. Keep a working lab environment when it is adequate, and make a migration a separate decision with its own checks.

# 18. Failure modes and habits

<!--
STATUS: adapt · PHASE: 2 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: tool-chain §12 "Anti-patterns", §13a "The blind-click-fest failure mode", §10 "Context hygiene"; synthesizes §2, §5, §6, §9, §12, §13, §15 of this guide
COVERS: Confident-but-wrong. Context blow-up. Stale memory. The click-fest. Over-delegation. The supervisor stance as the habit that prevents most of it.
VERIFY: App-only session guidance revised 2026-09-26; operational commands belong in toolkit Part V.
-->

An agent can report success after using an outdated instruction, changing the wrong file, or weakening a check until the code runs. This chapter brings together recurring failures from the guide, explains how to recognize them, and describes habits that help you catch them. Use it when a session goes wrong or when deciding what to review before accepting a result.

## Confident but wrong

Errors are harder to notice when a script runs, the result looks plausible, and the agent reports that the task is complete. Its confident tone gives you no reliable basis for accepting the result. Successful execution does not show that the requested analysis was implemented, and agreement between outputs is a weak check if both came from the same implementation (§13).

Ask for evidence of the claimed result: the saved file, execution log, comparison table, or source supporting a citation. Inspect that evidence yourself. The relevant Part III chapter identifies what to check for each task; a statement that the agent performed the check is insufficient on its own.

## Context blow-up

Messages, file contents, and tool outputs accumulate during a session and use its limited context window (§6). In a long conversation, the agent may overlook an instruction, repeat completed work, or contradict an earlier answer. Longer context can also increase usage (§17). When the conversation is *compacted*, earlier material is replaced with a summary that may omit details you still need.

Keep the task record and decisions in project files, so a fresh session can resume without reconstructing the conversation (§9). Ask the agent to save the current state before starting a new app session on the same project. If a long session has begun to repeat work or forget constraints, reread the relevant files with a fresh session. There is no universal token threshold at which every model needs restarting.

## Stale memory

Outdated information can come from the agent's saved notes (§6) or from an earlier point in the current session. A note may refer to a file you have renamed; the agent may also continue using assumptions from a document you have since edited. It may not flag that it is relying on an old version.

Have the agent follow your maintained project instructions when they conflict with its notes, then correct the stale note. Keep important rules in the instruction file. Record a reversed methodological decision as a new dated entry in `METHODOLOGY.md` so the sequence remains clear. When you edit a file the agent has already read, ask it to read the new version before continuing.

## The click-fest

Frequent permission prompts can lead you to approve actions without reading them (§5). That is particularly risky when the agent has read untrusted material that could influence its next request. For code or data you distrust, use a suitably isolated environment with limited file access, credentials, and network access; approval prompts alone provide insufficient protection.

Configure permissions so routine, bounded actions can proceed, prohibited actions are denied, and consequential choices require review. Repeated harmless prompts may justify a narrow allow rule. If you find yourself approving requests unread, revisit the configuration rather than broadening access indiscriminately. Pay particular attention when an action's consequences depend on which files or destination it uses.

## Over-delegation

Keep responsibility for methodological choices, acceptance of results, and access decisions, even when the agent helps with each. Three forms of delegation can obscure that responsibility.

*Delegating the judgment.* The agent chooses an estimand, exclusion rule, or prior without your review, or changes the analysis after a failed calibration. Have it identify those decisions explicitly and give its reasons for any proposal. You need to understand and justify the choices that determine the reported result (§13).

*Delegating the checking.* Asking the same agent to review its work can leave its original assumptions unchallenged. Use independent implementations, known-answer cases, opened sources, and documented reruns as appropriate to the task (§12, §13, §15). Separate implementations are a strong practical check, but they can still share a mistake or an unsuitable target. Assess methodological justification and statistical behavior separately (§13).

*Delegating access decisions.* The agent changes its permission rules or project restrictions without your review, or decides which data it may process. You can ask it to propose a configuration, but review that proposal separately and protect both the active settings and any source used to recreate them (§5, §16).

Also check for work that happened only in the conversation: a recode applied once, an exclusion agreed in chat, or a table pasted into the manuscript without saving how it was produced. Preserve the decisions, outputs, and steps needed to repeat that work (§15), including LLM responses used as measurements.

## The loop that fixes the wrong thing

An agent trying to fix a failing script may suppress the error, discard rows that do not merge, or relax a check. It may change a model option until estimates agree or alter the analysis until calibration passes (§2, §12, §13). The new run appears successful because the agent changed what was being tested.

When an error disappears, ask the agent to show its cause and the change that fixed it. Inspect whether the correction preserved the intended sample, specification, and checks. Have the agent report a failed check before proposing changes to the analysis or acceptance criteria (§13).

## The supervisor stance

Before delegating, state the outcome, constraints, and evidence you will use to judge completion. Request a plan when important choices remain unresolved. Afterward, use that evidence to decide what to accept and have the agent update the project records (§9). Over time, repeated errors should lead to more precise instructions or stronger checks, so the same failure is less likely in the next task.

<!-- ===================== APPENDICES ===================== -->

# Appendix A. Starter files

<!--
STATUS: new · PHASE: 1 · DRAFTED: 2026-08-27 (first draft; needs a read-through)
SOURCE: A.1 and A.2 repeat the §6 worked files; keep the copies identical when editing. Remaining examples adapted from project conventions.
COVERS: Optional global and project instructions, task record, existing-language execution script, git exclusions, and adaptable layouts. Revised 2026-09-26.
VERIFY: Instruction-file loading checked against Claude memory documentation 2026-09-26. Examples are teaching templates, not a tested complete analysis package.
-->

This appendix provides files you can copy and adapt: agent instructions, a task list, an execution script, git exclusions, and project layouts. Each example explains where to save it. Choose only what you need; a new project can begin with the short instruction file in §6. The first two examples repeat that chapter's longer worked files, and A.6 gives layouts for larger projects.

## A.1 The global file

Save this in `~/.claude/CLAUDE.md`, or in an agent-agnostic `AGENTS.md` that it imports (§6). Replace the first paragraph with your own description and retain only rules you want the agent to follow across your projects.

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
- Preserve the project environment. Record package versions before changes.
- Use the existing lockfile tool; see the toolkit for adding one.
- Comment what a block is for, not what each line does.

## Statistics
- State the estimand before fitting. Report every estimate with an interval.
- Assess the method with a calibration plan before substantive use (§13).
- Fits longer than a few minutes run outside the session, not inside it; I read the log when it finishes.

## Writing
- Short sentences. Point first, then the qualification. Prose, not bullets.
- Methods: the equation first, then the prose that explains it.
- American spelling. Oxford comma.

## Access and limits
- Read only inputs approved for this service. Never expose restricted files.
- Public-data acquisition may add approved new files; preserve originals.
- Never overwrite original data. Rebuild derived files from recorded scripts.
- Never rewrite shared git history.
- Ask before publishing, adding a service, or exceeding the agreed resources.

## Every session
- Read `STATUS.md`, then `TASKS.md`, at the start.
- Update `TASKS.md` before finishing; rewrite `STATUS.md` if the state moved.
```

## A.2 The project file for a paper

Save this in the project's `CLAUDE.md`, or in `AGENTS.md` with the import described in §6. Replace the example paper's details with your own, using the headings to organize its description, file locations, conventions, and access limits. For restricted-data work, follow the synthetic-input approach in §16 and keep real inputs inaccessible to the agent's process. Naming an off-limits path does not prevent the agent from reading it.

```
# heat-birthweight

Paper with J. Smith: county-level heat exposure and birthweight, US 2010–2020.
Target: Demography. Decisions live in METHODOLOGY.md, the current state in
STATUS.md, open tasks in TASKS.md.

## Where things live
- Restricted microdata is held separately in approved storage, unavailable here.
- `data/raw/public/`: ACS and PRISM downloads; `data/raw/sources.md` logs each.
- `data/processed/`: derived files. Use `synthetic-natality.parquet` here.
  It contains invented records, not a de-identified extract.
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
- Work only from the synthetic file and approved public downloads above.
- Do not substitute real natality inputs or request access to restricted storage.
- Never send any file under `data/` to a web search or an external service.
```

## A.3 TASKS.md

Save this in the project root. Use the three headings shown, a short entry for each task, and a date on each finished item. Have the agent read it after `STATUS.md` at the start of a session and update it as work progresses (§6, §9). The opening comment explains how to maintain the list.

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

## A.4 A minimal execution script

Use the language and entry point your project already has. This R example runs three existing scripts in order. Save it as `run-all.R` at the project root and ask the agent to run it from that folder. It stops when a script raises an error; it cannot detect an incorrect result unless the scripts include the relevant checks.

```
scripts <- c(
  "code/clean-natality.R",
  "code/model-heat-bwt.R",
  "code/_final/figures.R"
)
for (script in scripts) {
  message("Running ", script)
  source(script, local = new.env(parent = globalenv()))
}
```

The scripts should read and write their declared files rather than rely on objects left over from an interactive session. A Stata project can use a master do-file for the same purpose. Add required validation steps to the documented sequence (§15); a quick plotting command need not rerun them all. The toolkit explains command runners and dependency tracking if the project grows beyond this arrangement.

## A.5 .gitignore

Where it goes: the project root. This conservative starting example excludes data, generated models, logs, and personal settings. Adapt it to the project's sharing policy: an approved public input or provenance manifest may belong in the repository. Ignoring a path does not restrict agent access and does not remove an already tracked file. Review shared settings before committing them; managed policy and local settings also affect what a session enforces (§5).

```
# Exclude inputs by default; share approved files deliberately (§16)
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

# Personal agent settings; the shared .claude/settings.json is committed
.claude/settings.local.json
```

## A.6 Adaptable project layouts

These are examples for projects that have outgrown the minimal folder in §3. Keep an established lab layout when it already makes inputs, code, outputs, and decisions easy to find. Add a directory because the project needs its contents, rather than creating empty folders to match a template.

### A research paper

```
heat-birthweight/
|-- CLAUDE.md              # purpose, access rules, existing commands
|-- README.md             # collaborator's starting point
|-- TASKS.md               # unfinished work and completed tasks
|-- METHODOLOGY.md         # decisions and their reasons, when needed
|-- run-all.R              # or the existing master do-file
|-- code/
|   |-- validation/        # checks required for the reported results
|   |-- _experiments/      # investigations not in the final analysis
|   `-- ...                # cleaning, modeling, and figure scripts
|-- data/
|   |-- raw/               # approved originals; preserve unchanged
|   `-- processed/         # generated by recorded code
|-- outputs/
|   |-- figures/
|   `-- tables/
`-- manuscript/            # Word, Quarto, or the existing format
```

Keep restricted inputs in approved storage that the agent process cannot reach. Document how authorized researchers can obtain them in the input manifest (§15). Record environment versions, and add a current-state file when the task list no longer explains where the project stands. The optional global/project convention from §6 can replace the single `CLAUDE.md` as needed.

### Data acquisition or curation

```
county-data/
|-- CLAUDE.md
|-- README.md              # acquisition and rebuild instructions
|-- TASKS.md
|-- code/                  # acquire, validate, transform
|-- data/
|   |-- sources.md         # origin, request, date, terms, checksum
|   |-- raw/               # approved original responses
|   `-- processed/         # documented transformed files
`-- outputs/
    `-- reports/           # counts, missingness, and exceptions
```

Keep identifiers, source requests, and transformation decisions inspectable. Add checkpoints if acquisition can be interrupted. Environment managers, queues, and runners are optional additions from the toolkit; the provenance record is needed regardless of the tools.

### A text or presentation project

```
research-brief/
|-- CLAUDE.md
|-- README.md              # how to produce the deliverable
|-- source/                # editable text or slides
|-- assets/                # images, references, and other inputs
`-- output/                # reviewed deliverables
```

Keep the team's existing Word or slide workflow if it serves the collaboration. A plain-text publishing pipeline may add a template and a build command, as described in the toolkit. Preserve the reviewed deliverable when its exact appearance matters; generated caches and temporary renders need not be shared with it.

# Appendix B. Prompt bank

<!--
STATUS: revised · PHASE: 3 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26
SOURCE: Copyable requests in §§3, 7, 9–15, repeated verbatim.
COVERS: First session, project setup, and task-specific research delegation.
VERIFY: Copies checked mechanically against their chapters. New examples are instructional; only the historical literature run and §12 simulation have recorded executions.
-->

These requests repeat the chapter examples in reading order. Adapt file names, access rules, and specifications to your project. Read the relevant chapter for the evidence to inspect afterward; a prompt alone cannot establish that the task was done correctly.

## Where to run it (§3)

*Create a practice folder.*

> This is an empty practice folder. Create `notes.md` with exactly these three lines: “Meeting: Friday.” “Bring: draft figure.” “Open question: label units.” Create a short `CLAUDE.md` saying that this folder contains invented practice notes, that only files in this folder are in scope, and that nothing should be published or sent to another service. Initialize git, review which files will be tracked, and make an initial local commit. Do not set up a remote repository.

*Make one small edit.*

> In `notes.md`, change Friday to Monday and turn the open question into a checkbox. Keep the other wording. Show the changes, but do not commit them yet.

*Restore only the practice file.*

> Restore only `notes.md` to its initial committed version. Leave every other file alone. Show the restored contents and confirm that this file has no remaining changes.

## Project structure (§7)

*Set up a small project.*

> Set up this folder for the paper described in my notes. Create a short `CLAUDE.md`, a `README.md`, and a `TASKS.md`, plus folders for approved inputs, code, and outputs. Use my existing naming conventions. If loose files need moving, show the proposed destinations first. Preserve originals. Set up git and an ignore file that excludes restricted inputs, credentials, and rebuildable caches. Show the resulting tree and proposed tracked files before committing.

## Bookkeeping (§9)

*Start a session.*

> Read `STATUS.md`, then `TASKS.md`, and tell me where we are. Then run `git status` and tell me if anything is uncommitted.

*Finish a session.*

> Update `TASKS.md`: move what is finished to Done with today's date, and on each In Progress item say what is left, not what was done. If that moved the project's state, rewrite the line of `STATUS.md` it changed, and the date. Then show me `git status` and propose a commit message.

## Literature search and synthesis (§10)

*Search and screen.*

> Run a literature search on how long peer review takes and what it varies with. Write `protocol.md` first and show it to me before running any query: the question, inclusion and exclusion criteria, 2000 onwards, English, and which sources. Search OpenAlex and Crossref, plus PubMed. Save every raw response and log every query with its date. Deduplicate by identifier then by title and year. Screen on title, then abstract, recording a reason from the protocol for every exclusion, and bring me the borderline set rather than deciding it. Then re-fetch every surviving record by its identifier and check the title, first author and year against what you have; anything that will not resolve goes in `unverified.md` with its source and a proposed manual-verification route. Do not cite an unverified record. Do not exclude a relevant book or report solely because it lacks an identifier. Extract one row per included paper with design, data source, coverage, period, which interval was measured, which determinants were examined, the finding, and the stated limitation. Leave a cell empty rather than filling it from an abstract that does not say. Emit `references.bib` and `references.ris`.

*Synthesize from full texts.*

> Using only the verified full texts, draft a synthesis of the findings relevant to our question. First give a table linking each claim to its supporting page, table, or passage. Distinguish reported limitations from information not yet extracted. Preserve disagreements and differences in outcome definitions or samples. Flag corrections, retractions, and sources unavailable in full text. Leave unsupported claims out of the draft and list them as open questions.

## Getting data (§11)

*Check terms before downloading.*

> Before downloading anything from IPUMS USA, tell me how it is meant to be accessed (an API, a bulk file, a query tool), whether it needs a key, and what its terms say about redistribution, attribution, and linking. Link the current terms and quote the short clauses relevant to this request. Separate those clauses from your interpretation, and flag anything requiring my decision.

*Acquire with provenance.*

> Fetch the 2018–2022 ACS five-year county estimates for the variables in `METHODOLOGY.md` § Covariates, through the Census API, with the script in `code/_data-acquisition/fetch-acs.R`. Save the JSON response exactly as received to `data/raw/public/acs-5yr-2022.json`, and add an entry to `data/raw/sources.md` with the request, the date, the vintage, and the file's checksum. Do not modify anything else in `data/raw/`.

## Analysis: data, models, and figures (§12)

*Inspect without changing.*

> Inspect the synthetic birth records and county-month heat file named in `CLAUDE.md`, alongside their data dictionaries. Identify the observation unit, key fields, duplicate keys, missing-value codes, and any discrepancy between the files and documentation. Do not alter data yet. List questions that affect the planned join or derived variables, with the field and evidence behind each question.

*Implement agreed cleaning rules.*

> Implement the approved cleaning rules in `METHODOLOGY.md`. Preserve the original files. Join each birth to its county-month heat record, requiring at most one heat record for each key. Keep unmatched births flagged for review; do not drop them or fill their exposure values. Save the derived file, the script, and a report of duplicate keys, unmatched records, row counts before and after each step, and checks on the derived values. Stop if a join duplicates birth records. Do not replace missing inputs with simulated values.

*Implement the model.*

> Implement the main model in `METHODOLOGY.md` on the approved analysis file. Save the exact specification, estimation sample identifiers, software settings, diagnostics, and the postestimation quantities listed there at full precision. Flag any unavailable option or unidentified parameter rather than substituting another specification. Keep the real-data analysis separate from all simulation code. Report discrepancies without adjusting the model to remove them.

*Draw from saved results.*

> Build the planned exposure-response figure from the saved prediction table, without refitting the model. Use hot days on the horizontal axis and predicted birthweight in grams on the vertical axis. Show the saved interval bounds and the groups specified in the figure plan. Save the plotting script, the exact plotting data, and the figure. Report any missing groups or intervals; do not interpolate missing estimates or change the scale without asking.

*Run the teaching calibration.*

> Reproduce the teaching calibration in `code/_experiments/simulate-main-model.R` using the synthetic county-month design. Use the three stated effect sizes, 200 repetitions each, and the specified normal-cutoff intervals with county-clustered standard errors. Save bias, coverage, rejection rate, and Monte Carlo uncertainty. Identify which features of the demonstration would need changing for the actual analysis. Do not read restricted data, modify the empirical pipeline, or describe this small demonstration as validation of the paper's method.

## Verification (§13)

*Request an independent implementation.*

> Working only from `METHODOLOGY.md`, the data dictionary, and the files in `inputs/`, independently implement the complete analysis in Stata, from input processing through the reported estimates and postestimation quantities. Do not consult another implementation or its results. Stop and report any missing input or ambiguity; do not invent columns or values, or substitute simulated data. Save your code, a record of the inputs used, sample membership and exclusion counts, the derived analysis data, and labelled results at full available precision. Keep all outputs in this project folder.

*Compare the implementations.*

> Compare the completed implementations against `METHODOLOGY.md` and its verification tolerances. Check their input files, record membership, exclusions, derived variables, model specifications, and reported quantities. Produce a table of agreements and discrepancies, with the values from each implementation where applicable. For each discrepancy, identify the earliest stage at which the implementations diverge. Report your findings without changing either implementation or its outputs.

*Review methodological justification.*

> Review the analysis proposed in `METHODOLOGY.md` against the research question and study design. Identify assumptions needed for the intended interpretation, choices the available information does not justify, and relevant methodological literature. Explain where each source applies to this design and where it does not. List unresolved questions for a statistician. Do not change the specification.

*Plan calibration.*

> Propose a calibration plan for the estimand, analysis, and decision rule in `METHODOLOGY.md`. Include plausible data-generating scenarios and departures from the fitted model. For each scenario, state the known target, how you will calculate it, the performance measures, and how you will quantify simulation uncertainty. Explain how you will check that the generated data respect the design and outcome constraints. Keep simulated files separate from real-data inputs. Present the plan before running it; do not change the analysis to make it pass.

## Writing, revision, and talks (§14)

*Constrain drafting to the evidence.*

> Use only what is in `METHODOLOGY.md`, `outputs/tables/`, and the figure captions. Where a claim, a number, or a reference is not in those files, leave a bracketed gap and list it at the end. Do not fill it from what you know.

*Draft a reviewer response.*

> Draft the response to reviewer 2 in `docs/briefs/2026-09-02-r2-response.md`. Quote each comment in full, then respond. My decisions are in the bullets under each comment in `docs/notes/r2-plan.md`; do not add concessions I did not make. Where the manuscript changed, cite the new line numbers from `manuscript/revision-1.docx`. Lead each response with the answer.

## Reproducibility and hand-off (§15)

*Test a clean copy.*

> Prepare a clean-copy reproduction test using the README and input manifest. Identify missing inputs and their approved acquisition route before running anything. Restore the recorded environment without upgrading it. For shareable inputs, run the documented analysis and compare the reported quantities with the saved results using the agreed tolerances. For restricted inputs unavailable here, run only the synthetic smoke test and state that real-data reproduction remains to be completed in the approved environment. Save commands, logs, and discrepancies. Report failures without changing the analysis or comparison criteria.

*Review a proposed deposit.*

> Review the proposed deposit folder against the manuscript, code, and input manifest. Report confidential material, credentials, unresolved paths, missing dependencies, incomplete input-access instructions, and claims the code does not support. Preserve relevant AI disclosure and research provenance, including prompts and model-evaluation records. Check contributor metadata and licenses. Do not upload, delete files, rewrite history, or remove methodological documentation; propose specific corrections for review.

*Evaluate held-out LLM measurements.*

> Apply the frozen labeling rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. Once labeling is complete, compare with the independently adjudicated reference. Report the confusion table, errors by category, uncertainty, referral rate, and the prespecified acceptance criteria. Do not tune the prompt on this sample or drop difficult cases. List disagreements for human review.

# Appendix C. Glossary

<!--
STATUS: revised · PHASE: 2 · DRAFTED: 2026-08-27 · REVISED: 2026-09-26
SOURCE: Terms defined in the guide.
COVERS: App-based research workflow vocabulary. Terminal primer moved to toolkit Part V.
VERIFY: Cross-checked with revised chapters; product definitions share their linked sources.
-->

*Agent.* An LLM working through tools that can read files, run commands, and edit the project. It uses each tool's result to decide what to do next (§2).

*Assertion.* A one-line check in a script that stops it when a stated expectation fails: `stopifnot()` in R, `assert` in Stata and Python (§13).

*Auto mode.* A Claude Code permission mode that combines permission rules with automated classification of actions requiring review. It reduces routine prompts but still needs defined access limits (§4).

*Brief.* The project instructions: its purpose, files, execution sequence, and access rules. Keep them in `CLAUDE.md`, or use the optional `AGENTS.md` import described in §6.

*Build.* The one command that produces every output the paper reports from the scripts and the data (§15). *One-command build* means the same.

*Calibration.* Assessing an estimator or decision rule on simulated data with known properties. Conclusions apply to the scenarios and performance measures examined (§12, §13).

*Commit.* A recorded version of the project's tracked files, with a message describing the changes. It provides a point you can compare with or restore later (§5, §9).

*Context window.* The limited amount of material the agent can use at once, including messages, file contents, and tool results (§6, §18).

*Decision rule.* What the paper will claim and on what basis: an interval excluding zero, a posterior probability above a threshold (§12).

*Deny rule.* A software-enforced rule blocking matching tool actions. Its coverage depends on the tool and execution route; a file-tool denial alone does not block every arbitrary script (§5).

*Diff.* The line-by-line difference between two versions of the files; what you review after a task (§9).

*Effort.* How much the model reasons before it acts; a setting with levels (§4).

*Environment variable.* A named value passed to a process and usually its children. Credentials may be supplied this way; a receiving process can read them (§11).

*Estimand.* The quantity the analysis is trying to estimate, stated before the model is fitted (§12).

*Global file.* An instruction file holding conventions that apply across your projects (§6). Project-specific instructions belong in the project file, defined here under *brief*.

*Import.* In a `CLAUDE.md`, a line beginning with `@` that pulls another file in at the start of the session (§6).

*LLM.* Large language model: the AI that generates the text, and what a chat assistant and an agent both run on (§1). Which LLM, and at which version, is what this guide calls the *model* (§4, §15).

*Lockfile.* A committed list of every package and its version, from which the environment can be rebuilt: `renv.lock`, `uv.lock` (§15).

*Model.* Two senses: the LLM the agent uses, whose identifier and available settings should be recorded when it contributes to a result (§4, §15); and a statistical model fitted to data (§12).

*Monte Carlo error.* The noise in a result that comes from random draws (a bootstrap, a Markov chain), against which two sampling-based results are compared (§13).

*Permission mode.* The setting that decides which actions the agent may take without asking (§4).

*Plan mode.* A mode for inspecting the project and developing a plan before implementation. It may write planning records, but does not authorize ordinary project changes (§4).

*Prompt.* Two senses. A yes-or-no question the agent puts to you before an action, with the action shown (§4, §5); and, in Appendix B, a request you type to the agent.

*Provenance.* The record of where a data file came from, when, by what request, and under what terms (§11).

*Raw data.* Data as received, never modified; everything derived from it is rebuilt by code (§7, §11).

*Sandbox.* Operating-system restrictions on covered execution. Configured limits can constrain reads, writes, and network access; exempt or separately launched tools need separate review (§5).

*Session.* One conversation with the agent, with its own context window (§18).

*Usage window.* The period over which an account's usage allowance is measured. Check the limits for the actual plan (§17).

*Version control.* A system such as git that records chosen versions of tracked files, allowing comparison and restoration (§5).

