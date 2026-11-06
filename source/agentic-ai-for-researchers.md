---
title: Doing Research with AI Agents
title-page: |
  Doing Research\
  with AI Agents
version: "1.8 draft"
---

<!-- ===================== PART I — ORIENTATION ===================== -->

# 1. How agents can help your research {#research-uses}

An artificial intelligence (AI) agent can work directly with your research files and software, carrying out tasks you describe in ordinary language. You can ask it to find relevant papers, write and run an analysis, or revise a manuscript. These capabilities also make it useful for checking that the agent did what you asked and documenting how the results were produced. This guide explains how to use agents to make research more efficient, strengthen checks on the work, and preserve the information needed to understand and reproduce the findings.

Suppose you and a collaborator decide to change an inclusion criterion. An agent can update the analysis code, rerun the affected steps, and regenerate the tables and figures. It can then check that the sample sizes and estimates reported in the manuscript match the revised results. By saving the updated code and recording what changed, it leaves you and your collaborators with an analysis you can inspect and run again.

## Three uses for AI in research

::: {.research-use}
![](figures/use-ideas.svg){.use-icon width="64px" fig-alt="An agent examining research ideas."}

*Develop ideas.* A conversation with AI can help you explore a research question and consider explanations you might otherwise overlook. For example, you could describe an observed association and ask for competing explanations, then discuss what evidence would distinguish them. You can develop the promising suggestions further, drawing on the literature and your own expertise to judge which are worth pursuing.
:::

::: {.research-use}
![](figures/use-workflows.svg){.use-icon width="64px" fig-alt="Saved analysis code and results."}

*Build and run research workflows.* An agent can turn a research plan into working code and carry out the steps needed to produce results. For example, it could prepare a dataset, fit the models you specify, and generate figures for a manuscript. Saving those steps as reusable scripts makes it easier to revise the analysis or run it on new data. The agent can also help check its implementation and document the work for collaborators.
:::

::: {.research-use}
![](figures/use-model.svg){.use-icon width="64px" fig-alt="A model processing research material."}

*Use AI within the research method.* A large language model (LLM) can classify interview passages, extract information from documents, or evaluate written responses. Here, the model’s outputs become part of the research data. If you use it to identify themes in interviews, for example, the study depends on how well its classifications reflect the concepts you are investigating. You therefore need to evaluate its performance and record how it was instructed and used.
:::

## From language models to agents

### How does a language model generate a response? {.unnumbered .unlisted}

A large language model (LLM) is a neural network[^intro-neural-network] trained on large amounts of text to learn patterns in language. The models used in AI assistants generate text by predicting what could come next, using the conversation so far. They work in *tokens*: pieces of text that may be a word, part of a word, or punctuation.[^intro-tokens]

For each new token, the model assigns probabilities to possible continuations. One is selected and added to the text, then the process repeats. Selection can involve randomness, so the most likely continuation is not always the one chosen.[^intro-generation]

