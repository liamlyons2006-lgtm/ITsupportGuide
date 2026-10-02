---
title: A user reports a phishing email
description: Help a user report a suspicious email safely and contain it if they already clicked.
type: troubleshooting
category: security
tags: [phishing, email, security]
platform: [any]
tier: L1
time_to_fix: 10-20 min
last_reviewed: 2026-10-01
---

## Symptoms

- A user forwards an email asking "is this real?"
- The message pressures the user to act fast, click a link, or share credentials.
- The sender or links look slightly off: misspelled domains, mismatched display
  names, unexpected attachments.

## Quick checks

1. Tell the user **not** to click links, open attachments, or reply.
2. Ask whether they already clicked a link or entered any details. This changes
   everything.
3. Note the sender address, subject, and time so you can report it accurately.

## Fix

1. Have the user report the message with the built-in button if your organisation
   has one (for example, the **Report** button in Outlook), which routes it to
   the security team.
2. If there is no button, follow your organisation's reporting process. Preserve
   the original message; do not delete it until it is reported.
3. If the user **did** click or enter credentials, treat it as an incident:
   - Reset the user's password immediately and sign them out of all sessions.
   - Report it to the security team straight away.
4. Confirm the message is reported and the user knows what to watch for.

:::caution[Escalate]
If the user entered credentials, approved an MFA prompt, or ran an attachment,
escalate to the security team right away. In the ticket, include the sender,
timestamp, what the user clicked or entered, and the actions you have already
taken.
:::

:::tip
Teach the quick tells: urgency and threats, a mismatch between the display name
and the real address, and links that do not go where they claim. Hover to see the
real URL before clicking.
:::

## Prevent it

Encourage users to report rather than delete, so the security team can block
similar messages for everyone. Never shame someone for clicking: it discourages
reporting, which is what keeps everyone safe.

## Related

- [Suspected malware triage](/ITsupportGuide/security/suspected-malware-triage/)
- [Reset a user's password](/ITsupportGuide/accounts/reset-a-user-password/)
