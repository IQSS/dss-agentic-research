# Dataset scaffold

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

Give this specification to the agent with the data sources, intended users, access restrictions, and destination. Ask it to adapt the structure to the actual collection and release process, then create the agreed folders and initial records. Preserve existing files, record unresolved decisions, and check that the instructions identify the right inputs, scripts, and release locations.
