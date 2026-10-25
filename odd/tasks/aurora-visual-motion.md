# Aurora visual motion and reference fidelity

## Objective

Restore the reference demo's missing ambient drift, orbital float, gradient heading,
hover feedback, glass highlights, and depth. The authorized V4 follow-up replaces the
page-wide purple gradient with the demo's navy canvas and localized lights while retaining
the component palette, content, routes, and English/Spanish localization.

## Authorized scope

- Implement on the active `develop` branch. No branch creation, commit, or push authorized.
- V4 supersedes the original page-gradient constraint only: use a semantic page-background
  token for `#090d20`, an outer body background of `#070a14`, and localized purple/blue/turquoise
  lights from the reference. Preserve primary/secondary/tertiary/neutral and UI surface tokens,
  heading gradient, glass, and component colors. Do not import fictional projects, contact links,
  Style Lab controls, or project dialogs.
- Use Tailwind utilities, shared animation tokens/keyframes, and external templates.
- No dependencies, pointer tracking, Three.js, or layout-wide redesign.
- Respect reduced-motion preferences; provide an accessible way to pause ongoing motion.
  Any new control text must have English and Spanish literals in the shipped catalogs.
- Keep glow layers decorative, non-interactive, clipped, and behind readable content.
- Preserve mobile layout and keyboard focus; hover motion must not affect touch interaction.

## Tasks and route

- [x] V1: Add ambient layers and orbital animation with reduced-motion and pause support.
- [x] V2: Refine heading gradient, glass highlights, and card/button hover depth.
- [x] V3: Verify behavior, build, formatting, and responsive/motion rendering where available.
- [x] V4: Replace the global purple gradient with the authorized navy canvas and bounded lights;
      verify computed backgrounds, localized glow bounds/colors, preserved motion, and responsive views.

Route: delegated direct for all tasks; multi-file implementation and preparation belong to
one bounded writer. Forecast: 250–400 authored changed lines excluding generated outputs.
Delivery: local only, ask-on-risk; no delivery commits or PRs are authorized.

## Acceptance and checks

- The page computes to `#090d20` without a page-wide gradient; the outer body uses `#070a14`.
  Localized ambient light leaves most of the canvas navy without changing component tokens.
- Ambient drift and orbital float use CSS transforms, not per-frame JavaScript.
- All automatic motion stops for reduced-motion users and when explicitly paused.
- Automatic motion never transforms text, navigation, or focus targets; all content stays readable.
- English/Spanish catalog parity remains intact; existing routing and localization pass.
- Prefer deterministic RED/GREEN for pause state and translated control behavior.
  CSS motion/fidelity requires browser/computed-style evidence, not invented unit proof.
- `npm --prefix web test -- --watch=false`
- `npm --prefix web run build`
- `node web/node_modules/prettier/bin/prettier.cjs --check <touched supported files>`
- If a local browser harness is available, inspect desktop and narrow mobile, reduced motion,
  pause behavior, overflow, and runtime errors without installing packages or contacting sites.

## Progress and evidence

- Initial state: clean `develop` at `7d7956a`; prior 14 tests and production build passed.
- V1: Three clipped radial glows drift for 17 seconds; a separate orbital wrapper floats for
  7 seconds without replacing the ring transforms or moving the annotation labels. All four
  automatic layers animate transforms only, with no blur animation, JavaScript loop, or will-change.
- The footer's native translated pause toggle keeps its label stable and exposes `aria-pressed`.
  Layout-owned signal state survives route/language changes; CSS pauses every motion layer.
  Reduced motion removes animations regardless of toggle state. No preference persistence added.
- V2: Heading accent uses existing readable accent/focus/success tokens with solid fallbacks for
  unsupported text clipping, increased contrast, and forced colors. Glass keeps its opaque fallback
  and gains clearer highlights/depth. Fine-pointer hover lifts hero buttons 2px and the card 4px;
  reduced motion and touch do not lift them. Selected palette/gradient values remain unchanged.
- The text/focus-target motion restriction applies to automatic movement;
  hover feedback is explicitly authorized and verified separately. Existing content, routes,
  language flags, and static-foundation task history are preserved.

### Deterministic verification

- RED: `npm --prefix web test -- --watch=false` observed the two new pause-control tests fail
  because `footer button` was absent; the existing 14 tests passed.
- GREEN/final: `npm --prefix web test -- --watch=false` passed all 16 tests across four files.
  Coverage includes stable native toggle semantics, resume, both control translations, pause across
  home/projects/not-found navigation, decorative accessibility, and existing catalog parity.
- `npm --prefix web run build` passed; final initial bundle 308.96 kB (estimated transfer 81.61 kB).
- Prettier initially identified one new wrapped assertion; corrected before final tests/build.
  The explicit touched-file check passed. No source-mutating formatting followed final verification.
- `git diff --check` passed. No dependencies, installation, branch, stage, commit, or push performed.

### Local browser evidence

- `node web/.angular/aurora-motion-check/smoke.mjs`: passed 16 bounded checks using installed
  headless Edge against the production build on localhost. Owned browser/server were closed.
  External page requests were intercepted; none occurred. No runtime/console/resource errors.
- Both languages fit at 1440x1000, 390x844, and 320x844 with no horizontal overflow; the Spanish
  projects route also fit at 320px. Touch emulation suppressed card/button hover lift.
- Computed styles verified four active transform-only layers, changing transforms, stationary
  annotations, intact ring transforms, gradient clipping, glass blur/highlights, desktop hover
  lift/transitions, and frozen animation timelines after native Space-key pause activation.
