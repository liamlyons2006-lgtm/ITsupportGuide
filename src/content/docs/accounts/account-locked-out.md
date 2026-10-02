---
title: User is locked out of their account
description: Unlock an Active Directory account and find what keeps locking it.
type: troubleshooting
category: accounts
tags: [active-directory, passwords, lockout]
platform: [windows]
tier: L1
time_to_fix: 5-10 min
last_reviewed: 2026-10-01
---

## Symptoms

- Windows shows "The referenced account is currently locked out and may not be
  logged on to."
- The user cannot sign in to Windows, email, or VPN after several password
  attempts.

## Quick checks

1. Verify the user's identity using your organisation's procedure. Never skip
   this.
2. Confirm the account is locked, not disabled or expired.
3. Ask: "Did you change your password recently? Is work email set up on your
   phone?"

## Fix

1. Open **Active Directory Users and Computers** and find the user.
2. Open **Properties > Account**, tick **Unlock account**, select **OK**.

   Or, in PowerShell with the ActiveDirectory module:

   ```powershell
   Unlock-ADAccount -Identity jdoe
   ```

3. Ask the user to sign in once, slowly, with their current password.

:::tip
List every locked account at once with `Search-ADAccount -LockedOut`.
:::

## Escalate when

- It locks again within minutes: an old password is saved somewhere. L2 can
  trace the source device in the domain controller Security log (event ID 4740).
- Many accounts lock at the same moment: possible password-spraying attack.
  Report it to the security team straight away.

## Prevent it

After a password change, update it everywhere it is saved: phone mail app, Wi-Fi,
mapped drives, and **Control Panel > Credential Manager**.

## Related

- Reset a user's password
- Re-register MFA on a new phone
