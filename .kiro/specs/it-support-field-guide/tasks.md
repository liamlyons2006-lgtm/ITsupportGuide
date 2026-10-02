# Tasks: IT Support Field Guide

Build plan derived from `design.md` and the four-phase plan in the spec. Four
phases, each ending in a visible gate: the site is live, the core content is in,
every page is safe to publish, the project is portfolio-ready.

Target before day one: **20 or more articles live, found in under 30 seconds via
search.** Starter content below totals 24 pages (two per section) to clear the
20-article target with margin.

Convention: check a box when the sub-task is done. Each top-level task names the
design section it implements.

---

## Phase 0 — Set up (Gate: live URL with working search)

- [ ] 1. Scaffold the Astro + Starlight project
  - Run `npm create astro@latest -- --template starlight` into the workspace.
  - Confirm Node LTS + npm, install dependencies, verify `npm run dev` serves locally.
  - Disable Astro telemetry if desired.
  - _Design: Architecture, Project structure_

- [ ] 2. Initialise the Git repo and push to GitHub
  - `git init`, create the public (or private, per open question) GitHub repo.
  - Add `.gitignore` including `drafts/` and build output.
  - Push initial scaffold to `main`.
  - _Design: Project structure, Privacy and confidentiality_

- [ ] 3. Add the GitHub Pages deploy workflow
  - Add `.github/workflows/deploy.yml` from Astro's official GitHub Pages guide.
  - In repo **Settings > Pages**, set the source to **GitHub Actions**.
  - _Design: Deployment pipeline, Build and deploy configuration_

- [ ] 4. Configure `astro.config.mjs`
  - Set `site` to `https://<username>.github.io` and `base` to `/<repo>/`.
  - Set site title, logo, and social links (GitHub, LinkedIn).
  - Define the explicit sidebar: three zones, twelve sections, in learn → fix →
    look-up order.
  - _Design: Build and deploy configuration, Sidebar structure_

- [ ] 5. Verify the Phase 0 gate
  - Confirm the Action builds and publishes to the github.io URL.
  - Confirm the sidebar renders the three zones in order.
  - Confirm search (Ctrl+K / `/`) opens and returns results.
  - _Gate: Live URL with working search_

---

## Phase 1 — Core content (Gate: 20+ articles live before day one)

### Schema and templates

- [ ] 6. Define the frontmatter schema
  - In `src/content.config.ts`, extend Starlight's `docsSchema` with: `type`,
    `category`, `tags`, `platform`, `tier`, `time_to_fix`, `last_reviewed`.
  - Apply the field rules and enums from the design; confirm a malformed page
    fails `astro build`.
  - _Design: Frontmatter schema_

- [ ] 7. Create the five page templates in `templates/`
  - `troubleshooting`: Symptoms · Quick checks · Fix · Escalate when · Prevent it · Related
  - `howto`: Before you start · Steps · Verify it worked · Related
  - `concept`: In one sentence · How it works · Why it matters on the helpdesk · Related
  - `cheatsheet`: a table per topic, each row copyable
  - `checklist`: tickable list, grouped by stage
  - Each with correct frontmatter stub.
  - _Design: Content model and schema_

- [ ] 8. Establish the Tip / Warning / Escalate callout convention
  - Map Tip → `:::tip`, Warning → `:::caution`/`:::danger`.
  - Define the Escalate aside convention (icon + label, distinct from the others).
  - Document usage in the template files.
  - _Design: Callouts, Accessibility and performance_

### Pages

- [ ] 9. Build the Home page (`index.mdx`)
  - Large search box at the top, three zone cards, "Recently updated" list
    driven by `last_reviewed`.
  - _Design: Page designs — Home_

- [ ] 10. Build the About page (`about.md`)
  - Who/why, explicit note that the site holds no employer information, links to
    GitHub and LinkedIn.
  - _Design: Page designs — About_

- [ ] 11. Add the article metadata row to the article layout
  - Surface tier, time to fix, platform, and last reviewed before any content.
  - _Design: Page designs — Article page_

- [ ] 12. Build tag pages
  - A listing per tag from frontmatter `tags` (e.g. all Outlook articles).
  - _Design: Page designs — Tag pages_

