# Design: IT Support Field Guide

## Overview

The IT Support Field Guide is a free, static, searchable documentation website
built with **Astro + Starlight** and deployed to **GitHub Pages**. It holds
short, scannable IT troubleshooting articles, cheat sheets, and helpdesk basics.

The design goal that drives every decision: **a person mid-ticket, on a phone,
must find a known fix in under 30 seconds.** That means search is the primary
interface, every article has a fixed, scannable shape, and nothing decorative
gets in the way.

This document describes the technical design: the stack, the project structure,
the content model and schema, the page layouts, and the build/deploy pipeline.
It is derived from the project spec (IT Support Field Guide — Website Spec,
1 Oct 2026).

### Design principles

- **Search first, steps first.** Full-text search is the main navigation. Within
  an article, the fix comes before the theory.
- **Fixed shapes.** Each of the five page types has a required, ordered set of
  sections so pages are predictable to scan under pressure.
- **No backend.** Content is Markdown in a Git repo. No accounts, database, or CMS.
- **Free and low-maintenance.** Static output, free hosting tier, lean on
  Starlight's built-in features instead of custom code.
- **Safe to publish.** Only generic, public-sourced knowledge. Privacy checks run
  before anything goes live.
- **Accessible and fast.** WCAG 2.2 AA, Lighthouse 90+ on every page type.

### Non-goals (v1)

- No user accounts, comments, or logins.
- No ticketing system or live chat.
- No CMS or database.
- No company-specific or confidential content.

## Architecture

### Technology choices

| Concern | Choice | Why |
|---|---|---|
| Framework | Astro (latest) with Starlight theme | Static output, docs-focused theme, actively developed as of Oct 2026 |
| Content format | Markdown / MDX | Portable, Git-friendly, no database |
| Search | Pagefind (built into Starlight) | Full-text, static, zero config, works on a static host |
| Hosting | GitHub Pages via Astro's official GitHub Action | Free; every push to `main` rebuilds and publishes |
| Runtime/tooling | Node.js LTS + npm | Standard Astro toolchain |
| CI quality gates | GitHub Actions (spell check, broken-link check) | A bad page never goes live |

Alternatives (Docusaurus, Material for MkDocs, Zensical) were considered in the
spec; Astro + Starlight is the chosen option because it ships the MVP feature set
with no extra code and is actively maintained.

### How Starlight covers the MVP for free

These MVP features come from Starlight out of the box, with no custom code:

- Sidebar navigation grouped by section
- Full-text search (Pagefind), opened with `Ctrl+K` or `/`
- Copy button on every code block
- Light and dark mode
- Mobile-responsive layout
- Code syntax highlighting
- Accessibility defaults (keyboard nav, focus states, heading structure)
- "On this page" table of contents

Features that need light configuration or content, not new frameworks:

- Tip / Warning / Escalate callouts → Starlight asides (`:::tip`, `:::caution`,
  plus a custom "Escalate" styling convention)
- "Last reviewed" date per page → from frontmatter, surfaced in the article layout
- Tag pages → a tags listing built from frontmatter
- About page + public repo → standard content + repo hygiene

### Deployment pipeline

```
author writes/edits Markdown
        │
        ▼
   git push to main
        │
        ▼
GitHub Action: install → spell check (cspell) → build (astro build)
               → broken-link check → Pagefind index
        │
        ├── any gate fails ──► build stops, nothing publishes
        │
        ▼  all gates pass
   deploy to GitHub Pages
        │
        ▼
https://<username>.github.io/<repo>/
```

A custom domain can be added later via a `CNAME` file. Netlify or Cloudflare
Pages are acceptable alternatives if branch preview links become desirable.

## Project structure

One folder per sidebar section, one Markdown file per problem or task. Only files
inside `src/content/docs/` become pages, so templates and drafts live outside it.

