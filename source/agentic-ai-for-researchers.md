---
title: Doing Research with AI Agents
title-page: |
  Doing Research\
  with AI Agents
version: "1.7 draft"
---

<!-- ===================== PART I — START ===================== -->

# 1. How agents can help your research {#research-uses}

Research often slows down between the substantive decisions: locating the right files, implementing a revision, checking what changed, and getting the new results into a manuscript. An agent can do much of that work inside your project. The opportunity is to spend less time moving information between applications and more time deciding what the research should establish and whether the evidence supports it.

Suppose a collaborator asks for a figure with a different age grouping. An agent can find the saved estimates, identify whether they support that grouping, revise the relevant script, run it, and open the figure. If the grouping requires a new analysis, it should say so. The useful result is a checked figure and a saved way to recreate it, with a record of what changed.

## Three research uses

*Develop ideas.* Use an agent to explore explanations, find counterexamples, or challenge a proposed design. Supply your question and the constraints that matter. Treat the suggestions as possibilities to investigate: the model can generate a plausible account without establishing that it is true.

*Develop and run research code.* Delegate data preparation, analysis scripts, figures, document builds, and project maintenance. You choose the research question and method; the agent implements them and supplies evidence about its work. A saved workflow lets you repeat that work without another agent conversation.

*Use a model within the research method.* An LLM might classify interview passages, extract information from documents, or judge a set of reviews. Its outputs then become research measurements. You need a recorded protocol and evidence about the measurements' quality, not just evidence that the software ran (§12).

These uses can occur in the same project, but they need different checks. An idea needs substantive support. A program needs to implement the intended analysis. A model-generated measurement needs evaluation against the construct you intend to measure.

