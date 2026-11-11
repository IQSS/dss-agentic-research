# Research requests

Adapt paths and the scientific specification before use.

## Set up and maintain a project

### Start a new research project

Supply: the project purpose, intended output, destination, and any research-group conventions.

Set up a project for the research described below. Use the existing workspace and research group conventions where available. Propose a structure suited to the deliverable, then create the agreed folders and project context files. Preserve existing files and list research decisions still needed from me.

### Organize an existing project

Supply: the existing project folder and any known current or protected files.

Inspect this project and propose a clearer structure. Identify current and uncertain files before moving anything. After I approve the plan, make a recovery copy, reorganize the files, update affected paths, and save an old-to-new file map. Preserve original inputs and check that the affected outputs still reproduce.

### Write CLAUDE.md for a project

Supply: the project files, existing instructions, and agreed research decisions.

Read this project and draft a concise CLAUDE.md for future sessions. Identify its purpose, current files, agreed research decisions, and unresolved questions. Point to the other project context files and include instructions to keep them current. Preserve existing authored guidance and show me the proposed changes.

### Resume a project

Supply: the project folder and its project context files.

Read CLAUDE.md (or AGENTS.md), STATUS.md, and TASKS.md, plus any other project context files relevant to the next task. Then inspect the inputs and outputs needed for that task. Summarize the current work, flag any disagreement between the project context files and the work saved on disk, and identify the next action.

### Leave a useful handoff

Supply: the current session’s work, checked outputs, and unresolved questions.

Update TASKS.md and STATUS.md from the work and outputs actually checked. For scientific changes I approved, update SPECIFICATION.md and add dated entries at the top of METHODOLOGY.md explaining the decisions, reasons, and specification changes. Preserve earlier entries. Leave unfinished work and failures explicit, with enough information for the next session to continue.

### Set global user instructions

Supply: existing instructions and examples of conventions used across projects.

Use these conventions and examples to create or update `~/.claude/CLAUDE.md`. Keep it concise and link to specialist files, stating when each should be read. Keep study-specific decisions in the project context files. Show me proposed changes before applying them.

### Create a project-scaffolding skill

Supply: an agreed project layout, setup instructions, and the folder where the agent should save the skill.

Write a reusable `SKILL.md` for the project setup we have agreed. Have it ask for the new project's purpose and where its folder should be created, follow the relevant layout conventions, preserve existing files, and leave missing research decisions as questions. Include checks of the created folders and records. Try it on a new project folder and report the result.

## Define the study and gather evidence

### Compare research approaches

Supply: the research question, available data, constraints, and any verified sources.

Using the research question, available data, and constraints below, compare plausible analysis approaches. Explain what each would estimate, the assumptions it requires, and what evidence supports or challenges it. Separate verified sources from suggestions to investigate. Identify decisions needed from me before turning the chosen approach into an analysis specification.

### Make the research specification explicit

Supply: your research decisions and the questions that still need resolution.

Write SPECIFICATION.md from my research decisions: estimands, target population and analysis sample, comparisons, estimator, sample rules, inputs, uncertainty, and outputs. State any averaging or standardization explicitly. Include prescribed checks and tolerances. Flag unresolved choices for my review before fitting.

### Search and verify the literature

Supply: the research question, eligibility criteria, and any existing search protocol.

Search OpenAlex, PubMed, and other relevant research databases using the question and criteria in SPECIFICATION.md. Use Crossref, other DOI registries, or publisher records to verify each journal article’s DOI, title, authors, and year. Flag mismatches and papers without a verified DOI. Record the services searched, exact queries, dates, screening decisions, and access gaps. Save verified references separately from unverified leads, and distinguish abstracts from full texts you actually read.

### Synthesize the papers actually read

Supply: verified papers, records of what was read, and the question to address.

Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.

### Bring approved data into the project

Supply: approved inputs, their documentation, and the current scientific specification.

Inspect the research data and documentation. Record each source, version or acquisition date, permitted use, and checksum. Preserve the originals. Write checks for the variables, identifiers, units, ranges, and missingness rules in SPECIFICATION.md. Report discrepancies before using the data in an analysis. Do not substitute synthetic observations for missing research inputs.

## Build and check the analysis

### Build a modular analysis workflow

Supply: SPECIFICATION.md, the research data and documentation, and any existing analysis code and results.

Read SPECIFICATION.md and propose independently runnable analysis steps, identifying the inputs and saved outputs for each. Implement the structure using shared functions where appropriate. If analysis code already exists, first run it and save its code and results for comparison. After reorganizing it, use the same inputs to compare sample membership, estimates, and uncertainty intervals. Investigate and report unexpected differences before proceeding.

### Test the workflow before running the full batch

Supply: the workflow code, input data and documentation, SPECIFICATION.md, and the intended full batch.