```
it-support-field-guide/
├── .github/workflows/deploy.yml   # build, spell check, link check, publish
├── astro.config.mjs               # site title, base, sidebar order, social links
├── package.json
├── src/
│   ├── content.config.ts          # frontmatter schema: type, tier, tags, last_reviewed, ...
│   ├── assets/                    # logo, scrubbed screenshots
│   ├── components/                # custom pieces, e.g. DecisionTree.astro (v2)
│   └── content/docs/
│       ├── index.mdx              # home: search box + section cards + recently updated
│       ├── start-here/            # helpdesk basics, troubleshooting method, talking to users
│       ├── accounts/
│       ├── windows/
│       ├── macos/
│       ├── networking/
│       ├── microsoft-365/
│       ├── hardware/
│       ├── security/
│       ├── reference/             # cheat sheets, glossary
│       └── about.md
├── templates/                     # blank troubleshooting, how-to, concept, cheatsheet, checklist
├── drafts/                        # unfinished generic articles, git-ignored
└── README.md
```

### Sidebar structure (three zones, twelve sections)

The sidebar is grouped into three zones that match how the site is used:

**Start here** (learn the basics)
- Helpdesk basics
- Troubleshooting method
- Talking to users

**Fix it: troubleshooting by area**
- Accounts and access
- Windows
- macOS
- Networking
- Microsoft 365
- Hardware and devices

**Stay safe and look it up**
- Security basics
- Cheat sheets
- Glossary

Sidebar order is configured explicitly in `astro.config.mjs` so the zones appear
in the intended learn → fix → look-up order rather than alphabetically.

### Naming rules

- Lowercase file names with hyphens: `account-locked-out.md`.
- Titles phrased the way a user reports the problem.
- One problem per file.

## Content model and schema

Every page is one of five types. Each type has a fixed, ordered set of sections.

| Page type | Use it for | Required sections, in order |
|---|---|---|
| `troubleshooting` | One problem a user reports | Symptoms · Quick checks · Fix · Escalate when · Prevent it · Related |
| `howto` | One task you perform | Before you start · Steps · Verify it worked · Related |
| `concept` | Something to understand | In one sentence · How it works · Why it matters on the helpdesk · Related |
| `cheatsheet` | Commands, shortcuts, ports | A table per topic, each row copyable |
| `checklist` | Repeatable processes | Tickable list, grouped by stage |

### Frontmatter schema

