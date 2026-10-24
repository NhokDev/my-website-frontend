# English and Spanish with Transloco

## Objective

Provide runtime English/Spanish translations from `web/public/i18n/en.json` and
`web/public/i18n/es.json`, preserving the portfolio design and existing content meaning.
English remains the initial language. Add an accessible shared-header selector.

## Scope and constraints

- Configure Transloco and an HTTP JSON loader for the standalone Angular application.
- Translate all existing pages, shared project content, accessibility labels, document
  language, route titles, and document description. Preserve routes and technology names.
- No persistence, browser-language detection, redesign, SSR, or unrelated dependencies.
- Dependency installation for Transloco is part of this authorized integration.
- No branches, staging, commits, push, or PRs without explicit user permission.
- Route: delegated direct; preparation and multiple non-trivial source files require one writer.
- Test-first: observe deterministic failing localization tests before implementation, then
  GREEN and refactor. Runner: Angular Vitest through the npm test command below.

## Tasks

- [x] T1: Add Transloco, configure two languages and JSON loading, and add regression tests.
- [x] T2: Translate existing pages and shared content; add the accessible locale selector
      and reactive document metadata without altering layout or navigation.
- [x] T3: Verify tests, production build, catalog parity, and formatting; record evidence.
- [x] T4: Replace the dropdown with a glass ES/EN segmented button group; verify language
      switching, accessibility, decorative flags, and preserved navigation and metadata.

### T4 follow-up contract and progress

- Route: delegated-direct, including preparation, external template, and regression tests.
- Scope: replace only the header language control with a horizontal dark glass capsule,
  inset lighter selected pill, muted inactive text, ES/EN labels, and self-contained Spanish
  and UK SVG flags. EN means English. Preserve responsive header navigation and site design.
- Acceptance: native `type="button"` controls in a translated labeled group, full Español
  and English accessible names, `aria-pressed` selection, decorative hidden flags, visible
  keyboard focus, and at least 44px touch targets. No tab, switch, or radio semantics.
- Preserve Transloco, English default, no persistence, and the unsupported-language guard.
- Test-first: add deterministic button regressions and observe RED before source changes;
  then implement GREEN, triangulate both switches and route metadata, and refactor if needed.
- Progress: implemented and verified; browser visual inspection remains pending. Only the
  external header template, route regression tests, and this task record changed for T4.
- Normalize only touched supported files before final tests and production build. Repeat the
  exact touched-file formatting check after recording final evidence. No native review,
  branch, staging, commit, push, dependency changes, or extra documentation is authorized.
- RED: `npm --prefix web test -- --watch=false` observed three expected failures because
  the new group/buttons were absent; the other 11 tests passed before template changes.
- GREEN and triangulation: the same command passed all 14 tests in four files after touched
  files were normalized. Coverage includes native button semantics, full language names,
  hidden inline SVG flags, both language switches, pressed states, translated group labels,
  retained selection across routes, route focus/metadata, and the retained handler guard.
- `npm --prefix web run build` passed with no reported warnings; initial size 300.15 kB,
  estimated transfer 80.03 kB. No TypeScript, catalog, or dependency changes were needed.
- `node web/node_modules/prettier/bin/prettier.cjs --check odd/tasks/transloco-es-en.md web/src/app/layout/portfolio-layout.html web/src/app/app.routes.spec.ts`
  passed; repeated after this evidence update. No browser screenshot or visual proof is
  claimed. Parent retains native review and delivery ownership; no approval is claimed.

## Acceptance and verification

- English initial rendering remains equivalent to existing content.
- Switching to Spanish and back updates visible copy, accessible labels, document language,
  and route titles; navigation retains the selected language.
- Only `en` and `es` are offered. Catalog keys have parity and tests do not use real HTTP.
- `npm --prefix web test -- --watch=false`
- `npm --prefix web run build`
- `node web/node_modules/prettier/bin/prettier.cjs --check <touched supported files>`

## Delivery and progress

- Forecast: approximately 450–650 authored changed lines across configuration, catalogs,
  templates, tests, and this document; generated lockfile excluded.
- Strategy: ask-on-risk; no PR or commit is authorized, so delivery is local only.
- RDD: on (global); candidate assessment, native preflight, and independent review remain
  parent-owned. Parent assessment returned high/unassessable because new files require
  explicit selection. Preflight returned `intended_untracked_selection_required`; its
  schema-bound collection could not be completed with the available transport. No START,
  receipt, or native approval is claimed. Native review remains pending.
