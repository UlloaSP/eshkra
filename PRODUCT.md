# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **ML researchers and data scientists** who need domain experts or end users to run, inspect and correct their models, without building a web app for each model.
- **Developers and ML engineers** looking for focused open-source libraries: a safe model artifact format, schema inference from training data, and schema-driven forms.

Both arrive evaluating: what is this, does it fit my stack (Python models, TypeScript frontends), and is it real.

## Product Purpose

eshkra.dev presents the eshkra open-source projects and how they fit together. Success means a visitor understands within one screen what each project does, sees that the pieces compose into one path from trained model to reviewed prediction, and leaves for the right repository, docs site or the running MLSuite app.

## Positioning

eshkra covers the loop after training rather than serving: package the model without pickle (mlbundle), describe its inputs from the training data (mlschema), render a validated form from that schema (mlform), then run predictions, collect human feedback and export it (MLSuite). Each piece works alone; together they keep the exact model and schema identity behind every prediction and correction.

## Operating Context

- Libraries: mlbundle and mlschema on PyPI (Python), mlform on npm (TypeScript, Web Components).
- Application: MLSuite (React, Spring Boot, Python runtime, Docker Compose), self-hostable, with a public instance at mlsuite.irlab.org.
- Each project keeps its own repository under github.com/UlloaSP and its own docs.

## Capabilities and Constraints

- Static site on Cloudflare Workers; star and download counts are fetched at build time and rebuilt daily.
- All projects are early software; breaking changes are expected.
- Docs may later move to `*.eshkra.dev` subdomains (undecided).

## Brand Commitments

- eshkra is an open-source umbrella today, intended to become a company in the way VoidZero relates to Vite, Vitest, Rolldown and Oxc. The company story is not public yet; do not announce funding, team or commercial offerings.
- Product marks: MLsuite's final mark is a graphite ribbon "M" with an amber glow, matching the eshkra mark's material (supplied 2026-10-17, `src/assets/marks/mlsuite.png`). MLform's final mark is a graphite ribbon "F" around an orange orb (supplied 2026-10-17, `src/assets/marks/mlform.png`). MLbundle's final mark is a graphite ribbon "b" around an orange orb (supplied 2026-10-17, `src/assets/marks/mlbundle.png`). MLschema's final mark is a graphite helix around a glowing orb (supplied 2026-10-17, `src/assets/marks/mlschema.png`). All four product marks and the eshkra mark now share one material: graphite ribbons around an ember orb. Wordmarks set "ML" in heavy weight followed by the lowercase name in a light weight.
- eshkra mark: three dark graphite petals swirling around a glowing ember orb, supplied by the maintainer as a transparent PNG (2026-10-17), `src/assets/brand/eshkra.png`. No vector version yet.
- Standing preference (2026-10-17): eshkra.dev follows the category standard for multi-product open-source brands and sits alongside voidzero.dev and hashicorp.com, with astral.sh and tanstack.com as further references; their craft level is the bar. The user rejected a bespoke "printed form" direction. Products are shown as a family index (HashiCorp) followed by one large panel per product (VoidZero). Light or dark follows the visitor's system, with the same design in both.

## Evidence on Hand

- Live metrics only: GitHub stars, npm and PyPI monthly downloads, and the published version of each package.
- All four projects are MIT licensed. mlbundle is pre-alpha and mlform is pre-1.0; say so where versions appear.
- Real usage snippets live in each project's README (mlbundle `export`/`load`, mlschema `infer_schema`, mlform `mountForm`, MLSuite Docker Compose setup). Code shown on the site must come from them.
- The running MLSuite instance at mlsuite.irlab.org.
- No testimonials, named users, institutions, publications or benchmarks. Do not fabricate any.

## Product Principles

1. One path, four tools: always show how the projects connect, not just a list.
2. Truth over hype: every claim traces to a README, package metadata or a live API.
3. Open by default: every project links to its source.
4. Serve both readers: researchers need the loop, engineers need the install line.
