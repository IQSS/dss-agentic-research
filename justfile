default: verify

# Everything: that this site is what a fresh sync would produce, and that it renders clean.
verify: check-upstream check

# Regenerate chapters, figures, the filter and the sidebar from the upstream markdown, which is the
# source of truth. Never edit anything it writes by hand -- a correction goes upstream, then this
# re-runs, and the checks below fail until it does.
sync:
    ../dss-training-ops/scripts/split-chapters.py \
      --upstream ../../publishing/agentic-ai-for-researchers \
      --site .

# Is this site current with the upstream document and the shared tooling? Green means `just sync`
# would change nothing. CI cannot ask this -- it clones this repository alone, and reaching upstream
# would put a credential in the workflow -- so it is asked here, by whoever is working in the repo.
check-upstream:
    ../dss-training-ops/scripts/check-upstream.py --site . \
      --upstream ../../publishing/agentic-ai-for-researchers \
      --tooling ../dss-training-ops/scripts

# Build the site into _site
render:
    python3 scripts/render-site.py

# What CI runs: the committed tree is what the committed source produces, and the render is clean.
check: render
    scripts/split-chapters.py --check --site .
    scripts/check-site.py

# Serve locally, rebuilding on save
preview:
    python3 scripts/render-site.py --preview

# Live local preview: syncs and serves, live-reloading as you edit -- no deploy, no commit.
# Runs the chapter splitter with --allow-dirty (a plain `just sync` refuses a dirty source,
# since SOURCE.lock must name a commit that contains the synced content) so uncommitted edits
# show up; watchexec re-runs it on every save to the upstream markdown or figures while quarto
# preview reloads the browser. Cost: SOURCE.lock names a commit without your edits while you
# work, so `just check-upstream` nags until you commit -- then a plain `just sync` puts it right.
# Ctrl-C stops both. Needs watchexec (brew install watchexec).
watch:
    #!/usr/bin/env bash
    set -euo pipefail
    up=../../publishing/agentic-ai-for-researchers
    sync="../dss-training-ops/scripts/split-chapters.py --upstream $up --site . --allow-dirty"
    $sync
    # The initial sync is complete; another startup sync would race the preview's file copy.
    watchexec --postpone --watch "$up/source" --watch "$up/figures" --watch "$up/resources" --exts md,svg,json,zip,txt -- $sync &
    watcher=$!
    trap 'kill "$watcher" 2>/dev/null || true' EXIT INT TERM
    python3 scripts/render-site.py --preview

# Refresh the existing private Cloudflare preview. Public publication uses GitHub Actions.
# Supply credentials in the local environment; never commit them.
deploy-preview: verify
    #!/usr/bin/env bash
    set -euo pipefail
    : "${CLOUDFLARE_API_TOKEN:?Set CLOUDFLARE_API_TOKEN for the private preview}"
    : "${CLOUDFLARE_ACCOUNT_ID:?Set CLOUDFLARE_ACCOUNT_ID for the private preview}"
    wrangler pages deploy _site --project-name dss-agentic-research --branch main

# Retain the existing private-preview command for maintainer scripts.
alias deploy := deploy-preview