- Verification: all 13 tests, production build, catalog parity, and formatting passed.
- Commit evidence: not authorized; no branch, staging, commit, push, or PR was performed.
- Scope expansion: the user approved `web/src/app/home/orbital-art.ts` and
  `web/src/app/home/orbital-art.html` to translate their four visible annotations.
- Next step: parent assesses the local implementation and owns any review or delivery action.
  Parent repeated all 13 tests successfully. An independent read-only verifier reproduced
  the successful production build and found no concrete implementation defect. Browser
  visual inspection and native review remain pending; changes are local and uncommitted.

## Implementation outcome

- Added only `@jsverse/transloco` as a direct dependency, resolved to 8.4.0. Its HTTP loader
  reads `i18n/en.json` and `i18n/es.json` relative to the application base URL.
- English starts each session; the labeled native header selector offers English and
  Español. Its handler ignores unsupported values. No persistence or detection was added.
- Existing home, approach, orbital annotations, workbench, project cards, not-found page,
  shell, and accessibility labels use semantic catalog keys. Technology names, routes,
  fragments, decoration, and navigation focus behavior are preserved.
- One router title strategy combines the current route key with the latest loaded catalog.
  It updates title, document language, and description without translating before loading
  completes or allowing a late Spanish response to overwrite English metadata.
- Component and route tests use the shipped JSON catalogs through Transloco's testing module.
  HTTP tests use `HttpTestingController`; no tests issue real HTTP requests.
- Shared Prettier defaults were applied to all 27 touched supported files, including manifests
  and the generated lockfile, before the final functional tests and build.

## Observed verification evidence

- RED, initial integration: `npm --prefix web test -- --watch=false` failed the new selector
  test because the selector was absent; seven existing tests passed.
- GREEN, initial integration: the same command passed eight tests. Expanded loading-race,
  parity, and unsupported-language coverage subsequently passed all 12 tests.
- RED, orbital follow-up: the same command failed only the new orbital translation test:
  Spanish selection still rendered four English annotations. The other 12 tests passed.
- Final GREEN: `npm --prefix web test -- --watch=false` passed all 13 tests in four files
  after source formatting. Coverage includes English/Spanish/English switching, all route
  titles, metadata, accessibility, Spanish fragment navigation, catalog parity, project keys,
  delayed loading during navigation, late responses, and decorative orbital annotations.
- `npm --prefix web run build` passed after source formatting with no reported warnings;
  initial bundle size was 293.55 kB, estimated transfer 79.09 kB.
- The exact formatting check below passed for all touched files. It is repeated after this
  evidence update so the final document is included. No browser visual inspection was run;
  responsive appearance remains a parent review concern.

```powershell
node web/node_modules/prettier/bin/prettier.cjs --check odd/tasks/transloco-es-en.md web/package.json web/package-lock.json web/public/i18n/en.json web/public/i18n/es.json web/src/app/app.config.ts web/src/app/app.routes.ts web/src/app/app.spec.ts web/src/app/app.routes.spec.ts web/src/app/layout/portfolio-layout.ts web/src/app/layout/portfolio-layout.html web/src/app/home/home.ts web/src/app/home/home.html web/src/app/home/orbital-art.ts web/src/app/home/orbital-art.html web/src/app/projects/projects.ts web/src/app/projects/projects.html web/src/app/projects/project-card.ts web/src/app/projects/project-card.html web/src/app/projects/project-data.ts web/src/app/not-found/not-found.ts web/src/app/not-found/not-found.html web/src/app/i18n/transloco-loader.ts web/src/app/i18n/localized-title-strategy.ts web/src/app/i18n/testing.ts web/src/app/i18n/catalogs.spec.ts web/src/app/i18n/localization.spec.ts
```

## Dependency audit limitation

`npm --prefix web audit --json` reported two vulnerabilities: low severity in
`@angular/build` through its Vite dependency and high severity in Vite 8.3.0–8.3.2.
The advisories cover launch-editor command handling, custom-middleware cross-origin script
execution, and development-server filesystem exposure. The high-severity advisory is
GHSA-587h-7wmj-h5pm. These existing build-tool dependency versions were not upgraded.
No audit fixes, forced changes, or unrelated dependency updates were applied.

## Commit authorization

The user subsequently authorized committing the complete localization and glass-selector
work unit on the current branch. Earlier no-commit statements describe the implementation
stage. No new branch or push is authorized. Technical diff inspection found no unrelated
dependency upgrades or secret exposure; native review and browser visual inspection remain
pending. The resulting commit identity is recorded in the session memory after creation.

## Recovery locator

Repository document: `odd/tasks/transloco-es-en.md`.
Engram project: `my-website`; full literal mirror topic: `odd/transloco-es-en/tasks`.
