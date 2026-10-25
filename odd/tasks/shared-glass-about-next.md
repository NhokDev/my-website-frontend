# Shared glass surfaces and restored home sections

## Objective

Use the demo's transparent glass treatment consistently across the header and card-like
surfaces. Replace the current approach section with `02 / About` and `03 / Next chapter`,
retaining truthful portfolio content and complete English/Spanish localization. Current intent:
match the demo's exact visual recipes and neutral public portfolio direction. Learning is
private development context, never public positioning or an experience disclaimer.

## Authorized scope

- Work on `develop`; no branches, commits, push, dependency changes, or remote operations.
- Apply shared translucent white glass, subtle white border, 20px backdrop blur, and highlights
  using the demo as reference. Keep an opaque fallback and accessible text/focus contrast.
- Cover existing header, project cards, and orbital annotations plus new About/closing cards.
- Match the demo foreground, gradient, CTA and card palette; preserve existing
  motion/pause/reduced-motion behavior and locales. This supersedes preserving the old palette.
- Replace `#approach` navigation with `#about`; provide a real `#next-chapter` closing target.
- Recover the demo's About two-panel and closing call-to-action composition, not fictional
  professional experience, placeholder email, invented contact details, or sample identity.
- Use actual Angular/TypeScript/Tailwind project context and neutral public copy, without
  learning/practice positioning or disclaimers of professional experience.
  The closing CTA links to the existing `/projects` route; no contact destination is available.
- All new or changed visible/accessibility copy belongs in both Transloco JSON catalogs.
- External HTML templates and Tailwind utilities; no SCSS or new libraries.
- Future only: dedicated About page (photo, studies, experience, courses), personal home
  summary and Start conversation contact-form modal. Request personal facts before that step;
  no invented credentials, dead Read more route, or falsely labelled contact action now.

## Tasks and route

- [x] G1: Apply and verify shared demo-like glass across existing card-like surfaces.
- [x] G2: Restore About/Next chapter structure, bilingual copy, and all navigation targets.
- [x] G3: Verify tests, build, formatting, responsive glass, focus, and motion regressions.
- [x] G4: Apply exact demo visual recipes: geometry, gradients, typography, CTA, glass,
      reflections, eyebrow/tags and closing halo. Reopens G1's demo-parity assertion because
      screenshot feedback identifies heading colors and card shading still different.
- [x] G5: Replace public learning/practice positioning in both catalogs with neutral truthful
      copy and structured translated heading parts. G2's structure remains valid; its public
      learning-copy decision is superseded by the user's current direction.
- [x] G6: Verify demo/application computed styles and screenshots at equal viewports with
      motion paused, both locales, 1440/1024/390/320px. G3's prior results remain historical,
      not evidence for this revision; repeat functional, motion and accessibility checks.

Route: delegated direct; one writer owns multi-file implementation and preparation.
Forecast: 300–500 authored changed lines. Strategy: ask-on-risk, local-only delivery.
Current continuation forecast: an additional approximately 250–450 lines, advisory only.
The size estimate is advisory, not a reason to compress readable code or omit tests.

## Acceptance and checks

- Supported browsers compute the shared glass surface as white at 7.5% opacity, white border
  at 18%, and 20px blur; preserve a meaningful opaque fallback without backdrop-filter.
- No element-wide opacity that dims text, and no unreadable low-contrast panel content.
- Both restored sections have translated headings, useful truthful content, and stable IDs.
- Header, hero, projects-page, and footer links resolve to actual sections with preserved focus.
- No stale approach copy/anchors or demo placeholder claims remain in active application code.
- Deterministic test-first for changed section structure, navigation, and bilingual rendering.
  Browser/computed styles establish glass and responsive behavior rather than jsdom alone.
- `npm --prefix web test -- --watch=false`
- `npm --prefix web run build`
- `node web/node_modules/prettier/bin/prettier.cjs --check <touched supported files>`
- Existing local Edge harness: both locales at desktop and 390/320px, pause/reduced motion,
  glass styles, anchors/focus, no horizontal overflow, and no runtime/resource errors.

## Progress

- Current continuation authorized on the existing dirty `develop` work: preserve G1–G3 and
  their history below. Delegated direct preparation remains multi-file and local only; no
  commit/push, dependency changes, future page or modal. Parent owns independent RDD review.
- Intentional demo differences: Aurora identity, truthful single project and actual tooling,
  bilingual navigation/language/motion controls, no Style Lab toolbar. Closing button keeps
  an honest projects label and route until the future contact-modal step.
- Pending personal content: photo, studies, employment/experience, courses and personal
  introduction; these are not prerequisites for neutral visual implementation.
