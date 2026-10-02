---
title: Mac login or Keychain keeps asking for a password
description: Fix a Mac that will not accept a login password or keeps prompting for the Keychain.
type: troubleshooting
category: macos
tags: [keychain, login, passwords]
platform: [macos]
tier: L1
time_to_fix: 10-20 min
last_reviewed: 2026-10-01
---

## Symptoms

- The Mac rejects a login password the user is sure is correct.
- After a password change, apps repeatedly ask to unlock the **login Keychain**.
- Wi-Fi, mail, or Safari keep prompting for saved passwords.

## Quick checks

1. Verify the user's identity using your organisation's procedure.
2. Confirm **Caps Lock** is off and the correct keyboard layout is selected at
   the login screen.
3. Ask whether the account password was changed recently, especially from another
   device.

## Fix

1. If login fails outright, check whether this is a local account or a
   directory/managed account, and reset the password through the correct system.
2. For repeated Keychain prompts after a password change, the login Keychain
   password no longer matches the account password. In **Keychain Access**
   (or **Passwords** on newer macOS), update the login Keychain password to match
   the new account password.
3. If the Keychain is corrupt or the old password is unknown, create a new login
   Keychain: in **Keychain Access > Settings**, reset the default keychain. The
   user will re-enter saved passwords as apps ask.
4. Reboot and confirm the prompts stop.

:::tip
Keychain prompts almost always follow a recent password change. Line up the
login Keychain password with the new account password and the prompts stop.
:::

:::caution
Resetting the login Keychain discards saved passwords in it. Warn the user they
will need to re-enter Wi-Fi, mail, and app passwords afterwards.
:::

## Escalate when

- The Mac is managed by MDM and login is blocked by a policy you cannot change.
- FileVault recovery is needed and you do not hold the recovery key: that belongs
  with L2 or the owning team.

## Prevent it

When changing a Mac user's password, change it on the Mac itself where possible,
so the account and login Keychain passwords stay in step.

## Related

- [Reset a user's password](/ITsupportGuide/accounts/reset-a-user-password/)
- [Reinstall macOS from Recovery](/ITsupportGuide/macos/recovery-and-reinstall/)
