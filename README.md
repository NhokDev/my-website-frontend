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
The existing Chrome test launcher is scaffold configuration; use the terminal test command above for
the configured Vitest runner.

See the [application guide](web/README.md) for the original Angular CLI instructions and the
[relocation task](odd/tasks/web-directory-layout.md) for scope and verification evidence. Future
cross-cutting `docs/` or skills directories belong at the root; neither is currently present.
