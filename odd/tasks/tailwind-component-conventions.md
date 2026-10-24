# Tailwind component conventions

## Objective

Adapt the existing Aurora application to the newly authorized AGENTS.md rules: use Tailwind utilities
instead of SCSS, and give every Angular component an external HTML template. Preserve the current
visual design, exact palette/gradient, route behavior, content and accessibility. No dependency
upgrades, installs, commits, staging, branches, push or security remediation.

## Scope and route

- Delegated direct: coordinated migration across five SCSS files, three inline templates and Angular
  generator defaults.
- The bounded worker cannot perform deletions. It owns the non-deleting migration; the parent will
  remove the five obsolete SCSS files only after their styling is translated, then run the final
  zero-SCSS check. No files changed during the blocked first attempt.
- Remove app.scss, home/home.scss, home/orbital-art.scss, layout/portfolio-layout.scss and
  projects/project-card.scss after translating their styling to Tailwind utilities, not replacement
  component CSS files.
- Extract orbital-art.html, projects.html and not-found.html next to their components; all seven
  components must use templateUrl and own an existing HTML file.
- Keep shared theme tokens and genuine shared Tailwind utilities in web/src/styles.css; do not move
  complete old component stylesheets there as a substitute for migration.
- Set component generation defaults to external templates and no stylesheet after validating supported
  options in the installed CLI; remove obsolete SCSS build-language configuration.
- Update the current README styling description. Preserve AGENTS.md rules, user-owned reference
  documents, prior ODD history and unrelated pending changes.
- No project skill registry exists. Delivery ask-on-risk; approximately 600–900 authored changed lines
  may include stylesheet deletions/template extraction. The 400-line heuristic is advisory, not a cap;
  no delivery operation is requested.

## Tasks

- [x] T1: Map SCSS, inline templates and current generator configuration.
- [x] T2: Migrate existing component styles and templates, preserving appearance and behavior.
    - [x] Worker: translate all component styles into external-template/host Tailwind utilities,
          extract three templates, remove stylesheet metadata, and update generator defaults/README.
    - [x] Parent: removed exactly the five obsolete, unreferenced SCSS files listed below.
- [x] T3: Verify convention compliance, generator defaults, formatting, tests, build and responsive/keyboard behavior.
    - [x] Worker: observe convention RED, stage GREEN, passing tests/build, dry run, protected hashes,
          browser behavior, byte-identical screenshots, computed geometry, formatting and diff checks.
    - [x] Parent: strict zero-SCSS and independent final verification passed after deletion. Native
          assessment remains unassessable pending new-file selection; no native approval is claimed.

## Verification

- Test-first: observe a failing convention check on the current application, then repeat after
  adaptation. Use AST-based component metadata checks where practical; do not treat a compile/import
  failure as behavioral RED.
- Required: npm --prefix web test -- --watch=false; npm --prefix web run build; default Prettier check
  on touched supported files; git diff --check.
- Confirm zero project-owned .scss files or SCSS configuration references in web/src and
  web/angular.json, and seven valid external component HTML templates. Dependency internals and
  historical documentation are not migration targets.
- Validate a component-generation dry run creates HTML and no stylesheet, without writing generated
  source files.
- Compare protected package/lock/reference hashes. Reuse owned localhost/headless-browser checks and
  before/after desktop/mobile evidence when available; adapt implementation-specific ignored harness
  paths without weakening visual or accessibility assertions.
