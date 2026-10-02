---
title: Re-register MFA on a new phone
description: Help a user set up multi-factor authentication again after they change phones.
type: troubleshooting
category: accounts
tags: [mfa, entra-id, authentication]
platform: [any]
tier: L1
time_to_fix: 5-10 min
last_reviewed: 2026-10-01
---

## Symptoms

- The user has a new phone and the authenticator app no longer prompts them.
- Sign-in asks for a code the user cannot produce.
- The user can still enter their password but is stuck at the MFA step.

## Quick checks

1. Verify the user's identity using your organisation's procedure.
2. Confirm the account is **Entra ID** (cloud) MFA, not a third-party system.
3. Ask whether they still have the old phone, or any backup method (SMS, a
   secondary number, or recovery codes).

## Fix

1. In the **Microsoft Entra admin center > Users**, open the user and go to
   **Authentication methods**.
2. Remove the old registered method (the authenticator on the previous phone).
3. Have the user install **Microsoft Authenticator** on the new phone.
4. Trigger re-registration: the user signs in and is prompted to set up a method,
   or you send them to the security info page to add the authenticator.
5. Confirm the new method completes a test sign-in.

:::tip
If the user still has the old phone and it works, moving the authenticator is
often easier than removing and re-adding. Remove the old registration only once
the new one is confirmed.
:::

:::caution[Escalate]
If the user has no working method and no recovery codes, identity recovery may
need a higher tier or a manager-approved process. Escalate rather than disabling
MFA, and note what you verified in the ticket.
:::

## Prevent it

Encourage users to register a second method (a backup number or recovery codes)
so a lost phone is an inconvenience, not a lockout.

## Related

- [Reset a user's password](/ITsupportGuide/accounts/reset-a-user-password/)
- [User is locked out of their account](/ITsupportGuide/accounts/account-locked-out/)
