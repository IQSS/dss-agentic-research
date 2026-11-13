# Research requests

Point the agent to the listed project files and decisions, then adapt the request to your task.

## Set up and maintain a project

### Start a new research project

Point the agent to: the project purpose, intended output, folder where the project should be created, and any research-group conventions.

Set up a project for the research described below. Use the existing workspace and research group conventions where available. Propose a structure suited to the deliverable, then create the agreed folders and project context files. Preserve existing files and list research decisions still needed from me.

### Organize an existing project

Point the agent to: the existing project folder and any known current or protected files.

Inspect this project and propose a clearer structure. Identify current and uncertain files before moving anything. After I approve the plan, make a recovery copy, reorganize the files, update affected paths, and save an old-to-new file map. Preserve original inputs and check that the affected outputs still reproduce.

### Write CLAUDE.md for a project

Point the agent to: the project files, existing instructions, and agreed research decisions.

Read this project and draft a concise CLAUDE.md for future sessions. Identify its purpose, current files, agreed research decisions, and unresolved questions. Point to the other project context files and include instructions to keep them current. Preserve existing authored guidance and show me the proposed changes.

### Resume a project

Point the agent to: the project folder and its project context files.

Read CLAUDE.md (or AGENTS.md), STATUS.md, and TASKS.md, plus any other project context files relevant to the next task. Then inspect the inputs and outputs needed for that task. Summarize the current work, flag any disagreement between the project context files and the work saved on disk, and identify the next action.

### Finish a session and update project context

Point the agent to: the current session’s work, checked outputs, and unresolved questions.

Update TASKS.md and STATUS.md from the work and outputs actually checked. For scientific changes I approved, update SPECIFICATION.md and add dated entries at the top of METHODOLOGY.md explaining the decisions, reasons, and specification changes. Preserve earlier entries. Leave unfinished work and failures explicit, with enough information for the next session to continue.

### Set global user instructions

Point the agent to: existing instructions and examples of conventions used across projects.

Use these conventions and examples to create or update `~/.claude/CLAUDE.md`. Keep it concise and link to specialist files, stating when each should be read. Keep study-specific decisions in the project context files. Show me proposed changes before applying them.

### Create a project-scaffolding skill

Point the agent to: an agreed project layout, setup instructions, and the folder where the agent should save the skill.

Write a reusable `SKILL.md` for the project setup we have agreed. Have it ask for the new project's purpose and where its folder should be created, follow the relevant layout conventions, preserve existing files, and leave missing research decisions as questions. Include checks of the created folders and records. Try it on a new project folder and report the result.

## Define the study and gather evidence

### Compare research approaches

Point the agent to: the research question, available data, constraints, and any verified sources.

Using the research question, available data, and constraints below, compare plausible analysis approaches. Explain what each would estimate, the assumptions it requires, and what evidence supports or challenges it. Separate verified sources from suggestions to investigate. Identify decisions needed from me before turning the chosen approach into an analysis specification.

### Make the research specification explicit

Point the agent to: your research decisions and the questions that still need resolution.

Write SPECIFICATION.md from my research decisions: estimands, target population and analysis sample, comparisons, estimator, sample rules, inputs, uncertainty, and outputs. State any averaging or standardization explicitly. Include prescribed checks and tolerances. Flag unresolved choices for my review before fitting.

### Search and verify the literature

Point the agent to: the research question, eligibility criteria, and any existing search protocol.

Search OpenAlex, PubMed, and other relevant research databases using the question and criteria in SPECIFICATION.md. Use Crossref, other DOI registries, or publisher records to verify each journal article’s DOI, title, authors, and year. Flag mismatches and papers without a verified DOI. Record the services searched, exact queries, dates, screening decisions, and access gaps. Save verified references separately from unverified leads, and distinguish abstracts from full texts you actually read.

### Synthesize the papers actually read

Point the agent to: verified papers, records of what was read, and the question to address.

Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.

### Bring approved data into the project

Point the agent to: approved inputs, their documentation, and the current scientific specification.

Inspect the research data and documentation. Record each source, version or acquisition date, permitted use, and checksum. Preserve the originals. Write checks for the variables, identifiers, units, ranges, and missingness rules in SPECIFICATION.md. Report discrepancies before using the data in an analysis. Do not substitute synthetic observations for missing research inputs.

