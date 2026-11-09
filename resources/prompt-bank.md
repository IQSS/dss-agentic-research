# Research requests

Adapt paths and the scientific specification before use.

## Start a new research project

Set up a project for the research described below. Use the existing workspace and lab conventions where available. Propose a structure suited to the deliverable, then create the agreed folders and initial records. Preserve existing files and list research decisions still needed from me.

## Organize an existing project

Inspect this project and propose a clearer structure. Identify current and uncertain files before moving anything. After I approve the plan, make a recovery copy, reorganize the files, update affected paths, and save an old-to-new file map. Preserve original inputs and check that the affected outputs still reproduce.

## Write project instructions

Read this project and draft concise instructions for future sessions. Identify its purpose, current files, agreed research decisions, and unresolved questions. Link to detailed records and include instructions to keep them current. Preserve existing authored guidance and show me the proposed changes.

## Resume a project

Read the project instructions, STATUS.md, and TASKS.md, then inspect the files relevant to the next task. Summarize the current work, flag any disagreement between the records and the files, and identify the next action.

## Leave a useful handoff

Update the task list and current status from the work and outputs actually checked. Record scientific decisions and their reasons in METHODOLOGY.md. Leave unfinished work and failures explicit, with enough information for the next session to continue.

## Separate shared and project instructions

Review these instructions and examples for conventions that apply across projects. Propose a short personal instruction file with references to any useful specialist files. Keep this study's decisions in its project records. Show proposed changes and conflicts, then apply the agreed guidance to the next task.

## Create a project-scaffolding skill

Turn the project setup we have agreed into a reusable skill. Have it ask for the new project's purpose and destination, follow the relevant layout conventions, preserve existing files, and leave missing research decisions as questions. Include checks of the created folders and records. Try it on a new project folder and report the result.

## Make the research specification explicit

Turn my research decisions into specification.md: state the estimands, population or averaging sample, exposure comparisons, estimator, sample rules, required inputs, uncertainty method, and reported outputs. Identify ambiguities for me rather than choosing silently. Add the agreed verification tolerances and simulation questions. Do not begin fitting until I have reviewed the scientific specification.

## Search and verify the literature

Search for research relevant to the question and criteria in our specification. Record the sources searched, exact queries, dates, and screening decisions. Verify each journal article’s DOI against publisher or registry metadata, including title, authors, and year; flag mismatches and works without a DOI rather than inventing one. Save verified references separately from leads, and distinguish abstracts from full texts you actually read.

## Synthesize the papers actually read

Using the verified papers and reading records, summarize the evidence relevant to our research question and proposed method. Link each substantive claim to the source and passage that supports it. Distinguish study design, population, estimand, and limitations; report disagreements and missing evidence. Do not infer full-text findings from an abstract or fill gaps from memory.

## Bring approved data into the project

Inspect the approved inputs and their documentation. Record where each came from, the version or acquisition date, permitted use, expected units and identifiers, and a file fingerprint. Preserve the originals and create separate scripted checks for the required columns, record keys, ranges, and missingness rules in specification.md. Report discrepancies before transforming or excluding records; never replace missing research inputs with simulated observations.

## Build a modular analysis workflow

Review the current analysis and propose coherent steps with explicit inputs and saved outputs. Preserve its scientific behavior while separating expensive fits from contrasts, figures, and reporting. Reuse shared functions, and keep adequate existing runners. Provide commands for individual steps and useful combinations, then compare the refactored outputs with the accepted baseline. Report any scientific difference instead of silently treating it as a refactor.

## Plan and run known-truth checks

Propose a simulation plan for specification.md. Define plausible generating worlds, separately calculated truth, estimator-recovery measures, interval or decision-rule checks, and Monte Carlo uncertainty. Check outcome support and dispersion before running; count failures as well as successes. After I approve the plan, run the saved analysis unchanged in each world and report where it fails. Keep simulated files separate from study inputs and do not change the method to make a check pass.

## Implement the analysis independently

Working only from specification.md, the data dictionary, and the approved original inputs, independently implement the analysis in the assigned language. Do not consult another implementation, processed dataset, or result. Stop for missing inputs or ambiguity; do not invent values or substitute simulated data. Save the code, input fingerprints, sample identifiers, derived values, model terms, and labeled full-precision results with their uncertainty calculations.

## Compare completed implementations

Compare the completed implementations against specification.md and its tolerances. Check input versions, sample membership, exclusions, derived variables, model terms, and reported quantities, using full-precision values. Produce an agreement-and-discrepancy table and identify the earliest stage at which each discrepancy appears. Do not change either implementation or its outputs to force agreement.

## Design controlled LLM research runs

For this review-generation and judging protocol, specify the inputs, instructions, tools, and services allowed in each stage. Set up fresh runs and verify their actual access against that protocol before the batch. Save raw responses, failures, retries, configuration, and LLM information. Report untested access routes; headless execution alone does not establish isolation.

## Evaluate a frozen labeling procedure

Apply the frozen rubric and prompt to the held-out evaluation inputs without reading their human labels. Save every raw response, parsed label, failure, and referral. After labeling finishes, compare with the independently adjudicated reference. Report the confusion table, category-specific errors, uncertainty, referral workload, and prespecified acceptance criteria. Do not tune on this sample or drop difficult cases; list disagreements for human review.

## Trace numbers into the manuscript

Trace each main manuscript result, including the abstract and captions, to its saved source file and exact entry. Record source fingerprints and check values, signs, units, samples, intervals, and rounding in the final rendered document. Identify every affected use when a source result changes. Propose updates only from verified outputs and list unsupported claims for my decision.

## Draft from the research record

Draft this section using only the supplied research decisions, verified sources, saved result tables, and figure captions. Where a claim, number, or reference has no support in those files, leave a bracketed gap and list it at the end. Follow my writing conventions. Do not invent evidence or change the scientific interpretation to complete the prose.

## Draft a response from your decisions

Draft the reviewer response from the supplied comments and my decision notes. Quote each comment, lead with the substantive answer, and cite the actual locations of manuscript changes. Do not add concessions I did not make or claim an analysis was run without its saved output. Flag unresolved comments and record any approved methodological change in the project record.

## Test a clean-copy handoff

Prepare a clean-copy reproduction test using the README and input manifest. Identify missing inputs and approved access routes before running. Restore the recorded environment without upgrading it, run the documented commands, and compare outputs using the agreed tolerances. If restricted data are unavailable here, run only the synthetic example and state that empirical reproduction remains untested. Save commands, outputs, and discrepancies without changing the analysis or criteria to force a pass.

## Review a proposed deposit

Review the proposed deposit against the manuscript, code, and input manifest. Report confidential material, credentials, personal paths, missing dependencies, incomplete access instructions, and unsupported claims. Preserve relevant AI disclosure and scientific provenance, including prompts and model-evaluation records. Check contributors and licenses. Propose specific corrections; do not upload, delete files, or rewrite history.
