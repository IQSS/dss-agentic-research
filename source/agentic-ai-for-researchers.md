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

The same AI app may support both ways of working. You can keep your existing [`R`](https://www.r-project.org/), [`Stata`](https://www.stata.com/), or [`Python`](https://www.python.org/) software; adopting an agent does not require changing statistical languages.

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

The examples use [`Claude Code`](https://code.claude.com/docs/en/overview) in the Mac desktop app. You do not need terminal or [`Git`](https://git-scm.com/) experience to begin, and the research practices apply to other agents. Harvard-specific guidance appears in clearly marked passages.

The appendices provide downloadable project scaffolds and starter files, example requests, troubleshooting advice, and a glossary. The companion, [*Extending Your Agent’s Toolkit*](https://dss-agentic-toolkit.pages.dev/), explains how to ask an agent to install, configure, and use additional tools when your research needs them. You can adopt those tools as they become useful.

# 2. Get started with the app {#first-session}

`Claude`’s desktop app lets you work with an agent through a conversation. You describe what you need, and the agent can use your project’s files and software to carry it out.

Suppose you need to change the labels on a figure. You can ask the agent to edit the plotting script and regenerate the figure, then open the result to check it. The app gives you a place to describe the change, follow the work, and intervene if the agent misunderstands.

## Install and sign in

1. Download and install the Mac app using the [official `Claude Code` desktop instructions](https://code.claude.com/docs/en/desktop-quickstart).
2. Sign in with the account you intend to use for research.

> **Harvard.** Request a license through [HUIT’s `Claude` page](https://www.huit.harvard.edu/claude), using the form for your school or unit. Sign in with that account for your Harvard research.

## Find your way around

The app opens in the `Claude` tab, which handles general tasks using tools mainly in the cloud. For the work in this guide, use `Code` with `This computer` selected so `Claude` can edit project files and run analyses using the software installed on your computer. The LLM still runs on Anthropic’s servers. When the agent supplies project content to the LLM, it sends that information to Anthropic. [Chapter 3: Know where your data goes](#research-limits) explains what this means for your research data.

Each time you open the app, switch to `Code` using the `</>` button near the top of the sidebar. The illustration below shows the `Code` tab. [Hover over a numbered control to read its explanation. On a touchscreen, tap the number; with a keyboard, use the Tab key. You can enlarge the illustration or read all the explanations below it.]{.web-only}

![](figures/claude-code-app.svg){.interactive-app .tall fig-alt="The Code tab in Claude’s desktop app, with numbered controls for the project folder, execution environment, task, model, effort, permissions, usage, account, and settings." above="8pt" below="8pt"}

## Work with the agent

Describe what you want in the message box. As the agent works, the conversation shows its progress, questions, and requests for permission. You can add information or clarify your instructions there. When it finishes, open the result and decide whether it needs further work. For example, if the revised figure labels are crowded, ask the agent to shorten them and regenerate the figure.

If the agent misunderstands the task, you can stop it and explain what needs to change. Stopping does not undo changes it has already made. Before working with your research files, read [Chapter 3: Know where your data goes](#research-limits), [Chapter 4: Control what the agent can do](#agent-access), and [Chapter 5: Choose settings for the task](#directing-work).

# 3. Know where your data goes {#research-limits}

An agent can send research material to the company running its LLM (the *provider*), even while working with files on your computer. For `Claude`, that company is Anthropic. Before giving an agent access, you need to understand what information may be sent, what the provider keeps, and whether your project permits that use.

Suppose you ask an agent to diagnose an error in a script that analyzes confidential birth records. It prints several records to understand the problem. Those records can be sent to the LLM as part of its context, even though you never uploaded the dataset yourself.

## What reaches the LLM

With a *hosted LLM*, the LLM runs on the provider’s computers. The agent’s tools can run on your computer and return whole files, selected records, figures, or messages printed by a program. When the agent supplies those results to the LLM, it sends that information to the provider, even with `This computer` selected in [`Claude Code`](https://code.claude.com/docs/en/desktop).

![](figures/research-data-flow.svg){#fig-research-data-flow fig-alt="On your computer, the agent's tools read project files. The agent sends tool results to the hosted LLM on the provider's computers. The provider may retain copies."}

A script reading a dataset does not, by itself, send every record to the LLM. What matters is what the agent sends to the LLM. An error message might contain a participant’s identifier, for example. Consider code, filenames, data dictionaries, and derived outputs as well as data files. Summaries can also contain protected information.

## What the provider keeps

The LLM uses the information sent to it to generate a response. The provider may retain conversations and tool results after the task ends. Using that material to train an LLM is a separate use: a promise not to train on your data does not mean that no copy is kept.

Anthropic documents a standard 30-day retention period for commercial `Claude Code` use, with other arrangements available to qualifying organizations. Enterprise chat and project retention controls have different coverage.[^data-retention] Even a few weeks may exceed what your project permits. Confirm the terms for your product and account; personal-account privacy settings do not provide an institutional agreement’s contractual coverage.

[^data-retention]: See Anthropic’s [`Claude Code` data-usage documentation](https://code.claude.com/docs/en/data-usage) and [Enterprise retention guidance](https://privacy.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans), checked November 6, 2026. The products have different controls and exclusions. These public documents do not establish Harvard’s retention duration.

## Check what your project permits

Check both institutional approval for the service and your project’s terms. An institution may approve a tool while a data-use agreement prohibits sending your records to it. Consent, an IRB protocol, confidentiality agreements, and federal grant or other funder requirements may also limit the use. If the terms are unclear, ask the responsible institutional office before supplying the material.

> **Harvard, checked November 6, 2026.** [HUIT’s `Claude` guidance](https://www.huit.harvard.edu/claude) approves Harvard `Claude` Chat and Code for data up to Level 3; inputs are not used for training. Connected services require separate security and privacy approval. Check the guidance for the feature you intend to use and confirm retention with the service team. Your project’s terms may be more restrictive.

If you connect the agent to another service, check your institution’s guidance to confirm that the connection is approved for the data you intend to use.

## Work with restricted data

An agent writing analysis code can work with synthetic records that have the required columns and types. Give it a shareable data description and have it develop and test the code with those records. Run the saved code on real data in an approved environment, without giving the agent access unless separately authorized. Check the real-data analysis there; return only information that is permitted to leave.

If the LLM must analyze the material, such as coding confidential interviews, it needs the real text. You could use an approved hosted service or an *open-weight LLM*, whose trained parameters are available to download and run on your computer or an institutional server. Running the LLM within approved infrastructure gives you control over where it processes data; the agent’s tools and connections still need restrictions. [Chapter 17: Run and adapt LLMs for your research](#research-models) explains these choices, and [Chapter 16: Use LLM outputs as research data](#llm-measurements) covers evaluating the LLM’s work.

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

Once you know which information the agent may use, configure its access to files and tools. [Chapter 4: Control what the agent can do](#agent-access) explains how.

# 4. Control what the agent can do {#agent-access}

An agent can work more independently when it has permission to do routine work and clear restrictions on what it can access. You decide which files it may read or change and which services it may use. The agent can help configure those controls, following the data-use decisions from [Chapter 3: Know where your data goes](#research-limits).

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

In [`Claude Code`](https://code.claude.com/docs/en/overview), *permission rules*[^access-permission-rules] tell the harness[^access-harness] which tool actions to allow, ask you about, or deny. You can permit routine edits, require approval before publishing files, and deny changes to protected inputs. A *sandbox*[^access-sandbox] adds restrictions enforced by the operating system[^access-operating-system] on the commands running inside it, including programs those commands start. It can limit which files they read or change and which network destinations they contact.

[^access-permission-rules]: Rules that allow specified tool actions, require approval, or block them. `Claude Code` enforces these settings; instructions in a prompt do not change them. See Anthropic's [permission documentation](https://code.claude.com/docs/en/permissions).

[^access-harness]: The software around the LLM that supplies context, checks permissions, runs permitted tools, and returns their results. See Anthropic's [explanation of how `Claude Code` works](https://code.claude.com/docs/en/how-claude-code-works).

[^access-sandbox]: A restricted environment for running programs, with limits on which files and network destinations they can access. See Anthropic's [sandbox documentation](https://code.claude.com/docs/en/sandboxing) for the controls and tools covered.

[^access-operating-system]: The core software that manages a computer's hardware, files, and running programs. macOS, Windows, and Linux are examples. See IBM's [introduction to operating systems](https://www.ibm.com/think/topics/operating-systems).

Both are needed because a file-tool restriction may not block a script that reads the same file. Conversely, the sandbox does not cover `Claude Code`'s built-in file tools or separately connected tools. A queued job or a command run outside the sandbox may also have different access. Have the agent check the controls for the tools it will actually use; [Chapter 2: Control what added tools can access](https://dss-agentic-toolkit.pages.dev/chapters/tool-access.html) in the companion guide *Extending Your Agent's Toolkit* explains configuration.

Use global settings for rules you want across your projects. Use project settings for permissions tied to a particular study, such as which input folders must remain unchanged and which services the work requires. Ask the agent to inspect both before proposing changes.

| Scope | File | Applies to |
|:----------------|:------------------------------------|:-------------------------------|
| Global | `~/.claude/settings.json`[^settings-home] | Your work across projects on this computer. |
| Project | `.claude/settings.json` inside the project | This project; the file can be shared with collaborators. |
| Personal project | `.claude/settings.local.json` inside the project | Your own settings for this project. |

[^settings-home]: The tilde (`~`) means your home folder. The other two paths start inside the project folder. See Anthropic's [settings reference](https://code.claude.com/docs/en/settings).

For many settings, your personal project file overrides the shared project file, which overrides your global defaults. Permission rules work differently: `Claude Code` combines the rules from these files, and a matching deny takes precedence over an allow. Allowing edits to a folder in your project settings therefore does not remove a global rule that prohibits those edits. Your institution may also impose restrictions through managed settings.[^settings-precedence]

[^settings-precedence]: Anthropic's [settings precedence](https://code.claude.com/docs/en/settings#settings-precedence) explains file priority; its [permission documentation](https://code.claude.com/docs/en/permissions#settings-precedence) explains why a deny rule from one file takes precedence over an allow from another.

> **Keep secrets out of saved permissions.** Choosing `Yes, and don't ask again` can save a command in `.claude/settings.local.json`, including any password or API key written into it.[^saved-permission-secrets] Have the agent keep this file out of [version control](#project-recovery) and shared archives, and supply credentials when commands run without writing their values into commands or output. If a credential has been exposed, revoke or replace it; deleting the file is not enough. The toolkit's [Chapter 12: Keep credentials out of research files: 1Password and direnv](https://dss-agentic-toolkit.pages.dev/chapters/credentials.html) explains the setup.

[^saved-permission-secrets]: Apiiro's [November 2026 investigation](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) documents secrets in saved approvals. `Claude Code` normally adds the local settings file to your global `Git` ignore list when it writes the file inside a repository, but this does not protect a file `Git` already tracks. Exclude `.claude/settings.local.json` in the project's own `.gitignore` too; the shared `.claude/settings.json` can remain under version control. See Anthropic's [settings documentation](https://code.claude.com/docs/en/settings#keep-personal-settings-out-of-a-repository).

## When a separate environment helps

A *container*[^container-definition] provides a separate software environment with selected files and tools. You might use one to run an unfamiliar replication package without exposing unrelated projects or credentials. You could also run an agent and an open-weight LLM inside a container, giving them only the study files and tools they need. That requires configuring the folders, credentials, and network connections available inside it; putting software in a container does not automatically keep its data there.

[^container-definition]: A container runs a program and its supporting software in an isolated environment. Its configuration determines which files and connections it can access. See [`Docker`'s introduction to containers](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/).

Containers can also preserve the software needed to reproduce an analysis. The toolkit's [Chapter 10: Run work in a separate environment: containers](https://dss-agentic-toolkit.pages.dev/chapters/containers.html) covers these uses and their setup. Any environment processing protected data still needs to meet the requirements established in [Chapter 3: Know where your data goes](#research-limits).

## Have the agent configure and check access {#access-report}

You can direct this setup from the app. Give the agent your permitted files and services, then ask:

> Inspect the current settings and propose controls for the access I've described. Identify which settings files apply and where you propose to save each change. After I approve the changes, configure them and test permitted and blocked operations with harmless files. Check file tools, commands, and any connections this task uses. Report what worked, what failed, and anything you could not verify.

For example, the agent can check that an approved test file is readable, a protected test file cannot be changed, and an excluded test file cannot be read through either a file tool or a script. It should report the actual outcomes and leave failed restrictions in place for diagnosis, rather than bypassing them to complete the test. These checks can reveal mistakes; they do not establish protection for every possible action. If a required control is unavailable, ask your institution's support team for an appropriate environment.

Keep the settings and a brief record of the checks with the project. Repeat relevant checks when you add tools or change access. If a task needs broader access, have the agent explain what it needs and why before changing the settings. Also keep a recoverable version of the files it may edit, as described in [Chapter 6: Organize your research projects](#project-recovery). [Chapter 5: Choose settings for the task](#directing-work) covers everyday settings once this access is established.

# 5. Choose settings for the task {#directing-work}

The app lets you choose whether the agent should plan before acting, how actions receive approval, and which LLM and reasoning effort to use. These choices help you give difficult work enough attention while letting routine tasks proceed with fewer interruptions.

Changing a figure label usually needs a direct instruction. Investigating why two analyses produce conflicting estimates may need a plan and more reasoning. Both tasks use the access controls from [Chapter 4: Control what the agent can do](#agent-access); changing a session setting does not replace those controls.

![](figures/session-settings.svg){#fig-session-settings fig-alt="An enlarged view of the Claude Code controls below the message box. Model selects the LLM, High is the shown reasoning effort, Auto is the shown permission mode, and the usage circle opens allowance and reset information. The four controls have separate purposes." above="6pt" below="6pt"}

::: {.pagebreak}
:::

## Decide whether to plan first

Use `Plan` mode when the task leaves important choices unresolved. Select it in [`Claude Code`](https://code.claude.com/docs/en/desktop), describe the intended result and constraints, and ask for the proposed approach before implementation. The plan should identify the files involved, questions that need your judgment, and checks of the completed work.

Read it for analytical assumptions as well as proposed steps. Has the agent chosen the correct input file? Will it preserve the intended sample? Does it propose replacing your statistical model with a simpler one? Resolve these questions before authorizing implementation and switching to an execution mode. For difficult work, another agent can critique the plan; [Chapter 7: Give the agent context for your project](#review-project-plan) explains how to give that reviewer enough context.

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

Reading context, reasoning, and generating responses consume LLM tokens, the pieces of text introduced in [Chapter 1: How agents can help your research](#research-uses). Long inputs, extensive outputs, higher effort, and several agents working at once can use more of your allowance. The accounting depends on the LLM and your plan, so message count alone does not tell you how much remains.

Click the app's usage circle to see usage and reset information. If your account has both session and weekly limits, resetting the shorter allowance does not reset the weekly one. Check these before starting substantial work, along with any charges for extra usage. [`Claude`'s usage guidance](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) explains the current arrangements.

Your usage allowance is separate from the context window, which limits how much information the LLM can work with at once. As a conversation grows, `Claude Code` automatically summarizes earlier material to make room for continued work, a process called *compaction*. The summary can omit details, including earlier instructions. Compaction does not reset your account’s usage allowance.[^context-compaction]

Keep consequential decisions and the current state of the work in project context files that the agent can read again. This helps preserve an agreed sample definition or modeling choice when a conversation is compacted or a new session begins. [Chapter 7: Give the agent context for your project](#project-context) explains which context files to maintain.

A saved analysis can run for hours without continuous LLM work. Repeated progress questions and large logs can still consume tokens. Have the agent run the saved computation, then check its completion and relevant outputs; [Chapter 13: Build a modular analysis workflow](#unattended-jobs) explains how to manage longer jobs. The next chapter establishes the project files these tasks will use.

[^context-compaction]: Anthropic’s [context-window documentation](https://code.claude.com/docs/en/context-window) explains automatic compaction and the information retained or reloaded afterward.

<!-- ===================== PART II — DIRECT THE WORK ===================== -->

# 6. Organize your research projects {#project-organization}

An agent needs to find the right files before it can do useful work. A consistent project structure helps it locate the current analysis, preserve original inputs, and save results where you and your collaborators expect them. The same organization makes it easier to explain how a result was produced or return to an earlier version.

Suppose a paper has folders called `analysis-final/` and `analysis-new/`, plus three sets of figures. You may remember which files belong together; an agent needs that relationship made explicit. Establishing a clear structure helps whether you are starting a paper or introducing an agent to work already underway.

## Give projects a place in a workspace {#workspace-layout}

A *workspace* is a parent folder containing your projects. You might group papers together, keep shared datasets in a separate area, and give a research group's website its own project folder. The arrangement should make sense for your work; the example below is one possible layout.

![](figures/project-organization.svg){#fig-project-organization .tall fig-alt="A workspace contains separate paper, data, and website projects. One paper folder is expanded to show original and processed inputs, analysis code, saved results, manuscript source, and five project context files: CLAUDE.md, STATUS.md, TASKS.md, SPECIFICATION.md, and METHODOLOGY.md." above="8pt" below="8pt"}

Keep independently maintained projects in separate folders and open the relevant one in the app. A short workspace index can record each project's purpose and location. If two papers use the same curated dataset, the index can show that relationship, while each paper records the data version it used. [Chapter 8: Apply your conventions across projects](#shared-conventions) explains how to make this index available across projects.

::: {.needspace height="9cm"}
:::

## Choose a structure suited to the project {#project-shapes}

Different outputs need different folders. A paper needs analysis results and manuscript source; a website needs editable pages and somewhere to build the site. Use consistent names for common purposes without forcing every project into the same layout.

| Project | What its structure needs to distinguish |
|:------------|:----------------------------------------------------|
| Paper | Original inputs, analysis code, saved results, manuscript source, and research decisions. |
| Dataset | Acquisition code, source records, processing steps, and documented releases. |
| Website | Editable content, images and styles, and the generated site. |

Preserve original inputs and create derived files through saved code. Keep current figures and tables separate from exploratory outputs, with enough information to identify the analysis that produced them. [Appendix A: Project scaffolds and starter files](#starter-files) provides example folder structures and project context files to adapt. [Chapter 7: Give the agent context for your project](#project-context) explains what to put in the project context files shown in the diagram and how the agent keeps them current.

Paths in scripts should be relative to the *project root*, the folder containing the project. A script that reads `data/raw/births.csv` can work on a collaborator's computer even when their home folder has a different name. Ask the agent to use the project's existing method for locating its root, if one is already established. For [`R`](https://www.r-project.org/) projects without one, the [`here`](https://here.r-lib.org/) package is a good choice: it builds file paths from the project root. [Chapter 13: Build a modular analysis workflow](#research-workflows) explains how to organize the analysis code itself.

## Keep a recoverable version {#project-recovery}

Use [`Git`](https://git-scm.com/) to retain versions of code, documentation, and suitable configuration files as the project develops. The agent can create these checkpoints and recover earlier work; you do not need to learn `Git` commands or inspect every line of code. Give a specific recovery request, such as restoring yesterday's sample-selection code while keeping today's manuscript edits. [Chapter 4: Recover earlier work: git and gh](https://dss-agentic-toolkit.pages.dev/chapters/version-control.html) in the companion guide *Extending Your Agent's Toolkit* explains how to have the agent save versions of your work and restore earlier ones.

Before a substantial reorganization, also keep a recoverable copy outside the folder being changed. A dated copy is a workable starting point if you are not yet using version control. `Git` only preserves files and versions it records, and neither `Git` nor a synchronized folder replaces a backup. Keep restricted inputs and credentials out of `Git` history and use the project's approved storage for them.

If the project uses a synchronization service (e.g., [`Dropbox`](https://www.dropbox.com/), [`Google Drive`](https://www.google.com/drive/), or [`OneDrive`](https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage)), retain that arrangement while asking the agent to check how it handles software libraries, caches, and `Git`'s internal files. The toolkit's [synchronized-folder guidance](https://dss-agentic-toolkit.pages.dev/chapters/troubleshooting.html#cloud-sync-storage) explains what to check and how to handle exclusions.

## Start a new project {#scaffold-project}

A *project scaffold* is a starting set of folders and files suited to the intended output. Give the agent the project's purpose, deliverable, and any research group conventions, then ask it to create that structure. A scaffold can include project context files with instructions and space for decisions without pretending that the scientific choices have already been made.

<!-- prompt:scaffold-project -->
::: {#request-scaffold-project .prompt}
> Set up a project for the research described below. Use the existing workspace and research group conventions where available. Propose a structure suited to the deliverable, then create the agreed folders and project context files. Preserve existing files and list research decisions still needed from me.
:::
<!-- /prompt:scaffold-project -->

Review the proposed organization and the facts entered in the project context files. Unknown methods, collaborators, or input permissions should remain questions for you. Once a layout works well, a scaffold skill can reuse it for subsequent projects; [Chapter 9: Use skills for recurring tasks](#reusable-procedures) develops that example.

## Organize an existing project {#restructure-project}

Keep the project's existing folder structure if it already makes the files easy to find. For a confusing project, identify the manuscript and outputs you consider current, then ask the agent to inspect the files and propose a reorganization. Filenames and modification dates can help, but script references and your knowledge may be needed to distinguish competing versions.

<!-- prompt:restructure-project -->
::: {#request-restructure-project .prompt}
> Inspect this project and propose a clearer structure. Identify current and uncertain files before moving anything. After I approve the plan, make a recovery copy, reorganize the files, update affected paths, and save an old-to-new file map. Preserve original inputs and check that the affected outputs still reproduce.
:::
<!-- /prompt:restructure-project -->

Have the agent retain original inputs and uncertain duplicates, record old and new paths, and update references in scripts and documents. It should rerun the affected work and compare the results with the saved baseline. Keep the recovery copy until those checks succeed and unresolved files have been explained.

Coauthors can continue sending files in their preferred format. An incoming folder can preserve what arrived while the agent records how each contribution fits into the organized project. The next step is to give it the knowledge needed to work within that structure.

# 7. Give the agent context for your project {#project-context}

An agent joining a research project needs to know what you are trying to establish, which files to use, and which decisions have already been made. Saving that knowledge in the project lets it begin useful work without repeatedly asking you to reconstruct the study. These project context files also help you and your collaborators understand changes made along the way.

Suppose you return to a paper after a month and ask an agent to revise Figure 2. Several versions of the results remain in the project folder. The agent needs to know which version uses the agreed sample, why some observations were excluded, and whether the sensitivity analysis is finished.

## Explain the project and the current task {#project-orientation}

Describe the research question, the relevant data and outputs, and the result you want from this task. Point the agent to the current files and explain which decisions need your involvement. For a new project, identify what remains undecided. For an existing one, supply the information that cannot reliably be inferred from its scripts and filenames.

Conversation details can be lost during [compaction](#usage-and-context) or be unavailable in a new session. Have the agent save agreed decisions and the current state of the work in project context files it can read again. It should also record unresolved questions, so an assumption does not become an apparent fact when the next session begins.

![](figures/project-context.svg){#fig-project-context .tall fig-alt="Five project context files: CLAUDE.md, STATUS.md, and TASKS.md form the top row. SPECIFICATION.md and METHODOLOGY.md sit centered below: current scientific requirements and dated decisions with their reasons. An agent session reads and updates these context files; a later session reads them before continuing." above="8pt" below="8pt"}

## Save project context files {#project-records}

Project context files tell the agent what the project is trying to achieve, how it should work, what has been decided, and what remains to be done. Each file has a specific purpose, as shown below.

In [`Claude Code`](https://code.claude.com/docs/en/overview), a project-level `CLAUDE.md` supplies instructions at the start of a session. Other agent tools use `AGENTS.md` for these instructions.[^project-instructions] Keep the instructions short: explain the project, identify the important files, and tell the agent when to consult them. Detailed plans, results, and decision histories can remain in separate files.

::: {.needspace height="9cm"}
:::

| File | Purpose and example |
|:------------|:----------------------------------------------------|
| `CLAUDE.md` | How the agent should work: follow the scientific specification and read the current status before starting. |
| `STATUS.md` | Current state: the main analysis is complete; the sensitivity analysis is pending. |
| `TASKS.md` | Work to do and completed work: update Figure 2's labels, with a dated entry after checking the result. |
| `SPECIFICATION.md` | Current scientific requirements: which records to include, what to estimate, and which checks and outputs to produce. Have the agent rewrite it when approved decisions change. |
| `METHODOLOGY.md` | Dated scientific decisions and reasons: why an exclusion rule changed and which part of the specification it affects. Add new entries at the top, preserving earlier ones. |
| `README.md` | A collaborator's introduction: what the project contains and how to reproduce its outputs. |

The status, task, specification, and decision-log filenames are conventions, not special commands. Tell the agent which files to read and maintain. For a paper project, keep the current scientific requirements in `SPECIFICATION.md` and the reasons for decisions in `METHODOLOGY.md`. The agent can then find the prescribed analysis without reconstructing it from earlier decisions. When you approve a methodological change, have it update the specification and add an entry to the decision log.

<!-- prompt:project-context -->
::: {#request-project-context .prompt}
> Read this project and draft a concise CLAUDE.md for future sessions. Identify its purpose, current files, agreed research decisions, and unresolved questions. Point to the other project context files and include instructions to keep them current. Preserve existing authored guidance and show me the proposed changes.
:::
<!-- /prompt:project-context -->

A useful instruction identifies both the record and its purpose:

```
Before starting, read STATUS.md and TASKS.md and inspect the relevant files.
Follow SPECIFICATION.md when implementing or checking the analysis;
consult METHODOLOGY.md for decisions and reasons.
After working, update the status and tasks from the outputs actually checked.
After an approved scientific change, update SPECIFICATION.md and add a dated
decision and reason at the top of METHODOLOGY.md. Preserve earlier entries.
```

The [complete project example](#starter-project) is also available as a download. Adapt its research details before using it.

[Download the project CLAUDE.md template](resources/starter-files/project-AGENTS.md){.download-button download="CLAUDE.md"}

::: {.web-only}
<details class="guide-example">
<summary>Read the complete CLAUDE.md example</summary>

<!-- starter:project -->
```
# heat-birthweight

Synthetic teaching study of heat exposure and birthweight. Every individual
record is synthetic; results are not evidence about actual pregnancies.

## Read first
- STATUS.md: current state and next decision.
- TASKS.md: work remaining and dated completions.
- SPECIFICATION.md: current scientific requirements; follow it when implementing
  or checking the analysis.
- METHODOLOGY.md: dated scientific decisions and their reasons; consult it when
  the rationale or history matters.

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
- When the researcher approves a scientific change, rewrite SPECIFICATION.md
  to reflect the current requirements and add a dated entry at the top of
  METHODOLOGY.md explaining the decision, reason, and specification change.
- Preserve older decisions and frozen specifications used for completed runs.
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

[^project-instructions]: When using agent tools from multiple providers, keep one maintained instructions file. Ask the agent to make `CLAUDE.md` a *symbolic link* to `AGENTS.md`, so both filenames refer to the same content, and check that each tool reads it. This avoids independently edited copies. See Anthropic's [instructions for sharing a file](https://code.claude.com/docs/en/memory#share-one-file-with-other-coding-tools) and the [AGENTS.md guidance](https://agents.md/).

## Record plans and research decisions {#review-project-plan}

When a task needs a plan, distinguish the scientific decisions from the agent's proposed implementation. You may already have settled the estimand, sample, and estimator; the agent still needs to work out which scripts to change and which checks to run. Give it the research question and relevant supporting material, and have it identify unresolved choices before implementation.

For difficult work, ask one or two fresh agent sessions to critique the proposed plan. Responses can differ even when the sessions use the same LLM. A fresh session also reviews the plan without the preceding conversation, which may help it notice assumptions the first session took for granted. Give each session the research question, constraints, evidence, and plan, and ask it to identify questionable assumptions, missing steps, or alternatives. Use your judgment and the evidence to resolve their suggestions; sessions using the same LLM can share mistakes, so agreement does not establish that a method is appropriate.

Have the agent save its implementation plan separately from the scientific requirements in `SPECIFICATION.md`. When you approve a scientific change, have it rewrite the affected requirements and add a dated entry at the top of `METHODOLOGY.md`, explaining the decision and its reason. Preserve earlier entries. The project record should explain why the work changed, rather than leaving a later reader to infer the reason from altered code. [Chapter 14: Test the analysis against known truth](#simulation) and [Chapter 15: Check the agent with independent implementations](#checking-analysis) explain how to check the resulting analysis.

## Keep project context files current {#maintain-project-context}

Make maintaining project context files a standing instruction in the project's `CLAUDE.md` or maintained `AGENTS.md`. The agent should read the relevant project context files before starting, track the assigned work, and update the affected files after checking its outputs. You can then direct the research and review the results without issuing the same bookkeeping request every session.

For example, after correcting a figure's labels, the agent adds a dated completion entry to `TASKS.md` and updates `STATUS.md` to identify the rebuilt figure. If no statistical model was refitted, the record should not imply that the analysis was rerun. An approved scientific change updates `SPECIFICATION.md` and receives a dated explanation in `METHODOLOGY.md`; a completed formatting task does not need either change.

The following requests can establish the routine or recover it when a session has lost track of the work.

<!-- prompt:resume-project -->
::: {#request-resume-project .prompt}
> Read CLAUDE.md (or AGENTS.md), STATUS.md, and TASKS.md, plus any other project context files relevant to the next task. Then inspect the inputs and outputs needed for that task. Summarize the current work, flag any disagreement between the project context files and the work saved on disk, and identify the next action.
:::
<!-- /prompt:resume-project -->

<!-- prompt:close-session -->
::: {#request-close-session .prompt}
> Update TASKS.md and STATUS.md from the work and outputs actually checked. For scientific changes I approved, update SPECIFICATION.md and add dated entries at the top of METHODOLOGY.md explaining the decisions, reasons, and specification changes. Preserve earlier entries. Leave unfinished work and failures explicit, with enough information for the next session to continue.
:::
<!-- /prompt:close-session -->

Keep `STATUS.md` short and current. Record completed and outstanding work in `TASKS.md`. Keep current scientific requirements in `SPECIFICATION.md` and dated decisions with their reasons in `METHODOLOGY.md`. Have the agent consult those records when relevant rather than loading every past result into every task. If you edit a file during a session, tell the agent to read it again before continuing. A fresh conversation can still load saved information; [Chapter 16: Use LLM outputs as research data](#control-what-each-reviewer-or-judge-receives) explains how to control what it receives.[^project-auto-memory]

[^project-auto-memory]: With `Claude Code`’s [auto memory](https://code.claude.com/docs/en/memory#auto-memory), the agent decides which notes to save for future sessions. For project context files, you specify what the agent must maintain. Ask it to correct outdated memories, and keep important research decisions in the project context files.

# 8. Apply your conventions across projects {#shared-conventions}

You should not have to explain the same coding, modeling, or writing preferences whenever you begin a project. Global user instructions let the agent reuse those conventions while keeping each study's question, data, and decisions in its own records. Corrections made during one project can then improve work on the next.

For example, you might ask the agent to save results at full precision and report uncertainty alongside estimates. Those conventions can apply to many papers. A decision to restrict one survey analysis to respondents aged 18 and over belongs in that paper's `SPECIFICATION.md`, with the reason recorded in `METHODOLOGY.md`.

## Decide which conventions apply across projects {#shared-instructions}

Global user instructions establish default behaviors across your projects. When a project needs an exception, record it in that project's `CLAUDE.md`[^project-convention-file] and tell the agent to follow it for that project. For example, your usual writing conventions might specify American spelling, while a particular journal requires British spelling.

[^project-convention-file]: If you use an agent from another provider, record the exception in `AGENTS.md` if that is the project instructions file the agent reads.

Save instructions that describe a recurring way of working. “Preserve the existing software environment and explain any required package change” is more useful than “be reproducible.” A good shared instruction tells the agent what to do in a recognizable situation. It should leave study-specific choices to the project.

Global user instructions can also point to reference information, such as the software already installed or the locations of related projects. Keeping an inventory is different from prescribing a rule, but both can prevent the agent from making unnecessary guesses.

![](figures/shared-conventions.svg){#fig-shared-conventions .tall fig-alt="A global CLAUDE.md lists example paths to WRITING.md, CODING.md, MODELING.md, and CONVENTIONS.md and says when to read them. The specialist files form a two-by-two grid. Two paper projects each keep CLAUDE.md, STATUS.md, TASKS.md, SPECIFICATION.md, and METHODOLOGY.md. A website project keeps CLAUDE.md, STATUS.md, TASKS.md, and DESIGN.md. These are grouped under Project context files." above="8pt" below="8pt"}

::: {.needspace height="12cm"}
:::

## Organize detailed guidance by subject {#specialist-conventions}

The global `CLAUDE.md` acts as a hub: it holds shared defaults and gives the agent paths to specialist files, with instructions on when to read them. Give each specialist file a clear purpose. The following examples cover common research needs; add the files that are useful to your work.

| File | When to consult it | Example content |
|:---------------------|:-------------------------|:---------------------------------------------------|
| `CONVENTIONS.md` | Creating or organizing a project. | Folder layouts for papers, datasets, and websites; names for inputs and outputs. |
| `CODING.md` | Writing or changing code. | Use project-relative paths, reusable functions, and the existing package environment. |
| `MODELING.md` | Planning, fitting, or checking statistical models. | Specify the estimand; use the required simulation checks and uncertainty summaries. |
| `WRITING.md` | Drafting or editing prose. | State the point directly, define unfamiliar terms, and remove repeated explanations. |
| `TOOLCHAIN.md` | Adding or troubleshooting software. | Available tools, their configurations, and how they are maintained. |
| `WORKSPACE.md` | Finding a project or shared input. | Project purposes, folder locations, and dependencies between projects. |

Start with the conventions you repeatedly explain. Separate a topic when its detail makes the global instruction file hard to read. For instance, a manuscript edit needs the writing guidance but may not need several pages of statistical conventions. These filenames do not cause the agent to load their contents automatically; the main instructions (see below) must point to them.

## Have the agent create and use global user instructions {#configure-shared-instructions}

In [`Claude Code`](https://code.claude.com/docs/en/overview), global user instructions live in `~/.claude/CLAUDE.md`, outside individual project folders.[^shared-instruction-location] Here, `~` means your home folder. Ask the agent to create or update this file from the app, using the practices you describe or examples of work you have accepted.

<!-- prompt:shared-conventions -->
::: {#request-shared-conventions .prompt}
> Use these conventions and examples to create or update `~/.claude/CLAUDE.md`. Keep it concise and link to specialist files, stating when each should be read. Keep study-specific decisions in the project context files. Show me proposed changes before applying them.
:::
<!-- /prompt:shared-conventions -->

`~/.claude/CLAUDE.md` should tell the agent which specialist file to read for each kind of task. For example:

```
Before editing code, read CODING.md beside this file.
Before statistical modeling or simulation, read MODELING.md.
Before drafting prose, read WRITING.md.
Read each project's context files for its scientific decisions and current state.
Follow explicit project-specific exceptions to these conventions.
```

The [complete shared example](#starter-global) provides a starting point. Ask the agent to adapt it to your work and then apply the relevant guidance during the next real task. You can assess whether a paragraph follows your writing conventions or whether an analysis used the existing software environment. A file's presence alone does not show that the agent used it.

[Download global user instructions](resources/starter-files/global-AGENTS.md){.download-button download="CLAUDE.md"}

::: {.web-only}
<details class="guide-example">
<summary>Read the complete global user instructions</summary>

<!-- starter:global -->
```
# Global user instructions

[Describe your research role and the software you normally use.]

## Before a task
- Read the relevant project context files. Preserve accepted work.
- Identify the requested result, constraints, and evidence needed to accept it.
- Ask about consequential ambiguity; do not silently substitute another analysis.

## Conventions
These conventions are defaults across projects. Follow explicit project-specific
exceptions and record their reasons. Ask when instructions conflict and no
exception has been agreed.

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

[^shared-instruction-location]: Anthropic calls these [user instructions](https://code.claude.com/docs/en/memory#choose-where-to-put-claudemd-files). Other agent tools may use `AGENTS.md` in a different location: [`Codex`](https://learn.chatgpt.com/docs/agent-configuration/agents-md#create-global-guidance), for example, uses `~/.codex/AGENTS.md` by default. Ask the agent to confirm the location for the tool you use.

## Maintain and share the conventions {#maintain-shared-conventions}

When the same correction recurs, ask the agent to update the relevant shared guidance. For example, repeated rounding of saved model estimates can become an instruction to save full precision and round only for display. Review the proposed rule to make sure it applies beyond the current paper.

A research group can maintain shared files in a repository and make a local copy available to each member's agent. Ask the agent to add the locations of the shared specialist files to `~/.claude/CLAUDE.md` and specify when to read each one. Have it flag any conflicting instructions. A shared folder is useful only if sessions know when to read its contents.

Record a paper-specific exception in that project's files, with its reason. A new research group default should not silently change a completed analysis. Keep one maintained copy of each shared rule, and use [Appendix B: Keep records of shared settings: chezmoi](https://dss-agentic-toolkit.pages.dev/chapters/shared-settings.html) in the companion guide *Extending Your Agent's Toolkit* if you need to keep those files consistent across computers.

# 9. Use skills for recurring tasks {#reusable-procedures}

Many research tasks recur with different inputs: setting up a paper, checking citations, or preparing figures for a manuscript. A *skill* saves instructions for an agent to carry out a task and check its work. It can preserve lessons from earlier work and reduce the need to explain the same steps again.

Consider the [paper project scaffold](#scaffold-paper-example), which follows the approach described in [Chapter 6: Organize your research projects](#project-organization). Once you have a suitable paper project layout, a skill can direct the agent to create it for another study, draft the project context files, and identify missing information. You supply the new project's purpose; the skill supplies the setup instructions.

## What a skill adds {#what-skills-add}

A skill is a folder containing a file called `SKILL.md`. It can also contain scripts, reference material, or templates. The agent reads the instructions in `SKILL.md` and uses its tools to carry them out. A saved script specifies operations for a computer to execute; a skill can guide work that requires the agent to inspect inputs, choose suitable steps, or ask for a decision.

![](figures/reusable-skills.svg){#fig-reusable-skills .tall fig-alt="A new-project request and the project's context join a reusable skill containing instructions and an optional template or script. The agent uses these to create the project, check its files, and report unresolved decisions." above="8pt" below="8pt"}

Project context files describe a study, its requirements, and its progress. Global user instructions establish conventions across projects, while a skill describes how to carry out a recurring task. Have the skill consult the project context files and global user instructions rather than copying their contents. That lets you change a convention once without updating every skill that uses it.

| Recurring task | What a skill can preserve |
|:---------------------------|:-----------------------------------------------------------------------|
| Set up a project | Choose a suitable layout, create project context files, and identify missing decisions. |
| Search the literature | Record queries, verify DOI metadata, and separate checked sources from leads. |
| Explore a dataset | Examine variables and missingness, save the report, and flag questions for the researcher. |
| Check a manuscript's numbers | Trace values to saved results and report inconsistencies in the rendered document. |

These are examples of tasks that might be useful to package into skills. A skill can make the steps more consistent, but its instructions still require interpretation and do not guarantee identical outputs.

## Use an existing skill {#use-existing-skill}

Before creating a skill, ask the agent whether an installed skill or a maintained online collection[^skill-collections] already covers the task. Your research group may have a collection of skills suited to its research. Have the agent inspect the chosen skill's instructions and supporting files, explain the expected inputs and changes, and adapt anything that conflicts with your project. Try it on the next suitable task and review the resulting work.

[^skill-collections]: Examples include [Anthropic's skills repository](https://github.com/anthropics/skills) and [OpenAI's skills catalog](https://github.com/openai/skills). Ask the agent to check whether a candidate skill supports the app and tools you use.

In [`Claude Code`](https://code.claude.com/docs/en/overview), you can invoke an available skill with `/skill-name` or ask for it by name. The agent may also choose a relevant skill based on its description; the full instructions load when the skill is used.[^skill-use] Ask the agent to retain the source and version of an adopted skill so later changes can be understood.

[^skill-use]: Anthropic's [skills documentation](https://code.claude.com/docs/en/skills) explains invocation, supporting files, and when skill content loads. The description helps the agent select a skill; it is not a guarantee that it will choose or follow it correctly.

## Turn a useful task into a skill {#create-research-skill}

When a task has worked well and is likely to recur, ask the agent to write a `SKILL.md` file with the instructions that made it work. Have it specify what the task receives, what it should produce, how to check the result, and which decisions remain yours. A scaffold skill should ask for the project's purpose and where its folder should be created, use the appropriate layout, and leave unresolved methods as questions.

<!-- prompt:scaffold-skill -->
::: {#request-scaffold-skill .prompt}
> Write a reusable `SKILL.md` for the project setup we have agreed. Have it ask for the new project's purpose and where its folder should be created, follow the relevant layout conventions, preserve existing files, and leave missing research decisions as questions. Include checks of the created folders and records. Try it on a new project folder and report the result.
:::
<!-- /prompt:scaffold-skill -->

The agent might write the start of `SKILL.md` like this:

```
---
name: research-scaffold
description: Set up a new research project using the agreed workspace
  and layout conventions. Use when asked to create a project.
---

Read the workspace index and project-layout conventions if available.
Confirm the project's purpose, intended output, and where its folder should be created.
Propose the folder structure before creating it. Preserve existing files.
```

The header names the skill and describes when to use it. The body gives the steps; the complete example adds instructions for drafting and checking the project context files. Ask the agent to adapt this example to your project layouts and conventions, then use it to set up a project as described below.

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
Confirm the project's purpose, intended output, and where its folder should be created.
Propose the folder structure before creating it. Preserve existing files.

After the researcher accepts the structure:
- Create only the folders needed for the intended output.
- Draft CLAUDE.md (or AGENTS.md) with instructions and paths to the other
  project context files and relevant conventions.
- Add status and task records appropriate to the work already agreed.
- Record unresolved research decisions as questions, not assumed facts.
- For a paper project, write SPECIFICATION.md from the researcher's current
  decisions and start METHODOLOGY.md with decisions actually made and their reasons.
  Leave unresolved choices explicit; do not invent a history.
- In CLAUDE.md (or AGENTS.md), tell the agent to follow SPECIFICATION.md when
  implementing or checking the analysis and consult METHODOLOGY.md for rationale.
  Approved scientific changes update both: rewrite the specification and add a
  dated decision at the top of the log, preserving earlier entries.

Check the result:
- Confirm that the created paths match the accepted structure.
- Check that the instructions refer to files that exist, or clearly identify
  files still to be supplied or created.
- Confirm that existing files were preserved.
- Show the folder structure, the project context files, and unresolved decisions.

Ask before changing an existing project or adding software or services.
Do not acquire data, fit models, or publish files as part of this setup.
```
<!-- /starter:scaffold-skill -->

</details>
:::

Ask the agent to place the skill in its supported location: global user skills in `Claude Code` use `~/.claude/skills/`, while project-specific skills use `.claude/skills/` inside the project.[^skill-location] Each skill has its own folder containing `SKILL.md`. Supporting templates or scripts belong beside it, with instructions explaining when to use them. The project scaffolds in [Appendix A: Project scaffolds and starter files](#starter-layouts) can supply the folder layouts for this skill.

[^skill-location]: See Anthropic's [skill locations](https://code.claude.com/docs/en/skills#choose-where-skills-load), which calls global user skills “personal” skills. These apply across projects; project-specific skills can be shared with suitable project files.

## Refine and reuse the skill {#refine-skills}

Have the agent use the skill on a representative task before relying on it repeatedly. For project setup, check that the folders match the intended output, the project context files contain known facts, and existing files remain intact. If it omits a required step or makes an unwanted assumption, ask it to revise the instructions or checks and try the affected part again.

Have the agent keep `SKILL.md` concise and move lengthy templates or reference material into supporting files. A step that always performs the same calculation can become a saved script that the skill calls. Preserve the skill's changes so you can identify which version was used for consequential work.

## Automate a repeated check with a hook {#skill-hooks}

A *hook* runs a configured action at a particular event, such as after a file edit. It can automate a quick check that is otherwise often missed. Begin with checks requested through the agent, then add a hook when there is a clear recurring need. Avoid launching a full analysis after every small edit. Whether a hook can prevent an action depends on its timing and configuration; the [official hooks documentation](https://code.claude.com/docs/en/hooks) explains setup and testing.

<!-- ===================== PART III — DO THE RESEARCH ===================== -->


# 10. The example research project {#example-project}

How does a mother’s exposure to heat during pregnancy relate to her baby’s birthweight, and does that relationship vary with maternal age? This question connects the following chapters. An agent can help develop it, examine the evidence, and build an analysis whose results can be checked and reproduced.

The example uses 1,200 synthetic birth records. Each record contains the mother’s age and smoking status, the number of hot days she experienced during the third trimester, and the baby’s birthweight in grams. You can inspect the saved files without installing additional software.

[Download the complete synthetic research project](resources/heat-birthweight.zip){.download-button download="heat-birthweight.zip"}

![](figures/research-process.svg){#fig-research-process .tall .chapter-map fig-alt="Chapter 10 defines the research question and specification; Chapters 11 and 12 supply literature and data. The flow branches into saved-code analysis in Chapters 13–15 and research using LLM outputs in Chapters 16–17, with Chapter 17 used when local or adapted LLMs are needed. The routes can be combined and rejoin for writing in Chapter 18 and handoff in Chapter 19. Feedback arrows return to earlier work."}

## Develop the research question

An agent can help you compare ways to frame a research question. For this study, you might examine average birthweight or the probability of low birthweight, and measure heat exposure across the third trimester or during a brief heatwave. Ask the agent to explain what each approach would estimate and what data it would require. [Chapter 11: Find and assess research literature](#literature) explains how to find evidence that supports or challenges these choices.

These are research decisions, not details for the agent to settle while coding. A different outcome or exposure window may answer a different question. You decide which question to pursue; the agent can make the alternatives, assumptions, and unresolved issues easier to examine.

<!-- prompt:compare-research-approaches -->
::: {#request-compare-research-approaches .prompt}
> Using the research question, available data, and constraints below, compare plausible analysis approaches. Explain what each would estimate, the assumptions it requires, and what evidence supports or challenges it. Separate verified sources from suggestions to investigate. Identify decisions needed from me before turning the chosen approach into an analysis specification.
:::
<!-- /prompt:compare-research-approaches -->

## Write the scientific specification {#example-specification}

The analysis specification tells the agent what to estimate, how to estimate it, and what results to save. For the synthetic birthweight study, these decisions are recorded in `SPECIFICATION.md` and summarized below.

::: {.needspace height="10cm"}
:::

| Item | Specification |
|:--------------------|:-------------------------------------------------------------------------------|
| Question | What is the mean birthweight difference between 10 and 5 hot days, and how does it vary with maternal age? |
| Primary estimand | The 10-minus-5-day mean difference, standardized over this synthetic sample's age and smoking distribution. |
| Secondary estimands | The same contrast at maternal ages 22, 28, and 36, using the sample's smoking distribution. |
| Estimator | Least squares with quadratic age, a hot-days-by-age interaction, and smoking; counterfactual predictions supply the contrasts. |
| Uncertainty | 95% confidence intervals from an HC3 heteroskedasticity-robust covariance estimate and a normal reference distribution. |
| Outputs | A contrast table and figure, simulation results, an independent comparison, and a manuscript passage. |

The exposure coefficient alone does not supply the requested average contrast when exposure interacts with age. Specifying the estimand prevents an agent from silently reporting that coefficient instead.

A real study would also need a target population and defensible assumptions about confounding, measurement, selection, and support for the exposure comparison.

<!-- prompt:research-specification -->
::: {#request-research-specification .prompt}
> Write SPECIFICATION.md from my research decisions: estimands, target population and analysis sample, comparisons, estimator, sample rules, inputs, uncertainty, and outputs. State any averaging or standardization explicitly. Include prescribed checks and tolerances. Flag unresolved choices for my review before fitting.
:::
<!-- /prompt:research-specification -->

## Keep the project files together

The download follows the organization introduced in [Chapter 6: Organize your research projects](#project-organization). It contains the original synthetic records and data dictionary, their generator, independent [`R`](https://www.r-project.org/) and [`Python`](https://www.python.org/) implementations, saved results, software records, and verification reports. Its README explains how to run the project and records which checks have been completed.

Record the prescribed analysis in `SPECIFICATION.md`. The completed example states the sample, contrasts, estimator, and required outputs. Its `METHODOLOGY.md` explains the documented choices and the later reorganization; it identifies retrospective entries rather than inventing a decision history. The original specification supplied to the independent implementations is preserved separately, so readers can see exactly what those runs received.

The simulation specification defines distinct simulated scenarios with known relationships among the study variables. [Chapter 14: Test the analysis against known truth](#simulation) uses these scenarios to assess the estimator. Keeping the simulation specification, code, and results together helps distinguish checks specified in advance from explanations developed after seeing the results.

## Follow the work, including its revisions

Research rarely proceeds once through a fixed sequence. A literature finding may change the exposure definition; a data limitation may narrow the research question. Failed checks can reveal a coding error or an inadequate method. Writing can expose a claim the analysis has not addressed.

The agent can investigate these problems and propose responses. Before changing the scientific approach, agree what should change and record why. Preserve the earlier specification and results so that the revision can be understood.

# 11. Find and assess research literature {#literature}

An agent can help find relevant papers, compare their findings, and identify gaps in the evidence. Ask it to link its summaries and conclusions to the sources it used, so you can check whether its account is accurate.

For the heat-and-birthweight project introduced in [Chapter 10: The example research project](#example-project), a published paper about low birthweight may provide useful background without directly answering the question about mean birthweight. Published studies may also examine different exposure periods or populations. Ask the agent to explain how those differences affect their relevance and to identify findings that challenge the proposed explanation.

![](figures/literature-evidence.svg){#fig-literature-evidence fig-alt="Search results pass through identity verification and reading before supporting a research claim. Unresolved records remain visible, and conflicting findings are retained in the synthesis."}

## Define the scope of the literature search {#literature-protocol}

You might need an overview of a topic, evidence to inform a specific research decision, or a systematic review. Tell the agent which purpose the search should serve.

| Purpose | What to ask the agent to do |
|------------------------|--------------------------------------------------------|
| Get an overview of a topic | Find key papers, summarize the main findings, and identify competing explanations and unresolved questions. |
| Inform a research decision | Use your inclusion criteria to find evidence relevant to a particular choice, such as how to measure an exposure. Compare the findings and explain disagreements. |
| Conduct a systematic review | Follow the review protocol, search the specified databases, and document queries, eligibility decisions, and reasons for excluding studies. |

For a systematic review, involve a librarian or information specialist in designing a search that covers the eligible literature as fully as possible.

## Search and verify references {#verify-citations}

Ask the agent to record which databases and search services it used. For this example, it can search [PubMed](https://pubmed.ncbi.nlm.nih.gov/) for health research and [OpenAlex](https://openalex.org/) for work across disciplines, then use [Crossref](https://www.crossref.org/) to verify DOI metadata. It should report any databases or full texts it could not access, including material available through your institution that it cannot retrieve directly.

Have the agent resolve each journal article's DOI and compare the title, authors, year, and publication with publisher or registry metadata. A failed lookup needs investigation: a real paper registered with [DataCite](https://datacite.org/) can be missed by a verifier that checks only Crossref. For work without a DOI, the agent should verify an alternative such as a PMID, arXiv identifier, or stable publisher record. It should also check for corrections, retractions, and duplicate preprint/published versions, keeping unverified leads separate from verified references.

Have the agent save search queries, dates, and unmodified results alongside its screening decisions and reasons for exclusions. It should retain unresolved records and export references in a reusable format such as BibTeX or RIS. If the search retrieves more papers than expected, ask it to report the increase before limiting the results. For a screened search, have it reconcile the retrieved, duplicate, excluded, unresolved, and included counts; review borderline exclusions yourself.

<!-- prompt:literature-search -->
::: {#request-literature-search .prompt}
> Search OpenAlex, PubMed, and other relevant research databases using the question and criteria in SPECIFICATION.md. Use Crossref, other DOI registries, or publisher records to verify each journal article’s DOI, title, authors, and year. Flag mismatches and papers without a verified DOI. Record the services searched, exact queries, dates, screening decisions, and access gaps. Save verified references separately from unverified leads, and distinguish abstracts from full texts you actually read.
:::
<!-- /prompt:literature-search -->

## Read and compare the evidence {#literature-synthesis}

A verified reference establishes which paper was found. To assess what it supports, have the agent connect each proposed claim to a passage, table, or figure. Ask it to record whether it read the title, abstract, or full text. If the agent cannot find how a study measured heat exposure, it should flag that question for further checking. It should not assume the authors failed to report it.

The table illustrates this with Chersich and colleagues' 2020 systematic review of high temperatures in pregnancy and birth outcomes ([DOI: 10.1136/bmj.m3811](https://doi.org/10.1136/bmj.m3811)). The entries draw on the review's abstract and full-text results, rather than a new literature search.[^chersich-evidence]

| Proposed claim | Source location and finding | Use in this project |
|---|---|---|
| Higher temperatures have been associated with lower birthweight. | Abstract, Results: 18 of 28 birthweight studies reported a reduction; results varied considerably. | Motivate the question while retaining the variation across studies. |
| Heat-related birth outcomes can be treated as one interchangeable measure. | Results distinguish preterm birth, birthweight, and stillbirth. | A finding that heat exposure is associated with preterm birth does not directly answer the question about mean birthweight. |

[^chersich-evidence]: Chersich et al. (2020), [“Associations between high temperatures in pregnancy and risk of preterm birth, low birth weight, and stillbirths”](https://pmc.ncbi.nlm.nih.gov/articles/PMC7610201/), *The BMJ* 371:m3811. The review provides evidence for studying heat exposure and birthweight. The assumed relationship between maternal age and birthweight was specified for the synthetic data, rather than taken from this review. The comparison of 10 versus 5 hot days during the third trimester was also chosen for the example.

<!-- prompt:literature-synthesis -->
::: {#request-literature-synthesis .prompt}
> Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.
:::
<!-- /prompt:literature-synthesis -->

When papers disagree, ask the agent whether differences in populations, exposure definitions, outcomes, or designs could explain the conflicting findings, and what evidence supports those explanations. Check the sources you will cite and the passages central to your argument.

Literature can help refine the research question. For the heat-and-birthweight project, ask the agent to compare how published studies define heat exposure and which birth outcomes they report. Have it explain what evidence supports each choice and where uncertainty remains. If you decide to revise the research question or analysis approach, have the agent update `SPECIFICATION.md` and record the decision and its reasons in `METHODOLOGY.md`, citing the supporting sources.

## Reuse the task as a skill {#literature-skill}

Searching, verifying references, and linking claims to evidence recur across projects. A skill can supply those instructions while the current project supplies its question and criteria. The DSS `litsearch` skill packages this process; [Chapter 9: Use skills for recurring tasks](#reusable-procedures) explains how to inspect and adapt a skill.

<!-- RELEASE: add the verified public DSS litsearch repository link before publication; the current repository is private. -->

A separate [literature-search example](resources/literature-search-example.md), about how long journal peer review takes, reports how many records were found, screened, and included. It also identifies which included papers were assessed only from titles or abstracts.

# 12. Bring data into the project {#data-acquisition}

An agent needs access to your research data and enough documentation to use them correctly. Whether the files come from a collaborator, are already on your computer, or need to be collected, ask the agent to check what they contain and record where they came from.

For the heat-and-birthweight study introduced in [Chapter 10: The example research project](#example-project), ask the agent to compare the birth records with their data dictionary. It should report discrepancies, such as duplicate birth identifiers or birthweight recorded in kilograms when the documentation specifies grams, before using the data in an analysis.

## Identify and check the inputs {#identify-inputs}

Ask the agent to compare the data with the requirements in `SPECIFICATION.md` and the available documentation. It should check what each row represents, the dates covered, and whether the required variables, units, and identifiers are present.

In the heat-and-birthweight example, the agent should check for 1,200 unique birth identifiers, maternal ages from 18 to 40, hot-day counts from 0 to 20, smoking status coded as 0 or 1, and positive birthweight values. If any check fails, the analysis should stop and report which values or records caused the problem.

If the data cannot support the specified sample or research question, ask the agent to explain the limitation and propose options. Once you approve a change, have it update `SPECIFICATION.md` and record the decision and its reason in `METHODOLOGY.md`.

## Acquire web data through a repeatable route {#acquisition-ladder}

Ask the agent to work down the ladder below and use the first suitable, permitted route. It should look for an API or structured download before extracting data from web pages. Because this approach applies across projects, the ladder is a useful addition to `CODING.md` as part of your global user instructions.

![](figures/data-acquisition-ladder.svg){#fig-data-acquisition-ladder fig-alt="Use a documented API or structured download when available, then static-page parsing, then scripted browser interaction. Agent-interactive browsing helps with exploration or small tasks when those routes do not fit."}

A documented API, bulk download, or CSV export usually leaves a clearer collection record than interpreting a displayed page. If the data are in the page's HTML, the agent can write a script to save the page and extract them. When collection requires interaction, such as logging in or clicking through results, ask it to automate those steps with a scripted browser. Where permitted, the script can save the data sent to the browser to populate the page.

An interactive agent browser helps explore an unfamiliar site or complete a small task requiring visual judgment. Once the agent has worked out how to collect the data, ask it to write a script for any collection that needs to be repeated. [Chapter 14: Inspect and interact with a browser](https://dss-agentic-toolkit.pages.dev/chapters/browser-work.html) in the companion guide *Extending Your Agent's Toolkit* covers the tools.

Ask the agent to check whether a website or service permits automated data collection before using it, including its access requirements and request limits. If access requires an API key (a credential that lets software access the service through your account), have the agent store it separately from collection scripts and keep it out of saved request records. The toolkit's [Chapter 12: Keep credentials out of research files: 1Password and direnv](https://dss-agentic-toolkit.pages.dev/chapters/credentials.html) explains how. Apply the data-use decisions in [Chapter 3: Know where your data goes](#data-chain-of-custody) to collection as well as analysis.

## Preserve originals and their provenance {#data-provenance}

Have the agent save downloaded and supplied files unchanged, with cleaned and derived data in separate files. This lets it correct an error in processing without collecting the data again. If a new release becomes available, keep the earlier release too when it supports reported results.

Ask the agent to maintain a source log as it saves each file. For supplied or downloaded data, the log should identify the supplier or source address, the version or release, and the acquisition date. Have it also save any collection request and restrictions on use or redistribution. If information about a file's origins is unavailable, the agent should identify what is unknown.

Have the agent also record a *checksum* for each original data file. This digital fingerprint lets it check whether a file has changed before rerunning the analysis. The heat-and-birthweight example keeps the following information with its data:

| Record | Heat-and-birthweight example |
|---|---|
| Origin | Synthetic records; no observed pregnancies. |
| Original | `data/raw/births.csv`, unchanged after generation. |
| Reconstruction | Generator, seed, and [`R`](https://www.r-project.org/) version. |
| Identity | Checksum recorded when the file is created. |
| Documentation | Data dictionary and `SPECIFICATION.md`. |
| Derived data | Scripted transformations saved separately from the original. |

<!-- prompt:bring-data -->
::: {#request-bring-data .prompt}
> Inspect the research data and documentation. Record each source, version or acquisition date, permitted use, and checksum. Preserve the originals. Write checks for the variables, identifiers, units, ranges, and missingness rules in SPECIFICATION.md. Report discrepancies before using the data in an analysis. Do not substitute synthetic observations for missing research inputs.
:::
<!-- /prompt:bring-data -->

## Repeat collection without repeating unnecessary work

Before collecting a large dataset, ask the agent to run a few representative requests through the collection code. This *smoke test* checks that it can retrieve the data, interpret the response, and save the expected files. The agent should investigate any problems before starting the full batch.

During the full collection, the code should respect the service's request limits and save its progress. If collection is interrupted, it should resume from where it stopped, reusing completed downloads. Have the agent keep a log of failed requests and retry attempts so gaps remain visible.

After collection, ask the agent to compare what was received with what was requested and report anything missing or incomplete. A failed download should be recorded as missing data to investigate, never filled with guessed values or silently omitted.

# 13. Build a modular analysis workflow {#research-workflows}

Research analyses change repeatedly. Separating the work into independently runnable steps lets an agent revise one part without rerunning everything. Saved inputs and outputs also make errors easier to locate.

In the heat-and-birthweight study ([Chapter 10: The example research project](#example-project)), changing a figure label should redraw from saved contrasts. Changing an approved sample rule requires rebuilding the sample, refitting the statistical model, and updating contrasts, figures, and manuscript checks. A modular workflow makes that difference explicit.

![](figures/selective-workflows.svg){#fig-selective-workflows fig-alt="Fifteen analysis scripts and a larger justfile listing just all, just figures, just contrasts, and just power connect to a shared downward arrow. Two example routes redraw a figure from saved contrasts or rerun affected steps after an approved sample change."}

## Make research steps independently runnable {#modular-steps}

Ask the agent to give each step explicit input files and saved outputs. Each step should run using those inputs, without depending on objects left in an interactive session.

| Step | Reads | Saves |
|---|---|---|
| Prepare the sample | Original records and agreed sample rules | Derived data, identifiers, and checks. |
| Fit the statistical model | Analysis file and specification | Fit, settings, and diagnostics. |
| Calculate contrasts | Fit and defined comparisons | Full-precision estimates and uncertainty. |
| Draw the figure | Saved contrasts and figure instructions | Plotting data and rendered figure. |
| Check the manuscript | Selected results and manuscript source | Comparison report and discrepancies. |

Related operations can share a script, and several analyses can reuse the same function. Have the agent organize the code so that each step can run separately, with the inputs it needs.

## Build or revise the workflow {#build-modular-workflow}

For a new analysis, ask the agent to read `SPECIFICATION.md` and propose how to divide the work into independently runnable steps. Its proposal should identify the files each step will read and save. Have it implement that structure, using shared functions for calculations needed in several places.

For an existing analysis, ask the agent to identify those steps within the current code. Before reorganizing it, have the agent run the existing analysis and save its code and results for comparison. It should then separate the steps and rerun them using the same inputs. Comparing the sample, estimates, and uncertainty intervals will help detect unintended changes introduced while reorganizing the code.

<!-- prompt:modular-workflow -->
::: {#request-modular-workflow .prompt}
> Read SPECIFICATION.md and propose independently runnable analysis steps, identifying the inputs and saved outputs for each. Implement the structure using shared functions where appropriate. If analysis code already exists, first run it and save its code and results for comparison. After reorganizing it, use the same inputs to compare sample membership, estimates, and uncertainty intervals. Investigate and report unexpected differences before proceeding.
:::
<!-- /prompt:modular-workflow -->

## Run the workflow with saved commands {#saved-commands}

Once the analysis has independently runnable steps, ask the agent to save commands for the tasks you expect to repeat. You should be able to request a figure, rerun an analysis, or rebuild the project without reconstructing the sequence of scripts each time.

[`just`](https://just.systems/) is a *command runner*: it lets you give names to commands used in a project. The agent writes these definitions, called *recipes*, in a plain-text file named `justfile`. A recipe can run one script or several commands in sequence. For example, the agent could create these recipes:

| Command | What the agent configures it to do |
|:------------------|:------------------------------------------------------|
| `just figures` | Regenerate figures from saved results. |
| `just contrasts` | Calculate the specified comparisons from saved statistical models. |
| `just power` | Run the project's power analysis. |
| `just all` | Run the complete analysis workflow. |

As a workflow grows, keeping track of which steps need rerunning becomes harder. A figure depends on estimated contrasts, which depend on a fitted statistical model, which depends on the analysis data. These relationships are called *dependencies*. Changing the data can affect every subsequent step; changing a figure label usually affects only the figure.

A *dependency-aware pipeline runner*, such as [`targets`](https://docs.ropensci.org/targets/) for [`R`](https://www.r-project.org/), records these relationships and tracks changes to code and inputs. When asked to run the workflow, it determines which results need updating and reuses results that are still current. Have the agent configure those relationships as it builds the analysis.

You can use both tools together. The agent can define `just all` to start a `targets` pipeline. You or the agent then use the same convenient command, while `targets` determines which calculations actually need to run. If the project already has working commands or a pipeline, ask the agent to extend them.

The companion guide *Extending Your Agent's Toolkit* covers setup in [Chapter 5: Give research tasks reliable commands: just](https://dss-agentic-toolkit.pages.dev/chapters/project-commands.html). [Chapter 9: Rerun only affected steps: targets and Snakemake](https://dss-agentic-toolkit.pages.dev/chapters/pipeline-dependencies.html) explains dependency-aware pipelines, including [`Snakemake`](https://snakemake.readthedocs.io/) as another option.

## Check execution before scaling up

Individual scripts can run successfully while the complete workflow fails. For example, a model-fitting script might save its results in a format the figure script cannot read. Discovering that after many lengthy model fits wastes time.

Before starting a large run, ask the agent to perform a *smoke test*: a small but complete run through the workflow using the same code intended for the full analysis. In the heat-and-birthweight example, this means reading the birth records, fitting a statistical model, calculating the specified contrasts, and producing a figure. The agent should check that each step receives the inputs it expects and produces usable outputs. Have it fix implementation errors and repeat the test before running the full *batch*, meaning all the model fits or other runs planned.

Ask the agent to include automatic checks in the scripts themselves. These checks, often called *assertions*, should stop execution and explain the problem when a requirement is violated. For example, they can detect missing input files, duplicate birth identifiers, or unexpected changes in the number of records after joining datasets. The agent should derive these checks from `SPECIFICATION.md` and the data documentation.

<!-- prompt:smoke-test-workflow -->
::: {#request-smoke-test-workflow .prompt}
> Run a small, complete test of this workflow before starting the full batch. Check that every step receives the expected inputs and saves usable outputs. Add automatic checks based on SPECIFICATION.md and the data documentation. Fix implementation errors and repeat the test. Once it passes, run the full batch and report any failures.
:::
<!-- /prompt:smoke-test-workflow -->

[Chapter 14: Test the analysis against known truth](#simulation) explains how simulated data with known answers can test the calculations and statistical performance.

## Investigate results and revise the analysis {#investigate-workflow-results}

A modular workflow also helps when a result needs investigating. The agent can inspect saved estimates and predictions before deciding whether a statistical model needs refitting. If a revised analysis is warranted, it can rerun the affected steps while preserving the original results.

As a hypothetical example, suppose the estimated heat-related birthweight differences are much larger for the youngest mothers than for other ages. Ask the agent to check whether there are enough births at those ages across the exposure range, whether a few records have a large influence, and whether the code calculates the specified comparisons correctly. It should explain what it finds and which explanations need further investigation.

If that investigation suggests the statistical model represents the age-dependent heat relationship too simply, you might approve a more flexible relationship as a sensitivity analysis. Have the agent preserve the original fit and compare the estimated difference between 10 and 5 hot days at the same maternal ages. It should add the approved sensitivity analysis to `SPECIFICATION.md`, explain the decision in `METHODOLOGY.md`, and rerun the affected analysis and checks. If it instead finds code that fails to follow the existing specification, have it correct the code and record how it verified the repair.

<!-- prompt:investigate-result -->
::: {#request-investigate-result .prompt}
> Investigate the unexpected result identified below using SPECIFICATION.md, the current code, and saved outputs. Examine possible explanations in the data, code, and statistical model, and report the evidence for each. Preserve the original analysis. Propose any justified sensitivity analysis for my decision. After approval, update SPECIFICATION.md, record the decision and reason in METHODOLOGY.md, and compare the original and revised results for the specified quantities.
:::
<!-- /prompt:investigate-result -->

## Run jobs while you're away {#unattended-jobs}

A project may require many independent model fits or simulation runs. A *job* is one such task, run by a command. Running them all at once can overwhelm your computer; starting each one manually leaves the tasks idle between jobs. Ask the agent to prepare the commands and submit them to a job queue.

[`pueue`](https://dss-agentic-toolkit.pages.dev/chapters/job-queues.html) is a tool for creating and managing job queues on your computer. It starts waiting jobs automatically as running jobs finish. Once the jobs are submitted, `pueue` can keep them running after the agent conversation ends.

The queue's *slots* determine how many jobs may run simultaneously. Eight slots allow eight running jobs; the rest wait. A *processor core* is a computing unit that can execute instructions independently of other cores. One job may use several cores, and each job also needs memory. Have the agent use a representative test run to choose how many jobs the computer can comfortably run together.

![](figures/work-while-you-sleep.svg){#fig-work-while-you-sleep .tall fig-alt="An illustrative overnight batch of 100 jobs: a pueue queue feeds up to eight running jobs on your computer, starting the next automatically whenever one finishes. A 5 PM, overnight, and 9 AM timeline leads to reviewing results, logs, and job status, including failures or unfinished work. The computer remains awake."}

The computer must remain awake while the jobs run. When you return, ask the agent to report which jobs completed, which failed, and which are still waiting or running. It should check the saved outputs and investigate failures before retrying the affected jobs. The diagram illustrates when you might submit and review a batch; its completion time depends on the work.

For setup and recovery instructions, see [Chapter 6: Keep unattended jobs moving: pueue](https://dss-agentic-toolkit.pages.dev/chapters/job-queues.html) in the companion toolkit. If the work exceeds your computer's capacity, use an approved institutional computing service, such as [Harvard FAS Research Computing](https://docs.rc.fas.harvard.edu/).

# 14. Test the analysis against known truth {#simulation}

<!-- aliases: calibration-example -->

Simulation can check whether the code an agent has written runs successfully and whether a candidate estimator has desirable statistical properties under conditions relevant to the study. Those are different questions. Code can follow the specification and run without error while producing biased estimates or unreliable uncertainty intervals.

In the heat-and-birthweight example ([Chapter 10: The example research project](#example-project)), the agent generates synthetic datasets with known relationships between maternal age, heat exposure, and birthweight. By varying those relationships and repeating the prescribed analysis, it can assess when the method produces reliable estimates and uncertainty intervals.

## Check that the code runs from inputs to outputs {#simulation-execution}

Build on the smoke test in [Chapter 13: Build a modular analysis workflow](#research-workflows). Ask the agent to generate a small synthetic dataset with the variables and formats the code expects, then run it through the complete workflow. For the birthweight example, that means preparing the analysis data, fitting the statistical model, calculating contrasts, and producing the required tables and figures. Have the agent fix errors, missing outputs, and failures between steps before repeating the run.

Synthetic data also let the agent exercise conditions the code needs to handle. For example, it can insert missing birthweights to check that the code applies the prescribed exclusion rule. These functional checks establish whether the code completes the required steps for the supplied inputs. Assessing the estimator's statistical properties requires repeated datasets with known truth.

![](figures/known-answer-check.svg){#fig-known-answer-check fig-alt="Two uses of simulation: pass one synthetic dataset through the saved code to check execution and required outputs; then repeatedly generate datasets under specified scenarios, run the prescribed analysis, and compare estimates and intervals with known truth."}

## Choose the scenarios for evaluating the estimator {#calibration-example}

The methodological question is how well the proposed analysis performs under conditions that could matter for the study. You identify those conditions; the agent can help turn them into simulation scenarios and explain what each would reveal. In other projects, the simulation scenarios might vary in sample size, the amount of missing data, measurement error, or dependence among observations.

The birthweight example examines three scenarios. All retain a curved relationship between maternal age and birthweight. They differ in how heat exposure affects birthweight, while the prescribed analysis allows the heat effect to change linearly with age.

| Scenario | How the data are generated | What the comparison examines |
|:----------------------|:------------------------------------------|:----------------------------------|
| No heat effect | Heat exposure does not affect birthweight. | Estimates near zero and the frequency of false positives. |
| Linear change with age | The heat effect changes linearly with maternal age, as the analysis assumes. | Performance when the fitted statistical model represents the simulated relationships. |
| Nonlinear change with age | The heat effect also changes quadratically with maternal age. | Performance when the fitted interaction cannot fully represent the simulated relationship. |

Before evaluating the estimator, have the agent check that the data generator can produce plausible values for the study variables. For birthweight, this includes positive values and a defensible distribution and spread. Check relevant constraints between variables too. The example uses positive, right-skewed birthweights; a real study needs scenarios justified by its scientific knowledge and data.

Have the agent calculate the true quantities being estimated directly from the data-generating rules and check those calculations separately from the fitting code. For this example, it calculates mean birthweight at 10 and 5 hot days before adding random variation, then averages the differences over the specified individuals. If the agent uses the same faulty calculation for both the estimate and the value used to check it, the two can agree even though both are wrong.

Have the agent record the approved scenarios, true quantities, number of repetitions, and evaluation criteria in a simulation specification linked from `SPECIFICATION.md`. It should keep simulated inputs and results separate from the primary analysis files.

<details class="guide-example">
<summary>How the example generates outcomes and calculates truth</summary>

The simulation holds the 1,200 synthetic individuals' ages, smoking indicators, and exposures fixed, and generates new birthweights in each repetition. Its performance results therefore concern those covariate values. The generator uses positive, right-skewed noise with spread increasing with the conditional mean. The download labels the three scenarios `null`, `main`, and `curved`.

For each scenario, the true sample contrast averages the difference between conditional mean birthweight at 10 and 5 hot days over the saved individuals. Age-specific truth uses the stated age and the sample's smoking distribution. The estimator includes quadratic age, a linear heat-by-age interaction, and smoking, with HC3 covariance and normal-reference intervals. It is unchanged across scenarios.

A separate calculation can check the implementation of a reported contrast. With age centered at 28, the fitted model's 10-minus-5-day difference at age 28 is five times its heat coefficient. Ask the agent to compare that expression with the contrast obtained from predictions. This checks the contrast calculation; the repeated simulation assesses its statistical performance.

The [project download](resources/heat-birthweight.zip) contains generator code, parameters, independent truth calculations, random seeds, and the simulation specification. A different design may require numerical integration or a large reference population to approximate truth; have the agent record that approximation and its uncertainty.

</details>

## Have the agent evaluate repeated datasets {#simulation-repetitions}

Within each scenario, have the agent repeatedly generate a dataset, run the prescribed analysis, and save the estimates, uncertainty intervals, and any failures. The estimator stays unchanged throughout that evaluation. A single estimate can differ from the truth through sampling variation; repeated datasets show how the method behaves across those variations.

Agree on the performance measures before launching the repetitions. Ask the agent to propose measures suited to the quantities being estimated and any decision rules the study will use. The table below summarizes common choices.

| Measure | What it tells you |
|:----------------------------|:---------------------------------------------------------------------|
| Bias | Whether estimates are systematically too high or too low. |
| Overall estimation error | How far estimates fall from the truth, accounting for both bias and variation. |
| Interval coverage | How often the uncertainty intervals contain the true value. |
| Interval width | How precise the reported estimates are; high coverage can come from very wide intervals. |
| Power and false-positive rate | How often a specified decision rule detects an effect when one exists, or declares one when none exists. |
| Failure rate | How often the analysis fails to produce an estimate or interval. |

The number of repetitions determines how precisely the simulation estimates statistical performance. With 400 repetitions, an estimated coverage rate near 95 percent has a standard error of about 1.1 percentage points. This is *Monte Carlo uncertainty*: uncertainty in the estimated performance, rather than in an individual birthweight contrast. More repetitions reduce it. Have the agent choose enough repetitions to distinguish differences that matter for the methodological decision and report the remaining uncertainty.

<!-- prompt:simulation-plan -->
::: {#request-simulation-plan .prompt}
> Using SPECIFICATION.md, propose simulation scenarios relevant to this study and performance measures for the prescribed estimator. Explain how each dataset will be generated and how the true quantities will be calculated independently of the fitting code. Check that the generator produces plausible values and variability. After I approve the simulation specification, test one complete run, then evaluate repeated datasets in each scenario without changing the estimator. Save estimates, intervals, and failed runs; report performance and its Monte Carlo uncertainty. Keep simulation files separate from the primary analysis and propose any methodological changes for my decision.
:::
<!-- /prompt:simulation-plan -->

Have the agent retain failed runs and report their number alongside the successful ones. If performance summaries exclude failures, it should state that explicitly: results from successful fits alone can make an unstable estimator look reliable.

## Use the results to assess and revise the method {#simulation-decisions}

<!-- example:simulation-results -->
All 1,200 fits in the saved simulation completed without failure: 400 repetitions in each of the three scenarios. Yet when the heat effect changed nonlinearly with age, the age-28 contrast had bias of 28.3 g, and its nominal 95% intervals contained the true value in only 75.8% of repetitions. The code ran successfully, but the prescribed method's statistical performance was poor for this quantity in this scenario. The sample-average contrast performed much better, so examining only that average would have concealed the problem at age 28.

![](figures/simulation-performance.svg){#fig-simulation-performance fig-alt="Saved simulation results compare bias and interval coverage across three scenarios. The age-28 contrast performs poorly when the heat effect changes nonlinearly with age, while the sample-average contrast performs better. Bars show Monte Carlo uncertainty, not birthweight confidence intervals."}

::: {.needspace height="12cm"}
:::

<details class="guide-example">
<summary>Read the numerical results</summary>

The table shows two of the four reported quantities. Coverage is the proportion of 95% confidence intervals containing the true contrast; the last column reports Monte Carlo uncertainty in that proportion. The project download includes every quantity, repetition, and failure check.

| Scenario | Quantity | Truth (g) | Bias (g) | Coverage | Monte Carlo 95% interval |
|:-----------------------|:--------------|----------:|---------:|------------:|:--------------------------|
| No heat effect | Sample average | 0.0 | -0.2 | 94.5% | 91.8%–96.3% |
| No heat effect | Age 28 | 0.0 | 0.1 | 94.0% | 91.2%–95.9% |
| Linear change with age | Sample average | -37.8 | 1.0 | 94.2% | 91.5%–96.1% |
| Linear change with age | Age 28 | -40.0 | 1.0 | 94.8% | 92.1%–96.5% |
| Nonlinear change with age | Sample average | -10.8 | 2.4 | 93.5% | 90.6%–95.5% |
| Nonlinear change with age | Age 28 | -40.0 | 28.3 | 75.8% | 71.3%–79.7% |

</details>

<!-- /example:simulation-results -->

When performance is poor, ask the agent to investigate the data generator, truth calculation, and implementation before attributing the problem to the estimator. Preserve the failing runs. A generator that produces impossible values needs correction; an implementation error needs repair; a correctly implemented method that performs poorly may need a scientific revision.

The nonlinear scenario gives a reason to evaluate a more flexible age interaction. If you approve that evaluation, have the agent compare the candidate methods across the relevant scenarios, preserving the original results. An approved change to the prescribed analysis belongs in `SPECIFICATION.md`, with its reason in `METHODOLOGY.md`; the agent then reruns the affected analysis and checks.

Simulation supports conclusions about performance under the conditions examined. [Chapter 15: Check the agent with independent implementations](#checking-analysis) provides a complementary check: whether separately written implementations carry out the same scientific specification consistently.

# 15. Check the agent with independent implementations {#checking-analysis}

The code an agent builds can run without error yet use the wrong sample, report a coefficient instead of the requested contrast, or calculate uncertainty incorrectly. An independent implementation is a separately written set of code for the same prescribed analysis. Comparing its outputs with those of the first implementation can reveal mistakes that rerunning the original code would repeat.

For the heat-and-birthweight study ([Chapter 10: The example research project](#example-project)), one fresh agent implemented the analysis in [`R`](https://www.r-project.org/) and another in [`Python`](https://www.python.org/). Neither saw the other's code or results while building. Whereas the simulations in [Chapter 14: Test the analysis against known truth](#simulation) assessed the estimator's performance under specified scenarios, this comparison checked whether separately written code produced the same data processing and calculations.

## Define the analysis to be checked {#give-both-agents-the-same-specification}

Both implementations need to follow the same scientific requirements. Ask the agent to prepare a fixed copy of `SPECIFICATION.md` with the quantities to estimate, input files, sample rules, estimator, and uncertainty calculation. For the heat-and-birthweight example, “estimate the heat effect” is too vague: the specification identifies the birthweight contrast between 10 and 5 hot days, the sample over which to average it, and the age-specific comparisons.

Also have the agent propose comparison tolerances: how close numerical results must be to count as agreement. Tiny differences can arise from numerical calculations, while estimates based on simulation draws require allowance for Monte Carlo variation. Agree on these tolerances before comparing outputs. Record identifiers and categorical values should match exactly.

Keep the specification version used for the check even if the project later changes. If either agent finds an ambiguity, resolve it and give both the same clarification. Have the agent record your decision and its reason in `METHODOLOGY.md`, without passing the other implementation's code or results to either builder.

## Have the agents build separately {#build-two-implementations-separately}

Ask the agent in your current session to prepare separate folders and launch two separate *headless*[^independent-headless] `Claude Code` sessions: agent runs that follow supplied instructions without an interactive conversation. Each receives the same specification, data dictionary, and approved inputs and builds its implementation without inheriting the current conversation or seeing the other's code or results. The coordinating agent can arrange these runs sequentially or simultaneously.

[^independent-headless]: For setup, saved requests, and controlling each run's inputs, see [Chapter 16: Run agents from saved requests](https://dss-agentic-toolkit.pages.dev/chapters/headless-agents.html#turn-the-task-into-a-saved-workflow) in the companion guide *Extending Your Agent's Toolkit*.

You can also open fresh interactive sessions yourself. [Chapter 16: Use LLM outputs as research data](#headless-agents) explains headless runs and how to control their inputs. Separate sessions and folders alone do not prevent access to shared files; configure any required access restrictions as described in [Chapter 4: Control what the agent can do](#agent-access).

![](figures/independent-implementations.svg){#fig-independent-implementations fig-alt="The same inputs and analysis specification go to two fresh agents in separate folders, illustrated by an R implementation and a Python implementation. Each writes its own code and saves outputs. Another headless agent session compares both implementations to find where they disagree. Different analysis software is preferred when practical, but not required."}

If the project already has the analysis code developed in [Chapter 13: Build a modular analysis workflow](#research-workflows), keep it and have the coordinating agent launch just the independent second build. It should work from the specification and inputs only. Translating or revising the first implementation can carry its mistakes into the second.

The inputs depend on what you want to check. To check data processing as well as analysis, have both implementations start from the original data. Sharing one agent's processed dataset would leave that processing unchecked. To check only the analysis of an already verified dataset, use that dataset as the common starting point.

<!-- prompt:independent-implementation -->
::: {#request-independent-implementation .prompt}
> Working only from the supplied SPECIFICATION.md, data dictionary, and approved input files, independently implement the prescribed analysis in the assigned language. Do not consult another implementation's code or results, or use intermediate files it produced beyond the shared inputs explicitly approved for this check. Stop and ask about missing inputs or ambiguous requirements. Save the code, input-file checksums, included record identifiers, derived variables, model terms, and labeled full-precision estimates and uncertainty calculations.
:::
<!-- /prompt:independent-implementation -->

The agents do not need to use different agent providers or programming languages. Where practical, use different analysis software, such as `R`, `Python`, or [`Stata`](https://www.stata.com/). This can reveal differences in defaults and data handling, while checking calculations performed by different statistical libraries. The essential requirement is to construct the implementations independently from the same specification.

For restricted inputs, develop code with permitted synthetic data and run each implementation on the real records in the approved environment. Keep the comparison there unless its contents may be shared. [Chapter 3: Know where your data goes](#research-limits) explains that separation.

## Have an agent compare and investigate the outputs {#investigate-the-earliest-disagreement}

Once both implementations are complete, have the coordinating agent launch another separate headless session to compare them. This session can read both sets of code and results. It should work from the input files through to the reported estimates, because a difference early in the analysis can explain several later ones. If the samples differ, for example, resolve that before investigating why the estimates differ.

| What to compare, in order | What a disagreement may reveal |
|:-------------------------------|:----------------------------------------------------|
| Input files and their checksums | A different data release, the wrong file, or a variable taken from the wrong source. |
| Included records and exclusions | Different exclusion rules, duplicate records, or rules applied in a different order. Equal sample sizes can conceal different people. |
| Derived variables and model terms | Different units, transformations, or joins; different variables supplied to the statistical model. |
| Fitted results | Differences in estimation settings, convergence, or software defaults. Compare coefficients and fitted values before the summaries calculated from them. |
| Reported quantities and uncertainty | A different exposure contrast, averaging sample, prediction scale, or uncertainty calculation. |

<!-- prompt:compare-implementations -->
::: {#request-compare-implementations .prompt}
> Compare the completed implementations against the shared SPECIFICATION.md and agreed tolerances. Work from input-file checksums and included records through exclusions, derived variables, model terms, fitted results, and reported quantities and uncertainty. Use full-precision values. Save an agreement-and-discrepancy table and identify the earliest stage at which each difference appears. Investigate its cause against the specification and source data; do not treat either implementation as the answer key or change outputs merely to make them agree. Report unresolved issues and proposed corrections, distinguishing code errors from scientific decisions that need my approval.
:::
<!-- /prompt:compare-implementations -->

Compare full-precision values before rounding, using the agreed tolerances. Have the agent trace each discrepancy back to the specification and source data, explain the cause, and correct the implementation that departs from the requirements. Neither implementation is the answer key, and agreement by majority vote would not resolve the issue. If the investigation leads you to change the scientific specification, have the agent update `SPECIFICATION.md`, record the reason in `METHODOLOGY.md`, and bring both implementations into line before rerunning the comparison.

## What the heat-and-birthweight comparison found {#what-the-worked-comparison-found}

<!-- example:independent-results -->
The completed `R` and `Python` implementations included the same 1,200 birth records. Every value supplied to the statistical model matched exactly, including the transformed variables and interaction terms. The reported birthweight contrasts, standard errors, and confidence intervals agreed within the specified tolerances.

<details class="guide-example">
<summary>Compare the saved estimates</summary>

Estimates and intervals are in grams. The intervals below are rounded to one decimal place.

| Quantity | `R` estimate | `Python` estimate | 95% interval |
|:-----------------------|---------------------:|---------------------:|:-------------------------------|
| Sample average | -31.639627 | -31.639627 | -74.3 to 11.0 |
| Age 22 | -34.325612 | -34.325612 | -93.8 to 25.1 |
| Age 28 | -31.978065 | -31.978065 | -74.9 to 10.9 |
| Age 36 | -28.848003 | -28.848003 | -90.7 to 33.0 |

Across the contrasts, standard errors, and interval endpoints, the largest absolute difference was 3e-12, below the prespecified tolerance of 0.000001. The comparison also checks coefficients, their covariance matrix, and fitted values at full precision. The project download preserves the original specification in `docs/notes/independent-implementation-specification.md`; the current root specification links to it.

</details>

Other checks revealed problems that the final numerical agreement does not show. During implementation checking, the `Python` package used to calculate contrasts returned *t*-based confidence intervals by default. Because the specification required intervals based on the normal distribution, the agent calculated those intervals separately from the estimates and standard errors. A separate audit of the `R` input checks found that they accepted ages outside the specified range and unnecessarily required whole numbers of hot days. Correcting those rules left the numerical results unchanged because none of the supplied records triggered the mistakes. Comparing this dataset's results alone would not have exposed them.
<!-- /example:independent-results -->

## Keep the comparison with the project

Ask the agent to save both implementations, the comparison code, and a report identifying the exact input files and specification version. Keep unresolved differences in that report, and have the agent rerun the affected comparisons when the data, code, or specification changes. Both implementations can share a mistaken interpretation or faulty software routine, so retain the simulations in [Chapter 14: Test the analysis against known truth](#simulation) and the targeted checks in [Chapter 13: Build a modular analysis workflow](#check-execution-before-scaling-up), including cases such as duplicates or boundary values.

Even error-free code and excellent agreement provide no evidence that the specification is methodologically appropriate for the research question. Both agents could faithfully implement an analysis that estimates the wrong quantity or relies on implausible assumptions. The researcher remains responsible for justifying the approach; agreement between implementations cannot supply that justification.

For analysis built from saved code, continue to [Chapter 18: Write and revise from the research record](#research-writing). The next two chapters address studies that use LLM-generated measurements and decisions about running or adapting LLMs.


# 16. Use LLM outputs as research data {#llm-measurements}

LLMs can classify documents, extract information, or assess material that would take a research team considerable time to read. When their responses become variables in an analysis, errors in those responses affect the evidence. Define what the LLM should produce and evaluate whether it does that well enough for the study.

Suppose a project uses an LLM to label interview excerpts that describe an unmet service need. A high overall agreement rate could conceal frequent misses of that uncommon category. This chapter follows that labeling problem, then uses a peer-review study to show how controlled agent runs can apply a protocol repeatedly.

## Define the output and its research meaning

Write a rubric that defines the category, exclusions, and ambiguous cases. Specify the material the LLM receives and the output it should return. Ask people familiar with the research to apply the rubric to development examples, reconcile disagreements, and record the reasons. Human labels provide a reference with their own limitations. In `SPECIFICATION.md`, state the research output and link the labeling protocol and evaluation criteria. Record approved changes and their reasons in `METHODOLOGY.md`; retain the frozen rubric and prompt used for each completed run.

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

Headless execution does not establish isolation. A fresh run can still load global user instructions, memory, files, plugins, or connected services. Have the agent verify the actual access configuration against the protocol and record untested routes. [Chapter 16: Run agents from saved requests](https://dss-agentic-toolkit.pages.dev/chapters/headless-agents.html) in the companion guide *Extending Your Agent's Toolkit* covers setup and access tests.[^headless-controls]

[^headless-controls]: Anthropic's [programmatic `Claude Code` documentation](https://code.claude.com/docs/en/headless) describes noninteractive calls and their configuration. These calls can inherit the ordinary `Claude Code` environment; removing a visible conversation does not remove every possible input.

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

Preserve alternative results and report meaningful changes in the research conclusion. Do not choose a prompt because it produces the preferred finding. Stable outputs are not necessarily valid measurements. [Chapter 17: Run and adapt LLMs for your research](#research-models) considers local execution and adaptation; both retain these evaluation requirements.

# 17. Run and adapt LLMs for your research {#research-models}

Running an LLM yourself can give you control over where research material is processed and preserve access to the weights used in a study. Training an existing LLM on reviewed examples may improve a recurring task. These are separate choices, with different costs and checks.

For the interview-labeling task in [Chapter 16: Use LLM outputs as research data](#llm-measurements), data restrictions might require inference on approved local hardware. Separately, persistent coding errors might justify testing whether fine-tuning improves performance. You can run an unchanged open-weight LLM locally; local execution does not require training.

## Choose where the LLM runs {#local-models}

An *open-weight LLM* makes its trained parameters available to download and run under specified terms. *Open-source AI* requires more than downloadable weights: the Open Source Initiative's definition also covers rights to use, study, modify, and share, along with code and sufficient training-data information.[^open-source-ai]

[^open-source-ai]: [Open Source AI Definition 1.0](https://opensource.org/ai/open-source-ai-definition), Open Source Initiative. The definition requires parameters, code, and information sufficient to understand the training data; it does not require publishing every raw training record.

“Hosting locally” can mean running an LLM on your everyday computer. A runtime such as [`Ollama`](https://docs.ollama.com/) loads suitable downloaded weights and accepts requests from an interface, script, or agent. A *server* can simply be software on that computer serving those requests. A separate machine is needed only when the workload or approved computing arrangement requires one.

![](figures/llm-deployment.svg){#fig-llm-deployment fig-alt="The same research task can use an LLM on your computer, on institutional infrastructure, or at a hosting provider. Inputs travel to the location where inference runs; local tools do not establish a local LLM."}

A hosted LLM receives the material submitted for inference. A promise not to train on it does not settle retention or deletion. Return to [Chapter 3: Know where your data goes](#data-chain-of-custody) when choosing the processing location. Synthetic records can help develop code, but cannot replace the actual interview text when the task is to label that text.

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

Record the exact release, weights, license, runtime, quantization, context limit, and prompting format. Custom license terms need release-specific attention; the license name alone does not establish that the system meets the open-source definition. [Chapter 17: Run and adapt an LLM on your own hardware](https://dss-agentic-toolkit.pages.dev/chapters/local-models.html) in the companion guide *Extending Your Agent's Toolkit* covers installation, hardware checks, and connecting a compatible LLM to an agent.

### Apple's on-device option

Local inference does not require open weights. Apple's [`Foundation Models framework`](https://developer.apple.com/foundation-models-framework/) provides access to an on-device LLM on supported devices. It may be useful for a bounded extraction, labeling, or summarization task if evaluation supports that use. The framework also supports hosted routes, so select and verify the on-device route explicitly. It offers a different degree of control from preserving your own downloaded weights.

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

For example, Qwen names an LLM family, [`MLX LM`](https://github.com/ml-explore/mlx-lm) and [`Hugging Face PEFT`](https://huggingface.co/docs/peft/) provide training software, and LoRA describes how training changes the system. Your adapter contains the learned adjustments. Full fine-tuning instead updates the original weights and generally requires more training memory.

*QLoRA* combines low-rank adaptation with a quantized base LLM to reduce training memory further.[^qlora-method] Whether a particular configuration fits your computer still depends on the release, context length, and training settings. The toolkit's [adaptation section](https://dss-agentic-toolkit.pages.dev/chapters/local-models.html#adapt-a-model-when-the-study-calls-for-it) explains how to have the agent set up training tools.

[^lora-method]: Hu et al. (2021), [“LoRA: Low-Rank Adaptation of Large Language Models”](https://arxiv.org/abs/2106.09685), explains the method and reductions in trainable parameters and training memory.

[^qlora-method]: Dettmers et al. (2023), [“QLoRA: Efficient Finetuning of Quantized LLMs”](https://arxiv.org/abs/2305.14314). Its hardware demonstrations concern specified training configurations, not every release and workload.

## Evaluate and preserve the adapted LLM {#evaluate-adapted-model}

Use the evaluation described in [Chapter 16: Use LLM outputs as research data](#evaluate-llm-labeling) to compare the baseline and adapted LLM. Separate training examples, development material for choosing settings, and final evaluation cases. Keep related material together across those splits.

Compare errors important to the study, including rare categories, failures, and human referrals. If efficiency motivates training, include training effort and inference cost. Better agreement with reference labels does not establish that the labels measure the intended construct.

Preserve the base weights and identifier, adapter or updated weights, training-data version, split assignments, training settings, software environment, and evaluation outputs. Link the evaluation criteria and retained run versions from `SPECIFICATION.md`. Record approved changes to the training or evaluation procedure in `METHODOLOGY.md`, preserving the earlier protocols and results. An adapter without its base LLM is incomplete. Distinguish analyzing saved responses, generating new responses with the adapted LLM, and retraining it.

Include trained weights, adapters, checkpoints, and logs in the [chain of custody](#data-chain-of-custody); fine-tuning can retain training information.[^training-memorization]

[^training-memorization]: Zeng et al. (2024), [“Exploring Memorization in Fine-tuned Language Models”](https://aclanthology.org/2024.acl-long.216/). The study found that memorization differed across fine-tuning tasks.

# 18. Write and revise from the research record {#research-writing}

An analysis revision is incomplete if the manuscript still reports the earlier result. An agent can trace numbers and claims to their sources, update their uses, and identify passages that need a new interpretation.

In the heat-and-birthweight study ([Chapter 10: The example research project](#example-project)), a corrected sample rule could change a contrast in a results file while leaving the previous value in the abstract or figure caption. Give the agent the saved results and a record of where each is used. You decide how the changed finding affects the argument.

## Connect the manuscript to checked results {#trace-manuscript}

<!-- example:manuscript-results -->
For the synthetic example, `outputs/results/analysis/contrasts.csv`, row `sample`, supplies this sentence:

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

After a source changes, have the agent update affected passages, tables, and captions and compare the final PDF or `Word` document with the saved results. A figure also needs checks of its plotted quantity, scale, and labels. Resolve unsupported claims before polishing their wording.

## Draft and revise one section at a time

Give the agent the argument you want to make, the relevant research records, and your writing conventions. For methods, use `SPECIFICATION.md`, the executed scripts, and the decisions in `METHODOLOGY.md`. Describe what was actually run, making any gap from the current specification explicit; changing that file does not establish that the analysis was rerun. For results, use checked tables and figures. For discussion, supply your interpretation and limitations alongside the evidence.

<!-- prompt:draft-from-results -->
::: {#request-draft-from-results .prompt}
> Draft this section using only the supplied research decisions, verified sources, saved result tables, and figure captions. Where a claim, number, or reference has no support in those files, leave a bracketed gap and list it at the end. Follow my writing conventions. Do not invent evidence or change the scientific interpretation to complete the prose.
:::
<!-- /prompt:draft-from-results -->

Work section by section so you can judge the reasoning and support. Ask the agent to identify mismatches between methods text and the code that ran, and between claims and the cited literature. Check consequential interpretations yourself. A technically correct number does not settle what it means.

Use global user instructions for writing, as described in [Chapter 8: Apply your conventions across projects](#shared-conventions), for recurring preferences and project context files for manuscript-specific terminology. Read for clear connections between ideas, sufficient context, and repetition. Record recurring corrections where the agent can use them in the next revision.

## Preserve coauthor edits and respond to reviewers

Keep every returned manuscript before reconciling changes. An agent can compare versions and propose a combined draft, but regeneration can lose a coauthor's wording, comments, or accepted edits. Inspect the reconciled document in the application your collaborators use.

If the team writes in `Word`, keep that workflow. Supply an approved section and its evidence, then request proposed wording and an explanation of substantive changes. For direct editing, use a copy and inspect comments, citations, equations, and layout. If your source is markdown or [`Quarto`](https://quarto.org/), preserve returned `Word` versions before merging edits back. For document-production tools, see [Chapter 11: Generate documents from research outputs: Quarto and Pandoc](https://dss-agentic-toolkit.pages.dev/chapters/research-documents.html) in the companion guide *Extending Your Agent's Toolkit*.

For reviewer responses, supply the comments, your decisions, and the revised manuscript. The agent should answer each comment directly and identify actual changes. A requested analysis that has not been run must remain visibly outstanding.

<!-- prompt:reviewer-response -->
::: {#request-reviewer-response .prompt}
> Draft the reviewer response from the supplied comments and my decision notes. Quote each comment, lead with the substantive answer, and cite the actual locations of manuscript changes. Do not add concessions I did not make or claim an analysis was run without its saved output. Flag unresolved comments. For an approved methodological change, update SPECIFICATION.md and record the decision and reason in METHODOLOGY.md.
:::
<!-- /prompt:reviewer-response -->

When you approve a reviewer request that changes the analysis, have the agent update `SPECIFICATION.md`, add the decision and reason to `METHODOLOGY.md`, and rerun the affected analysis and checks before updating the manuscript. Preserve the original result and the reason for the revision. A new analysis should not be described as a wording correction.

<details class="guide-example">
<summary>Use the same research record for a talk</summary>

Ask for an outline with one main claim per slide and the supporting saved figure or result. Review the argument and audience fit before generating a deck. Use the same result-to-source links as the manuscript, and check the rendered slides after revisions. The toolkit's [Chapter 11: Generate documents from research outputs: Quarto and Pandoc](https://dss-agentic-toolkit.pages.dev/chapters/research-documents.html) covers output formats.

</details>

## Describe AI use accurately

Check the target journal's current instructions at submission. As of November 2026, ICMJE guidance calls for disclosure of AI assistance, human responsibility, and no AI authorship; individual journals determine the applicable details and placement.[^ai-disclosure]

[^ai-disclosure]: [ICMJE, “AI Use by Authors”](https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html), checked November 8, 2026. The guidance addresses reporting assistance, reviewing generated material, attribution, and author responsibility.

Keep a record of the tools and observable LLM information, dates, tasks, affected work, and checks actually completed. Distinguish language assistance and code generation from the LLM-derived measurements described in [Chapter 16: Use LLM outputs as research data](#llm-measurements). Measurements require a methodological account of inputs, prompts, evaluation, and human review.

A disclosure should identify the assistance, explain how the affected work was checked, and state the authors' responsibility. Derive it from project context files and saved evidence rather than a generic claim that “all outputs were verified.” Do not report an exact LLM version, independent implementation, or successful rerun that the records cannot support. Preserve relevant disclosure and provenance in the research deposit.

Confidential material received as a reviewer requires separate authorization under the journal's or funder's policy. Permission to use an agent on your own study does not authorize submitting someone else's manuscript or application.

# 19. Reproduce and hand off the research {#research-handoff}

A collaborator should be able to repeat the analysis from its files and instructions without asking an agent to reconstruct what happened. Preparing and testing that handoff reveals dependencies hidden by a familiar working folder.

For example, a heat-contrast figure may build because yesterday's fitted statistical model is cached on your computer. In a separate copy, it fails because neither the fit nor the command that creates it was supplied. A reproduction test identifies what the recipient needs to preserve or rebuild.

## Assemble the files and instructions

Provide approved inputs or access instructions, the code and commands, software records, and reference results. Include `SPECIFICATION.md`, the specification version used for the reported results, and the relevant decision history from `METHODOLOGY.md`. Identify those versions clearly if current requirements differ from the completed analysis. Have the agent identify missing files or undocumented manual steps; leave unknown history explicit.

![](figures/research-handoff.svg){#fig-research-handoff fig-alt="Inputs or access instructions, code and commands, software records, and reference results form a research package. A separate copy restores the environment, runs the documented steps, and compares the outputs with the references."}

A modular workflow supplies independently runnable steps, as explained in [Chapter 13: Build a modular analysis workflow](#research-workflows). Preserve its existing command interface so the recipient does not need an agent to determine execution order. Record the software environment before changing it: language and package versions, relevant system dependencies, and restoration instructions. [Chapter 8: Preserve a software environment: rig, renv, and uv](https://dss-agentic-toolkit.pages.dev/chapters/environments.html) in the companion guide *Extending Your Agent's Toolkit* covers the tools.

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

This differs from the independent implementation described in [Chapter 15: Check the agent with independent implementations](#checking-analysis), which builds new code from the specification. Reproduction tests the supplied code and instructions. Neither establishes scientific validity. If protected records are unavailable, testing only the synthetic example leaves empirical reproduction untested.

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

# Appendix A. Project scaffolds and starter files {#starter-files}

The scaffolds below give an agent a starting structure for a paper, dataset, or website. Each can be downloaded as a Markdown specification to supply with your project brief. They are simplified adaptations of the examples maintained with the scaffold skill; folder names and contents should fit the work, and an existing structure can remain if it serves that purpose.

[Chapter 6: Organize your research projects](#project-organization) explains how to choose a structure. [Chapter 9: Use skills for recurring tasks](#reusable-procedures) shows how to reuse the setup through a skill. The project context file templates after the scaffolds provide starting files to adapt for all three layouts.

## A.1 Project scaffolds {#starter-layouts}

### Research paper {#scaffold-paper-example .unlisted}

[Download the research paper scaffold](resources/scaffolds/paper.md){.download-button download="paper-scaffold.md"}

<!-- scaffold:paper -->
This layout keeps original inputs, reusable analysis code, exploratory work, and manuscript results distinct. It adapts the paper example supplied with the scaffold skill. Retain only the folders the study needs, and use the project's analysis language.

```
paper-project/
  README.md
  CLAUDE.md
  STATUS.md
  TASKS.md
  SPECIFICATION.md
  METHODOLOGY.md
  data/
    raw/
    processed/
  code/
    _startup/
    _data-acquisition/
    _experiments/
    _final/
  outputs/
    figures/
      working/
      final/
    models/
    results/
    tables/
  manuscript/
  docs/
    references/
    notes/
```

Keep original inputs in `data/raw/`; save transformations in `data/processed/`. Reusable setup and functions belong in `code/_startup/`, while independently runnable analysis scripts sit directly in `code/`. The other code folders separate acquisition, exploratory work, and assembly of manuscript figures. Save results under `outputs/` and manuscript drafts under `manuscript/`.

Give this specification to the agent with the research question, intended outputs, analysis language, and destination. Ask it to propose any adaptations before creating the agreed structure. It should describe the project in `README.md`, write navigation instructions in `CLAUDE.md`, and record the current state and tasks. Have the agent populate `SPECIFICATION.md` with approved scientific requirements and start `METHODOLOGY.md` with dated decisions and reasons, newest first; leave unresolved methods as questions. `CLAUDE.md` should require both files to be updated after an approved scientific change. Preserve existing files and confirm that paths in the project context files point to real locations.
<!-- /scaffold:paper -->

### Dataset {#scaffold-dataset-example .unlisted}

[Download the dataset scaffold](resources/scaffolds/dataset.md){.download-button download="dataset-scaffold.md"}

<!-- scaffold:dataset -->
This layout suits a dataset collected, processed, and released for reuse by several studies. It adapts the data example supplied with the scaffold skill, adding an explicit place for versioned releases.

```
dataset-project/
  README.md
  CLAUDE.md
  STATUS.md
  TASKS.md
  scripts/
  data/
    sources/
    processed/
    checkpoints/
    validation/
  outputs/
    releases/
    reports/
  docs/
    source-records/
    data-dictionary.md
    notes/
```

Preserve downloads unchanged in `data/sources/`. Acquisition, processing, and checking scripts belong in `scripts/`; save intermediate datasets in `data/processed/`. Collection checkpoints let interrupted acquisition resume. `data/validation/` holds comparison material used to check the data. Document each source and its acquisition in `docs/source-records/`.

Save each release in a named subfolder of `outputs/releases/`, with its data dictionary, source versions, and checks. A paper using that dataset should record which release it used. Access and release arrangements must match the data's permitted uses.

Give this specification to the agent with the data sources, intended users, access restrictions, and destination. Ask it to adapt the structure to the actual collection and release process, then create the agreed folders and project context files. Preserve existing files, record unresolved decisions, and check that the instructions identify the right inputs, scripts, and release locations.
<!-- /scaffold:dataset -->

### Website {#scaffold-website-example .unlisted}

[Download the website scaffold](resources/scaffolds/website.md){.download-button download="website-scaffold.md"}

<!-- scaffold:website -->
This layout separates editable material from the generated website. It adapts the scaffold skill's publishing example for a website; the chosen site software may require different folder names.

```
website-project/
  README.md
  CLAUDE.md
  STATUS.md
  TASKS.md
  source/
  assets/
    images/
    styles/
  output/
  docs/
    notes/
```

Write pages in `source/` and keep images and styles in `assets/`. The build produces the viewable site in `output/`; make lasting edits in the sources so they survive the next build. Record the preview and build commands in `README.md`. Keep publishing instructions and the intended destination explicit.

Give this specification to the agent with the site's purpose, audience, software if already chosen, and destination. Ask it to adapt the layout to that software and create the agreed structure and project context files. It should check that the preview uses the intended pages and assets. Creating the scaffold does not include publishing the site.
<!-- /scaffold:website -->

## Context and instruction templates {.unnumbered .unlisted}

The project context file templates below describe the work and help an agent resume it later. Have the agent adapt the useful ones to your existing files and conventions. A small project can begin with `CLAUDE.md`, `STATUS.md`, and `TASKS.md`; add `SPECIFICATION.md` and `METHODOLOGY.md` when the work needs them. The table also includes optional templates for global user instructions and version-control exclusions.

For the [synthetic heat-and-birthweight study](#example-specification), `SPECIFICATION.md` states the quantities to estimate and how to estimate them. `METHODOLOGY.md` records why those choices were made or changed. Keeping those roles separate lets a new session find both the current scientific requirements and the reasoning behind them.

| File and destination | Use | Template |
|:------------------------------------|:--------------------------------------------|:-----------------|
| `CLAUDE.md` in the project | Explain the project and point to its other context files. | [Download](resources/starter-files/project-AGENTS.md){download="CLAUDE.md"} |
| `STATUS.md` in the project | Summarize where the work stands now. | [Download](resources/starter-files/STATUS.md){download="STATUS.md"} |
| `TASKS.md` in the project | Track remaining work and dated completions. | [Download](resources/starter-files/TASKS.md){download="TASKS.md"} |
| `SPECIFICATION.md` in the project | State the agreed analysis and checks. | [Download](resources/starter-files/SPECIFICATION.md){download="SPECIFICATION.md"} |
| `METHODOLOGY.md` in the project | Record scientific decisions and their reasons. | [Download](resources/starter-files/METHODOLOGY.md){download="METHODOLOGY.md"} |
| Global user `CLAUDE.md` in `~/.claude/` | Optional conventions used across projects. | [Download](resources/starter-files/global-AGENTS.md){download="CLAUDE.md"} |
| `.gitignore` in the project | Optional exclusions when using [`Git`](https://git-scm.com/). | [Download](resources/starter-files/gitignore.txt){download=".gitignore"} |

The tilde (`~`) means your home folder. The two `CLAUDE.md` templates have different destinations: the project context file belongs inside the project; the global user instructions file belongs in your `.claude` folder. Have the agent merge useful content into existing instructions rather than overwrite them. Instruction files do not enforce access controls; those are configured separately in [Chapter 4: Control what the agent can do](#enforce-those-limits).

::: {.keep-together}
## A.2 CLAUDE.md for the project {#starter-project}

Adapt the example to the project, then save it as `CLAUDE.md` in the project's main folder. Replace the study description and paths; remove references to records the project does not need. [Chapter 7: Give the agent context for your project](#project-records) explains how to use a maintained `AGENTS.md` instead.

[Download the project CLAUDE.md template](resources/starter-files/project-AGENTS.md){.download-button download="CLAUDE.md"}

<details class="guide-example">
<summary>Read the CLAUDE.md example</summary>

<!-- starter:project -->
```
# heat-birthweight

Synthetic teaching study of heat exposure and birthweight. Every individual
record is synthetic; results are not evidence about actual pregnancies.

## Read first
- STATUS.md: current state and next decision.
- TASKS.md: work remaining and dated completions.
- SPECIFICATION.md: current scientific requirements; follow it when implementing
  or checking the analysis.
- METHODOLOGY.md: dated scientific decisions and their reasons; consult it when
  the rationale or history matters.

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
- When the researcher approves a scientific change, rewrite SPECIFICATION.md
  to reflect the current requirements and add a dated entry at the top of
  METHODOLOGY.md explaining the decision, reason, and specification change.
- Preserve older decisions and frozen specifications used for completed runs.
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
## A.3 Current state {#starter-status}

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
## A.4 Tasks {#starter-tasks}

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
## A.5 Scientific specification {#starter-specification}

Save this as `SPECIFICATION.md`. Have the agent fill it from your research decisions and leave unresolved choices explicit for your review. After an approved scientific change, have it rewrite the affected requirements and add the decision and reason at the top of `METHODOLOGY.md`. Adapt or remove fields that do not apply to the study. [Chapter 10: The example research project](#example-specification) explains the completed heat-and-birthweight example, supplied in the [project download](resources/heat-birthweight.zip).

[Download SPECIFICATION.md](resources/starter-files/SPECIFICATION.md){.download-button download="SPECIFICATION.md"}

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
- Target population and analysis sample:
- Quantities to estimate, comparisons, units, and time periods:
- Assumptions needed for that interpretation:

## Inputs and sample rules
- Approved inputs, versions, dictionary, and access location:
- Inclusion, exclusion, and missing-data rules:
- Required variables, derivations, units, and supported ranges:

## Estimator and reported outputs
- Estimation procedure, statistical model, and relevant settings:
- How fitted results become the requested estimands, including any averaging or standardization:
- Uncertainty calculation and any decision rule:
- Required tables, figures, and saved full-precision results:

## Checks
- Input and execution checks:
- Known-truth scenarios and performance measures, where applicable:
- Independent comparisons and numerical tolerances, where applicable:

## Unresolved decisions
[List questions for the researcher. Do not silently supply missing choices.]

Have the agent maintain the current approved specification here, rewriting it
when decisions change. Record each approved scientific change and its reason
in METHODOLOGY.md, newest entry first. Preserve earlier specification versions
in version control and retain frozen protocols used for particular runs.
```
<!-- /starter:specification -->

</details>

:::

::: {.keep-together}
## A.6 Scientific decisions {#starter-methodology}

Save this as `METHODOLOGY.md`. Have the agent add a dated heading and entry at the top for each approved scientific decision, preserving earlier entries. Record what changed, why, and which requirements in `SPECIFICATION.md` were affected. Keep routine coding and formatting progress in `TASKS.md`. Link to the current specification instead of repeating it. [Chapter 7: Give the agent context for your project](#review-project-plan) explains how these records support research decisions.

[Download METHODOLOGY.md](resources/starter-files/METHODOLOGY.md){.download-button download="METHODOLOGY.md"}

<details class="guide-example">
<summary>Read the scientific-decisions template</summary>

<!-- starter:methodology -->
```
# METHODOLOGY

Current scientific requirements: [SPECIFICATION.md](SPECIFICATION.md).
Add dated decisions at the top; preserve earlier entries. Keep routine work
progress in STATUS.md and TASKS.md. Link detailed evidence rather than copying it.

## YYYY-MM-DD — Decision title
- Question or discrepancy:
- Evidence considered:
- Decision and reason:
- Change to SPECIFICATION.md, or why none is needed:
- Affected code, outputs, and manuscript passages:
- Verification and remaining limitations:
```
<!-- /starter:methodology -->

</details>

:::

::: {.keep-together}
## A.7 Global user instructions {#starter-global}

Use this optional template for conventions that apply across your work. Have the agent adapt it at `~/.claude/CLAUDE.md`, preserving existing guidance. Short conventions can stay in that file. Add references to separate writing, coding, or other specialist files only when you maintain them; [Chapter 8: Apply your conventions across projects](#specialist-conventions) gives examples.

[Download global user instructions](resources/starter-files/global-AGENTS.md){.download-button download="CLAUDE.md"}

<details class="guide-example">
<summary>Read the personal-instructions template</summary>

<!-- starter:global -->
```
# Global user instructions

[Describe your research role and the software you normally use.]

## Before a task
- Read the relevant project context files. Preserve accepted work.
- Identify the requested result, constraints, and evidence needed to accept it.
- Ask about consequential ambiguity; do not silently substitute another analysis.

## Conventions
These conventions are defaults across projects. Follow explicit project-specific
exceptions and record their reasons. Ask when instructions conflict and no
exception has been agreed.

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
## A.8 Git exclusions {#starter-gitignore}

If the project uses `Git`, have the agent adapt these exclusions in its `.gitignore`. This example excludes data folders by default; permitted public or synthetic inputs may belong in the repository. Keep shareable input manifests outside excluded folders. An ignore rule neither blocks agent access nor removes files already tracked by Git.

Preserve the files needed for the [reproduction route](#test-and-name-the-reproduction-route), including saved fits, raw LLM responses, or research logs when they are required inputs or evidence. Large or protected files can live in approved storage, with versions and access instructions recorded in the project. Excluding a file from `Git` is not a decision to discard it.

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

Supply: the project purpose, intended output, destination, and any research-group conventions.

Explanation and checks: [Chapter 6: Organize your research projects](#request-scaffold-project).

::: {.prompt}
> Set up a project for the research described below. Use the existing workspace and research group conventions where available. Propose a structure suited to the deliverable, then create the agreed folders and project context files. Preserve existing files and list research decisions still needed from me.
:::

:::

::: {.keep-together}
### Organize an existing project {.unlisted}

Supply: the existing project folder and any known current or protected files.

Explanation and checks: [Chapter 6: Organize your research projects](#request-restructure-project).

::: {.prompt}
> Inspect this project and propose a clearer structure. Identify current and uncertain files before moving anything. After I approve the plan, make a recovery copy, reorganize the files, update affected paths, and save an old-to-new file map. Preserve original inputs and check that the affected outputs still reproduce.
:::

:::

::: {.keep-together}
### Write CLAUDE.md for a project {.unlisted}

Supply: the project files, existing instructions, and agreed research decisions.

Explanation and checks: [Chapter 7: Give the agent context for your project](#request-project-context).

::: {.prompt}
> Read this project and draft a concise CLAUDE.md for future sessions. Identify its purpose, current files, agreed research decisions, and unresolved questions. Point to the other project context files and include instructions to keep them current. Preserve existing authored guidance and show me the proposed changes.
:::

:::

::: {.keep-together}
### Resume a project {.unlisted}

Supply: the project folder and its project context files.

Explanation and checks: [Chapter 7: Give the agent context for your project](#request-resume-project).

::: {.prompt}
> Read CLAUDE.md (or AGENTS.md), STATUS.md, and TASKS.md, plus any other project context files relevant to the next task. Then inspect the inputs and outputs needed for that task. Summarize the current work, flag any disagreement between the project context files and the work saved on disk, and identify the next action.
:::

:::

::: {.keep-together}
### Leave a useful handoff {.unlisted}

Supply: the current session’s work, checked outputs, and unresolved questions.

Explanation and checks: [Chapter 7: Give the agent context for your project](#request-close-session).

::: {.prompt}
> Update TASKS.md and STATUS.md from the work and outputs actually checked. For scientific changes I approved, update SPECIFICATION.md and add dated entries at the top of METHODOLOGY.md explaining the decisions, reasons, and specification changes. Preserve earlier entries. Leave unfinished work and failures explicit, with enough information for the next session to continue.
:::

:::

::: {.keep-together}
### Set global user instructions {.unlisted}

Supply: existing instructions and examples of conventions used across projects.

Explanation and checks: [Chapter 8: Apply your conventions across projects](#request-shared-conventions).

::: {.prompt}
> Use these conventions and examples to create or update `~/.claude/CLAUDE.md`. Keep it concise and link to specialist files, stating when each should be read. Keep study-specific decisions in the project context files. Show me proposed changes before applying them.
:::

:::

::: {.keep-together}
### Create a project-scaffolding skill {.unlisted}

Supply: an agreed project layout, setup instructions, and the folder where the agent should save the skill.

Explanation and checks: [Chapter 9: Use skills for recurring tasks](#request-scaffold-skill).

::: {.prompt}
> Write a reusable `SKILL.md` for the project setup we have agreed. Have it ask for the new project's purpose and where its folder should be created, follow the relevant layout conventions, preserve existing files, and leave missing research decisions as questions. Include checks of the created folders and records. Try it on a new project folder and report the result.
:::

:::

## Define the study and gather evidence {#prompts-evidence}

::: {.keep-together}
### Compare research approaches {.unlisted}

Supply: the research question, available data, constraints, and any verified sources.

Explanation and checks: [Chapter 10: The example research project](#request-compare-research-approaches).

::: {.prompt}
> Using the research question, available data, and constraints below, compare plausible analysis approaches. Explain what each would estimate, the assumptions it requires, and what evidence supports or challenges it. Separate verified sources from suggestions to investigate. Identify decisions needed from me before turning the chosen approach into an analysis specification.
:::

:::

::: {.keep-together}
### Make the research specification explicit {.unlisted}

Supply: your research decisions and the questions that still need resolution.

Explanation and checks: [Chapter 10: The example research project](#request-research-specification).

::: {.prompt}
> Write SPECIFICATION.md from my research decisions: estimands, target population and analysis sample, comparisons, estimator, sample rules, inputs, uncertainty, and outputs. State any averaging or standardization explicitly. Include prescribed checks and tolerances. Flag unresolved choices for my review before fitting.
:::

:::

::: {.keep-together}
### Search and verify the literature {.unlisted}

Supply: the research question, eligibility criteria, and any existing search protocol.

Explanation and checks: [Chapter 11: Find and assess research literature](#request-literature-search).

::: {.prompt}
> Search OpenAlex, PubMed, and other relevant research databases using the question and criteria in SPECIFICATION.md. Use Crossref, other DOI registries, or publisher records to verify each journal article’s DOI, title, authors, and year. Flag mismatches and papers without a verified DOI. Record the services searched, exact queries, dates, screening decisions, and access gaps. Save verified references separately from unverified leads, and distinguish abstracts from full texts you actually read.
:::

:::

::: {.keep-together}
### Synthesize the papers actually read {.unlisted}

Supply: verified papers, records of what was read, and the question to address.

Explanation and checks: [Chapter 11: Find and assess research literature](#request-literature-synthesis).

::: {.prompt}
> Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.
:::

:::

::: {.keep-together}
### Bring approved data into the project {.unlisted}

Supply: approved inputs, their documentation, and the current scientific specification.

Explanation and checks: [Chapter 12: Bring data into the project](#request-bring-data).

::: {.prompt}
> Inspect the research data and documentation. Record each source, version or acquisition date, permitted use, and checksum. Preserve the originals. Write checks for the variables, identifiers, units, ranges, and missingness rules in SPECIFICATION.md. Report discrepancies before using the data in an analysis. Do not substitute synthetic observations for missing research inputs.
:::

:::

## Build and check the analysis {#prompts-analysis}

::: {.keep-together}
### Build a modular analysis workflow {.unlisted}

Supply: SPECIFICATION.md, the research data and documentation, and any existing analysis code and results.

Explanation and checks: [Chapter 13: Build a modular analysis workflow](#request-modular-workflow).

::: {.prompt}
> Read SPECIFICATION.md and propose independently runnable analysis steps, identifying the inputs and saved outputs for each. Implement the structure using shared functions where appropriate. If analysis code already exists, first run it and save its code and results for comparison. After reorganizing it, use the same inputs to compare sample membership, estimates, and uncertainty intervals. Investigate and report unexpected differences before proceeding.
:::

:::

::: {.keep-together}
### Test the workflow before running the full batch {.unlisted}

Supply: the workflow code, input data and documentation, SPECIFICATION.md, and the intended full batch.

Explanation and checks: [Chapter 13: Build a modular analysis workflow](#request-smoke-test-workflow).

::: {.prompt}
> Run a small, complete test of this workflow before starting the full batch. Check that every step receives the expected inputs and saves usable outputs. Add automatic checks based on SPECIFICATION.md and the data documentation. Fix implementation errors and repeat the test. Once it passes, run the full batch and report any failures.
:::

:::

::: {.keep-together}
### Investigate an unexpected result {.unlisted}

Supply: the unexpected result, specification, current code, and saved outputs.

Explanation and checks: [Chapter 13: Build a modular analysis workflow](#request-investigate-result).

::: {.prompt}
> Investigate the unexpected result identified below using SPECIFICATION.md, the current code, and saved outputs. Examine possible explanations in the data, code, and statistical model, and report the evidence for each. Preserve the original analysis. Propose any justified sensitivity analysis for my decision. After approval, update SPECIFICATION.md, record the decision and reason in METHODOLOGY.md, and compare the original and revised results for the specified quantities.
:::

:::

::: {.keep-together}
### Plan and run known-truth checks {.unlisted}

Supply: the specification and scientific scenarios or performance questions to examine.

Explanation and checks: [Chapter 14: Test the analysis against known truth](#request-simulation-plan).

::: {.prompt}
> Using SPECIFICATION.md, propose simulation scenarios relevant to this study and performance measures for the prescribed estimator. Explain how each dataset will be generated and how the true quantities will be calculated independently of the fitting code. Check that the generator produces plausible values and variability. After I approve the simulation specification, test one complete run, then evaluate repeated datasets in each scenario without changing the estimator. Save estimates, intervals, and failed runs; report performance and its Monte Carlo uncertainty. Keep simulation files separate from the primary analysis and propose any methodological changes for my decision.
:::

:::

::: {.keep-together}
### Implement the analysis independently {.unlisted}

Supply: the specification, data dictionary, approved input files, and assigned language. Use original data when checking processing; an already verified dataset can be shared for a narrower analysis check. Use a fresh agent without access to the other implementation or results.

Explanation and checks: [Chapter 15: Check the agent with independent implementations](#request-independent-implementation).

::: {.prompt}
> Working only from the supplied SPECIFICATION.md, data dictionary, and approved input files, independently implement the prescribed analysis in the assigned language. Do not consult another implementation's code or results, or use intermediate files it produced beyond the shared inputs explicitly approved for this check. Stop and ask about missing inputs or ambiguous requirements. Save the code, input-file checksums, included record identifiers, derived variables, model terms, and labeled full-precision estimates and uncertainty calculations.
:::

:::

::: {.keep-together}
### Compare completed implementations {.unlisted}

Supply: both completed implementations, their outputs, and the common specification.

Explanation and checks: [Chapter 15: Check the agent with independent implementations](#request-compare-implementations).

::: {.prompt}
> Compare the completed implementations against the shared SPECIFICATION.md and agreed tolerances. Work from input-file checksums and included records through exclusions, derived variables, model terms, fitted results, and reported quantities and uncertainty. Use full-precision values. Save an agreement-and-discrepancy table and identify the earliest stage at which each difference appears. Investigate its cause against the specification and source data; do not treat either implementation as the answer key or change outputs merely to make them agree. Report unresolved issues and proposed corrections, distinguishing code errors from scientific decisions that need my approval.
:::

:::

## Use LLMs in the research {#prompts-llm}

::: {.keep-together}
### Design controlled LLM research runs {.unlisted}

Supply: the review-generation and judging protocol, inputs, and permitted tools and services.

Explanation and checks: [Chapter 16: Use LLM outputs as research data](#request-controlled-llm-runs).

::: {.prompt}
> For this review-generation and judging protocol, specify the inputs, instructions, tools, and services allowed in each stage. Set up fresh runs and verify their actual access against that protocol before the batch. Save raw responses, failures, retries, configuration, and LLM information. Report untested access routes; headless execution alone does not establish isolation.
:::

:::

::: {.keep-together}
### Evaluate a frozen labeling procedure {.unlisted}

Supply: the frozen rubric and prompt, evaluation inputs, and acceptance criteria. Keep the human reference labels unavailable during labeling.

Explanation and checks: [Chapter 16: Use LLM outputs as research data](#request-evaluate-labeling).

::: {.prompt}
> Apply the frozen rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. After labeling finishes, compare with the independently adjudicated reference. Report the confusion table, category-specific errors, uncertainty, referral workload, and prespecified acceptance criteria. Do not tune on this sample or drop difficult cases; list disagreements for human review.
:::

:::

## Write and revise {#prompts-writing}

::: {.keep-together}
### Trace numbers into the manuscript {.unlisted}

Supply: the rendered manuscript and saved results, including tables and figure sources.

Explanation and checks: [Chapter 18: Write and revise from the research record](#request-trace-manuscript).

::: {.prompt}
> Trace each main manuscript result, including the abstract and captions, to its saved source file and exact entry. Record source fingerprints and check values, signs, units, samples, intervals, and rounding in the final rendered document. Identify every affected use when a source result changes. Propose updates only from verified outputs and list unsupported claims for my decision.
:::

:::

::: {.keep-together}
### Draft from the research record {.unlisted}

Supply: the section to draft, research decisions, verified sources, results, and writing guidance.

Explanation and checks: [Chapter 18: Write and revise from the research record](#request-draft-from-results).

::: {.prompt}
> Draft this section using only the supplied research decisions, verified sources, saved result tables, and figure captions. Where a claim, number, or reference has no support in those files, leave a bracketed gap and list it at the end. Follow my writing conventions. Do not invent evidence or change the scientific interpretation to complete the prose.
:::

:::

::: {.keep-together}
### Draft a response from your decisions {.unlisted}

Supply: reviewer comments, your decisions, and the revised manuscript and analysis records.

Explanation and checks: [Chapter 18: Write and revise from the research record](#request-reviewer-response).

::: {.prompt}
> Draft the reviewer response from the supplied comments and my decision notes. Quote each comment, lead with the substantive answer, and cite the actual locations of manuscript changes. Do not add concessions I did not make or claim an analysis was run without its saved output. Flag unresolved comments. For an approved methodological change, update SPECIFICATION.md and record the decision and reason in METHODOLOGY.md.
:::

:::

## Reproduce and share {#prompts-handoff}

::: {.keep-together}
### Test a clean-copy handoff {.unlisted}

Supply: the project, README, input manifest, reference outputs, and comparison tolerances.

Explanation and checks: [Chapter 19: Reproduce and hand off the research](#request-reproduce-project).

::: {.prompt}
> Test a separate copy using the README and input manifest. Restore the recorded environment without upgrading it, run the documented commands, and compare outputs using the agreed tolerances. Record failures and missing inputs without altering the analysis or criteria to force agreement. If only synthetic inputs are available, state that reproduction with the study data remains untested.
:::

:::

::: {.keep-together}
### Review a proposed deposit {.unlisted}

Supply: the proposed deposit snapshot, manuscript, input manifest, and sharing requirements.

Explanation and checks: [Chapter 19: Reproduce and hand off the research](#request-review-deposit).

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
| The session loses track of decisions | Save the current work and unresolved issues, then use those records to start a focused session. | [Project context files](#maintain-project-context) |
| Old instructions conflict with current files | Identify which instructions were used and where they disagree. Propose corrections to the stale record. | [Shared guidance](#maintain-shared-conventions) |
| The agent changes the question or weakens a check | Show the change against the agreed specification and preserve the failed result. You decide whether a scientific revision is justified. | [Research decisions](#review-project-plan) |
| A rerun gives different results | Compare inputs, sample rules, software, settings, and intermediate outputs. Locate the earliest difference before proposing a fix. | [Reproduction checks](#test-and-name-the-reproduction-route) |
| Two implementations disagree | Compare each stage against the specification; do not edit one merely to match the other. | [Investigating disagreement](#investigate-the-earliest-disagreement) |
| The manuscript contains stale numbers | Trace affected values to their saved sources and propose updates from verified results. | [Manuscript checks](#trace-manuscript) |

## Jobs and app controls {#troubleshoot-execution}

| What you notice | What to ask the agent to do | Explanation |
|:---------------------------|:-------------------------------------------------|:---------------------|
| A long job seems to have stopped | Check the process or queue, recent log entries, and expected outputs before restarting it. | [Unattended jobs](#unattended-jobs) |
| An [`R`](https://www.r-project.org/) job on macOS runs continuously without output when launched by an agent | Check whether it matches the documented launch issue; use the execution wrapper if confirmed. This is a specific R-on-macOS problem, not a general remedy for slow analysis. | [Toolkit diagnosis](https://dss-agentic-toolkit.pages.dev/chapters/troubleshooting.html#r-on-macos) |
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
*Assertion.* A check in code that reports or stops execution when an expected condition fails, such as an unexpected sample size. [Automatic checks](#check-execution-before-scaling-up).
:::

::: {#term-auto-mode}
*`Auto` mode.* A [`Claude Code`](https://code.claude.com/docs/en/overview) permission mode that combines permission rules with automated review of actions. It reduces routine approval prompts while retaining checks. [Approval settings](#choose-how-actions-are-approved).
:::

::: {#term-brief}
*Brief.* A written description of a task or project. For information maintained across sessions, see [project context files](#term-project-context-files).
:::

::: {#term-build}
*Build.* Running commands that produce specified outputs from their inputs, such as a figure from saved estimates or a manuscript from text and tables. A build need not rerun every analysis step. [Saved commands](#saved-commands).
:::

::: {#term-calibration}
*Calibration.* In this guide, assessing an estimator or decision rule using simulated data with known properties. The conclusions depend on the scenarios and performance measures examined. [Choosing simulation scenarios](#calibration-example).
:::

::: {#term-chain-of-custody}
*Chain of custody.* A record of where protected material and its copies go, who or what can access them, and what retention or deletion options are available. [Data custody](#data-chain-of-custody).
:::

::: {#term-checksum}
*Checksum.* A fingerprint calculated from a file's contents. It helps identify a file version but does not establish that the contents are correct. [Tracing results](#trace-manuscript).
:::

::: {#term-commit}
*Commit.* A recorded version of the files tracked by [`Git`](https://git-scm.com/), with a message describing the changes. Commits provide versions to compare or restore. [Recovery](#project-recovery).
:::

::: {#term-compaction}
*Compaction.* Summarizing earlier conversation material to make room in the LLM's context window. Details can be lost, so project context files should preserve important decisions and unfinished work. [Context limits](#usage-and-context).
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
*Global user instructions.* Conventions used across your projects, such as writing preferences or software practices. Also called global or personal instructions. [Conventions across projects](#shared-instructions).
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
*Independent implementation.* Separately written code for the same scientific specification and approved inputs, built without consulting the first implementation or its results. [Independent checks](#build-two-implementations-separately).
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

::: {#term-methodological-decision-log}
*Methodological decision log.* Dated scientific decisions and their reasons, maintained newest first in `METHODOLOGY.md`. It explains how and why the specification changed. [Project context files](#project-records).
:::

::: {#term-modular-workflow}
*Modular workflow.* Research steps that can run independently, with explicit inputs and saved outputs. Each performs a coherent operation, such as fitting a statistical model or generating a figure. [Modularity](#modular-steps).
:::

::: {#term-monte-carlo-error}
*Monte Carlo error.* Variation from using a finite number of random draws or simulation repetitions. For example, estimated interval coverage varies across repeated simulation experiments. It differs from the uncertainty interval for a study's effect estimate. [Repeated simulation and its uncertainty](#simulation-repetitions).
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
*Personal instructions.* Another name for [global user instructions](#term-global-instructions).
:::

::: {#term-plan-mode}
*`Plan` mode.* A mode for inspecting a project and developing a plan before implementation. Writing a planning record does not authorize ordinary changes to the project. [Planning settings](#decide-whether-to-plan-first).
:::

::: {#term-project-context-files}
[]{#term-project-instructions}
*Project context files.* Maintained files that tell the agent what a project is trying to achieve, how it should work, what has been decided, and what remains to be done. Examples include `CLAUDE.md` (or `AGENTS.md`), `STATUS.md`, `TASKS.md`, `SPECIFICATION.md`, and `METHODOLOGY.md`. [Saving project context](#project-records).
:::

::: {#term-prompt}
*Prompt.* A request or other input supplied to an LLM or agent. An *approval prompt* instead asks you whether an action may proceed. [Appendix B: Prompt bank](#prompt-index) and [approval settings](#choose-how-actions-are-approved).
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

::: {#term-scientific-specification}
*Scientific specification.* The current approved research requirements, maintained in `SPECIFICATION.md`. It tells the agent what to implement and check. [Project context files](#project-records).
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
