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
