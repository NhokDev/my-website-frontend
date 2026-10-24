# Aurora home foundation

## Objective and authorized scope

Create the first Angular portfolio structure, color system, accessible layout, small home page and initial routes. Follow the user-owned Aurora Glass reference in docs/portfolio_aurora_glass_3d/ without modifying its files. The portfolio supports learning and future visibility, not current job solicitation. Preserve CSR, existing dependency versions, editor tooling, and deferred security findings. No commits, branches, staging or push are authorized for this implementation.

## Design contract

- Primary #A855F7; secondary #06B6D4; tertiary #10B981; neutral #120D1D, as supplied in the palette image.
- Required horizontal background gradient: linear-gradient(90deg, #1E1E33 0%, #281A43 25%, #321248 50%, #37123C 100%). Keep its exact stops as a named shared token and use it visibly in the page.
- Derive semantic text, surface, border and focus tokens with sufficient measured contrast; the supplied accent colors are not automatically suitable for every text/background pairing.
- Aurora atmosphere, restrained glass surfaces, one decorative CSS orbital focal point. Start static; no continuous automatic motion or WebGL dependency is required in this first slice. Respect reduced motion for any transitions.
- UI copy in English, without invented identity, employment availability, project outcomes, external URLs or completed demo projects. A truthful in-progress entry for this portfolio is appropriate.

## Structure and behavior

- Organize application code into layout/, home/, projects/ and genuinely reusable ui/ areas; tests remain colocated. Root App becomes a thin outlet, not a landing-page monolith.
- Initial routes: / for Home, /projects for an honest small workbench, and a wildcard not-found route. Preserve the application shell across routes; use real router links and route titles. No placeholder detail routes, blog, CMS, backend or global state library.
- Header, main, footer, skip link and visible keyboard focus. Main navigation must remain usable on mobile without hover-only controls. Home anchors must resolve to real sections.
- Keep browser-only effects isolated for a later SSG migration; do not add SSR now.

## Tasks and acceptance criteria

- [x] T1: Verify authorization, reference and initial application state; record exact palette and gradient.
- [x] T2: Establish shared tokens, feature boundaries, persistent shell and routable Home/Projects/not-found foundations.
- [x] T3: Build the small responsive home with CSS orbital art, learning-first narrative and truthful work-in-progress content.
- [x] T4: Observe functional tests, production build, formatting, color checks and available browser verification; record unavailable checks honestly.

## Execution and verification

- Route: delegated direct; multiple source, style, routing and test files require one bounded writer.
- No project skill registry exists; local AGENTS.md and existing configuration apply.
- Default test-first: add meaningful shell/navigation/home expectations to existing runnable tests, observe RED before implementation, then GREEN and refactor. Runner: npm --prefix web test -- --watch=false.
- Required: npm --prefix web run build; touched-file Prettier check using repository defaults; git diff --check; dependency/lockfile hash comparison; exact palette/gradient token assertions and documented representative text/surface contrast calculations.
- Where a local browser is available, capture desktop and mobile renders, verify no horizontal overflow and inspect route navigation/focus behavior. Do not install browser tooling or silently claim GUI proof. Runtime checks must clean up only owned processes.
- Generated test/build/browser artifacts are limited to web/.angular/** and web/dist/**; do not modify user documents or add dependencies.
- RDD globally on; native assessment is parent-owned, and no approval may be fabricated when candidate selection or tooling is unavailable.
- Delivery strategy: ask-on-risk. Forecast roughly 500–750 authored lines including styles and behavior tests, generated files excluded. The usual 400-line size is advisory, not a hard limit; keep styles/tests readable. No delivery slice or chain decision is needed before an unrequested commit; resolve it if a later commit/PR is requested.
- Work-unit commits: not authorized. Implementation is uncommitted; independent technical verification completed. Native review remains pending separately.

## Implementation evidence

- T2: Thin root outlet, persistent standalone shell and lazy Home/Projects/not-found pages. Typed portfolio content and the shared project card belong to Projects; no speculative ui/ layer was added. Route completion restores focus after rendering, including the real approach fragment across pages.
- T3: Supplied Tailwind theme tokens and visibly used exact gradient; static CSS orbital illustration, two quiet annotations, opaque glass fallback and reduced-motion hover handling. English copy presents learning intent and only this in-progress portfolio, without invented identity or public projects.
- Test-first: `npm --prefix web test -- --watch=false` first ran against the starter and failed the shell assertion (expected Main navigation, received undefined). An additional negative fragment-focus test failed with body still focused; adding the main fallback made all 7 tests pass across 2 files. Route tests exercise Home, Projects, unknown deep paths, titles, current navigation, shell persistence and focus.
- Production build passed after source refinements with a 236.97 kB initial bundle. Generated CSS contains processed Tailwind theme variables and grid utilities, not unresolved imports or directives. The decorative halo is masked to avoid a rectangular edge without changing content or background stops.
- `node web/.angular/aurora-smoke/verify-design.mjs` checks exact palette/gradient use and representative contrast over 303 interpolated gradient samples, opaque surfaces and 82% neutral glass compositing. Minimum ratios: body 14.25:1, muted 8.71:1, accent 9.03:1, status 11.24:1, focus 10.98:1, control border 4.78:1. Effective glass body 16.64–16.68:1; muted 10.17–10.20:1. Dark text on primary is 4.82:1; white would be 3.96:1 and is not used.
- Browser: fresh headless Edge profile and an owned Node HTTP server bound to 127.0.0.1. The first harness attempt timed out because its Windows root path retained a trailing separator; correcting the harness produced passing checks. Home at 1440/390/320 widths, Projects and 404 at 320 had no horizontal overflow; mobile navigation links remained visible with 44px targets. First Tab reached the skip link, activation focused main, routes updated titles/current navigation/focus, approach resolved across pages, 404 returned home, art was static and reduced-motion transitions were disabled. No page console, runtime or resource errors were observed. Only owned processes were closed.
- Browser artifacts: `web/.angular/aurora-smoke/desktop-home.png`, `mobile-home.png`, `narrow-home.png`, `narrow-projects.png`; generated harnesses/logs/profile stay under the same ignored directory. Screenshots are viewport captures, not full-page or a full accessibility audit. Screen-reader and cross-browser checks remain outside this slice.
- Scope: SHA256 values for package.json, package-lock.json and both user-owned reference documents matched their before-work hashes. The allowed-surface audit passed; there are no dependency changes, security remediation, SSR, commits or branches. Approximately 1,270 added authored lines including tests/docs exceed the 500–750-line forecast, primarily because readable responsive component styling, static art and route/accessibility coverage remain together in one coherent foundation. No minification or test removal was used to meet an advisory budget.
- Formatting: all 24 touched Prettier-supported source/document files passed repository-default checks after explicit formatting corrections. SVG favicon was excluded because Prettier has no bundled SVG parser. `git diff --check` passed. Final foreground reruns of tests, build, touched-file formatting and whitespace checks form the writer handoff; independent native review and any commit decisions remain parent-owned.

## Independent verification and final handoff

- The initial verifier launch could not execute because a usage limit was reached. After the user requested continuation, a fresh read-only verifier completed without source changes.
- Independently observed: 7 tests across 2 files, production build (236.97 kB initial bundle), default formatting of all 24 touched supported files, whitespace check, and unchanged package/lockfile diff all passed.
- Both ignored verification harnesses were inspected and rerun. Exact palette/gradient use, representative contrast, dependency/reference hashes, and allowed surfaces passed. A fresh owned headless Edge session repeated the 1440/390/320 responsive, navigation, focus and reduced-motion checks with no reported runtime/resource errors; owned processes were closed.
- Parent read desktop/mobile captures and repeated a functional test command before the interruption. Independent current GREEN is established; historical RED remains the writer's observed evidence.
- Native assessment returned high/unassessable because new files require explicit selection. Selectorless STATUS requested external.select_intended_untracked; the host does not expose that operation. No START, consent, native approval or substitute selection was fabricated.
- Functional implementation and verification are complete. Native review, screen-reader testing and cross-browser coverage remain pending; no full WCAG certification is claimed. No dependencies, reference documents, commits or push were changed.
