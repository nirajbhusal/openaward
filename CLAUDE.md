# Scholio (repo: nirajbhusal/scholio)

Global index of Master's and PhD scholarships. Live site: https://nirajbhusal.github.io/scholio/ (GitHub Pages, deploy from branch `main`, folder `/`).

Owner: Niraj Bhusal (NB). Brand: **Scholio** (domain still to be registered). If the name ever changes, it is a find-and-replace across `index.html`, `README.md`, `manifest.webmanifest`, `og.png`.

## Non-negotiables (from the owner)
- Live product, not a prototype: **no invented numbers, reviews, events or stats**. Anything shown must be real data, computed from real data, or clearly an empty state.
- A listing shows "Verified" only when a human has checked the official page; record it in `VERIFY.md` and set `checked:"YYYY-MM-DD"` in `DATA`. Otherwise the card says "Confirm on official page".
- Listings with no fixed date use `deadline:null` plus `window:"..."` (typical annual window) and are never shown as a countdown.
- We never host application forms; every award links out to the funder's official page.
- Light theme only, Inter, blue accent `#2563eb` with violet `#7c3aed`. No em dashes in copy. Mascot: rounded badge, two eyes, mortarboard, gold tassel (`#logo` symbol).
- Header: brand, icon+label nav in one scrollable row, Sign in, then the "Closing soon" strip.
- Master's and PhD only for now. Assessment is a step-by-step wizard (one question per screen).

## Structure (single file today, multipage next)
`index.html` holds everything: CSS, markup for views (`#view-home`, `map`, `countries`, `rank`, `assess`, `academy`, `course`, `cert`, `resources`, `events`, `funders`, `about`, `signup`), and JS.
Data constants in the script: `UNI` (university DB), `DATA` (41 listings), `COUNTRIES`, `COURSES` (Academy; `sop` is a complete course with lessons+quizzes, others are outlines with `soon:true`), `GUIDES` (English test guides), `WSTEPS` (wizard questions).
Client state in localStorage: `sc_profile`, `sc_course_<id>`, `sc_certs`, `sc_saved`, `sc_cv`.
Map: Leaflet 1.9.4 from cdnjs with CARTO light tiles; trimmed Leaflet CSS is inlined.

## Submissions and feedback (no backend yet)
Reviews, corrections, new listings and session proposals open prefilled GitHub Issues with labels `review`, `correction`, `listing`, `event`. Create those labels in the repo.

## QA bar
Playwright: every view at 1366 and 390 widths, zero console errors, zero horizontal overflow, and the course flow (all quizzes to certificate) runs end to end. Keep it.

## Next (agreed direction)
1. Convert to a multipage static site with **Astro** (static output to GitHub Pages via Actions, one route per section and per award, data in `src/data/*.json`, interactive islands only for search, fit wizard, map, course player, CV designer). A React SPA is not recommended: worse SEO and first paint for a content site with no backend.
2. Verification pipeline: a script that opens each official URL and flags changes, plus the `VERIFY.md` log.
3. Backend when accounts are needed (Supabase or similar): profiles, saved awards, certificates with a public verify endpoint, alerts.
4. Grow listings through submissions; keep the template strict.
