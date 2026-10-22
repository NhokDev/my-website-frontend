# Tailwind integration

## Objective
Integrate Tailwind CSS 4.3.3 into the existing Angular 22 application following https://tailwindcss.com/docs/installation/framework-guides/angular. Install tailwindcss, @tailwindcss/postcss and postcss; register the plugin in .postcssrc.json and import Tailwind from src/styles.css. Replace the comment-only global SCSS entry while retaining component SCSS and the welcome UI.

## Constraints and route
- Delegated direct: coordinated dependency/configuration changes with installation and functional checks.
- Preserve four-space conventions and unrelated files. No bulk reformat, Git staging, branches, commits or publishing.
- No project skill registry exists. Work-unit commits are not authorized.
- Delivery: ask-on-risk; expected authored changes below 100 lines, excluding generated lockfile and this task record.
- Default test-first: observe a failing in-memory integration assertion before changing configuration, then repeat successfully. Do not create artificial UI features for tests.
- Generated install/build/test output in node_modules/**, .angular/** and dist/my-website/** is authorized only through the required commands.

## Tasks
- [x] T1: Confirm official guide, current latest versions and existing stylesheet scope.
- [x] T2: Install dependencies and configure the official PostCSS/CSS integration without migrating component SCSS.
- [x] T3: Verify resolved dependencies, four-space formatting, production build, generated Tailwind CSS/utilities and existing unit tests.

## Checks and progress
- Required: in-memory integration assertions before/after; npm ls tailwindcss @tailwindcss/postcss postcss; npm run build; npm test -- --watch=false.
- Inspect production CSS for Tailwind processing and verify representative utilities using the configured PostCSS plugin in memory, without permanent UI changes or fixtures.
- Retain the official guide's package set. Check actual peer requirements rather than suppressing conflicts blindly with --force.
- RDD is globally on; native review availability must be reported honestly. Previous candidates were unassessable pending explicit untracked selection.
- RED observed: the initial in-memory integration assertion failed with `Tailwind dev dependency is missing` before configuration changes.
- Installed with `npm install --save-dev tailwindcss@4.3.3 @tailwindcss/postcss@4.3.3 postcss@^8.4.0`: added 14 packages; audit reported two vulnerabilities (one low, one high). No audit fixes were run.
- Angular builder 22.2.3 declares Tailwind `^2.0.0 || ^3.0.0 || ^4.0.0` and PostCSS `^8.4.0` peers. Installation succeeded without `--force`; no peer bypass was necessary.
- Added the official PostCSS plugin configuration and `@import 'tailwindcss';` CSS entry; changed only the global Angular stylesheet reference. Component SCSS defaults remain unchanged. Single and double quotes implement the same official CSS import.
- Correction: the initial default Prettier check failed on the double-quoted import. The prior override-based handoff should have been partial, not completed. Parent authorized normalizing only `src/styles.css` using the existing formatter configuration; no configuration or override flags were changed.
- `node node_modules/prettier/bin/prettier.cjs --write src/styles.css`: passed before final functional checks; normalized the import to single quotes.
- Initial GREEN used the original double-quote assertion after integration. Final follow-up GREEN passed with a PostCSS-parsed import assertion accepting either quote style, while retaining all dependency/configuration/SCSS checks. The original RED remains the observed missing-dependency failure, not a newly claimed follow-up failure.
- `npm ls tailwindcss @tailwindcss/postcss postcss`: passed; Tailwind and plugin resolved to 4.3.3, PostCSS to 8.5.31, with a valid deduplicated peer tree.
- Final `npm run build`: passed in 1.857 seconds; initial bundle 221.78 kB, global CSS 4.90 kB. No build warnings were emitted.
- `npm test -- --watch=false`: passed; one test file, two tests, no test warnings emitted.
- Final `node node_modules/prettier/bin/prettier.cjs --check .postcssrc.json src/styles.css`: passed under the unmodified project configuration with no overrides; four-space JSON indentation is preserved.
- Final production CSS assertion passed: `dist/my-website/browser/styles-VRHJIL3G.css` contains Tailwind theme/base layers and preflight, no unresolved imports, 4,904 bytes. This is actual Angular production output.
- Separate in-memory configured-PostCSS smoke passed: compiled `flex`, `p-4`, `text-red-500` and responsive `md:flex`; omitted an unsupported utility and resolved all Tailwind directives. This proves utility generation without claiming these sample utilities appear in Angular templates or writing fixtures/UI changes.
- No functional configuration changes or mutating normalizers followed the final passing checks. Only this progress record was updated afterward. The full security audit remains nonzero; overall handoff is partial despite completed implementation/functional checks.
- Native assessment remains pending and parent-owned; no review, staging, branch, commit or push actions were performed. No development server or visual browser check was run; Tailwind's standard preflight is now active.

## Reproducible in-memory checks
Run these from the project root; no fixture files are created.

### Final integration assertion (quote-insensitive follow-up GREEN)
```powershell
node -e "const assert=require('node:assert/strict'); const fs=require('node:fs'); const p=JSON.parse(fs.readFileSync('package.json','utf8')); assert.ok(p.devDependencies.tailwindcss,'Tailwind dev dependency is missing'); assert.ok(p.devDependencies['@tailwindcss/postcss'],'Tailwind PostCSS dev dependency is missing'); assert.ok(p.devDependencies.postcss,'PostCSS dev dependency is missing'); const config=JSON.parse(fs.readFileSync('.postcssrc.json','utf8')); assert.deepEqual(config,{plugins:{'@tailwindcss/postcss':{}}}); const angular=JSON.parse(fs.readFileSync('angular.json','utf8')).projects['my-website']; assert.deepEqual(angular.architect.build.options.styles,['src/styles.css']); assert.equal(angular.architect.build.options.inlineStyleLanguage,'scss'); assert.equal(angular.schematics['@schematics/angular:component'].style,'scss'); const root=require('postcss').parse(fs.readFileSync('src/styles.css','utf8')); assert.equal(root.nodes.length,1); assert.equal(root.first.type,'atrule'); assert.equal(root.first.name,'import'); assert.ok([34,39].some(code=>root.first.params===String.fromCharCode(code)+'tailwindcss'+String.fromCharCode(code))); assert.equal(fs.existsSync('src/styles.scss'),false); console.log('PASS: Tailwind dev dependencies, exact PostCSS config, quote-insensitive Tailwind import, CSS global entry and preserved component SCSS');"
```

### Actual Angular production CSS
```powershell
node -e "const assert=require('node:assert/strict'); const fs=require('node:fs'); const postcss=require('postcss'); const file='dist/my-website/browser/styles-VRHJIL3G.css'; const css=fs.readFileSync(file,'utf8'); const root=postcss.parse(css); const layers=[]; root.walkAtRules('layer',rule=>layers.push(rule.params)); assert.ok(layers.includes('theme')); assert.ok(layers.includes('base')); assert.ok(css.includes('box-sizing:border-box')); assert.ok(css.includes('margin:0;padding:0;border:0 solid')); root.walkAtRules('import',()=>assert.fail('Unresolved import in production CSS')); console.log('PASS: '+file+' contains Tailwind theme/base layers and preflight, with no unresolved imports ('+Buffer.byteLength(css)+' bytes)');"
```

### Separate utility compiler smoke (not an Angular template fixture)
```powershell
node -e "const assert=require('node:assert/strict'); const fs=require('node:fs'); const postcss=require('postcss'); const config=JSON.parse(fs.readFileSync('.postcssrc.json','utf8')); const plugins=Object.entries(config.plugins).map(([name,options])=>require(name)(options)); const q=String.fromCharCode(34); const css='@import '+q+'tailwindcss'+q+' source(none); @source inline('+q+'flex p-4 text-red-500 md:flex not-a-tailwind-utility'+q+');'; postcss(plugins).process(css,{from:require('node:path').resolve('src/styles.css')}).then(result=>{ const rules=new Map(); result.root.walkRules(rule=>rules.set(rule.selector,rule)); for(const [selector,property] of [['.flex','display'],['.p-4','padding'],['.text-red-500','color']]) { assert.ok(rules.has(selector),'Missing '+selector); assert.ok(rules.get(selector).nodes.some(node=>node.prop===property),'Missing '+property); } assert.ok(rules.get('.flex').nodes.some(node=>node.prop==='display'&&node.value==='flex')); const responsive='.md'+String.fromCharCode(92)+':flex'; assert.ok(rules.has(responsive),'Missing responsive utility'); assert.equal(rules.has('.not-a-tailwind-utility'),false); result.root.walkAtRules(rule=>assert.ok(!['import','source','tailwind'].includes(rule.name),'Unresolved '+rule.name)); assert.ok(result.css.includes('tailwindcss v4.3.3')); console.log('PASS: configured PostCSS plugin compiled in-memory flex, p-4, text-red-500 and md:flex; rejected unknown utility; resolved all Tailwind directives; no source fixture written'); }).catch(error=>{console.error(error);process.exitCode=1;});"
```

## Read-only security audit
- `npm audit --json`: completed with exit code 1; two vulnerable packages (one low, one high), representing six underlying Vite advisories. Repeated once with `$LASTEXITCODE` reporting to confirm exit status. No fixes or version changes were run.
- Dependency path: `my-website -> @angular/build@22.2.3 -> vite@8.3.0`, installed at `node_modules/@angular/build/node_modules/vite`. Vite is high overall; `@angular/build` is low via Vite.
- All six Vite advisories affect `>=8.3.0 <=8.3.2`. The JSON gives no explicit fixed Vite version. Its proposed remediation is `@angular/build@22.1.9`, marked `isSemVerMajor: true`; this is below the installed builder version and was not applied or endorsed.

| Vite advisory | Severity | Summary |
| --- | --- | --- |
| GHSA-698v-4r3x-3vcv | Moderate | Windows percent escaping omission in launch-editor |
| GHSA-r825-w8mm-5pxw | Moderate | Editor CLI flag misinterpretation and command execution |
| GHSA-587h-7wmj-h5pm | High | Windows existence-check bypass in launch-editor |
| GHSA-9jrq-w75r-8gcw | Low | Cross-origin script execution through custom middleware |
| GHSA-rq7h-c2jc-7f22 | Moderate | Files outside allowed paths on non-Windows systems |
| GHSA-vfpm-58rq-9qcg | Moderate | First four bytes exposed outside filesystem restrictions |

- Causality evidence: the installed Angular builder manifest was read before Tailwind installation and already pinned Vite 8.3.0. Current audit paths point to that existing Angular build chain, not Tailwind. No pre-install audit snapshot was captured, so a before/after advisory delta cannot be proven; there is no evidence that added Tailwind packages introduced these findings.
- `npm audit --omit=dev --json`: passed with zero vulnerabilities. This deliberately excludes Angular build tooling, Tailwind tooling and other development dependencies; it does not clear the full development dependency audit or assess deployment behavior.

## Handoff boundary
- One dependency/configuration work unit; generated lockfile changes accompany the package declarations. Existing untracked scaffold remains unstaged.
- Rollback boundary for parent review: the three development dependencies and their lock entries, `.postcssrc.json`, the global `angular.json` styles reference and the `src/styles.scss` to `src/styles.css` replacement. No component, editor or formatter configuration changes belong to this unit.
- Parent spot-check: default Prettier check passed for `.postcssrc.json` and `src/styles.css` without overrides. Native assessment attempted: high/unassessable pending explicit untracked-file selection; no native approval exists.
- Independent verifier: configuration assertions and in-memory utility smoke passed; `npm run build` passed without warnings (221.80 kB initial bundle), and `npm test -- --watch=false` passed 2/2 tests. Fresh production CSS `styles-5VGDOLMV.css` (4,926 bytes) contains Tailwind layers/preflight without unresolved imports. Resolve hashed CSS filenames dynamically when rerunning checks.
- Integration and functional verification are complete. Overall handoff retains unresolved security findings and pending native review; no browser visual check or dependency remediation was authorized/performed. Security remediation is a separate follow-up, not an automatic downgrade or audit fix.
