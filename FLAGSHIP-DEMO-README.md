# Flagship demo: wing-watch (secrets matrix + run guide)

These six workflows under `.github/workflows/` are the runnable wing-watch instantiation of the Kane CLI Cookbook flagship tier. Each one fuses your app, GitHub, an orchestrating AI agent, and two or three more systems (observability, issue tracking, chat, paging) into a single pipeline where a real browser verdict, not a green dot from some other harness, gates a merge, files a ticket, or pages a human. They are safe by default. Every one is wired to run on `workflow_dispatch` (the incident and alarm ones also accept a `repository_dispatch` event carrying a synthetic payload), so nothing fires on real traffic, nothing auto-merges, and the production triggers (`pull_request`, `push` tags, `schedule` cron) ship commented out with a "uncomment after secrets are set" note. wing-watch is a static site, so there is no external deploy: the shared composite action `./.github/actions/kane-journey` serves the checked-out build inside the runner at `localhost` and points Kane at it. Kane runs locally and headless in the runner via CDP; there is no `--ws-endpoint`. Every external-system leg is gated on its own secret and has an `else` fallback that echoes "would post: <summary>", so a workflow runs green even with only the two LambdaTest secrets set.

The three named journeys (`season-persistence`, `location-filter`, `no-app-errors`) live in `.lambdatest/journeys.json` and are fed to the composite action, which returns a structured verdict (`verdict`, `exit_code`, `credits`, `run_dir`, `test_url`, `summary`). Exit 0 is PASS, exit 1 is FAIL, and exit 2 or 3 maps to VOID. VOID is infra (timeout or tooling), treated as neutral and retried, never a merge-blocking fail and never a silent green.

---

## 1. Secrets matrix

Add every secret at **repo Settings → Secrets and variables → Actions → New repository secret**. The two LambdaTest secrets are mandatory for all six. Everything else is optional: if a token is absent, that leg degrades to an echo and the workflow stays green.

| Secret | F1 Guardian | F2 Sentinel | F3 RUM-to-Regression | F4 Alarm Reproduce | F5 Quality Gate | F6 Release Train |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| `LT_USERNAME` | required | required | required | required | required | required |
| `LT_ACCESS_KEY` | required | required | required | required | required | required |
| `ANTHROPIC_API_KEY` | select + auto-fix | — | — | — | diff plan | K=1 fix |
| `DATADOG_API_KEY` | — | read | read | — | — | pre-gate read |
| `DATADOG_APP_KEY` | — | read | read | — | — | pre-gate read |
| `DATADOG_API_KEY` | — | — | — | read | — | — |
| `DATADOG_APP_KEY` | — | — | — | read | — | — |
| `JIRA_BASE_URL` | — | bug | — | bug | — | bug |
| `JIRA_EMAIL` | — | bug | — | bug | — | bug |
| `JIRA_API_TOKEN` | — | bug | — | bug | — | bug |
| `JIRA_PROJECT_KEY` | — | bug | — | bug | — | bug |
| `SLACK_WEBHOOK` | — | notify | page | notify | notify author | notify |
| `PAGERDUTY_ROUTING_KEY` | — | — | page | — | — | — |

Notes on the matrix:

- `LT_USERNAME` and `LT_ACCESS_KEY` are the only secrets the composite action consumes. Kane authenticates with Basic auth, which does not expire mid-run.
- `ANTHROPIC_API_KEY` powers the Claude legs. In F1 it both selects which journeys the diff can break and drives the capped auto-fix. In F5 it does the diff classification. In F6 it drives the K=1 candidate fix. With no key, F1 and F5 fall back to running the full committed journey set, and F6 skips the repair and leaves the gate honest.
- Datadog naming is not uniform across the set. F2, F3, and F6 read `DATADOG_API_KEY` plus `DATADOG_APP_KEY`. F4 reads `DATADOG_API_KEY` plus `DATADOG_APP_KEY`. Add whichever pair the workflow you are enabling actually references (the matrix rows above are split deliberately). Datadog access is read-only in every case; incidents are never created from inside these workflows.
- `JIRA_PROJECT_KEY` selects the project a bug lands in. Without the full Jira set, the bug leg echoes "would create Jira bug: <summary>".
- `SLACK_WEBHOOK` is an incoming-webhook URL. `PAGERDUTY_ROUTING_KEY` is an Events API v2 routing key, only used by F3.
- No secret is needed for the PR comment or the commit-status legs in F1, F5, and F6; those use the automatic `GITHUB_TOKEN` under least-privilege `permissions`.

---

## 2. Run steps: the hero (Flagship 1)

This is the demo to run first. It reproduces a real "claimed success, no real effect" failure: a season status that silently fails to persist across a reload.

1. Seed the bug branch from the repo root:
   ```bash
   bash scripts/seed-bug.sh
   ```
   This creates `demo/seeded-bug`, rewrites the season-state write in `app.js` to a key the loader never reads, and commits it.
2. Push the branch:
   ```bash
   git push -u origin demo/seeded-bug
   ```
3. Open a pull request from `demo/seeded-bug` into your default branch (in the GitHub UI or `gh pr create --head demo/seeded-bug`).
4. Go to the **Actions** tab, pick **"Flagship 1 - PR-to-Production Guardian"**, click **Run workflow**, and set `pr_ref` to `demo/seeded-bug`.
5. Expect the `season-persistence` journey to **FAIL** (the status is lost on reload), the merge gate (`kane/guardian` commit status) to go red, and a root-cause comment to be posted to the PR. With `ANTHROPIC_API_KEY` set, the K=1 auto-fix leg proposes a one-commit app-code fix and re-verifies; it moves the gate to amber "fix ready, human merge required" and never auto-merges.

