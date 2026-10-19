# eshkra

eshkra is a family of open-source tools for putting machine-learning models in front of people. This repository is [eshkra.dev](https://eshkra.dev), the site that presents them.

| Project                                 | What it does                                                          | Get it                                         |
| --------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------- |
| [MLbundle](https://mlbundle.eshkra.dev) | Pickle-free, verifiable model bundles with a manifest and schema      | `pip install "mlbundle[sklearn,schema]"`       |
| [MLschema](https://mlschema.eshkra.dev) | Infers validated, frontend-ready field schemas from pandas DataFrames | `pip install mlschema`                         |
| [MLform](https://mlform.eshkra.dev)     | Schema-driven form runtime and Web Component kit for ML interfaces    | `npm i mlform`                                 |
| [MLsuite](https://mlsuite.eshkra.dev)   | Turns trained models into reviewable, reproducible applications       | [mlsuite.irlab.org](https://mlsuite.irlab.org) |

## "Wait, what are you selling me?"

Nothing. Testing a model with real users usually means rebuilding the same infrastructure every time: a safe artifact format, typed inputs, forms, prediction history and a way to collect corrections. Each eshkra project solves one piece of that, and they fit together.

Everything is open source. If a project goes in the wrong direction, the code is there to inspect, change and fork.

## Some notes

These projects are early. Expect rough edges and breaking changes.

Bugs and feature requests for a project belong in that project's repository. This repository only covers the site.

## Documentation

Each project keeps its own docs, and each library has an in-browser playground:

| Project  | Docs                                                         | Playground                                                               | Source                                                  |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------- |
| MLbundle | [docs.mlbundle.eshkra.dev](https://docs.mlbundle.eshkra.dev) | [playground.mlbundle.eshkra.dev](https://playground.mlbundle.eshkra.dev) | [UlloaSP/mlbundle](https://github.com/UlloaSP/mlbundle) |
| MLschema | [docs.mlschema.eshkra.dev](https://docs.mlschema.eshkra.dev) | [playground.mlschema.eshkra.dev](https://playground.mlschema.eshkra.dev) | [UlloaSP/mlschema](https://github.com/UlloaSP/mlschema) |
| MLform   | [docs.mlform.eshkra.dev](https://docs.mlform.eshkra.dev)     | [playground.mlform.eshkra.dev](https://playground.mlform.eshkra.dev)     | [UlloaSP/mlform](https://github.com/UlloaSP/mlform)     |
| MLsuite  | [docs.mlsuite.eshkra.dev](https://docs.mlsuite.eshkra.dev)   | Public instance: [mlsuite.irlab.org](https://mlsuite.irlab.org)          | [UlloaSP/mlsuite](https://github.com/UlloaSP/mlsuite)   |

## Working on the site

### Install `vp`

The site uses Vite+, so you'll need the global `vp` command-line tool.

#### macOS / Linux

```bash
curl -fsSL https://vite.plus | bash
```

#### Windows

```bash
irm https://vite.plus/ps1 | iex
```

Check out their getting started guide for more information: https://viteplus.dev/guide/

### Install dependencies

```bash
vp i
```

### Run it

```bash
vp run dev         # http://localhost:4321
vp check           # format, lint and type-check
vp run typecheck   # type-check .astro files
vp run build       # static output in dist/
vp run preview     # build and serve it with wrangler, as in production
```

Products, install commands and every project link live in [`src/data/products.ts`](./src/data/products.ts).

### Deployment

[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) checks and builds every pull request and deploys every push to `main` to Cloudflare Workers. It also rebuilds daily so versions, star and download counts stay current.

The custom domain is declared in [`wrangler.jsonc`](./wrangler.jsonc), so the first deploy creates the DNS record and certificate for `eshkra.dev`. `www.eshkra.dev` redirects to it through a Cloudflare redirect rule, which the post-deploy smoke test checks.

The workflow needs two repository secrets:

| Secret                  | Value                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| `CLOUDFLARE_API_TOKEN`  | API token from the "Edit Cloudflare Workers" template, scoped to the account and the `eshkra.dev` zone |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID from the Cloudflare dashboard                                                               |
