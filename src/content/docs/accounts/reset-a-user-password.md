---
title: Reset a user's password
description: Reset an Active Directory or Entra ID password safely and get the user signed in again.
type: howto
category: accounts
tags: [active-directory, entra-id, passwords]
platform: [windows]
tier: L1
time_to_fix: 5-10 min
last_reviewed: 2026-10-01
---

## Before you start

- Verify the user's identity using your organisation's procedure. Never skip
  this: a password reset is a classic social-engineering target.
- Know whether the account lives in on-premises **Active Directory**, **Entra ID**
  (cloud), or both.

## Steps

1. Find the account in the right place:
   - On-premises: **Active Directory Users and Computers**, find the user.
   - Cloud: the **Microsoft Entra admin center > Users**.
2. Reset the password:
   - In AD: right-click the user, choose **Reset Password**.
   - In PowerShell with the ActiveDirectory module:

     ```powershell
     Set-ADAccountPassword -Identity jdoe -Reset
     ```

3. Tick **User must change password at next logon** so the user sets their own.
4. Give the temporary password over a trusted channel, never in a ticket note or
   email body.
5. Ask the user to sign in and set a new password immediately.

:::caution
Set a strong, random temporary password and share it through a channel the
verified user controls. Do not reuse a predictable pattern across resets.
:::

## Verify it worked

- The user signs in with the temporary password and is prompted to change it.
- The user can reach email and their usual apps afterwards.

## Related

- [User is locked out of their account](/ITsupportGuide/accounts/account-locked-out/)
- [Re-register MFA on a new phone](/ITsupportGuide/accounts/re-register-mfa-on-a-new-phone/)