To see a clean pass instead, run the same workflow with `pr_ref` set to your default branch (no seeded bug), and every journey should return PASS.

---

## 3. Run steps: the other five

All five are safe to trigger manually from the **Actions** tab with **Run workflow**. The two incident-shaped ones (F2, F4) and the two alarm/perf-shaped ones (F3, F6) also accept a `repository_dispatch` event carrying a synthetic payload, which is how a real Datadog or PagerDuty webhook would wake them in production. Until you wire that webhook, you craft the payload yourself.

### Flagship 2: Sentinel (Incident-to-Regression)
- **Actions tab:** Run workflow, set `url`, `journey` (try `season-persistence`), and `error_signature`. Kane re-drives the journey to prove the symptom is real. On a reproduced FAIL it writes a regression note on a guarded `sentinel/regression-*` branch (never main), files a gated Jira bug, and posts to Slack. On PASS it files nothing and posts "could not reproduce, human triage".
- **Synthetic dispatch:**
  ```bash
  gh api repos/:owner/:repo/dispatches -f event_type=incident \
    -f 'client_payload[url]=/' \
    -f 'client_payload[journey]=season-persistence' \
    -f 'client_payload[error_signature]=seasonal status lost after reload'
  ```

### Flagship 3: RUM-to-Regression Closed Loop
- **Actions tab:** Run workflow, choose `journey` (default `no-app-errors`) and a `budget_label`. Kane runs the journey best-of-3 against the served build; it pages only if two or three attempts genuinely fail, which filters sampling noise. Paging uses Slack and PagerDuty when their secrets are present, otherwise echoes "would page". This workflow gates on FCP and no-app-errors framing, never the verified-buggy LCP checkpoint.
- **Synthetic dispatch:**
  ```bash
  gh api repos/:owner/:repo/dispatches -f event_type=rum-regression \
    -f 'client_payload[journey]=no-app-errors' \
    -f 'client_payload[budget_label]=p75-fcp'
  ```

### Flagship 4: Datadog-Alarm Reproduce-and-Verify
- **Actions tab:** Run workflow, set `url`, `journey`, and `error_signature`. Kane composes one objective that asserts backend health via `execute_api`, drives the browser, and `if_else`-branches to `error_reproduced` or `healthy`, logging the branch to `bifurcation.log`. A gated Jira bug is filed only on a true reproduction. A healthy re-drive posts "did not reproduce outside-in" and files nothing.
- **Synthetic dispatch:**
  ```bash
  gh api repos/:owner/:repo/dispatches -f event_type=alarm \
    -f 'client_payload[url]=/' \
    -f 'client_payload[journey]=season-persistence' \
    -f 'client_payload[error_signature]=season status lost after reload'
  ```

### Flagship 5: PR Quality Gate Agent
- **Actions tab:** Run workflow, set `pr_ref` to `demo/seeded-bug` (or any branch). This is the diff-aware, cache-and-replay sibling of the hero: it classifies the diff into the 1 to 3 journeys it can break (with `ANTHROPIC_API_KEY`) and aggregates them into a single `Kane Quality Gate` commit status. It posts a root-cause PR review comment on fail. It has no auto-fix and no bot commit. To make it a true gate, add `Kane Quality Gate` as a required status check in branch protection.
- No `repository_dispatch`; the production trigger is `pull_request`.

### Flagship 6: Self-Healing Release Train
- **Actions tab:** Run workflow, set `tag` to a release ref or `demo/seeded-bug`. It first runs a Datadog pre-gate health read (with the Datadog secrets); an already-unhealthy env marks the run inconclusive so the release is not falsely blamed. It then runs the diff-scoped regression journey. On FAIL it extracts evidence, files a gated Jira bug, opens a guarded `fix/release-*` PR (K=1, app code only, never the test), re-runs the same journey to prove green, and moves the gate to amber on a verified fix or red if still failing. It never auto-merges and never publishes a Release. Cross-browser and real-device breadth on green is reached the real way, Test Manager upload then HyperExecute, not a Kane flag.
- **Synthetic dispatch** (the `release-train` type is shipped commented in the workflow; uncomment it first):
  ```bash
  gh api repos/:owner/:repo/dispatches -f event_type=release-train \
    -f 'client_payload[tag]=demo/seeded-bug'
  ```

Replace `:owner/:repo` with your repository, or let `gh` infer it inside the repo. `gh api` reads your authenticated GitHub token; no extra secret is needed to send a dispatch.

---

## 4. Costs and what does not happen on its own

Each Kane journey run consumes Kane credits, roughly 3 to 35 credits depending on how much the agent has to explore, plus a couple of minutes of wall time. The Claude legs (selection in F1 and F5, the K=1 fix in F1 and F6) consume Anthropic tokens on top of that, only when `ANTHROPIC_API_KEY` is set. Multi-journey workflows multiply by the number of journeys: F3 runs its journey three times (best-of-3), and F5 runs all three committed journeys, so budget those accordingly. In production the first run authors a `_test.md` per journey and later runs replay it deterministically (`kane-cli testmd run`), which is near free; the authoring pass is what costs.

Nothing in this set fires automatically while the production triggers stay commented out, and nothing ever auto-merges or auto-publishes. The auto-fix in F1 and F6 is capped at K=1, edits app code only (never the test), and only moves a gate to amber "fix ready, human merge required". A human owns every merge, every Jira transition past creation, and every release. The seeded-bug demo only touches the `demo/seeded-bug` branch and never your default branch.
