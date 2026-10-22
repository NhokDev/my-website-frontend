# My Website

The Angular application lives in `web/`. Repository-wide documentation, workflow records, and editor
configuration stay at the root.

## Quick start

Use Node.js 24 and npm 11 (validated with Node.js 24.22.1 and npm 11.8.0). Run these commands from the
repository root:

```bash
npm --prefix web install
npm --prefix web start
```

Open <http://localhost:4200/>. The application reloads when its source changes.

## Verify the application

```bash
npm --prefix web run build
npm --prefix web test -- --watch=false
```

Production output is written under `web/dist/`. Dependencies, Angular caches, and coverage output also
belong inside `web/` and are ignored by Git. There is no root npm package or wrapper workspace.

## Repository layout

```text
my-website/
    web/                Angular source, public assets, npm and build configuration
        README.md       Original Angular-generated guide; run its commands from web/
    odd/                Project decisions and task records
    .vscode/            Shared editor settings, tasks, and launch configurations
    .editorconfig       Repository-wide indentation and whitespace rules
    .prettierrc         Repository-wide formatting rules
    .gitattributes      Repository-wide Git text handling
    .gitignore          Repository-wide ignore rules
    README.md           Repository setup and navigation
```

Shared EditorConfig and Prettier settings apply to files inside `web/`. Open the repository root in
VS Code; its npm tasks target `web/`, and launch configurations resolve application sources there.

## Debug unit tests in VS Code

Set a breakpoint in a `web/src/**/*.spec.ts` file, select **ng test** in Run and Debug, and press **F5**.
Its task runs `npm test -- --debug --watch=true` from `web/`, waits for Vitest's Node inspector on
`127.0.0.1:9229`, then attaches the debugger. Port 9229 must be available. Continue execution when paused;
watch mode reruns tests after edits. This uses Angular's [test debugging](https://angular.dev/guide/testing/debugging)
workflow, not a Karma browser page.

When finished, stop debugging and use **Tasks: Terminate Task** to stop **npm: test debug (web)** before
starting another session. For tests without a debugger, run `npm --prefix web test -- --watch=false`
from the repository root. The **ng serve** browser launcher remains on port 4200.

See the [application guide](web/README.md) for the original Angular CLI instructions and the
[relocation task](odd/tasks/web-directory-layout.md) for scope and verification evidence. Future
cross-cutting `docs/` or skills directories belong at the root; neither is currently present.
