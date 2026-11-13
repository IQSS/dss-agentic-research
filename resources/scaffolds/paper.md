# Research paper scaffold

This layout keeps original inputs, reusable analysis code, exploratory work, and manuscript results distinct. Have the agent retain only the folders the study needs and use the project's analysis language.

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

Give this layout to the agent with the research question, intended outputs, analysis language, and the folder where the project should be created. Ask it to adapt the layout, describe the project in `README.md`, and write navigation and maintenance instructions in `CLAUDE.md`. It should populate `STATUS.md` and `TASKS.md` from the current work, `SPECIFICATION.md` from your approved scientific requirements, and `METHODOLOGY.md` with dated decisions and reasons, newest first. Unresolved methods should remain questions. After an approved scientific change, the agent should update both scientific files. Have it preserve existing work and check that the paths it records point to the right locations.
