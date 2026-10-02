---
title: Outlook or Teams will not connect or load
description: Clear the common causes of Outlook and Teams failing to connect, sync, or start.
type: troubleshooting
category: microsoft-365
tags: [outlook, teams, microsoft-365]
platform: [windows, macos]
tier: L1
time_to_fix: 10-20 min
last_reviewed: 2026-10-01
---

## Symptoms

- Outlook shows "Disconnected" or "Trying to connect" and mail will not send or
  receive.
- Teams is stuck on the loading screen, or shows messages that will not update.
- The user is prompted to sign in repeatedly.

## Quick checks

1. Confirm the device has working internet: can the user load a website?
2. Check the Microsoft 365 Service health or ask whether colleagues see the same
   thing; it may be a service-side outage.
3. Confirm the user is signed in with the correct work account, not a personal
   one.

## Fix

1. Fully quit and reopen the app. For Teams, sign out and back in.
2. In Outlook, check the connection state: **File > Office Account** confirms the
   signed-in identity; the status bar shows **Connected** or **Disconnected**.
3. For repeated sign-in prompts, clear cached credentials in **Control Panel >
   Credential Manager** (Windows), then reopen the app and sign in once.
4. For Teams specifically, clearing the cache resolves many stuck-UI problems.
   Quit Teams, then clear its cache folder and restart it:

   ```powershell
   Remove-Item "$env:APPDATA\Microsoft\Teams\*" -Recurse -Force
   ```

5. If Outlook still will not connect, repair the Office installation from
   **Settings > Apps**, choosing **Quick Repair** first.

:::tip
Check Microsoft 365 Service health before deep troubleshooting. If it is a
service outage, the fix is to wait and keep the user informed, not to rebuild
their profile.
:::

:::caution
Clearing the Teams cache signs the user out and removes local cached data. It
does not delete server-side messages, but warn the user they will re-sign in.
:::

## Escalate when

- Many users across the organisation are affected at once and service health is
  green: possible tenant or configuration issue for L2.
- Mail flow fails with specific transport errors: pass the error to L2 rather
  than guessing.

## Prevent it

Keep Office updated, and avoid mixing personal and work accounts in the same
profile.

## Related

- [OneDrive is not syncing](/ITsupportGuide/microsoft-365/onedrive-sync-problems/)
- [Re-register MFA on a new phone](/ITsupportGuide/accounts/re-register-mfa-on-a-new-phone/)