- Generated verification artifacts remain under web/.angular/** or web/dist/**; clean up only owned
  processes. No new packages or credentials/session reuse.
- Native review applicability is parent-owned; never fabricate approval.

## Final completion — 2026-10-23

- Parent removed exactly the five unreferenced legacy SCSS files after the Tailwind migration.
  Strict AST checks now pass for seven unique existing external HTML templates, no inline template or
  stylesheet metadata, no replacement component CSS, zero project-owned Sass files and valid defaults.
- Independent final tests passed 7/7 across two files; production build passed at 247.59 kB initial
  raw output. The generator dry run emitted only proposed TypeScript and HTML entries and wrote no
  source files. Formatting, whitespace and protected dependency/reference hashes passed.
- A fresh final browser run preserved four byte-identical before/final PNG pairs and all 384 element
  snapshots. Route, focus, responsive boundary, reduced-motion and forced-colors checks passed with
  zero reported page errors. Evidence remains limited to the named Edge scenarios.
- The independent verifier found one stale auxiliary allowlist: the ignored design checker rejected
  the authorized deletion of tracked app.scss. Parent added an exception for that exact unstaged
  deletion only, without broadening other allowed paths or removing assertions. Both the full design
  checker and strict migration checker then passed.
- Native assessment returned high/unassessable because new files require explicit selection; native
  review is pending, not approved. No dependencies, user references, Git staging, commits or push were
  changed. The following worker evidence is historical context from before parent deletion.

## Non-deleting worker evidence — 2026-10-23

The migration is **partial only because the parent-owned deletions and final verification remain**.
All seven components now own an existing external HTML template; none declares inline HTML, inline
styles or stylesheet metadata. Existing functional tests were preserved without artificial new tests.
The shared styles.css was not edited: palette, gradient, focus, glass fallback and forced-colors rules
remain intact. No replacement component CSS files or global component-selector dump were introduced.

### Convention RED and stage GREEN

The installed TypeScript AST checker enumerates every source component, validates unique existing
templateUrl ownership and checks generator preferences. Before source changes, strict mode observed
20 expected convention violations, not an import or compile failure. After migration, stage mode
passes, including compiled artwork utilities and byte-identical legacy stylesheet hashes. Strict mode
now fails exactly one assertion: the following five Sass files still exist. It must remain strict.

Parent deletion set, all under `web/src/app/` and all still byte-for-byte unchanged:

1. `app.scss` (already empty)
2. `home/home.scss`
3. `home/orbital-art.scss`
4. `layout/portfolio-layout.scss`
5. `projects/project-card.scss`

### Commands and observed results

Run from the repository root. Helpers are ignored verification artifacts, not permanent quality tools.

```powershell
node web/.angular/aurora-smoke/migration-check.mjs --baseline
node web/.angular/aurora-smoke/migration-check.mjs
npm --prefix web run build
node web/.angular/aurora-smoke/browser-smoke.mjs migration-before
npm --prefix web run ng -- generate component convention-probe --dry-run --skip-tests
npm --prefix web test -- --watch=false
npm --prefix web run build
node web/.angular/aurora-smoke/browser-smoke.mjs migration-after
node web/.angular/aurora-smoke/compare-migration.mjs
node web/.angular/aurora-smoke/migration-check.mjs --stage --built
node web/.angular/aurora-smoke/migration-check.mjs --built
node web/.angular/aurora-smoke/verify-design.mjs
Test-Path -LiteralPath "web/src/app/convention-probe"
```

- Baseline capture: package.json, package-lock.json, both user references and all five legacy SCSS
  SHA256 values, plus exact palette/gradient, saved in
  `web/.angular/aurora-smoke/migration-baseline.json`. Final protected hashes match the baseline and
  pre-existing design harness expectations.
- Tests: 2 files, 7 tests passed. Production build: passed, 247.59 kB initial raw total, no warnings.
- CLI: dry run reports only convention-probe.ts and convention-probe.html. Test-Path returns False;
  no source was emitted. Installed schema supports style `none` and inlineTemplate `false`.
- Stage checker: passed. Strict `--built` checker: expected failure only for the five listed files;
  all other component/config/build-output checks passed. After parent deletion, rerun the exact strict
  command `node web/.angular/aurora-smoke/migration-check.mjs --built`.
- Design harness: exact palette/gradient, shared fallbacks, compiled Tailwind utilities, modeled
  contrast and protected hashes passed. Its allowed-surface audit includes pre-existing Aurora work;
  its cumulative authored-line count is not this worker's change size.

Installed schema inspection command (successful package-root resolution):

```powershell
node -e "const {createRequire}=require('node:module');const p=require('node:path');const r=createRequire(p.resolve('web/node_modules/@angular/cli/package.json'));const pkg=r.resolve('@schematics/angular/package.json');console.log(pkg);const s=r(p.join(p.dirname(pkg),'component/schema.json'));console.log(JSON.stringify({style:s.properties.style,inlineTemplate:s.properties.inlineTemplate},null,2));"
```

The first direct exported-subpath lookup failed because package exports appended `.js` to schema.json.
Resolving the package.json location and reading its sibling schema succeeded; no installation or
dependency change was needed.

### Visual and interaction evidence

Before and after artifacts are separate:

- `web/.angular/aurora-smoke/migration-before/`
- `web/.angular/aurora-smoke/migration-after/`

Each contains desktop-home.png (1440×1000), mobile-home.png (390×844), narrow-home.png (320×844),
narrow-projects.png (320×844) and geometry.json. All four before/after PNG pairs are **byte-identical**.
All 384 element snapshots across three Home widths, Projects at 320px and not-found at 320px have
identical text, rectangles and selected computed styles: zero differences.

Browser checks pass for overflow, visible 44px navigation targets, current-link cyan underline,
keyboard skip-link focus, route titles/current links/main focus, cross-route approach focus, 404
return, static art, reduced-motion transitions and forced-colors scene hiding. Inclusive 380/540/800px
breakpoints and their adjacent widths pass. Console/runtime/resource errors: zero. Fresh owned Edge
profiles and an ephemeral strict-loopback server were used; only their owned processes were closed.

Initial comparisons caught and corrected the existing `ring` name activating a Tailwind utility,
global anchor rules overriding layered nav colors/decorations, and overlapping media utility ordering.
Explicit arbitrary shadows, targeted important nav utilities and non-overlapping scene-height media
ranges preserve the original output. No comparison assertions were weakened.

Limitations: screenshots capture the viewport, not the entire page; geometry includes below-fold
elements. Evidence covers the named Edge scenarios, not every browser or a complete accessibility
audit. Parent deletion, strict rerun, final independent verification and native review remain
parent-owned closure steps.

### Formatting and diff checks

Both commands passed after the final source edits. The formatting scope is all 16 touched deliverable
source/config/document files; ignored verification artifacts are excluded.

```powershell
node web/node_modules/prettier/bin/prettier.cjs --check web/src/app/app.ts web/src/app/home/home.ts web/src/app/home/home.html web/src/app/home/orbital-art.ts web/src/app/home/orbital-art.html web/src/app/layout/portfolio-layout.ts web/src/app/layout/portfolio-layout.html web/src/app/projects/project-card.ts web/src/app/projects/project-card.html web/src/app/projects/projects.ts web/src/app/projects/projects.html web/src/app/not-found/not-found.ts web/src/app/not-found/not-found.html web/angular.json README.md odd/tasks/tailwind-component-conventions.md
git diff --check
```
