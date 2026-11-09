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

*Build and run research workflows.* An agent can turn a research plan into working code and carry out the steps needed to produce results. For example, it could prepare a dataset, fit the statistical models you specify, and generate figures for a manuscript. Saving those steps as reusable scripts makes it easier to revise the analysis or run it on new data. The agent can also help check its implementation and document the work for collaborators.
:::

::: {.research-use}
![](figures/use-model.svg){.use-icon width="64px" fig-alt="An LLM processing research material."}

*Use AI within the research method.* A large language model (LLM) can classify interview passages, extract information from documents, or evaluate written responses. Here, the LLM’s outputs become part of the research data. If you use it to identify themes in interviews, for example, the study depends on how well its classifications reflect the concepts you are investigating. You therefore need to evaluate its performance and record how it was instructed and used.
:::

## From LLMs to agents

### How does an LLM generate a response? {#how-does-an-llm-generate-a-response .unnumbered .unlisted}

A large language model (LLM) is a neural network[^intro-neural-network] trained on large amounts of text to learn patterns in language. LLMs used in AI assistants generate text by predicting what could come next, using the conversation so far. They work in *tokens*: pieces of text that may be a word, part of a word, or punctuation.[^intro-tokens]

For each new token, the LLM assigns probabilities to possible continuations. One is selected and added to the text, then the process repeats. Selection can involve randomness, so the most likely continuation is not always the one chosen.[^intro-generation]