Each Markdown file begins with frontmatter. The site uses it for the sidebar,
tags, filters, and the "last reviewed" stamp. The schema is enforced in
`src/content.config.ts` (extending Starlight's `docsSchema`) so a malformed page
fails the build instead of shipping.

```yaml
---
title: User is locked out of their account
description: Unlock an AD or Entra ID account and find what keeps locking it.
type: troubleshooting        # troubleshooting | howto | concept | cheatsheet | checklist
category: accounts           # matches a sidebar section
tags: [active-directory, entra-id, passwords]
platform: [windows]          # windows | macos | ios | android | any
tier: L1                     # L1 | L2 | L3 — who normally handles it
time_to_fix: 5-10 min
last_reviewed: 2026-10-01
---
```

Schema field rules:

| Field | Type | Rule |
|---|---|---|
| `title` | string | Required. Phrased as the user reports the problem. |
| `description` | string | Required. One line; used for search snippet and meta. |
| `type` | enum | Required. One of the five page types. |
| `category` | enum | Required. Matches one sidebar section slug. |
| `tags` | string[] | Optional. Lowercase, hyphenated. Drives tag pages. |
| `platform` | enum[] | Optional. `windows` / `macos` / `ios` / `android` / `any`. |
| `tier` | enum | Optional. `L1` / `L2` / `L3`. |
| `time_to_fix` | string | Optional. Human-readable estimate. |
| `last_reviewed` | date | Required. ISO date; drives freshness stamp and "recently updated". |

### Callouts

Three callout types are used across all page types, each with an icon and label
(not colour alone, for accessibility):

- **Tip** — a shortcut. Rendered with Starlight's `:::tip` aside.
- **Warning** — can cause data loss or a security issue. Rendered with
  `:::caution` / `:::danger`.
- **Escalate** — stop and hand over to L2, including what to put in the ticket.
  A project convention using a clearly labelled aside so it reads distinctly from
  Tip and Warning.

## Page designs

The site should feel like a calm reference manual: search first, steps first,
nothing decorative in the way.

### Home (`index.mdx`)

1. Large search box at the top.
2. Cards for the three zones (Start here, Fix it, Look it up).
3. A short "Recently updated" list (driven by `last_reviewed`).

### Article page

1. Title.
2. One-line description.
3. Metadata row: tier, time to fix, platform, last reviewed — before any content.
4. The type's required sections, in order.
5. "On this page" table of contents on the right (desktop).

### About page (`about.md`)

- Who you are and why the site exists.
- An explicit note that the site contains no employer information.
- Links to GitHub and LinkedIn.

### Tag pages

- A listing per tag (e.g. all Outlook articles), built from frontmatter `tags`.
- A second way into the content besides the sidebar.

## Writing style and content conventions

- One action per numbered step.
- Exact on-screen labels in **bold**; paths written as
  **Settings > Network & internet > Wi-Fi**.
- Commands always as copyable code blocks, never only inside a screenshot.
- Plain words; any acronym spelled out the first time on each page.

## Accessibility and performance

Targets: Lighthouse performance and accessibility 90+ on every page type;
WCAG 2.2 AA.

- Text contrast at least 4.5:1.
- Full keyboard navigation and visible focus (Starlight defaults).
- Headings in logical order.
- Callouts use an icon and a label as well as colour.
- Alt text on every screenshot; images compressed through Astro's image handling.
- No tracking or ad scripts. Any future analytics must be privacy-friendly and
  cookie-free.
- Mobile: readable at 375 px wide with no sideways scrolling.

## Privacy and confidentiality (design constraints)

These are hard constraints baked into the content workflow, not optional:

- The repo holds only generic knowledge sourced from public vendor documentation
  or personal lab testing.
- `drafts/` is for unfinished *generic* articles only, and is git-ignored.
  Company-specific notes never enter the repo.
- Placeholders only: domain `contoso.com`, account `CONTOSO\jdoe`, IPs from the
  documentation range `192.0.2.0/24`.
- Screenshots recreated on a personal device or VM, never from work devices or
  internal tools.
- Defensive security only: how to spot, report, and contain — never how to bypass
  a control.

**Pre-publish checklist** (run before every publish):
- No real names, usernames, email addresses, or ticket numbers.
- No work hostnames, IP addresses, domains, Wi-Fi names, or file share paths.
- Every screenshot made on a personal device or VM.
- The fix is backed by public vendor documentation or personal testing.
- Nothing reveals a weakness in any organisation's setup.
- No passwords, license keys, or secrets anywhere in the repo, including history.

## Build and deploy configuration

### `astro.config.mjs`

- `site`: `https://<username>.github.io`
- `base`: `/<repo>/`
- Starlight integration: site title, logo, social links (GitHub, LinkedIn).
- Explicit sidebar config defining the three zones and section order.

### CI quality gates (`.github/workflows/deploy.yml`)

The workflow runs on every push to `main`:

1. Checkout + install Node LTS + `npm ci`.
2. **cspell** spell check across content.
3. `astro build` (fails on schema violations and broken internal references).
4. Broken-link check.
5. Pagefind index generation (part of the Starlight build).
6. Deploy to GitHub Pages via Astro's official action.

If any gate fails, the build stops and nothing publishes.

### Local tooling

- VS Code with Astro and markdownlint extensions.
- `cspell` for spell checking (also run in CI).
- `npm run dev` for local preview; `npm run build` to verify before pushing.

## Success criteria (measurable)

| Measure | Target |
|---|---|
| Articles live before day one | 20 or more |
| Time to find a known fix | Under 30 seconds via search |
| Lighthouse performance & accessibility | 90+ on every page type |
| Mobile layout | Readable at 375 px, no sideways scrolling |
| Hosting cost | Free tier only (custom domain optional) |
| Freshness | Every article reviewed within the last 6 months |

## Open questions (settle before/early in build)

These affect the plan and should be resolved early. They do not block scaffolding
(Phase 0), but they shape content priority and config:

1. **Internship start date** — sets the Phase 1 deadline (count back 5 weeks).
2. **Workplace OS mix** (Windows / Mac / mixed) — decides which section to write first.
3. **Identity platform** — on-prem Active Directory, Entra ID + Intune, or both.
4. **Ticketing tool** (ServiceNow / Jira SM / Freshservice / other) — only generic
   public how-tos go on the site.
5. **Public from day one, or private repo until the internship ends.**
6. **Free `github.io` address or a custom domain.**

Defaults assumed for the design until answered: public repo, free `github.io`
address, Windows-first content, both AD and Entra ID covered where relevant.
