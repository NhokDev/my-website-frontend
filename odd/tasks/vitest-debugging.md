# Vitest debugging

## Scope

Replace the obsolete Chrome/Karma test-debug preset with Node/Vitest debugging supported by Angular's `ng test --debug`. Preserve the browser application launch configuration, existing application source, dependency manifests/lockfile and security findings. Update root README instructions to match the new debugging workflow.

## Execution and constraints

- Route: delegated direct; coordinated VS Code task/launch configuration and documentation.
- User explicitly excludes security/dependency remediation. No installs, overrides, audit fixes, new commits or branches.
- Official reference: https://angular.dev/guide/testing/debugging.
- No project skill registry exists. Keep four-space formatting and do not rewrite unrelated configuration.
- Test-first: observe the incompatible existing test launch configuration, then run the same configuration contract after changes. Verify the actual inspector starts using the installed Angular builder, and that existing tests still pass.
- Delivery: ask-on-risk; expected authored changes below 120 lines, excluding this task document. No PR planned.

## Tasks

- [x] T1: Confirm authorization and Angular's documented `ng test --debug` support.
- [x] T2: Replace the test debugger and configure its launch task; update README.
- [x] T3: Check formatting, task/launch consistency, inspector runtime behavior and existing tests.

## Verification

- `npm --prefix web test -- --watch=false`.
- `node web/node_modules/prettier/bin/prettier.cjs --check .vscode/launch.json .vscode/tasks.json README.md odd/tasks/vitest-debugging.md`.
- Bounded runtime smoke of the configured debug command: verify loopback inspector readiness and clean up only processes started for this check. Report any missing GUI breakpoint proof honestly.
- Hash package.json/package-lock.json before/after to confirm excluded dependencies remain untouched.
- Native assessment and review applicability handled by parent; no fabricated approval.

## Implementation and evidence

- `ng test` now attaches to Node at `127.0.0.1:9229`; its dedicated background task runs `npm test -- --debug --watch=true` from `web/`. Readiness matches the inspector's actual stderr line, not Angular's build completion. The browser launcher and normal test task are unchanged.
- Installed Angular builder enables `inspectBrk`, disables isolation and parallel execution; installed Vitest supplies loopback port 9229 and waits for debugger attachment. No wrapper, package script or dependency change is needed.
- RED: in-memory launch/task assertions failed as intended (`chrome` instead of `node`). The first invocation had a PowerShell quoting error; the corrected invocation observed the intended failure. GREEN: the same assertions passed after the change.
- Runtime: port 9229 was free before launch. The configured command emitted `Debugger listening on ws://127.0.0.1:9229/...`; the readiness matcher matched and tests waited. A Node built-in WebSocket attached only to that emitted target, enabled debugging, sent `Runtime.runIfWaitingForDebugger`, resumed the observed pause, and all 2 tests passed. Cleanup terminated only the owned PID tree; port 9229 was available again.
- Normal verification: `npm --prefix web test -- --watch=false` passed (1 file, 2 tests). Final formatting, contract and dependency-hash results are reported in the writer handoff.
- Limits: VS Code GUI breakpoint binding and edit-triggered reruns were not exercised. Watch-task termination is documented; stopping an attach session alone does not stop its background task. Native assessment remains parent-owned.
- Rollback boundary: the two `.vscode` files, root README debugging instructions and this task record only; application source and dependencies remain outside this change.
- Parent spot-check: default Prettier check and `git diff --check` passed. Native assessment returned high/unassessable pending explicit selection of the new task document; no native approval exists.
- Independent verifier confirmed launch/task JSONC contracts, positive and eight negative readiness examples, unchanged application launcher and normal tasks, and 2/2 passing tests. Dependency files remain unchanged; no second inspector process was started.
- Next step: exercise F5 and TypeScript breakpoint binding visually in VS Code if desired. GUI and edit-triggered watch checks remain unperformed; functional command/inspector checks passed. No commit, branch or staging is authorized.