- G4–G6 implementation: demo foreground/muted colors, exact three-stop 95-degree text
  gradient, pale primary CTA/reflection, section and display typography, 1140px border-box
  container with 28/18px padding, 18px About gap, 1.1/.9 columns, 22px panels and closing
  padding/radius/halo. Restored reference orbital colors and static purple background glow;
  the three existing bounded moving glows and transform-only pause contract remain intact.
- Public EN/ES catalogs now use neutral portfolio copy, actual project-derived facts and
  translated heading parts with explicit HTML line breaks, never translated HTML injection.
  Actual project status and Angular/TypeScript/Tailwind list remain unchanged. The closing
  CTA says Explore my work / Explorar mis proyectos and really opens `/projects`.
- Unit RED: nine expected failures (ten pass) for revised public copy, metadata, structured
  headings and catalog parts. GREEN: all 19 tests pass, preserving the prior 18 behaviors and
  adding a catalog-wide guard against private learning copy and invented demo credentials.
- Browser RED: `run-1792892128724/results.json` records 152 recipe differences against the
  old build, including old gradient stops, purple CTA, container and missing heading/halo parts.
  Later browser runs caught CSS media-query ordering: 49px versus 45px mobile title, and a
  two-column mobile hero despite no document overflow. The new composition assertion fails
  against that build in `run-1792892518320/results.json`. Non-overlapping 900/690/420px rules
  fix stacking; DOM bounds now verify full-width mobile copy, artwork below and labels in view.
- Final functional verification after source normalization: 19 tests, production build and
  both explicit Prettier checks pass. Edge smoke passes 61 named checks plus hero-composition
  assertions: both locales at 1440/1024/390/320px, keyboard focus/anchors, real projects CTA,
  pause/resume, transform-only animations, hover/touch, reduced motion, forced colors,
  increased contrast, reduced transparency and no runtime/resource errors or external requests.
- Final equal-viewport parity: 152 computed recipe groups match the actual read-only demo
  rendered at the same 1440/1024/390/320px viewports. Both pages have animations paused at
  time zero; the demo Style Lab bar is hidden only in browser memory. Measurements include
  colors, gradient stops, CTA fill/text/shadow, container padding/width, About columns/gap,
  headings, panel radii/padding/glass/reflections, project tags/art and closing pseudo halo.
- Final evidence: `web/.angular/aurora-motion-check/run-1792892583128/results.json` (smoke)
  and `web/.angular/aurora-motion-check/run-1792892604226/results.json` (parity). Actually
  inspected all eight `parity-{en,es}-{1440,1024,390,320}.png` images in the latter directory,
  against all four `demo-{1440,1024,390,320}.png` images inspected in `run-1792892434370`.
- Representative composited-background contrast: 48 muted-text samples pass 4.5:1; observed
  minimum 4.730:1. This is not every foreground, animation frame or a full accessibility audit.
  No WebKit/unsupported-backdrop browser is available; opaque fallback remains structural.
- Exact recipe parity is not pixel identity: truthful single-project horizontal desktop card,
  neutral copy lengths, Spanish wrapping, Aurora brand, persistent locale/motion controls,
  bounded existing aurora motion and static fourth glow intentionally differ from the demo.
  About/contact height and vertical position consequently differ; no fictitious projects,
  professional credentials or contact action were copied. Owned server/Edge sessions closed.
- G4–G6 are complete locally. No commits/push or native review performed; the independent
  review/disposition and eventual delivery remain parent-owned. Future About/personal summary
  and contact-modal roadmap remains deferred pending user-provided personal facts.

- Initial state: clean `develop` at `02e5998`; prior 16 tests/build and 17 browser checks pass.
- Native review globally enabled; latest prior candidate was medium and under budget.
  No receipt or approval is implied by that assessment.
- Implemented the shared `.glass` treatment on the header, project card and illustration window,
  orbital annotations, two new About panels, and closing callout. Controls retain their contrast.
  Existing navy/palette/illustration gradient and all motion behavior are unchanged.
- Replaced the old section/list and catalog keys with numbered About and Next chapter content.
  Both focusable sections use `aria-labelledby`; header/hero/projects links target About and
  the footer targets Next chapter. The closing CTA opens `/projects`, not an invented address.
- Content describes this learning portfolio and its actual Angular/TypeScript/Tailwind/Transloco
  tooling, without fabricated experience or sample identity.
- RED: the authorized Vitest command observed five expected failures for missing About/closing
  sections, navigation/focus, and catalog keys; 13 existing tests still passed.
