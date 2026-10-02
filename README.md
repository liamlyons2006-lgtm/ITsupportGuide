# IT Support Field Guide

A free, static, searchable website of short IT troubleshooting articles, cheat
sheets, and helpdesk basics. Built to find any fix in under 30 seconds, from a
laptop or a phone.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build),
written in Markdown, deployed to GitHub Pages. Full-text search is powered by
Pagefind, built in to Starlight.

## Run it locally

Requires Node.js LTS and npm.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:4321
npm run build      # production build + link check + Pagefind search index
npm run preview    # preview the production build
npm run spellcheck # cspell over the content
```

Search is only available in a production build, not in `npm run dev`. To test
search locally, run `npm run build` then `npm run preview`.

## Project structure

```
src/content/docs/   # the published pages, one folder per sidebar section
templates/          # blank page templates (one per page type)
drafts/             # unfinished generic articles (git-ignored, never published)
.github/workflows/  # build, spell check, and deploy to GitHub Pages
astro.config.mjs    # site title, base path, social links, sidebar order
src/content.config.ts  # frontmatter schema (type, tier, tags, last_reviewed, ...)
```

Pages are one of five types: troubleshooting, how-to, concept, cheat sheet, or
checklist. Each type has a fixed, ordered set of sections so pages are fast to
scan under pressure. See `templates/` for the shape of each.

## Quality gates

Every push to `main` runs these checks before anything publishes, so a bad page
never goes live:

- **Spell check** (`cspell`) over all content.
- **Broken-link check** (`starlight-links-validator`), which fails the build on
  any broken internal link.
- **Build** produces the static site and the Pagefind search index.

## Deploying

1. Set `GITHUB_USERNAME` and `REPO_NAME` in `astro.config.mjs`.
2. Push to `main` and set the repo's **Settings > Pages** source to
   **GitHub Actions**. Every push rebuilds and publishes the site.

Internal links in the content include the `base` path (e.g.
`/ITsupportGuide/accounts/...`). If you change `REPO_NAME`, update the
old base in `src/content/docs/` with a find-and-replace so links keep resolving.

## Privacy

This repository holds only generic knowledge drawn from public vendor
documentation and personal lab testing. It contains no company-specific or
confidential information, and no real names, hostnames, IP addresses, or domains.
Placeholders (`contoso.com`, `192.0.2.0/24`) are used throughout. A pre-publish
checklist is tracked in the project spec.