- Pause survived language switching and projects/home navigation. Reduced motion removed all
  four animations and both hover lifts/transitions even after the pause toggle was released.
  Forced colors/increased contrast restored solid heading text; forced colors hid decoration.
- Results: `web/.angular/aurora-motion-check/run-1792883057804/results.json`.
  Nine screenshots in that directory: `home-{en,es}-{1440,390,320}.png`, `desktop-paused.png`,
  `desktop-reduced-motion.png`, and `desktop-forced-colors.png`.
  Writer inspected desktop English and 320px Spanish screenshots; glows, gradient, glass, and
  orbital depth were visible without clipping meaningful content.
- Limits: jsdom does not establish CSS fidelity; headless Edge checks are not a cross-browser
  performance audit or a guarantee of visual perfection. The opaque glass fallback was preserved
  structurally, not tested in an engine without backdrop-filter support.

### Handoff and rollback boundary

- Parent repeated all 16 unit tests successfully and inspected desktop/mobile screenshots.
- Independent verification repeated all 16 Edge checks successfully; evidence is in
  `web/.angular/aurora-motion-check/run-1792883329951/`. No concrete functional defect found.
- Native assessment with the explicit task-document inventory returned medium risk, 10 paths,
  293 changed lines, and `review_due: false` (`under_budget`). Preflight previously requested
  unavailable intended-untracked collection; no START, approval, or receipt is claimed.
  No delivery commit exists or is implied by the completed implementation checkboxes.
- Revert boundary is this task's nine source/catalog/test diffs plus this task document; no unrelated
  source or foundation history changed. Ignored browser evidence is confined to the authorized
  `web/.angular/aurora-motion-check/` directory; pre-existing harnesses were not overwritten.
- Existing low `@angular/build` and high nested Vite audit findings remain outside this task.
- Next step: user inspects the visual result; no commit/push is authorized.

### V4 authorized background correction

- User approved the background-only correction after comparing the reference's navy base and
  localized lights with the prior implementation's page-wide purple gradient. V1–V3 evidence above
  is historical and remains valid for that implementation; it does not claim V4 verification.
- Follow-up edit boundary: this document, `web/src/styles.css`,
  `web/src/app/layout/portfolio-layout.html`, and the existing ignored smoke harness plus new
  `web/.angular/aurora-motion-check/run-*/*` evidence. Preserve all other uncommitted work.
- Replaced the obsolete page-gradient token with `--page-background: #090d20` and
  `--page-backdrop: #070a14`. Reused three bounded, clipped, transform-only glows with the reference's
  purple, blue, and turquoise hues, softer alpha stops, and off-canvas placement. A fourth lower glow
  was unnecessary: keeping the lower canvas navy avoids adding saturation or another animation.
  Component/neutral/surface tokens, glass, hero text gradient, art, content, and catalogs are unchanged.
- RED: `node web/.angular/aurora-motion-check/smoke.mjs` failed against the previous production build:
  computed page background was `rgba(0, 0, 0, 0)`, expected `rgb(9, 13, 32)`, beneath the old gradient.
  Evidence: `web/.angular/aurora-motion-check/run-1792885253337/results.json`.
- GREEN: `npm --prefix web test -- --watch=false` passed all 16 tests in four files.
  `npm --prefix web run build` passed (309.13 kB initial, 81.67 kB estimated transfer).
  Explicit Prettier normalization/check covered this document, the CSS, and the shell template;
  the ignored `.angular` harness is excluded by repository formatting defaults.
- `node web/.angular/aurora-motion-check/smoke.mjs` passed 17 checks. Exact navy page/backdrop colors,
  absent global background images, three bounded radial reference-color glows, clipping, and unchanged
  primary-button color were checked at 1440px, 390px, and 320px in both languages. All previous motion,
  pause, route, hover/touch, reduced-motion, heading fallback, overflow, and runtime checks still pass.
  No external page requests occurred; the owned browser and local server were closed.
- GREEN results: `web/.angular/aurora-motion-check/run-1792885288815/results.json`.
  Nine screenshots: `home-{en,es}-{1440,390,320}.png`, `desktop-paused.png`,
  `desktop-reduced-motion.png`, and `desktop-forced-colors.png` in that same directory.
  Writer inspected `home-en-1440.png` and `home-es-320.png`: mostly navy canvas, localized upper purple,
  left blue, and right turquoise light, no page-wide purple or uniform cyan wash, readable content.
- Limits remain headless Edge only, not cross-browser/performance proof. Existing audit findings are
  untouched. No native review, branch, stage, commit, push, dependency, or remote operation performed;
  parent retains review disposition. V4 rollback is limited to the background tokens/template changes,
  new harness assertions, and this follow-up record, preserving V1–V3 and earlier evidence.

## Authorized commit and final checks

- The user subsequently authorized committing this complete visual work unit on `develop`;
  earlier no-commit statements describe the implementation stage. No push is authorized.
- Pre-commit inspection found the card illustration still consumes `--gradient-aurora`.
  Restored its original token for component use only; the shell retains the navy page token.
- After that correction, independent foreground checks passed: CSS formatting, all 16 unit
  tests, production build, and all 17 Edge smoke checks. Latest browser evidence:
  `web/.angular/aurora-motion-check/run-1792889870116/results.json`.
- The resulting commit identity is recorded in session memory after creation. No native
  approval or receipt is implied; cross-browser and performance limits remain unchanged.

## Recovery

Repository document: `odd/tasks/aurora-visual-motion.md`.
Engram mirror: project `my-website`, topic `odd/aurora-visual-motion/tasks`.
