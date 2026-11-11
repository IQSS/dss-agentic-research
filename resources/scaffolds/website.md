# Website scaffold

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

Give this specification to the agent with the site's purpose, audience, software if already chosen, and destination. Ask it to adapt the layout to that software and create the agreed structure and initial records. It should check that the preview uses the intended pages and assets. Creating the scaffold does not include publishing the site.
