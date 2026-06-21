# Hero card live evidence (Kane vs wing-watch)

Verified 2026-06-21 with kane-cli against a locally served wing-watch build (the same serve-in-runner the Guardian workflow uses).

| build | objective | Kane verdict | credits |
|---|---|---|---|
| clean (main) | set a seasonal status, reload, verify it persisted | **PASS** (status persisted) | 19.8 |
| seeded bug (demo/seeded-bug) | same objective | **FAIL** (status lost on reload) | 27.4 |

Kane caught the seeded persistence bug: "tested whether a bird’s seasonal status label persisted after a page reload on WingWatch Delhi.". This is the Guardian hero pattern proving itself on a real repo. Note: the explicit persistence framing of the objective is what lets Kane catch this reliably (the Kane-Bench benchmark shows vaguer success phrasing produces false passes on this fault class).

## Live CI run (real GitHub Actions, 2026-06-21)

Run: https://github.com/anubhavsinghmaar/wing-watch/actions/runs/27911792327 (conclusion: success)
Dispatched against `demo/seeded-bug` with LT creds + a CLAUDE_CODE_OAUTH_TOKEN (Claude subscription, no API key).

| step | result |
|---|---|
| Claude selects journeys from the diff | success (Claude ran in CI via the subscription OAuth token) |
| Kane journey: season-persistence | **FAIL** (caught the seeded persistence bug) |
| Kane journey: location-filter | PASS |
| Set merge gate | **commit status `kane/guardian` = failure** ("season=FAIL filter=PASS") |
| Post root cause to PR | skipped (dispatched without an open PR; opens when run on a real PR) |
| Claude fix loop (K=1) | guarded no-op (opt-in; never auto-commits in the demo) |

Result: the PR-to-Production Guardian pipeline ran end to end in real CI, the AI select leg worked on the Claude subscription, Kane caught the seeded bug, and the merge gate correctly went red. The flagship hero is now RUN-VERIFIED, not just designed.