![](figures/how-models-build-answers.svg){#fig-how-models-build-answers fig-alt="The unfinished sentence 'She poured herself a cup of' enters an LLM. Illustrative bars show possible next tokens: tea, coffee, and water. Coffee is selected, added to the sentence, and used to predict the next token. The bars are illustrative, not measured probabilities."}

### How can a model act on a research project? {.unnumbered .unlisted}

An *agent* combines a LLM with tools and the software needed to use them. A tool is a program that performs an action, such as reading a file or running an analysis script. The model can request a *tool call*: an instruction to run one of those programs.

The surrounding software is called the *harness*. It supplies instructions and information to the LLM, handles permission checks, executes permitted tool calls, and returns their results. This lets the agent carry out work directly in your project.[^intro-harness]

![](figures/chat-to-agent.svg){#fig-chat-to-agent fig-alt="In a chat workflow the researcher carries instructions and results between the conversation and research software. An agent combines an LLM with a harness that runs tools and returns their results, allowing it to perform those steps in the project."}

The same AI app may support both ways of working. You can keep your existing [R](https://www.r-project.org/), [Stata](https://www.stata.com/), or [Python](https://www.python.org/) software; adopting an agent does not require changing statistical languages.

::: {.needspace height="8cm"}
:::

### How does an agent work through a task? {.unnumbered .unlisted}

The result of a tool call gives the LLM new information to use in choosing its next action. The harness passes that result back, and the LLM may request another tool call or respond to you. Repeating this cycle lets an agent work through a task and adjust when it encounters an error or an unexpected result.[^intro-react]

![](figures/agent-loop.svg){#fig-agent-loop fig-alt="The LLM selects a tool, the harness runs it, and the result returns to the LLM to inform the next action. The cycle repeats as needed."}

For example, an analysis fails because the script expects a column called `birth_weight`, while the dataset uses `birthweight_g`. The agent reads the error and consults the data dictionary to confirm which variable the script needs. It can then correct the code and run it again, using the new output to decide whether further work is needed.

[^intro-neural-network]: A neural network is a mathematical model that learns patterns from examples. It passes information through layers of connected units and adjusts the strength of their connections during training to improve its predictions. See IBM's [“What is a neural network?”](https://www.ibm.com/think/topics/neural-networks) for an illustrated introduction.
[^intro-tokens]: Hugging Face, [“Tokenizers”](https://huggingface.co/learn/llm-course/en/chapter2/4), explains how text is divided into tokens.
[^intro-generation]: Hugging Face, [“Text generation”](https://huggingface.co/docs/transformers/llm_tutorial), describes generating successive tokens and the choices involved in selecting them.
[^intro-harness]: Anthropic, [“How Claude Code works”](https://code.claude.com/docs/en/how-claude-code-works), explains the model, tools, and surrounding harness.
[^intro-react]: Yao et al. (2023), [“ReAct: Synergizing Reasoning and Acting in Language Models”](https://doi.org/10.48550/arXiv.2210.03629), demonstrates how language models can alternate reasoning with actions and use observations to guide subsequent steps.

## Your role as a supervisor

Think of an agent as a capable research assistant joining your project. It needs context that an established collaborator might already have: what you are trying to establish, which files to use, and which decisions have already been made. Explaining these things helps it carry out work that fits your intentions.

Your role is to give the work direction and assess what the agent produces. You can let it handle implementation details, while remaining involved in decisions that require your research judgment. A script can run without errors while using the wrong variable or excluding observations you intended to keep. Later chapters explain how to detect these mistakes.

Ask it to provide the outputs and the results of its checks, then use those to identify anything that needs explaining or revising. The guide develops ways to supervise this work without having to perform every step yourself or read every line of generated code.

## How to use this guide

If you are new to agents, begin with *Orientation*. If you already use one, you can turn to the chapters relevant to your current work. The guide has three parts:

- **Orientation** introduces the app, explains where your data goes, and shows how to control the agent’s access and choose its settings.
- **Direct the work** covers organizing your projects, giving the agent useful context, and saving instructions and procedures you want it to reuse.
- **Do the research** follows a worked research project through literature searches, analysis, checking, writing, and sharing the results. It also covers using LLMs within the research method and running or adapting open-weight models.

The examples use [Claude Code](https://code.claude.com/docs/en/overview) in the Mac desktop app. You do not need terminal or [Git](https://git-scm.com/) experience to begin, and the research practices apply to other agents. Harvard-specific guidance appears in clearly marked passages.

The appendices provide downloadable starter files, example requests, troubleshooting advice, and a glossary. The companion, [*Extending Your Agent’s Toolkit*](https://dss-agentic-toolkit.pages.dev/), explains how to ask an agent to install, configure, and use additional tools when your research needs them. You can adopt those tools as they become useful.

# 2. Get started with the app {#first-session}

You can use an agent with familiar research files and software without first learning a terminal. This chapter introduces the app and its main controls, so that later instructions about a folder, a session, or a permission mode have a clear meaning.

Imagine opening the folder for a paper you already work on. You need to know which folder the agent will use, where to describe a task, and where to inspect the files it changes. You also need to recognize the account and execution environment before making research material available. We will establish those boundaries next, then start the project in [chapter 6](#project-organization).

## Install and sign in

Download the Mac app through the [official desktop quickstart](https://code.claude.com/docs/en/desktop-quickstart), install it, and sign in with the account intended for your research. Open Code in the sidebar. Code is included in the desktop app; a separate terminal installation is unnecessary for this guide.

If Code is unavailable or the app asks you to upgrade, check that you have signed into the intended account and that it includes access. A feature advertised publicly may still be unavailable under an institution's settings.

> **Harvard.** Request a license through [HUIT's Claude page](https://www.huit.harvard.edu/claude), using the form for your school or unit. Use the Harvard account for institutionally covered work. Access to a license does not settle whether a particular research dataset may be processed; [chapter 3](#research-limits) covers that decision.

## Chat, Cowork, and Code

Chat is useful for a conversation; [Cowork](https://claude.com/docs/cowork/overview) offers a convenient continuation into document and other knowledge work, including shared chat memory. That continuity may suit a task that begins in Chat. We use Code because our work centers on a research folder, saved scripts, and repeatable execution. [Cowork's documentation](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) describes its current behavior; some accounts combine the Chat and Cowork interface.

## Recognize the main controls

The [desktop reference](https://code.claude.com/docs/en/desktop) explains the current layout. Locate these controls in your installation; their positions and availability can change.

| Control or view | What you need to know |
|---|---|
| Environment | Where tools will run. The Local route works with files on your computer; it does not mean the language model runs locally. |
| Project folder | The folder the session starts from. Select the intended project after establishing the boundaries in chapters 3–4. |
| Message box | Where you describe the task, add relevant files, and steer the work. |
| Permission mode | How actions are approved. Chapter 5 explains when to use the available modes. |
| Model and effort | Which model does the work and, where offered, how much reasoning it uses. |
| Conversation and tool activity | The request, the agent's explanation, and evidence of actions it has taken. |
| Changed-files view | The files edited in the session and the changes within them. Open resulting figures and documents in their usual applications too. |
| Session list | Earlier conversations. Saved project records will help a new session resume without relying on the entire conversation. |

For the main route, choose a Local environment and the project-folder selector when you are ready to begin. Cloud and remote environments are different execution routes; use them only after checking where their files, tools, and model requests go. Selecting a folder is not a guarantee that every available tool is confined to it.

## Steer the work and inspect the result

You can send a correction while the agent is working or use the stop control to interrupt it. Stopping does not undo changes already made. Ask it to identify the completed actions and affected files before deciding what to keep or restore.

For example, if the agent begins changing the analysis when you requested only new figure labels, stop that work and restate the scope. Inspect the changed files and the figure. Later chapters show how to save recoverable versions and specify tasks whose completion you can check.

You are ready for the next chapters when you can identify the intended account, environment and folder controls, mode/model controls, and the places to review activity and changed files. There is no practice-folder assignment here. The first project task will either establish a new research folder or organize an existing one.

# 3. Know where your data goes {#research-limits}

Protected research material can reach an external service through an agent's normal work. Before using it, establish where the information will go, whether that processing is permitted, and what copies may remain. These decisions affect the research environment you choose and the records you need to keep.

For example, a birth-records agreement might prohibit sending individual records to a hosted model. A no-training commitment would not remove that restriction. You could develop code with invented records and an approved schema, then run it in the restricted environment. If the model must read the real material to perform the analysis, you need an approved processing route for that task.

![](figures/research-data-routes.svg){#fig-research-data-routes fig-alt="Approved synthetic records enter a hosted model's context, which may be retained. Saved code runs on real records in a separate restricted environment. A locally hosted model is a different deployment route whose tools and records still need controls."}

## Establish the permitted route

Check any applicable federal grant or funder requirements, the data classification, the service and account approved for it, and the terms governing this particular project. These may include consent, a data-use agreement, an IRB protocol, contractual confidentiality, or health-data requirements. If the intended AI processing is unclear, ask the responsible institutional office before proceeding. An account setting cannot override those terms.

Assess every processing route, including connected services and hosted models used by local tools.

> **Harvard, checked November 3, 2026.** [HUIT's Claude guidance](https://www.huit.harvard.edu/claude) approves Harvard Claude Chat and Code for data up to Level 3, and [Cowork](https://claude.com/docs/cowork/overview) up to Level 3 provided you actively monitor autonomous sessions. Inputs are not used for training. Connectors require security and privacy approval. HUIT lists Claude Science as available but does not specify its data-level approval in this guidance; confirm that separately before supplying restricted material. Your project's terms may be narrower than the service approval.

Record the decision in the project file: which inputs the agent may use, which processing is allowed, and which outputs may be shared. Distinguish approved public-data acquisition from ordinary analysis: the former can create a new original file and provenance entry, while the latter should preserve those originals.

## What can reach the model

A local agent can read whole files or substantial portions of them into context, as well as receive excerpts, tool outputs, logs, and errors. Whatever the tool supplies may be sent to the hosted model. Choosing a local folder describes where work runs; it does not make the model local.

Review dictionaries, code, filenames, logs, and derived outputs as well as data files. Aggregation does not automatically remove disclosure risk or sharing restrictions. Preserve approved originals separately from deciding whether the agent may read them.

## Training and retention are separate

A promise not to train on submitted data does not mean that no copy is retained. Retention can depend on the product, organization policy, and contractual arrangement. [Claude Code](https://code.claude.com/docs/en/overview)'s [data-usage documentation](https://code.claude.com/docs/en/data-usage) describes retention separately from training; a period measured in weeks can still conflict with a project's terms. Anthropic documents [organization-controlled retention for Enterprise plans](https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans); this guide does not establish Harvard's current retention duration. Confirm it through the institutional service guidance when it matters to the project.

Deleting a conversation is not a substitute for having permission to submit the material. Nor does an opt-out setting on a personal account give it the coverage of an institutional agreement. Use the approved route established above.

## Establish a chain of custody {#data-chain-of-custody}

For data entrusted to you, keep a record of where they go and who or what can access them. Include copies and sensitive derivatives in prompts, context, tool responses, logs, exports, and backups. Two practical questions guide this record: can you locate the material after the analysis, and what can you then do with it, including deletion where required?

| Record | Example question |
|---|---|
| Source and authority | Which dataset version, agreement, consent, or protocol governs the work? |
| Recipient and route | Which model service, account, connected tool, or local process receives the information? |
| Copies and retention | Where are conversations, outputs, logs, and backups stored, and for how long? |
| Control afterward | Who can retrieve or delete each copy, what does deletion cover, and what cannot be confirmed? |
| Closure | What must be retained for the research record, and what must be removed when access ends? |

Establish these facts before submitting protected material. A deletion button may remove a visible conversation without immediately removing every retained copy. Record unresolved retention or deletion conditions and get them settled through the responsible service or institutional office.

Keep the custody record in approved project storage. Describe the allowed route in the agent's project instructions without including confidential details it is not permitted to see. The handoff chapter returns to this record when closing or transferring the work.

## Work with synthetic inputs when access is not permitted

The agent can write and test code using an approved schema and invented records with the relevant types and structure. Keep that work in a folder available to the agent. Run the resulting code on real data only in the approved environment, with no agent access unless separately authorized. Share only outputs that have been cleared for that purpose.

This is a development and testing route, not proof that the code will handle every feature of the real data. Check the actual run, and use the simulation and independent-implementation checks in chapters 14–15 within the permitted environment.

## When this app cannot support the task

If the approved route cannot process the required data and synthetic inputs are insufficient, consult research IT about an appropriate environment. Running a model locally may offer more control over data flow, but still requires authorization, suitable security, and evaluation of the model's performance. Chapter 17 explains this choice and links to the toolkit for setup. When the LLM itself must examine sensitive material, synthetic development cannot substitute for the actual measurement. An approved locally hosted open-weight model is one possible route; its tools, logging, and network access still need controls. Performance must be assessed for the research task (§16).

## If material is exposed accidentally

Stop further agent access and any ongoing transfer. Record what was exposed, to which service and account, when, and through which tool. Use your institution's incident-reporting route promptly and follow its instructions for containment and record handling. Do not assume that deleting the conversation resolves the incident or erase the evidence needed to assess it.

# 4. Control what the agent can do {#agent-access}

An agent needs enough access to do the assigned work, while unrelated projects, protected inputs, and recovery copies remain outside its reach. Define which files it can read or change, which programs it can run, and which services it can use. Those controls help enforce the data decisions from the preceding chapter.

For the synthetic birthweight project, ordinary work may include reading the invented data, editing analysis scripts, and writing figures. The agent has no reason to read a separate protected birth-records folder, change another paper, or send project files through a browser. Access should match that distinction even when the agent is working unattended.

![](figures/agent-access.svg){#fig-agent-access fig-alt="The agent and research project sit within a configured boundary. Approved file and tool routes remain available; unrelated files and unapproved services remain outside it."}

## Specify files, tools, and connections {#access-scope}

| Route | Research decision |
|---|---|
| Files | Which inputs may be read, which directories may be changed, and which paths must be inaccessible? |
| Commands | Which research programs and saved commands are needed, and what can their subprocesses reach? |
| Browser and network | Is the task searching public sources, downloading permitted inputs, or interacting with an authenticated service? What may it send? |
| Connected services | What account, records, and actions does each enabled connection expose? |
| Queues or remote execution | Where does submitted work run, and which restrictions apply there? |

Write the intended scope in the project instructions, then configure and check the mechanisms that enforce it. Instructions influence the model; they are not a technical barrier. A browser with an authenticated session may expose information that is absent from the project folder. A search query can itself disclose material, even when no file is uploaded.

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

For a real project, strongly consider [git](https://git-scm.com/) from the start. Ask the agent to maintain local checkpoints of the files you intend to track, keep unrelated edits separate, and describe the scope of each checkpoint. After a task, inspect the changed outputs and any consequential implementation detail. Have the agent record the accepted state; you need not learn git commands first. [Toolkit chapter 4](https://dss-agentic-toolkit.pages.dev/chapters/version-control.html) covers setup and recovery.

Without version control, make a dated copy of the working folder before substantial edits, preserving original data separately. This is a workable beginning, though it becomes harder to distinguish changes as the project grows. Ask for recovery of named files, not a blanket reset of the whole project.

Git protects tracked versions. It does not recover ignored data, reverse an upload, or replace backups. A git ignore rule neither blocks reading a file nor removes it from existing history. Never commit credentials or restricted data merely to make a recovery point.

## When a container helps

A *container* supplies a separate software environment and can limit what a task reaches. It is useful for running an unfamiliar replication package or preparing an environment to hand to a collaborator. Its protection depends on the folders mounted into it, credentials passed to it, network access, and privileges. Anything made available through those routes remains available to the code inside.

The toolkit's [container chapter](https://dss-agentic-toolkit.pages.dev/chapters/containers.html) explains the setup and its limits. A container is not permission to expose restricted data or to disregard the source of code you run. For ordinary tasks, start with approved inputs, the configured safeguards, and a recoverable checkpoint; add a container when the task needs that extra separation.

## Ask for an access report {#access-report}

> Inspect the settings that apply to this project. Report which files can be read or changed, which tools and connections are enabled, and which commands run outside the sandbox. Compare that with my intended scope. Propose any necessary changes before applying them, then check the agreed controls with harmless files and report the actual outcomes.

Keep the report with the project setup record and revisit it when the execution route or configuration changes. Chapter 5 explains the everyday mode choices once these access boundaries are established.

# 5. Choose the right settings for the task {#directing-work}

Settings affect how much the agent plans, how it gets approval, and how much model capacity it spends. Choose them to suit the research task. A few deliberate choices can reduce interruptions and wasted work without weakening the evidence you expect at the end.

Changing a figure label is a specified edit. Investigating conflicting estimates leaves more decisions open and may justify a plan and greater reasoning effort. Both tasks still operate within the access boundaries established in chapter 4.

## Permission modes

A *permission mode* determines when an action needs approval. Use the mode selector beside the app's prompt box. The everyday choices described in the linked documentation are:

| Mode | What it changes | When it is useful |
|:--|:--|:--|
| Manual | Usually asks before edits and commands, subject to existing rules | Learning the controls or deciding individual actions |
| Accept edits | Allows file edits and common file operations; other commands may prompt | Work where edits are routine but command execution needs attention |
| Plan | Explores the project and proposes an approach before changing the analysis | Work with unresolved scope or consequential choices |
| Auto | Reviews actions automatically and permits routine work with fewer interruptions | Most daily work within established boundaries |

The names and availability follow [Claude's permission-mode documentation](https://code.claude.com/docs/en/permission-modes). An institution may restrict the choices. Existing allow and deny rules also affect what happens, so Manual is not a promise to ask about every possible action, and Auto is not unrestricted access.

Two additional modes are worth understanding. *Bypass permissions* removes most permission checks; its availability is controlled by the app settings or your organization. It requires a separately isolated environment and is not the recommended mode for an ordinary local research project. *Don't ask* refuses actions that would otherwise need approval. It is intended for unattended use and has no app selector; the toolkit covers that terminal workflow. Neither is a substitute for setting the access limits in chapter 4.

For normal work, I use Auto after defining the permitted files and actions and checking the safeguards. I then review the result. Repeatedly approving routine edits adds little if I stop reading the prompts. For a genuinely consequential action, such as publishing results or changing a data-access boundary, I want a deliberate decision. If Auto is unavailable, use the modes your institution provides.

A more cautious mode does not authorize the use of restricted data. Establish whether the service and the intended processing are permitted before opening those files (§3).

## Plan mode

Use Plan when either the goal or the approach needs clarification. Select it in the app and describe the result, constraints, and relevant files. Ask for a plan that names the proposed changes, unresolved questions, and evidence it will use to check the work.

Read for assumptions, not just steps. Has it chosen the right input file? Does it intend to preserve the original sample? Has it silently replaced an expensive model with an easier one? Correct those choices, then authorize implementation and select an execution mode.

For a difficult plan, ask one or two fresh agent sessions to challenge its assumptions, identify failure cases, and propose alternatives. Supply the research question, constraints, and relevant literature as well as the plan. A critic that sees only the proposed answer can accept its assumptions too readily. Reconcile the critiques into a revised plan, resolving disagreements using evidence and the project's requirements. You decide which changes to accept. Agreement between agents does not establish methodological validity (§§14–15).

When the goal and method are clear, a direct instruction is usually enough. Use Auto within the established access limits from chapter 4 when it is available. If you have already supplied the transformation rules, the agent can implement them and show the checks without a separate planning round.

## Model and effort

The *model* is the LLM doing the work. *Effort* controls how much reasoning it uses. Pick the model in the app's model menu; use the effort control there when it is offered. Available models, effort levels, and defaults vary by account and model, so use the labels in your installation rather than memorizing a list. The [model documentation](https://code.claude.com/docs/en/model-config) explains the current options and usage implications.

![](figures/model-effort.svg){#fig-model-effort fig-alt="Model capability and reasoning effort can both increase as a task moves from a specified procedure to an open-ended problem." above="6pt" below="6pt"}

A routine formatting change rarely needs the same resources as designing a calibration study or investigating conflicting estimates. I start consequential research work with a capable model and high effort, then reduce them for clearly specified, repetitive tasks. More reasoning can improve a difficult implementation, but it cannot supply evidence the agent has not read or make an unsuitable specification appropriate.

Both choices respond to how much the agent must work out along the way. They can be adjusted separately: a capable model can still be useful at lower effort when the procedure and checks are clear. Task consequences and the evidence needed to verify the result also matter.

Check the account's usage display before launching several substantial tasks. Model names change, and a newly offered model may have different usage terms. A faster response is useful only if the result still meets the checks you set.

## Usage and cost

Models process text in small pieces called *tokens*. A token can be a word, part of a word, or punctuation. Reading project material, reasoning about a task, and producing a response all use tokens. Model choice and account terms affect how that processing draws on your usage allowance; there is no universal number of messages or words per allowance.

Use the app's usage display to see the applicable allowance and reset information; the [desktop reference](https://code.claude.com/docs/en/desktop#check-usage) describes its location. Available models and extra usage can have different terms, so check what the account offers before a large task. For Harvard, the current license route is in §2.

As of October 2026, Claude documents both a five-hour session limit and a weekly limit for Pro, Max, Team, and seat-based Enterprise plans. The same work counts toward both: a five-hour reset does not clear the weekly limit. The usage display shows the reset times that apply to your account. Usage-based Enterprise plans use consumption billing instead. See [Claude's usage-limit guidance](https://support.claude.com/en/articles/9797557-usage-limit-best-practices). These allowances are separate from the context window, which limits how much information the model can work with at once.

Large inputs, lengthy outputs, higher reasoning effort, and several concurrent agents can increase usage. The accounting also depends on caching and the plan, so message count is a poor proxy for cost. Keep requests focused, refer to files rather than pasting repeated copies, and save results and decisions outside the conversation.

A long computation does not inherently consume LLM tokens while it runs. Repeated progress queries and large logs can, however, use the agent unnecessarily. Let a suitable application or queue run the saved script, then have the agent inspect the relevant log and outputs (§13). Verify that the job actually completed.

## The supervisor stance

Before delegating, state the outcome, constraints, and evidence you will use to judge completion. Request a plan when important choices remain unresolved. Afterward, use that evidence to decide what to accept and have the agent update the project records (§7). Over time, repeated errors should lead to more precise instructions or stronger checks, so the same failure is less likely in the next task.

<!-- ===================== PART II — DIRECT THE WORK ===================== -->

# 6. Organize your research projects {#project-organization}

A consistent project structure helps both you and an agent identify the current inputs, code, and outputs. It reduces the chance of editing an obsolete script or reporting a figure from the wrong analysis. These are useful research habits in their own right; agents make the value of recording them more obvious.

Consider a heat-and-birthweight project with `analysis-final/`, `analysis-new/`, and three figure folders. You may remember which files belong together. An agent sees competing candidates. Establishing one documented arrangement gives it a reliable starting point, whether you are beginning a new paper or bringing it into work already underway.

## Give projects a place in a workspace {#workspace-layout}

A *workspace* is a parent folder containing your projects. Grouping projects by their intended output makes them easier to find and lets you reuse a suitable structure. For example:

```
workspace/
  papers/
    heat-birthweight/
    neighborhood-health/
  data/
    weather-extracts/
  publishing/
    lab-website/
    conference-talk/
```

Use separate folders for independently maintained projects. A short workspace index can list each project's purpose and location, including dependencies such as two papers using the same curated dataset. Open the relevant project in the app. An index helps navigation; it does not grant permission to read every listed project.

Several papers under a grant can share conventions and input sources while retaining their own methods, status, and record of the data version used. Keep shared data in an agreed location and record that dependency in each paper. A multi-project app feature may help coordinate work, but the ordinary folders and records should remain understandable without it.

## Match the structure to the output {#project-shapes}

The structure should make the work easy to locate. A paper needs manuscript source and analysis outputs; a data project needs acquisition code and provenance; a website needs editable content and a build destination. They can share naming conventions without having identical directories.

For the example paper:

```
heat-birthweight/
  CLAUDE.md          # starting instructions and pointers
  README.md          # purpose and execution instructions
  STATUS.md          # current state
  TASKS.md           # open and completed work
  METHODOLOGY.md     # analytical choices and their reasons
  .here              # project-root marker
  data/
    raw/             # inputs preserved as received
    processed/       # inputs derived by saved code
  code/              # data preparation, models, and shared functions
  outputs/
    figures/
    tables/
    models/
  manuscript/        # editable paper source
  docs/              # provenance, specifications, and references
```

Use only the parts the project needs. The next chapter explains the record files; [Starter files](#starter-files) supplies adaptable templates and layouts.

Preserve originals and produce derived files through code. If a derived variable is wrong, correct the script and rebuild the file. Keep manuscript figures and tables associated with the result version that produced them. Decide deliberately which large fits, logs, or inputs belong in version control and which need another preservation route; neither file size nor a directory name settles their scientific value.

Use paths relative to a documented project root so scripts work from an IDE, the agent, and a collaborator's computer. A root marker such as `.here` can support this in [R](https://www.r-project.org/); other languages can use the project's established equivalent. Avoid embedding one person's home directory in analysis code. [Chapter 13](#research-workflows) develops the runnable analysis structure.

## Start a new project with a scaffold {#scaffold-project}

A *scaffold* creates the initial folders and record files for a particular kind of output. A reusable scaffold skill can apply your or your lab's conventions, so you do not have to describe the same layout for every paper. You can use an existing skill before learning to author one in chapter 9.

<!-- prompt:scaffold-project -->
::: {#request-scaffold-project .prompt}
> Create a project for the research described below, using our established workspace and conventions. Propose a small folder structure suited to the deliverable, then create the approved structure and initial project instructions. Preserve any existing files. Record missing scientific decisions instead of inventing them, and show me where inputs, code, results, and the manuscript belong.
:::
<!-- /prompt:scaffold-project -->

Check the resulting tree and the facts written into the records. A scaffold should leave unknown methods, collaborators, or data permissions marked as unknown. It must not turn a plausible guess into a project instruction. The synthetic example contains invented records; a real project's input permissions require their own decision.

## Bring an agent into an existing project {#restructure-project}

Keep an established lab layout if it already makes the current work clear. For a genuinely confusing folder, ask the agent to help restructure it before using it as the basis for repeated analysis tasks.

Begin with a recoverable copy outside the folder being reorganized. Identify the manuscript and outputs you consider current, then ask for a before-to-after map. Modification dates and filenames are clues, not proof of which analysis is authoritative. The agent should inspect script references and ask about unresolved competing versions.

<!-- prompt:restructure-project -->
::: {#request-restructure-project .prompt}
> Inspect this project and propose a clearer structure that preserves original data and accepted work. Identify scripts, outputs, duplicates, and uncertain files; do not decide that uncertain files are disposable. After I approve the plan, make a recovery checkpoint, reorganize the files, update affected paths, and save a before-to-after file map. Check that the existing analysis still runs and report unresolved dependencies.
:::
<!-- /prompt:restructure-project -->

Retain originals and uncertain duplicates in a documented holding location. After moving files, update paths in scripts, manuscript source, and run instructions. Rerun the work needed to reproduce the current outputs and investigate failures. A successful move must not silently alter the sample or method. Keep the earlier copy until those checks succeed.

A coauthor can continue sending files in their preferred format. Keep an incoming area, preserve what arrived, and record how it maps into the project. The full research procedure includes reviewing ambiguities; a short live demonstration may omit that stop for presentation purposes.

## Keep synchronization separate from recovery

A synced folder is not a substitute for version history or a tested backup. Environment libraries and caches can contain thousands of changing files; two machines should not edit the same Git metadata through a sync service. A plain local working folder is a straightforward starting point, with backups and approved sharing handled separately.

If the project already uses Dropbox or another sync service, preserve that working arrangement while checking how generated directories and repository metadata are handled. The toolkit's [version-control chapter](https://dss-agentic-toolkit.pages.dev/chapters/version-control.html) covers the configuration details. Reorganizing research files should not become an unplanned migration of the machine's software environment.

# 7. Give the agent context for your project {#project-context}

Returning to research after a week should not require reconstructing which data were used, why records were excluded, or what remains unfinished. An agent can maintain a short project record as it works. That record lets both you and a new session resume from the current evidence rather than an old conversation.

Suppose the synthetic heat-and-birthweight project has a checked main analysis and an unfinished sensitivity analysis. A fresh agent needs to know which results are current before changing a caption. A short status file can identify the saved results and the next task; a methods record can explain the inclusion rule without making the agent infer it from filenames.

![](figures/project-context.svg){#fig-project-context fig-alt="Project instructions, current status, and tasks survive the conversation; checked work updates the record." above="8pt" below="8pt"}

## Orient the agent to the project {#project-orientation}

The previous chapter established the folder and identified the current work. Now give the agent enough context to act on that record. Explain the research purpose, permitted inputs, current entry points, and decisions that require your involvement. A new project has more unknowns; an existing one may need conflicting records reconciled first.

A *context window* is the material available to the model during a session: messages, loaded instructions, file content, and tool results. Project files preserve information beyond that window. They should describe the work as it is now, not rely on what you remember saying in a previous conversation.

<!-- prompt:project-context -->
::: {#request-project-context .prompt}
> Read the project files and draft a concise project instruction file describing the purpose, current commands, file locations, scientific specification, and access limits. Separate observed facts from questions for me. Link to detailed records rather than copying them into the instructions. Preserve existing authored instructions and show proposed revisions before replacing them.
:::
<!-- /prompt:project-context -->

## Give the files distinct jobs

| File | What belongs there |
|---|---|
| `CLAUDE.md` or an imported `AGENTS.md` | Project instructions, permitted inputs, entry points, and pointers to the other records |
| `STATUS.md` | Current state: which analysis and outputs are current, what is underway, and what is blocked |
| `TASKS.md` | To Do, In Progress, and Done, with dates and evidence for finished tasks |
| `METHODOLOGY.md` | Reasons for analytical choices, changes, and rejected alternatives |
| `README.md` | A collaborator's introduction and instructions for using the project |

Start with the instruction file and add the others when needed. A larger project may also need a `PLAN.md` for the analysis sequence and milestones. It should point to the task list and methods record rather than repeat their contents.

Here is a starting brief for the synthetic example. Its scientific specification lives in a separate file so that the short instructions do not have to reproduce the whole analysis plan.

<!-- starter:project -->
```
# heat-birthweight

Synthetic teaching study of heat exposure and birthweight. Every individual
record is invented; results are not evidence about actual pregnancies.

## Read first
- specification.md: estimands, estimator, input rules, uncertainty, and checks.
- STATUS.md: current state and next decision.
- TASKS.md: work remaining and dated completions.
- METHODOLOGY.md: scientific decisions and their reasons.

## Files
- data/raw/: approved original synthetic data; preserve unchanged.
- code/: saved analysis and validation steps.
- outputs/: fits, contrasts, figures, and verification records.
- manuscript/: text linked to the saved outputs.
- README.md: actual commands and environment restoration instructions.

## Working rules
- Follow the written specification. Report missing inputs or ambiguities.
- Do not invent observations, alter the estimand, or weaken a failed check.
- Save full-precision results; apply rounding only for presentation.
- Keep simulation outputs separate from the single-dataset analysis.
- Record the exact input and software versions used.
- Inspect changed outputs and record verification before reporting completion.

## Access
Only approved synthetic material belongs in this project. No protected birth
records are available here. Ask before adding external services or publishing.
These instructions do not enforce file or network permissions; use the
configured access controls for those boundaries.
```
<!-- /starter:project -->

You can keep this directly in `CLAUDE.md`. If the lab maintains agent-neutral instructions in `AGENTS.md`, a `CLAUDE.md` containing `@AGENTS.md` is a supported way to load that one maintained copy. Current [Claude](https://claude.ai/) versions can also load `AGENTS.md` directly under specified conditions; ask the agent to verify what the installed session actually loaded. The [instruction-file documentation](https://code.claude.com/docs/en/memory#agentsmd) describes both routes. Do not maintain two independently edited copies.

## Update the record while doing the work

At the start of a session, ask:

<!-- prompt:resume-project -->
::: {#request-resume-project .prompt}
> Read the project instructions, STATUS.md, and TASKS.md, then inspect the files relevant to the next task. Tell me the current state, any conflict between the records and the files, and the next useful action. Do not treat an unverified claim of completion as evidence that a check passed.
:::
<!-- /prompt:resume-project -->

After setting the task, have the agent record it as In Progress. Before closing the session, ask:

<!-- prompt:close-session -->
::: {#request-close-session .prompt}
> Update TASKS.md with completed and remaining work. Rewrite the affected parts of STATUS.md to describe the current state, without adding a running history. Record scientific decisions and their reasons in METHODOLOGY.md. Include the outputs checked, failures or gaps, and the next action; do not mark work complete without evidence.
:::
<!-- /prompt:close-session -->

For example, after a figure-label task:

| Before the task | After the task and its checks |
|---|---|
| Figure 2 uses the previous labels. | Figure 2 rebuilt from the saved predictions with the approved labels. |
| Next: correct labels; then review the sensitivity analysis. | Next: review the sensitivity analysis; no model refit was needed for the label change. |

The task list receives the dated completion entry. The status file describes the resulting state, without accumulating a second history of the task. If version control is in use, the recovery arrangement from chapter 4 can have the agent record a version after completing the task. Neither maintaining these records nor producing a status report requires git.

Open one claimed output and check it against the request. If an analysis was supposed to run, inspect its actual result or failure record. After a rename, have the agent find references to the old path and test the affected command. Update the README in the same task.

## Keep enough context without loading everything

Long histories can crowd out the information needed for the next task. Keep the project brief short and point to detailed records by purpose. Give the agent a current file path rather than pasting a copy that will become stale.

A written pointer tells the agent when to consult a file; an `@` import loads the referenced instructions as part of the instruction file. Use imports deliberately. Keep global style and modeling conventions in the next chapter's shared files rather than copying them into every project.

Auto memory is another source of carried-over context. Ask the agent to show relevant saved notes when its assumptions conflict with the project record. Correct stale notes and keep consequential decisions in the maintained project files. Starting a new conversation does not establish that no prior information will be loaded; §16 explains deliberate context control for research measurements.


## Keep the record trustworthy

Check a task marked Done against its claimed output. If the agent wrote code but did not run it, record that unfinished work. After a rename, test the affected command rather than treating the new folder tree as proof of success.

Preserve unrelated working changes, keep a checkpoint's scope clear, and review consequential edits and their outputs before accepting them. Do not let a small fix become a general reformatting pass that hides the change. Use the toolkit for Git mechanics; the important habit is to retain enough evidence to explain what changed and recover an earlier state.

If an agent's memory conflicts with the current files, inspect the saved note and correct its source. Keep a reversal of a methodological decision as a new dated entry so the reason for the change remains visible. Ask the agent to reread files you have edited during the session. The context-control discussion in chapter 16 explains why a fresh conversation alone is insufficient for an isolated research run.

# 8. Apply your conventions across projects {#shared-conventions}

Shared conventions prevent you from correcting the same coding style, reporting rule, or prose habit in every project. They give the agent a consistent way to work while leaving each paper's question, data, and decisions in its own records.

For example, you might require uncertainty alongside estimates, project-relative paths, and a saved environment record. Those conventions apply to the birthweight paper and another project. The particular exposure contrast and current analysis sample belong only in the birthweight project's specification.

![](figures/shared-conventions.svg){#fig-shared-conventions fig-alt="A short global instruction file points to specialist conventions. Several projects use those conventions while retaining separate questions, status, tasks, and decisions."}

## Start with a short shared instruction file {#shared-instructions}

Write rules whose application you can recognize. “Preserve the existing environment and report any required package change” gives the agent something more concrete than “be reproducible.” Add rules to solve recurring problems, rather than anticipating every possible task.

In [Claude Code](https://code.claude.com/docs/en/overview), personal instructions can live in `~/.claude/CLAUDE.md`; the tilde means your home folder. Ask the agent to create or edit the file from the app and inspect the result. The [instruction-file documentation](https://code.claude.com/docs/en/memory) describes personal, project, and managed instructions. Your institution may supply additional rules.

<!-- starter:global -->
```
# How I work

[Describe your research role and the software you normally use.]

## Before a task
- Read the project's instructions and current state. Preserve accepted work.
- Identify the requested result, constraints, and evidence needed to accept it.
- Ask about consequential ambiguity; do not silently substitute another analysis.

## Conventions
- Read CONVENTIONS.md when organizing a project or naming files.
- Read CODING.md before writing or changing code.
- Read MODELING.md before statistical modeling or simulation.
- Read WRITING.md before drafting prose for people to read.
- Read TOOLCHAIN.md before adding or changing software.

These files sit beside this file. If a needed file is absent, report the gap.

## Research work
- Preserve original data. Derive new files with saved code.
- Use independently runnable steps with declared inputs and outputs.
- Keep scientific decisions and their reasons in the project record.
- Verify observed outputs before reporting success. Keep failed checks visible.

## Limits
- Use only inputs and services approved for the project.
- Ask before publishing, sending messages, expanding access, or adding a service.
- Do not delete recovery copies or rewrite shared history without approval.

## Finishing
- Update the task list and current-state record from evidence.
- Report what changed, how it was checked, and what remains unresolved.
```
<!-- /starter:global -->

This short file can point to more detailed conventions. The specialist filenames below are ordinary Markdown files; their names alone do not make the agent load them. The main instructions should explain when and where to read them. Use one maintained copy of each rule.

## Put detailed conventions in specialist files {#specialist-conventions}

| File | Recurring problem it addresses | Example instruction and when to consult it |
|---|---|---|
| `CONVENTIONS.md` | Projects have inconsistent layouts, names, or output locations. | Before scaffolding or restructuring, use the appropriate paper, data, or website shape; distinguish original inputs from generated files. |
| `CODING.md` | Each session changes the language style or invents a new execution arrangement. | Before editing source, use the project's language conventions, reusable functions, root-relative paths, and existing package environment. |
| `MODELING.md` | Modeling and reporting requirements have to be repeated. | Before fitting or interpreting a model, state the estimand, distinguish it from coefficients, and apply the required simulation and uncertainty checks. |
| `WRITING.md` | Drafts repeatedly need the same voice and reporting corrections. | Before writing prose, use direct sentences, define technical terms, and distinguish an estimate from its interpretation. |
| `TOOLCHAIN.md` | The agent installs a tool already available or proposes an incompatible alternative. | Before setup or troubleshooting, inspect the inventory and preserve an adequate existing tool. |
| `WORKSPACE.md` | The agent cannot locate related projects or shared inputs. | Before cross-project work, consult the project index and then check that access to the identified location is authorized. |

You do not need all six files immediately. Start with the convention you repeatedly explain, then split a topic when the main instruction file becomes too long. A manuscript edit may need writing guidance without the full modeling reference. An inventory such as `TOOLCHAIN.md` supplies facts; `CODING.md` prescribes working rules. Keep both current, but do not confuse them.

For the running example, the shared modeling file might require a simulation before relying on an unfamiliar estimator. The project specification supplies the age-dependent heat contrast, outcome model, and scenarios. The specialist file should not dictate one birthweight model for every future paper.

<!-- prompt:shared-conventions -->
::: {#request-shared-conventions .prompt}
> Review these project instructions for conventions I use across projects. Propose a short global instruction file that points to specialist files for coding, modeling, writing, project structure, and installed tools. Keep this study’s scientific decisions and access exceptions in the project. Identify duplicated or conflicting rules and show proposed changes before applying them.
:::
<!-- /prompt:shared-conventions -->

## Check that the convention is used

Apply one new rule to a small task and inspect the result. Ask the agent to identify the instruction it consulted, revise a paragraph under the writing guidance, or show the environment record before changing an analysis script. Creating a file does not demonstrate that the session loaded or followed it.

Instructions guide behavior; [chapter 4's access controls](#agent-access) enforce particular technical restrictions. A statistical convention also needs scientific judgment: the project still has to justify the question, assumptions, and estimator.

## Share conventions within a lab

A lab can maintain shared files and skills in a repository, review changes together, and make them available locally to members. Each person's agent instructions then point to the relevant files. Synchronizing a folder alone does not configure the agent to read it.

Keep paper-specific exceptions in the paper's record, including the reason. Have the agent flag a conflict rather than silently changing a convention for every project. When a shared rule changes, consider which ongoing projects actually need an update; a completed analysis should not change simply because the lab adopted a new default.

The toolkit's [shared-settings chapter](https://dss-agentic-toolkit.pages.dev/chapters/shared-settings.html) describes an optional tool for maintaining configuration across machines. Sharing a few instruction files does not require adopting that whole setup.

# 9. Reuse research procedures you trust {#reusable-procedures}

When a useful procedure recurs, saving its instructions reduces the effort of setting it up again and makes omissions easier to spot. A skill packages those instructions for the agent. It is worth creating after you have a procedure whose inputs, output, and checks you trust.

For example, a coauthor asks for a short status update each week. The project already has `STATUS.md` and `TASKS.md` (§7). A status-report skill can turn those records into a draft, identify missing evidence, and leave sending it to you. It needs neither a [git](https://git-scm.com/) history nor a later research chapter.

## What a skill is

A skill saves a procedure for the agent to follow again. Think of turning data-cleaning code into an [R](https://www.r-project.org/) or [Python](https://www.python.org/) function that accepts different datasets: separate the recurring procedure from the particular input. A skill applies that idea to instructions the agent interprets and carries out. Unlike a function, it does not specify every operation as executable code, so saving it does not guarantee identical execution or outputs.

A skill is stored in a folder containing a file called `SKILL.md`. The file begins with a short header naming the skill and describing when to use it. The rest of the file gives the procedure, much like the requests in §7, §11, §12, §13, §15, §18, §19 and Appendix B. In the app, select the skill from the slash menu, or ask for it by name. The agent may also select it when the request matches its description. Unlike the project instructions, which are loaded every session, a skill's full procedure is loaded only when it is used (§7).

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

<!-- prompt:status-skill -->
::: {#request-status-skill .prompt}
> Create a project-status skill from the handoff procedure we have checked. It should read the project instructions and state files, verify relevant outputs, update the task list and snapshot, and report unresolved issues. Keep the instructions short, name the evidence required, and stop if the project cannot be identified. Test it on this project and show the resulting changes before treating it as reusable.
:::
<!-- /prompt:status-skill -->



The description is the part to write carefully. It decides when the agent invokes the skill unasked, so it says when to use it and when not to, in the same spirit as a rule in the brief. The body is the prompt you would otherwise retype, with clear instructions about where the output goes, what to report, and when to ask for a decision.

For [Claude Code](https://code.claude.com/docs/en/overview), ask the agent to place the skill in the appropriate location. Each skill is a folder named for it, holding `SKILL.md`:

| | Where |
|:--|:--|
| Every project | `~/.claude/skills/` |
| This project (committed) | `.claude/skills/` |
| Run it | `/name`, or automatically |

The [Claude](https://claude.ai/) app lists skills under the same slash menu. A skill that needs more than instructions (a report template, a script it should run) keeps those files in the same folder and refers to them by name.

## What to package

Repeating a procedure a few times is a useful signal that it may deserve a skill. First confirm that its inputs, outputs, and checks are stable enough to reuse. The candidates in this guide are already written: the session rituals (§7), a fetch with its provenance entry (§12), the simulation check (§14), the second implementation and its comparison (§15), the number-traceability table (§18), the clean-copy check and the pre-deposit audit (§19). Appendix B contains the full copyable requests, generated from the same maintained prompt files as their chapter examples. Adapt a request only after its procedure works for you.

Keep project-specific facts, such as file locations and data restrictions, in the project instructions. A reusable skill should tell the agent to consult those instructions. Similarly, refer to your global conventions rather than copying them into each skill. This lets you reuse the procedure across projects and update a rule in one place.

For example, a research-folder skill could inventory files and propose a structure, pause for your review and approval, then reorganize and verify file preservation (§6). It could include a saved checksum script alongside its instructions. Each new project's proposed changes still need review; the skill preserves the procedure, not approval of those changes.

My own skills illustrate the kinds of procedures you can save. `/scaffold` creates a project in the paper layout described in §6. `/eda` produces a dated report on a dataset's types, missingness, distributions, correlations, and outliers. `/dag` draws a causal diagram from a written graph and computes the adjustment set. `/review-plan` critiques an analysis plan before implementation, while `/review-analysis` audits a completed analysis for issues with identification, convergence, and project conventions. I also use `/targets` and `/pueue` for pipelines and long jobs, whose tools are covered in the companion. Each skill began as a repeated request and includes checks specific to its task.

When a skill produces an unsatisfactory result, revise the instructions or checks that allowed the problem. Keep the main procedure to a screen or two, and put longer templates or checklists in files beside it.

## Adopt an existing skill carefully

Before writing a new skill, look for one that already covers the task in a maintained collection you trust. Read its instructions and supporting scripts, check its assumptions about inputs and permissions, and try it on disposable material. A good description is not evidence that its procedure fits your research. Keep the source and version so changes are reviewable; remove steps or access you do not need.

## When an automatic check helps

A *hook* runs a configured action at a supported event, such as before a tool call or after an edit. It can help run a quick check or notify you that the agent needs attention. Whether it can block an action depends on the event and configuration; a check after an edit cannot prevent that edit from having occurred. Hooks also need testing and protected configuration. They do not replace the access limits in chapter 4.

Most readers can begin by asking for the appropriate checks at the end of a task. Add automation when a repeated omission justifies it, and avoid a hook that launches a full expensive analysis after every small edit. The toolkit covers tool-specific configuration; Claude's [hooks documentation](https://code.claude.com/docs/en/hooks) describes the current event behavior.

<!-- ===================== PART III — DO THE RESEARCH ===================== -->

# 10. The research project we’ll follow {#example-project}

A shared example makes the consequences of each workflow decision visible. We will carry one project from a scientific specification through sources, data, analysis, checks, and manuscript output. The point is to see what the agent receives, what it produces, and what evidence lets you accept the work.

The project asks how heat exposure relates to birthweight, and whether that relationship varies with maternal age. Every individual record in the downloadable example is synthetic. Its relationships are deliberately constructed for teaching; its estimates are not evidence about actual pregnancies or the health effects of heat.

[Download the complete synthetic research project](resources/heat-birthweight.zip){.download-button download="heat-birthweight.zip"}

The package includes the specification, original invented records, both implementations, pinned software records, simulation results, and verification evidence. Its README distinguishes checks already run from environment-restoration work still to test. You can read the saved artifacts before installing any additional tools.

## The question and the quantity of interest {#example-specification}

The example contains independent synthetic birth records with maternal age, smoking status, a count of third-trimester hot days, and birthweight in grams. Maternal ages cover 18–40 years; hot-day counts range from 0 to 20. The scientific specification distinguishes the quantity to report from the model used to estimate it.

| Item | Specification |
|---|---|
| Question | What is the mean birthweight difference between 10 and 5 hot days, and how does it vary with maternal age? |
| Primary estimand | The predicted mean difference, 10 minus 5 hot days, standardized over the observed age and smoking distribution of this synthetic sample. It is a sample-standardized contrast. |
| Secondary estimands | The same 10-minus-5 contrast at specified maternal ages, using the sample's smoking distribution. |
| Estimator | Least squares with a quadratic age term, a hot-days-by-age interaction, and smoking as an adjustment variable; counterfactual predictions supply the contrasts. |
| Uncertainty | 95% confidence intervals using a heteroskedasticity-robust covariance estimate. Simulation checks their behavior under the declared scenarios. |
| Primary outputs | A contrast table, an age-specific contrast figure, a simulation summary, an independent comparison, and a short manuscript results passage. |

The estimand is a difference in mean birthweight over a stated distribution. It is not automatically the coefficient of hot days when that coefficient interacts with age. The estimator must calculate the requested contrasts from the fitted model.

This is not automatically a population-average causal effect. A real study would need a defined target population and defensible assumptions about confounding, exposure and outcome measurement, selection, and support for the contrast. The synthetic generator specifies those relationships; it cannot establish the corresponding assumptions for real records.

## The known relationships used for testing

The main synthetic scenario has a curvilinear age relationship and a heat contrast that varies with age. Outcomes are positive and their dispersion varies with their mean. The generator, its parameters, and an independent calculation of the true contrasts belong in the example's simulation record.

Chapter 14 examines both a null heat effect and the specified age-dependent relationship, then a stress scenario whose relationship is more flexible than the proposed estimator. That last case should reveal a limitation rather than be silently modified until the analysis passes. Scenario definitions precede the repeated runs; generated results are labeled as simulation output.

## Keep the specification and the work together

The project begins with the folder and context files introduced in chapters 6–7. Its scientific specification is a maintained file, while `METHODOLOGY.md` records decisions and revisions. A literature finding or data limitation may justify a change, but the agent should propose it and record the reason rather than quietly substitute a different question.

<!-- prompt:research-specification -->
::: {#request-research-specification .prompt}
> Turn my research decisions into specification.md: state the estimands, population or averaging sample, exposure comparisons, estimator, sample rules, required inputs, uncertainty method, and reported outputs. Identify ambiguities for me rather than choosing silently. Add the agreed verification tolerances and simulation questions. Do not begin fitting until I have reviewed the scientific specification.
:::
<!-- /prompt:research-specification -->

## Follow the artifacts through the chapters

| Work | Artifact carried forward |
|---|---|
| Literature | Search record, verified references, and evidence relevant to the question and assumptions. |
| Data | Original synthetic inputs, a dictionary, and a record of their source and generation. |
| Modular analysis | Separately runnable preparation, fitting, contrast, figure, and reporting steps. |
| Simulation | Known [targets](https://docs.ropensci.org/targets/), saved runs, failures, and comparisons of recovered quantities with truth. |
| Independent implementation | A separate implementation from the same inputs and specification, with a comparison report. |
| Writing | A link from the chosen result file and entry to each reported number and figure. |
| Handoff | Permitted inputs or their reconstruction route, software records, commands, reference outputs, and evidence from a reproduction test. |

The LLM-analysis chapter uses the separate AI peer-review example because generating and judging reviews illustrates a different research use. Its labeling example continues into chapter 17 to explain when local execution or model adaptation may help. There is no reason to make an LLM analyze synthetic birth records merely to force every chapter into the same example.

# 11. Find and assess research literature {#literature}

A literature search is useful when you can explain how the evidence was found and check what it supports. An agent can reduce retrieval, screening, and extraction work, provided it preserves the sources and the decisions behind its synthesis.

For the heat-and-birthweight project, a study of low birthweight is not automatically evidence about a difference in mean birthweight. Exposure windows, temperature definitions, and study populations may differ too. A useful search identifies those distinctions instead of producing a fluent paragraph that treats every heat-related result as interchangeable.

## Specify the search before running it {#literature-protocol}

Give the agent the question, inclusion and exclusion criteria, date range, languages, sources, and stopping rule. Have it draft a protocol, then resolve ambiguous choices before searching. Background reading and a systematic review have different coverage requirements; involve an information specialist when completeness supports a substantive claim.

Name the sources and record gaps. [Crossref](https://www.crossref.org/) can help verify DOI metadata; [OpenAlex](https://openalex.org/) and field-specific databases support discovery. [PubMed](https://pubmed.ncbi.nlm.nih.gov/) is relevant to this example. Access to subscription databases and full texts depends on your institution. A built-in search or review tool still needs the same protocol and verification record.

<!-- prompt:literature-search -->
::: {#request-literature-search .prompt}
> Search for research relevant to the question and criteria in our specification. Record the sources searched, exact queries, dates, and screening decisions. Verify each journal article’s DOI against publisher or registry metadata, including title, authors, and year; flag mismatches and works without a DOI rather than inventing one. Save verified references separately from leads, and distinguish abstracts from full texts you actually read.
:::
<!-- /prompt:literature-search -->

Save the protocol, queries and dates, unmodified search responses, deduplication decisions, screening reasons, unresolved records, and an evidence table. Keep bibliography exports in formats your writing tools can use, such as BibTeX and RIS. Ask for a progress review when a search becomes larger than expected; an arbitrary cap on returned records can make inclusion depend on a database's ranking.

## Verify the citation and then the claim {#verify-citations}

Require a verified DOI for each cited journal article when one exists. Resolve it and compare the title, authors, year, and publication with the retrieved record. A plausible DOI string or a well-formatted citation is insufficient. For legitimate material without a DOI, use a verified alternative such as a PMID, arXiv identifier, or stable publisher/catalog record. Keep unresolved sources explicitly flagged.

For a concrete example, the DOI [10.1136/bmj.m3811](https://doi.org/10.1136/bmj.m3811) identifies Chersich and colleagues' 2020 systematic review of high temperatures in pregnancy and birth outcomes in *The BMJ*. Its [publisher record](https://www.bmj.com/content/371/bmj.m3811) supplies the title, authors, date, and DOI for comparison. It is a real source relevant to the topic, not evidence that our synthetic age relationship or chosen contrast describes real births.

Matching metadata establishes which work the citation identifies. Open the source and inspect the passage, table, or figure supporting the proposed claim. Record whether screening used a title, abstract, or full text. A title-only decision is not a completed reading of the paper, and an empty extraction cell may mean “not yet extracted” rather than “not reported.”

If a DOI lookup fails, investigate before calling the citation fabricated. The registry, service, or supplied metadata may be wrong. In an earlier search, a real paper registered with [DataCite](https://datacite.org/) was incorrectly flagged when the verifier queried only Crossref. Check for corrections, retractions, preprint/published duplicates, and different versions of the same work.

## Build a synthesis with traceable support {#literature-synthesis}

Have the agent prepare a claim-to-source table before drafting prose. For the running project, useful columns include the population, exposure definition and window, birth outcome, study design, reported quantity, supporting location, and limitations. Preserve disagreements and differences in definitions instead of forcing a consensus.

| Proposed use of evidence | What the agent must distinguish |
|---|---|
| Motivate studying heat and birth outcomes | Evidence concerning pregnancy outcomes generally versus mean birthweight specifically. |
| Choose an exposure window | A reported trimester or weekly window versus the one our example happens to use. |
| Consider age moderation | An analysis that actually examines effect variation versus an unsupported assumption about a subgroup. |
| Interpret a numerical contrast | An odds ratio for low birthweight versus a difference in mean birthweight in grams. |

<!-- prompt:literature-synthesis -->
::: {#request-literature-synthesis .prompt}
> Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.
:::
<!-- /prompt:literature-synthesis -->

Check the sources you will cite and the passages supporting the manuscript. Sample exclusions, especially borderline records or those without abstracts. Supply known relevant studies to check retrieval. Reconcile retrieved, duplicate, excluded, unresolved, and included counts. None of these checks turns a limited discovery search into an exhaustive review.

## Reuse the procedure as a skill {#literature-skill}

Search, screen, verify, extract, and preserve the evidence: these requirements recur even when the research question changes. That makes literature work a strong candidate for a skill. The DSS `litsearch` procedure packages this process; give it the project-specific question and criteria, then inspect its protocol, verification report, and evidence outputs.

<!-- RELEASE: replace this note with the verified public DSS litsearch repository link before publication; the current repository is private. -->

You should understand the procedure before relying on the skill. Read its current instructions and check that it preserves unresolved sources and your intended scope. [Chapter 9](#reusable-procedures) explains how to adopt and adapt a skill; the skill should remain the maintained implementation rather than being copied wholesale into this chapter.

## An earlier recorded search

The previous guide included a real search about peer-review duration. Its counts remain useful as an example of an auditable run: 604 records retrieved across 15 queries, six set aside for missing identifiers, 507 after deduplication, 459 excluded, 11 referred for a decision, and 37 included. Those are historical results, not a heat-and-birthweight search or a new run.

That run's identifier-only rule needs the broader treatment above: an absent identifier should trigger a manual-verification route, not automatic exclusion. Twenty-five included records had retrieved abstracts; twelve had only titles and needed further reading. The limitation field was empty because the abstracts did not supply the information, not because the studies had no limitations. These distinctions are why the saved evidence matters as much as the final prose.

# 12. Bring data into the project {#data-acquisition}

The agent needs to work from the intended inputs, with a record of where they came from and how they may be used. That applies whether you receive files from a collaborator, start with data already on disk, or ask the agent to acquire a new extract.

Our example begins with a supplied synthetic birth-record file and its generator. Before fitting anything, the agent should establish that the file contains the promised variables and records, retain the original, and document its origin. Calling the file “births” does not make it observed data; that distinction must survive into the methods and results.

## Start with the required inputs {#identify-inputs}

Use the research specification to identify the observation unit, population, dates, variables, units, and documentation needed. Ask the agent to inspect the actual files and their dictionaries. It should surface conflicts with the specification before transforming them.

For received data, record who supplied the files, when, which release or extract they represent, and what restrictions accompany them. For a file already on disk, establish its identity from the available evidence and mark missing provenance as unknown. Do not invent a retrospective download history.

<!-- prompt:bring-data -->
::: {#request-bring-data .prompt}
> Inspect the approved inputs and their documentation. Record where each came from, the version or acquisition date, permitted use, expected units and identifiers, and a file fingerprint. Preserve the originals and create separate scripted checks for the required columns, record keys, ranges, and missingness rules in specification.md. Report discrepancies before transforming or excluding records; never replace missing research inputs with simulated observations.
:::
<!-- /prompt:bring-data -->

The synthetic example's raw CSV should have 1,200 unique ids, ages 18–40, hot-day counts between 0 and 20, a binary smoking indicator, and positive birthweight. Those are the declared properties of this teaching input. An agent should fail visibly if the supplied file contradicts them, rather than silently dropping records or replacing values.

## Choose a suitable acquisition route {#acquisition-ladder}

When the project needs web-based data, use the first suitable, permitted method in this order:

1. *API or structured source.* Look for a documented API, bulk download, CSV export, or structured response used by the page. It is usually easier to preserve and repeat a request for data than to interpret a rendered page.
2. *Fetch and parse a static page.* Save the HTML, then extract its data with a script when the required content is already in that response.
3. *Scripted browser.* Use a browser script for genuinely dynamic content or required interaction. Where permitted, capture the structured responses requested by the page rather than scraping its display.
4. *Agent-interactive browser.* Use the agent's browser for reconnaissance, a small one-off task, visual judgment, or a step requiring human participation. It may help discover a structured route for the first tier. It is not the default for thousands of repeated page visits.

The first three can leave repeatable acquisition code. Interactive browser actions alone do not. Preserve useful exploration by turning a recurring task into a permitted script with explicit inputs, saved responses, and failure handling.

Check the source's terms and request limits before collecting. An endpoint visible in a browser is not automatically an authorized route. Sources such as the [Census API](https://www.census.gov/data/developers/guidance/api-user-guide.html), [IPUMS](https://usa.ipums.org/usa/terms.shtml), and [CDC WONDER](https://wonder.cdc.gov/datause.html) have their own access and use conditions. A refusal is not an invitation to bypass the source's restrictions through another interface.

## Preserve originals and document provenance {#data-provenance}

Save a response exactly as received before parsing or cleaning it. Write derived files separately, so a parsing error can be corrected without repeating collection. Preserve a new release alongside the earlier one instead of overwriting the input behind a published result.

| Record | Synthetic example |
|---|---|
| Source | Invented records generated for this teaching project; no observed pregnancies. |
| Original | `data/raw/births.csv`, preserved unchanged after generation. |
| Reconstruction | Saved generator, seed, and [R](https://www.r-project.org/) version in the provenance record. |
| File identity | A checksum recorded when the original is created. |
| Documentation | Variable definitions and the analysis specification. |
| Derived files | Created by recorded scripts; never relabeled as original observations. |

For empirical data, add the actual source address, release/extract identifier, request, retrieval date, and conditions on use and redistribution. Write the provenance entry when the file is saved. A checksum identifies changed bytes; it does not establish whether the source or analysis is correct.

Allow specifically authorized acquisitions and provenance updates, then protect the originals during analysis. Read-only access prevents changes but still permits disclosure. Apply the [chain-of-custody decisions](#data-chain-of-custody) to received files, connected services, and any protected derivatives.

## Make collection repeatable without wasting requests

Have acquisition code respect request limits, identify itself as required, save raw responses, and record progress. Reuse cached responses and resume interrupted collections. A missing page or failed request should appear in a failure record, not disappear from the resulting dataset. For long collections, the toolkit's [queue chapter](https://dss-agentic-toolkit.pages.dev/chapters/job-queues.html) explains unattended execution and completion checks.

Keep credentials out of source code, logs, and conversations. Use the existing approved credential mechanism; the toolkit's [credential chapter](https://dss-agentic-toolkit.pages.dev/chapters/credentials.html) covers setup. If a key enters repository history, removing the current line is insufficient: revoke and replace it through the service's process.

## Check what actually arrived

Compare the saved files with the requested population, period, units, variables, and release. Inspect record counts, key uniqueness, and any unexplained missing inputs. For a web extract, compare selected values with the source's own display or documentation. Confirm the original was not recoded during acquisition.

Keep unmatched or ambiguous records visible for a decision. The next chapter shows how to implement approved transformations as modular steps; it should not begin from an undocumented cleaning decision hidden in a download script.

# 13. Build a modular analysis workflow {#research-workflows}

Research analyses change repeatedly. A monolithic script can be convenient for interactive exploration, but rerunning its imports, transformations, model fits, and figures for every small edit wastes work and makes errors harder to locate. A modular workflow lets an agent change and run the relevant operation while preserving the inputs and outputs needed to check it.

In the birthweight example, changing a figure label should redraw from saved contrasts. Changing an approved sample rule requires rebuilding the sample, refitting the model, recalculating contrasts, and updating the figure and manuscript. The difference should be visible in the saved workflow, rather than reconstructed by the agent each time.

![](figures/selective-workflows.svg){#fig-selective-workflows fig-alt="Several modular analysis scripts and one small command file support selective execution: redraw from saved contrasts, or rebuild all affected steps after a sample change."}

## Make each research operation independently runnable {#modular-steps}

Separate coherent operations with explicit inputs and saved outputs. Reuse common functions instead of copying them between scripts. Each step should start from recorded inputs, not from objects left in an interactive session or decisions remembered only in chat.

| Operation | Reads | Leaves behind |
|---|---|---|
| Prepare the analysis file | Original records, dictionary, approved sample and transformation rules | Derived data, sample ids, and checks. |
| Fit the specified model | Analysis file and specification | Saved fit, settings, and diagnostics. |
| Calculate reported quantities | Fit and defined exposure contrasts | Full-precision estimates and uncertainty. |
| Draw the figure | Saved contrasts and figure specification | Plotting data and rendered figure. |
| Check manuscript values | Selected results, manuscript source, and result-to-location map | Comparison report and discrepancies. |

Modularity is not a target number of files. Two related operations may reasonably share a script, and a function may serve several analyses. The useful property is that the operation you need can run on its own, with its dependencies supplied. These steps remain useful in an IDE as well as for an agent.

## Build or refactor without changing the analysis {#build-modular-workflow}

For a new project, have the agent implement the scientific specification in that structure. For an existing project, preserve a known set of outputs, then refactor before making substantive revisions. Compare samples and results before and after the structural change. Moving code should not quietly change a missing-value rule or model option.

<!-- prompt:modular-workflow -->
::: {#request-modular-workflow .prompt}
> Review the current analysis and propose coherent steps with explicit inputs and saved outputs. Preserve its scientific behavior while separating expensive fits from contrasts, figures, and reporting. Reuse shared functions, and keep adequate existing runners. Provide commands for individual steps and useful combinations, then compare the refactored outputs with the accepted baseline. Report any scientific difference instead of silently treating it as a refactor.
:::
<!-- /prompt:modular-workflow -->

The researcher supplies consequential choices. For this example that includes the 10-minus-5 hot-day contrast, its standardization distribution, age-specific comparisons, and the HC3 uncertainty calculation. “Report the effect” is too vague if the agent could substitute a regression coefficient for the requested contrast.

Require failure when a necessary input is absent or a stated check fails. An empirical workflow must never substitute simulated data just to finish. In this wholly synthetic teaching project, the generator is an explicit input-producing step with its own provenance.

## Save commands for the useful routes {#saved-commands}

A small `justfile` can expose consistent commands for the researcher and agent. It does not need to contain the analysis itself. The toolkit's [project-commands chapter](https://dss-agentic-toolkit.pages.dev/chapters/project-commands.html) explains [`just`](https://just.systems/) setup and use.

| Request | Repeat | Reuse |
|---|---|---|
| Change the figure's labels | Figure code and visual check | Fit and contrast table. |
| Revise an approved sample rule | Sample, fit, contrasts, figure, and affected manuscript checks | Unchanged original acquisition. |
| Change the estimator | Fit, postestimation, relevant simulation and independent checks, downstream outputs | Permitted unchanged inputs. |
| Correct document formatting | Document build and rendered-page check | Checked research results. |

An existing [Stata](https://www.stata.com/) master do-file or other project command can be adequate if it exposes the required steps. Preserve a working arrangement. A command runner provides named routes; a dependency-aware runner such as [`targets`](https://docs.ropensci.org/targets/) or [Snakemake](https://snakemake.readthedocs.io/) determines which affected steps need rebuilding. A `justfile` alone does not make a monolithic script selective or infer every dependency. See the toolkit's [dependency chapter](https://dss-agentic-toolkit.pages.dev/chapters/pipeline-dependencies.html) when that additional capability is useful.

## Inspect the outputs at the affected steps

Ask the agent to identify which files each command reads and changes. Check the resulting figure against its saved plotting table. After a data change, check the analysis sample and derived values before interpreting the estimates. When a result differs, the saved intermediate outputs help locate where the implementations diverged.

Keep exploratory work identifiable. Once a check supports the reported analysis, include it in the documented validation sequence and say when it must rerun. A caption change should not trigger a costly simulation; a change in the estimator may require one. The next two chapters explain simulation and independent implementation in detail.

## Keep long jobs moving {#unattended-jobs}

Save the command, inputs, outputs, and log before launching a long calculation. A queue such as [`pueue`](https://github.com/Nukesor/pueue) can start waiting jobs automatically as execution slots become free. That is useful for a set of simulation runs or model specifications that would otherwise wait for you to start them. The toolkit's [queue chapter](https://dss-agentic-toolkit.pages.dev/chapters/job-queues.html) covers submission, resources, failures, and completion checks.

Control parallelism according to each job's memory and CPU needs; a slot is not necessarily one core. A local queue does not make a sleeping computer calculate or preserve running processes through every reboot. For work beyond local resources, use your institution's approved research-computing service; at Harvard, consult [FAS Research Computing](https://docs.rc.fas.harvard.edu/).

Judge completion from the queue/process state, log, and expected outputs. A chat saying that a command was submitted is not evidence that the result exists. Reusing completed pipeline steps after an interruption is different from resuming an individual model fit, which needs support from the fitting program.

Some tasks require a model or agent for every item rather than execution of saved analysis code. [Chapter 16](#headless-agents) discusses headless agents, controlled inputs, and how to assess those outputs.

# 14. Test the analysis against known truth {#simulation}

<!-- aliases: calibration-example -->

Simulation gives an agent's analysis a test with an answer you can establish before fitting the model. It can expose broken processing and reporting, and it can show how the proposed estimator behaves under conditions that matter to your research. Those are separate questions: a workflow may run correctly while its estimates perform poorly.

In the heat-and-birthweight example, maternal age has a curved relationship with expected birthweight and modifies the heat association. We can create data with those features, then ask whether the saved workflow recovers the specified exposure contrast. A second world adds curvature to the age-dependent heat association that the fitted model does not include.

## Start with a small, known answer

Before running hundreds of simulated studies, check that one dataset passes through the saved workflow and produces the expected files. Use a small calculation whose answer follows directly from the specification. In this example, the modeled difference between ten and five hot days at age 28 is five times the heat coefficient. At age 36, it also includes the heat-by-age interaction. Comparing those calculations with the saved prediction contrasts checks the reported quantity separately from fitting the model.

Known-answer checks also belong before fitting. A join with a duplicated key should fail where the specification requires one row per person; a missing exposure file should cause a clear failure. It should never trigger the invention of observations to keep the analysis moving. Keep small failing inputs separate from the study data and retain them as regression tests.

![](figures/known-answer-check.svg){#fig-known-answer-check fig-alt="A checked synthetic world supplies data to the saved analysis workflow. The workflow's estimates are compared with separately calculated truth. Repeating the process assesses statistical behavior."}

The expected answer must come from the research rules or a separately checked calculation. A test that copies the agent's first result into its expected value will preserve that result, including its mistakes.

## Specify the simulated worlds {#calibration-example}

A *calibration harness* generates repeated datasets, applies the same analysis to each, and records how estimates and decisions behave. The agent can build and run it from a written plan. You choose the relevant worlds and the properties that would make the analysis adequate for its intended use.

The example holds the 1,200 synthetic individuals' ages, smoking indicators, and exposure values fixed while generating a new birthweight for every person in every repetition. Its performance statements therefore concern these covariate values. They do not describe every possible population or sampling design.

| World | Relationship built into the data | What the comparison examines |
|:--|:--|:--|
| No heat association | Curved maternal-age relationship and a smoking association; heat contributes nothing | Bias near zero, interval coverage, and false-positive rate |
| Age-dependent heat association | The heat slope changes linearly with centered age | Recovery of the average contrast and the contrasts at ages 22, 28, and 36 |
| Curved age-dependent heat association | The heat slope also changes quadratically with centered age | Performance when the fitted interaction omits a feature of the generating process |

All three worlds generate positive birthweights with right-skewed noise whose spread grows with the conditional mean. The fitted model includes the curved main association with age and the linear heat-by-age interaction. Its HC3 uncertainty calculation and normal-reference intervals stay the same across worlds. The stress test is useful precisely because the agent does not quietly change the estimator to match it.

The generator describes an invented teaching population. Its coefficients are not empirical estimates of heat effects, and its ranges alone do not establish biological plausibility. For your research, check that the simulated world can represent the measured quantity: outcome bounds, plausible dispersion, clustering, exposure support, and any constraints between variables. Inspect generated values and distributions before interpreting recovery results. Add missingness, measurement error, dependence, or other complications when they are relevant to the planned claim.

## Calculate truth separately

The example's estimand is the mean predicted difference between ten and five hot days, averaged over the observed age and smoking distribution (§10). For each simulated world, calculate its true value directly from the generating conditional mean, before adding random noise. Calculate the age-specific contrasts from that same mean at the stated ages.

Check this truth calculation independently of the fitted-model code. Reusing the fitting function to supply both the estimate and its supposed truth can reproduce the same mistake on both sides. Also distinguish the target from the random outcome difference in one simulated sample: that sample contains noise.

For a different research problem, the truth may require integration or a very large reference population. Record that approximation and its numerical uncertainty. A coefficient is the correct target only if a coefficient is what the study intends to report.

## Assess recovery and decisions

Recovery concerns whether estimates track the target across useful values. Examine bias, root mean squared error, and the distribution of estimates. Decision-rule calibration concerns interval coverage and, if the analysis uses a significance threshold, rejection under null and non-null worlds. Neither assessment substitutes for the other.

The example runs 400 repetitions per world. A coverage estimate near 95 percent then has a Monte Carlo standard error of about 1.1 percentage points. That is simulation uncertainty from a finite run, not the uncertainty interval for the research estimate. Report uncertainty for rates near zero or one too; observing no failures in 400 runs does not establish a failure probability of zero.

Keep failed fits in the record. Report how many were attempted, what failed, and which denominator was used for each performance measure. Quietly calculating coverage only among successful fits can make an unstable procedure look reliable.

<!-- prompt:simulation-plan -->
::: {#request-simulation-plan .prompt}
> Propose a simulation plan for specification.md. Define plausible generating worlds, separately calculated truth, estimator-recovery measures, interval or decision-rule checks, and Monte Carlo uncertainty. Check outcome support and dispersion before running; count failures as well as successes. After I approve the plan, run the saved analysis unchanged in each world and report where it fails. Keep simulated files separate from study inputs and do not change the method to make a check pass.
:::
<!-- /prompt:simulation-plan -->

## Read the results before changing the method

<!-- example:simulation-results -->
The saved run completed 400 repetitions in each world, with no failed fits. The table shows two of the four reported quantities; the download includes every quantity, replicate, and failure check.

| World | Quantity | Truth (g) | Bias (g) | Coverage | Monte Carlo 95% interval |
|---|---|---:|---:|---:|---|
| Null | Sample average | 0.0 | -0.2 | 94.5% | 91.8%–96.3% |
| Null | Age 28 | 0.0 | 0.1 | 94.0% | 91.2%–95.9% |
| Main | Sample average | -37.8 | 1.0 | 94.2% | 91.5%–96.1% |
| Main | Age 28 | -40.0 | 1.0 | 94.8% | 92.1%–96.5% |
| Curved | Sample average | -10.8 | 2.4 | 93.5% | 90.6%–95.5% |
| Curved | Age 28 | -40.0 | 28.3 | 75.8% | 71.3%–79.7% |

The curved world exposes a limitation: the fitted linear modifier misses the contrast at age 28, although the sample-average contrast performs much better. A satisfactory average can conceal an inadequate age-specific result. These are measured simulation outcomes under the stated invented worlds, not empirical health findings.

![](resources/example-plots/simulation-bias.png){fig-alt="Measured simulation bias for the sample and age-specific contrasts in three invented worlds. The curved-modifier world produces substantial positive bias at age 28."}
<!-- /example:simulation-results -->

When a result fails the planned check, locate the cause. An incorrect formula, an impossible simulated world, and a method that performs badly under a plausible world call for different responses. Ask the agent to show the relevant data, target calculation, and saved estimates. Preserve the failing run before making a correction.

A model can recover a particular estimand under the worlds tested while describing some individual outcomes poorly. Conversely, an implementation can follow the specification exactly and still have poor coverage or miss an age-dependent association. Record the scenarios, performance, and limitations in `METHODOLOGY.md`; any change to the estimator needs a research justification and a new evaluation.

Simulation cannot establish that the estimand answers the substantive question or that an observational design supports a causal claim. Those judgments remain part of the study design. The next chapter addresses a different uncertainty: whether independently built implementations carry out that design in the same way.

# 15. Check the agent with independent implementations {#checking-analysis}

Two independently built implementations can expose mistakes that a rerun of the same code will preserve. Each starts from the research specification and approved inputs, works through the analysis separately, and saves comparable outputs. Agreement provides evidence about implementation; discrepancies give you something concrete to investigate.

For the heat-and-birthweight project, one fresh agent builds the analysis in [R](https://www.r-project.org/) and another in Python. Both must calculate the same ten-minus-five-day contrasts, using the same records and uncertainty method. Neither sees the other's code or results before finishing. This can reveal a wrong contrast, an unintended software default, or a different analysis sample even when both programs run without an error.

An agent might also invent a missing column, substitute simulated values for observed ones, or change the model to get a result. The comparison should follow the stages that support the claim, rather than comparing only a final number. Small known-answer cases and simulation (§14) supply additional checks; a majority vote among agents is not a reference answer.

## Give each agent the same written target

Start with `METHODOLOGY.md` (§7). It should state:

- The research quantity to estimate (the *estimand*), including the population, comparison, and scale.
- The input files and their meanings, the unit represented by each row, the merge keys, and the rules for constructing variables.
- The sample restrictions and missing-data rules, including the order in which exclusions apply.
- The model specification: outcome, predictors, interactions, fixed effects, weights, and relevant estimation settings.
- The quantities to report after fitting: coefficients, uncertainty intervals, predictions, or contrasts, with any averaging population and uncertainty method specified.

A request for “the effect of heat on birthweight” leaves too much to infer. A request for the average predicted difference between two stated heat exposures, averaged over a specified set of births, gives the implementers a common target. An agent can help you make the specification explicit; you decide whether it describes the analysis you intend.

Keep a fixed copy of that specification for the comparison. If an implementer finds an ambiguity, resolve it and give the same clarification to every session. Letting each agent silently choose a different interpretation makes a later disagreement harder to diagnose.

## Have two or three agents implement it separately

![](figures/independent-implementations.svg){#fig-independent-implementations fig-alt="The same original data and written specification feed two separate implementations. Only their completed outputs enter the comparison."}


Open fresh [Claude Code](https://code.claude.com/docs/en/overview) sessions in separate project folders. Each gets the specification, the data dictionary, and the same approved input files. Keep the other implementations' code, processed datasets, and results out of those folders. The sessions can run one after another or in parallel; you do not need an agent orchestration tool since files are written in separate folders.

If the agent built the dataset as well as the model, each implementation should start from the original inputs and independently perform the cleaning, merges, and variable construction. Starting both from one agent's processed dataset leaves that processing unchecked. If you are checking only model fitting on an already verified dataset, the shared processed file is an appropriate starting point.

Use only inputs the agent is permitted to access (§3). For restricted data, have the agents develop their implementations against a permitted synthetic example and data dictionary, then run the scripts independently on the real data in the approved environment. Review the comparison there; return only information that is permitted to leave.

Different languages or statistical packages add a useful check on software defaults and implementation choices. If R, [Python](https://www.python.org/), and [Stata](https://www.stata.com/) are already available, use one for each implementation. Fresh sessions using the same language are still useful. Independence begins with each agent working out the implementation from the specification; translating the first agent's code carries its decisions into the second version.

In each separate folder, put the approved starting files in `inputs/`. The example uses identical copies of `data/raw/births.csv` and `specification.md`. Adapt the language and paths in this request:

<!-- prompt:independent-implementation -->
::: {#request-independent-implementation .prompt}
> Working only from specification.md, the data dictionary, and the approved original inputs, independently implement the analysis in the assigned language. Do not consult another implementation, processed dataset, or result. Stop for missing inputs or ambiguity; do not invent values or substitute simulated data. Save the code, input fingerprints, sample identifiers, derived values, model terms, and labeled full-precision results with their uncertainty calculations.
:::
<!-- /prompt:independent-implementation -->

Two implementations provide the first comparison. A third gives you another independent attempt, especially when the first two disagree. Let each finish before showing it anyone else's code or results. If there is already a primary implementation, a fresh attempt can check it; keep that fresh session separate from the original conversation.

## Compare the data and the reported quantities

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

<!-- prompt:compare-implementations -->
::: {#request-compare-implementations .prompt}
> Compare the completed implementations against specification.md and its tolerances. Check input versions, sample membership, exclusions, derived variables, model terms, and reported quantities, using full-precision values. Produce an agreement-and-discrepancy table and identify the earliest stage at which each discrepancy appears. Do not change either implementation or its outputs to force agreement.
:::
<!-- /prompt:compare-implementations -->

Read that report yourself. If samples differ, resolve that before interpreting coefficient differences. If coefficients agree but standard errors do not, inspect the uncertainty calculation. If fitted models agree but predicted contrasts do not, inspect the exposure values, averaging population, and scale used for the contrasts. Ask the agent to show the relevant records, settings, or calculations so you can judge the discrepancy without reading every script.

Correct against the written specification and the source data. Matching the first result is not itself a reason to change the second implementation. Document the explanation, make the justified correction, and rerun the affected comparisons. If the specification changes, every implementation must follow the revised version.

Agreement across independently built pipelines is strong evidence that they implemented the requested analysis consistently. Its strength comes from giving implementation mistakes a chance to produce observable differences. It is not a guarantee: agents can share a mistaken interpretation or use the same faulty software routine. Where available, compare against a trusted benchmark with the same definitions, or a small example whose answer is known. Trace a few deliberately chosen records through the transformations, including difficult cases such as duplicates, missing values, and boundary dates. These focused checks supplement the independent runs without requiring a manual audit of all the code.

## The example: two fresh implementations

<!-- example:independent-results -->
Two fresh agents received only the same original synthetic CSV and written specification. One built the R analysis; the other built the Python analysis. Neither received the other's implementation or results while building. The completed comparison retained all 1,200 ids and matched every design-matrix value exactly.

| Quantity | R estimate (g) | Python estimate (g) | 95% interval (g), rounded |
|---|---:|---:|---|
| sample | -31.639627 | -31.639627 | -74.3 to 11.0 |
| age_22 | -34.325612 | -34.325612 | -93.8 to 25.1 |
| age_28 | -31.978065 | -31.978065 | -74.9 to 10.9 |
| age_36 | -28.848003 | -28.848003 | -90.7 to 33.0 |

Across the contrasts, standard errors, and interval endpoints, the largest absolute difference was 3e-12, below the prespecified tolerance of 0.000001. The package also compares coefficients, covariance, and fitted values at full precision.

The checks still found details to correct or document. Python's postestimation package supplied t-based intervals by default; its implementation calculated the required normal intervals explicitly. Review of the R input checks found an age-range check that was too broad and an unrequested integer restriction on exposure. Correcting those checks left the numerical results unchanged. Agreement on this dataset would not have detected those boundary mistakes by itself.
<!-- /example:independent-results -->

## Keep checks that run every time

Have the agent retain *assertions*: checks embedded in a script that stop the analysis when an expectation fails. Useful ones cover required columns, unique identifiers, permitted values, merge relationships, exclusions, and the sample actually used by the model. A required column that is absent should cause a failure; the agent should not manufacture it to keep the script running.

Keep simulation code and synthetic outputs separate from the real-data analysis. Require the real-data pipeline to record the files it used and to stop if a required input is missing. After fitting, check convergence where applicable and confirm that the reported sample and model match what actually ran.

The expectations need a basis in the specification, the source documentation, or a result you have independently checked. An assertion that merely repeats the number the agent just produced will not detect the error that produced it. For a calculation reused across analyses, ask for a small test with a known answer.

Concentrate independent implementation on the pipelines supporting substantive claims. Keep inexpensive checks throughout those pipelines and rerun the affected comparisons when inputs, code, or the specification change.

# 16. When the LLM does the analysis {#llm-measurements}

LLMs can make it feasible to code or assess more research material than you could review manually. Once their answers become variables in an analysis, however, errors in those answers affect the evidence. You need to control how the measurements are produced and establish whether they are adequate for the question.

In my project comparing AI and human peer reviews, separate headless runs generated AI reviews and judged reviews. The purpose was to give each run its assigned material and protocol without carrying a previous review's conversation into the next. This is a research-design reason for a controlled agent environment, beyond the convenience of unattended execution.

## Keep three questions separate

When an LLM codes responses, classifies documents, or extracts a variable from text, ask:

1. Can a reader recover the published results from the saved measurements?
2. Can someone rerun the inference procedure that produced them?
3. Are the measurements adequate for the research task?

Saving the responses helps answer the first. Recording the model and procedure helps with the second. Evaluation addresses the third. Success on one does not imply success on the others.

## Use headless agents for controlled research runs {#headless-agents}

A *headless agent* runs from a saved request without an interactive app conversation. A script supplies its inputs, starts the run, and collects its result. This is useful when the same protocol must be applied to many cases: generate a review, judge a review pair, or extract specified evidence from a document. It also lets you record the exact procedure and rerun selected cases.

Headless describes how the agent is operated. Context control describes what it can receive. A headless run can still load instructions, reuse a session, read files, or call services. A queue can schedule those runs, but it does not define their information boundaries. [Claude Code](https://code.claude.com/docs/en/overview)'s [programmatic interface](https://code.claude.com/docs/en/headless) supports non-interactive requests and structured output; the configuration and tests belong in [the toolkit’s headless-agent chapter](https://dss-agentic-toolkit.pages.dev/chapters/headless-agents.html).

For the peer-review study, the research requirement is that the next reviewer does not inherit the previous reviewer's conversation, and a judge receives only the material allowed by the judging protocol. Write that requirement before choosing a launcher. Treat review generation, judging, and subsequent statistical analysis as separate stages with separately saved outputs.

### Control what each reviewer or judge receives

Review generation and judging are distinct stages. A reviewer receives the review instructions and the assigned manuscript. A judge receives the judging rubric and the material that its task requires. A pairwise judgment can deliberately include two reviews of one manuscript; excluding other runs' context does not mean every call receives only one document.

![](figures/controlled-review-runs.svg){#fig-controlled-review-runs fig-alt="Separate reviewer runs receive a protocol and an assigned manuscript. Separate judging runs receive a rubric and the assigned review set. Other cases and prior conversations are excluded by the intended protocol, which must be tested."}

The project's recorded wrappers used a new subprocess and a temporary working directory for each call, explicit prompts, and controls intended to avoid persistent sessions and restrict tools. Generation and judging supplied their own assigned inputs. Those are recorded implementation choices, not a claim that a new directory alone excludes every source of context. Current agent tools can also load personal instructions, memory, plugins, and service connections; a read-only process may still read unwanted information.

For a teaching implementation, write down what each run may receive and test the actual configuration. Include loaded instructions, memory or resumed sessions, accessible files, tool permissions, and any connected service. [the toolkit’s headless-agent chapter](https://dss-agentic-toolkit.pages.dev/chapters/headless-agents.html) supplies the setup and harmless marker tests. Save the evidence for the routes tested and identify anything untested. Do not call a run isolated merely because it is headless or starts a fresh conversation.

| Stage | Deliberately supplied | Kept outside that run |
|:--|:--|:--|
| Generate a review | Review protocol; assigned manuscript; approved tools | Other reviews, earlier conversations, judging outcomes |
| Judge a review set | Rubric; assigned reviews; manuscript if the protocol requires it | Other cases and prior judgments; authorship labels if blinded |
| Analyze judgments | Saved responses, parsing rules, case identifiers | New model inference unless explicitly requested |

A direct scripted model call may be simpler when the task needs no tools or agent loop. Either route still needs input control, failure handling, and measurement evaluation. Context separation does not establish statistical independence, remove shared model biases, or make a judgment valid.

<!-- prompt:controlled-llm-runs -->
::: {#request-controlled-llm-runs .prompt}
> For this review-generation and judging protocol, list the exact inputs, prompts, instructions, tools, and connected services allowed in each stage. Design fresh runs that do not inherit other cases’ conversations or outputs. Propose harmless marker tests for unintended file, memory, instruction, and tool access, including an allowed-input positive control. Save raw responses, failures, retries, configuration, and model information. Report untested routes; headless execution alone is not evidence of isolation.
:::
<!-- /prompt:controlled-llm-runs -->

## Preserve the run

Save the exact inputs presented to the LLM, prompts and examples, raw responses, parsing and postprocessing code, dates, model information, and available generation settings. Keep failures, retries, and human corrections traceable to the original case. Apply the same access rules to these records as to the source data.

Use an exact model identifier when the interface exposes one, and record limitations when it does not. A model name in an app menu may be less specific than a version identifier. Do not claim to have pinned information you could not observe. Pinning reduces one source of change; it does not guarantee the same answer on a rerun. Anthropic notes that [outputs can vary even at temperature zero](https://platform.claude.com/docs/en/about-claude/glossary#temperature).

Keeping an exact copy of open weights can preserve access after a service changes. Repeatability still depends on preprocessing, runtime, numerical precision, and generation settings. Reevaluate a replacement rather than assuming a newer or larger model produces interchangeable measurements.

## Evaluate a labeling task {#evaluate-llm-labeling}

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

<!-- prompt:evaluate-labeling -->
::: {#request-evaluate-labeling .prompt}
> Apply the frozen rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. After labeling finishes, compare with the independently adjudicated reference. Report the confusion table, category-specific errors, uncertainty, referral workload, and prespecified acceptance criteria. Do not tune on this sample or drop difficult cases; list disagreements for human review.
:::
<!-- /prompt:evaluate-labeling -->

If you revise the prompt after seeing those errors, the sample has become development material. Use a new held-out sample for a fresh performance claim, or disclose the reuse and its limitations. Report the evaluation, human review, and saved-output reproduction route in the paper's methods (§18).

## Check sensitivity to the measurement procedure

A result can depend on model choice, prompt wording, examples, or presentation order. Decide which alternatives are substantively plausible and compare them on development material before the final evaluation. For review judging, swapping the order of two reviews can expose an order-dependent preference. [Zheng et al.](https://arxiv.org/abs/2306.05685) documented position and verbosity biases when LLMs judged chatbot responses. Their study motivates checking those effects in a research judging task; it does not establish their size for your protocol. For text coding, changing a boundary definition can reveal that the construct is underspecified.

Keep each alternative's outputs and failures. Report meaningful changes in the substantive conclusion rather than selecting the prompt that yields a preferred answer. Repeated identical inputs can also reveal variation, but consistent outputs are not necessarily valid outputs.

For reproduction, first rerun the analysis of the saved responses. Label a new inference run separately: it tests what the model produces again, potentially under changed service conditions. The manuscript should state which route was tested (§§18–19).

The same measurement checks apply whether inference uses a hosted service or a model you run yourself. Chapter 17 develops the reasons to choose a local model or adapt one; neither choice replaces the evaluation here.

# 17. Run and adapt models for your research {#research-models}

Running a model yourself can give you control over where research material is processed and preserve access to the particular weights used in a study. Adapting a model can also improve how it performs a recurring research task. These benefits require separate decisions about data permissions, hardware, and evidence of useful performance.

Suppose your team is coding interview excerpts for unmet service needs, using the rubric evaluated in §16. The approved environment may exclude an external model service, making local inference useful. Separately, the team may have enough reviewed examples to investigate whether training improves the model's coding. Moving the model onto approved hardware addresses where processing happens; an evaluation addresses whether the coding is adequate.

You can run an unchanged open-weight model locally. Fine-tuning is optional, and it still requires the research checks in §16. This chapter explains those choices; the [toolkit](https://dss-agentic-toolkit.pages.dev/chapters/local-models.html) covers local runtime setup.

## Choose where the model runs {#local-models}

If a hosted LLM reads a transcript or manuscript to analyze it, that material enters the provider's inference system. A commitment not to train on it does not settle retention, subcontracting, deletion, or the other obligations discussed in §3. Synthetic data can help an agent develop analysis code without reading protected records. It cannot replace the actual text when the research task is to classify that text.

An *open-weight model* makes its trained parameters available to download and run under specified terms. *Open-source AI* involves more: the [Open Source Initiative's definition](https://opensource.org/ai/open-source-ai-definition) requires rights to use, study, modify, and share the system, along with its parameters, training and inference code, and sufficient information about the training data. It does not require publishing every raw training record. Downloadable weights alone do not establish that a system meets this definition.

Running a model locally can mean running it on your everyday computer. Install a runtime such as [Ollama](https://docs.ollama.com/macos), download suitable weights, and use the model through a chat interface or a connected script or agent. This runs an already-trained model; you do not train it from scratch. You need disk space for the weights and enough working memory and processing capacity for the workload. A larger model may need a powerful workstation or an institutional GPU server.

The word *server* can also describe software on that same computer that accepts requests from your other programs. For example, [Ollama's local service](https://docs.ollama.com/faq#how-can-i-expose-ollama-on-my-network) is accessible only from that computer by default. You do not need a separate machine or a public internet service. Using downloaded weights and a local runtime keeps model inference there, but an agent's tools may still contact outside services. Using those same weights through somebody else's hosted API sends the inputs to that provider. “Local” in an agent app can also describe where tools run while the model remains hosted.

| Route | Research use | What must be established |
|:--|:--|:--|
| Approved hosted model | Strong task performance without maintaining model hardware | Applicable agreement, data permissions, retention, and the actual endpoint |
| Model on your computer | Smaller approved workloads; control over saved weights and local inference | Sufficient memory, tested task quality, and the agent's remaining network/tool access |
| Model on controlled institutional infrastructure | Larger models or protected workloads requiring managed resources | Approved compute and storage, access controls, logging, and a reproducible model/runtime record |

Return to the chain of custody in §3 for every route. Prompts, model responses, temporary files, caches, and backups can contain protected material even when inference is local. Local execution gives you more control over those copies; it does not itself authorize their use or deletion schedule. Tool permissions (§4) must match the research protocol too.

### Model families you may encounter

The table gives examples from widely used model families, with release-specific terms checked as of November 2026. These are examples to recognize, not a performance ranking or a list of the newest releases. Follow the model links for capabilities and hardware requirements.

<!-- VERIFY 2026-11-03: release cards and licenses linked below; OSI definition 1.0; Ollama macOS requirements and FAQ. Family names do not imply a common license across releases. -->

| Family | Developer | Example release | License for that release |
|:--|:--|:--|:--|
| Qwen | Alibaba | [Qwen3-4B](https://huggingface.co/Qwen/Qwen3-4B) | Apache 2.0 |
| Gemma | Google DeepMind | [Gemma 4 E4B](https://huggingface.co/google/gemma-4-E4B-it) | Apache 2.0 |
| Mistral | Mistral AI | [Ministral 3 8B Instruct](https://huggingface.co/mistralai/Ministral-3-8B-Instruct-2512) | Apache 2.0 |
| Llama | Meta | [Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) | Custom Llama 3.3 license |
| DeepSeek | DeepSeek | [DeepSeek-V3.2](https://huggingface.co/deepseek-ai/DeepSeek-V3.2) | MIT |
| Kimi | Moonshot AI | [Kimi K2](https://github.com/MoonshotAI/Kimi-K2) | Modified MIT |
| GLM | Z.ai | [GLM-4.7](https://huggingface.co/zai-org/GLM-4.7) | MIT |
| MiniMax | MiniMax | [MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) | Custom noncommercial terms; commercial use requires authorization |

Licenses can change between releases. MIT and Apache 2.0 are permissive licenses; custom terms need closer attention. For example, [Kimi K2 adds a branding condition for certain large commercial deployments](https://github.com/MoonshotAI/Kimi-K2/blob/main/LICENSE), while [MiniMax-M2.7 restricts commercial use](https://huggingface.co/MiniMaxAI/MiniMax-M2.7/blob/main/LICENSE). The license column alone does not establish whether the training materials meet the open-source definition above.

Model families also include releases with very different capabilities and hardware requirements. The smaller Qwen, Gemma, and Ministral examples offer starting points for evaluating a model on your own computer; a full Kimi K2 deployment needs substantially more resources. [DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) includes the full model and smaller distilled releases. Distillation trains a smaller model using outputs from a larger one; evaluate the particular release rather than assuming it retains the larger model's capabilities.

Record the exact weights and license, precision or quantization, runtime, context limit, and prompting format. Reducing numerical precision can make weights fit available memory, but it changes the configuration being evaluated. Long documents and several simultaneous jobs also consume memory beyond the stored weights. Ask research computing to assess the intended model and workload when a laptop is insufficient.

A model that answers text questions well may still be unreliable at calling tools or following the output format needed by an agent. Test those capabilities separately. If review coding needs only a fixed document and rubric, direct model inference may be sufficient. If the task needs to find files, run code, and inspect intermediate results, use a compatible agent harness and check its tool behavior.

[Ollama](https://docs.ollama.com/integrations/claude-code) provides one route between compatible local models and [Claude Code](https://code.claude.com/docs/en/overview)'s terminal interface. It also supports cloud models, so the software's name alone does not establish where inference happens. [The toolkit's local-model section](https://dss-agentic-toolkit.pages.dev/chapters/local-models.html) covers setup and a harmless trial. Choose the model based on measured research performance and available infrastructure, then verify the actual inference route before supplying protected inputs.

### Apple’s built-in on-device model

Local inference does not require open weights. Apple’s [Foundation Models framework](https://developer.apple.com/foundation-models-framework/) provides access to an on-device model on supported devices. Apple also supplies a [Python SDK and, in macOS 27, the `fm` command](https://developer.apple.com/videos/play/wwdc2026/334/), so a research pipeline can use the model without a custom Swift application. These interfaces can also support cloud routes; select and verify the on-device route explicitly. The [toolkit describes the available entry points](https://dss-agentic-toolkit.pages.dev/chapters/local-models.html#apple-on-device).

Candidate research tasks include extracting dates and organizations, tagging documents, or classifying short survey responses against a fixed rubric. Apple’s [capability guidance](https://developer.apple.com/documentation/FoundationModels/generating-content-and-performing-tasks-with-foundation-models) identifies these language-understanding tasks and cautions against relying on the on-device model for code generation or logical reasoning. Evaluate the particular task on held-out examples, save the original responses, and record the device, operating-system version, and available model information. Local availability is a deployment benefit; the measurement still needs evidence of adequate quality.

## Decide whether context is enough {#context-or-training}

Start by giving the existing model a clear task, a rubric, and representative examples. *In-context learning* uses those examples within the request without updating the model's weights. When a task needs facts from papers or project documents, retrieval can select relevant passages to include in that context.

Fine-tuning instead updates learned parameters using a training dataset. For the interview-coding example, a supervised dataset could pair each excerpt with its reviewed code. Training can use many such pairs across separate batches; they do not all need to fit into one prompt. The adapted model still receives the new excerpt and any instructions needed to apply it.

| Research need | Starting approach |
|:--|:--|
| Consult current documents or explain an answer from sources | Supply relevant passages directly or through retrieval |
| Apply a rubric to a limited or changing task | Prompt the existing model with instructions and selected examples |
| Repeat a stable task where a strong prompt still makes consequential errors | Consider fine-tuning if suitable training examples and an independent evaluation are available |

For a repeated task, adaptation may improve coding accuracy, adherence to an output format, or performance with shorter prompts. It also introduces training and maintenance work. A small dataset with inconsistent codes may teach the model the same inconsistencies; a changed rubric may require another training and evaluation cycle.

The evidence supports testing these possibilities for a particular task. [Liu et al.](https://arxiv.org/abs/2205.05638) found better accuracy and lower prediction-time computation for their parameter-efficient T-Few procedure than the in-context baselines they evaluated. T-Few used a particular pretrained model and an adaptation method called IA³. That result does not establish that LoRA, or any adapted model, will outperform a well-prompted current model on your study.

For factual questions, [Ovadia et al.](https://arxiv.org/abs/2312.05934) found retrieval more effective than unsupervised fine-tuning on the knowledge-intensive tasks they tested. Unsupervised fine-tuning here means further training on text, without labeled task answers. It differs from training on reviewed excerpt/code pairs. The finding supports trying retrieval when the immediate need is access to documents; it is not a comparison of every form of task adaptation.

Fine-tuning and context can be combined. An adapted model may still need the current rubric or retrieved evidence. Keep a strong context-based baseline so you can establish what training adds.

## What LoRA changes {#lora}

*LoRA* stands for *Low-Rank Adaptation*. It is a fine-tuning method implemented by training software. It keeps the original weights fixed and learns a compact mathematical representation of adjustments to selected parts of the model. Those learned adjustments are saved as an *adapter*, which is used with the base model or merged into a new copy. The [LoRA paper](https://arxiv.org/abs/2106.09685) describes the method and its reductions in trainable parameters and training memory.

For example, Qwen is the model family; MLX LM or Hugging Face PEFT supplies software; LoRA is the training method; and your saved adapter contains what was learned from your examples. *Full fine-tuning* updates the original weights themselves and generally needs more training memory.

*QLoRA* combines low-rank adaptation with a quantized base model, reducing the memory needed for training further. The [QLoRA paper](https://arxiv.org/abs/2305.14314) establishes this approach. Its hardware demonstrations are not a guarantee that a particular model and document length will fit your computer.

Apple Silicon users can use [MLX LM's documented LoRA and QLoRA support](https://github.com/ml-explore/mlx-lm/blob/main/mlx_lm/LORA.md); [Hugging Face PEFT](https://huggingface.co/docs/peft/main/en/conceptual_guides/lora) implements LoRA for compatible models. A runtime used to chat with a model and software used to train it have different jobs. The linked documentation identifies supported models and training options.

## Evaluate and preserve an adapted model {#evaluate-adapted-model}

Apply the [evaluation procedure in chapter 16](#evaluate-llm-labeling) to both the unmodified baseline and the adapted model. Separate training examples, development material used to choose settings, and the final evaluation cases. Keep related passages from the same person or document in the same split. Freeze the task and comparison before opening the final results.

Compare the errors that matter to the study, including rare categories and relevant subgroups. Include failed outputs and human referrals. Record training effort and prediction cost if efficiency is part of the reason for adapting the model. Improved agreement with your reference labels does not by itself establish that those labels capture the intended construct.

Preserve the base-model identifier and fingerprint, adapter or updated weights, training-data version, split assignments, training configuration, software environment, and evaluation results. An adapter alone is incomplete without the base model it modifies. Distinguish reproducing the published analysis from saved responses, generating new responses with the saved adapted model, and retraining it (§16; §19).

Local training can keep the training inputs within approved infrastructure, but the trained artifacts also need a place in the chain of custody (§3). [Research on memorization during fine-tuning](https://aclanthology.org/2024.acl-long.216/) shows that models can retain training information. Include adapters, checkpoints, logs, and any external experiment-tracking service when deciding where protected material can go and what may be shared.

# 18. Write and revise from the research record {#research-writing}

Research revisions are incomplete if the analysis changes but the manuscript still describes the earlier result. Give the agent a maintained source for each substantive claim and number, then check the rendered manuscript against that record.

For example, correcting a sample rule may change an estimate in a results file while leaving the old number in an abstract, table note, or slide. Ask for those uses to be traced and updated together, with unresolved claims flagged. You remain responsible for the interpretation and final wording.

## Do the right numbers make it to the manuscript? {#trace-manuscript}

The analysis can be correct while the manuscript reports an old value, the wrong contrast, or an interval copied from a different run. Ask the agent to preserve a trace from each number to its saved result, including abstract text, captions, supplements, and slides.

![](figures/manuscript-trace.svg){#fig-manuscript-trace fig-alt="A saved result and its file fingerprint connect to a named table entry, the manuscript text, and the final rendered document. A changed source triggers review of every use."}

<!-- example:manuscript-results -->
For the synthetic example, `outputs/analysis/contrasts.csv`, row `sample`, supplies this sentence:

> In the synthetic sample, the estimated mean birthweight difference between ten and five hot days was -31.6 g (95% confidence interval -74.3 to 11.0 g), standardized over the observed age and smoking distribution.

The saved source has a SHA-256 fingerprint beginning `48ce37057432`. The example's comparison record retains the full-precision values. The sentence identifies the contrast and averaging sample and labels the result as synthetic; it does not turn this teaching calculation into an empirical claim.
<!-- /example:manuscript-results -->

A *checksum* is a digital fingerprint calculated from a file's contents. Save it with the source path, run identifier, and exact row and column used. If the contents change, the fingerprint usually changes too. It helps establish which file supplied the number; it does not establish that the file, selected entry, or interpretation is correct. Two exports with different formatting can have different checksums but the same estimates.

Have the agent compare both the source manuscript and the final PDF or Word document with the saved outputs. Check signs, units, interval endpoints, sample sizes, rounding, and labels. For a figure, confirm the plotted quantity, axis scale, legend, and caption. An automatic insertion can faithfully transfer the wrong entry, so retain a check on meaning as well as bytes.

<!-- prompt:trace-manuscript -->
::: {#request-trace-manuscript .prompt}
> Trace each main manuscript result, including the abstract and captions, to its saved source file and exact entry. Record source fingerprints and check values, signs, units, samples, intervals, and rounding in the final rendered document. Identify every affected use when a source result changes. Propose updates only from verified outputs and list unsupported claims for my decision.
:::
<!-- /prompt:trace-manuscript -->

## What to ask for

*Drafts from the files.* Ask for methods text based on `METHODOLOGY.md` and the analysis scripts, describing the estimand, fitted model, and recorded decisions. Put the model equation before the prose that explains it. For the results section, have the agent take numbers from `outputs/tables/` and mark any claim for which the files provide no support. Supply your own list of limitations alongside the results when requesting a discussion draft.

Make the source restriction explicit in each request:

<!-- prompt:draft-from-results -->
::: {#request-draft-from-results .prompt}
> Draft this section using only the supplied research decisions, verified sources, saved result tables, and figure captions. Where a claim, number, or reference has no support in those files, leave a bracketed gap and list it at the end. Follow my writing conventions. Do not invent evidence or change the scientific interpretation to complete the prose.
:::
<!-- /prompt:draft-from-results -->

*Your writing conventions.* Give the agent the style guidance you maintain (§8, Appendix A). Ask it to state the point directly, name what each claim refers to, and explain the connections between ideas. A short sentence still needs enough context to be understood. Remove repeated explanations and decorative closing lines. Include conventions specific to the manuscript, such as tense, terminology, and the placement of limitations. When you make a recurring correction, record it in the relevant instruction file.

*Keep the manuscript consistent with the analysis.* Copying results by hand can introduce errors, and later analysis changes can leave old numbers or claims in the text. Ask the agent to transfer values from saved outputs and retain their provenance: the source file and version or run, exact table entry, units, and any rounding or transformation. Link methods statements to the code that ran and the recorded decisions; link research claims to results or literature sources. Keep these links with the manuscript so a changed result can be traced to every affected passage, table, and caption. Flag missing support for review.

Suppose you approve a change to the inclusion criteria. Have the agent identify the affected scripts, rerun the analysis and checks, regenerate tables and figures, then propose manuscript changes using those source links. Ask it to report the locations updated, check the transferred values, and flag interpretations that need your decision. Review the proposed edits and evidence before accepting them; automated transfer can also introduce errors.

I would usually avoid asking an agent for a complete manuscript draft. Its prose can be generic and require substantial revision. If your name is on the paper, retain ownership of its argument, interpretation, wording, and final claims. The agent can help keep methods and results consistent with the research while you develop the paper's argument and voice.

*If you write in Word.* Keep the manuscript in Word. Give the agent an approved section and the supporting results, and ask for proposed wording with a record of what changed and why. You can paste accepted passages into the document yourself, preserving tracked changes and the coauthor workflow. For direct document editing, work on a copy and inspect the returned file in Word, including comments, citations, equations, and layout.

For a formatted Office deliverable, [Cowork](https://claude.com/docs/cowork/overview) provides a prepared environment for creating editable Word documents, PowerPoint decks, and Excel workbooks. Code can also create these formats directly using [document skills](https://github.com/anthropics/skills) and the tools they require. Cowork may save setup when those tools are absent from your Mac; the toolkit's document-production section covers additional tooling for Code. With either route, supply approved inputs (§3) and inspect the returned file in the application your collaborators will use.

If you already write in markdown or [Quarto](https://quarto.org/), you can keep that as the source and export a Word copy for collaborators. The toolkit's document-production section covers that setup. Save each returned Word file before reconciling edits. Conversion can lose information or change formatting; it is not a substitute for inspecting the document.

*Reviewer responses.* Give the agent your decisions about each comment and the revised manuscript. Ask it to quote each comment, lead the response with the substantive answer, and cite the line numbers of the changes. Record decisions that change the analysis in `METHODOLOGY.md` (§7), so their reasons remain available at the next revision.

<!-- prompt:reviewer-response -->
::: {#request-reviewer-response .prompt}
> Draft the reviewer response from the supplied comments and my decision notes. Quote each comment, lead with the substantive answer, and cite the actual locations of manuscript changes. Do not add concessions I did not make or claim an analysis was run without its saved output. Flag unresolved comments and record any approved methodological change in the project record.
:::
<!-- /prompt:reviewer-response -->

*Talks.* Ask for an outline before requesting slides. Give each slide one main claim and identify the supporting figure from `outputs/figures/`. Review the outline for repetition and detail the audience does not need; an initial draft may need substantial cutting. Choose the output format for the venue: PowerPoint, a Quarto web deck, or Beamer, the [LaTeX](https://www.latex-project.org/) slide format. Use the same saved results and figures as the paper so the slides report the same analysis. The toolkit's document-production section covers those formats.

## What you check

Ask for a table tracing each reported number to its source file, row, and column. Check those locations against the manuscript, and investigate any number the agent cannot trace.

Open every cited source and confirm that it supports the associated claim (§11). Do this for references added during drafting as well as those already in the project.

Compare the methods section with the scripts, including software defaults (§13). The agent can help by reading each paragraph beside the relevant code and listing discrepancies. Resolve any difference between the intended analysis and what actually ran before finalizing the description.

Read a paragraph aloud to check whether it uses your language and explains the point as you would. Revise phrasing that sounds unlike you or leaves the reader to infer a connection.

Check the AI-use disclosure and its placement against the journal's instructions, as described below.

### Disclosure

Check the target journal's current instructions at submission. Policies differ in the uses they permit, the details required, and where the statement belongs. As of September 2026, [ICMJE's author guidance](https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html) calls for disclosure of AI assistance, human responsibility for the submitted work, and no AI authorship. Use the journal's own instructions to determine the applicable wording.

Keep a record of the tool and model information available, dates, tasks performed, affected parts of the work, and how the authors checked them. Distinguish language assistance, code generation, and an LLM used to produce measurements (§16). The last requires enough methodological detail to assess the measurement procedure, not just an acknowledgment.

An adaptable disclosure template is:

> We used [tool and observed model/version; dates] to [specified tasks]. The authors reviewed [affected text or outputs] and checked the analysis using [checks actually completed]. For LLM-derived measurements, the Methods describe the inputs, prompts, evaluation, and human review. The authors take responsibility for the reported work.

Fill the brackets from the project's records. Do not claim an independent implementation, a successful rerun, or an exact model version that you cannot document. Preserve this disclosure and relevant provenance in the public research package (§19), even when private working notes are removed.

Treat peer-review material separately. This guide's conservative working rule is to keep confidential manuscripts and applications you are reviewing out of agent sessions. Follow the journal's or funder's current reviewer policy; permission to use an agent on your own work does not authorize its use on someone else's confidential submission.

## Preserve the coauthor record

Keep every returned manuscript before reconciling edits. A regenerated document can overwrite a coauthor's changes, comments, or accepted wording. Compare versions, propose the reconciliation, and inspect the accepted copy in the application your collaborators use. Record any scientific decision that changes the analysis in `METHODOLOGY.md` and rerun the affected checks.

A gap in the evidence should remain visible. If the agent cannot locate a reported value, verify a reference, or reconcile the written method with the executed code, resolve that gap before polishing the sentence around it.

# 19. Reproduce and hand off the research {#research-handoff}

A collaborator should be able to repeat the analysis from its files and instructions without asking an agent to reconstruct what happened. Preparing and testing that handoff exposes dependencies that your familiar working folder can hide. It also gives your future self a usable record when a reviewer asks for a revision.

For example, the heat-contrast figure may build because yesterday's fitted model is still cached on your laptop. In a separate copy, it fails because neither the model nor the command that creates it is supplied. A clean-copy test turns that hidden dependency into something you can preserve or rebuild.

## Preserve a route from inputs to results

![](figures/research-handoff.svg){#fig-research-handoff fig-alt="A research package contains approved inputs or access instructions, code and commands, a software record, and reference results. These travel together to a separate copy for reproduction."}

The recipient needs the inputs or their permitted acquisition route, the software record, the commands, and the results to compare. An existing project may have gaps: an unexplained exclusion, a missing source file, or an undocumented manual step. Ask the agent to inventory what exists and mark those gaps. Do not invent past decisions or backdate a record.

| Preserve | Include |
|:--|:--|
| Inputs | Versions or fingerprints, a data dictionary, expected paths, and access instructions |
| Code and commands | The actual scripts and their execution order, including checks |
| Software | Language and package versions, system dependencies, and restoration instructions |
| Reference results | The selected tables, figures, and supporting numerical outputs |
| Evidence | What was rerun, where, discrepancies, and any untested route |

The modular workflow (§13) supplies the execution steps. Keep an adequate existing master do-file or runner. For a larger dependency graph, tools such as [`targets`](https://docs.ropensci.org/targets/) or [Snakemake](https://snakemake.readthedocs.io/) track affected outputs and avoid unnecessary rebuilding; the [toolkit's workflow chapter](https://dss-agentic-toolkit.pages.dev/chapters/pipeline-dependencies.html) covers their operation. The handoff should expose useful commands without requiring the recipient to ask an agent which script comes next.

Record the environment before changing a working setup. `renv.lock` and `uv.lock` preserve package versions for [R](https://www.r-project.org/) and [Python](https://www.python.org/) restoration. Record relevant system libraries too. In [Stata](https://www.stata.com/), record the application version and the sources and versions of community commands; a do-file's version statement does not preserve those packages. The toolkit explains [software environments](https://dss-agentic-toolkit.pages.dev/chapters/environments.html).

## Say what kind of reproduction you tested

![](figures/reproduction-routes.svg){#fig-reproduction-routes fig-alt="Three reproduction routes start at different points: saved estimates rebuild a table, approved inputs rerun the analysis, and assigned documents rerun model inference. Each route has its own test and evidence."}

Rebuilding a table from saved estimates, rerunning the complete analysis from approved data, and obtaining new responses from an LLM are different operations. Name the starting point. Saved fit objects or model responses become inputs when you choose a route that starts from them.

Keep these tests distinct from independent implementation (§15). A fresh implementation checks the written specification and agreement between separately built analyses. Reproduction runs the supplied code and asks whether another researcher can obtain its results. Neither establishes the scientific validity of the method.

<!-- prompt:reproduce-project -->
::: {#request-reproduce-project .prompt}
> Prepare a clean-copy reproduction test using the README and input manifest. Identify missing inputs and approved access routes before running. Restore the recorded environment without upgrading it, run the documented commands, and compare outputs using the agreed tolerances. If restricted data are unavailable here, run only the synthetic example and state that empirical reproduction remains untested. Save commands, outputs, and discrepancies without changing the analysis or criteria to force a pass.
:::
<!-- /prompt:reproduce-project -->

Inspect the resulting output comparisons as well as the exit status. Identifiers and deterministic counts should match exactly; numerical estimates need suitable tolerances, and stochastic methods may require a comparison that accounts for Monte Carlo variation. Record the actual environment and input versions used. Investigate a discrepancy before updating the reference result to match the new run.

For restricted data, provide instructions for authorized access and a synthetic example that exercises the code. Running that example establishes that the example runs. It does not reproduce results from protected records. Have an authorized researcher complete the latter test within the approved environment and record the outcome.

## Prepare a reviewable research deposit

Assemble a separate snapshot for the repository your field uses, such as Dataverse, OSF, or Zenodo. Include the documentation, code, environment records, and permitted inputs and outputs. State what access restrictions prevent a public reader from reproducing. Agree the contributors, affiliations, licenses, and relationship to the manuscript version with your coauthors.

![](figures/deposit-review.svg){#fig-deposit-review fig-alt="A separate deposit snapshot is reviewed for permitted contents, complete instructions, scientific provenance, and correct metadata before publication."}

<!-- prompt:review-deposit -->
::: {#request-review-deposit .prompt}
> Review the proposed deposit against the manuscript, code, and input manifest. Report confidential material, credentials, personal paths, missing dependencies, incomplete access instructions, and unsupported claims. Preserve relevant AI disclosure and scientific provenance, including prompts and model-evaluation records. Check contributors and licenses. Propose specific corrections; do not upload, delete files, or rewrite history.
:::
<!-- /prompt:review-deposit -->

Review both the contents and their claims. Remove credentials, confidential correspondence, personal paths, and restricted records from the proposed public copy. If the deposit includes repository history, review that history too. Preserve AI-use disclosure and any prompts, model details, and evaluation records needed to understand the research. Removing irrelevant working notes should not erase a measurement procedure or its limitations.

Test the snapshot's instructions, not just those in the original project. Check filenames, input access, reported units, and the intended model. A successful reproduction from the working folder does not establish that all necessary files reached the deposit.

Publish only after this review. A later repository correction cannot recall copies already downloaded. Keep the deposited version and the tested manuscript version linked so that a subsequent revision begins from a known state.

<!-- ===================== REFERENCE ===================== -->

# Appendix A. Starter files {#starter-files}

Use these starter files to establish a small, readable project record. Replace the example details with your own, and keep conventions your lab already uses. The files are instructions and documentation; they do not enforce access controls.

For the heat-and-birthweight project, the project file points to the scientific specification and the saved analysis commands. The global file instead points to conventions that should apply across studies. Download either file below, then adapt it before asking the agent to use it.

## A.1 Global instructions

Chapter 8 explains the global location and how specialist files are loaded. Save the adapted content as your global `CLAUDE.md`, or use `AGENTS.md` with the explicit import described there. The references to specialist files are routing instructions; create only the files you intend to maintain.

[Download global instructions](resources/starter-files/global-AGENTS.md){.download-button download="AGENTS.md"}

<!-- starter:global -->
```
# How I work

[Describe your research role and the software you normally use.]

## Before a task
- Read the project's instructions and current state. Preserve accepted work.
- Identify the requested result, constraints, and evidence needed to accept it.
- Ask about consequential ambiguity; do not silently substitute another analysis.

## Conventions
- Read CONVENTIONS.md when organizing a project or naming files.
- Read CODING.md before writing or changing code.
- Read MODELING.md before statistical modeling or simulation.
- Read WRITING.md before drafting prose for people to read.
- Read TOOLCHAIN.md before adding or changing software.

These files sit beside this file. If a needed file is absent, report the gap.

## Research work
- Preserve original data. Derive new files with saved code.
- Use independently runnable steps with declared inputs and outputs.
- Keep scientific decisions and their reasons in the project record.
- Verify observed outputs before reporting success. Keep failed checks visible.

## Limits
- Use only inputs and services approved for the project.
- Ask before publishing, sending messages, expanding access, or adding a service.
- Do not delete recovery copies or rewrite shared history without approval.

## Finishing
- Update the task list and current-state record from evidence.
- Report what changed, how it was checked, and what remains unresolved.
```
<!-- /starter:global -->

## A.2 Project instructions

Save the adapted content in the project's `CLAUDE.md`, or in `AGENTS.md` with an explicit import (§7). Replace the example paths with commands and files that exist in your project. Keep protected inputs in approved storage beyond the agent's configured reach when the service may not process them (§§3–4).

[Download project instructions](resources/starter-files/project-AGENTS.md){.download-button download="AGENTS.md"}

<!-- starter:project -->
```
# heat-birthweight

Synthetic teaching study of heat exposure and birthweight. Every individual
record is invented; results are not evidence about actual pregnancies.

## Read first
- specification.md: estimands, estimator, input rules, uncertainty, and checks.
- STATUS.md: current state and next decision.
- TASKS.md: work remaining and dated completions.
- METHODOLOGY.md: scientific decisions and their reasons.

## Files
- data/raw/: approved original synthetic data; preserve unchanged.
- code/: saved analysis and validation steps.
- outputs/: fits, contrasts, figures, and verification records.
- manuscript/: text linked to the saved outputs.
- README.md: actual commands and environment restoration instructions.

## Working rules
- Follow the written specification. Report missing inputs or ambiguities.
- Do not invent observations, alter the estimand, or weaken a failed check.
- Save full-precision results; apply rounding only for presentation.
- Keep simulation outputs separate from the single-dataset analysis.
- Record the exact input and software versions used.
- Inspect changed outputs and record verification before reporting completion.

## Access
Only approved synthetic material belongs in this project. No protected birth
records are available here. Ask before adding external services or publishing.
These instructions do not enforce file or network permissions; use the
configured access controls for those boundaries.
```
<!-- /starter:project -->

## A.3 Current state

Save this as `STATUS.md` at the project root. Rewrite it as the state changes; keep task history in `TASKS.md` and scientific reasoning in `METHODOLOGY.md`.

[Download STATUS.md](resources/starter-files/STATUS.md){.download-button download="STATUS.md"}

<!-- starter:status -->
```
# STATUS

Last updated: [date]

## Current state
[What exists and what the evidence establishes. Keep this a short snapshot.]

## Next decision or action
[The next substantive step and any required input.]

## Blocked or unverified
[Missing inputs, unresolved decisions, or claims not yet checked.]

## Standing facts
[A few facts needed to resume. Keep decisions and their reasons in METHODOLOGY.md.]
```
<!-- /starter:status -->

## A.4 Tasks

Save this as `TASKS.md`. Keep unfinished work visible, and date completed entries. A short list is easier to use than an exhaustive transcript of agent actions.

[Download TASKS.md](resources/starter-files/TASKS.md){.download-button download="TASKS.md"}

<!-- starter:tasks -->
```
# TASKS

Move tasks between these sections as their status changes. Add a date when a
task finishes. An in-progress entry states what remains to be done.

## To Do
- Confirm the scientific specification and the approved inputs.
- Implement the analysis and its verification plan.

## In Progress

## Done
```
<!-- /starter:tasks -->

## A.5 Scientific decisions

Save this as `METHODOLOGY.md`. Record a decision when it changes what the study estimates, how it is implemented, or how its evidence should be interpreted. Link to the maintained specification rather than keeping inconsistent copies.

[Download METHODOLOGY.md](resources/starter-files/METHODOLOGY.md){.download-button download="METHODOLOGY.md"}

<!-- starter:methodology -->
```
# METHODOLOGY

## Current specification
[Link to the maintained estimands, estimator, sample, input rules, and checks.]

## Decisions

### [Date]: [Decision]
- Question or discrepancy:
- Evidence considered:
- Decision and reason:
- Affected code, outputs, and manuscript passages:
- Verification and remaining limitations:
```
<!-- /starter:methodology -->

## A.6 Git exclusions

Save this as `.gitignore` and adapt it to the project's sharing policy. This conservative example excludes inputs by default; permitted synthetic or public inputs and provenance records may belong in a repository. An ignore rule neither blocks agent access nor removes a file already tracked in git.

[Download the exclusion file](resources/starter-files/gitignore.txt){.download-button download=".gitignore"}

<!-- starter:gitignore -->
```
# Exclude research inputs by default; share permitted files deliberately.
data/raw/
data/processed/

# Rebuildable environments and caches
.venv/
renv/library/
renv/staging/
outputs/models/
logs/
.Rproj.user/
.Rhistory
.DS_Store

# Personal settings and secrets
.claude/settings.local.json
.env
.env.*
!.env.example
```
<!-- /starter:gitignore -->

## A.7 Adapt the structure to the output

Chapter 6 shows a paper project with original and processed data, code, outputs, and a manuscript. A data-curation project needs acquisition scripts, source records, validation reports, and rebuild instructions. A presentation or website project needs editable source, assets, and reviewed deliverables. Keep an established structure when it already makes these roles clear.

For execution, use the project's existing master do-file or runner. The downloadable research example (§10) supplies runnable commands and its environment records; chapter 13 explains how to make meaningful steps independently runnable. A generic script that lists filenames cannot substitute for documenting the dependencies in your actual project.

# Appendix B. Prompt bank {#prompt-index}

These requests are starting points to adapt to your project. Each is also shown beside its explanation in the guide, with a link here to that exact location. Supply the relevant files and decisions before pasting a request; a prompt does not configure permissions or establish scientific validity.

[Download all requests as Markdown](resources/prompt-bank.md){.download-button download="prompt-bank.md"}

<!-- collection:prompts -->
## Start a new research project

Establish a project structure that fits the intended output.

[Explanation and checks in chapter 6](#request-scaffold-project).

::: {.prompt}
> Create a project for the research described below, using our established workspace and conventions. Propose a small folder structure suited to the deliverable, then create the approved structure and initial project instructions. Preserve any existing files. Record missing scientific decisions instead of inventing them, and show me where inputs, code, results, and the manuscript belong.
:::

## Organize an existing project

Make a recoverable reorganization without changing the research.

[Explanation and checks in chapter 6](#request-restructure-project).

::: {.prompt}
> Inspect this project and propose a clearer structure that preserves original data and accepted work. Identify scripts, outputs, duplicates, and uncertain files; do not decide that uncertain files are disposable. After I approve the plan, make a recovery checkpoint, reorganize the files, update affected paths, and save a before-to-after file map. Check that the existing analysis still runs and report unresolved dependencies.
:::

## Write project instructions

Make a new session useful without retelling the whole project.

[Explanation and checks in chapter 7](#request-project-context).

::: {.prompt}
> Read the project files and draft a concise project instruction file describing the purpose, current commands, file locations, scientific specification, and access limits. Separate observed facts from questions for me. Link to detailed records rather than copying them into the instructions. Preserve existing authored instructions and show proposed revisions before replacing them.
:::

## Resume a project

Use the saved state to choose the next task.

[Explanation and checks in chapter 7](#request-resume-project).

::: {.prompt}
> Read the project instructions, STATUS.md, and TASKS.md, then inspect the files relevant to the next task. Tell me the current state, any conflict between the records and the files, and the next useful action. Do not treat an unverified claim of completion as evidence that a check passed.
:::

## Leave a useful handoff

Record enough evidence for the next session.

[Explanation and checks in chapter 7](#request-close-session).

::: {.prompt}
> Update TASKS.md with completed and remaining work. Rewrite the affected parts of STATUS.md to describe the current state, without adding a running history. Record scientific decisions and their reasons in METHODOLOGY.md. Include the outputs checked, failures or gaps, and the next action; do not mark work complete without evidence.
:::

## Separate shared and project instructions

Avoid copying changing rules across every project.

[Explanation and checks in chapter 8](#request-shared-conventions).

::: {.prompt}
> Review these project instructions for conventions I use across projects. Propose a short global instruction file that points to specialist files for coding, modeling, writing, project structure, and installed tools. Keep this study’s scientific decisions and access exceptions in the project. Identify duplicated or conflicting rules and show proposed changes before applying them.
:::

## Turn a checked procedure into a skill

Reuse a procedure after confirming it works.

[Explanation and checks in chapter 9](#request-status-skill).

::: {.prompt}
> Create a project-status skill from the handoff procedure we have checked. It should read the project instructions and state files, verify relevant outputs, update the task list and snapshot, and report unresolved issues. Keep the instructions short, name the evidence required, and stop if the project cannot be identified. Test it on this project and show the resulting changes before treating it as reusable.
:::

## Make the research specification explicit

Give implementation and verification the same written target.

[Explanation and checks in chapter 10](#request-research-specification).

::: {.prompt}
> Turn my research decisions into specification.md: state the estimands, population or averaging sample, exposure comparisons, estimator, sample rules, required inputs, uncertainty method, and reported outputs. Identify ambiguities for me rather than choosing silently. Add the agreed verification tolerances and simulation questions. Do not begin fitting until I have reviewed the scientific specification.
:::

## Search and verify the literature

Keep source discovery separate from verified evidence.

[Explanation and checks in chapter 11](#request-literature-search).

::: {.prompt}
> Search for research relevant to the question and criteria in our specification. Record the sources searched, exact queries, dates, and screening decisions. Verify each journal article’s DOI against publisher or registry metadata, including title, authors, and year; flag mismatches and works without a DOI rather than inventing one. Save verified references separately from leads, and distinguish abstracts from full texts you actually read.
:::

## Synthesize the papers actually read

Connect each literature claim to supporting material.

[Explanation and checks in chapter 11](#request-literature-synthesis).

::: {.prompt}
> Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.
:::

## Bring approved data into the project

Preserve originals and establish provenance before analysis.

[Explanation and checks in chapter 12](#request-bring-data).

::: {.prompt}
> Inspect the approved inputs and their documentation. Record where each came from, the version or acquisition date, permitted use, expected units and identifiers, and a file fingerprint. Preserve the originals and create separate scripted checks for the required columns, record keys, ranges, and missingness rules in specification.md. Report discrepancies before transforming or excluding records; never replace missing research inputs with simulated observations.
:::

## Build a modular analysis workflow

Make meaningful analysis steps independently runnable.

[Explanation and checks in chapter 13](#request-modular-workflow).

::: {.prompt}
> Review the current analysis and propose coherent steps with explicit inputs and saved outputs. Preserve its scientific behavior while separating expensive fits from contrasts, figures, and reporting. Reuse shared functions, and keep adequate existing runners. Provide commands for individual steps and useful combinations, then compare the refactored outputs with the accepted baseline. Report any scientific difference instead of silently treating it as a refactor.
:::

## Plan and run known-truth checks

Assess implementation and statistical behavior separately.

[Explanation and checks in chapter 14](#request-simulation-plan).

::: {.prompt}
> Propose a simulation plan for specification.md. Define plausible generating worlds, separately calculated truth, estimator-recovery measures, interval or decision-rule checks, and Monte Carlo uncertainty. Check outcome support and dispersion before running; count failures as well as successes. After I approve the plan, run the saved analysis unchanged in each world and report where it fails. Keep simulated files separate from study inputs and do not change the method to make a check pass.
:::

## Implement the analysis independently

Give a fresh agent only the common specification and inputs.

[Explanation and checks in chapter 15](#request-independent-implementation).

::: {.prompt}
> Working only from specification.md, the data dictionary, and the approved original inputs, independently implement the analysis in the assigned language. Do not consult another implementation, processed dataset, or result. Stop for missing inputs or ambiguity; do not invent values or substitute simulated data. Save the code, input fingerprints, sample identifiers, derived values, model terms, and labeled full-precision results with their uncertainty calculations.
:::

## Compare completed implementations

Locate the first meaningful disagreement.

[Explanation and checks in chapter 15](#request-compare-implementations).

::: {.prompt}
> Compare the completed implementations against specification.md and its tolerances. Check input versions, sample membership, exclusions, derived variables, model terms, and reported quantities, using full-precision values. Produce an agreement-and-discrepancy table and identify the earliest stage at which each discrepancy appears. Do not change either implementation or its outputs to force agreement.
:::

## Design controlled LLM research runs

Specify what each headless run may receive.

[Explanation and checks in chapter 16](#request-controlled-llm-runs).

::: {.prompt}
> For this review-generation and judging protocol, list the exact inputs, prompts, instructions, tools, and connected services allowed in each stage. Design fresh runs that do not inherit other cases’ conversations or outputs. Propose harmless marker tests for unintended file, memory, instruction, and tool access, including an allowed-input positive control. Save raw responses, failures, retries, configuration, and model information. Report untested routes; headless execution alone is not evidence of isolation.
:::

## Evaluate a frozen labeling procedure

Keep evaluation separate from prompt development.

[Explanation and checks in chapter 16](#request-evaluate-labeling).

::: {.prompt}
> Apply the frozen rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. After labeling finishes, compare with the independently adjudicated reference. Report the confusion table, category-specific errors, uncertainty, referral workload, and prespecified acceptance criteria. Do not tune on this sample or drop difficult cases; list disagreements for human review.
:::

## Trace numbers into the manuscript

Find stale values and unsupported claims in the rendered document.

[Explanation and checks in chapter 18](#request-trace-manuscript).

::: {.prompt}
> Trace each main manuscript result, including the abstract and captions, to its saved source file and exact entry. Record source fingerprints and check values, signs, units, samples, intervals, and rounding in the final rendered document. Identify every affected use when a source result changes. Propose updates only from verified outputs and list unsupported claims for my decision.
:::

## Draft from the research record

Keep evidence gaps visible while writing.

[Explanation and checks in chapter 18](#request-draft-from-results).

::: {.prompt}
> Draft this section using only the supplied research decisions, verified sources, saved result tables, and figure captions. Where a claim, number, or reference has no support in those files, leave a bracketed gap and list it at the end. Follow my writing conventions. Do not invent evidence or change the scientific interpretation to complete the prose.
:::

## Draft a response from your decisions

Preserve the author’s decisions and link replies to revisions.

[Explanation and checks in chapter 18](#request-reviewer-response).

::: {.prompt}
> Draft the reviewer response from the supplied comments and my decision notes. Quote each comment, lead with the substantive answer, and cite the actual locations of manuscript changes. Do not add concessions I did not make or claim an analysis was run without its saved output. Flag unresolved comments and record any approved methodological change in the project record.
:::

## Test a clean-copy handoff

Establish what another researcher can actually rerun.

[Explanation and checks in chapter 19](#request-reproduce-project).

::: {.prompt}
> Prepare a clean-copy reproduction test using the README and input manifest. Identify missing inputs and approved access routes before running. Restore the recorded environment without upgrading it, run the documented commands, and compare outputs using the agreed tolerances. If restricted data are unavailable here, run only the synthetic example and state that empirical reproduction remains untested. Save commands, outputs, and discrepancies without changing the analysis or criteria to force a pass.
:::

## Review a proposed deposit

Check the snapshot before publication.

[Explanation and checks in chapter 19](#request-review-deposit).

::: {.prompt}
> Review the proposed deposit against the manuscript, code, and input manifest. Report confidential material, credentials, personal paths, missing dependencies, incomplete access instructions, and unsupported claims. Preserve relevant AI disclosure and scientific provenance, including prompts and model-evaluation records. Check contributors and licenses. Propose specific corrections; do not upload, delete files, or rewrite history.
:::
<!-- /collection:prompts -->

# Appendix C. Troubleshooting {#troubleshooting}

A failed action is easier to diagnose when you preserve what happened. Keep the current files and useful error output, then choose a check that distinguishes a tool problem from a research problem.

For example, an [R](https://www.r-project.org/) job that never writes its first message needs a process or launch check before the agent starts changing the statistical model. The specific R-on-macOS issue below has a documented execution workaround; it is not a general explanation for slow analysis.

| What happened | Next action | Where the fuller explanation lives |
|:--|:--|:--|
| The answer sounds certain but has no evidence | Ask for the source or saved output; keep unsupported claims out of the manuscript | §§11, 15, 17 |
| The session loses track of decisions | Save the current state and next action, then start a focused session | §7 |
| Old memory conflicts with current files | Identify and correct the stale record; inspect which instructions loaded | §§7–8 |
| Routine work asks for approval repeatedly | Inspect the effective mode and permissions; adjust only the required scope | §§4–5; [toolkit chapter 2](https://dss-agentic-toolkit.pages.dev/chapters/tool-access.html) |
| The agent changes the question to finish | Restate the specification and acceptance evidence; preserve the failed result | §§5, 15 |
| A check disappears or its tolerance grows | Require an explanation tied to the specification before changing the check | §15 |
| A long job seems to have vanished | Inspect the process or queue state, log, and expected output | §13; [toolkit queue chapter](https://dss-agentic-toolkit.pages.dev/chapters/job-queues.html) |
| R spins without output when launched by an agent on macOS | Use the recorded diagnosis and execution wrapper; distinguish this local issue from an analysis failure | [Toolkit troubleshooting](https://dss-agentic-toolkit.pages.dev/chapters/troubleshooting.html#r-on-macos) |
| An app feature is missing | Check account, managed policy, and current documentation; use an available route | §§2–5 |
| Restricted material may have reached a service | Stop further access and use the institutional incident route | §3 |

If the same problem recurs, improve the instruction or check that would have prevented it. Repeatedly restarting the conversation without changing its inputs usually preserves the cause.

# Appendix D. Glossary {#glossary}

Use these definitions when a term interrupts the research workflow. For example, an *estimand* names the quantity you intend to report; an *estimator* is the procedure used to calculate it. The chapter references return you to the term in use.

*Agent.* An LLM working through tools that can read files, run commands, and edit the project. It uses each tool's result to decide what to do next (§1).

*Assertion.* A one-line check in a script that stops it when a stated expectation fails: `stopifnot()` in [R](https://www.r-project.org/), `assert` in [Stata](https://www.stata.com/) and [Python](https://www.python.org/) (§15).

*Auto mode.* A [Claude Code](https://code.claude.com/docs/en/overview) permission mode that combines permission rules with automated classification of actions requiring review. It reduces routine prompts but still needs defined access limits (§5).

*Brief.* The project instructions: its purpose, files, execution sequence, and access rules. Keep them in `CLAUDE.md`, or use the optional `AGENTS.md` import described in §7.

*Build.* The one command that produces every output the paper reports from the scripts and the data (§19). *One-command build* means the same.

*Calibration.* Assessing an estimator or decision rule on simulated data with known properties. Conclusions apply to the scenarios and performance measures examined (§14).

*Chain of custody.* The record of where protected data and their copies travel, who or what can access them, and how retention and deletion can be established (§3).

*Checksum.* A fingerprint calculated from a file’s contents, useful for identifying the version used. It does not establish that the contents are correct (§18).

*Commit.* A recorded version of the project's tracked files, with a message describing the changes. It provides a point you can compare with or restore later (§3, §7).

*Context window.* The limited amount of material the agent can use at once, including messages, file contents, and tool results (§7, §5).

*Decision rule.* What the paper will claim and on what basis: an interval excluding zero, a posterior probability above a threshold (§13).

*Deny rule.* A software-enforced rule blocking matching tool actions. Its coverage depends on the tool and execution route; a file-tool denial alone does not block every arbitrary script (§4).

*Diff.* The line-by-line difference between two versions of the files; what you review after a task (§7).

*Effort.* How much the model reasons before it acts; a setting with levels (§5).

*Environment variable.* A named value passed to a process and usually its children. Credentials may be supplied this way; a receiving process can read them (§12).

*Estimand.* The quantity the analysis is trying to estimate, stated before the model is fitted (§10).

*Estimator.* A procedure that uses the data to estimate the specified research quantity (§10).

*Global file.* An instruction file holding conventions that apply across your projects (§8). Project-specific instructions belong in the project file, defined here under *brief*.

*Fine-tuning.* Additional training that adapts an existing model using a dataset. It changes learned parameters; supplying context alone does not (§17).

*Headless agent.* An agent run from a saved request without an interactive conversation. Headless execution does not itself control all the context or tools available to the run (§16).

*Import.* In a `CLAUDE.md`, a line beginning with `@` that pulls another file in at the start of the session (§7).

*LLM.* Large language model: the AI that generates the text, and what a chat assistant and an agent both run on (§1). Which LLM, and at which version, is what this guide calls the *model* (§5, §16).

*LoRA.* Low-Rank Adaptation, a fine-tuning method that learns compact adjustments while keeping the base model's weights fixed. The saved adjustments are an adapter (§17).

*Lockfile.* A committed list of every package and its version, from which the environment can be rebuilt: `renv.lock`, `uv.lock` (§19).

*Model.* Two senses: the LLM the agent uses, whose identifier and available settings should be recorded when it contributes to a result (§5, §16); and a statistical model fitted to data (§13).

*Modular workflow.* Independently runnable research steps with explicit inputs and saved outputs; each step performs a coherent operation and can reuse shared functions (§13).

*Monte Carlo error.* The noise in a result that comes from random draws (a bootstrap, a Markov chain), against which two sampling-based results are compared (§15).

*Open-source AI.* Under the Open Source Initiative's definition, a system supplied with the rights and materials needed to use, study, modify, and share it. Downloadable weights alone do not establish this (§17).

*Open-weight model.* A model whose trained weights are available under stated terms. Where inference runs is a separate choice (§17).

*Permission mode.* The setting that decides which actions the agent may take without asking (§5).

*Plan mode.* A mode for inspecting the project and developing a plan before implementation. It may write planning records, but does not authorize ordinary project changes (§5).

*Prompt.* Two senses. A yes-or-no question the agent puts to you before an action, with the action shown (§5, §3); and, in Appendix B, a request you type to the agent.

*Provenance.* The record of where a data file came from, when, by what request, and under what terms (§12).

*RAG.* Retrieval-augmented generation: retrieving relevant material from a larger collection and supplying it to an LLM as context for its response (§7).

*Raw data.* Data as received, never modified; everything derived from it is rebuilt by code (§7, §12).

*Sandbox.* Operating-system restrictions on covered execution. Configured limits can constrain reads, writes, and network access; exempt or separately launched tools need separate review (§4).

*Session.* One conversation with the agent, with its own context window (§5).

*Usage window.* The period over which an account's usage allowance is measured. Check the limits for the actual plan (§5).

*Version control.* A system such as [git](https://git-scm.com/) that records chosen versions of tracked files, allowing comparison and restoration (§3).