Run a small, complete test of this workflow before starting the full batch. Check that every step receives the expected inputs and saves usable outputs. Add automatic checks based on SPECIFICATION.md and the data documentation. Fix implementation errors and repeat the test. Once it passes, run the full batch and report any failures.

### Investigate an unexpected result

Supply: the unexpected result, specification, current code, and saved outputs.

Investigate the unexpected result identified below using SPECIFICATION.md, the current code, and saved outputs. Examine possible explanations in the data, code, and statistical model, and report the evidence for each. Preserve the original analysis. Propose any justified sensitivity analysis for my decision. After approval, update SPECIFICATION.md, record the decision and reason in METHODOLOGY.md, and compare the original and revised results for the specified quantities.

### Plan and run known-truth checks

Supply: the specification and scientific scenarios or performance questions to examine.

Propose known-truth checks for SPECIFICATION.md, with plausible generating scenarios, independently calculated truth, performance measures, and Monte Carlo uncertainty. Verify outcome ranges and dispersion. After approval, run the saved analysis unchanged in each scenario and report failures alongside successes. Keep simulation files separate and propose any methodological changes for my decision.

### Implement the analysis independently

Supply: the specification, data dictionary, original inputs, and assigned language. Use a fresh agent without access to the other implementation or results.

Working only from SPECIFICATION.md, the data dictionary, and the approved original inputs, independently implement the analysis in the assigned language. Do not consult another implementation, processed dataset, or result. Stop for missing inputs or ambiguity; do not invent values or substitute simulated data. Save the code, input fingerprints, sample identifiers, derived values, model terms, and labeled full-precision results with their uncertainty calculations.

### Compare completed implementations

Supply: both completed implementations, their outputs, and the common specification.

Compare the completed implementations against SPECIFICATION.md and its tolerances. Check input versions, sample membership, exclusions, derived variables, model terms, and reported quantities, using full-precision values. Produce an agreement-and-discrepancy table and identify the earliest stage at which each discrepancy appears. Do not change either implementation or its outputs to force agreement.

## Use LLMs in the research

### Design controlled LLM research runs

Supply: the review-generation and judging protocol, inputs, and permitted tools and services.

For this review-generation and judging protocol, specify the inputs, instructions, tools, and services allowed in each stage. Set up fresh runs and verify their actual access against that protocol before the batch. Save raw responses, failures, retries, configuration, and LLM information. Report untested access routes; headless execution alone does not establish isolation.

### Evaluate a frozen labeling procedure

Supply: the frozen rubric and prompt, evaluation inputs, and acceptance criteria. Keep the human reference labels unavailable during labeling.

Apply the frozen rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. After labeling finishes, compare with the independently adjudicated reference. Report the confusion table, category-specific errors, uncertainty, referral workload, and prespecified acceptance criteria. Do not tune on this sample or drop difficult cases; list disagreements for human review.

## Write and revise

### Trace numbers into the manuscript

Supply: the rendered manuscript and saved results, including tables and figure sources.

Trace each main manuscript result, including the abstract and captions, to its saved source file and exact entry. Record source fingerprints and check values, signs, units, samples, intervals, and rounding in the final rendered document. Identify every affected use when a source result changes. Propose updates only from verified outputs and list unsupported claims for my decision.

### Draft from the research record

Supply: the section to draft, research decisions, verified sources, results, and writing guidance.

Draft this section using only the supplied research decisions, verified sources, saved result tables, and figure captions. Where a claim, number, or reference has no support in those files, leave a bracketed gap and list it at the end. Follow my writing conventions. Do not invent evidence or change the scientific interpretation to complete the prose.

### Draft a response from your decisions

Supply: reviewer comments, your decisions, and the revised manuscript and analysis records.

Draft the reviewer response from the supplied comments and my decision notes. Quote each comment, lead with the substantive answer, and cite the actual locations of manuscript changes. Do not add concessions I did not make or claim an analysis was run without its saved output. Flag unresolved comments. For an approved methodological change, update SPECIFICATION.md and record the decision and reason in METHODOLOGY.md.

## Reproduce and share

### Test a clean-copy handoff

Supply: the project, README, input manifest, reference outputs, and comparison tolerances.

Test a separate copy using the README and input manifest. Restore the recorded environment without upgrading it, run the documented commands, and compare outputs using the agreed tolerances. Record failures and missing inputs without altering the analysis or criteria to force agreement. If only synthetic inputs are available, state that reproduction with the study data remains untested.

### Review a proposed deposit

Supply: the proposed deposit snapshot, manuscript, input manifest, and sharing requirements.

Review the proposed deposit against the manuscript, code, input manifest, and sharing requirements. Identify confidential material, credentials, personal paths, missing dependencies, and incomplete access instructions. Check contributors, licenses, AI disclosure, and records needed to understand the results. Propose corrections without uploading or deleting files or rewriting history.
