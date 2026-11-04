# Doing Research with AI Agents

The website is generated from the canonical manuscript in `workspace/publishing/agentic-ai-for-researchers/`, which also builds the PDF. Edit prose and figures upstream; regenerate the chapter copies here. Explicit chapter ids keep addresses stable when titles or order change.

## Local reading draft

The November 3, 2026 revision has 19 chapters and four appendices, plus the landing page, a 404 page, and a legacy redirect. LLM measurement and model deployment/adaptation have separate chapters. Author review and account/platform trials precede the planned November 19 public release. Local preview syncs may include uncommitted upstream edits, which the source lock records explicitly. The visual organization of the landing-page table of contents will be revisited after the author confirms the chapter structure.

## Build and check

```sh
just sync       # refresh from the committed upstream manuscript
just check      # render and validate sources, figures, links, and navigation
just preview    # serve locally
```

Quarto renders prebuilt prose and SVG figures without executing research code. The vendored DSS theme supplies the site treatment. On this Dropbox checkout, `_site` points to an external render cache. `just watch` supports authoring against uncommitted upstream changes.

Chapter pages, sidebar/maps, figure palettes, and shared checks are generated through `dss-training-ops/scripts/split-chapters.py`. The landing illustration and its console.js controls are maintained here. Figures can be enlarged and have both light and dark variants.

Publication uses the existing Cloudflare Pages direct-upload recipe, `just deploy`, after its validation gates. It is separate from the editorial build and from CI checks. This revision has not been deployed; hosting and final public addresses remain release-stage work.

## License


Code is MIT, see `LICENSE`: the scripts, the Lua filters, the site configuration, and the landing
page's JavaScript and CSS. The guide's text and figures are CC BY 4.0, see `LICENSE-content`. The code
examples inside the guide are MIT too, so they can be copied into a project without attribution.