## Build and check the analysis

### Build a modular analysis workflow

Point the agent to: SPECIFICATION.md, the research data and documentation, and any existing analysis code and results.

Read SPECIFICATION.md and propose independently runnable analysis steps, identifying the inputs and saved outputs for each. Implement the structure using shared functions where appropriate. If analysis code already exists, first run it and save its code and results for comparison. After reorganizing it, use the same inputs to compare sample membership, estimates, and uncertainty intervals. Investigate and report unexpected differences before proceeding.

### Test the workflow before running the full batch

Point the agent to: the workflow code, input data and documentation, SPECIFICATION.md, and the intended full batch.

Run a small, complete test of this workflow before starting the full batch. Check that every step receives the expected inputs and saves usable outputs. Add automatic checks based on SPECIFICATION.md and the data documentation. Fix implementation errors and repeat the test. Once it passes, run the full batch and report any failures.

### Investigate an unexpected result

Point the agent to: the unexpected result, specification, current code, and saved outputs.

Investigate the unexpected result identified below using SPECIFICATION.md, the current code, and saved outputs. Examine possible explanations in the data, code, and statistical model, and report the evidence for each. Preserve the original analysis. Propose any justified sensitivity analysis for my decision. After approval, update SPECIFICATION.md, record the decision and reason in METHODOLOGY.md, and compare the original and revised results for the specified quantities.

### Plan and run known-truth checks

Point the agent to: the specification and scientific scenarios or performance questions to examine.

Using SPECIFICATION.md, propose simulation scenarios relevant to this study and performance measures for the prescribed estimator. Explain how each dataset will be generated and how the true quantities will be calculated independently of the fitting code. Check that the generator produces plausible values and variability. After I approve the simulation specification, test one complete run, then evaluate repeated datasets in each scenario without changing the estimator. Save estimates, intervals, and failed runs; report performance and its Monte Carlo uncertainty. Keep simulation files separate from the primary analysis and propose any methodological changes for my decision.

### Implement the analysis independently

Point the agent to: the fixed specification, data dictionary, approved input files, and assigned language.

Ask the current agent to prepare two fresh headless sessions, each receiving the request below without access to the other implementation or its results. Share original data when checking processing; an already verified dataset can be shared for a narrower analysis check.

Working only from the supplied SPECIFICATION.md, data dictionary, and approved input files, independently implement the prescribed analysis in the assigned language. Do not consult another implementation's code or results, or use intermediate files it produced beyond the shared inputs explicitly approved for this check. Stop and ask about missing inputs or ambiguous requirements. Save the code, input-file checksums, included record identifiers, derived variables, model terms, and labeled full-precision estimates and uncertainty calculations.

### Compare completed implementations

Point the agent to: both completed implementations, their outputs, and the common specification.

Ask the current agent to launch a separate fresh headless session for this comparison and give it the request below.

Compare the completed implementations against the shared SPECIFICATION.md and agreed tolerances. Work from input-file checksums and included records through exclusions, derived variables, model terms, fitted results, and reported quantities and uncertainty. Use full-precision values. Save an agreement-and-discrepancy table and identify the earliest stage at which each difference appears. Investigate its cause against the specification and source data; do not treat either implementation as the answer key or change outputs merely to make them agree. Report unresolved issues and proposed corrections, distinguishing code errors from scientific decisions that need my approval.

## Use LLMs in the research

### Develop an LLM labeling method

Point the agent to: the research question, development material, reviewed human examples, candidate LLMs, and participant or document identifiers for keeping related excerpts together.

Using the research question, development material, and reviewed human examples, help develop a rubric and prompt for the labeling task. Identify ambiguous cases and category definitions that need my decision. Compare the agreed candidate prompts and LLMs on development material only, reporting category-specific errors and cases requiring human review. Keep all excerpts from the same participant or document together when assigning material to development and test sets. Do not inspect the test set while selecting the method. Save the candidate versions and comparisons, then record the chosen rubric, prompt, LLM settings, and final-test criteria in SPECIFICATION.md after my approval.

### Evaluate LLM labels on a held-out test set

Point the agent to: the fixed rubric, prompt, LLM settings, held-out test excerpts, groups to compare, and acceptance criteria. Keep the reviewed human labels unavailable to the LLM during labeling.

