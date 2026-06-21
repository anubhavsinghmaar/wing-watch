#!/usr/bin/env bash
# Create a demo PR branch with a deliberate, Kane-catchable persistence bug:
# season-state saves to a key the loader never reads, so a user's status is silently
# lost on reload. Maps to the "claimed success, no real effect" failure class.
set -e
cd "$(dirname "$0")/.."
git checkout -b demo/seeded-bug 2>/dev/null || git checkout demo/seeded-bug
sed -i.bak 's#localStorage.setItem("wingwatch_season_state_v1", JSON.stringify(seasonState));#localStorage.setItem("wingwatch_season_state_v1_DROPPED", JSON.stringify(seasonState)); // SEEDED BUG: writes to a key initializeSeasonState never reads, so status is lost on reload#' app.js
rm -f app.js.bak
git add app.js
git commit -m "demo: tweak season tracker (contains a seeded persistence bug for the Guardian demo)" >/dev/null
echo "seeded-bug branch ready: demo/seeded-bug"
echo "Open a PR from demo/seeded-bug, then run 'Flagship 1 - PR-to-Production Guardian' against it."