![](figures/how-models-build-answers.svg){#fig-how-models-build-answers fig-alt="The unfinished sentence 'She poured herself a cup of' enters an LLM. Illustrative bars show possible next tokens: tea, coffee, and water. Coffee is selected, added to the sentence, and used to predict the next token. The bars are illustrative, not measured probabilities."}

### How can an LLM act on a research project? {#how-can-an-llm-act-on-a-research-project .unnumbered .unlisted}

An *agent* combines an LLM with tools and the software needed to use them. A tool is a program that performs an action, such as reading a file or running an analysis script. The LLM can request a *tool call*: an instruction to run one of those programs.

The surrounding software is called the *harness*. It supplies instructions and information to the LLM, handles permission checks, executes permitted tool calls, and returns their results. This lets the agent carry out work directly in your project.[^intro-harness]

![](figures/chat-to-agent.svg){#fig-chat-to-agent fig-alt="In a chat workflow the researcher carries instructions and results between the conversation and research software. An agent combines an LLM with a harness that runs tools and returns their results, allowing it to perform those steps in the project."}

The same AI app may support both ways of working. You can keep your existing [R](https://www.r-project.org/), [Stata](https://www.stata.com/), or [Python](https://www.python.org/) software; adopting an agent does not require changing statistical languages.

::: {.needspace height="8cm"}
:::

### How does an agent work through a task? {#how-does-an-agent-work-through-a-task .unnumbered .unlisted}

The result of a tool call gives the LLM new information to use in choosing its next action. The harness passes that result back, and the LLM may request another tool call or respond to you. Repeating this cycle lets an agent work through a task and adjust when it encounters an error or an unexpected result.[^intro-react]

The instructions, conversation, and tool results supplied to the LLM form its *context*. The *context window* limits how much information it can work with at once.

![](figures/agent-loop.svg){#fig-agent-loop fig-alt="The LLM selects a tool, the harness runs it, and the result returns to the LLM to inform the next action. The cycle repeats as needed."}

For example, an analysis fails because the script expects a column called `birth_weight`, while the dataset uses `birthweight_g`. The agent reads the error and consults the data dictionary to confirm which variable the script needs. It can then correct the code and run it again, using the new output to decide whether further work is needed.

[^intro-neural-network]: A neural network is a mathematical model that learns patterns from examples. It passes information through layers of connected units and adjusts the strength of their connections during training to improve its predictions. See IBM's [“What is a neural network?”](https://www.ibm.com/think/topics/neural-networks) for an illustrated introduction.
[^intro-tokens]: Hugging Face, [“Tokenizers”](https://huggingface.co/learn/llm-course/en/chapter2/4), explains how text is divided into tokens.
[^intro-generation]: Hugging Face, [“Text generation”](https://huggingface.co/docs/transformers/llm_tutorial), describes generating successive tokens and the choices involved in selecting them.
[^intro-harness]: Anthropic, [“How Claude Code works”](https://code.claude.com/docs/en/how-claude-code-works), explains the LLM, tools, and surrounding harness.
[^intro-react]: Yao et al. (2023), [“ReAct: Synergizing Reasoning and Acting in Language Models”](https://doi.org/10.48550/arXiv.2210.03629), demonstrates how language models can alternate reasoning with actions and use observations to guide subsequent steps.

## Your role as a supervisor

Think of an agent as a capable research assistant joining your project. It needs context that an established collaborator might already have: what you are trying to establish, which files to use, and which decisions have already been made. Explaining these things helps it carry out work that fits your intentions.

Your role is to give the work direction and assess what the agent produces. You can let it handle implementation details, while remaining involved in decisions that require your research judgment. A script can run without errors while using the wrong variable or excluding observations you intended to keep. Later chapters explain how to detect these mistakes.

Ask the agent to provide the outputs and the results of its checks, then use those to identify anything that needs explaining or revising. The guide develops ways to supervise this work without having to perform every step yourself or read every line of generated code.

## How to use this guide

If you are new to agents, begin with *Orientation*. If you already use one, you can turn to the chapters relevant to your current work. The guide has three parts:

- **Orientation** introduces the app, explains where your data goes, and shows how to control the agent’s access and choose its settings.
- **Direct the work** covers organizing your projects, giving the agent useful context, and saving instructions and procedures you want it to reuse.
- **Do the research** follows a worked research project through literature searches, analysis, checking, writing, and sharing the results. It also covers using LLMs within the research method and running or adapting open-weight LLMs.

The examples use [Claude Code](https://code.claude.com/docs/en/overview) in the Mac desktop app. You do not need terminal or [Git](https://git-scm.com/) experience to begin, and the research practices apply to other agents. Harvard-specific guidance appears in clearly marked passages.

The appendices provide downloadable starter files, example requests, troubleshooting advice, and a glossary. The companion, [*Extending Your Agent’s Toolkit*](https://dss-agentic-toolkit.pages.dev/), explains how to ask an agent to install, configure, and use additional tools when your research needs them. You can adopt those tools as they become useful.

# 2. Get started with the app {#first-session}

Claude’s desktop app lets you work with an agent through a conversation. You describe what you need, and the agent can use your project’s files and software to carry it out.

Suppose you need to change the labels on a figure. You can ask the agent to edit the plotting script and regenerate the figure, then open the result to check it. The app gives you a place to describe the change, follow the work, and intervene if the agent misunderstands.

## Install and sign in

1. Download and install the Mac app using the [official Claude Code desktop instructions](https://code.claude.com/docs/en/desktop-quickstart).
2. Sign in with the account you intend to use for research.

> **Harvard.** Request a license through [HUIT’s Claude page](https://www.huit.harvard.edu/claude), using the form for your school or unit. Sign in with that account for your Harvard research.

## Find your way around

The app opens in the `Claude` tab, which handles general tasks using tools mainly in the cloud. For the work in this guide, use `Code` with `This computer` selected so Claude can edit project files and run analyses using the software installed on your computer. The LLM still runs on Anthropic’s servers. When the agent supplies project content to the LLM, it sends that information to Anthropic. [Chapter 3](#research-limits) explains what this means for your research data.

Each time you open the app, switch to `Code` using the `</>` button near the top of the sidebar. The illustration below shows the `Code` tab. [Hover over a numbered control to read its explanation. On a touchscreen, tap the number; with a keyboard, use the Tab key. You can enlarge the illustration or read all the explanations below it.]{.web-only}

![](figures/claude-code-app.svg){.interactive-app .tall fig-alt="The Code tab in Claude’s desktop app, with numbered controls for the project folder, execution environment, task, model, effort, permissions, usage, account, and settings." above="8pt" below="8pt"}

## Work with the agent

Describe what you want in the message box. As the agent works, the conversation shows its progress, questions, and requests for permission. You can add information or clarify your instructions there. When it finishes, open the result and decide whether it needs further work. For example, if the revised figure labels are crowded, ask the agent to shorten them and regenerate the figure.

If the agent misunderstands the task, you can stop it and explain what needs to change. Stopping does not undo changes it has already made. The next three chapters explain [where your data goes](#research-limits), [how to control the agent’s access to files and tools](#agent-access), and [which settings to choose](#directing-work) before working with your research files.

# 3. Know where your data goes {#research-limits}

An agent can send research material to the company running its LLM (the *provider*), even while working with files on your computer. For Claude, that company is Anthropic. Before giving an agent access, you need to understand what information may be sent, what the provider keeps, and whether your project permits that use.

Suppose you ask an agent to diagnose an error in a script that analyzes confidential birth records. It prints several records to understand the problem. Those records can be sent to the LLM as part of its context, even though you never uploaded the dataset yourself.

## What reaches the LLM

With a *hosted LLM*, the LLM runs on the provider’s computers. The agent’s tools can run on your computer and return whole files, selected records, figures, or messages printed by a program. When the agent supplies those results to the LLM, it sends that information to the provider, even with `This computer` selected in [Claude Code](https://code.claude.com/docs/en/desktop).

![](figures/research-data-flow.svg){#fig-research-data-flow fig-alt="On your computer, the agent's tools read project files. The agent sends tool results to the hosted LLM on the provider's computers. The provider may retain copies."}

A script reading a dataset does not, by itself, send every record to the LLM. What matters is what the agent sends to the LLM. An error message might contain a participant’s identifier, for example. Consider code, filenames, data dictionaries, and derived outputs as well as data files. Summaries can also contain protected information.

## What the provider keeps

The LLM uses the information sent to it to generate a response. The provider may retain conversations and tool results after the task ends. Using that material to train an LLM is a separate use: a promise not to train on your data does not mean that no copy is kept.

Anthropic documents a standard 30-day retention period for commercial Claude Code use, with other arrangements available to qualifying organizations. Enterprise chat and project retention controls have different coverage.[^data-retention] Even a few weeks may exceed what your project permits. Confirm the terms for your product and account; personal-account privacy settings do not provide an institutional agreement’s contractual coverage.

[^data-retention]: See Anthropic’s [Claude Code data-usage documentation](https://code.claude.com/docs/en/data-usage) and [Enterprise retention guidance](https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans), checked November 6, 2026. The products have different controls and exclusions. These public documents do not establish Harvard’s retention duration.

## Check what your project permits

Check both institutional approval for the service and your project’s terms. An institution may approve a tool while a data-use agreement prohibits sending your records to it. Consent, an IRB protocol, confidentiality agreements, and federal grant or other funder requirements may also limit the use. If the terms are unclear, ask the responsible institutional office before supplying the material.

> **Harvard, checked November 6, 2026.** [HUIT’s Claude guidance](https://www.huit.harvard.edu/claude) approves Harvard Claude Chat and Code for data up to Level 3; inputs are not used for training. Connected services require separate security and privacy approval. Check the guidance for the feature you intend to use and confirm retention with the service team. Your project’s terms may be more restrictive.

If you connect the agent to another service, check your institution’s guidance to confirm that the connection is approved for the data you intend to use.

## Work with restricted data

An agent writing analysis code can work with synthetic records that have the required columns and types. Give it a shareable data description and have it develop and test the code with those records. Run the saved code on real data in an approved environment, without giving the agent access unless separately authorized. Check the real-data analysis there; return only information that is permitted to leave.

If the LLM must analyze the material, such as coding confidential interviews, it needs the real text. You could use an approved hosted service or an *open-weight LLM*, whose trained parameters are available to download and run on your computer or an institutional server. Running the LLM within approved infrastructure gives you control over where it processes data; the agent’s tools and connections still need restrictions. [Chapter 17](#research-models) explains these choices, and [chapter 16](#llm-measurements) covers evaluating the LLM’s work.

![](figures/research-data-routes.svg){#fig-research-data-routes .tall fig-alt="Two ways to work with restricted data. First, an agent using a hosted LLM develops code from synthetic data; saved code is transferred into an approved environment to analyze real data. Second, an open-weight LLM runs alongside the real data inside an approved computer or server."}

## Keep a chain of custody {#data-chain-of-custody}

For protected data, keep a *chain of custody*: a record of where the material goes, who or what can access it, and where copies remain. Include sensitive content in conversations, tool results, outputs, logs, and backups. Before sharing protected data with a service, establish where it will store the data, how long it will keep them, and how deletion can be arranged if your project requires it. Consult your institution’s guidance or ask the service administrator for these details.

The example below keeps confidential birth records on an institutional server while the agent develops code with synthetic records. Replace these entries with your project’s actual locations, responsible people, and agreed retention dates.

| What to record | Example entry |
|:-------------------|:-----------------------------------------------------------|
| Data and authority | Birth-record extract v2; the data-use agreement permits analysis on the institutional server. |
| Who receives what | The agent uses synthetic records and a shareable dictionary, which may be sent to the LLM provider. Authorized researchers access real records on the server. |
| Copies and storage | Real records, logs, and uncleared outputs stay in restricted project storage and managed backups. Synthetic inputs remain in the hosted conversation. |
| Retention and deletion | The service administrator confirms conversation retention. The server administrator records when and how project files and backup copies will be removed. |
| Project closure | Retain permitted code and cleared results. The data custodian confirms removal of restricted copies as the agreement requires. |

Confirm what deletion covers, including backups and service records. Keep the custody record in approved storage and update it when the work changes. Give the agent only the instructions and details it is permitted to see.

::: {#accidental-exposure}
> **If material is exposed accidentally.** Stop further access and transfer. Record what was sent, to which service and account, and when. Report the incident promptly through your institution’s designated route and follow its instructions. Do not assume deleting the conversation resolves the exposure or erase records needed to assess it.
:::

Once you know which information the agent may use, configure its access to files and tools. [Chapter 4](#agent-access) explains how.

# 4. Control what the agent can do {#agent-access}

An agent can work more independently when it has permission to do routine work and clear restrictions on what it can access. You decide which files it may read or change and which services it may use. The agent can help configure those controls, following the data-use decisions from [chapter 3](#research-limits).

Suppose you ask it to update a manuscript figure. It needs to read the approved inputs, edit the plotting script, and save the revised figure. You can allow those actions while preventing changes to the original data and access to another study's files.

## Decide what the agent may access {#access-scope}

Describe the access in terms of your actual files and tasks. For the figure update, you might specify:

| Resource | Permitted use |
|:-------------------|:---------------------------------------|
| Approved input dataset | Read it to generate the figure; leave the original unchanged. |
| Plotting script and figure folder | Edit the script and save revised figures. |
| Research software | Run the plotting script with the installed analysis software. |
| Public software documentation | Look up plotting options if needed; do not send project data. |
| Another study's files | No access. |

Include connected accounts and browser access in these decisions. A browser signed into a data service may expose records outside the project folder. Even a search query can send confidential information. Give access to a service only when the task needs it and the use is permitted.

::: {.pagebreak}
:::

![](figures/agent-access.svg){#fig-agent-access .tall fig-alt="Example access after configuration: an agent can read approved inputs, read and change plotting scripts and figures, and consult public documentation. Access to another study's files is blocked. These limits require controls for the tools and connections used."}

## Enforce those limits

Written instructions tell the agent how you want it to work. Telling it to leave the original data unchanged is useful, but does not prevent a program from overwriting them. Configure access restrictions as well; selecting a project folder does not, by itself, make other files inaccessible.

In [Claude Code](https://code.claude.com/docs/en/overview), *permission rules*[^access-permission-rules] tell the harness[^access-harness] which tool actions to allow, ask you about, or deny. You can permit routine edits, require approval before publishing files, and deny changes to protected inputs. A *sandbox*[^access-sandbox] adds restrictions enforced by the operating system[^access-operating-system] on the commands running inside it, including programs those commands start. It can limit which files they read or change and which network destinations they contact.

[^access-permission-rules]: Rules that allow specified tool actions, require approval, or block them. Claude Code enforces these settings; instructions in a prompt do not change them. See Anthropic's [permission documentation](https://code.claude.com/docs/en/permissions).

[^access-harness]: The software around the LLM that supplies context, checks permissions, runs permitted tools, and returns their results. See Anthropic's [explanation of how Claude Code works](https://code.claude.com/docs/en/how-claude-code-works).

[^access-sandbox]: A restricted environment for running programs, with limits on which files and network destinations they can access. See Anthropic's [sandbox documentation](https://code.claude.com/docs/en/sandboxing) for the controls and tools covered.

[^access-operating-system]: The core software that manages a computer's hardware, files, and running programs. macOS, Windows, and Linux are examples. See IBM's [introduction to operating systems](https://www.ibm.com/think/topics/operating-systems).

Both are needed because a file-tool restriction may not block a script that reads the same file. Conversely, the sandbox does not cover Claude Code's built-in file tools or separately connected tools. A queued job or a command run outside the sandbox may also have different access. Have the agent check the controls for the tools it will actually use; the toolkit's [access chapter](https://dss-agentic-toolkit.pages.dev/chapters/tool-access.html) explains configuration.

Use global settings for rules you want across your projects. Use project settings for permissions tied to a particular study, such as which input folders must remain unchanged and which services the work requires. Ask the agent to inspect both before proposing changes.

| Scope | File | Applies to |
|:----------------|:------------------------------------|:-------------------------------|
| Global | `~/.claude/settings.json`[^settings-home] | Your work across projects on this computer. |
| Project | `.claude/settings.json` inside the project | This project; the file can be shared with collaborators. |
| Personal project | `.claude/settings.local.json` inside the project | Your own settings for this project. |

[^settings-home]: The tilde (`~`) means your home folder. The other two paths start inside the project folder. See Anthropic's [settings reference](https://code.claude.com/docs/en/settings).

For many settings, your personal project file overrides the shared project file, which overrides your global defaults. Permission rules work differently: Claude Code combines the rules from these files, and a matching deny takes precedence over an allow. Allowing edits to a folder in your project settings therefore does not remove a global rule that prohibits those edits. Your institution may also impose restrictions through managed settings.[^settings-precedence]

[^settings-precedence]: Anthropic's [settings precedence](https://code.claude.com/docs/en/settings#settings-precedence) explains file priority; its [permission documentation](https://code.claude.com/docs/en/permissions#settings-precedence) explains why a deny rule from one file takes precedence over an allow from another.

> **Keep secrets out of saved permissions.** Choosing `Yes, and don't ask again` can save a command in `.claude/settings.local.json`, including any password or API key written into it.[^saved-permission-secrets] Have the agent keep this file out of [version control](#project-recovery) and shared archives, and supply credentials when commands run without writing their values into commands or output. If a credential has been exposed, revoke or replace it; deleting the file is not enough. The toolkit's [credential chapter](https://dss-agentic-toolkit.pages.dev/chapters/credentials.html) explains the setup.

[^saved-permission-secrets]: Apiiro's [November 2026 investigation](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) documents secrets in saved approvals. Claude Code normally adds the local settings file to your global Git ignore list when it writes the file inside a repository, but this does not protect a file Git already tracks. Exclude `.claude/settings.local.json` in the project's own `.gitignore` too; the shared `.claude/settings.json` can remain under version control. See Anthropic's [settings documentation](https://code.claude.com/docs/en/settings#keep-personal-settings-out-of-a-repository).

## When a separate environment helps

A *container*[^container-definition] provides a separate software environment with selected files and tools. You might use one to run an unfamiliar replication package without exposing unrelated projects or credentials. You could also run an agent and an open-weight LLM inside a container, giving them only the study files and tools they need. That requires configuring the folders, credentials, and network connections available inside it; putting software in a container does not automatically keep its data there.

[^container-definition]: A container runs a program and its supporting software in an isolated environment. Its configuration determines which files and connections it can access. See [Docker's introduction to containers](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/).

Containers can also preserve the software needed to reproduce an analysis. The toolkit's [container chapter](https://dss-agentic-toolkit.pages.dev/chapters/containers.html) covers these uses and their setup. Any environment processing protected data still needs to meet the requirements established in chapter 3.

## Have the agent configure and check access {#access-report}

You can direct this setup from the app. Give the agent your permitted files and services, then ask:

> Inspect the current settings and propose controls for the access I've described. Identify which settings files apply and where you propose to save each change. After I approve the changes, configure them and test permitted and blocked operations with harmless files. Check file tools, commands, and any connections this task uses. Report what worked, what failed, and anything you could not verify.

For example, the agent can check that an approved test file is readable, a protected test file cannot be changed, and an excluded test file cannot be read through either a file tool or a script. It should report the actual outcomes and leave failed restrictions in place for diagnosis, rather than bypassing them to complete the test. These checks can reveal mistakes; they do not establish protection for every possible action. If a required control is unavailable, ask your institution's support team for an appropriate environment.

Keep the settings and a brief record of the checks with the project. Repeat relevant checks when you add tools or change access. If a task needs broader access, have the agent explain what it needs and why before changing the settings. Also keep a recoverable version of the files it may edit, as described in [chapter 6](#project-recovery). Chapter 5 covers everyday settings once this access is established.

# 5. Choose settings for the task {#directing-work}

The app lets you choose whether the agent should plan before acting, how actions receive approval, and which LLM and reasoning effort to use. These choices help you give difficult work enough attention while letting routine tasks proceed with fewer interruptions.

Changing a figure label usually needs a direct instruction. Investigating why two analyses produce conflicting estimates may need a plan and more reasoning. Both tasks use the access controls from [chapter 4](#agent-access); changing a session setting does not replace those controls.

![](figures/session-settings.svg){#fig-session-settings fig-alt="An enlarged view of the Claude Code controls below the message box. Model selects the LLM, High is the shown reasoning effort, Auto is the shown permission mode, and the usage circle opens allowance and reset information. The four controls have separate purposes." above="6pt" below="6pt"}

::: {.pagebreak}
:::

## Decide whether to plan first

Use `Plan` mode when the task leaves important choices unresolved. Select it in [Claude Code](https://code.claude.com/docs/en/desktop), describe the intended result and constraints, and ask for the proposed approach before implementation. The plan should identify the files involved, questions that need your judgment, and checks of the completed work.

Read it for analytical assumptions as well as proposed steps. Has the agent chosen the correct input file? Will it preserve the intended sample? Does it propose replacing your statistical model with a simpler one? Resolve these questions before authorizing implementation and switching to an execution mode. For difficult work, another agent can critique the plan; [chapter 7](#review-project-plan) explains how to give that reviewer enough context.

When the goal and method are already clear, a direct instruction is usually enough. An agent can change specified labels and regenerate a figure without a separate planning round.

## Choose how actions are approved

A *permission mode* determines which actions can proceed without asking you. `Plan` and the execution modes appear in the same selector below the message box. For ordinary work, use `Auto` after configuring access, then review the results. Keep publishing and changes to access settings subject to a separate decision.

| Mode | How it handles the work |
|:-------------------|:-----------------------------------------------------------|
| `Plan` | Examines the project and proposes an approach before implementation. |
| `Auto` | Uses automatic checks to decide which actions may proceed. |
| `Accept edits` | Allows file edits and common file operations; other commands may need approval. |
| `Manual` | Usually asks before edits and commands, subject to existing permission rules. |

Available modes depend on your account and institutional settings. The [permission-mode reference](https://code.claude.com/docs/en/permission-modes) explains their current behavior. `Auto` retains permission checks; it does not grant unrestricted access. `Bypass permissions` removes most checks and is intended for separately isolated environments, rather than ordinary work on your computer.

::: {.pagebreak}
:::

## Choose the LLM and reasoning effort

The app's `Model` control selects the LLM. The effort control adjusts how much reasoning it uses. These are separate choices: you can use a capable LLM at lower effort for a well-specified task. Available LLMs and effort levels vary; the [model reference](https://code.claude.com/docs/en/model-config) describes the options.

Start consequential research work with a capable LLM and high effort, then reduce them for clearly specified, repetitive tasks. Diagnosing conflicting estimates may justify more reasoning than formatting figure labels. Higher effort can increase time and usage, however, and does not supply missing evidence or correct an unsuitable research specification. Check the result against the task regardless of the settings.

## Understand usage and context limits {#usage-and-context}

Reading context, reasoning, and generating responses consume LLM tokens, the pieces of text introduced in [chapter 1](#research-uses). Long inputs, extensive outputs, higher effort, and several agents working at once can use more of your allowance. The accounting depends on the LLM and your plan, so message count alone does not tell you how much remains.

Click the app's usage circle to see usage and reset information. If your account has both session and weekly limits, resetting the shorter allowance does not reset the weekly one. Check these before starting substantial work, along with any charges for extra usage. [Claude's usage guidance](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) explains the current arrangements.

Your usage allowance is separate from the context window, which limits how much information the LLM can work with at once. As a conversation grows, Claude Code automatically summarizes earlier material to make room for continued work, a process called *compaction*. The summary can omit details, including earlier instructions. Compaction does not reset your account’s usage allowance.[^context-compaction]

Keep consequential decisions and the current state of the work in project files that the agent can read again. This helps preserve an agreed sample definition or modeling choice when a conversation is compacted or a new session begins. [Chapter 7](#project-context) explains which records to maintain.

A saved analysis can run for hours without continuous LLM work. Repeated progress questions and large logs can still consume tokens. Have the agent run the saved computation, then check its completion and relevant outputs; [chapter 13](#unattended-jobs) explains how to manage longer jobs. The next chapter establishes the project files these tasks will use.

[^context-compaction]: Anthropic’s [context-window documentation](https://code.claude.com/docs/en/context-window) explains automatic compaction and the information retained or reloaded afterward.

<!-- ===================== PART II — DIRECT THE WORK ===================== -->

# 6. Organize your research projects {#project-organization}

An agent needs to find the right files before it can do useful work. A consistent project structure helps it locate the current analysis, preserve original inputs, and save results where you and your collaborators expect them. The same organization makes it easier to explain how a result was produced or return to an earlier version.

Suppose a paper has folders called `analysis-final/` and `analysis-new/`, plus three sets of figures. You may remember which files belong together; an agent needs that relationship made explicit. Establishing a clear structure helps whether you are starting a paper or introducing an agent to work already underway.

## Give projects a place in a workspace {#workspace-layout}

A *workspace* is a parent folder containing your projects. You might group papers together, keep shared datasets in a separate area, and give a lab website its own project folder. The arrangement should make sense for your work; the example below is one possible layout.

![](figures/project-organization.svg){#fig-project-organization .tall fig-alt="A workspace contains separate paper, data, and website projects. One paper folder is expanded to show original and processed inputs, analysis code, saved results, manuscript source, and project records." above="8pt" below="8pt"}

Keep independently maintained projects in separate folders and open the relevant one in the app. A short workspace index can record each project's purpose and location. If two papers use the same curated dataset, the index can show that relationship, while each paper records the data version it used. Chapter 8 explains how to make this index available across projects.

::: {.needspace height="9cm"}
:::

## Choose a structure suited to the project {#project-shapes}

Different outputs need different folders. A paper needs analysis results and manuscript source; a website needs editable pages and somewhere to build the site. Use consistent names for common purposes without forcing every project into the same layout.

| Project | What its structure needs to distinguish |
|---|---|
| Paper | Original inputs, analysis code, saved results, manuscript source, and research decisions. |
| Dataset | Acquisition code, source records, processing steps, and documented releases. |
| Website | Editable content, images and styles, and the generated site. |

Preserve original inputs and create derived files through saved code. Keep current figures and tables separate from exploratory outputs, with enough information to identify the analysis that produced them. The [starter layouts](#starter-layouts) give examples to adapt. The next chapter explains the instruction and record files shown in the diagram.

Paths in scripts should be relative to the *project root*, the folder containing the project. A script that reads `data/raw/births.csv` can work on a collaborator's computer even when their home folder has a different name. Ask the agent to use the project's existing way of locating that root. In [R](https://www.r-project.org/), the [here package](https://here.r-lib.org/) is one option. The later [modular-workflow chapter](#research-workflows) explains how to organize the analysis code itself.

## Keep a recoverable version {#project-recovery}

Use [Git](https://git-scm.com/) to retain versions of code, documentation, and suitable configuration files as the project develops. The agent can create these checkpoints and recover earlier work; you do not need to learn Git commands or inspect every line of code. Give a specific recovery request, such as restoring yesterday's sample-selection code while keeping today's manuscript edits. The toolkit explains [agent-maintained version control](https://dss-agentic-toolkit.pages.dev/chapters/version-control.html).

Before a substantial reorganization, also keep a recoverable copy outside the folder being changed. A dated copy is a workable starting point if you are not yet using version control. Git only preserves files and versions it records, and neither Git nor a synchronized folder replaces a backup. Keep restricted inputs and credentials out of Git history and use the project's approved storage for them.

If the project uses Dropbox or another synchronization service, retain that arrangement while asking the agent to check how it handles software libraries, caches, and Git's internal files. The toolkit covers those details; reorganizing a research folder need not become a change to the rest of your computer's setup.

## Start a new project {#scaffold-project}

A *project scaffold* is a starting set of folders and files suited to the intended output. Give the agent the project's purpose, deliverable, and any lab conventions, then ask it to create that structure. A scaffold can include initial project instructions and places to record decisions without pretending that the scientific choices have already been made.

<!-- prompt:scaffold-project -->
::: {#request-scaffold-project .prompt}
> Set up a project for the research described below. Use the existing workspace and lab conventions where available. Propose a structure suited to the deliverable, then create the agreed folders and initial records. Preserve existing files and list research decisions still needed from me.
:::
<!-- /prompt:scaffold-project -->

Review the proposed organization and the facts entered in the records. Unknown methods, collaborators, or input permissions should remain questions for you. Once a layout works well, a scaffold skill can reuse it for subsequent projects; [chapter 9](#reusable-procedures) develops that example.

## Organize an existing project {#restructure-project}

Keep a coherent lab layout if it already makes the work easy to find. For a confusing project, identify the manuscript and outputs you consider current, then ask the agent to inspect the files and propose a reorganization. Filenames and modification dates can help, but script references and your knowledge may be needed to distinguish competing versions.

<!-- prompt:restructure-project -->
::: {#request-restructure-project .prompt}
> Inspect this project and propose a clearer structure. Identify current and uncertain files before moving anything. After I approve the plan, make a recovery copy, reorganize the files, update affected paths, and save an old-to-new file map. Preserve original inputs and check that the affected outputs still reproduce.
:::
<!-- /prompt:restructure-project -->

Have the agent retain original inputs and uncertain duplicates, record old and new paths, and update references in scripts and documents. It should rerun the affected work and compare the results with the saved baseline. Keep the recovery copy until those checks succeed and unresolved files have been explained.

Coauthors can continue sending files in their preferred format. An incoming folder can preserve what arrived while the agent records how each contribution fits into the organized project. The next step is to give it the knowledge needed to work within that structure.

# 7. Give the agent context for your project {#project-context}

An agent joining a research project needs to know what you are trying to establish, which files to use, and which decisions have already been made. Saving that knowledge in the project lets it begin useful work without repeatedly asking you to reconstruct the study. The records also help you and your collaborators understand changes made along the way.

In the [synthetic heat-and-birthweight example](#example-project), suppose the main analysis is complete but a sensitivity analysis remains unfinished. An agent asked to update a caption needs to identify the current results. If it later changes the analysis, it also needs the agreed sample definition and the reasons for earlier modeling choices.

## Explain the project and the current task {#project-orientation}

Describe the research question, the relevant data and outputs, and the result you want from this task. Point the agent to the current files and explain which decisions need your involvement. For a new project, identify what remains undecided. For an existing one, supply the information that cannot reliably be inferred from its scripts and filenames.

Conversation details can be lost during [compaction](#usage-and-context) or be unavailable in a new session. Have the agent save agreed decisions and the current state of the work in files it can read again. It should also record unresolved questions, so an assumption does not become an apparent fact when the next session begins.

![](figures/project-context.svg){#fig-project-context .tall fig-alt="An agent session reads project instructions, status, tasks, and methodological decisions. After doing and checking the work, it updates those records. A later session reads the updated files before continuing." above="8pt" below="8pt"}

## Save instructions and project records {#project-records}

In [Claude Code](https://code.claude.com/docs/en/overview), a project-level `CLAUDE.md` supplies instructions at the start of a session.[^project-instructions] Keep it short: explain the project, identify the important files, and tell the agent when to consult them. Detailed plans, results, and decision histories can remain in separate files.

::: {.needspace height="9cm"}
:::

| File | Purpose and example |
|---|---|
| `CLAUDE.md` | Project instructions: follow the scientific specification and read the current status before starting. |
| `STATUS.md` | Current state: the main analysis is complete; the sensitivity analysis is pending. |
| `TASKS.md` | Work to do and completed work: update Figure 2's labels, with a dated entry after checking the result. |
| `METHODOLOGY.md` | Research decisions and reasons: which records were excluded and why. |
| `README.md` | A collaborator's introduction: what the project contains and how to reproduce its outputs. |

These record names are conventions, not special commands. Tell the agent which files to read and maintain. Begin with the instructions and the records your project needs; a larger study may also use a separate analysis plan or scientific specification.

<!-- prompt:project-context -->
::: {#request-project-context .prompt}
> Read this project and draft concise instructions for future sessions. Identify its purpose, current files, agreed research decisions, and unresolved questions. Link to detailed records and include instructions to keep them current. Preserve existing authored guidance and show me the proposed changes.
:::
<!-- /prompt:project-context -->

A useful instruction identifies both the record and its purpose:

```
Before starting, read STATUS.md and TASKS.md and inspect the relevant files.
Follow specification.md for the estimands, estimator, and sample rules.
After working, update the status and tasks from the outputs actually checked.
Record scientific decisions and their reasons in METHODOLOGY.md.
```

The [complete project example](#starter-project) is also available as a download. Adapt its research details before using it.

[Download project instructions](resources/starter-files/project-AGENTS.md){.download-button download="CLAUDE.md"}

::: {.web-only}
<details class="guide-example">
<summary>Read the complete project instructions</summary>

<!-- starter:project -->
```
# heat-birthweight

Synthetic teaching study of heat exposure and birthweight. Every individual
record is synthetic; results are not evidence about actual pregnancies.

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

## Maintain the records
- Read STATUS.md and TASKS.md before starting; check relevant project files.
- Update the task list as work starts, finishes, or becomes blocked.
- Keep STATUS.md a short account of the current state, not a running history.
- Record scientific decisions and their reasons in METHODOLOGY.md.
- Keep unfinished work, failed checks, and unresolved questions explicit.

## Access
Only approved synthetic material belongs in this project. No protected birth
records are available here. Ask before adding external services or publishing.
These instructions do not enforce file or network permissions; use the
configured access controls for those boundaries.
```
<!-- /starter:project -->

</details>
:::

[^project-instructions]: See Anthropic's [instruction-file documentation](https://code.claude.com/docs/en/memory#claudemd-files). If a lab maintains agent-neutral instructions in AGENTS.md, ask the agent to configure that maintained copy for the installed app. The [AGENTS.md documentation](https://code.claude.com/docs/en/memory#agentsmd) explains direct loading and import options. Avoid two independently edited copies of the same instructions.

## Record plans and research decisions {#review-project-plan}

When a task needs a plan, distinguish the scientific decisions from the agent's proposed implementation. You may already have settled the estimand, sample, and estimator; the agent still needs to work out which scripts to change and which checks to run. Give it the research question and relevant supporting material, and have it identify unresolved choices before implementation.

For difficult work, ask one or two fresh agent sessions to critique the proposed plan. Give them the research question, constraints, and supporting evidence as well as the plan itself. They can look for questionable assumptions, missing steps, and alternative approaches. Use your judgment and the evidence to resolve their suggestions; agreement between agents does not establish that a method is appropriate.

Have the agent save the accepted plan and record consequential research decisions with their reasons. If a decision changes, preserve the earlier reasoning and add the new decision. The project record should explain why the work changed, rather than leaving a later reader to infer the reason from altered code. The later chapters on [simulation](#simulation) and [independent implementations](#checking-analysis) explain how to check the resulting analysis.

## Keep the records current {#maintain-project-context}

Make record maintenance a standing instruction. The agent should read the current records before starting, track the assigned work, and update the affected files after checking its outputs. You can then direct the research and review the results without issuing the same bookkeeping request every session.

For example, after correcting a figure's labels, the task list gets a dated completion entry and the status file identifies the rebuilt figure. If no model was refitted, the record should not imply that the analysis was rerun. Scientific decisions belong in the methods record; a completed formatting task does not need an entry there.

The following requests can establish the routine or recover it when a session has lost track of the work.

<!-- prompt:resume-project -->
::: {#request-resume-project .prompt}
> Read the project instructions, STATUS.md, and TASKS.md, then inspect the files relevant to the next task. Summarize the current work, flag any disagreement between the records and the files, and identify the next action.
:::
<!-- /prompt:resume-project -->

<!-- prompt:close-session -->
::: {#request-close-session .prompt}
> Update the task list and current status from the work and outputs actually checked. Record scientific decisions and their reasons in METHODOLOGY.md. Leave unfinished work and failures explicit, with enough information for the next session to continue.
:::
<!-- /prompt:close-session -->

Keep the status file short and current, with detailed history in the appropriate records. Have the agent consult those records when relevant rather than loading every past result into every task. If you edit a file during a session, tell the agent to read it again before continuing. A fresh conversation can still load saved information; [chapter 16](#control-what-each-reviewer-or-judge-receives) explains how to control what it receives.[^project-auto-memory]

[^project-auto-memory]: Claude Code’s [auto memory](https://code.claude.com/docs/en/memory#auto-memory) lets the agent retain notes. Ask it to correct outdated notes, and keep important research decisions in the maintained project files.

# 8. Apply your conventions across projects {#shared-conventions}

You should not have to explain the same coding, modeling, or writing preferences whenever you begin a project. Shared instructions let the agent reuse those conventions while keeping each study's question, data, and decisions in its own records. Corrections made during one project can then improve work on the next.

For example, you might require uncertainty alongside estimates and full-precision results saved before rounding. Those rules can apply to many papers. The particular heat-exposure contrast and analysis sample in the [birthweight example](#example-project) belong in that project's specification.

## Decide which conventions apply across projects {#shared-instructions}

Save instructions that describe a recurring way of working. “Preserve the existing software environment and explain any required package change” is more useful than “be reproducible.” A good shared instruction tells the agent what to do in a recognizable situation. It should leave study-specific choices to the project.

Shared instructions can also point to reference information, such as the software already installed or the locations of related projects. Keeping an inventory is different from prescribing a rule, but both can prevent the agent from making unnecessary guesses.

![](figures/shared-conventions.svg){#fig-shared-conventions .tall fig-alt="One maintained set of personal instructions directs the agent to writing, coding, modeling, and other shared guidance. Several projects use it while keeping their own data, specifications, status, and decisions." above="8pt" below="8pt"}

::: {.needspace height="12cm"}
:::

## Organize detailed guidance by subject {#specialist-conventions}

A short main instruction file can point to more detailed files. Give each one a clear purpose and say when the agent should read it. The following examples cover common research needs; add the files that are useful to your work.

| File | When to consult it | Example content |
|---|---|---|
| `CONVENTIONS.md` | Creating or organizing a project. | Folder layouts for papers, datasets, and websites; names for inputs and outputs. |
| `CODING.md` | Writing or changing code. | Use project-relative paths, reusable functions, and the existing package environment. |
| `MODELING.md` | Planning, fitting, or checking statistical models. | Specify the estimand; use the required simulation checks and uncertainty summaries. |
| `WRITING.md` | Drafting or editing prose. | State the point directly, define unfamiliar terms, and remove repeated explanations. |
| `TOOLCHAIN.md` | Adding or troubleshooting software. | Available tools, their configurations, and how they are maintained. |
| `WORKSPACE.md` | Finding a project or shared input. | Project purposes, folder locations, and dependencies between projects. |

Start with the conventions you repeatedly explain. Separate a topic when its detail makes the main file hard to read. For instance, a manuscript edit needs the writing guidance but may not need several pages of statistical conventions. These filenames do not cause the agent to load their contents automatically; the main instructions must point to them.

## Have the agent create and use shared instructions {#configure-shared-instructions}

In [Claude Code](https://code.claude.com/docs/en/overview), personal instructions can live in `~/.claude/CLAUDE.md`, outside individual project folders. Here, `~` means your home folder. Ask the agent to create or update the file from the app, using the practices you describe or examples of work you have accepted.[^shared-instruction-location]

<!-- prompt:shared-conventions -->
::: {#request-shared-conventions .prompt}
> Review these instructions and examples for conventions that apply across projects. Propose a short personal instruction file with references to any useful specialist files. Keep this study's decisions in its project records. Show proposed changes and conflicts, then apply the agreed guidance to the next task.
:::
<!-- /prompt:shared-conventions -->

The main file should connect each task to the relevant guidance. For example:

```
Before editing code, read CODING.md beside this file.
Before statistical modeling or simulation, read MODELING.md.
Before drafting prose, read WRITING.md.
Read each project's own instructions for its scientific decisions and files.
```

The [complete shared example](#starter-global) provides a starting point. Ask the agent to adapt it to your work and then apply the relevant guidance during the next real task. You can assess whether a paragraph follows your writing conventions or whether an analysis used the existing software environment. A file's presence alone does not show that the agent used it.

[Download shared instructions](resources/starter-files/global-AGENTS.md){.download-button download="CLAUDE.md"}

::: {.web-only}
<details class="guide-example">
<summary>Read the complete shared instructions</summary>

<!-- starter:global -->
```
# Working conventions

[Describe your research role and the software you normally use.]

## Before a task
- Read the project's instructions and current state. Preserve accepted work.
- Identify the requested result, constraints, and evidence needed to accept it.
- Ask about consequential ambiguity; do not silently substitute another analysis.

## Conventions
[Keep short shared conventions here. Add references only to files you maintain,
with their locations and when to read them. Possible topics include project
structure, coding, statistical modeling, writing, software, and project locations.]

Read the referenced guidance relevant to the task. If a listed file is missing,
report it; do not create a replacement or invent its instructions.

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

</details>
:::

[^shared-instruction-location]: Anthropic's [instruction locations](https://code.claude.com/docs/en/memory#choose-where-to-put-claudemd-files) distinguish personal and project files.

## Maintain and share the conventions {#maintain-shared-conventions}

When the same correction recurs, ask the agent to update the relevant shared guidance. For example, repeated rounding of saved model estimates can become an instruction to save full precision and round only for display. Review the proposed rule to make sure it applies beyond the current paper.

A lab can maintain shared files in a repository and make a local copy available to each member's agent. Have the agent configure the references and report conflicting instructions. A shared folder is useful only if sessions know when to read its contents.

Record a paper-specific exception in that project's files, with its reason. A new lab default should not silently change a completed analysis. Keep one maintained copy of each shared rule, and use the toolkit's [settings-management chapter](https://dss-agentic-toolkit.pages.dev/chapters/shared-settings.html) if you need to keep those files consistent across computers.

# 9. Use skills for recurring tasks {#reusable-procedures}

Many research tasks recur with different inputs: setting up a paper, checking citations, or preparing figures for a manuscript. A *skill* saves instructions for an agent to carry out a task, including the checks that make its result useful. It can preserve lessons from earlier work and reduce the need to explain the same steps again.

Consider the [project scaffold](#scaffold-project) from chapter 6. Once you have a suitable paper layout, a skill can direct the agent to create it for another study, draft the initial records, and identify missing information. You supply the new project's purpose; the skill supplies the setup instructions.

## What a skill adds {#what-skills-add}

A skill is a folder containing a file called `SKILL.md`. It can also contain scripts, reference material, or templates. The agent reads the instructions and uses its tools to carry them out. A saved script specifies operations for a computer to execute; a skill can guide work that requires the agent to inspect inputs, choose suitable steps, or ask for a decision.

![](figures/reusable-skills.svg){#fig-reusable-skills .tall fig-alt="A new-project request and the project's context join a reusable skill containing instructions and an optional template or script. The agent uses these to create the project, check its files, and report unresolved decisions." above="8pt" below="8pt"}

Project files provide facts about this study, shared files provide working conventions, and a skill describes how to carry out a recurring task. Have the skill consult those files rather than copying their contents. That lets you change a convention once without updating every skill that uses it.

| Recurring task | What a skill can preserve |
|---|---|
| Set up a project | Choose a suitable layout, create initial records, and identify missing decisions. |
| Search the literature | Record queries, verify DOI metadata, and separate checked sources from leads. |
| Explore a dataset | Examine variables and missingness, save the report, and flag questions for the researcher. |
| Check a manuscript's numbers | Trace values to saved results and report inconsistencies in the rendered document. |

These are examples of tasks to package, not a list of skills already installed. A skill can make the steps more consistent, but its instructions still require interpretation and do not guarantee identical outputs.

## Use an existing skill {#use-existing-skill}

Before creating a skill, ask the agent whether an installed skill or a maintained collection already covers the task. Your lab may have one suited to its research. Have the agent inspect its instructions and supporting files, explain the expected inputs and changes, and adapt anything that conflicts with your project. Try it on the next suitable task and review the resulting work.

In [Claude Code](https://code.claude.com/docs/en/overview), you can invoke an available skill with `/skill-name` or ask for it by name. The agent may also choose a relevant skill based on its description; the full instructions load when the skill is used.[^skill-use] Ask the agent to retain the source and version of an adopted skill so later changes can be understood.

[^skill-use]: Anthropic's [skills documentation](https://code.claude.com/docs/en/skills) explains invocation, supporting files, and when skill content loads. The description helps the agent select a skill; it is not a guarantee that it will choose or follow it correctly.

## Turn a useful task into a skill {#create-research-skill}

When a task has worked well and is likely to recur, ask the agent to save the instructions that made it work. Include what the task receives, what it should produce, how to check the result, and which decisions remain yours. A scaffold skill should ask for a project's purpose and destination, use the appropriate layout, and leave unresolved methods as questions.

<!-- prompt:scaffold-skill -->
::: {#request-scaffold-skill .prompt}
> Turn the project setup we have agreed into a reusable skill. Have it ask for the new project's purpose and destination, follow the relevant layout conventions, preserve existing files, and leave missing research decisions as questions. Include checks of the created folders and records. Try it on a new project folder and report the result.
:::
<!-- /prompt:scaffold-skill -->

The start of a scaffold skill might look like this:

```
---
name: research-scaffold
description: Set up a new research project using the agreed workspace
  and layout conventions. Use when asked to create a project.
---

Read the workspace index and project-layout conventions if available.
Confirm the project's purpose, deliverable, and destination.
Propose the folder structure before creating it. Preserve existing files.
```

The header names the skill and describes when to use it. The body gives the steps; the complete example adds instructions for drafting and checking the project records. It is a starting template to adapt, not evidence that a particular project setup has been tested.

[Download the scaffold skill example](resources/skills/research-scaffold/SKILL.md){.download-button download="SKILL.md"}

::: {.web-only}
<details class="guide-example">
<summary>Read the complete scaffold skill example</summary>

<!-- starter:scaffold-skill -->
```
---
name: research-scaffold
description: Set up a new research project using the agreed workspace
  and layout conventions. Use when asked to create a project.
---

Read the workspace index and project-layout conventions if available.
Confirm the project's purpose, deliverable, and destination.
Propose the folder structure before creating it. Preserve existing files.

After the researcher accepts the structure:
- Create only the folders needed for the intended output.
- Draft project instructions that point to the relevant files and conventions.
- Add status and task records appropriate to the work already agreed.
- Record unresolved research decisions as questions, not assumed facts.
- Put detailed decisions and their reasons in a separate methods record.

Check the result:
- Confirm that the created paths match the accepted structure.
- Check that the instructions refer to files that exist, or clearly identify
  files still to be supplied or created.
- Confirm that existing files were preserved.
- Show the folder structure, the initial records, and unresolved decisions.

Ask before changing an existing project or adding software or services.
Do not acquire data, fit models, or publish files as part of this setup.
```
<!-- /starter:scaffold-skill -->

</details>
:::

Ask the agent to place the skill in its supported location: personal Claude Code skills use `~/.claude/skills/`, while project-specific skills use `.claude/skills/` inside the project.[^skill-location] Each skill has its own folder containing `SKILL.md`. Supporting templates or scripts belong beside it, with instructions explaining when to use them.

[^skill-location]: See Anthropic's [skill locations](https://code.claude.com/docs/en/skills#choose-where-skills-load). A shared project skill can be versioned with suitable project files; personal skills apply across projects.

## Refine and reuse the skill {#refine-skills}

Have the agent use the skill on a representative task before relying on it repeatedly. For project setup, check that the folders match the intended output, the initial records contain known facts, and existing files remain intact. If it omits a required step or makes an unwanted assumption, ask it to revise the instructions or checks and try the affected part again.

Keep the main instructions readable and move lengthy templates or reference material into supporting files. A step that always performs the same calculation can become a saved script that the skill calls. Preserve the skill's changes so you can identify which version was used for consequential work.

<details class="guide-example">
<summary>Optional: automate a repeated check with a hook</summary>

A *hook* runs a configured action at a particular event, such as after a file edit. It can automate a quick check that is otherwise often missed. Begin with checks requested through the agent, then add a hook when there is a clear recurring need. Avoid launching a full analysis after every small edit. Whether a hook can prevent an action depends on its timing and configuration; the [official hooks documentation](https://code.claude.com/docs/en/hooks) explains setup and testing.

</details>

<!-- ===================== PART III — DO THE RESEARCH ===================== -->


# 10. The example research project {#example-project}

How does heat exposure relate to birthweight, and does that relationship vary with maternal age? This question connects the following chapters. An agent can help develop it, examine the evidence, and build an analysis whose results can be checked and reproduced.

The example uses 1,200 fully synthetic birth records. Their relationships are deliberately constructed to make particular checks possible. The estimates are teaching results, not evidence about actual pregnancies. You can inspect the saved files without installing additional software.

[Download the complete synthetic research project](resources/heat-birthweight.zip){.download-button download="heat-birthweight.zip"}

Chapters 11–15 follow the example through literature, data, modular analysis, simulation, and independent implementation. Continue to [chapter 18](#research-writing) for writing and [chapter 19](#research-handoff) for reproduction and handoff. Chapters [16](#llm-measurements) and [17](#research-models) provide an additional route when LLM outputs become research data or you need to run or adapt an LLM yourself.

## Develop the research question

An agent can help turn a broad interest into a question that the available evidence and data can address. For this project, ask it to compare studying mean birthweight with studying low birthweight, or a trimester-wide exposure with a shorter heat episode. Have it explain what each choice would require and identify evidence that challenges the proposed approach. The literature search in [chapter 11](#literature) supplies sources for that discussion.

These are research decisions, not details for the agent to settle while coding. A different outcome or exposure window may answer a different question. You decide which question to pursue; the agent can make the alternatives, assumptions, and unresolved issues easier to examine.

<!-- prompt:compare-research-approaches -->
::: {#request-compare-research-approaches .prompt}
> Using the research question, available data, and constraints below, compare plausible approaches. Explain what each would estimate, the assumptions it requires, and what evidence supports or challenges it. Separate verified sources from suggestions to investigate. Identify decisions needed from me before turning the chosen approach into an analysis specification.
:::
<!-- /prompt:compare-research-approaches -->

## Write the scientific specification {#example-specification}

The example records maternal age, smoking status, third-trimester hot days, and birthweight in grams. Its specification separates the quantity to report from the statistical model used to estimate it.

::: {.needspace height="10cm"}
:::

| Item | Specification |
|---|---|
| Question | What is the mean birthweight difference between 10 and 5 hot days, and how does it vary with maternal age? |
| Primary estimand | The 10-minus-5-day mean difference, standardized over this synthetic sample's age and smoking distribution. |
| Secondary estimands | The same contrast at maternal ages 22, 28, and 36, using the sample's smoking distribution. |
| Estimator | Least squares with quadratic age, a hot-days-by-age interaction, and smoking; counterfactual predictions supply the contrasts. |
| Uncertainty | 95% confidence intervals from an HC3 heteroskedasticity-robust covariance estimate and a normal reference distribution. |
| Outputs | A contrast table and figure, simulation results, an independent comparison, and a manuscript passage. |

The exposure coefficient alone does not supply the requested average contrast when exposure interacts with age. Specifying the estimand prevents an agent from silently reporting that coefficient instead.

A real study would also need a target population and defensible assumptions about confounding, measurement, selection, and support for the exposure comparison. The synthetic generator cannot establish those assumptions for observed births, and the example's contrast is not automatically a population-average causal effect.

<!-- prompt:research-specification -->
::: {#request-research-specification .prompt}
> Write specification.md from my research decisions: estimands, population or averaging sample, comparisons, estimator, sample rules, inputs, uncertainty, and outputs. Include agreed checks and tolerances. Flag unresolved choices for my review before fitting.
:::
<!-- /prompt:research-specification -->

## Keep the project files together

The download follows the organization introduced in [chapter 6](#project-organization). It contains the original synthetic records and dictionary, their generator, independent [R](https://www.r-project.org/) and [Python](https://www.python.org/) implementations, saved results, software records, and verification reports. Its README distinguishes completed checks from restoration work still to test.

Maintain the agreed analysis in `specification.md`. Use `METHODOLOGY.md` to record decisions and their reasons, including revisions to that specification. The example's simulation plan defines separate worlds with known relationships; [chapter 14](#simulation) uses them to assess the estimator. Keeping the plan, code, and results together lets another person distinguish a planned check from an explanation added after seeing the answer.

## Follow the work, including its revisions

Research rarely proceeds once through a fixed sequence. A literature finding may change the exposure definition; a data limitation may narrow the question. Failed checks can reveal a coding error or an inadequate method. Writing can expose a claim the analysis has not addressed.

![](figures/research-process.svg){#fig-research-process .tall fig-alt="A research question leads through literature and data to analysis, checks, writing, and handoff. Labeled return paths show evidence and data changing the specification, failed checks returning to analysis, and manuscript questions prompting further analysis."}

The agent can investigate these problems and propose responses. Before changing the scientific approach, agree what should change and record why. Preserve the earlier specification and results so that the revision can be understood.

# 11. Find and assess research literature {#literature}

An agent can help find evidence, compare explanations, and identify gaps in a proposed study. Its synthesis is useful only if you can locate the sources and check what they support.

For the [heat-and-birthweight project](#example-project), a study of low birthweight may not answer a question about mean birthweight. Exposure windows and populations differ too. Ask the agent to make those differences explicit, including evidence that conflicts with the proposed explanation.

## Match the search to the question {#literature-protocol}

For background reading, give the agent the question and ask for a small set of relevant sources and competing explanations. A focused synthesis needs clearer inclusion criteria and a record of coverage. A systematic review needs a protocol and a search designed for completeness; involve an information specialist when that completeness supports the claim. A limited discovery search should not be described as systematic.

An early search can help refine the research question. For example, have the agent compare how studies define heat exposure and which birth outcomes they report. Ask what evidence would favor one approach over another, and where the literature leaves the choice unresolved. Review those findings before updating the specification.

Name the sources searched. [PubMed](https://pubmed.ncbi.nlm.nih.gov/) is relevant to this example; [OpenAlex](https://openalex.org/) supports broader discovery, and [Crossref](https://www.crossref.org/) can verify DOI metadata. Institutional access determines which subscription databases and full texts are available.

<!-- prompt:literature-search -->
::: {#request-literature-search .prompt}
> Search for research relevant to the question and criteria in our specification. Record the sources searched, exact queries, dates, and screening decisions. Verify each journal article’s DOI against publisher or registry metadata, including title, authors, and year; flag mismatches and works without a DOI rather than inventing one. Save verified references separately from leads, and distinguish abstracts from full texts you actually read.
:::
<!-- /prompt:literature-search -->

For a substantial search, preserve queries and dates, unmodified results, duplicate decisions, screening reasons, and unresolved records. Save references in a reusable format such as BibTeX or RIS. Ask the agent to report coverage gaps and unexpected search growth rather than quietly truncating results at an arbitrary cap.

## Find sources and verify their identity {#verify-citations}

Require a verified DOI for each journal article when one exists. Resolve it and compare title, authors, year, and publication against publisher or registry metadata. For legitimate work without a DOI, verify an alternative such as a PMID, arXiv identifier, or stable publisher record. A failed lookup needs investigation: a real paper registered with [DataCite](https://datacite.org/) can be missed by a verifier that checks only Crossref.

For example, [10.1136/bmj.m3811](https://doi.org/10.1136/bmj.m3811) identifies Chersich and colleagues' 2020 systematic review of high temperatures in pregnancy and birth outcomes. The verified citation establishes which paper was found. Reading it establishes what it supports.

![](figures/literature-evidence.svg){#fig-literature-evidence fig-alt="Search results pass through identity verification and reading before supporting a research claim. Unresolved records remain visible, and conflicting findings are retained in the synthesis."}

Keep leads separate from sources ready to cite. Record whether the agent read a title, an abstract, or the full text, and check for corrections, retractions, and duplicate preprint/published versions. Missing extraction information means “not yet established,” not necessarily “not reported.”

## Assess what the evidence supports {#literature-synthesis}

Have the agent connect each proposed claim to a passage, table, or figure. A small evidence table makes unsupported inferences easier to spot. These examples come from the Chersich review's abstract and full-text results; they are not a new literature search.[^chersich-evidence]

| Proposed claim | Source location and finding | Use in this project |
|---|---|---|
| Higher temperatures have been associated with lower birthweight. | Abstract, Results: 18 of 28 birthweight studies reported a reduction; results varied considerably. | Motivate the question while retaining the variation across studies. |
| Heat-related birth outcomes can be treated as one interchangeable measure. | Results distinguish preterm birth, birthweight, and stillbirth. | Do not substitute an association for another outcome for a mean birthweight contrast. |

[^chersich-evidence]: Chersich et al. (2020), [“Associations between high temperatures in pregnancy and risk of preterm birth, low birth weight, and stillbirths”](https://pmc.ncbi.nlm.nih.gov/articles/PMC7610201/), *The BMJ* 371:m3811. The review supports the general motivation; it does not establish the synthetic example's age relationship or 10-minus-5-day contrast.

<!-- prompt:literature-synthesis -->
::: {#request-literature-synthesis .prompt}
> Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.
:::
<!-- /prompt:literature-synthesis -->

Use the table to compare findings rather than force agreement. Ask whether different populations, exposure definitions, outcomes, or designs might explain a conflict, and which explanations the papers actually support. Check the sources you will cite and the passages central to the argument. For a screened search, also review borderline exclusions and reconcile retrieved, duplicate, excluded, unresolved, and included counts.

## Reuse the task as a skill {#literature-skill}

Finding sources, verifying citations, and preserving claim support recur across projects. A skill can supply those instructions while the current project supplies its question and criteria. The DSS `litsearch` skill packages this process; [chapter 9](#reusable-procedures) explains how to inspect and adapt a skill.

<!-- RELEASE: add the verified public DSS litsearch repository link before publication; the current repository is private. -->

An [earlier recorded search](resources/literature-search-example.md) illustrates the saved counts and reading limitations for a peer-review-duration project. It is available as a reference, separate from the heat-and-birthweight example.

# 12. Bring data into the project {#data-acquisition}

An agent needs the intended research inputs and enough documentation to use them correctly. Whether files arrive from a collaborator, already sit on disk, or must be collected, establish what they contain and preserve where they came from.

The [example project](#example-project) starts with a synthetic birth-record file and its generator. Before transforming it, the agent should check its identity, variables, and declared properties. The same process would expose a collaborator's outdated extract or a website download with changed units.

## Identify and check the inputs {#identify-inputs}

Give the agent the specification and available documentation. Ask it to compare the actual files with the required observation unit, dates, variables, units, and identifiers. For received files, record who supplied them and which release they represent. For existing files, use the evidence available and leave unknown provenance explicit.

<!-- prompt:bring-data -->
::: {#request-bring-data .prompt}
> Inspect the approved inputs and documentation. Record each source, version or acquisition date, permitted use, and file fingerprint. Preserve the originals. Write checks for the columns, keys, units, ranges, and missingness rules in specification.md; report discrepancies before transforming or excluding records. Do not substitute synthetic observations for missing research inputs.
:::
<!-- /prompt:bring-data -->

The example declares 1,200 unique identifiers, maternal ages from 18 to 40, hot-day counts from 0 to 20, a binary smoking indicator, and positive birthweight. Its checks should stop with a useful explanation if those conditions fail. An empirical project needs rules derived from its own documentation, not the example's ranges.

A *checksum* is a digital fingerprint computed from a file's contents. Recording one lets the agent detect a later change to that file. It does not establish that the data are correct, and two differently formatted exports can contain the same observations but have different checksums.

## Acquire web data through a repeatable route {#acquisition-ladder}

For web-based data, choose the first suitable, permitted route in this sequence. Start by looking for a structured source before asking an agent to click through pages.

![](figures/data-acquisition-ladder.svg){#fig-data-acquisition-ladder fig-alt="Use a documented API or structured download when available, then static-page parsing, then scripted browser interaction. Agent-interactive browsing helps with exploration or small tasks when those routes do not fit."}

A documented API, bulk download, or CSV export usually leaves a clearer collection record than interpreting a displayed page. If the data are in the page's HTML, a script can save and parse that response. Use a scripted browser when content genuinely requires interaction; where permitted, it can capture the structured responses behind the display.

An interactive agent browser helps explore an unfamiliar site or complete a small task requiring visual judgment. Once a repeated acquisition is understood, have the agent preserve it as a script with saved inputs and responses. The toolkit's [browser chapter](https://dss-agentic-toolkit.pages.dev/chapters/browser-work.html) covers the tools.

Check terms, access requirements, and request limits before collecting. A visible endpoint is not automatically an authorized route. Use approved access, and keep keys out of collection scripts and saved requests; the toolkit explains [credentials](https://dss-agentic-toolkit.pages.dev/chapters/credentials.html). Apply the data-use decisions in [chapter 3](#data-chain-of-custody) to collection as well as analysis.

## Preserve originals and their provenance {#data-provenance}

Save responses and supplied files unchanged. Write cleaned and derived data separately so a parsing error can be corrected without repeating collection. Preserve a new release alongside the earlier one when both support reported work.

| Record | Synthetic example |
|---|---|
| Origin | Synthetic records; no observed pregnancies. |
| Original | `data/raw/births.csv`, unchanged after generation. |
| Reconstruction | Generator, seed, and [R](https://www.r-project.org/) version. |
| Identity | Checksum recorded when the file is created. |
| Meaning | Variable dictionary and analysis specification. |
| Derivatives | Scripted transformations saved separately from the original. |

For empirical data, record the source address or supplier, release or extract identifier, request, acquisition date, and restrictions on use and redistribution. Have the agent write that record when it saves the file. Protecting originals against edits does not prevent their disclosure; retain the [chain of custody](#data-chain-of-custody) for them and their protected derivatives.

## Repeat collection without repeating unnecessary work

Have collection code respect request limits, save raw responses, and record progress. It should reuse completed downloads and resume interrupted work. A failed request belongs in a failure record; it must not become a row of guessed values or disappear as though nothing was expected.

For a new collection pipeline, ask the agent to process a few representative requests before starting the full batch. This *smoke test* checks that acquisition, parsing, and saving work together. Preserve failures and retry counts during the batch, then compare the received coverage with what was requested. A successful test does not establish complete coverage or permission to redistribute the result.

# 13. Build a modular analysis workflow {#research-workflows}

Research analyses change repeatedly. Separating the work into independently runnable steps lets an agent revise one part without rerunning everything. Saved inputs and outputs also make errors easier to locate.

In the [birthweight project](#example-project), changing a figure label should redraw from saved contrasts. Changing an approved sample rule requires rebuilding the sample, refitting the statistical model, and updating contrasts, figures, and manuscript checks. A modular workflow makes that difference explicit.

![](figures/selective-workflows.svg){#fig-selective-workflows fig-alt="Fifteen small analysis files and one small recipes file support two routes: redraw a figure from saved contrasts, or rerun all affected steps after an approved sample change."}

## Make research steps independently runnable {#modular-steps}

Separate coherent operations with explicit inputs and saved outputs. Reuse common functions. Each step should run from recorded inputs rather than objects left in an interactive session.

| Step | Reads | Saves |
|---|---|---|
| Prepare the sample | Original records and agreed sample rules | Derived data, identifiers, and checks. |
| Fit the statistical model | Analysis file and specification | Fit, settings, and diagnostics. |
| Calculate contrasts | Fit and defined comparisons | Full-precision estimates and uncertainty. |
| Draw the figure | Saved contrasts and figure instructions | Plotting data and rendered figure. |
| Check the manuscript | Selected results and manuscript source | Comparison report and discrepancies. |

Modularity does not require a particular number of files or abandoning an IDE. Two related operations may share a script; a function may serve several analyses. What matters is that the needed step can run on its own with its dependencies supplied.

## Build or revise the workflow {#build-modular-workflow}

For a new project, have the agent implement the specification in this structure. For an existing analysis, preserve a baseline, separate the operations, and compare samples and results before making scientific changes. Moving code should not quietly change a missing-value rule or statistical option.

<!-- prompt:modular-workflow -->
::: {#request-modular-workflow .prompt}
> Review the current analysis and propose coherent steps with explicit inputs and saved outputs. Preserve its scientific behavior while separating expensive fits from contrasts, figures, and reporting. Reuse shared functions, and keep adequate existing runners. Provide commands for individual steps and useful combinations, then compare the refactored outputs with the accepted baseline. Report any scientific difference instead of silently treating it as a refactor.
:::
<!-- /prompt:modular-workflow -->

The agent can also help investigate a surprising result. Suppose the age-specific heat contrasts change sharply near the edge of the sample. Ask it to examine exposure support, influential observations, prediction calculations, and the fitted age relationship, then explain which findings warrant further work. This is a proposed investigation, not a finding from the example's saved run.

If the evidence suggests the linear heat-by-age interaction is too restrictive, you might approve a more flexible interaction as a sensitivity analysis. Preserve the original fit, state the reason for the alternative, and compare the same estimands. Have the agent update the relevant simulation and implementation checks and record the decision in `METHODOLOGY.md`. The purpose is to understand the result's dependence on a defensible choice, not search for a preferred estimate.

<!-- prompt:investigate-result -->
::: {#request-investigate-result .prompt}
> Investigate the unexpected result identified below using the current specification, code, and saved outputs. Examine possible input, implementation, and statistical explanations, and report the evidence for each. Preserve the original analysis. Propose any justified sensitivity analysis for my decision; after approval, compare the same estimands and record the changes and reasons.
:::
<!-- /prompt:investigate-result -->

## Save commands for useful routes {#saved-commands}

A command file lets you or the agent request individual steps or useful sequences. Preserve adequate existing tooling.

| Capability | What it adds |
|---|---|
| Modular analysis code | Allows a figure to be redrawn without refitting. |
| Named commands, for example [`just`](https://just.systems/) recipes | Provides a consistent command for a figure, analysis, or useful sequence. |
| Dependencies, tracked by [`targets`](https://docs.ropensci.org/targets/) or [Snakemake](https://snakemake.readthedocs.io/) | Determines which outputs must be rebuilt after an input or code change. |

A `justfile` can call a dependency-aware runner; the tools serve different purposes. It does not make a monolithic script selective by itself. The toolkit covers [project commands](https://dss-agentic-toolkit.pages.dev/chapters/project-commands.html) and [dependency-aware workflows](https://dss-agentic-toolkit.pages.dev/chapters/pipeline-dependencies.html).

For a label change, regenerate and inspect the figure. For a sample change, rebuild the sample and affected outputs. Have the agent identify that route before running it.

## Check execution before scaling up

Have the agent run a small end-to-end smoke test of a new workflow before a large batch. It should confirm that files reach the next step, calculations finish, and outputs can be read. [Chapter 14](#simulation) adds a different test: whether estimates recover known quantities.

Retain inexpensive *assertions*: checks that stop a script when a documented expectation fails. Check required columns, identifiers, merge relationships, sample exclusions, and fitting diagnostics. Their expected values must come from the specification or source documentation. Copying the agent's latest result into a test only preserves that result.

Missing research inputs should cause a clear failure. An empirical analysis must never substitute synthetic observations to finish. In this teaching project, generating synthetic inputs is an explicit, documented step. Keep its outputs distinguishable from any observed study data.

## Keep long jobs moving {#unattended-jobs}

A queue such as [`pueue`](https://github.com/Nukesor/pueue) starts waiting jobs automatically when execution slots become available. Simulation runs and alternative specifications can proceed without waiting for you. Have the agent save commands and logs, manage submission, and establish completion from the queue state and expected outputs.

Choose parallelism to fit memory and CPU needs; a slot is not necessarily one core. A local queue cannot calculate while the computer sleeps. For larger workloads, use approved institutional services such as [Harvard FAS Research Computing](https://docs.rc.fas.harvard.edu/). The toolkit covers [queues and completion checks](https://dss-agentic-toolkit.pages.dev/chapters/job-queues.html).

After an interruption, reuse completed steps. Resuming a partly completed fit requires support from the fitting software.

# 14. Test the analysis against known truth {#simulation}

<!-- aliases: calibration-example -->

Simulation can check whether an agent's workflow executes and whether the proposed estimator recovers quantities whose true values are known. Those are different questions. Code can follow the specification and still produce poor estimates under conditions relevant to the study.

The [birthweight example](#example-project) makes this distinction visible. One simulated world contains the curved age relationship and linear heat-by-age interaction represented in the fitted statistical model. Another contains a more complex interaction. Applying the same estimator to both reveals where its performance deteriorates.

## Decide what the test must establish

First, have the agent pass one dataset through the saved workflow and confirm that it produces usable outputs. Add a small calculation with an answer established separately from the code being tested. With age centered at 28 in this example, the modeled 10-minus-5-day difference at age 28 is five times the heat coefficient. Comparing that expression with the prediction-based contrast checks the reported quantity.

Then repeat the analysis across many generated datasets to assess estimation and uncertainty. A single successful execution cannot establish low bias or reliable interval coverage.

![](figures/known-answer-check.svg){#fig-known-answer-check fig-alt="First run one dataset through the workflow and check a separately calculated answer. Then repeat across synthetic datasets with known truth and assess estimation bias, interval coverage, and failures."}

## Define plausible worlds and calculate truth {#calibration-example}

Choose worlds that address a scientific concern. The example varies the heat relationship while keeping its analysis method unchanged.

| World | Relationship in the generator | Question for the estimator |
|---|---|---|
| Null | Heat contributes nothing. | Are estimates near zero and false-positive rates acceptable? |
| Main | The heat slope changes linearly with age. | Does the estimator recover average and age-specific contrasts? |
| Curved | The heat slope also changes quadratically with age. | What happens when the fitted interaction is too restrictive? |

Before assessing recovery, check whether each world can represent the measured quantity. Outcome bounds, dispersion, clustering, exposure support, and constraints between variables matter. The example generates positive, right-skewed birthweights, but it remains a teaching construction rather than a validated description of births. Real studies may also need missingness, measurement error, or dependence.

Calculate the true contrast from the generating conditional mean before adding noise. Have that calculation checked separately from the estimator. Reusing the fitting code to produce both the estimate and its supposed truth can put the same mistake on both sides.

<details class="guide-example">
<summary>How the example generates outcomes and calculates truth</summary>

The simulation holds the 1,200 synthetic individuals' ages, smoking indicators, and exposures fixed, and generates new birthweights in each repetition. Its performance results therefore concern those covariate values. The generator uses positive, right-skewed noise with spread increasing with the conditional mean.

For each world, the true sample contrast averages the difference between conditional mean birthweight at 10 and 5 hot days over the saved individuals. Age-specific truth uses the stated age and the sample's smoking distribution. The estimator includes quadratic age, a linear heat-by-age interaction, and smoking, with HC3 covariance and normal-reference intervals. It is unchanged across worlds.

The [project download](resources/heat-birthweight.zip) contains generator code, parameters, independent truth calculations, seeds, and the full simulation plan. A different design may require numerical integration or a large reference population to approximate truth; record that approximation and its uncertainty.

</details>

## Have the agent run the comparison

State the evaluation criteria before launching the repetitions. Examine bias and estimation error, then interval coverage and any decision rule the research will use. A procedure can have small average bias and still produce intervals that are too narrow.

<!-- prompt:simulation-plan -->
::: {#request-simulation-plan .prompt}
> Propose known-truth checks for specification.md, with plausible generating scenarios, independently calculated truth, performance measures, and Monte Carlo uncertainty. Verify outcome ranges and dispersion. After approval, run the saved analysis unchanged in each scenario and report failures alongside successes. Keep simulation files separate and propose any methodological changes for my decision.
:::
<!-- /prompt:simulation-plan -->

Retain failures and report attempted as well as successful runs. Computing performance only among successful fits can make an unstable estimator look reliable. Finite simulation runs also introduce Monte Carlo uncertainty: with 400 repetitions, coverage near 95 percent has a standard error of about 1.1 percentage points. That describes uncertainty in the estimated coverage rate, not the interval around a birthweight contrast.

## Interpret failures before changing the method

<!-- example:simulation-results -->
The saved run completed 400 repetitions in each world, with no failed fits. In the curved world, the age-28 contrast had bias of 28.3 g and interval coverage of 75.8%. The sample-average contrast performed much better. A satisfactory average can conceal an inadequate age-specific result.

![](figures/simulation-performance.svg){#fig-simulation-performance fig-alt="Saved simulation results compare bias and coverage in the null, main, and curved worlds. Age-28 performance deteriorates in the curved world. Bars show Monte Carlo uncertainty, not birthweight confidence intervals."}

<details class="guide-example">
<summary>Read the numerical results</summary>

The table shows two of the four reported quantities. The project download includes every quantity, replicate, and failure check.

| World | Quantity | Truth (g) | Bias (g) | Coverage | Monte Carlo 95% interval |
|---|---|---:|---:|---:|---|
| Null | Sample average | 0.0 | -0.2 | 94.5% | 91.8%–96.3% |
| Null | Age 28 | 0.0 | 0.1 | 94.0% | 91.2%–95.9% |
| Main | Sample average | -37.8 | 1.0 | 94.2% | 91.5%–96.1% |
| Main | Age 28 | -40.0 | 1.0 | 94.8% | 92.1%–96.5% |
| Curved | Sample average | -10.8 | 2.4 | 93.5% | 90.6%–95.5% |
| Curved | Age 28 | -40.0 | 28.3 | 75.8% | 71.3%–79.7% |

</details>

These are measured simulation results under specified synthetic worlds, not empirical health findings.
<!-- /example:simulation-results -->

When a check fails, ask the agent to show the generator, truth calculation, and saved estimates. An impossible simulated world, a coding mistake, and poor estimator performance require different responses. Preserve the failing run while investigating.

The curved-world result gives a reason to examine a more flexible age interaction. It does not authorize the agent to replace the method silently. Agree any revision, record its reason, and repeat the relevant checks. Simulation supports claims about performance under specified worlds; it does not establish that an observational design supports a causal interpretation. The next chapter asks whether separately built implementations carry out the specification consistently.

# 15. Check the agent with independent implementations {#checking-analysis}

Independently built implementations give mistakes a chance to produce observable disagreements. Each agent receives the same specification and inputs, works through the analysis separately, and saves comparable outputs. A rerun of the same code cannot provide this check.

For the [birthweight project](#example-project), one fresh agent implemented the analysis in [R](https://www.r-project.org/) and another in [Python](https://www.python.org/). Neither saw the other's code or results while building. The comparison checked their data processing and calculations, including the specified contrasts and uncertainty method.

## Give both agents the same specification

Use a fixed copy of `specification.md`, with the estimands, original inputs, sample rules, estimator, reported quantities, and comparison tolerances. Keep decisions and their reasons in `METHODOLOGY.md`. If an implementer finds an ambiguity, resolve it and give both agents the same clarification.

“Estimate the heat effect” leaves room for different interpretations. The example specifies a 10-minus-5-day contrast, its averaging sample, age-specific comparisons, and uncertainty calculation. Those details make a disagreement interpretable.

## Build two implementations separately

![](figures/independent-implementations.svg){#fig-independent-implementations fig-alt="The same original data and specification go to two fresh agents in separate folders. Each produces its own processing, analysis, and outputs before a comparison session sees both results."}

Use fresh sessions and separate folders containing the specification, dictionary, and approved original inputs. Exclude the other implementation's code, processed data, and results. The sessions can run sequentially or simultaneously. Translating the first implementation carries its choices into the second and provides a different, weaker check.

If data processing is part of the work being checked, both implementations should start from original inputs. Sharing one agent's processed dataset leaves that processing unchecked. For a narrower check of fitting on an already verified dataset, the processed file is an appropriate common starting point.

<!-- prompt:independent-implementation -->
::: {#request-independent-implementation .prompt}
> Working only from specification.md, the data dictionary, and the approved original inputs, independently implement the analysis in the assigned language. Do not consult another implementation, processed dataset, or result. Stop for missing inputs or ambiguity; do not invent values or substitute simulated data. Save the code, input fingerprints, sample identifiers, derived values, model terms, and labeled full-precision results with their uncertainty calculations.
:::
<!-- /prompt:independent-implementation -->

Different languages or statistical packages help expose defaults. Fresh implementations in the same language can still be useful; two are the default, with a third reserved for a further independent attempt when needed. Agreement by majority vote does not decide which implementation is correct.

For restricted inputs, develop code with permitted synthetic data and run each implementation on the real records in the approved environment. Keep the comparison there unless its contents may be shared. [Chapter 3](#research-limits) explains that separation.

## What the worked comparison found

<!-- example:independent-results -->
Two fresh agents received only the same original synthetic CSV and written specification. One built the R analysis; the other built the Python analysis. Neither received the other's implementation or results while building. The completed comparison retained all 1,200 ids and matched every design-matrix value exactly.

<details class="guide-example">
<summary>Compare the saved estimates</summary>

| Quantity | R estimate (g) | Python estimate (g) | 95% interval (g), rounded |
|---|---:|---:|---|
| sample | -31.639627 | -31.639627 | -74.3 to 11.0 |
| age_22 | -34.325612 | -34.325612 | -93.8 to 25.1 |
| age_28 | -31.978065 | -31.978065 | -74.9 to 10.9 |
| age_36 | -28.848003 | -28.848003 | -90.7 to 33.0 |

</details>

Across the contrasts, standard errors, and interval endpoints, the largest absolute difference was 3e-12, below the prespecified tolerance of 0.000001. The package also compares coefficients, covariance, and fitted values at full precision.

Implementation checks and a separate input-rule audit identified different issues. Python's postestimation package supplied t-based intervals by default; its implementation calculated the required normal intervals explicitly. Review of the R input checks found an age-range check that was too broad and an unrequested integer restriction on exposure. Correcting those checks left the numerical results unchanged. Agreement on this dataset would not have detected those boundary mistakes by itself.
<!-- /example:independent-results -->

## Investigate the earliest disagreement

Compare the completed outputs in a separate session. Work from inputs toward results; the earliest difference often explains several later ones.

| First difference | What to investigate |
|---|---|
| Input fingerprint or variable source | A different release, an unsupported field, or the wrong data file. |
| Record identifiers or exclusions | Different samples, duplicates, or rule ordering. Equal sample sizes are insufficient. |
| Derived values or model terms | Units, transformations, merges, or a different specification. |
| Standard errors or interval endpoints | Covariance method, reference distribution, or software defaults. |
| Contrasts despite matching fitted models | Exposure values, averaging population, prediction scale, or postestimation code. |

<!-- prompt:compare-implementations -->
::: {#request-compare-implementations .prompt}
> Compare the completed implementations against specification.md and its tolerances. Check input versions, sample membership, exclusions, derived variables, model terms, and reported quantities, using full-precision values. Produce an agreement-and-discrepancy table and identify the earliest stage at which each discrepancy appears. Do not change either implementation or its outputs to force agreement.
:::
<!-- /prompt:compare-implementations -->

Compare full-precision values before rounding. Identifiers and categorical values should agree exactly. Numerical tolerances should reflect the calculation and fitting algorithm; estimates based on simulation draws also need allowance for Monte Carlo error. Record those choices before comparing.

Correct against the specification and source data, then rerun affected comparisons. Never change one result merely to match the other. If the specification changes, both implementations must follow the revised version.

Agreement can still miss shared interpretations, faulty routines, and rules never exercised by the supplied data. Supplement it with the [known-answer checks](#simulation) and targeted cases such as duplicates, missing inputs, or boundary values. Retain inexpensive assertions in the [modular workflow](#research-workflows).

For analysis built from saved code, continue to [writing and revision](#research-writing). The next two chapters address studies that use LLM-generated measurements and decisions about running or adapting LLMs.


# 16. Use LLM outputs as research data {#llm-measurements}

LLMs can classify documents, extract information, or assess material that would take a research team considerable time to read. When their responses become variables in an analysis, errors in those responses affect the evidence. Define what the LLM should produce and evaluate whether it does that well enough for the study.

Suppose a project uses an LLM to label interview excerpts that describe an unmet service need. A high overall agreement rate could conceal frequent misses of that uncommon category. This chapter follows that labeling problem, then uses a peer-review study to show how controlled agent runs can apply a protocol repeatedly.

## Define the output and its research meaning

Write a rubric that defines the category, exclusions, and ambiguous cases. Specify the material the LLM receives and the output it should return. Ask people familiar with the research to apply the rubric to development examples, reconcile disagreements, and record the reasons. Human labels provide a reference with their own limitations.

Here, *LLM inference* means running an already-trained LLM to generate a response. It differs from statistical inference about a population or an effect. A scripted LLM call may be sufficient for labeling an excerpt supplied with a fixed rubric. Use an agent when the task also requires tools, such as finding files or extracting passages from several documents.

Develop the prompt on examples reserved for that purpose. Include difficult cases and decide when the procedure should refer a case for human review. A statement of confidence from the LLM is not, by itself, a calibrated probability that the label is correct.

## Evaluate on material kept out of development {#evaluate-llm-labeling}

Freeze the rubric and prompt, then evaluate on a separate sample whose reference labels were not used to choose them. Keep related excerpts from the same person or document together when separating samples. Otherwise, information shared across excerpts can make performance appear better than it will be on new material.

Consider this illustrative result for 200 excerpts:

| Human reference | LLM: need present | LLM: need absent |
|:--|--:|--:|
| Need present | 10 | 10 |
| Need absent | 5 | 175 |

Overall agreement is 92.5 percent. Yet the LLM finds only half of the 20 positive cases, and five of its 15 positive labels are false positives. Report category-specific errors and their uncertainty, including performance for relevant document types or subgroups. A single agreement statistic would hide the problem that matters here.

<!-- prompt:evaluate-labeling -->
::: {#request-evaluate-labeling .prompt}
> Apply the frozen rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. After labeling finishes, compare with the independently adjudicated reference. Report the confusion table, category-specific errors, uncertainty, referral workload, and prespecified acceptance criteria. Do not tune on this sample or drop difficult cases; list disagreements for human review.
:::
<!-- /prompt:evaluate-labeling -->

Set acceptance criteria before reading the evaluation results. Count failures and human referrals, and report the workload they create. If the observed errors lead you to revise the prompt, that sample has become development material. Use fresh evaluation material for a new performance claim, or disclose the reuse and its limits.

## Apply the protocol in controlled runs {#headless-agents}

A *headless agent* runs from a saved request without an interactive conversation. A script supplies inputs and collects the result, allowing the same protocol to be applied to many cases. An agent in the app can launch that script; you do not have to operate a terminal yourself.

In a project comparing AI and human peer reviews, separate headless runs generated reviews and judged review sets. Each run needed its assigned material without inheriting the conversation from the previous case. Review generation, judging, and analysis were separate stages with saved outputs.

### Control what each reviewer or judge receives {#control-what-each-reviewer-or-judge-receives}

![](figures/controlled-review-runs.svg){#fig-controlled-review-runs fig-alt="Fresh reviewer runs each receive a protocol and assigned manuscript. Separate judges receive the rubric and assigned review set. Reviews, judgments, failures, and configuration are saved before statistical analysis."}

A reviewer receives its protocol and manuscript. A judge receives the rubric and assigned reviews, plus the manuscript if the protocol requires it. A pairwise judgment deliberately includes two reviews; controlling context means supplying the intended set, not limiting every run to one document.

Headless execution does not establish isolation. A fresh run can still load personal instructions, memory, files, plugins, or connected services. Have the agent verify the actual access configuration against the protocol and record untested routes. The toolkit's [headless-agent chapter](https://dss-agentic-toolkit.pages.dev/chapters/headless-agents.html) covers setup and access tests.[^headless-controls]

[^headless-controls]: Anthropic's [programmatic Claude Code documentation](https://code.claude.com/docs/en/headless) describes noninteractive calls and their configuration. These calls can inherit the ordinary Claude Code environment; removing a visible conversation does not remove every possible input.

<!-- prompt:controlled-llm-runs -->
::: {#request-controlled-llm-runs .prompt}
> For this review-generation and judging protocol, specify the inputs, instructions, tools, and services allowed in each stage. Set up fresh runs and verify their actual access against that protocol before the batch. Save raw responses, failures, retries, configuration, and LLM information. Report untested access routes; headless execution alone does not establish isolation.
:::
<!-- /prompt:controlled-llm-runs -->

A queue schedules runs but does not define their information access. Likewise, separating contexts does not establish statistical independence or remove biases shared by the underlying LLM. Use the evaluation above for the actual review or judging task.

## Preserve responses and examine sensitivity

Save the presented inputs, prompts, examples, raw responses, parsing code, failures, retries, and human corrections. Record dates, available LLM identifiers, generation settings, and the configuration of any tools. Apply the source data's access rules to these records.

| Question | Evidence needed |
|---|---|
| Can the published analysis be reproduced? | Saved responses and the code that turns them into research results. |
| Can responses be generated again? | The inference procedure, inputs, and available LLM/runtime records. |
| Are the measurements adequate? | Evaluation against the rubric and independent reference material. |

A name in an app menu may not identify an exact LLM version. Record what is observable and its limits. Even a pinned configuration does not guarantee identical generated responses; distinguish analyzing saved responses from collecting new ones.

Examine plausible alternatives to the measurement procedure. For judging, reversing the presentation order can reveal an order-dependent preference. Research has documented position and verbosity biases in LLM judgments of chatbot responses; that motivates checking these effects in a research protocol, without assuming the same size of bias.[^judge-bias] For labeling, alternative boundary definitions may reveal an underspecified construct.

[^judge-bias]: Zheng et al. (2023), [“Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena”](https://arxiv.org/abs/2306.05685). The evaluated task was comparison of chatbot responses, not peer-review quality.

Preserve alternative results and report meaningful changes in the research conclusion. Do not choose a prompt because it produces the preferred finding. Stable outputs are not necessarily valid measurements. [Chapter 17](#research-models) considers local execution and adaptation; both retain these evaluation requirements.

# 17. Run and adapt LLMs for your research {#research-models}

Running an LLM yourself can give you control over where research material is processed and preserve access to the weights used in a study. Training an existing LLM on reviewed examples may improve a recurring task. These are separate choices, with different costs and checks.

For the interview-labeling task in [chapter 16](#llm-measurements), data restrictions might require inference on approved local hardware. Separately, persistent coding errors might justify testing whether fine-tuning improves performance. You can run an unchanged open-weight LLM locally; local execution does not require training.

## Choose where the LLM runs {#local-models}

An *open-weight LLM* makes its trained parameters available to download and run under specified terms. *Open-source AI* requires more than downloadable weights: the Open Source Initiative's definition also covers rights to use, study, modify, and share, along with code and sufficient training-data information.[^open-source-ai]

[^open-source-ai]: [Open Source AI Definition 1.0](https://opensource.org/ai/open-source-ai-definition), Open Source Initiative. The definition requires parameters, code, and information sufficient to understand the training data; it does not require publishing every raw training record.

“Hosting locally” can mean running an LLM on your everyday computer. A runtime such as [Ollama](https://docs.ollama.com/) loads suitable downloaded weights and accepts requests from an interface, script, or agent. A *server* can simply be software on that computer serving those requests. A separate machine is needed only when the workload or approved computing arrangement requires one.

![](figures/llm-deployment.svg){#fig-llm-deployment fig-alt="The same research task can use an LLM on your computer, on institutional infrastructure, or at a hosting provider. Inputs travel to the location where inference runs; local tools do not establish a local LLM."}

A hosted LLM receives the material submitted for inference. A promise not to train on it does not settle retention or deletion. Return to [chapter 3](#data-chain-of-custody) when choosing the processing location. Synthetic records can help develop code, but cannot replace the actual interview text when the task is to label that text.

With local inference, check the agent's other routes too: tools, external services, logs, caches, and backups may still transmit or retain protected material. Using open weights through someone else's hosted API sends inputs to that provider. Verify the actual route before supplying the research inputs.

## Choose for the task and available hardware

Start with the research workload: document length, number of cases, required output, and whether tools are needed. Then identify releases that fit the available memory and can be evaluated against the rubric. A capable text generator may still fail at tool use or structured output.

The table lists recognizable families and example releases, with release-specific licenses checked in November 2026. It is an orientation, not a ranking or a list of the newest releases.

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

The smaller Qwen, Gemma, and Ministral examples are candidates for evaluation on a personal computer, subject to its memory and the workload. Large releases such as full Kimi K2 or DeepSeek-V3.2 need substantially greater resources. Family names alone do not tell you which release will fit or perform adequately.

Weights occupy disk and working memory. Long contexts and concurrent runs require additional memory. *Quantization* stores numerical values at reduced precision to reduce resource requirements; evaluate the actual quantized version you intend to use. Ask institutional research computing for help when the workload exceeds local resources.

Record the exact release, weights, license, runtime, quantization, context limit, and prompting format. Custom license terms need release-specific attention; the license name alone does not establish that the system meets the open-source definition. The toolkit's [local-model chapter](https://dss-agentic-toolkit.pages.dev/chapters/local-models.html) covers installation, hardware checks, and connecting a compatible LLM to an agent.

### Apple's on-device option

Local inference does not require open weights. Apple's [Foundation Models framework](https://developer.apple.com/foundation-models-framework/) provides access to an on-device LLM on supported devices. It may be useful for a bounded extraction, labeling, or summarization task if evaluation supports that use. The framework also supports hosted routes, so select and verify the on-device route explicitly. It offers a different degree of control from preserving your own downloaded weights.

## Decide whether context or training is needed {#context-or-training}

First give an existing LLM a clear rubric, representative examples, and relevant documents. *In-context learning* uses examples supplied with the request without updating weights. Retrieval selects relevant passages to include in that context.

*Fine-tuning* trains an existing LLM on additional data. For interview coding, supervised training pairs excerpts with reviewed labels. It can use many examples across batches, so they need not all fit into one prompt. The resulting LLM still receives each new excerpt and the instructions needed to process it.

![](figures/context-and-adaptation.svg){#fig-context-and-adaptation fig-alt="Context supplies a rubric, examples, and evidence with a new case while weights stay unchanged. Fine-tuning uses reviewed training cases to learn an adapter; the base LLM plus adapter then processes new cases. Both routes require separate evaluation."}

| Need | Starting approach |
|---|---|
| Answer from current documents with source support | Supply passages directly or through retrieval. |
| Apply a limited or changing rubric | Prompt an existing LLM with selected examples. |
| Repeat a stable task despite consequential errors with a strong prompt | Test fine-tuning if suitable training data and independent evaluation are available. |

Fine-tuning may improve accuracy, output format, or performance with shorter prompts. It adds training and maintenance work, especially when the rubric changes. Inconsistent labels can teach inconsistent behavior.

Compare adaptation with a strong prompted baseline.[^adaptation-evidence] When the task needs document knowledge, try retrieval first; it can also be combined with fine-tuning.[^retrieval-evidence]

[^adaptation-evidence]: Liu et al. (2022), [“Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning”](https://arxiv.org/abs/2205.05638), found accuracy and prediction-time computation benefits for T-Few with IA³ under their comparisons. This was not a general demonstration that LoRA outperforms a well-prompted current LLM on any research task.

[^retrieval-evidence]: Ovadia et al. (2024), [“Fine-Tuning or Retrieval? Comparing Knowledge Injection in LLMs”](https://arxiv.org/abs/2312.05934), found retrieval more effective than unsupervised fine-tuning for the knowledge-intensive tasks tested. Training on unlabeled text differs from supervised training on reviewed excerpt/label pairs.

## Understand what LoRA changes {#lora}

*LoRA*, or *Low-Rank Adaptation*, is a fine-tuning method. Training software keeps the base weights fixed and learns compact adjustments to selected parts of the LLM. Those adjustments are saved as an *adapter*, used with the base LLM or merged into a new copy.[^lora-method]

For example, Qwen names an LLM family, [MLX LM](https://github.com/ml-explore/mlx-lm) and [Hugging Face PEFT](https://huggingface.co/docs/peft/) provide training software, and LoRA describes how training changes the system. Your adapter contains the learned adjustments. Full fine-tuning instead updates the original weights and generally requires more training memory.

*QLoRA* combines low-rank adaptation with a quantized base LLM to reduce training memory further.[^qlora-method] Whether a particular configuration fits your computer still depends on the release, context length, and training settings. The toolkit links to supported training tools and their setup instructions.

[^lora-method]: Hu et al. (2021), [“LoRA: Low-Rank Adaptation of Large Language Models”](https://arxiv.org/abs/2106.09685), explains the method and reductions in trainable parameters and training memory.

[^qlora-method]: Dettmers et al. (2023), [“QLoRA: Efficient Finetuning of Quantized LLMs”](https://arxiv.org/abs/2305.14314). Its hardware demonstrations concern specified training configurations, not every release and workload.

## Evaluate and preserve the adapted LLM {#evaluate-adapted-model}

Apply the [chapter 16 evaluation](#evaluate-llm-labeling) to the baseline and adapted LLM. Separate training examples, development material for choosing settings, and final evaluation cases. Keep related material together across those splits.

Compare errors important to the study, including rare categories, failures, and human referrals. If efficiency motivates training, include training effort and inference cost. Better agreement with reference labels does not establish that the labels measure the intended construct.

Preserve the base weights and identifier, adapter or updated weights, training-data version, split assignments, training settings, software environment, and evaluation outputs. An adapter without its base LLM is incomplete. Distinguish analyzing saved responses, generating new responses with the adapted LLM, and retraining it.

Include trained weights, adapters, checkpoints, and logs in the [chain of custody](#data-chain-of-custody); fine-tuning can retain training information.[^training-memorization]

[^training-memorization]: Zeng et al. (2024), [“Exploring Memorization in Fine-tuned Language Models”](https://aclanthology.org/2024.acl-long.216/). The study found that memorization differed across fine-tuning tasks.

# 18. Write and revise from the research record {#research-writing}

An analysis revision is incomplete if the manuscript still reports the earlier result. An agent can trace numbers and claims to their sources, update their uses, and identify passages that need a new interpretation.

In the [birthweight project](#example-project), a corrected sample rule could change a contrast in a results file while leaving the previous value in the abstract or figure caption. Give the agent the saved results and a record of where each is used. You decide how the changed finding affects the argument.

## Connect the manuscript to checked results {#trace-manuscript}

<!-- example:manuscript-results -->
For the synthetic example, `outputs/analysis/contrasts.csv`, row `sample`, supplies this sentence:

> In the synthetic sample, the estimated mean birthweight difference between ten and five hot days was -31.6 g (95% confidence interval -74.3 to 11.0 g), standardized over the observed age and smoking distribution.

The example's comparison record retains the full-precision values. The sentence identifies the contrast and averaging sample and labels the result as synthetic; it does not turn this teaching calculation into an empirical claim.
<!-- /example:manuscript-results -->

![](figures/manuscript-trace.svg){#fig-manuscript-trace fig-alt="The sample row in contrasts.csv supplies the estimate and interval used in results text, the abstract, and a figure caption. When the source changes, every linked use is checked."}

Have the agent record the source file, exact entry, run, and checksum for each main result. The [file fingerprint](#identify-inputs) detects changed contents; it does not establish that the selected row answers the intended question. Check meaning as well as transfer: contrast, averaging sample, units, signs, intervals, and rounding.

<!-- prompt:trace-manuscript -->
::: {#request-trace-manuscript .prompt}
> Trace each main manuscript result, including the abstract and captions, to its saved source file and exact entry. Record source fingerprints and check values, signs, units, samples, intervals, and rounding in the final rendered document. Identify every affected use when a source result changes. Propose updates only from verified outputs and list unsupported claims for my decision.
:::
<!-- /prompt:trace-manuscript -->

After a source changes, have the agent update affected passages, tables, and captions and compare the final PDF or Word document with the saved results. A figure also needs checks of its plotted quantity, scale, and labels. Resolve unsupported claims before polishing their wording.

## Draft and revise one section at a time

Give the agent the argument you want to make, the relevant research records, and your writing conventions. For methods, use the specification, executed scripts, and recorded decisions. For results, use checked tables and figures. For discussion, supply your interpretation and limitations alongside the evidence.

<!-- prompt:draft-from-results -->
::: {#request-draft-from-results .prompt}
> Draft this section using only the supplied research decisions, verified sources, saved result tables, and figure captions. Where a claim, number, or reference has no support in those files, leave a bracketed gap and list it at the end. Follow my writing conventions. Do not invent evidence or change the scientific interpretation to complete the prose.
:::
<!-- /prompt:draft-from-results -->

Work section by section so you can judge the reasoning and support. Ask the agent to identify mismatches between methods text and the code that ran, and between claims and the cited literature. Check consequential interpretations yourself. A technically correct number does not settle what it means.

Use the [shared writing instructions](#shared-conventions) for recurring preferences and project files for manuscript-specific terminology. Read for clear connections between ideas, sufficient context, and repetition. Record recurring corrections where the agent can use them in the next revision.

## Preserve coauthor edits and respond to reviewers

Keep every returned manuscript before reconciling changes. An agent can compare versions and propose a combined draft, but regeneration can lose a coauthor's wording, comments, or accepted edits. Inspect the reconciled document in the application your collaborators use.

If the team writes in Word, keep that workflow. Supply an approved section and its evidence, then request proposed wording and an explanation of substantive changes. For direct editing, use a copy and inspect comments, citations, equations, and layout. If your source is markdown or [Quarto](https://quarto.org/), preserve returned Word versions before merging edits back. The toolkit covers [document production](https://dss-agentic-toolkit.pages.dev/chapters/research-documents.html).

For reviewer responses, supply the comments, your decisions, and the revised manuscript. The agent should answer each comment directly and identify actual changes. A requested analysis that has not been run must remain visibly outstanding.

<!-- prompt:reviewer-response -->
::: {#request-reviewer-response .prompt}
> Draft the reviewer response from the supplied comments and my decision notes. Quote each comment, lead with the substantive answer, and cite the actual locations of manuscript changes. Do not add concessions I did not make or claim an analysis was run without its saved output. Flag unresolved comments and record any approved methodological change in the project record.
:::
<!-- /prompt:reviewer-response -->

When a reviewer request changes the analysis, return to the specification and relevant checks before updating the manuscript. Preserve the original result and the reason for the revision. A new analysis should not be described as a wording correction.

<details class="guide-example">
<summary>Use the same research record for a talk</summary>

Ask for an outline with one main claim per slide and the supporting saved figure or result. Review the argument and audience fit before generating a deck. Use the same result-to-source links as the manuscript, and check the rendered slides after revisions. The toolkit's document-production chapter covers output formats.

</details>

## Describe AI use accurately

Check the target journal's current instructions at submission. As of November 2026, ICMJE guidance calls for disclosure of AI assistance, human responsibility, and no AI authorship; individual journals determine the applicable details and placement.[^ai-disclosure]

[^ai-disclosure]: [ICMJE, “AI Use by Authors”](https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html), checked November 8, 2026. The guidance addresses reporting assistance, reviewing generated material, attribution, and author responsibility.

Keep a record of the tools and observable LLM information, dates, tasks, affected work, and checks actually completed. Distinguish language assistance and code generation from [LLM-derived measurements](#llm-measurements). Measurements require a methodological account of inputs, prompts, evaluation, and human review.

A disclosure should identify the assistance, explain how the affected work was checked, and state the authors' responsibility. Derive it from project records rather than a generic claim that “all outputs were verified.” Do not report an exact LLM version, independent implementation, or successful rerun that the records cannot support. Preserve relevant disclosure and provenance in the research deposit.

Confidential material received as a reviewer requires separate authorization under the journal's or funder's policy. Permission to use an agent on your own study does not authorize submitting someone else's manuscript or application.

# 19. Reproduce and hand off the research {#research-handoff}

A collaborator should be able to repeat the analysis from its files and instructions without asking an agent to reconstruct what happened. Preparing and testing that handoff reveals dependencies hidden by a familiar working folder.

For example, a heat-contrast figure may build because yesterday's fitted statistical model is cached on your computer. In a separate copy, it fails because neither the fit nor the command that creates it was supplied. A reproduction test identifies what the recipient needs to preserve or rebuild.

## Assemble the files and instructions

Provide approved inputs or access instructions, the code and commands, software records, and reference results. Include the specification and decisions needed to explain the reported analysis. Have the agent identify missing files or undocumented manual steps; leave unknown history explicit.

![](figures/research-handoff.svg){#fig-research-handoff fig-alt="Inputs or access instructions, code and commands, software records, and reference results form a research package. A separate copy restores the environment, runs the documented steps, and compares the outputs with the references."}

The [modular workflow](#research-workflows) supplies runnable steps. Preserve its existing command interface so the recipient does not need an agent to determine execution order. Record the software environment before changing it: language and package versions, relevant system dependencies, and restoration instructions. The toolkit's [environment chapter](https://dss-agentic-toolkit.pages.dev/chapters/environments.html) covers the tools.

For restricted data, provide a permitted acquisition route and a synthetic example that exercises the code. Explain which files an authorized researcher must supply and where. Do not present the synthetic example's results as a reproduction of findings from protected records.

## Test and name the reproduction route

![](figures/reproduction-routes.svg){#fig-reproduction-routes fig-alt="Saved estimates can rebuild reported tables; approved data can rerun the supplied analysis; assigned documents can generate new LLM responses. Each starts from different inputs and supports a different reproduction claim."}

Name the starting point: rebuilding a table from saved estimates, rerunning analysis from approved data, or generating new LLM responses. Saved fits or responses are legitimate inputs when the stated route begins there. A new inference run may produce different measurements even when the analysis of saved responses is reproducible.

<!-- prompt:reproduce-project -->
::: {#request-reproduce-project .prompt}
> Test a separate copy using the README and input manifest. Restore the recorded environment without upgrading it, run the documented commands, and compare outputs using the agreed tolerances. Record failures and missing inputs without altering the analysis or criteria to force agreement. If only synthetic inputs are available, state that reproduction with the study data remains untested.
:::
<!-- /prompt:reproduce-project -->

Use a separate copy and restore the recorded environment. A copied folder that still relies on your existing packages or hidden caches has not tested environment restoration. Ask the agent to record the actual commands, inputs, environment, and output comparisons, with failures and untested steps stated plainly.

Compare using the agreed tolerances. Identifiers and deterministic counts should match exactly; numerical and stochastic outputs need the criteria established for the analysis. Investigate discrepancies before changing the reference results.

This differs from [independent implementation](#checking-analysis), which builds new code from the specification. Reproduction tests the supplied code and instructions. Neither establishes scientific validity. If protected records are unavailable, testing only the synthetic example leaves empirical reproduction untested.

## Review and deposit the tested version

Assemble a separate snapshot for the repository your field uses, such as [Dataverse](https://dataverse.org/), [OSF](https://osf.io/), or [Zenodo](https://zenodo.org/). Agree contributors, licenses, and its relationship to the manuscript version with coauthors. Have the agent review the actual snapshot, then test its instructions.

- Include permitted inputs or complete access instructions, code, software records, and reference outputs.
- Remove credentials, confidential material, and personal paths from the proposed public copy; inspect included history too.
- Preserve research decisions, relevant AI disclosure, and prompts or evaluation records needed to understand LLM-derived measurements.
- State which reproduction routes passed, failed, or remain untested.
- Link the tested deposit version to the corresponding manuscript.

<!-- prompt:review-deposit -->
::: {#request-review-deposit .prompt}
> Review the proposed deposit against the manuscript, code, input manifest, and sharing requirements. Identify confidential material, credentials, personal paths, missing dependencies, and incomplete access instructions. Check contributors, licenses, AI disclosure, and records needed to understand the results. Propose corrections without uploading or deleting files or rewriting history.
:::
<!-- /prompt:review-deposit -->

Review the agent's findings before publishing. A successful run in the working project does not establish that the deposit contains every necessary file. Keep the tested snapshot available so a later revision begins from an identifiable version.


<!-- ===================== REFERENCE ===================== -->

# Appendix A. Starter files {#starter-files}

These files give an agent the instructions and records it needs to work on a project and resume it later. Have the agent adapt the useful ones to your existing files and conventions. A small project can begin with project instructions and a short status and task list; add separate scientific records when the work needs them.

For the [synthetic heat-and-birthweight study](#example-specification), `specification.md` states the quantities to estimate and how to estimate them. `METHODOLOGY.md` records why those choices were made or changed. Keeping those roles separate lets a new session find both the current analysis plan and the reasoning behind it.

| File and destination | Use | Template |
|:------------------------------------|:--------------------------------------------|:-----------------|
| `CLAUDE.md` in the project | Explain the project and point to its records. | [Download](resources/starter-files/project-AGENTS.md){download="CLAUDE.md"} |
| `STATUS.md` in the project | Summarize where the work stands now. | [Download](resources/starter-files/STATUS.md){download="STATUS.md"} |
| `TASKS.md` in the project | Track remaining work and dated completions. | [Download](resources/starter-files/TASKS.md){download="TASKS.md"} |
| `specification.md` in the project | State the agreed analysis and checks. | [Download](resources/starter-files/specification.md){download="specification.md"} |
| `METHODOLOGY.md` in the project | Record scientific decisions and their reasons. | [Download](resources/starter-files/METHODOLOGY.md){download="METHODOLOGY.md"} |
| Personal `CLAUDE.md` in `~/.claude/` | Optional conventions used across projects. | [Download](resources/starter-files/global-AGENTS.md){download="CLAUDE.md"} |
| `.gitignore` in the project | Optional exclusions when using [Git](https://git-scm.com/). | [Download](resources/starter-files/gitignore.txt){download=".gitignore"} |

The tilde (`~`) means your home folder. The two `CLAUDE.md` templates have different destinations: project instructions belong inside the project; personal instructions belong in your `.claude` folder. Have the agent merge useful content into existing instructions rather than overwrite them. Instruction files do not enforce access controls; those are configured separately in [chapter 4](#enforce-those-limits).

::: {#starter-layouts}
For folder layouts, use [chapter 6](#project-shapes). For saved commands and execution tools, use [chapter 13](#saved-commands). The templates below document those choices without prescribing a new project structure or runner.
:::

::: {.keep-together}
## A.1 Project instructions {#starter-project}

Adapt the example to the project, then save it as `CLAUDE.md` in the project's main folder. Replace the study description and paths; remove references to records the project does not need. [Chapter 7](#project-records) explains how to use a maintained `AGENTS.md` instead.

[Download project instructions](resources/starter-files/project-AGENTS.md){.download-button download="CLAUDE.md"}

<details class="guide-example">
<summary>Read the project-instructions example</summary>

<!-- starter:project -->
```
# heat-birthweight

Synthetic teaching study of heat exposure and birthweight. Every individual
record is synthetic; results are not evidence about actual pregnancies.

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

## Maintain the records
- Read STATUS.md and TASKS.md before starting; check relevant project files.
- Update the task list as work starts, finishes, or becomes blocked.
- Keep STATUS.md a short account of the current state, not a running history.
- Record scientific decisions and their reasons in METHODOLOGY.md.
- Keep unfinished work, failed checks, and unresolved questions explicit.

## Access
Only approved synthetic material belongs in this project. No protected birth
records are available here. Ask before adding external services or publishing.
These instructions do not enforce file or network permissions; use the
configured access controls for those boundaries.
```
<!-- /starter:project -->

</details>

:::

::: {.keep-together}
## A.2 Current state {#starter-status}

Save this as `STATUS.md`. Have the agent rewrite it as the work changes, keeping a short snapshot of what exists, what has been checked, and what comes next. Task history belongs in `TASKS.md`; scientific reasoning belongs in `METHODOLOGY.md`.

[Download STATUS.md](resources/starter-files/STATUS.md){.download-button download="STATUS.md"}

<details class="guide-example">
<summary>Read the status template</summary>

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

</details>

:::

::: {.keep-together}
## A.3 Tasks {#starter-tasks}

Save this as `TASKS.md`. Have the agent move tasks as their status changes and date completed entries. Keep enough detail to resume unfinished work without turning the file into a transcript of every action.

[Download TASKS.md](resources/starter-files/TASKS.md){.download-button download="TASKS.md"}

<details class="guide-example">
<summary>Read the task-list template</summary>

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

</details>

:::

::: {.keep-together}
## A.4 Scientific specification {#starter-specification}

Save this as `specification.md`. Have the agent fill it from your research decisions and leave unresolved choices explicit for your review. Adapt or remove fields that do not apply to the study. [Chapter 10](#example-specification) explains the completed heat-and-birthweight example, supplied in the [project download](resources/heat-birthweight.zip).

[Download specification.md](resources/starter-files/specification.md){.download-button download="specification.md"}

<details class="guide-example">
<summary>Read the specification template</summary>

<!-- starter:specification -->
```
# Scientific specification

Project: [name]
Version and date: [identifier]
Researcher approval: [pending / approved, with date]

## Research question and estimands
- Question and intended interpretation:
- Target population and analysis or averaging sample:
- Quantities to estimate, comparisons, units, and time periods:
- Assumptions needed for that interpretation:

## Inputs and sample rules
- Approved inputs, versions, dictionary, and access location:
- Inclusion, exclusion, and missing-data rules:
- Required variables, derivations, units, and supported ranges:

## Estimator and reported outputs
- Estimation procedure, statistical model, and relevant settings:
- How fitted results become the requested estimands:
- Uncertainty calculation and any decision rule:
- Required tables, figures, and saved full-precision results:

## Checks
- Input and execution checks:
- Known-truth scenarios and performance measures, where applicable:
- Independent comparisons and numerical tolerances, where applicable:

## Unresolved decisions
[List questions for the researcher. Do not silently supply missing choices.]

Record changes and their reasons in METHODOLOGY.md; keep the agreed current
specification here and preserve earlier versions.
```
<!-- /starter:specification -->

</details>

:::

::: {.keep-together}
## A.5 Scientific decisions {#starter-methodology}

Save this as `METHODOLOGY.md`. Record a decision when it changes what the study estimates, how the analysis is implemented, or how its evidence should be interpreted. Link to the current specification instead of repeating it. [Chapter 7](#review-project-plan) explains how these records support research decisions.

[Download METHODOLOGY.md](resources/starter-files/METHODOLOGY.md){.download-button download="METHODOLOGY.md"}

<details class="guide-example">
<summary>Read the scientific-decisions template</summary>

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

</details>

:::

::: {.keep-together}
## A.6 Personal instructions across projects {#starter-global}

Use this optional template for conventions that apply across your work. Have the agent adapt it at `~/.claude/CLAUDE.md`, preserving existing guidance. Short conventions can stay in that file. Add references to separate writing, coding, or other specialist files only when you maintain them; [chapter 8](#specialist-conventions) gives examples.

[Download personal instructions](resources/starter-files/global-AGENTS.md){.download-button download="CLAUDE.md"}

<details class="guide-example">
<summary>Read the personal-instructions template</summary>

<!-- starter:global -->
```
# Working conventions

[Describe your research role and the software you normally use.]

## Before a task
- Read the project's instructions and current state. Preserve accepted work.
- Identify the requested result, constraints, and evidence needed to accept it.
- Ask about consequential ambiguity; do not silently substitute another analysis.

## Conventions
[Keep short shared conventions here. Add references only to files you maintain,
with their locations and when to read them. Possible topics include project
structure, coding, statistical modeling, writing, software, and project locations.]

Read the referenced guidance relevant to the task. If a listed file is missing,
report it; do not create a replacement or invent its instructions.

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

</details>

:::

::: {.keep-together}
## A.7 Git exclusions {#starter-gitignore}

If the project uses Git, have the agent adapt these exclusions in its `.gitignore`. This example excludes data folders by default; permitted public or synthetic inputs may belong in the repository. Keep shareable input manifests outside excluded folders. An ignore rule neither blocks agent access nor removes files already tracked by Git.

Preserve the files needed for the [reproduction route](#test-and-name-the-reproduction-route), including saved fits, raw LLM responses, or research logs when they are required inputs or evidence. Large or protected files can live in approved storage, with versions and access instructions recorded in the project. Excluding a file from Git is not a decision to discard it.

[Download .gitignore](resources/starter-files/gitignore.txt){.download-button download=".gitignore"}

<details class="guide-example">
<summary>Read the Git-exclusion example</summary>

<!-- starter:gitignore -->
```
# Exclude research inputs by default; share permitted files deliberately.
# Keep shareable input manifests outside these excluded folders.
data/raw/
data/processed/

# Rebuildable environments and caches
.venv/
renv/library/
renv/staging/
cache/
.cache/
.Rproj.user/
.Rhistory
.DS_Store

# Personal settings and secrets
.claude/settings.local.json
.env
.env.*
!.env.example

# Preserve fitted objects, raw LLM responses, and research records required by
# the reproduction route. Store large or protected files in approved storage
# and document their versions and locations rather than silently omitting them.
```
<!-- /starter:gitignore -->

</details>

:::

# Appendix B. Prompt bank {#prompt-index}

Find a request for the task you want to delegate, supply the files or decisions listed with it, and adapt the wording to your project. Each request also appears beside its explanation in the guide. The links below return you to those passages. Permissions are configured separately; research choices remain yours to review.

[Download all requests as Markdown](resources/prompt-bank.md){.download-button download="prompt-bank.md"}

<!-- collection:prompts -->
## Set up and maintain a project {#prompts-project}

::: {.keep-together}
### Start a new research project {.unlisted}

Supply: the project purpose, intended output, destination, and any lab conventions.

[Explanation and checks in chapter 6](#request-scaffold-project).

::: {.prompt}
> Set up a project for the research described below. Use the existing workspace and lab conventions where available. Propose a structure suited to the deliverable, then create the agreed folders and initial records. Preserve existing files and list research decisions still needed from me.
:::

:::

::: {.keep-together}
### Organize an existing project {.unlisted}

Supply: the existing project folder and any known current or protected files.

[Explanation and checks in chapter 6](#request-restructure-project).

::: {.prompt}
> Inspect this project and propose a clearer structure. Identify current and uncertain files before moving anything. After I approve the plan, make a recovery copy, reorganize the files, update affected paths, and save an old-to-new file map. Preserve original inputs and check that the affected outputs still reproduce.
:::

:::

::: {.keep-together}
### Write project instructions {.unlisted}

Supply: the project files, existing instructions, and agreed research decisions.

[Explanation and checks in chapter 7](#request-project-context).

::: {.prompt}
> Read this project and draft concise instructions for future sessions. Identify its purpose, current files, agreed research decisions, and unresolved questions. Link to detailed records and include instructions to keep them current. Preserve existing authored guidance and show me the proposed changes.
:::

:::

::: {.keep-together}
### Resume a project {.unlisted}

Supply: the project folder and its maintained instructions, status, and tasks.

[Explanation and checks in chapter 7](#request-resume-project).

::: {.prompt}
> Read the project instructions, STATUS.md, and TASKS.md, then inspect the files relevant to the next task. Summarize the current work, flag any disagreement between the records and the files, and identify the next action.
:::

:::

::: {.keep-together}
### Leave a useful handoff {.unlisted}

Supply: the current session’s work, checked outputs, and unresolved questions.

[Explanation and checks in chapter 7](#request-close-session).

::: {.prompt}
> Update the task list and current status from the work and outputs actually checked. Record scientific decisions and their reasons in METHODOLOGY.md. Leave unfinished work and failures explicit, with enough information for the next session to continue.
:::

:::

::: {.keep-together}
### Separate shared and project instructions {.unlisted}

Supply: existing instructions and examples of conventions used across projects.

[Explanation and checks in chapter 8](#request-shared-conventions).

::: {.prompt}
> Review these instructions and examples for conventions that apply across projects. Propose a short personal instruction file with references to any useful specialist files. Keep this study's decisions in its project records. Show proposed changes and conflicts, then apply the agreed guidance to the next task.
:::

:::

::: {.keep-together}
### Create a project-scaffolding skill {.unlisted}

Supply: an agreed project layout, setup instructions, and a destination for the skill.

[Explanation and checks in chapter 9](#request-scaffold-skill).

::: {.prompt}
> Turn the project setup we have agreed into a reusable skill. Have it ask for the new project's purpose and destination, follow the relevant layout conventions, preserve existing files, and leave missing research decisions as questions. Include checks of the created folders and records. Try it on a new project folder and report the result.
:::

:::

## Define the study and gather evidence {#prompts-evidence}

::: {.keep-together}
### Compare research approaches {.unlisted}

Supply: the research question, available data, constraints, and any verified sources.

[Explanation and checks in chapter 10](#request-compare-research-approaches).

::: {.prompt}
> Using the research question, available data, and constraints below, compare plausible approaches. Explain what each would estimate, the assumptions it requires, and what evidence supports or challenges it. Separate verified sources from suggestions to investigate. Identify decisions needed from me before turning the chosen approach into an analysis specification.
:::

:::

::: {.keep-together}
### Make the research specification explicit {.unlisted}

Supply: your research decisions and the questions that still need resolution.

[Explanation and checks in chapter 10](#request-research-specification).

::: {.prompt}
> Write specification.md from my research decisions: estimands, population or averaging sample, comparisons, estimator, sample rules, inputs, uncertainty, and outputs. Include agreed checks and tolerances. Flag unresolved choices for my review before fitting.
:::

:::

::: {.keep-together}
### Search and verify the literature {.unlisted}

Supply: the research question, eligibility criteria, and any existing search protocol.

[Explanation and checks in chapter 11](#request-literature-search).

::: {.prompt}
> Search for research relevant to the question and criteria in our specification. Record the sources searched, exact queries, dates, and screening decisions. Verify each journal article’s DOI against publisher or registry metadata, including title, authors, and year; flag mismatches and works without a DOI rather than inventing one. Save verified references separately from leads, and distinguish abstracts from full texts you actually read.
:::

:::

::: {.keep-together}
### Synthesize the papers actually read {.unlisted}

Supply: verified papers, records of what was read, and the question to address.

[Explanation and checks in chapter 11](#request-literature-synthesis).

::: {.prompt}
> Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.
:::

:::

::: {.keep-together}
### Bring approved data into the project {.unlisted}

Supply: approved inputs, their documentation, and the current scientific specification.

[Explanation and checks in chapter 12](#request-bring-data).

::: {.prompt}
> Inspect the approved inputs and documentation. Record each source, version or acquisition date, permitted use, and file fingerprint. Preserve the originals. Write checks for the columns, keys, units, ranges, and missingness rules in specification.md; report discrepancies before transforming or excluding records. Do not substitute synthetic observations for missing research inputs.
:::

:::

## Build and check the analysis {#prompts-analysis}

::: {.keep-together}
### Build a modular analysis workflow {.unlisted}

Supply: the current analysis, its accepted outputs, and existing execution commands.

[Explanation and checks in chapter 13](#request-modular-workflow).

::: {.prompt}
> Review the current analysis and propose coherent steps with explicit inputs and saved outputs. Preserve its scientific behavior while separating expensive fits from contrasts, figures, and reporting. Reuse shared functions, and keep adequate existing runners. Provide commands for individual steps and useful combinations, then compare the refactored outputs with the accepted baseline. Report any scientific difference instead of silently treating it as a refactor.
:::

:::

::: {.keep-together}
### Investigate an unexpected result {.unlisted}

Supply: the unexpected result, specification, current code, and saved outputs.

[Explanation and checks in chapter 13](#request-investigate-result).

::: {.prompt}
> Investigate the unexpected result identified below using the current specification, code, and saved outputs. Examine possible input, implementation, and statistical explanations, and report the evidence for each. Preserve the original analysis. Propose any justified sensitivity analysis for my decision; after approval, compare the same estimands and record the changes and reasons.
:::

:::

::: {.keep-together}
### Plan and run known-truth checks {.unlisted}

Supply: the specification and scientific scenarios or performance questions to examine.

[Explanation and checks in chapter 14](#request-simulation-plan).

::: {.prompt}
> Propose known-truth checks for specification.md, with plausible generating scenarios, independently calculated truth, performance measures, and Monte Carlo uncertainty. Verify outcome ranges and dispersion. After approval, run the saved analysis unchanged in each scenario and report failures alongside successes. Keep simulation files separate and propose any methodological changes for my decision.
:::

:::

::: {.keep-together}
### Implement the analysis independently {.unlisted}

Supply: the specification, data dictionary, original inputs, and assigned language. Use a fresh agent without access to the other implementation or results.

[Explanation and checks in chapter 15](#request-independent-implementation).

::: {.prompt}
> Working only from specification.md, the data dictionary, and the approved original inputs, independently implement the analysis in the assigned language. Do not consult another implementation, processed dataset, or result. Stop for missing inputs or ambiguity; do not invent values or substitute simulated data. Save the code, input fingerprints, sample identifiers, derived values, model terms, and labeled full-precision results with their uncertainty calculations.
:::

:::

::: {.keep-together}
### Compare completed implementations {.unlisted}

Supply: both completed implementations, their outputs, and the common specification.

[Explanation and checks in chapter 15](#request-compare-implementations).

::: {.prompt}
> Compare the completed implementations against specification.md and its tolerances. Check input versions, sample membership, exclusions, derived variables, model terms, and reported quantities, using full-precision values. Produce an agreement-and-discrepancy table and identify the earliest stage at which each discrepancy appears. Do not change either implementation or its outputs to force agreement.
:::

:::

## Use LLMs in the research {#prompts-llm}

::: {.keep-together}
### Design controlled LLM research runs {.unlisted}

Supply: the review-generation and judging protocol, inputs, and permitted tools and services.

[Explanation and checks in chapter 16](#request-controlled-llm-runs).

::: {.prompt}
> For this review-generation and judging protocol, specify the inputs, instructions, tools, and services allowed in each stage. Set up fresh runs and verify their actual access against that protocol before the batch. Save raw responses, failures, retries, configuration, and LLM information. Report untested access routes; headless execution alone does not establish isolation.
:::

:::

::: {.keep-together}
### Evaluate a frozen labeling procedure {.unlisted}

Supply: the frozen rubric and prompt, evaluation inputs, and acceptance criteria. Keep the human reference labels unavailable during labeling.

[Explanation and checks in chapter 16](#request-evaluate-labeling).

::: {.prompt}
> Apply the frozen rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. After labeling finishes, compare with the independently adjudicated reference. Report the confusion table, category-specific errors, uncertainty, referral workload, and prespecified acceptance criteria. Do not tune on this sample or drop difficult cases; list disagreements for human review.
:::

:::

## Write and revise {#prompts-writing}

::: {.keep-together}
### Trace numbers into the manuscript {.unlisted}

Supply: the rendered manuscript and saved results, including tables and figure sources.

[Explanation and checks in chapter 18](#request-trace-manuscript).

::: {.prompt}
> Trace each main manuscript result, including the abstract and captions, to its saved source file and exact entry. Record source fingerprints and check values, signs, units, samples, intervals, and rounding in the final rendered document. Identify every affected use when a source result changes. Propose updates only from verified outputs and list unsupported claims for my decision.
:::

:::

::: {.keep-together}
### Draft from the research record {.unlisted}

Supply: the section to draft, research decisions, verified sources, results, and writing guidance.

[Explanation and checks in chapter 18](#request-draft-from-results).

::: {.prompt}
> Draft this section using only the supplied research decisions, verified sources, saved result tables, and figure captions. Where a claim, number, or reference has no support in those files, leave a bracketed gap and list it at the end. Follow my writing conventions. Do not invent evidence or change the scientific interpretation to complete the prose.
:::

:::

::: {.keep-together}
### Draft a response from your decisions {.unlisted}

Supply: reviewer comments, your decisions, and the revised manuscript and analysis records.

[Explanation and checks in chapter 18](#request-reviewer-response).

::: {.prompt}
> Draft the reviewer response from the supplied comments and my decision notes. Quote each comment, lead with the substantive answer, and cite the actual locations of manuscript changes. Do not add concessions I did not make or claim an analysis was run without its saved output. Flag unresolved comments and record any approved methodological change in the project record.
:::

:::

## Reproduce and share {#prompts-handoff}

::: {.keep-together}
### Test a clean-copy handoff {.unlisted}

Supply: the project, README, input manifest, reference outputs, and comparison tolerances.

[Explanation and checks in chapter 19](#request-reproduce-project).

::: {.prompt}
> Test a separate copy using the README and input manifest. Restore the recorded environment without upgrading it, run the documented commands, and compare outputs using the agreed tolerances. Record failures and missing inputs without altering the analysis or criteria to force agreement. If only synthetic inputs are available, state that reproduction with the study data remains untested.
:::

:::

::: {.keep-together}
### Review a proposed deposit {.unlisted}

Supply: the proposed deposit snapshot, manuscript, input manifest, and sharing requirements.

[Explanation and checks in chapter 19](#request-review-deposit).

::: {.prompt}
> Review the proposed deposit against the manuscript, code, input manifest, and sharing requirements. Identify confidential material, credentials, personal paths, missing dependencies, and incomplete access instructions. Check contributors, licenses, AI disclosure, and records needed to understand the results. Propose corrections without uploading or deleting files or rewriting history.
:::

:::
<!-- /collection:prompts -->

# Appendix C. Troubleshooting {#troubleshooting}

When something goes wrong, ask the agent to identify the cause before changing the analysis. Preserve the affected files and useful error messages so it can compare what happened with what should have happened.

For example, a rerun may produce a different sample size because the inputs changed, an exclusion rule changed, or an old intermediate file was reused. Have the agent compare those stages and show where the difference first appears. That evidence determines whether to repair the implementation or reconsider a research decision.

## Problems with the agent's work {#troubleshoot-work}

| What you notice | What to ask the agent to do | Explanation |
|:---------------------------|:-------------------------------------------------|:---------------------|
| An answer has no supporting evidence | Locate the cited passage or saved result. Mark claims it cannot substantiate. | [Source support](#literature-synthesis) |
| The session loses track of decisions | Save the current work and unresolved issues, then use those records to start a focused session. | [Project records](#maintain-project-context) |
| Old instructions conflict with current files | Identify which instructions were used and where they disagree. Propose corrections to the stale record. | [Shared guidance](#maintain-shared-conventions) |
| The agent changes the question or weakens a check | Show the change against the agreed specification and preserve the failed result. You decide whether a scientific revision is justified. | [Research decisions](#review-project-plan) |
| A rerun gives different results | Compare inputs, sample rules, software, settings, and intermediate outputs. Locate the earliest difference before proposing a fix. | [Reproduction checks](#test-and-name-the-reproduction-route) |
| Two implementations disagree | Compare each stage against the specification; do not edit one merely to match the other. | [Investigating disagreement](#investigate-the-earliest-disagreement) |
| The manuscript contains stale numbers | Trace affected values to their saved sources and propose updates from verified results. | [Manuscript checks](#trace-manuscript) |

## Jobs and app controls {#troubleshoot-execution}

| What you notice | What to ask the agent to do | Explanation |
|:---------------------------|:-------------------------------------------------|:---------------------|
| A long job seems to have stopped | Check the process or queue, recent log entries, and expected outputs before restarting it. | [Unattended jobs](#unattended-jobs) |
| An [R](https://www.r-project.org/) job on macOS runs continuously without output when launched by an agent | Check whether it matches the documented launch issue; use the execution wrapper if confirmed. This is a specific R-on-macOS problem, not a general remedy for slow analysis. | [Toolkit diagnosis](https://dss-agentic-toolkit.pages.dev/chapters/troubleshooting.html#r-on-macos) |
| An app control is missing or has a different label | Compare your account and visible layout with current documentation. Identify a supported way to perform the task. | [App controls](#find-your-way-around) |

## Permissions and data {#troubleshoot-access}

| What you notice | Next action | Explanation |
|:---------------------------|:-------------------------------------------------|:---------------------|
| Routine work repeatedly asks for approval | Ask the agent to identify the tool action and the mode or permission rule causing the prompt, then propose a narrowly scoped change for your decision. | [Approval settings](#choose-how-actions-are-approved) and [access configuration](#access-report) |
| The agent cannot reach an input or service | Ask it to report the blocked action and required access. Confirm that the project permits that access before approving a change. | [Project access](#access-scope) |
| Restricted material may have reached a service | Stop further access and follow your institution's incident procedure. Record the material and service involved; seek guidance before deleting evidence. | [Accidental exposure](#accidental-exposure) |

Once the cause is confirmed, have the agent record the remedy in the project's troubleshooting notes or relevant instructions. Include the affected software or setting and the check that showed the problem was resolved.

# Appendix D. Glossary {#glossary}

Look up a term here, then follow its link to the explanation in the guide. For example, *LLM inference* means generating a response with a trained LLM; it differs from statistical inference about a population or effect.

::: {#term-adapter}
*Adapter.* The learned adjustments saved by a method such as LoRA and used with a particular base LLM. An adapter alone is not the complete LLM. [LoRA](#lora).
:::

::: {#term-agent}
*Agent.* A system combining an LLM, tools, and a software harness. It can use tool results to choose its next action. [Agent components](#how-can-an-llm-act-on-a-research-project).
:::

::: {#term-api}
*API.* Application programming interface: a defined way for software to request data or actions from another program or service. [Acquiring data](#acquisition-ladder).
:::

::: {#term-assertion}
*Assertion.* A check in code that reports or stops execution when an expected condition fails, such as an unexpected sample size. [Implementation checks](#investigate-the-earliest-disagreement).
:::

::: {#term-auto-mode}
*`Auto` mode.* A [Claude Code](https://code.claude.com/docs/en/overview) permission mode that combines permission rules with automated review of actions. It reduces routine approval prompts while retaining checks. [Approval settings](#choose-how-actions-are-approved).
:::

::: {#term-brief}
*Brief.* A written description of a task or project. For the maintained file describing a project, see [project instructions](#term-project-instructions).
:::

::: {#term-build}
*Build.* Running commands that produce specified outputs from their inputs, such as a figure from saved estimates or a manuscript from text and tables. A build need not rerun every analysis step. [Saved commands](#saved-commands).
:::

::: {#term-calibration}
*Calibration.* In this guide, assessing an estimator or decision rule using simulated data with known properties. The conclusions depend on the scenarios and performance measures examined. [Simulation goals](#decide-what-the-test-must-establish).
:::

::: {#term-chain-of-custody}
*Chain of custody.* A record of where protected material and its copies go, who or what can access them, and what retention or deletion options are available. [Data custody](#data-chain-of-custody).
:::

::: {#term-checksum}
*Checksum.* A fingerprint calculated from a file's contents. It helps identify a file version but does not establish that the contents are correct. [Tracing results](#trace-manuscript).
:::

::: {#term-commit}
*Commit.* A recorded version of the files tracked by [Git](https://git-scm.com/), with a message describing the changes. Commits provide versions to compare or restore. [Recovery](#project-recovery).
:::

::: {#term-compaction}
*Compaction.* Summarizing earlier conversation material to make room in the LLM's context window. Details can be lost, so project records should preserve important decisions and unfinished work. [Context limits](#usage-and-context).
:::

::: {#term-container}
*Container.* A separate software environment for running a task with specified dependencies and configured access to files and networks. Its protections depend on that configuration. [Separate environments](#when-a-separate-environment-helps).
:::

::: {#term-context}
*Context.* The instructions, conversation, file contents, and tool results supplied to an LLM for generating a response. Supplying local files to a hosted LLM transmits their contents to the provider. [Agent loop](#how-does-an-agent-work-through-a-task) and [data movement](#what-reaches-the-llm).
:::

::: {#term-context-window}
*Context window.* The limit on how much information an LLM can process in a request, including supplied context and generated tokens. A continuing session may use compaction to stay within that limit. [Usage and context](#usage-and-context).
:::

::: {#term-decision-rule}
*Decision rule.* A specified rule for drawing a conclusion from results, such as reporting evidence of an effect when an interval excludes zero. Simulation can assess how often the rule reaches the intended or mistaken conclusion. [Known-truth checks](#calibration-example).
:::

::: {#term-deny-rule}
*Deny rule.* A permission rule that blocks matching tool actions. Its coverage depends on the tool and execution route; a file-tool rule does not necessarily cover a script reading the same file. [Enforcing access](#enforce-those-limits).
:::

::: {#term-diff}
*Diff.* A comparison showing changes between two versions of a file, often line by line. [Version history](#project-recovery).
:::

::: {#term-effort}
*Effort.* A setting that controls how much reasoning an LLM is allowed to use. More effort can use more time and allowance without guaranteeing a correct result. [LLM and effort settings](#choose-the-llm-and-reasoning-effort).
:::

::: {#term-environment-variable}
*Environment variable.* A named value made available to a running program. Services sometimes use these values to receive credentials or configuration; programs with access can read them. [Credentials](#identify-inputs).
:::

::: {#term-estimand}
*Estimand.* The quantity a study aims to estimate, including the population or averaging sample and any comparison. [Scientific specification](#example-specification).
:::

::: {#term-estimator}
*Estimator.* A procedure that uses data to estimate an estimand. [Scientific specification](#example-specification).
:::

::: {#term-fine-tuning}
*Fine-tuning.* Additional training that adapts an existing LLM by changing learned parameters. Supplying context alone does not change those parameters. [Context and training](#context-or-training).
:::

::: {#term-global-instructions}
*Global instructions.* Another name for [personal instructions](#term-personal-instructions) that apply across projects.
:::

::: {#term-harness}
*Harness.* The software around the LLM that supplies context, handles permissions, runs permitted tools, and returns their results. [Agent components](#how-can-an-llm-act-on-a-research-project).
:::

::: {#term-headless-agent}
*Headless agent.* An agent invoked without an interactive conversation, often from a saved request in a larger workflow. Headless execution does not by itself isolate the agent's inputs or tools. [Controlled runs](#headless-agents).
:::

::: {#term-import}
*Import.* In a `CLAUDE.md` instruction file, an `@` reference that includes another file's contents. [Instruction files](#project-records).
:::

::: {#term-independent-implementation}
*Independent implementation.* A separate implementation built from the same scientific specification and original inputs without consulting the first implementation or its results. [Independent checks](#build-two-implementations-separately).
:::

::: {#term-llm-inference}
*Inference, LLM.* Running an already-trained LLM to generate a response. This differs from statistical inference about a population or effect. [LLM research outputs](#define-the-output-and-its-research-meaning).
:::

::: {#term-llm}
*LLM.* Large language model: a neural network trained to learn language patterns. LLMs used in assistants generate responses by predicting successive tokens from the supplied context. [How responses are generated](#how-does-an-llm-generate-a-response).
:::

::: {#term-lockfile}
*Lockfile.* A file recording resolved software dependencies and versions, such as `renv.lock` or `uv.lock`. It helps restore the package environment; language versions and system dependencies may need separate records. [Software environments](#assemble-the-files-and-instructions).
:::

::: {#term-lora}
*LoRA.* Low-Rank Adaptation: a fine-tuning method that learns compact adjustments while keeping the base LLM's weights fixed. The adjustments can be saved as an adapter. [How LoRA works](#lora).
:::

::: {#term-model}
*Model.* This guide uses *LLM* for the language component of an agent and *statistical model* for a model fitted as part of the research analysis. The app's `Model` control selects an LLM. [LLM settings](#choose-the-llm-and-reasoning-effort).
:::

::: {#term-modular-workflow}
*Modular workflow.* Research steps that can run independently, with explicit inputs and saved outputs. Each performs a coherent operation, such as fitting a statistical model or generating a figure. [Modularity](#modular-steps).
:::

::: {#term-monte-carlo-error}
*Monte Carlo error.* Variation from using a finite number of random draws or simulation repetitions. For example, estimated interval coverage varies across repeated simulation experiments. It differs from the uncertainty interval for a study's effect estimate. [Simulation results](#interpret-failures-before-changing-the-method).
:::

::: {#term-open-source-ai}
*Open-source AI.* Under the Open Source Initiative's definition, an AI system supplied with the rights and materials needed to use, study, modify, and share it. Downloadable weights alone do not establish this. [LLM choices](#choose-for-the-task-and-available-hardware).
:::

::: {#term-open-weight-llm}
*Open-weight LLM.* An LLM whose trained weights are available under stated license terms. It can run on your computer, institutional infrastructure, or a hosting provider's computers. [Deployment choices](#local-models).
:::

::: {#term-permission-mode}
*Permission mode.* A setting governing which actions require approval during a session. Permission rules and other access controls also affect what can run. [Approval settings](#choose-how-actions-are-approved).
:::

::: {#term-personal-instructions}
*Personal instructions.* Conventions used across your projects, such as writing preferences or software practices. These are often called global instructions. [Shared guidance](#shared-instructions).
:::

::: {#term-plan-mode}
*`Plan` mode.* A mode for inspecting a project and developing a plan before implementation. Writing a planning record does not authorize ordinary changes to the project. [Planning settings](#decide-whether-to-plan-first).
:::

::: {#term-project-instructions}
*Project instructions.* A maintained description of a project's purpose, files, working rules, and relevant records, commonly saved as `CLAUDE.md` or `AGENTS.md`. [Project context](#project-records).
:::

::: {#term-prompt}
*Prompt.* A request or other input supplied to an LLM or agent. An *approval prompt* instead asks you whether an action may proceed. [Example requests](#prompt-index) and [approval settings](#choose-how-actions-are-approved).
:::

::: {#term-provenance}
*Provenance.* A record of where data or results came from and how they were acquired or produced. For a downloaded dataset, this includes its source, version, retrieval method, and applicable terms. [Input provenance](#data-provenance).
:::

::: {#term-provider}
*Provider.* The organization operating a hosted LLM service and receiving information submitted to it. The provider need not be the organization that developed the LLM. [Hosted processing](#what-reaches-the-llm).
:::

::: {#term-qlora}
*QLoRA.* A method combining LoRA with a quantized base LLM to reduce training memory requirements. [Adaptation methods](#lora).
:::

::: {#term-quantization}
*Quantization.* Representing numerical values in an LLM at reduced precision to reduce memory or storage requirements. Evaluate the particular quantized version intended for the research task. [Hardware and LLM choice](#choose-for-the-task-and-available-hardware).
:::

::: {#term-rag}
*RAG.* Retrieval-augmented generation: selecting relevant material from a collection and supplying it to an LLM as context. [Context and training](#context-or-training).
:::

::: {#term-raw-data}
*Raw data.* Inputs preserved as received from their source. Save transformations separately so they can be traced back to those originals. [Preserving inputs](#data-provenance).
:::

::: {#term-reproduction}
*Reproduction.* Repeating a stated analysis or document-building procedure from specified files and instructions. Name the starting inputs and what was checked; generating new LLM responses is a different route from analyzing saved responses. [Reproduction routes](#test-and-name-the-reproduction-route).
:::

::: {#term-sandbox}
*Sandbox.* Operating-system restrictions on covered execution, such as limits on file or network access. Tools outside the sandbox require separate controls. [Access enforcement](#enforce-those-limits).
:::

::: {#term-session}
*Session.* A conversation and its associated work with an agent. A session can continue through compaction; its full history need not remain in the LLM's active context. [Context limits](#usage-and-context).
:::

::: {#term-skill}
*Skill.* A reusable set of task instructions, sometimes with scripts or other supporting files, that an agent can load when needed. [Recurring tasks](#what-skills-add).
:::

::: {#term-smoke-test}
*Smoke test.* A small run through a workflow to detect execution problems before a larger batch. It does not establish the statistical properties of the analysis. [Checking execution](#check-execution-before-scaling-up).
:::

::: {#term-token}
*Token.* A unit used by an LLM to process and generate text: a word, part of a word, punctuation, or another encoded piece. [Text generation](#how-does-an-llm-generate-a-response).
:::

::: {#term-tool-call}
*Tool / tool call.* A tool is a program that performs an action, such as reading a file or running code. A tool call requests that action; the harness runs it if permitted and returns the result. [Agent components](#how-can-an-llm-act-on-a-research-project).
:::

::: {#term-usage-window}
*Usage window.* The period over which an account's usage allowance is measured. It differs from the context window limiting an individual LLM request. [Usage limits](#usage-and-context).
:::

::: {#term-version-control}
*Version control.* A system that records selected versions of files so changes can be compared and earlier work recovered. [Project recovery](#project-recovery).
:::

::: {#term-weights}
*Weights.* The numerical parameters learned during LLM training. Running an LLM uses those parameters; fine-tuning changes some of them or learns additional adjustments. [Context and training](#context-or-training).
:::
