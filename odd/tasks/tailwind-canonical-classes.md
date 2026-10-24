# Tailwind canonical classes

## Objective and scope

Normalize redundant Tailwind class forms in Home, orbital artwork, portfolio layout and project-card HTML after explicit user approval. Preserve the current design at the default root font size, meaningful arbitrary artwork values, important modifiers, exact responsive boundaries, content, routes and accessibility. No dependencies, editor-warning suppression, global font-size overrides, SCSS, inline templates, commits or push.

## Evidence and constraints

- Prior read-only audit found 104 distinct candidate replacements across 115 static occurrences. These are canonicalizer proposals, not a count of live VS Code diagnostics; recalculate from actual source before editing.
- Use the installed Tailwind 4.3.3 project design system and canonicalization behavior rather than global regular-expression substitutions. Validate each replacement compiles and preserve modifiers/variants.
- Spacing utilities use --spacing (default 0.25rem). A fixed pixel value and its numeric utility coincide at a 16px root but can differ with enlarged text; this scaling must be checked, not hidden by changing global settings.
- Keep gradients, masks, clamp expressions and explicit breakpoint ranges where no safe canonical form exists. Do not disable IntelliSense diagnostics to manufacture success.
- Route: delegated direct because four non-trivial templates and visual verification are coordinated. No project skill registry exists. Delivery ask-on-risk; expected authored diff below 300 lines, ignored verification artifacts excluded. No commit or PR requested.

## Tasks

- [x] T1: Confirm authorization, installed version and previous audit findings.
- [x] T2: Normalize validated classes in the four templates; record applied and intentionally retained candidates.
- [x] T3: Verify canonicalization, tests, build, formatting, default-font appearance, responsive boundaries and enlarged-text behavior.

## Verification

