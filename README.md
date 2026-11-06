# OpenAward

Global scholarship portal prototype for Master's and PhD seekers and funders.

## Run
Open `index.html` in a browser, or `npx serve .`

## Structure (single file for now)
- `index.html` : markup, styles and all data/logic inline
  - `UNI`       : university database (rank, country, flagship funding, intl share)
  - `DATA`      : scholarship listings on the standard template
  - `COUNTRIES` : destination cards + saves infographic
  - `COURSES`   : Academy crash courses
  - `EVENTS`    : events list

## Suggested next steps in Claude Code
1. Split data into `/data/*.json` and load with fetch.
2. Move to Astro or Next.js; one route per section.
3. Add a verification script that re-checks each listing's official URL and deadline.
4. Replace the illustrative ratings/reviews with a real store before launch.

## Caveats
Deadlines are from a public Nov 2026 compilation, not yet re-verified on official pages.
Rankings indicative (QS 2026). Reviews, course enrolments, events, funder numbers are illustrative.
