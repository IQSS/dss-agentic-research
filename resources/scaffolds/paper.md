# Research paper scaffold

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
