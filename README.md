# dss-agentic-research

A working guide to doing research with an AI agent, for researchers rather than developers.

The prose is generated from a single markdown source that also produces the PDF, so the two never
diverge. The source lives in a separate repository; the chapters here are build products, committed so
that a clone builds without it.

## Build

```sh
quarto preview   # or quarto render; needs Quarto 1.9+
```

Nothing executes, so a render needs only Quarto. The look is the `dss-theme` extension, vendored in
`_extensions/` (`quarto update IQSS/dss-theme` takes a newer version). CI
(`.github/workflows/publish.yml`) renders on every push to `main` and publishes to `gh-pages`.

## Layout

One `.qmd` per chapter in `chapters/`, with the order set by the sidebar in `_quarto.yml`; figures as SVG
in `figures/`. The landing page is hand-written: `index.qmd` draws a control console with the agent behind
it, every control a chapter, with `console.js` and `console.css` beside it. On a Dropbox-synced checkout,
`_site` is a symlink outside Dropbox.

## Status

A private working repository. The site is published to Cloudflare Pages by direct upload (`just deploy`)
and sits behind an access login while the materials are iterated on; a move to IQSS and the DSS training
index waits on that.

## License

Code is MIT, see `LICENSE`: the scripts, the Lua filters, the site configuration, and the landing
page's JavaScript and CSS. The guide's text and figures are CC BY 4.0, see `LICENSE-content`. The code
examples inside the guide are MIT too, so they can be copied into a project without attribution.
