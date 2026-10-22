# Web directory layout

## Objective and authorized scope

Separate the Angular application into web/ while keeping project-wide files at the repository root. Move application source, assets, npm manifests, Angular/TypeScript/PostCSS configuration and generated application directories together. Keep odd/, .vscode/, root README, Git rules, EditorConfig and Prettier transversal. Existing docs/skills directories would stay root; neither currently exists, so do not create empty placeholders or new skills.

## Constraints and execution

- Route: delegated direct; relocation affects multiple paths plus documentation and tooling references.
- No Git staging, branches, commits, push, dependency upgrades, security remediation or UI changes.
- Preserve source/assets/lockfile byte-for-byte with before/after hashes, including binary favicon. Do not delete dependencies or caches to simplify the move.
- Use whole-entry relocation for directories/binary assets when patch-based text movement is unsuitable; use apply_patch for text edits. Never overwrite an existing destination.
- Preserve four-space configuration and component SCSS/Tailwind setup. No bulk reformat of application files.
- Delivery ask-on-risk: pure relocations dominate; expected newly authored changes below 200 lines. No PR planned.
- Default test-first: observe a failing layout assertion before moving, repeat after; hash comparisons and functional checks supplement it.
- No project skill registry exists. CodeGraph initialized at root; its configuration/index stay root and rely on watcher refresh, not copied indexes.

## Tasks

- [x] T1: Map paths and shared/app boundaries. Angular paths are workspace-relative; .vscode task/launch references and anchored ignores require adjustment.
- [x] T2: Move the app to web/, preserve its generated README at web/README.md, document root commands, and repair shared Git/VS Code references.
- [x] T3: Verify hashes, visibility/ignore behavior, VS Code paths, production build, Tailwind processing, and existing tests from the new location.

## Required checks

- In-memory RED/GREEN layout assertion; before/after SHA-256 comparison of moved source/assets/manifests/configs.
- npm --prefix web run build; npm --prefix web test -- --watch=false; npm --prefix web ls tailwindcss @tailwindcss/postcss postcss.
- Check root documentation commands, VS Code npm task paths/launch webRoot, shared Prettier resolution and nested generated-directory ignores.
- Native assessment must not fabricate approval; previous preflight remains unavailable pending explicit new-file selection.
- Known environmental finding: full npm audit has low/high Angular/Vite development-tooling findings; this move must not change dependency versions to remediate them.
- Work-unit commits: not authorized; none created.
- Next step: use the documented root commands or work directly in web/. Native review remains pending separately; no commit authorized.

## Observed implementation and functional evidence

- Relocated angular.json, package.json, package-lock.json, all three tsconfigs, .postcssrc.json, src/, public/, and the original README.md into web/ without text edits. Whole-entry PowerShell moves also preserved installed node_modules/, .angular/, and dist/; build/test then regenerated application output only inside web/.
- Checked the repository parent, absent web/ directory, all sources, and every absent destination before moving. Added nested generated-directory ignores before relocating dependencies. No reinstall, overwrite, dependency upgrade, UI change, or CodeGraph index operation was performed.
- Authored only root README.md, .gitignore, .vscode/tasks.json, .vscode/launch.json, and this task document. Shared VS Code JSON uses four-space formatting; application files were not reformatted.
- RED: the in-memory layout assertion failed for all 12 application entries at root before relocation. GREEN: the identical layout predicate passed afterward; root shared files remained present.
- SHA-256 comparison passed for all 18 moved source/config/asset/README files, including public/favicon.ico and package-lock.json. Relative inventory keys and hashes matched the pre-move baseline exactly.
- `npm --prefix web run build`: passed; production output at web/dist/my-website, initial bundle 221.55 kB.
- `npm --prefix web test -- --watch=false`: passed; one test file and both existing tests passed with Vitest 5.0.5.
- `npm --prefix web ls tailwindcss @tailwindcss/postcss postcss`: passed; Tailwind and its PostCSS plugin 4.3.3, PostCSS 8.5.31, no dependency changes.
- Git ignore assertions passed for web/node_modules/probe, web/dist/probe, web/.angular/probe, and web/coverage/probe. Visibility assertions passed for web/src/app/app.ts, web/package.json, web/public/favicon.ico, and .vscode/settings.json. No probe files were created.
- VS Code npm task paths resolve to web/package.json scripts; stable task labels match both launch preLaunchTask references, and both webRoot paths resolve to web/. Root README commands and application-guide link passed structural checks.
- Root Prettier configuration resolves for web/src/app/app.ts with four spaces, no tabs, and single quotes; root EditorConfig applies without nested overrides. No docs/skills placeholders were created.
- Rebuilt CSS contains Tailwind theme/base/utilities layers without unresolved imports. An in-memory PostCSS smoke test using web-installed packages emitted flex, p-4, and text-red-500 without writing files.
- `node web/node_modules/prettier/bin/prettier.cjs --check README.md .vscode/tasks.json .vscode/launch.json odd/tasks/web-directory-layout.md`: passed for all four touched formattable shared files. Final Git inspection showed only untracked scaffold entries and no staged changes; generated application directories were excluded.
- Verification harness corrections: the first inline Node attempt hit Windows shell quoting before executing assertions; stdin execution captured the actual RED. The first smoke harness used a directory import unsupported by the plugin's package exports; resolving packages from web/package.json passed without application changes.

## Review boundary and remaining concerns

- Parent spot-check: shared-file Prettier check passed. Native assessment returned high/unassessable because untracked files require explicit selection; no native approval exists.
- Independent verifier observed passing root-prefixed build, both unit tests and the dependency tree. Current layout, editor references and generated Tailwind CSS were confirmed; historical hash identity remains the writer's observed evidence.
- Existing Chrome test launch configuration targets port 9876, while the configured tests use Vitest. Its URL, debugger type, and background matchers were deliberately not redesigned; use the documented terminal test command.
- Known low/high Angular/Vite development-tooling audit advisories remain baseline context. No new audit, remediation, or dependency mutation was run.
- One relocation work unit includes the shared tooling and documentation changes. Its rollback boundary is the listed app entries plus the five authored shared files; unrelated root files and historical ODD documents remain untouched. No staging, branch, commit, or push was performed.
