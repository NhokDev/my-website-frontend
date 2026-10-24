# Aurora learning portfolio

A small, learning-focused portfolio with a static CSS orbital illustration, restrained glass surfaces
and an Aurora color system. The standalone Angular application lives in `web/`; shared documentation,
workflow records and editor configuration stay at the root. Rendering remains client-side only.

## Quick start

Use Node.js 24 and npm 11 (validated with Node.js 24.22.1 and npm 11.8.0). Run these commands from the
repository root:

```bash
npm --prefix web ci
npm --prefix web start
```

Open <http://localhost:4200/>. The application reloads when its source changes.

## Pages and design

| Route          | Content                                                              |
| -------------- | -------------------------------------------------------------------- |
| `/`            | Learning-first home, project preview and approach section            |
| `/projects`    | Honest workbench: this portfolio is in progress; no public demos yet |
| Any other path | Not-found page with a working home link                              |

The persistent shell lives in `web/src/app/layout/`. Home, Projects and not-found are lazy route
components; the project card and typed local content belong to Projects and are reused on Home.
There is no generic UI layer until a real shared component needs one.

Shared tokens and base styles live in `web/src/styles.css`. Tailwind 4 theme colors are primary
`#A855F7`, secondary `#06B6D4`, tertiary `#10B981` and neutral `#120D1D`. The named
`--gradient-aurora` preserves the supplied horizontal stops: `#1E1E33 0%`, `#281A43 25%`,
`#321248 50%`, `#37123C 100%`. Semantic text, surface and focus roles are separate from raw accents.
Components use Tailwind utilities, including the static decorative artwork, and each owns an external
HTML template referenced through `templateUrl`. Component generation defaults to external HTML and no
stylesheet. No animation engine or external fonts are used.

See the user-owned [design reference](docs/portfolio_aurora_glass_3d/PORTFOLIO_DESIGN_BRIEF.md)
and the [foundation task](odd/tasks/aurora-home-foundation.md) for intent and verification evidence.
The current user palette takes precedence over older colors and fictional demo content in the reference.

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
[relocation task](odd/tasks/web-directory-layout.md) for the workspace layout history. Cross-cutting
documentation belongs at the root; `docs/` contains the user-owned design references.
