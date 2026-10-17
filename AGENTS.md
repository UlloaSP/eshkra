# eshkra.dev

eshkra.dev is the site for the eshkra open-source projects: mlbundle, mlschema, mlform and MLSuite. It is a static Astro site, served by Cloudflare Workers and built with Vite+.

The site does one job: show what each project does, how they fit together, and where to go next. The projects live in their own repositories and keep their own docs.

## What we can never compromise on

### 1. Truthful

Every claim on the site must match the project it describes. Copy comes from each project's README and package metadata, not from imagination. Numbers come from the GitHub, npm and PyPI APIs at build time. Never hardcode, round up or invent a count, a feature or a supported framework.

### 2. Fast by default

The site ships zero JavaScript unless a feature needs it. Interactive pieces, such as a live mlform demo, are Astro islands that load only themselves. Fetch data at build time, never in the visitor's browser.

### 3. Open

Every project links to its source. The site itself is open source, and nothing on it should depend on a private service to build.

### 4. Every viewport, both themes

Visitors arrive on phones and on wide desktop screens, in light and dark mode. A change that only looks right in one of them is not finished.

## Defaults

Fight scope creep. Understand the real constraint, then make the smallest change that solves it. Do not add machinery because it looks impressive, and do not keep complexity just because it already exists.

Treat these instructions as good defaults, not hard rules. The maintainer's preferences override anything here.

## A small glossary

- **you** means the agent reading this file and changing the site.
- **we, us, and maintainer** mean Pablo, who builds the eshkra projects.
- **visitor** means a person reading eshkra.dev.
- **project** means one of mlbundle, mlschema, mlform or MLSuite. MLSuite is an application; the others are libraries.
- **docs site** means a project's own documentation, hosted outside this repository.

## The three ways to hurt yourself

1. **Deploying from your machine.** Production deploys come only from CI on `main`. Never run `vp run deploy` or `wrangler deploy` locally, and never change DNS, routes or the custom domain in the Cloudflare dashboard. The domain is declared in `wrangler.jsonc`.
2. **Letting an API break the build.** The stats fetchers in `src/lib/stats.ts` return `null` on failure and the page hides that number. Keep it that way. A GitHub, npm or PyPI outage must never block a deploy.
3. **Scattering project data.** Names, taglines, install commands and docs links live only in `src/data/products.ts`. Docs may move to `*.eshkra.dev` later; that should stay a one-line change.

## Hit every surface

Before calling a change done, walk this list and say which entries applied:

- **Viewports.** Narrow phone (390px) and wide desktop.
- **Themes.** Light and dark, driven by `prefers-color-scheme`.
- **Projects.** A change to one product card usually applies to all four. Libraries and the application render differently: install command versus "Open the app".
- **Missing data.** Stats can be `null` or zero. The page must still read well.
- **Pages.** The home page and the 404 share the layout in `src/layouts/Base.astro`.
- **README.** The project table in `README.md` repeats `src/data/products.ts`. Keep them in sync.

## Dev servers

- `vp i` installs.
- Start the dev server in the background with `vp exec astro dev --background`. Manage it with `vp exec astro dev status`, `vp exec astro dev logs` and `vp exec astro dev stop`.
- Stop what you started.

## Verifying

- `vp check` formats, lints and type-checks the TypeScript and config files.
- `vp run typecheck` type-checks the `.astro` files. oxfmt does not format them, so keep their style consistent by hand: tabs, single quotes.
- `vp run build` builds the site and fetches the live stats.
- The repository is small, so running the full checks is fine.
- Don't verify with browsers or computer use unless the maintainer agrees or asks for it.

## Pull requests

- Never make a PR unless the maintainer explicitly asks you to.
- Conventional commit titles, plain language: `fix(site): product cards no longer overflow on phones`.
- Body: the problem in a sentence or two, then how you fixed it. End with the model and harness that did the work.
- Visual changes need before and after screenshots, in light and dark. Upload them to the PR; never commit them.
- One request is one PR.

## Where code lives

- `src/data/products.ts` - the projects and everything shown about them.
- `src/lib/stats.ts` - build-time star and download counts.
- `src/layouts/Base.astro` - document head, header, footer and the design tokens as CSS variables.
- `src/components/` - page sections and product cards.
- `src/pages/` - routes.
- `wrangler.jsonc` - Cloudflare Workers config and custom domain.
- `vite.config.ts` - Vite+ lint, format and pre-commit config.

## Taste

- Static first. Reach for an island only when a visitor has to interact with something.
- Design tokens are the CSS variables in `Base.astro`. Use them instead of new raw colors.
- No continuously repainting animations. Respect `prefers-reduced-motion`.
- Comments say why: a constraint, an external quirk, or an invariant the code can't show. Don't restate names or narrate steps.
- Site copy is in English, short and concrete. Say what a project does, not how revolutionary it is.
- If a rule here fights the task in front of you, say so and get the maintainer's sign-off before breaking it.

## Documentation

Astro docs: https://docs.astro.build. Consult these guides before working on related tasks:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)

Vite+ docs: https://viteplus.dev/guide/
