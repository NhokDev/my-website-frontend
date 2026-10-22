# Repository conventions

## Goal and scope
Review the generated .gitignore, add .gitattributes, and configure four spaces per indentation level in EditorConfig, Prettier, and VS Code. Tab should insert four spaces, not a literal tab character. Preserve unrelated files and existing configuration. Do not bulk-reformat the Angular scaffold.

## Execution
- Route: delegated direct; multiple configuration files require coordinated changes.
- No project skill registry exists. No branches, staging, commits, pushes, or remote operations are authorized.
- Delivery: ask-on-risk; approximately 80 authored changed lines expected, excluding this tracking document. No PR planned.
- Test-first: use deterministic configuration checks; observe the current mismatch before changing settings, then verify the intended values and formatting. Build once after final edits.
- Generated-output authorization: the user explicitly approved `dist/my-website/**` and `.angular/cache/**` exclusively for `npm run build`; no manual writes to those directories.

## Tasks
- [x] T1: Establish scope and inspect repository state. Git exists; generated files are untracked. Preserve their contents outside the authorized configurations.
- [x] T2: Configure ignore rules, attributes, and four-space editor/formatter settings. Keep existing applicable rules; no global Git settings.
- [x] T3: Functional verification complete: configuration assertions, Git ignore/attributes, JSON formatting, and build passed. Parent assessment attempted; native review is unavailable pending explicit untracked-file selection, not approved.

## Checks and evidence
- Required: configuration assertions for .editorconfig, .prettierrc, and .vscode/settings.json; Prettier stdin formatting of a TypeScript sample must use four spaces.
- Required: git check-ignore --no-index against node_modules, dist, .angular, coverage and source/config controls; git check-attr for source and binary samples.
- Required: npm run build; native review assessment/preflight handled by parent.
- Work-unit commits: none authorized.
- RED: the initial in-memory Node assertions failed eight checks: EditorConfig width, explicit Prettier width and spaces, three VS Code settings, resolved TypeScript options, and four-space TypeScript formatting. Actual resolved indentation was two spaces. Existing Prettier options and EditorConfig space style already passed.
- GREEN: the same in-memory assertions passed all ten checks after implementation, including `prettier.resolveConfig('src/app/app.ts', { editorconfig: true })` and nested TypeScript formatting with four/eight spaces and no tab characters. Existing print width, single quotes, and Angular HTML parser were preserved.
- `git check-ignore --no-index --verbose --non-matching node_modules/probe dist/probe .angular/probe coverage/probe src/app/app.ts .gitattributes .vscode/settings.json .env .env.local .env.example`: passed. Dependencies, outputs, cache, coverage, and environment secrets are ignored; source, attributes, shared VS Code settings, and `.env.example` remain visible. No probe files were created and no environment file contents were read.
- `git check-attr text eol diff merge -- src/app/app.ts public/favicon.ico probe.bat probe.cmd`: passed. Source uses automatic text detection and LF; favicon has text/eol/diff/merge unset; batch and command samples use text and CRLF. No files were renormalized.
- `node node_modules/prettier/bin/prettier.cjs --check .prettierrc .vscode/settings.json`: passed for both touched JSON configuration files. No bulk formatting or persistent test script was used.
- `npm run build`: passed once after final configuration edits; production bundle generated at `dist/my-website` with 216.88 kB initial raw size and no reported warnings.
- Scope: preserved unrelated scaffold files and generated ignore rules; broadened the existing root Angular cache rule to ignore the whole `.angular` directory, allowed `.env.example`, and added LF/binary/CRLF attributes plus four-space settings.
- Rollback boundary: only the six authorized authored files listed below; generated build/cache output is not part of the authored configuration change.
- Authored files: `.gitignore`, `.gitattributes`, `.editorconfig`, `.prettierrc`, `.vscode/settings.json`, and this task document. Git staging, branches, commits, remote operations, and global settings were not changed.
- Parent spot-check: Prettier check passed for both JSON configuration files.
- Independent verification: resolved Prettier options and nested four/eight-space formatting passed; Git ignore controls and attributes passed. No writes or build were performed by the verifier.
- Native assessment: high/unassessable because new files require an explicit untracked declaration; no review approval exists. This does not indicate a demonstrated configuration defect.
- Next step: use the shared editor/formatter settings for new work. Existing scaffold indentation was not bulk-reformatted. Native review remains pending separately; all scaffold files remain untracked.