![](figures/research-uses.svg){#fig-research-uses fig-alt="Three research uses: explore ideas, build executable research workflows, and produce model-based measurements. Each has a different source of evidence."}

## How an agent works

An agent combines a language model with tools and a loop: choose an action, use a tool, inspect the result, and decide what to do next. Tools let it read files, edit them, run programs, search sources, and view outputs. The available tools and permissions determine its reach.

For example, a script fails because it expects `birth_weight`, while the input column is `birthweight_g`. The agent can read the error and the data dictionary, propose the intended mapping, change the script, and run it again. It has feedback from the project. That feedback makes correction possible; it does not establish that the resulting analysis answers the right question.

A chat product may also have tools. The useful distinction is whether the assistant can do the delegated work in your project, rather than requiring you to carry each answer into another application. You can use your existing R, Stata, or Python workflow; adopting an agent does not require changing research languages.

## Your role

State the result you want, the constraints, and the evidence you will use to accept it. Review consequential choices and inspect the outputs. Write down project decisions so they survive a conversation. Keep material outside the agent's reach when the service is not permitted to process it.

You do not have to read every generated line of code to supervise well. Known-answer examples, comparisons, source checks, and reproducible runs provide evidence about behavior. When they expose a discrepancy, inspecting a particular calculation can help explain it (§11).

Some research ends in a dashboard, interactive tool, or service rather than a paper. The same practices apply, with an additional commitment: someone must maintain the tool, support its users, and manage the information it collects. Establish that responsibility and the applicable institutional requirements before involving users.

## A route through the guide

Start with a harmless first session (§2), establish the limits for real research material (§3), and learn to direct a task (§4). Then give the agent project context, shared conventions, and reusable procedures (§§5–7). The research chapters follow sources and data through execution, checking, writing, and handoff (§§8–14). The reference pages hold starter files, links to requests, a glossary, the full calibration example, and troubleshooting.

The examples use Claude Code in the Mac desktop app. No terminal or git knowledge is needed to begin. Version control is strongly recommended once you work on a real project; the agent can maintain it. Harvard access details appear beside the relevant topic. The companion [*Extending Your Agent's Toolkit*](https://dss-agentic-toolkit.pages.dev/) supplies additional tools when a research task calls for them.

# 2. Your first agent session {#first-session}

A small, disposable task lets you learn how to give instructions, inspect a saved result, and correct it before entrusting an agent with research work. You need an account with access to Claude Code and the desktop app. This exercise uses invented notes, so it needs neither research data nor an analysis language, terminal, or git repository.

You will ask the agent to save a meeting note, change the meeting day, restore the original, and leave a record for a new session. The evidence is three short files you can open yourself.

## Install the app and open a folder

Download the Mac app from the [official desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart), install it, and sign in with the account authorized for your work. Open the *Code* tab. If it is unavailable, check your account's access with your administrator; a chat-only account may not provide it. The desktop app includes Code, so a separate command-line installation is unnecessary.

In Finder, make an empty folder named `agent-practice`. In Code, select a *Local* environment and open that folder using the folder selector. Choose *Auto* mode if your account offers it. Auto lets routine work proceed while the app evaluates actions for risk; it does not grant unrestricted access. If Auto is unavailable, use the offered approval-based mode and approve only this exercise's file changes. §4 explains the choices.

> **Harvard.** Request access through [HUIT's Claude page](https://www.huit.harvard.edu/claude), using your school's or unit's form. Sign into the Harvard account. Features and modes can depend on institutional settings. Data eligibility is a separate decision, covered in §3.

The control names above follow the current documentation. If your layout differs, use the quickstart's layout guidance. A fresh-account walkthrough remains part of this guide's pre-release checks; the exercise below is an authored teaching example.

## Create something you can inspect

Send this request:

> This is a disposable practice folder containing no research data. Create `notes.md` with exactly three lines: “Meeting: Friday.” “Bring: draft figure.” “Open question: label units.” Save an identical copy as `notes-original.md`. Work only in this folder; do not publish, send messages, install software, or set up git. Tell me which files you created.

Open both files in Finder or the app's file view. A `.md` file is ordinary text; the extension identifies Markdown. Check that both contain the requested three lines. The agent's claim that it finished is not a substitute for opening the files.

Now send:

> In `notes.md`, change Friday to Monday. Replace the last line with `- [ ] Add units to the figure.` Keep the middle line unchanged. Leave `notes-original.md` untouched.

Your edited file should read:

```
Meeting: Monday.
Bring: draft figure.
- [ ] Add units to the figure.
```

The original copy should still say Friday. You have checked a specific change and a preservation requirement without reading code.

## Correct or undo a change

If the result differs, name the discrepancy: “You changed the middle line too. Restore its original wording.” You can steer the agent during a task or use the stop control to interrupt it. Stopping does not undo earlier file changes.

Practice recovery:

> Restore `notes.md` from `notes-original.md`. Leave the original copy intact. Show the restored note.

Open the file and check Friday and the original question. Then request the Monday-and-checkbox change again. A copy is adequate recovery for this tiny exercise. For a real project, use agent-maintained version control to retain a sequence of recoverable states (§3 and [toolkit chapter 4](https://dss-agentic-toolkit.pages.dev/chapters/version-control.html)).

## Resume from a written record

Send:

> Create `TASKS.md`. Record that the practice note was created and corrected. Leave one open task: add the figure's units after I supply them. Record that `notes-original.md` is the recovery copy. Do not invent the missing units.

Start a new Code session on the same folder and ask it to read `notes.md` and `TASKS.md`, then tell you the next task without editing anything. It should identify the missing units. The session can resume because the record is in files, not because you retold the conversation.

For real work, first establish what the agent may access (§3). Project instructions and a maintained status record (§5) make this handoff easier as a project grows. Other app surfaces, including Chat, Cowork, and Science, may offer useful capabilities; this guide's local Code route is chosen so the agent can work with your existing research files and programs.

# 3. Set the limits for your research {#research-limits}

Delegating a task should not put data outside the terms under which you received them or make an ordinary mistake irreversible. Decide what the agent may process and change, enforce those decisions through the available controls, and keep a recoverable version of the work.

For example, a birth-records agreement may prohibit sending records to an outside service. You could ask a hosted agent to develop code using an approved schema and invented observations, then run that saved code in the restricted environment. An institutional promise not to train on your data would not, by itself, authorize sending those records or retaining their contents elsewhere.

![](figures/research-data-routes.svg){#fig-research-data-routes fig-alt="A hosted agent receives approved synthetic inputs and may retain context. Saved code crosses into a separate restricted environment, where real records remain inaccessible to that agent."}

## Establish the permitted route

Check the data classification, the service and account approved for it, and the terms governing this particular project. These may include consent, a data-use agreement, an IRB protocol, contractual confidentiality, or health-data requirements. If the intended AI processing is unclear, ask the responsible institutional office before proceeding. An account setting cannot override those terms.

Assess every processing route, including connected services and hosted models used by local tools.

> **Harvard, checked November 2, 2026.** [HUIT's Claude guidance](https://www.huit.harvard.edu/claude) approves Harvard Claude Chat and Code for data up to Level 3, and Cowork up to Level 3 provided you actively monitor autonomous sessions. Inputs are not used for training. Connectors require security and privacy approval. HUIT lists Claude Science as available but does not specify its data-level approval in this guidance; confirm that separately before supplying restricted material. Your project's terms may be narrower than the service approval.

Record the decision in the project file: which inputs the agent may use, which processing is allowed, and which outputs may be shared. Distinguish approved public-data acquisition from ordinary analysis: the former can create a new original file and provenance entry, while the latter should preserve those originals.

## What can reach the model

A local agent can read whole files or substantial portions of them into context, as well as receive excerpts, tool outputs, logs, and errors. Whatever the tool supplies may be sent to the hosted model. Choosing a local folder describes where work runs; it does not make the model local.

Review dictionaries, code, filenames, logs, and derived outputs as well as data files. Aggregation does not automatically remove disclosure risk or sharing restrictions. Preserve approved originals separately from deciding whether the agent may read them.

## Training and retention are separate

A promise not to train on submitted data does not mean that no copy is retained. Retention can depend on the product, organization policy, and contractual arrangement. Anthropic documents [organization-controlled retention for Enterprise plans](https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans); this guide does not establish Harvard's current retention duration. Confirm it through the institutional service guidance when it matters to the project.

Deleting a conversation is not a substitute for having permission to submit the material. Nor does an opt-out setting on a personal account give it the coverage of an institutional agreement. Use the approved route established above.

## Work with synthetic inputs when access is not permitted

The agent can write and test code using an approved schema and invented records with the relevant types and structure. Keep that work in a folder available to the agent. Run the resulting code on real data only in the approved environment, with no agent access unless separately authorized. Share only outputs that have been cleared for that purpose.

This is a development and testing route, not proof that the code will handle every feature of the real data. Check the actual run, and use the implementation and calibration checks in §11 within the permitted environment.

## Allow, ask, and deny

Permission rules determine which recognized actions are allowed, require approval, or are refused. Use them to keep routine work moving and make consequential actions explicit. A useful project policy permits ordinary work on approved inputs, asks before publishing or expanding access, and refuses destructive operations that would remove the recovery history.

These rules are evaluated by the agent software, not merely read as instructions by the LLM. Their coverage still has limits. A file rule can block the built-in file tools and recognized file commands without blocking every script that opens the same path indirectly. The [permissions documentation](https://code.claude.com/docs/en/permissions#read-and-edit) explains this distinction. [Toolkit chapter 2](https://dss-agentic-toolkit.pages.dev/chapters/tool-access.html) supplies the maintained configuration example and explains how to combine it with the sandbox.

Do not approve an unfamiliar request just to keep work moving. Ask what it will change and why the existing access is insufficient. Repeated approval requests may indicate a missing routine permission; they do not justify allowing every command. Changes to security settings deserve a separate review because they affect later tasks too.

## What the sandbox adds

A *sandbox* restricts the programs running inside it at the operating-system level. Depending on its configuration, it limits file reads, writes, and network access, including access by subprocesses. It adds protection beyond matching the command the agent proposed.

The qualification is important: those limits apply to sandboxed execution. A command exempted from the sandbox, a queued job launched by another service, or a separately connected tool may have different access. Read restrictions also have to be configured; do not assume the selected folder is the only readable location. See [Claude's sandbox documentation](https://code.claude.com/docs/en/sandboxing) and [toolkit chapter 2](https://dss-agentic-toolkit.pages.dev/chapters/tool-access.html).

From the app, ask the agent to report which settings apply to the project, whether its command tool is sandboxed, and which exceptions exist. It should inspect the effective configuration, not infer protection from the mode's name. If a required control is unavailable in your app or institution's configuration, use only material safe for that environment while IT resolves the access requirement.

## Check the boundary without sensitive data

Use harmless test files to check a configuration before relying on it. For example, create a file containing an invented phrase in a path intended to be unreadable, and another approved file that the agent should read. Test both the direct file tool and a small script that tries to read the denied test file. The expected result is a refusal for the denied path and success for the approved one. Test write protection on a disposable file too.

Ask for the actual success or failure messages. If a call prompts to bypass the restriction, decline it; retrying outside the sandbox would test a different boundary. These checks can reveal a misconfiguration, but they do not certify every tool or future session. Repeat them when access settings or execution routes change. Never use a real confidential file as the test.

## Keep a recoverable version

For a real project, strongly consider git from the start. Ask the agent to maintain local checkpoints of the files you intend to track, keep unrelated edits separate, and describe the scope of each checkpoint. After a task, inspect the changed outputs and any consequential implementation detail. Have the agent record the accepted state; you need not learn git commands first. [Toolkit chapter 4](https://dss-agentic-toolkit.pages.dev/chapters/version-control.html) covers setup and recovery.

Without version control, make a dated copy of the working folder before substantial edits, preserving original data separately. This is a workable beginning, though it becomes harder to distinguish changes as the project grows. Ask for recovery of named files, not a blanket reset of the whole project.

Git protects tracked versions. It does not recover ignored data, reverse an upload, or replace backups. A git ignore rule neither blocks reading a file nor removes it from existing history. Never commit credentials or restricted data merely to make a recovery point.

## When a container helps

A *container* supplies a separate software environment and can limit what a task reaches. It is useful for running an unfamiliar replication package or preparing an environment to hand to a collaborator. Its protection depends on the folders mounted into it, credentials passed to it, network access, and privileges. Anything made available through those routes remains available to the code inside.

The toolkit's container section explains the setup and its limits. A container is not permission to expose restricted data or to disregard the source of code you run. For ordinary tasks, start with approved inputs, the configured safeguards, and a recoverable checkpoint; add a container when the task needs that extra separation.



Decide what the agent may see before opening a research folder. This chapter explains how to check whether your account and project terms permit the planned work, use synthetic inputs when needed, and respond if information is exposed accidentally. Your institution's current rules determine what is allowed; the access controls in §3 help enforce that decision.

## If material is exposed accidentally

Stop further agent access and any ongoing transfer. Record what was exposed, to which service and account, when, and through which tool. Use your institution's incident-reporting route promptly and follow its instructions for containment and record handling. Do not assume that deleting the conversation resolves the incident or erase the evidence needed to assess it.

## When this app cannot support the task

If the approved route cannot process the required data and synthetic inputs are insufficient, consult research IT about an appropriate environment. Running a model locally may offer more control over data flow, but still requires authorization, suitable security, and evaluation of the model's performance. It is a different setup, outside this guide's app-only path. When the LLM itself must examine sensitive material, synthetic development cannot substitute for the actual measurement. An approved locally hosted open-weight model is one possible route; its tools, logging, and network access still need controls. Performance must be assessed for the research task (§12).

# 4. Give the agent a task you can assess {#directing-work}

A clear request prevents the agent from spending time solving a different problem. Specify the research outcome and its constraints, then choose how much planning, reasoning, and supervision the task needs.

For example, “update the main figure” leaves the source estimates, sample, and intended change unspecified. “Redraw Figure 2 from the saved estimates, label the effect in grams per additional hot day, and keep the sample and model unchanged” gives the agent a task you can assess. Check the figure and the saved estimates; a successful rendering command alone is insufficient.

## Permission modes

A *permission mode* determines when an action needs approval. Use the mode selector beside the app's prompt box. The everyday choices described in the linked documentation are:

| Mode | What it changes | When it is useful |
|:--|:--|:--|
| Manual | Usually asks before edits and commands, subject to existing rules | Learning the controls or deciding individual actions |
| Accept edits | Allows file edits and common file operations; other commands may prompt | Work where edits are routine but command execution needs attention |
| Plan | Explores the project and proposes an approach before changing the analysis | Work with unresolved scope or consequential choices |
| Auto | Reviews actions automatically and permits routine work with fewer interruptions | Most daily work within established boundaries |

The names and availability follow [Claude's permission-mode documentation](https://code.claude.com/docs/en/permission-modes). An institution may restrict the choices. Existing allow and deny rules also affect what happens, so Manual is not a promise to ask about every possible action, and Auto is not unrestricted access.

Two additional modes are worth understanding. *Bypass permissions* removes most permission checks; its availability is controlled by the app settings or your organization. It requires a separately isolated environment and is not the recommended mode for an ordinary local research project. *Don't ask* refuses actions that would otherwise need approval. It is intended for unattended use and has no app selector; the toolkit covers that terminal workflow. Neither is a substitute for setting the access limits in §3.

For normal work, I use Auto after defining the permitted files and actions and checking the safeguards. I then review the result. Repeatedly approving routine edits adds little if I stop reading the prompts. For a genuinely consequential action, such as publishing results or changing a data-access boundary, I want a deliberate decision. If Auto is unavailable, use the modes your institution provides.

A more cautious mode does not authorize the use of restricted data. Establish whether the service and the intended processing are permitted before opening those files (§3).

## Plan mode

Use Plan when either the goal or the approach needs clarification. Select it in the app and describe the result, constraints, and relevant files. Ask for a plan that names the proposed changes, unresolved questions, and evidence it will use to check the work.

Read for assumptions, not just steps. Has it chosen the right input file? Does it intend to preserve the original sample? Has it silently replaced an expensive model with an easier one? Correct those choices, then authorize implementation and select an execution mode.

For a difficult plan, ask one or two fresh agent sessions to challenge its assumptions, identify failure cases, and propose alternatives. Supply the research question, constraints, and relevant literature as well as the plan. A critic that sees only the proposed answer can accept its assumptions too readily. Reconcile the critiques into a revised plan, resolving disagreements using evidence and the project's requirements. You decide which changes to accept. Agreement between agents does not establish methodological validity (§11).

When the goal and method are clear, a direct instruction is usually enough. Use Auto within the established access limits when it is available. If you have already supplied the transformation rules, the agent can implement them and show the checks without a separate planning round.

## Model and effort

The *model* is the LLM doing the work. *Effort* controls how much reasoning it uses. Pick the model in the app's model menu; use the effort control there when it is offered. Available models, effort levels, and defaults vary by account and model, so use the labels in your installation rather than memorizing a list. The [model documentation](https://code.claude.com/docs/en/model-config) explains the current options and usage implications.

![](figures/model-effort.svg){#fig-model-effort fig-alt="Model capability and reasoning effort can both increase as a task moves from a specified procedure to an open-ended problem." above="6pt" below="6pt"}

A routine formatting change rarely needs the same resources as designing a calibration study or investigating conflicting estimates. I start consequential research work with a capable model and high effort, then reduce them for clearly specified, repetitive tasks. More reasoning can improve a difficult implementation, but it cannot supply evidence the agent has not read or make an unsuitable specification appropriate.

Both choices respond to how much the agent must work out along the way. They can be adjusted separately: a capable model can still be useful at lower effort when the procedure and checks are clear. Task consequences and the evidence needed to verify the result also matter.

Check the account's usage display before launching several substantial tasks (§4). Model names change, and a newly offered model may have different usage terms. A faster response is useful only if the result still meets the checks you set.

## Usage and cost

Models process text in small pieces called *tokens*. A token can be a word, part of a word, or punctuation. Reading project material, reasoning about a task, and producing a response all use tokens. Model choice and account terms affect how that processing draws on your usage allowance; there is no universal number of messages or words per allowance.

Use the app's usage display to see the applicable allowance and reset information; the [desktop reference](https://code.claude.com/docs/en/desktop#check-usage) describes its location. Available models and extra usage can have different terms, so check what the account offers before a large task. For Harvard, the current license route is in §2.

As of October 2026, Claude documents both a five-hour session limit and a weekly limit for Pro, Max, Team, and seat-based Enterprise plans. The same work counts toward both: a five-hour reset does not clear the weekly limit. The usage display shows the reset times that apply to your account. Usage-based Enterprise plans use consumption billing instead. See [Claude's usage-limit guidance](https://support.claude.com/en/articles/9797557-usage-limit-best-practices). These allowances are separate from the context window, which limits how much information the model can work with at once.

Large inputs, lengthy outputs, higher reasoning effort, and several concurrent agents can increase usage. The accounting also depends on caching and the plan, so message count is a poor proxy for cost. Keep requests focused, refer to files rather than pasting repeated copies, and save results and decisions outside the conversation.

A long computation does not inherently consume LLM tokens while it runs. Repeated progress queries and large logs can, however, use the agent unnecessarily. Let a suitable application or queue run the saved script, then have the agent inspect the relevant log and outputs (§10). Verify that the job actually completed.

## The supervisor stance

Before delegating, state the outcome, constraints, and evidence you will use to judge completion. Request a plan when important choices remain unresolved. Afterward, use that evidence to decide what to accept and have the agent update the project records (§5). Over time, repeated errors should lead to more precise instructions or stronger checks, so the same failure is less likely in the next task.

<!-- ===================== PART II — DIRECT THE WORK ===================== -->

# 5. Keep a project understandable across sessions {#project-context}

<!-- REVISED: 2026-11-02. SOURCE: former chapters 6, 7, and 9. The worked project is illustrative. -->

Returning to research after a week should not require reconstructing which data were used, why records were excluded, or what remains unfinished. An agent can maintain a short project record as it works. That record lets both you and a new session resume from the current evidence rather than an old conversation.

Suppose the heat-and-birthweight paper has a checked main analysis, an unfinished sensitivity analysis, and two folders of figures. A fresh agent needs to know which results are current before changing a caption. A short status file can identify the saved results and the next task; a methods record can explain the inclusion rule without making the agent infer it from filenames.

![](figures/project-context.svg){#fig-project-context fig-alt="Project instructions, current status, and tasks survive the conversation; checked work updates the record." above="8pt" below="8pt"}

## Start with the project you have

Keep a working lab layout. Ask the agent to identify the analysis entry point, permitted inputs, current outputs, and unresolved decisions. Put that description in a short `CLAUDE.md` in the project folder. Review it before relying on it: an invented filename or exclusion rule becomes a recurring error if saved as an instruction.

> Read the README and the files I have identified as current. Propose a short project instruction file stating the research purpose, permitted inputs, analysis entry point, outputs, and decisions that require my input. Mark anything you cannot establish as unknown. Preserve the existing layout and files.

For a new project, folders for inputs, code, outputs, and manuscript source may be enough. Keep original inputs unchanged and rebuild derived files through scripts. The fuller layouts in [Starter files](#starter-files) are references to adapt, not a required folder hierarchy. If the project is cloud-synced, consult the toolkit's [version-control chapter](https://dss-agentic-toolkit.pages.dev/chapters/version-control.html) before creating repository metadata or large generated environments there.

## Give the files distinct jobs

| File | What belongs there |
|---|---|
| `CLAUDE.md` or an imported `AGENTS.md` | Project instructions, permitted inputs, entry points, and pointers to the other records |
| `STATUS.md` | Current state: which analysis and outputs are current, what is underway, and what is blocked |
| `TASKS.md` | To Do, In Progress, and Done, with dates and evidence for finished tasks |
| `METHODOLOGY.md` | Reasons for analytical choices, changes, and rejected alternatives |
| `README.md` | A collaborator's introduction and instructions for using the project |

Start with the instruction file and add the others when needed. A larger project may also need a `PLAN.md` for the analysis sequence and milestones. It should point to the task list and methods record rather than repeat their contents.

Here is the project brief for the invented running example. Its model specification illustrates what to record; it is not a justification of that model for a real causal question.

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

You can keep this directly in `CLAUDE.md`. If the lab maintains agent-neutral instructions in `AGENTS.md`, a `CLAUDE.md` containing `@AGENTS.md` is a supported way to load that one maintained copy. Current Claude versions can also load `AGENTS.md` directly under specified conditions; ask the agent to verify what the installed session actually loaded. The [instruction-file documentation](https://code.claude.com/docs/en/memory#agentsmd) describes both routes. Do not maintain two independently edited copies.

## Update the record while doing the work

At the start of a session, ask:

> Read `STATUS.md`, then `TASKS.md`. Summarize the current analysis, unfinished work, and next task. Check that the named files exist. Flag conflicting or stale records before using them. Do not change the analysis yet.

After setting the task, have the agent record it as In Progress. Before closing the session, ask:

> Update the task list from the work actually completed. For each finished item, record the date and evidence; for unfinished items, state what remains. Rewrite the affected status lines and date if the project state changed. Record new analytical decisions in `METHODOLOGY.md` and changed run instructions in the README. Do not mark a task finished just because its code was written.

For example, an illustrative status update might be:

| Before the task | After the task and its checks |
|---|---|
| Figure 2 uses the previous labels. | Figure 2 rebuilt from the saved predictions with the approved labels. |
| Next: correct labels; then review the sensitivity analysis. | Next: review the sensitivity analysis; no model refit was needed for the label change. |

The task list receives the dated completion entry. The status file describes the resulting state, without accumulating a second history of the task. If version control is in use, the standing instruction from §3 can have the agent record a version after completing the task. Neither maintaining these records nor producing a status report requires git.

Open one claimed output and check it against the request. If an analysis was supposed to run, inspect its actual result or failure record. After a rename, have the agent find references to the old path and test the affected command. Update the README in the same task.

## Keep enough context without loading everything

The context window is the material available to the model during a session: messages, loaded instructions, file content, and tool results. Long histories can crowd out the information needed for the next task. Keep the project brief short and point to detailed records by purpose. Give the agent a current file path rather than pasting a copy that will become stale.

A written pointer tells the agent when to consult a file; an `@` import loads the referenced instructions as part of the instruction file. Use imports deliberately. Keep global style and modeling conventions in the next chapter's shared files rather than copying them into every project.

Auto memory is another source of carried-over context. Ask the agent to show relevant saved notes when its assumptions conflict with the project record. Correct stale notes and keep consequential decisions in the maintained project files. Starting a new conversation does not establish that no prior information will be loaded; §12 explains deliberate context control for research measurements.

## Reorganize only when it helps the work

If the current layout is usable, documenting it may be sufficient. If several folders compete to be the current analysis, first make a recoverable copy outside the folder. Ask for an inventory and a table of proposed old and new paths with reasons. Review ambiguous duplicates and save the agreed table before authorizing moves.

Preserve originals and put uncertain duplicates aside. After moving files, update their references and rerun the affected work. Keep the earlier copy until the required outputs rebuild. Reorganizing a folder should not silently change the analytical sample or methods.

For several papers under one grant, each paper still needs its own methods, input-version record, and checks. A coordinating workspace can help identify which papers depend on a shared dataset; it does not replace those records. Claude's [Projects documentation](https://code.claude.com/docs/en/claude-projects) describes the current multi-repository option. Chat Projects can also retrieve passages from an uploaded reference collection; ask for the supporting passages and check them, as in §8.

# 6. Apply your conventions across projects {#shared-conventions}

<!-- REVISED: 2026-11-02. SOURCE: former chapter 6 and the shared-lab-conventions draft. -->

Repeatedly correcting the same coding style, reporting convention, or prose habit wastes attention you could spend on the research. Save instructions that apply across projects in one shared place. Each new project can then supply its own question, data, and analytical decisions without restating your working preferences.

Suppose three papers should report uncertainty alongside every estimate and preserve existing package environments. Those rules can be shared. The estimand, exclusion rule, and current model for each paper belong in that paper's record. Changing the lab's reporting convention should not require finding and editing three copies of it.

![](figures/shared-conventions.svg){#fig-shared-conventions fig-alt="One set of global or lab conventions applies across three projects, each of which retains its own question, inputs, and decisions." above="8pt" below="8pt"}

## Write rules you can recognize in the result

Include recurring preferences about code, writing, file naming, reporting, and access. Make them specific enough to assess. “Preserve the project environment and report any required package change” is more useful than “be reproducible.” A new convention should address a recurring problem, not anticipate every possible task.

In Claude Code, personal instructions can live in `~/.claude/CLAUDE.md`; the tilde means your home folder. Ask the agent to create or edit the file from the app, and inspect it. The [memory documentation](https://code.claude.com/docs/en/memory) describes personal, project, and managed instructions and how they are loaded. Existing institutional instructions may also apply.

Here is an optional starting file for an R researcher. Adapt it to your actual language and conventions.

```
# How I work

Quantitative social scientist. R first, Stata for collaborators, some Python.

## Projects
- One folder per paper; use version control when agreed. Its AGENTS.md says where things live.
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
- Assess the method with a calibration plan before substantive use (§11).
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

These instructions guide behavior; they do not enforce the access controls in §3. A statistical convention also needs scientific judgment: the project must define which estimand and uncertainty calculation answer its question.

## Split detailed conventions by subject

When a topic outgrows the short global file, move it to a named file such as `WRITING.md`, `CODING.md`, or `MODELING.md`. Leave a pointer explaining when to read it. For a manuscript edit, the agent can consult the writing guidance without loading a long modeling reference.

Ask the agent to apply one new rule to a small task and show the relevant evidence. For example, have it revise a short paragraph under the writing conventions, or report the environment record before editing an analysis script. Merely creating the file does not demonstrate that the session read or followed it.

## Share conventions within a lab

A lab can maintain shared conventions and reusable procedures in a repository that members synchronize to their computers. Review changes in one place, then configure each person's agent instructions to reference the relevant local files. Synchronizing a folder alone does not tell the agent to read it.

Keep each paper's design and current state in that project's records (§5). Where a project needs an exception to a lab convention, document the reason and ask the agent to flag conflicting instructions instead of silently choosing one. The toolkit's [shared-settings chapter](https://dss-agentic-toolkit.pages.dev/chapters/shared-settings.html) covers an optional tool for managing configuration across machines; a lab need not adopt it to share a few instruction files.

# 7. Reuse research procedures you trust {#reusable-procedures}



When a useful procedure recurs, saving its instructions reduces the effort of setting it up again and makes omissions easier to spot. A skill packages those instructions for the agent. It is worth creating after you have a procedure whose inputs, output, and checks you trust.

For example, a coauthor asks for a short status update each week. The project already has `STATUS.md` and `TASKS.md` (§5). A status-report skill can turn those records into a draft, identify missing evidence, and leave sending it to you. It needs neither a git history nor a later research chapter.

## What a skill is

A skill saves a procedure for the agent to follow again. Think of turning data-cleaning code into an R or Python function that accepts different datasets: separate the recurring procedure from the particular input. A skill applies that idea to instructions the agent interprets and carries out. Unlike a function, it does not specify every operation as executable code, so saving it does not guarantee identical execution or outputs.

A skill is stored in a folder containing a file called `SKILL.md`. The file begins with a short header naming the skill and describing when to use it. The rest of the file gives the procedure, much like the requests in §5, §8, §9, §10, §11, §13, §14 and Appendix B. In the app, select the skill from the slash menu, or ask for it by name. The agent may also select it when the request matches its description. Unlike the project instructions, which are loaded every session, a skill's full procedure is loaded only when it is used (§5).

```
---
name: status-report
description: Draft a coauthor update from STATUS.md and TASKS.md when
  asked for a project update. Do not send it.
---

Read STATUS.md and TASKS.md. Check the files they cite for completed work.
Draft one short paragraph in docs/responses/status-draft.md: what is done,
what is in progress, what is next, and what needs the coauthor's decision.
Distinguish verified outputs from a claim in an old note. If the records
conflict or evidence is missing, flag that rather than inventing progress.
Show the draft. Send nothing and do not change the project records.
```

With a project record saying “fit complete; figure labels unresolved,” an illustrative draft might be: “The main model fit is saved and its checks pass. Figure 2 still needs unit labels. Next I will redraw it from the saved estimates; please confirm the wording for the caption.” If no check report exists, the draft must not say the checks passed.

> Create this project skill and run it on our current records. Show the draft and the records supporting each claim. Flag any discrepancy for me to resolve.



The description is the part to write carefully. It decides when the agent invokes the skill unasked, so it says when to use it and when not to, in the same spirit as a rule in the brief. The body is the prompt you would otherwise retype, with the same discipline: where the output goes, what to report, what not to do.

For Claude Code, ask the agent to place the skill in the appropriate location. Each skill is a folder named for it, holding `SKILL.md`:

| | Where |
|:--|:--|
| Every project | `~/.claude/skills/` |
| This project (committed) | `.claude/skills/` |
| Run it | `/name`, or automatically |

The Claude app lists skills under the same slash menu. A skill that needs more than instructions (a report template, a script it should run) keeps those files in the same folder and refers to them by name.

## What to package

Repeating a procedure a few times is a useful signal that it may deserve a skill. First confirm that its inputs, outputs, and checks are stable enough to reuse. The candidates in this guide are already written: the session rituals (§5), a fetch with its provenance entry (§9), the calibration check (§11), the second implementation and its comparison (§11), the number-traceability table (§13), the clean-copy check and the pre-deposit audit (§14). Appendix B links to the maintained requests. Adapt a request only after its procedure works for you.

Keep project-specific facts, such as file locations and data restrictions, in the project instructions. A reusable skill should tell the agent to consult those instructions. Similarly, refer to your global conventions rather than copying them into each skill. This lets you reuse the procedure across projects and update a rule in one place.

For example, a research-folder skill could inventory files and propose a structure, pause for your review and approval, then reorganize and verify file preservation (§5). It could include a saved checksum script alongside its instructions. Each new project's proposed changes still need review; the skill preserves the procedure, not approval of those changes.

My own skills illustrate the kinds of procedures you can save. `/scaffold` creates a project in the paper layout described in §5. `/eda` produces a dated report on a dataset's types, missingness, distributions, correlations, and outliers. `/dag` draws a causal diagram from a written graph and computes the adjustment set. `/review-plan` critiques an analysis plan before implementation, while `/review-analysis` audits a completed analysis for issues with identification, convergence, and project conventions. I also use `/targets` and `/pueue` for pipelines and long jobs, whose tools are covered in the companion. Each skill began as a repeated request and includes checks specific to its task.

When a skill produces an unsatisfactory result, revise the instructions or checks that allowed the problem. Keep the main procedure to a screen or two, and put longer templates or checklists in files beside it.

## Adopt an existing skill carefully

Before writing a new skill, look for one that already covers the task in a maintained collection you trust. Read its instructions and supporting scripts, check its assumptions about inputs and permissions, and try it on disposable material. A good description is not evidence that its procedure fits your research. Keep the source and version so changes are reviewable; remove steps or access you do not need.

## When an automatic check helps

A *hook* runs a configured action at a supported event, such as before a tool call or after an edit. It can help run a quick check or notify you that the agent needs attention. Whether it can block an action depends on the event and configuration; a check after an edit cannot prevent that edit from having occurred. Hooks also need testing and protected configuration. They do not replace the access limits in §3.

Most readers can begin by asking for the appropriate checks at the end of a task. Add automation when a repeated omission justifies it, and avoid a hook that launches a full expensive analysis after every small edit. The toolkit covers tool-specific configuration; Claude's [hooks documentation](https://code.claude.com/docs/en/hooks) describes the current event behavior.



<!-- ===================== PART III — DO THE RESEARCH ===================== -->

# 8. Find and assess research literature {#literature}

A literature search is useful when you can explain how the evidence was found and check what it supports. An agent can reduce the work of retrieval, screening, and extraction, provided it leaves the source record and uncertainty visible.

The recorded example below searched for studies of peer-review duration. A paper measuring grant-review delays belongs in a different category from one measuring journal submission-to-acceptance time. Written criteria and saved exclusion reasons let you see whether the agent respected that distinction.

First specify the kind of search. A reading list for background and a systematic review have different coverage requirements. The run below illustrates discovery and screening for a research project; it is not a universal review protocol. If completeness supports the paper's claim, involve a librarian or information specialist and follow the relevant review standard. The [Cochrane search chapter](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04) explains the importance of coverage, search design, and information-specialist input.

## What to ask for

*The protocol, before searching.* Give the agent the question, inclusion and exclusion criteria, date range, languages, sources to search, and stopping rule. Have it draft the protocol from your description, then review and approve it before any query runs. The written protocol lets you inspect the agent's screening decisions and repeat the search.

Vagueness is the thing to fix here rather than later. "Papers about social mobility" isn't a protocol; it names a topic, not the criteria that decide what is in and out. If the agent can't tell from your question whether a single-journal study counts, it will guess, and the guess will be invisible in the output.

*Verify each source.* Usually the quickest route is to resolve its DOI, PubMed ID, or arXiv ID and compare the title, authors, and year. Legitimate books, reports, and historical material may have none of these. For those, record a stable catalog or publisher record, a copy or location a reader can inspect, and who checked it. Unresolved records remain flagged until reviewed; lacking an identifier is not itself a reason to exclude relevant evidence.

*Which sources.* Name them, because coverage is a claim you will have to defend. OpenAlex can help discover records across fields, and Crossref can help check DOI metadata. Ask the agent to consult their current access requirements and limits rather than assume that every request is anonymous or free. Add PubMed for anything health-related, arXiv for preprints, and SSRN, RePEc or NBER where your field lives there. Web of Science and Scopus need a license, so if you have one, say so and use it; if you don't, record their absence as a gap rather than pretending the search was exhaustive.

> **Claude Science, September 2026.** [Claude Science](https://claude.com/docs/claude-science/overview) combines literature work with R and Python analysis and records of how outputs were produced. Its [featured data connections](https://claude.com/docs/claude-science/connectors-and-skills) emphasize life sciences, including genomics, proteins, and chemistry. Literature sources include OpenAlex, arXiv, and PubMed; [full-text access](https://claude.com/docs/claude-science/literature-access) also uses open repositories and authorized publisher or library access. Its usefulness for your review depends on coverage of your field and access through your account. Apply this chapter's requirements to its literature tools: approve the search protocol, retain queries and screening decisions, and check claims against retrieved papers. A built-in review tool does not establish completeness or verify every claim for you. Confirm that the service is approved for any unpublished or restricted material you supply (§3).

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

# 9. Acquire data with a record of its origin {#data-acquisition}

Automating acquisition is useful when it saves repeated work without losing the identity or meaning of the data. Preserve the source response and the request that produced it so a later analysis can explain which extract it used.

For example, a county-month heat series might be downloaded in yearly batches. If the provider revises a year, a filename alone cannot tell you which values supported the paper. A retrieval date, request, checksum, and transformation record distinguish the original response from the derived analysis file.

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

*The provenance log.* Ask the agent to record each download in `data/raw/sources.md`, introduced in §5. Each entry identifies the file's source and contains:

- The exact request: the API call, extract definition, or saved query from the web tool.
- The download date and the data release or version.
- The relevant conditions on use, including redistribution and attribution.
- Who downloaded the file and its checksum. A checksum is a fingerprint of the file's contents that can be used to detect changes.

Have the agent write the entry as part of the download:

> Fetch the 2018–2022 ACS five-year county estimates for the variables in `METHODOLOGY.md` § Covariates, through the Census API, with the script in `code/_data-acquisition/fetch-acs.R`. Save the JSON response exactly as received to `data/raw/public/acs-5yr-2022.json`, and add an entry to `data/raw/sources.md` with the request, the date, the vintage, and the file's checksum. Do not modify anything else in `data/raw/`.

*Preserve raw data.* Save each download exactly as received. Cleaning belongs in a separate script that reads from `data/raw/` and writes to `data/processed/` (§5). If cleaning goes wrong, you can rerun it using the saved original. If you download the data again, save a new, dated file beside the old one: later releases may change the numbers, and you need to know which release the paper used.

During acquisition, allow the agent to add the files you have authorized and update the provenance log. During analysis, protect the originals from changes. A rule that prevents all writes to `data/raw/` would also block the approved download and log entry, so the access settings must match the task (§3).

## What the agent does

The agent reads the source's documentation and writes the acquisition script using the method you agreed on. The script pauses between requests and retries failed requests. It identifies itself to the source with a user-agent string that names the script, and an email address where the source asks for one.

The script saves each response before extracting data from it, so an extraction error can be fixed using the saved response. For a long collection, it records progress so an interrupted run can resume without downloading everything again. It also writes the provenance entries. If the agent uses a browser to investigate the site, it reports whether it found a permitted way to request the data through a script.

Keep API keys out of the script. Supply a key through an approved credential mechanism as an *environment variable*: a named value available to a running program. The script can then read, for example, `CENSUS_API_KEY` or `IPUMS_API_KEY`. Ask the agent to refer to the variable by name without printing the key itself. Code that receives a key can still expose it, so review access and logging. The toolkit's secrets section explains the setup. If a key enters repository history, revoke it and issue a replacement; deleting the current line is insufficient.

## Read the provenance entry

An illustrative entry for a synthetic teaching extract could look like this:

| Field | Example record |
|:--|:--|
| Source | Synthetic county-month heat example; not an observed dataset |
| Request | Counties 001 and 003; January–December 2025 |
| Retrieved or generated | 2026-11-02; generator and seed recorded alongside the file |
| Original | `data/raw/heat-example.csv`; checksum recorded on creation |
| Derived | `data/processed/heat-monthly.csv`; created by `code/prepare-heat.R` |
| Checks | County-month keys unique; all requested months accounted for |

For a real source, record its address, extract identifier, version, access terms, and actual request instead. Do not copy this invented provenance into an empirical project.

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

# 10. Build an analysis you can rerun selectively {#research-workflows}



A research analysis changes repeatedly: a coauthor requests another sample, a reviewer asks for a sensitivity check, or a figure needs new labels. If every change reruns a large script from import to manuscript, revisions become slow and hard to inspect. Ask the agent to build small steps with saved inputs and outputs, and commands that run the part you need.

In the heat-and-birthweight example, changing a plot label should read the saved prediction table and redraw the figure. Changing the sample restriction should rebuild the analysis file, fit the affected models, and update their outputs. Both are repeatable workflows, but they require different work.

![](figures/selective-workflows.svg){#fig-selective-workflows fig-alt="Many small analysis scripts and one recipes file support two routes: redraw a figure from saved estimates, or rebuild the sample and rerun the affected analysis."}

## Save steps that can run separately

Give each script one coherent job: acquire a source, construct the analysis sample, fit a specified model, calculate a contrast, or draw a figure. A script can serve one project-specific task; it need not become a general software package. Name its inputs and outputs and make it fail clearly when a required input is absent.

A small command file can name the useful routes through those scripts. [Toolkit chapter 6](https://dss-agentic-toolkit.pages.dev/chapters/project-commands.html) uses `just`; a master do-file, an existing build command, or a short R driver may already be sufficient. The researcher should be able to run a saved command without asking an agent to remember the sequence. A dependency runner ([toolkit chapter 8](https://dss-agentic-toolkit.pages.dev/chapters/pipeline-dependencies.html)) adds automatic decisions about which steps are stale.

| Requested change | Work to repeat | Work to reuse |
|:--|:--|:--|
| Change Figure 2's labels | Figure script and visual check | Saved predictions and fit |
| Change an approved sample rule | Sample construction, affected fits, predictions, reporting | Unchanged source acquisition |
| Correct the manuscript's formatting | Document build and rendered-page check | Checked results |

> Organize the approved analysis into scripts with explicit inputs and outputs. Keep related operations together, but separate costly fits from plotting and reporting. Give me commands for the main analysis, the figures from saved estimates, and the quick checks. Demonstrate which files each command changes. Preserve the current results and explain any discrepancy.

## Specify the research work

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

The resulting report should let you account for the sample and trace each derived value to a recorded transformation. For a consequential pipeline, ask fresh agents to implement it independently from the same original inputs and agreed rules (§11). Agreement supports implementation fidelity; it does not establish that the exclusion or transformation rules were scientifically appropriate.

### Fit a model and produce the requested quantities

Name the estimand and the model as precisely as you would in an analysis plan. Include weights, clustering, missing-data handling, finite-sample corrections, and the quantities you want after estimation. “Fit the model and report the effect” leaves room for the agent to choose a coefficient when you wanted a standardized contrast.

> Implement the main model in `METHODOLOGY.md` on the approved analysis file. Save the exact specification, estimation sample identifiers, software settings, diagnostics, and the postestimation quantities listed there at full precision. Flag any unavailable option or unidentified parameter rather than substituting another specification. Keep the real-data analysis separate from all simulation code. Report discrepancies without adjusting the model to remove them.

### Draw a figure from saved results

A plotting task should identify which results to display and what comparison the figure should support. This avoids a polished plot that quietly changes the denominator, aggregates away a subgroup, or omits uncertainty.

> Build the planned exposure-response figure from the saved prediction table, without refitting the model. Use hot days on the horizontal axis and predicted birthweight in grams on the vertical axis. Show the saved interval bounds and the groups specified in the figure plan. Save the plotting script, the exact plotting data, and the figure. Report any missing groups or intervals; do not interpolate missing estimates or change the scale without asking.

Inspect the plotting data beside the rendered figure. Check selected points and interval endpoints against the saved results, and confirm that the labels and scale describe the actual quantities.

## What you check

Compare the deliverables with the request. For a join, account for unmatched and duplicated records. For a model, compare the sample, settings, and exact reported quantities. For a figure, check how the values in the source table appear as points, lines, or intervals in the plot. Use independent implementations for important results, with suitable exact, numerical, or Monte Carlo tolerances (§11).

Simulation checks and independent implementations belong in the saved workflow too (§11). Rerun them when the relevant method or inputs change, not whenever a caption changes.

Keep exploratory scripts in `_experiments/`. Once a check supports the reported analysis, make it part of the documented validation sequence, for example under `code/validation/`, and record when it must rerun. A figure-label edit need not rerun a large calibration study; a change to the estimator may.

## What goes wrong

*An undocumented choice keeps the pipeline moving.* The agent guesses a missing-value code, drops an unmatched record, simplifies the model, or changes a plot denominator. Ask it to surface unresolved decisions and show the evidence for completed steps.

*Simulation enters the real-data pipeline.* An unavailable input is replaced with plausible values and the analysis finishes. Keep simulation inputs and outputs separate, and require the empirical pipeline to fail when required inputs are absent.

*The check changes until it passes.* A comparison tolerance grows, an assertion disappears, or difficult scenarios are removed. Have the agent report the failure and its cause before proposing a change.

*The output looks convincing.* A clean table, a converged fit, and a polished figure can all implement the wrong request. Check the underlying quantities and sample, not the presentation alone.

## Keep long jobs moving

For a long fit, have the agent save a runnable script and a log. Without extra tools, run it in your existing RStudio or Stata application and bring the permitted output back to the agent. A job queue can manage recurring long jobs; the toolkit's queue section explains submission, resource limits, and status checks. A queue runs locally and does not make a laptop compute while asleep or survive every reboot with its processes intact.

Compacting a conversation, closing an app, and terminating a process are different events. Do not infer job status from the chat. Check the process or queue state, the log, and the expected output before reporting completion. A pipeline runner ([toolkit chapter 8](https://dss-agentic-toolkit.pages.dev/chapters/pipeline-dependencies.html)) can reuse completed steps after an interruption; resuming a fit within a step requires the fitting program's own checkpoint support.

When the work exceeds local resources, follow your institution's research-computing route. The agent can draft a job script, but the resource request, permitted environment, and resulting files still need review.

> **Harvard.** Consult [FAS Research Computing](https://docs.rc.fas.harvard.edu/) for compute access and the appropriate environment for the data. Use the current cluster guidance for submission and data restrictions; an agent-generated job script is not evidence that either is correct.

## When an agent step itself runs unattended

Some batches need an agent to perform a bounded task for each item, rather than just run saved analysis code. A headless invocation accepts a request, performs the task without an interactive conversation, and saves a result. For example, it could turn each approved document into a structured extraction with a failure record when the required fields are missing.

Record the request and inputs, set limits on permitted tools and retries, and check a small batch before submitting the rest. [Toolkit chapter 18](https://dss-agentic-toolkit.pages.dev/chapters/terminal-agents.html) covers the mechanics. If those extractions become research measurements, control the information available to each run and evaluate their quality (§12). Headless execution makes a task unattended; it does not itself make the context isolated.

# 11. Check that the agent did the intended analysis {#checking-analysis}



A runnable workflow lets you repeat what the agent built. To trust its results, you also need evidence that it implements the requested analysis. Begin with small cases whose answers you can establish independently, then compare consequential analyses built separately from the same specification.

For example, a county-month join may silently duplicate births when the exposure table contains a repeated key. A five-row test can make that error obvious even when the full analysis produces plausible estimates. A second implementation can then check the transformations and reported quantities across the complete pipeline.

## Did the agent implement what you asked for?

An agent can produce code that runs and yields plausible results while doing the wrong analysis. It might invent a missing column, substitute simulated values for observed ones, merge on the wrong identifier, or fit a different model from the one you specified. It might fit the right model and report the wrong quantity afterward: a coefficient where you requested an average marginal effect, or predictions for the wrong population.

Re-running that code reproduces the error (§14). Independent implementation gives you another route from the inputs to the result, so you can check where those routes agree and where they diverge.

### Start with an answer you know

Choose a small case with an expected result derived from the research rules, not copied from the program being tested. In this invented join example, three births match two distinct county-month exposure records; one birth is unmatched. The correct output has four births, preserves the unmatched record for review, and does not invent an exposure.

| Test input | Expected behavior |
|:--|:--|
| Unique county-month exposure keys | Preserve all four births; three match, one stays flagged |
| One duplicated exposure key | Stop before fitting; identify the duplicated key |
| A missing required exposure file | Fail clearly; do not substitute simulated observations |

> Create these small fixtures separately from the analysis inputs. Run the saved preparation code on them and compare its behavior with the stated expectations. Keep the failing case as a regression check. Report the observed output and exit status; do not weaken the test to make it pass.

Larger simulations can pass data with known truth through the entire workflow. Check the generator and the truth calculation separately: otherwise the same error can appear on both sides of the comparison. These tests address implementation. Repeated simulation also supports a separate assessment of statistical behavior, discussed below and in Appendix D.

![](figures/known-answer-check.svg){#fig-known-answer-check fig-alt="A stated expected answer and synthetic test input go through the saved research workflow. A comparison reports agreement or a discrepancy to investigate."}

### Give each agent the same written target

Start with `METHODOLOGY.md` (§5). It should state:

- The research quantity to estimate (the *estimand*), including the population, comparison, and scale.
- The input files and their meanings, the unit represented by each row, the merge keys, and the rules for constructing variables.
- The sample restrictions and missing-data rules, including the order in which exclusions apply.
- The model specification: outcome, predictors, interactions, fixed effects, weights, and relevant estimation settings.
- The quantities to report after fitting: coefficients, uncertainty intervals, predictions, or contrasts, with any averaging population and uncertainty method specified.

A request for “the effect of heat on birthweight” leaves too much to infer. A request for the average predicted difference between two stated heat exposures, averaged over a specified set of births, gives the implementers a common target. An agent can help you make the specification explicit; you decide whether it describes the analysis you intend.

Keep a fixed copy of that specification for the comparison. If an implementer finds an ambiguity, resolve it and give the same clarification to every session. Letting each agent silently choose a different interpretation makes a later disagreement harder to diagnose.

### Have two or three agents implement it separately

![](figures/independent-implementations.svg){#fig-independent-implementations fig-alt="The same original data and written specification feed two separate implementations. Only their completed outputs enter the comparison."}


Open fresh Claude Code sessions in separate project folders. Each gets the specification, the data dictionary, and the same approved input files. Keep the other implementations' code, processed datasets, and results out of those folders. The sessions can run one after another or in parallel; you do not need an agent orchestration tool since files are written in separate folders.

If the agent built the dataset as well as the model, each implementation should start from the original inputs and independently perform the cleaning, merges, and variable construction. Starting both from one agent's processed dataset leaves that processing unchecked. If you are checking only model fitting on an already verified dataset, the shared processed file is an appropriate starting point.

Use only inputs the agent is permitted to access (§3). For restricted data, have the agents develop their implementations against a permitted synthetic example and data dictionary, then run the scripts independently on the real data in the approved environment. Review the comparison there; return only information that is permitted to leave.

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

Use agents to help investigate those questions before implementation (§4). Ask separate sessions to assess the proposed analysis, find relevant methodological literature, and look for objections. Give them the design and proposed specification so they can identify what information is missing. Follow their citations to the original sources and check that the methods apply to your setting (§8).

> Review the analysis proposed in `METHODOLOGY.md` against the research question and study design. Identify assumptions needed for the intended interpretation, choices the available information does not justify, and relevant methodological literature. Explain where each source applies to this design and where it does not. List unresolved questions for a statistician. Do not change the specification.

Independent consultations can broaden the objections you consider; agreement among agents does not establish that the method is appropriate. Ideally, discuss the design and unresolved questions with a human statistician, especially where the method or its assumptions are unfamiliar. Record the justification and remaining limitations in `METHODOLOGY.md`. This gives later implementation checks a target you have actually considered.

### Assess statistical behavior with a calibration harness

A *calibration harness* is an automated simulation workflow. It generates repeated datasets for which the relevant truth is known, applies your planned analysis to each, and measures how the estimates and decisions behave. Appendix D preserves the worked example and its recorded results.

Decide what acceptable behavior means for the quantities you will report. Does the estimator recover the target across a useful range of true values? How large is its bias? How often do its intervals contain the truth? Under a null condition, how often does the decision rule report an effect? How often does it detect effects of substantive interest? Record failed fits as well as successful ones, and report simulation uncertainty so that a small number of repetitions is not mistaken for a precise performance estimate.

The simulated worlds must be plausible for the data. Preserve features that matter to the analysis: outcome bounds, cluster sizes, dependence, missingness, and the distribution of predictors. Include departures from the fitted model that concern you, such as nonlinear effects or unequal variances. A simulation drawn only from the model you plan to fit tests performance under those assumptions; it does not test how the method behaves when they fail.

The harness also needs implementation checks. Confirm that the generated data have the intended properties and that the “known truth” is the quantity the analysis actually estimates. Check the simulation generator and truth calculation separately from the fitting code. Reusing the same mistaken formula in both can make recovery look perfect.

> Propose a calibration plan for the estimand, analysis, and decision rule in `METHODOLOGY.md`. Include plausible data-generating scenarios and departures from the fitted model. For each scenario, state the known target, how you will calculate it, the performance measures, and how you will quantify simulation uncertainty. Explain how you will check that the generated data respect the design and outcome constraints. Keep simulated files separate from real-data inputs. Present the plan before running it; do not change the analysis to make it pass.

A misspecified model can be well calibrated for a particular estimand or decision rule. For example, an imperfect description of individual outcomes may still yield an interval with the intended coverage for an average contrast. Calibration therefore does not establish that the model describes the data-generating process correctly. Nor does it establish that the estimand answers the scientific question, or that a causal interpretation is justified.

Read the calibration results alongside the methodological justification. State which scenarios were checked, which properties were acceptable, and where performance failed. A failure may call for a different analysis, a narrower claim, or more information. That decision belongs to you; the agent should report the failure before changing the method.

Keep the implementation comparison, methodological justification, and calibration results with the project. They answer different questions, and a satisfactory result in one does not substitute for the others.

# 12. Use LLM outputs as research measurements {#llm-measurements}

LLMs can make it feasible to code or assess more research material than you could review manually. Once their answers become variables in an analysis, however, errors in those answers affect the evidence. You need to control how the measurements are produced and establish whether they are adequate for the question.

In my project comparing AI and human peer reviews, separate headless runs generated AI reviews and judged reviews. The purpose was to give each run its assigned material and protocol without carrying a previous review's conversation into the next. This is a research-design reason for a controlled agent environment, beyond the convenience of unattended execution.

## Keep three questions separate

When an LLM codes responses, classifies documents, or extracts a variable from text, ask:

1. Can a reader recover the published results from the saved measurements?
2. Can someone rerun the inference procedure that produced them?
3. Are the measurements adequate for the research task?

Saving the responses helps answer the first. Recording the model and procedure helps with the second. Evaluation addresses the third. Success on one does not imply success on the others.

## Control what each reviewer or judge receives

Review generation and judging are distinct stages. A reviewer receives the review instructions and the assigned manuscript. A judge receives the judging rubric and the material that its task requires. A pairwise judgment can deliberately include two reviews of one manuscript; excluding other runs' context does not mean every call receives only one document.

![](figures/controlled-review-runs.svg){#fig-controlled-review-runs fig-alt="Separate reviewer runs receive a protocol and an assigned manuscript. Separate judging runs receive a rubric and the assigned review set. Other cases and prior conversations are excluded by the intended protocol, which must be tested."}

The project's recorded wrappers used a new subprocess and a temporary working directory for each call, explicit prompts, and controls intended to avoid persistent sessions and restrict tools. Generation and judging supplied their own assigned inputs. Those are recorded implementation choices, not a claim that a new directory alone excludes every source of context. Current agent tools can also load personal instructions, memory, plugins, and service connections; a read-only process may still read unwanted information.

For a teaching implementation, write down what each run may receive and test the actual configuration. Include loaded instructions, memory or resumed sessions, accessible files, tool permissions, and any connected service. [Toolkit chapter 18](https://dss-agentic-toolkit.pages.dev/chapters/terminal-agents.html) supplies the setup and harmless marker tests. Save the evidence for the routes tested and identify anything untested. Do not call a run isolated merely because it is headless or starts a fresh conversation.

| Stage | Deliberately supplied | Kept outside that run |
|:--|:--|:--|
| Generate a review | Review protocol; assigned manuscript; approved tools | Other reviews, earlier conversations, judging outcomes |
| Judge a review set | Rubric; assigned reviews; manuscript if the protocol requires it | Other cases and prior judgments; authorship labels if blinded |
| Analyze judgments | Saved responses, parsing rules, case identifiers | New model inference unless explicitly requested |

A direct scripted model call may be simpler when the task needs no tools or agent loop. Either route still needs input control, failure handling, and measurement evaluation. Context separation does not establish statistical independence, remove shared model biases, or make a judgment valid.

## Preserve the run

Save the exact inputs presented to the LLM, prompts and examples, raw responses, parsing and postprocessing code, dates, model information, and available generation settings. Keep failures, retries, and human corrections traceable to the original case. Apply the same access rules to these records as to the source data.

Use an exact model identifier when the interface exposes one, and record limitations when it does not. A model name in an app menu may be less specific than a version identifier. Do not claim to have pinned information you could not observe. Pinning reduces one source of change; it does not guarantee the same answer on a rerun. Anthropic notes that [outputs can vary even at temperature zero](https://platform.claude.com/docs/en/about-claude/glossary#temperature).

Keeping open model weights can preserve access after a hosted model is retired, but repeatability also depends on preprocessing, runtime, numerical precision, quantization, and generation settings. Choose a model for demonstrated performance on the task as well as its availability and licensing. Reevaluate any replacement. This guide does not require a different model service or teach its installation.

## Evaluate a labeling task

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

If you revise the prompt after seeing those errors, the sample has become development material. Use a new held-out sample for a fresh performance claim, or disclose the reuse and its limitations. Report the evaluation, human review, and saved-output reproduction route in the paper's methods (§13).

## Check sensitivity to the measurement procedure

A result can depend on model choice, prompt wording, examples, or presentation order. Decide which alternatives are substantively plausible and compare them on development material before the final evaluation. For review judging, swapping the order of two reviews can expose an order-dependent preference. For text coding, changing a boundary definition can reveal that the construct is underspecified.

Keep each alternative's outputs and failures. Report meaningful changes in the substantive conclusion rather than selecting the prompt that yields a preferred answer. Repeated identical inputs can also reveal variation, but consistent outputs are not necessarily valid outputs.

For reproduction, first rerun the analysis of the saved responses. Label a new inference run separately: it tests what the model produces again, potentially under changed service conditions. The manuscript should state which route was tested (§§13–14).

# 13. Write and revise from the research record {#research-writing}

Research revisions are incomplete if the analysis changes but the manuscript still describes the earlier result. Give the agent a maintained source for each substantive claim and number, then check the rendered manuscript against that record.

For example, correcting a sample rule may change an estimate in a results file while leaving the old number in an abstract, table note, or slide. Ask for those uses to be traced and updated together, with unresolved claims flagged. You remain responsible for the interpretation and final wording.

<!-- Revised 2026-10-01: manuscript drift, retained provenance, an approved
inclusion-criteria revision, and teaching advice about full-draft generation.
Adapted downstream into the HCPDS deck and its writing content module. -->

## Follow a number into the manuscript

This invented trace shows the record to request, not an empirical finding:

| Result source | Quantity | Manuscript use | Check |
|:--|:--|:--|:--|
| `outputs/tables/main-estimates.csv`, row `heat_contrast` | −12.4 grams; interval −18.1 to −6.7 | Table 1 and Results paragraph 2 | Value, units, direction, interval, and rounding match |
| Same row and analysis sample record | Defined exposure contrast and population | Figure caption and Methods | Wording describes the quantity actually calculated |

> Trace every main result in the manuscript to its saved source, including the abstract and captions. Report mismatches in values, units, samples, uncertainty, or interpretation. Update only from verified outputs; list claims with no supporting source.

## What to ask for

*Drafts from the files.* Ask for methods text based on `METHODOLOGY.md` and the analysis scripts, describing the estimand, fitted model, and recorded decisions. Put the model equation before the prose that explains it. For the results section, have the agent take numbers from `outputs/tables/` and mark any claim for which the files provide no support. Supply your own list of limitations alongside the results when requesting a discussion draft.

Make the source restriction explicit in each request:

> Use only what is in `METHODOLOGY.md`, `outputs/tables/`, and the figure captions. Where a claim, a number, or a reference is not in those files, leave a bracketed gap and list it at the end. Do not fill it from what you know.

*Your writing conventions.* Give the agent the style guidance you maintain (§6, Appendix A). Ask it to state the point directly, name what each claim refers to, and explain the connections between ideas. A short sentence still needs enough context to be understood. Remove repeated explanations and decorative closing lines. Include conventions specific to the manuscript, such as tense, terminology, and the placement of limitations. When you make a recurring correction, record it in the relevant instruction file.

*Keep the manuscript consistent with the analysis.* Copying results by hand can introduce errors, and later analysis changes can leave old numbers or claims in the text. Ask the agent to transfer values from saved outputs and retain their provenance: the source file and version or run, exact table entry, units, and any rounding or transformation. Link methods statements to the code that ran and the recorded decisions; link research claims to results or literature sources. Keep these links with the manuscript so a changed result can be traced to every affected passage, table, and caption. Flag missing support for review.

Suppose you approve a change to the inclusion criteria. Have the agent identify the affected scripts, rerun the analysis and checks, regenerate tables and figures, then propose manuscript changes using those source links. Ask it to report the locations updated, check the transferred values, and flag interpretations that need your decision. Review the proposed edits and evidence before accepting them; automated transfer can also introduce errors.

I would usually avoid asking an agent for a complete manuscript draft. Its prose can be generic and require substantial revision. If your name is on the paper, retain ownership of its argument, interpretation, wording, and final claims. The agent can help keep methods and results consistent with the research while you develop the paper's argument and voice.

*If you write in Word.* Keep the manuscript in Word. Give the agent an approved section and the supporting results, and ask for proposed wording with a record of what changed and why. You can paste accepted passages into the document yourself, preserving tracked changes and the coauthor workflow. For direct document editing, work on a copy and inspect the returned file in Word, including comments, citations, equations, and layout.

For a formatted Office deliverable, [Cowork](https://claude.com/docs/cowork/overview) provides a prepared environment for creating editable Word documents, PowerPoint decks, and Excel workbooks. Code can also create these formats directly using [document skills](https://github.com/anthropics/skills) and the tools they require. Cowork may save setup when those tools are absent from your Mac; the toolkit's document-production section covers additional tooling for Code. With either route, supply approved inputs (§3) and inspect the returned file in the application your collaborators will use.

If you already write in markdown or Quarto, you can keep that as the source and export a Word copy for collaborators. The toolkit's document-production section covers that setup. Save each returned Word file before reconciling edits. Conversion can lose information or change formatting; it is not a substitute for inspecting the document.

*Reviewer responses.* Give the agent your decisions about each comment and the revised manuscript. Ask it to quote each comment, lead the response with the substantive answer, and cite the line numbers of the changes. Record decisions that change the analysis in `METHODOLOGY.md` (§5), so their reasons remain available at the next revision.

> Draft the response to reviewer 2 in `docs/briefs/2026-09-02-r2-response.md`. Quote each comment in full, then respond. My decisions are in the bullets under each comment in `docs/notes/r2-plan.md`; do not add concessions I did not make. Where the manuscript changed, cite the new line numbers from `manuscript/revision-1.docx`. Lead each response with the answer.

*Talks.* Ask for an outline before requesting slides. Give each slide one main claim and identify the supporting figure from `outputs/figures/`. Review the outline for repetition and detail the audience does not need; an initial draft may need substantial cutting. Choose the output format for the venue: PowerPoint, a Quarto web deck, or Beamer, the LaTeX slide format. Use the same saved results and figures as the paper so the slides report the same analysis. The toolkit's document-production section covers those formats.

## What the agent does

It drafts from the supplied evidence, traces numbers to saved outputs, and identifies missing support. It can compare manuscript versions, prepare responses from your decisions, and propose a talk outline using the existing figures. Keep a source file and a returned document for each editing round so that changes remain reviewable. A request to leave unsupported claims blank reduces invention but does not guarantee it; check the draft.

## What you check

Ask for a table tracing each reported number to its source file, row, and column. Check those locations against the manuscript, and investigate any number the agent cannot trace.

Open every cited source and confirm that it supports the associated claim (§8). Do this for references added during drafting as well as those already in the project.

Compare the methods section with the scripts, including software defaults (§10). The agent can help by reading each paragraph beside the relevant code and listing discrepancies. Resolve any difference between the intended analysis and what actually ran before finalizing the description.

Read a paragraph aloud to check whether it uses your language and explains the point as you would. Revise phrasing that sounds unlike you or leaves the reader to infer a connection.

Check the AI-use disclosure and its placement against the journal's instructions, as described below.

### Disclosure

Check the target journal's current instructions at submission. Policies differ in the uses they permit, the details required, and where the statement belongs. As of September 2026, [ICMJE's author guidance](https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html) calls for disclosure of AI assistance, human responsibility for the submitted work, and no AI authorship. Use the journal's own instructions to determine the applicable wording.

Keep a record of the tool and model information available, dates, tasks performed, affected parts of the work, and how the authors checked them. Distinguish language assistance, code generation, and an LLM used to produce measurements (§14). The last requires enough methodological detail to assess the measurement procedure, not just an acknowledgment.

An adaptable disclosure template is:

> We used [tool and observed model/version; dates] to [specified tasks]. The authors reviewed [affected text or outputs] and checked the analysis using [checks actually completed]. For LLM-derived measurements, the Methods describe the inputs, prompts, evaluation, and human review. The authors take responsibility for the reported work.

Fill the brackets from the project's records. Do not claim an independent implementation, a successful rerun, or an exact model version that you cannot document. Preserve this disclosure and relevant provenance in the public research package (§14), even when private working notes are removed.

Treat peer-review material separately. This guide's conservative working rule is to keep confidential manuscripts and applications you are reviewing out of agent sessions. Follow the journal's or funder's current reviewer policy; permission to use an agent on your own work does not authorize its use on someone else's confidential submission.

## What goes wrong

*An unsupported or altered number.* The draft contains a transposed digit, an incorrectly rounded value, or an estimate absent from the results. Requiring the agent to use saved outputs reduces this risk; checking each number against its source is still necessary.

*The invented reference.* Plausible authors, a real journal, a year, and no such paper (§8). Open every one.

*Methods for the model you meant.* The section describes the intended model; the script ran another (a default, a dropped term, a different clustering). Cross-check against the code, not against `METHODOLOGY.md` alone.

*Prose that does not sound like you.* The draft uses generic phrasing or explanations you would not give. Revise it and record recurring corrections in your writing instructions.

*The round trip that loses edits.* The agent accepts the coauthor's tracked changes silently, or overwrites the returned draft with a regenerated one. Keep every returned `.docx`, dated; diff before anything is merged.

*The generic disclosure.* “AI was used” leaves the reader unable to assess its role. State the tool and available version information, dates, tasks, affected parts of the work, and checks the authors performed, following the journal's requirements.

*Confidential review material enters the session.* Check the reviewer policy before exposing any material, including correspondence and quotations in notes. The conservative rule above avoids assuming permission from the account alone.

*Slides that repeat the abstract.* A sequence of dense text slides gives the audience little help following the results. Return to the outline and identify the claim and supporting evidence each slide needs to convey.

# 14. Reproduce and hand off the research {#research-handoff}

A collaborator should be able to repeat the analysis from its files and instructions without asking an agent to reconstruct what happened. A clean-copy test exposes dependencies that your familiar working folder can hide.

For example, the figure builds on your laptop because an old fit object is cached there. In a separate copy, the same command fails because neither that object nor the command that creates it is supplied. The failure identifies something to preserve or document before handoff.

Keep this reproduction test distinct from independent implementation (§11). A fresh implementation tests whether the written method is sufficiently precise and whether separately built analyses agree. Rerunning the original code tests whether a collaborator can reproduce the supplied analysis. Both require the right inputs and enough detail about software-dependent behavior; neither establishes the scientific validity of the method.

The agent can inspect the project, record the sequence that produces its results, and identify missing inputs or software. Have it save those details as run instructions and test them before hand-off.


## Start from the state you actually have

An existing project may lack a useful history. Ask the agent to inventory the current inputs, code, software, outputs, and known decisions. Distinguish documented facts from plausible reconstructions. Mark an unexplained exclusion or missing input as a gap; do not invent past decisions or backdate a record. You can start version control now, but that first checkpoint records the current state.

| Handoff item | What the recipient needs |
|:--|:--|
| Inputs | Identity, permitted access route, expected location |
| Software | Language/package versions and restoration instructions |
| Commands | Which steps rebuild fits, tables, and figures |
| Evidence | Checks performed, discrepancies, and untested routes |
| Known gaps | Missing history or inputs and who can resolve them |

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

Inspect the execution log and comparison results. A successful exit is insufficient if the sample, coefficients, labels, or plotted values differ. Use exact comparison for identifiers and deterministic counts, suitable numerical tolerances for floating-point calculations, and justified Monte Carlo tolerances for stochastic analyses (§11). Record which environment and input versions were actually tested.

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

<!-- ===================== REFERENCE ===================== -->

# Appendix A. Starter files {#starter-files}

This appendix provides files you can copy and adapt: agent instructions, a task list, an execution script, git exclusions, and project layouts. Each example explains where to save it. Choose only what you need; a new project can begin with the short instruction file in §5. The first two examples repeat that chapter's longer worked files, and A.6 gives layouts for larger projects.

## A.1 The global file

Save this in `~/.claude/CLAUDE.md`, or in an agent-agnostic `AGENTS.md` that it imports (§5). Replace the first paragraph with your own description and retain only rules you want the agent to follow across your projects.

```
# How I work

Quantitative social scientist. R first, Stata for collaborators, some Python.

## Projects
- One folder per paper; use version control when agreed. Its AGENTS.md says where things live.
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
- Assess the method with a calibration plan before substantive use (§11).
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

Save this in the project's `CLAUDE.md`, or in `AGENTS.md` with the import described in §5. Replace the example paper's details with your own, using the headings to organize its description, file locations, conventions, and access limits. For restricted-data work, follow the synthetic-input approach in §3 and keep real inputs inaccessible to the agent's process. Naming an off-limits path does not prevent the agent from reading it.

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

Save this in the project root. Use the three headings shown, a short entry for each task, and a date on each finished item. Have the agent read it after `STATUS.md` at the start of a session and update it as work progresses (§5). The opening comment explains how to maintain the list.

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

The scripts should read and write their declared files rather than rely on objects left over from an interactive session. A Stata project can use a master do-file for the same purpose. Add required validation steps to the documented sequence (§14); a quick plotting command need not rerun them all. The toolkit explains command runners and dependency tracking if the project grows beyond this arrangement.

## A.5 .gitignore

Where it goes: the project root. This conservative starting example excludes data, generated models, logs, and personal settings. Adapt it to the project's sharing policy: an approved public input or provenance manifest may belong in the repository. Ignoring a path does not restrict agent access and does not remove an already tracked file. Review shared settings before committing them; managed policy and local settings also affect what a session enforces (§3).

```
# Exclude inputs by default; share approved files deliberately (chapter 3)
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

These are examples for projects that have outgrown the minimal folder in §2. Keep an established lab layout when it already makes inputs, code, outputs, and decisions easy to find. Add a directory because the project needs its contents, rather than creating empty folders to match a template.

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

Keep restricted inputs in approved storage that the agent process cannot reach. Document how authorized researchers can obtain them in the input manifest (§14). Record environment versions, and add a current-state file when the task list no longer explains where the project stands. The optional global/project convention from §5 can replace the single `CLAUDE.md` as needed.

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

# Appendix B. Requests by research task {#prompt-index}

Find copyable requests beside their explanation and expected evidence:

- [First session](#first-session).
- [Project context](#project-context).
- [Reusable procedures](#reusable-procedures).
- [Literature](#literature).
- [Data acquisition](#data-acquisition).
- [Analysis workflows](#research-workflows).
- [Checking analysis](#checking-analysis).
- [LLM measurements](#llm-measurements).
- [Writing](#research-writing).
- [Handoff](#research-handoff).

# Appendix C. Glossary {#glossary}

*Agent.* An LLM working through tools that can read files, run commands, and edit the project. It uses each tool's result to decide what to do next (§1).

*Assertion.* A one-line check in a script that stops it when a stated expectation fails: `stopifnot()` in R, `assert` in Stata and Python (§11).

*Auto mode.* A Claude Code permission mode that combines permission rules with automated classification of actions requiring review. It reduces routine prompts but still needs defined access limits (§4).

*Brief.* The project instructions: its purpose, files, execution sequence, and access rules. Keep them in `CLAUDE.md`, or use the optional `AGENTS.md` import described in §5.

*Build.* The one command that produces every output the paper reports from the scripts and the data (§14). *One-command build* means the same.

*Calibration.* Assessing an estimator or decision rule on simulated data with known properties. Conclusions apply to the scenarios and performance measures examined (§10, §11).

*Commit.* A recorded version of the project's tracked files, with a message describing the changes. It provides a point you can compare with or restore later (§3, §5).

*Context window.* The limited amount of material the agent can use at once, including messages, file contents, and tool results (§5, §4).

*Decision rule.* What the paper will claim and on what basis: an interval excluding zero, a posterior probability above a threshold (§10).

*Deny rule.* A software-enforced rule blocking matching tool actions. Its coverage depends on the tool and execution route; a file-tool denial alone does not block every arbitrary script (§3).

*Diff.* The line-by-line difference between two versions of the files; what you review after a task (§5).

*Effort.* How much the model reasons before it acts; a setting with levels (§4).

*Environment variable.* A named value passed to a process and usually its children. Credentials may be supplied this way; a receiving process can read them (§9).

*Estimand.* The quantity the analysis is trying to estimate, stated before the model is fitted (§10).

*Global file.* An instruction file holding conventions that apply across your projects (§5). Project-specific instructions belong in the project file, defined here under *brief*.

*Import.* In a `CLAUDE.md`, a line beginning with `@` that pulls another file in at the start of the session (§5).

*LLM.* Large language model: the AI that generates the text, and what a chat assistant and an agent both run on (§1). Which LLM, and at which version, is what this guide calls the *model* (§4, §14).

*Lockfile.* A committed list of every package and its version, from which the environment can be rebuilt: `renv.lock`, `uv.lock` (§14).

*Model.* Two senses: the LLM the agent uses, whose identifier and available settings should be recorded when it contributes to a result (§4, §14); and a statistical model fitted to data (§10).

*Monte Carlo error.* The noise in a result that comes from random draws (a bootstrap, a Markov chain), against which two sampling-based results are compared (§11).

*Permission mode.* The setting that decides which actions the agent may take without asking (§4).

*Plan mode.* A mode for inspecting the project and developing a plan before implementation. It may write planning records, but does not authorize ordinary project changes (§4).

*Prompt.* Two senses. A yes-or-no question the agent puts to you before an action, with the action shown (§4, §3); and, in Appendix B, a request you type to the agent.

*Provenance.* The record of where a data file came from, when, by what request, and under what terms (§9).

*RAG.* Retrieval-augmented generation: retrieving relevant material from a larger collection and supplying it to an LLM as context for its response (§5).

*Raw data.* Data as received, never modified; everything derived from it is rebuilt by code (§5, §9).

*Sandbox.* Operating-system restrictions on covered execution. Configured limits can constrain reads, writes, and network access; exempt or separately launched tools need separate review (§3).

*Session.* One conversation with the agent, with its own context window (§4).

*Usage window.* The period over which an account's usage allowance is measured. Check the limits for the actual plan (§4).

*Version control.* A system such as git that records chosen versions of tracked files, allowing comparison and restoration (§3).

# Appendix D. A worked calibration study {#calibration-example}

### Delegate a calibration study

Calibration assesses how the requested method behaves in specified scenarios. Ask for a written plan before a large run: the estimand, plausible data-generating processes, candidate methods, performance measures, and the precision needed for the comparison. Check the generated outcomes' range, dispersion, dependence, and missingness before interpreting fitted results. A convenient simulation can be a poor representation of the quantity you measure.

The [ADEMP framework](https://pmc.ncbi.nlm.nih.gov/articles/PMC6492164/) provides a useful structure for this plan. §11 explains how calibration differs from implementation verification and methodological justification, including why a misspecified model can still perform adequately for a particular estimand or decision rule.

The compact example below demonstrates the workflow. It uses an entirely synthetic county-month design and 200 repetitions per effect size. Its intervals deliberately use the normal cutoff 1.96 with county-clustered standard errors. This is the procedure being evaluated; it is not a demonstration of a finite-cluster t interval or bootstrap. If your intended procedure uses either, the calibration must use it too.

> Reproduce the teaching calibration in `code/_experiments/simulate-main-model.R` using the synthetic county-month design. Use the three stated effect sizes, 200 repetitions each, and the specified normal-cutoff intervals with county-clustered standard errors. Save bias, coverage, rejection rate, and Monte Carlo uncertainty. Identify which features of the demonstration would need changing for the actual analysis. Do not read restricted data, modify the empirical pipeline, or describe this small demonstration as validation of the paper's method.

## The recorded teaching run

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

For larger studies, save the execution route described in §10 and use the [toolkit queue chapter](https://dss-agentic-toolkit.pages.dev/chapters/job-queues.html) when a batch needs unattended scheduling.

# Appendix E. Troubleshooting {#troubleshooting}

Use the observed failure to choose the next check. Preserve the current files and useful error output before asking the agent to try again.

| What happened | Next action | Where the fuller explanation lives |
|:--|:--|:--|
| The answer sounds certain but has no evidence | Ask for the source or saved output; keep unsupported claims out of the manuscript | §§8, 11, 13 |
| The session loses track of decisions | Save the current state and next action, then start a focused session | §5 |
| Old memory conflicts with current files | Identify and correct the stale record; inspect which instructions loaded | §§5–6 |
| Routine work asks for approval repeatedly | Inspect the effective mode and permissions; adjust only the required scope | §4; [toolkit chapter 2](https://dss-agentic-toolkit.pages.dev/chapters/tool-access.html) |
| The agent changes the question to finish | Restate the specification and acceptance evidence; preserve the failed result | §§4, 11 |
| A check disappears or its tolerance grows | Require an explanation tied to the specification before changing the check | §11 |
| A long job seems to have vanished | Inspect the process or queue state, log, and expected output | §10; [toolkit chapter 9](https://dss-agentic-toolkit.pages.dev/chapters/job-queues.html) |
| R spins without output when launched by an agent on macOS | Use the recorded diagnosis and execution wrapper; distinguish this local issue from an analysis failure | [Toolkit Appendix A](https://dss-agentic-toolkit.pages.dev/chapters/working-environment.html) |
| An app feature is missing | Check account, managed policy, and current documentation; use an available route | §§2–4 |
| Restricted material may have reached a service | Stop further access and use the institutional incident route | §3 |

If the same problem recurs, improve the instruction or check that would have prevented it. Repeatedly restarting the conversation without changing its inputs usually preserves the cause.