- Test-first: capture current canonicalization proposals as RED; after changes repeat the same actual-source check, with explicit reasons for any intentional residuals.
- Required: npm --prefix web test -- --watch=false; npm --prefix web run build; repository-default Prettier check of touched files; git diff --check.
- Capture before/after desktop and mobile screenshots and layout evidence at the normal 16px root; reuse the existing fresh-profile, owned-localhost browser checks without weakening assertions.
- Check narrow layouts and 380/540/800px boundaries, plus enlarged root text at 20px and, where practical, 32px. Do not require unchanged pixels for intentionally rem-scaled dimensions; verify readable content, reachable controls, reflow and no new horizontal overflow.
- Protected dependency manifests, palette/gradient, component configuration, reference documents and unrelated pending work must remain unchanged. Generated evidence stays under web/.angular/** or web/dist/**; no installs or ambient browser/session reuse.
- Native review is parent-owned and cannot be claimed approved when new-file selection remains unavailable. Next step: one bounded writer, then independent verification.

## Implementation result

- The installed design system was loaded from the actual `web/src/styles.css`, including its Tailwind import. Angular's HTML parser inspected literal `class` and `routerLinkActive` attributes in all seven templates: 421 static occurrences and 299 unique candidates before cleanup, not the earlier transcribed 426/300. No dynamic candidates were invented.
- RED: `node web/.angular/aurora-smoke/canonical-check.mjs --baseline --check` failed on 104 distinct proposals / 115 occurrences. Both original and proposed candidates compiled. An initial harness assertion expected `.25rem`; the actual imported theme returned `0.25rem`, and that harness typo was corrected before capturing meaningful RED.
- Applied 102 distinct replacements / 113 occurrences, including `mt-6.5`, `max-w-165`, exact `rounded-3xl`, `border-11`, font-family syntax and equivalent transform/mask utilities. Important modifiers, inclusive media wrappers, compound selectors, gradients, shadows, perspective, clamp expressions and non-class content remain intact.
- Added exactly three reflow utilities: `flex-wrap` to navigation, `wrap-anywhere` to the project title, and a final explicitly authorized `wrap-anywhere` on the Home h1 to resolve its pre-existing enlarged-text word overflow. They have no visible effect at the measured 16px viewports. Both fixed orbital-size residuals remain unchanged.

### Intentional residuals

Both are at `web/src/app/home/orbital-art.html:8`: `size-[350px]` and `[@media(max-width:380px)]:size-[290px]`. Converting the orbital container to rem created new horizontal overflow at 20px narrow roots and at 32px desktop roots. Retaining its two fixed geometric sizes prevents that regression without clipping content or hiding overflow. Final canonical check: 2 explained proposals / 2 occurrences; no unexplained proposals. The three reflow utilities bring the final literal inventory to 424 occurrences / 300 unique candidates.

## Observed verification

- `node web/.angular/aurora-smoke/canonical-check.mjs --check`: GREEN with exactly the two documented residuals; exact token-aware source mapping plus the three exact reflow additions and repository formatting. SHA256 comparison preserves all 49 protected path states, including the missing legacy stylesheet state, full global CSS, manifests, lockfile, AGENTS, TypeScript/tests, other HTML, reference documents and unrelated pending work.
- `npm --prefix web test -- --watch=false`: 7 tests passed in 2 files.
- `npm --prefix web run build`: passed before the fresh baseline and after implementation.
- `node web/node_modules/prettier/bin/prettier.cjs --check web/src/app/home/home.html web/src/app/home/orbital-art.html web/src/app/layout/portfolio-layout.html web/src/app/projects/project-card.html odd/tasks/tailwind-canonical-classes.md`: passed after correcting formatting in Home, project-card and the task document. `git diff --check`: passed.
- `node web/.angular/aurora-smoke/migration-check.mjs --built`: passed; seven separately owned external HTML templates, zero Sass/component CSS, unchanged configuration and retained artwork output.
- `node web/.angular/aurora-smoke/verify-design.mjs`: passed; exact palette/gradient and protected reference/manifests unchanged, measured color-role checks unchanged. Only this exact task document was added to its existing allowlist; the pre-existing `app.scss` deletion exception remains intact.
- Fresh-profile, owned-loopback Edge checks passed for Home 1440/390/320, Projects 320 and 404 320; skip-link keyboard activation, route titles/current underline, route/fragment focus including missing-fragment fallback, static artwork, reduced motion and forced colors remain verified. Inclusive 380/540/800px boundaries and both adjacent widths pass. No page console/runtime/resource errors occurred.
- At 16px, all four screenshot pairs are byte-identical, and 384 element snapshots across five route/viewport cases have zero differences in measured geometry, text and computed styles. Every original/proposed utility also has equivalent computed properties in 416 candidate/viewport probes at 320/400/600/1000px.
- Enlarged-font comparison covers 18 cases: roots 20/32px, widths 320/390/1440, and Home/Projects/404. The final Home heading correction is verified against strict document `clientWidth`, not approximate viewport width, with readable heading text rectangles and reachable controls at both enlarged roots and both narrow widths. The original baseline was not clean: its Home document overflowed to 350px at 32px/320. That pre-existing Home issue is now resolved. Unchanged Projects headline text exceeding its box at 32px/320 is outside the final Home-only correction and is not a clean accessibility pass.
- The initial full conversion exposed new enlarged-font overflow (Home document widths 351/433px at 20px narrow; 563/706px at 32px narrow; 1602px at 32px desktop), wider navigation overflow and new project-title text overflow. One bounded correction retained the two art sizes and added the two reflow utilities; the final before/after comparison passes without weakening assertions.
- Final Home-only RED: the strengthened browser assertion failed at root 32px/width 320 with document/body 322px against actual clientWidth 305px, before adding Home h1 wrapping. GREEN after the single authorized correction: all four enlarged Home cases below pass strict document/body bounds, heading content-box and text-rectangle bounds, and control reachability. Original before evidence is preserved; all prior comparison assertions remain intact. Tests, build, canonicalization, browser comparison, structural/design checks and formatting were rerun after the final source change.

- Home root 20px / viewport 320px: actual clientWidth 305px; document/body scrollWidth 305px; heading text-bound failures 0; unreachable controls 0.
- Home root 20px / viewport 390px: actual clientWidth 375px; document/body scrollWidth 375px; heading text-bound failures 0; unreachable controls 0.
- Home root 32px / viewport 320px: actual clientWidth 305px; document/body scrollWidth 305px; heading text-bound failures 0; unreachable controls 0.
- Home root 32px / viewport 390px: actual clientWidth 375px; document/body scrollWidth 375px; heading text-bound failures 0; unreachable controls 0.

The original 32px/320 Home baseline had 350px document width, one text-bound failure and two unreachable navigation controls. Final values are 305px, zero and zero. At 32px/390 its original document width was 385px with one unreachable control; final values are 375px and zero. All 16px comparisons still have four byte-identical PNG pairs and 384 matching element snapshots. The desktop enlarged Home cases have client/document/body widths of 1425px and no heading or control failures.

### Reproduction and artifacts

- Canonicalization/protected-source records: `web/.angular/aurora-smoke/canonical-{red,green,protected,sources}.json`; ignored verification-only APIs never enter application code.
- Browser commands: `node web/.angular/aurora-smoke/browser-smoke.mjs canonical-before`, then `node web/.angular/aurora-smoke/browser-smoke.mjs canonical-after`; compare with `node web/.angular/aurora-smoke/compare-migration.mjs canonical`. Build the respective source first. Do not rerun `--baseline` on already normalized source or overwrite the preserved before evidence.
- Screenshots under `web/.angular/aurora-smoke/canonical-before/` and `canonical-after/`: `desktop-home.png`, `mobile-home.png`, `narrow-home.png`, `narrow-projects.png`, `enlarged-20-home-320.png`, `enlarged-32-home-320.png`. Geometry, enlarged-text records and candidate-property probes are beside them. Prior migration evidence is untouched; only owned browsers and servers are closed.

## Independent final verification

- A fresh read-only verifier reran all seven tests, production build, canonicalization, component-convention checks, design/protected-state assertions, default formatting and whitespace checks successfully. The 102 distinct replacements / 113 occurrences, three exact reflow additions and two intentional orbital-size residuals were confirmed from the actual source.
- Fresh Edge checks repeated all 416 candidate/viewport probes, four byte-identical before/after PNG pairs and 384 matching element snapshots. All 18 enlarged-font comparisons showed no new regressions; Home at roots 20px and 32px and widths 320px/390px had equal client/document/body widths, zero heading-bound failures and reachable controls.
- The existing Projects page headline issue remains a separate follow-up: at root 32px / viewport 320px, its heading scrollWidth is 281px versus clientWidth 273px. It is unchanged from the preserved baseline; document/body width stays within the viewport and controls remain reachable. This is not a complete enlarged-text accessibility pass.
- Parent spot-checks passed default formatting and whitespace checks. Native assessment remains high/unassessable pending explicit new-file selection; no native approval is claimed. No editor warnings were disabled, no dependency or unrelated source was changed, and no commit or push was performed.

## Handoff and rollback boundary

Rollback is limited to the four template snapshots in `canonical-sources.json` and this task document; preserve all earlier Aurora work. No dependencies, application CSS, TypeScript, component APIs, content, routes, links, accessibility roles or user reference files were changed. No Git mutations were run. Native assessment and any future commit decision remain parent-owned; no approval is claimed. The pre-existing Home heading overflow is resolved by the bounded, explicitly authorized correction; remaining Projects headline reflow at 32px/320 is outside that Home-only correction.