Apply the fixed rubric, prompt, and LLM settings to the held-out test excerpts without supplying their human labels to the LLM. Save each raw response, the label extracted from it, failed requests, and cases requiring human review. Then compare the labels with the reviewed human reference. Report a confusion matrix, uncertainty in error rates, differences across the specified groups, and remaining human review. Assess the acceptance criteria supplied before the run. Do not revise the labeling method using this test set or omit difficult cases.

### Assess sensitivity to prompts and LLMs

Point the agent to: the fixed research question and rubric, agreed variations to compare, designated development or final-analysis material, and the code producing research estimates.

Using the agreed comparisons, keep the research question and category definitions fixed while varying prompt wording, example order, LLM choice, or generation settings. Repeat requests with unchanged settings to assess ordinary run-to-run variation. Report which labels change and how those changes affect the research estimates, including relevant group comparisons. Compare errors where human reference labels are available. Use development material when the comparisons will guide method selection; keep prespecified analyses of final estimates separate. Save every configuration and response. Do not select a method because it produces a preferred research finding, and do not interpret stable labels as evidence of accuracy.

### Run research tasks in fresh headless sessions

Point the agent to: the research protocol, fixed instructions, assigned input for each case, and permitted files, tools, and services.

Prepare one fresh headless session per case, using the supplied research protocol and fixed instructions. Give each session its assigned input without conversation history from other cases. Configure and check which files, tools, and services it can access; report any access you cannot verify. Run a few cases through requesting and saving responses before launching the full collection. Save each case's inputs, raw response, failures, retries, LLM identifiers, and settings. Keep response collection separate from analysis so the saved outputs can be analyzed again without new LLM calls.

## Write and revise

### Trace numbers into the manuscript

Point the agent to: the rendered manuscript and saved results, including tables and figure sources.

Create a chain of evidence linking each main manuscript result to its saved source file, exact entry, and analysis run. Record where it appears, including the abstract, tables, and captions, and save source checksums to detect changes. Compare the final document with those results, checking contrasts, samples, values, units, signs, intervals, and rounding. Propose updates to affected passages and identify unsupported claims for my decision.

### Draft and assess a manuscript section

Point the agent to: the section to draft, research decisions, verified sources, results, and writing guidance.

Draft this section from the supplied research decisions, verified sources, and saved results. Follow my writing conventions. Mark unsupported claims, numbers, and references as gaps. Identify weaknesses in the argument and propose alternatives separately for my consideration. Describe the analysis that actually ran; do not present planned work as completed or change the scientific interpretation without agreement.

### Draft a response from your decisions

Point the agent to: reviewer comments, your decisions, and the revised manuscript and analysis records.

Draft the reviewer response from the supplied comments, my decisions, the revised manuscript, and completed analysis outputs. Quote each comment, lead with the substantive answer, and cite the actual locations of changes. Distinguish analyses from wording edits. Do not add concessions I did not make or claim unfinished work is complete. Flag unresolved comments and decisions.

## Reproduce and share

### Test the proposed handoff files

Point the agent to: the proposed archive/ folder or zipped copy, its README and input list, the saved results to reproduce, and comparison tolerances.

Copy archive/ into a temporary test directory outside the working project, or extract the exact zip file proposed for sharing there. Set up a separate software environment and a fresh headless agent session whose file access excludes the working project. Have that agent follow the supplied README using only the supplied files, listed inputs, and documented commands. Restore the recorded software versions without upgrading them. Compare rebuilt outputs with the supplied results using the agreed tolerances. Report missing files or instructions rather than filling gaps from the working project. Record failures and untested steps; do not alter the analysis or comparison criteria to force agreement.

### Review a proposed deposit

Point the agent to: the exact files proposed for sharing, the manuscript, reproduction report, and sharing requirements.

Review the exact contents of archive/ proposed for sharing against the manuscript, reproduction report, and sharing requirements. Identify confidential material, credentials, personal paths, missing files, and incomplete access instructions, including in any supplied version history. Check contributors, licenses, AI disclosure, and the manuscript version. Explain how proposed exclusions affect reproduction. Propose corrections without uploading, deleting files, or rewriting history.
