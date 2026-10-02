// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// NOTE: Update `site` and `base` once the GitHub repo exists.
// For a project site published at https://<username>.github.io/<repo>/ :
//   site: 'https://<username>.github.io'
//   base: '/<repo>/'
// For a user/organisation site (repo named <username>.github.io), drop `base`.
const GITHUB_USERNAME = 'liamlyons2006-lgtm';
// IMPORTANT: internal links in the content are written with this base prefix,
// e.g. /ITsupportGuide/accounts/... . If you change REPO_NAME, do a
// find-and-replace of the old base in src/content/docs so links keep resolving.
const REPO_NAME = 'ITsupportGuide';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${REPO_NAME}/`,
  integrations: [
    starlight({
      title: 'IT Support Field Guide',
      description:
        'Short, scannable IT troubleshooting articles, cheat sheets, and helpdesk basics.',
      // Fails the build if any internal link is broken (CI quality gate).
      // In GitHub Actions, failures are written to the job summary automatically.
      plugins: [starlightLinksValidator()],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}`,
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/liam-lyons2/',
        },
      ],
      // Explicit sidebar: three zones, in learn -> fix -> look-up order.
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Helpdesk basics', items: [{ autogenerate: { directory: 'start-here/helpdesk-basics' } }] },
            { label: 'Troubleshooting method', items: [{ autogenerate: { directory: 'start-here/troubleshooting-method' } }] },
            { label: 'Talking to users', items: [{ autogenerate: { directory: 'start-here/talking-to-users' } }] },
          ],
        },
        {
          label: 'Fix it: troubleshooting by area',
          items: [
            { label: 'Accounts and access', items: [{ autogenerate: { directory: 'accounts' } }] },
            { label: 'Windows', items: [{ autogenerate: { directory: 'windows' } }] },
            { label: 'macOS', items: [{ autogenerate: { directory: 'macos' } }] },
            { label: 'Networking', items: [{ autogenerate: { directory: 'networking' } }] },
            { label: 'Microsoft 365', items: [{ autogenerate: { directory: 'microsoft-365' } }] },
            { label: 'Hardware and devices', items: [{ autogenerate: { directory: 'hardware' } }] },
          ],
        },
        {
          label: 'Stay safe and look it up',
          items: [
            { label: 'Security basics', items: [{ autogenerate: { directory: 'security' } }] },
            { label: 'Cheat sheets', items: [{ autogenerate: { directory: 'reference/cheat-sheets' } }] },
            { label: 'Glossary', items: [{ autogenerate: { directory: 'reference/glossary' } }] },
          ],
        },
      ],
    }),
  ],
});
