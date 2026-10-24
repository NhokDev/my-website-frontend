# Project context

This file supplements higher-level and global instructions with repository-specific context.
It does not replace the orchestrator, change instruction priorities, or disable orchestration.

## Purpose

Learning-focused developer portfolio with an Aurora home, an in-progress project workbench, and a shared Angular shell.
Design reference: `docs/portfolio_aurora_glass_3d/`; current palette and implementation scope: `odd/tasks/aurora-home-foundation.md`.
Preserve existing UI and content unless a redesign or content change is explicitly requested.
No backend or server-side rendering architecture has been selected.

## Layout

- `web/`: Angular application, source, public assets, npm manifests, and build configuration.
  Dependencies, build output, caches, and coverage also belong here.
- `odd/`: project decisions and task history; consult relevant records for task context.
- Root `README.md`: setup and navigation. `web/README.md`: generated Angular guide.
- Root `.vscode/`, `.editorconfig`, `.prettierrc`, and Git configuration: shared tooling.
- Future cross-cutting documentation or skills directories belong at the root, not in `web/`.
  Do not create them unless the task requires them.

There is no root npm package or wrapper workspace. Open the repository root in the editor.

## Stack

- Angular 22 with TypeScript, standalone components, routing, and client-side rendering.
- Tailwind CSS 4 through `@tailwindcss/postcss`; PostCSS configuration stays in `web/`.
- Global Tailwind entry and shared design tokens: `web/src/styles.css`. Do not use SCSS or Sass.
- Vitest is the configured unit-test runner; do not infer the runner from the Chrome launch preset.
- Use Node.js 24 and npm 11. Check `web/package.json` and `web/package-lock.json` for
  dependency ranges, resolved versions, and package-manager details rather than freezing patch versions here.

## Commands

Run from the repository root; installing dependencies requires task authorization.

| Purpose                     | Command                                                                   |
| --------------------------- | ------------------------------------------------------------------------- |
| Install locked dependencies | `npm --prefix web ci`                                                     |
| Start development server    | `npm --prefix web start`                                                  |
| Build                       | `npm --prefix web run build`                                              |
| Run unit tests once         | `npm --prefix web test -- --watch=false`                                  |
| Check formatting            | `node web/node_modules/prettier/bin/prettier.cjs --check <changed-files>` |

For formatting, substitute only touched files supported by Prettier. Use repository defaults;
do not apply quote overrides or run a repository-wide formatting rewrite.

## Conventions

- Use Tailwind CSS utilities for component styling. Never create or use `.scss` files,
  Sass syntax, or SCSS references in component or workspace configuration.
- Every Angular component must have its own external `.html` template referenced through
  `templateUrl`. Never use an inline `template`, including for small or not-found components.
  Keep the HTML file beside its component, for example `not-found.ts` and `not-found.html`.
- Follow shared configuration: four spaces, no tabs, single quotes where applicable,
  and a Prettier print width of 100. HTML uses the Angular parser.
- Use LF for text according to `.gitattributes`; retain Windows batch and binary exceptions.
- Write code, identifiers, UI copy, comments, and documentation in English unless explicitly
  requested otherwise or extending an existing context in another language.
  Conversational persona or tone does not belong in artifacts.
- Keep Angular and styling configuration inside `web/`; do not introduce root npm tooling.

## Scope guardrails

- Make only task-required changes; preserve unrelated files, application source, assets,
  and dependency versions unless explicitly authorized to change them.
- Do not replace global instructions, orchestrator configuration, or installed skills.
- Do not create branches, stage, commit, or push without explicit authorization.
- Report dependency audit findings; do not apply blanket `npm audit fix` or `--force` fixes.
- Match verification to the change and report observed results, including failures or skipped checks.
