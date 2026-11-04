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
    watchexec --watch "$up/source" --watch "$up/figures" --watch "$up/resources" --exts md,svg,json,zip,txt -- $sync &
    watcher=$!
    trap 'kill "$watcher" 2>/dev/null || true' EXIT INT TERM
    python3 scripts/render-site.py --preview

# Publish to Cloudflare Pages -- project `dss-agentic-research`, https://dss-agentic-research.pages.dev
# Direct upload, deliberately not a git integration: CI renders and checks but never publishes, so no
# Cloudflare credential lives in the workflow. It depends on `verify`, so a site that is stale against
# its upstream document, or that fails either check, cannot be published by accident.
# Credential: CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID from the environment if set, otherwise from
# 1Password (op://Credentials/cloudflare-api-token-dss-pages: Pages Edit only, no expiry; the account ID
# is in its username field). wrangler's own OAuth login is not used: it expires after a few hours and
# cannot be refreshed without a terminal, which is what stranded the 2026-09-10 deploy.
deploy: verify
    #!/usr/bin/env bash
    set -euo pipefail
    export CLOUDFLARE_API_TOKEN="${CLOUDFLARE_API_TOKEN:-$(op read 'op://Credentials/cloudflare-api-token-dss-pages/credential')}"
    export CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-$(op read 'op://Credentials/cloudflare-api-token-dss-pages/username')}"
    wrangler pages deploy _site --project-name dss-agentic-research --branch main
