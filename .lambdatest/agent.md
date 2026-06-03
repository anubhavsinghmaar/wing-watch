# WingWatch Delhi, KaneAI testing instructions

## App overview
WingWatch Delhi is a local first web app for tracking migratory and resident birds across birding locations in Delhi NCR. It is a static site built with plain HTML, CSS and JavaScript and is hosted on GitHub Pages. There is no backend and no login. Data is stored in the browser using localStorage.

The main areas are:
- Dashboard, an Arrival Board of bird sightings across locations
- Bird Call Analyzer, audio upload and AI identification
- Species Explorer, browse around 40 species with detail profiles
- Settings, where a user can store their own API keys

## What to focus tests on
- The Dashboard arrival board renders and lists the birding locations.
- The Location, Category and Status filters work and update the board.
- The Species Explorer loads and lets you browse species and open a species profile.
- Top navigation between Dashboard, Bird Call Analyzer, Species Explorer and Settings works.
- For this pull request specifically, verify that the newly added location "Surajpur Wetland" appears in the Location filter dropdown and on the arrival board, and that filtering by it behaves correctly.

## What to skip
- The Bird Call Analyzer audio analysis and any AI powered species identification, because they need a user supplied Google Gemini API key that an anonymous visitor does not have.
- Live conservation data through the Perplexity API, for the same reason, since no key is configured.
- Do not try to enter API keys or test any flow that depends on them.

## Notes
- Keep tests scoped to the change in this pull request plus the core navigation above. There is no need to exhaustively test unrelated areas of the app.
