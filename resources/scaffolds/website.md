# Website scaffold

This layout separates editable material from the generated website. Have the agent adapt the folder names to the chosen website software.

```
website-project/
  README.md
  CLAUDE.md
  STATUS.md
  TASKS.md
  DESIGN.md
  source/
  assets/
    images/
    styles/
  output/
  docs/
    notes/
```

The agent writes pages in `source/` and keeps images and styles in `assets/`. The build produces the viewable site in `output/`; lasting edits belong in the sources so they survive the next build. Have the agent record preview and build commands in `README.md`, along with where the site will be published.

Give this layout to the agent with the site's purpose, audience, software if already chosen, and the folder where the project should be created. Ask it to create the structure and project context files and check that the preview uses the intended pages and assets. Publishing the site is a separate task.