### Starter articles (24 pages, two per section)

- [ ] 13. Publish the sample article as the model
  - `accounts/account-locked-out.md` — the complete troubleshooting example from
    the spec. Confirm search finds it.
  - _Design: Content model; spec Sample article_

- [ ] 14. Write Start here (3 sections)
  - Helpdesk basics: ticket lifecycle & SLAs; L1/L2/L3 and escalation.
  - Troubleshooting method: the 7-step method; asking the right questions.
  - Talking to users: phone & chat openers; writing good ticket notes.

- [ ] 15. Write Accounts and access
  - Password resets / lockouts (lockout already covered by task 13); MFA re-enrolment.

- [ ] 16. Write Windows
  - Slow PC / stuck updates; `sfc`, `DISM`, Safe Mode.

- [ ] 17. Write macOS
  - Login & Keychain issues; recovery and reinstall.

- [ ] 18. Write Networking
  - No internet / Wi-Fi drops; DNS, DHCP, and VPN.

- [ ] 19. Write Microsoft 365
  - Outlook & Teams fixes; OneDrive sync problems.

- [ ] 20. Write Hardware and devices
  - Printers, docks, monitors; phones & MDM enrolment.

- [ ] 21. Write Security basics
  - Reporting phishing; suspected malware triage. (Defensive security only.)

- [ ] 22. Write Reference (cheat sheets + glossary)
  - Cheat sheets: CMD & PowerShell; common ports and protocols.
  - Glossary: IT terms A–Z; acronyms you will hear.

- [ ] 23. Verify the Phase 1 gate
  - Count published articles: 20 or more.
  - Spot-check: a known fix is findable via search in under 30 seconds.
  - _Gate: 20+ articles live before day one_

---

## Phase 2 — On the job (Gate: every page passes the privacy check)

- [ ] 24. Add CI quality gates to the workflow
  - Add `cspell` spell check and a broken-link check to `deploy.yml`, before deploy.
  - Confirm a failing gate blocks publish.
  - _Design: CI quality gates_

- [ ] 25. Run the pre-publish privacy checklist on every page
  - No real names/usernames/emails/ticket numbers; no work hostnames/IPs/domains/
    Wi-Fi names/share paths; screenshots from personal device/VM; fixes backed by
    public docs or personal testing; nothing reveals an org weakness; no secrets
    anywhere in history.
  - Replace any specifics with placeholders (`contoso.com`, `CONTOSO\jdoe`,
    `192.0.2.0/24`).
  - _Design: Privacy and confidentiality_

- [ ] 26. Verify accessibility and performance targets
  - Run Lighthouse on each page type (home, article, tag, about): 90+ performance
    and accessibility.
  - Check contrast 4.5:1, keyboard nav, visible focus, heading order, alt text,
    callout icon+label, and 375 px mobile with no sideways scrolling.
  - _Design: Accessibility and performance, Success criteria_

- [ ] 27. Establish the ongoing writing cadence
  - During the internship, add one or two new generic pages a week, written up
    afterwards from public sources with all details stripped.
  - _Design: Privacy and confidentiality; spec Build plan_

---

## Phase 3 — Polish (portfolio-ready)

- [ ] 28. Write the README
  - What the project is, the stack, how to run it locally, and the privacy stance.
  - _Design: Overview; audience "Recruiters"_

- [ ] 29. Freshness pass
  - Confirm every article's `last_reviewed` is within the last 6 months.
  - _Design: Success criteria — Freshness_

- [ ] 30. Portfolio linking (optional)
  - Link the live site and repo from CV/LinkedIn. Consider a custom domain
    (`CNAME`) if desired.
  - _Design: Open questions — custom domain_

---

## Deferred to v2 / later (not part of this plan)

Tracked here so they are not forgotten, but intentionally out of scope now:

- Interactive troubleshooting trees (yes/no click-through) — v2
- Printable checklists (print stylesheet) — v2
- Glossary terms with hover definitions — v2
- Flashcards for certification prep (e.g. CompTIA A+) — v2
- Offline support (installable web app) — Later