- Browser RED against the prior build observed the old dark `rgba(18, 13, 29, 0.76)` surface
  instead of white at 7.5%. A later display-heading assertion exposed unlayered `h2` styles
  overriding Tailwind sizing (36px rather than 59.2px desktop); explicit utility priority fixes it.
- GREEN: 18 tests pass across four files; production build passes. Touched supported files
  were normalized and formatting checked. The ignored harness was also explicitly normalized
  with `--ignore-path .prettierignore`, because default Prettier discovery skips ignored files.
- Edge/CDP: 49 checks pass. All eight home / three projects glass surfaces compute white
  7.5%, white border 18%, blur 20px, inset reflection and full element opacity. Both languages
  pass at desktop 1440x1000 and touch 390/320x844 with no horizontal overflow, stacked mobile
  panels, real Enter-key navigation, visible focus rings, closing CTA and return from projects.
- Pixel-based contrast checks sample six representative muted-text regions per locale/viewport
  with text temporarily hidden through inline priority, preserving composited panel backgrounds.
  The inspected run measures minima from 6.28:1 to 8.93:1; this is representative sampling,
  not an exhaustive audit of every animation frame or foreground.
- Pause/resume, transform-only motion, reduced motion, desktop hover/touch behavior, forced
  colors, increased contrast and reduced transparency pass. No page runtime/console/resource
  errors or external requests were observed. Harness corrections preserve inline colors and
  reset the route between repeated same-fragment scenarios; application routing is unchanged.
- Evidence: `web/.angular/aurora-motion-check/run-1792890824275/results.json` and sibling
  `home-{en,es}-{1440,390,320}.png`, plus paused/reduced-motion/forced-colors/transparency images.
  Actually inspected English desktop and Spanish 320px screenshots from this run, and Spanish
  390px from the earlier passing `run-1792890737596`. Aurora transmission is visible through
  the header and project card; all restored sections and CTA fit without clipped text.
- Unsupported-backdrop fallback is structurally verified: opaque `--surface-solid` precedes
  the standard/prefixed support query. Edge also verifies that reduced transparency restores
  the opaque surface and disables filtering. No browser without backdrop-filter or WebKit
  runtime was available; prefixed support remains a structural check.
- No branches, commits, dependency changes, remote operations or native reviews were performed.
  Prior task documents remain unchanged. Parent owns independent RDD assessment and delivery.
- Parent repeated all 18 unit tests and whitespace checks successfully and inspected desktop
  and Spanish mobile screenshots. Independent verification reran all 49 browser checks;
  evidence: `web/.angular/aurora-motion-check/run-1792891105193/results.json`.
  No concrete candidate-caused defect was found; sampled contrast was 6.265:1 to 8.929:1.
- Native assessment with explicit inventory returned medium risk, 10 paths, 424 changed lines,
  and review due (`slice_budget_reached`). Preflight requests intended-untracked selection
  through an unavailable transport. Native review remains pending; no START or receipt exists.
- Next step: user inspects the visual result; no commit/push is authorized.

## Current parent verification and next steps

- Parent repeated all 19 unit tests and whitespace checks successfully and inspected desktop
  English and 320px Spanish screenshots after the reference-alignment changes.
- Independent verification reran the actual demo/app comparison: all 152 computed recipe
  groups matched at equal viewports. Fresh evidence:
  `web/.angular/aurora-motion-check/run-1792892902780/results.json`.
- Native assessment of the cumulative local change returned medium risk, 12 paths and
  847 changed lines, with review due. The returned preflight still requires unavailable
  intended-untracked selection transport; native review remains pending, without a receipt.
- Public learning/practice positioning is removed in both languages. Personal facts for the
  future About page and home summary are still required from the user; no claims were invented.
- Next step: visual inspection, followed by planning personal About content and the contact
  modal as separate steps. The current honest CTA remains `/projects`. No commit/push authorized.

## Commit and publication authorization

- The user subsequently authorized committing and pushing these adjustments on `develop`.
  This supersedes earlier no-commit/no-push statements, which describe prior implementation
  stages. No changes to `main`, force push, pull request, or merge are authorized.
- Final read-only scope inspection found the expected 12 paths, no apparent secrets, no
  dependency/tooling changes, and no generated browser files staged. Functional evidence
  remains 19 passing tests, production build, formatting, 61 smoke checks, and independently
  repeated 152 reference/app recipe comparisons.
- Commit identity and confirmed remote publication are recorded in session memory after
  execution. Native review remains separately pending; no approval or receipt is claimed.

## Recovery

Repository document: `odd/tasks/shared-glass-about-next.md`.
Engram mirror: project `my-website`, topic `odd/shared-glass-about-next/tasks`.
