---
title: OneDrive is not syncing
description: Diagnose a stuck OneDrive sync and get files flowing again without losing data.
type: troubleshooting
category: microsoft-365
tags: [onedrive, sync, microsoft-365]
platform: [windows, macos]
tier: L1
time_to_fix: 10-20 min
last_reviewed: 2026-10-01
---

## Symptoms

- The OneDrive icon shows a red cross, or spins on "Syncing" and never finishes.
- Recent changes do not appear on another device or on the web.
- The user sees "Processing changes" for a long time.

## Quick checks

1. Hover over the OneDrive icon and read the exact status message.
2. Confirm the device has internet and the user is signed into the correct work
   account.
3. Check whether the drive is nearly full, which can stall sync.

## Fix

1. Open OneDrive, select the icon, then **Settings (gear) > Pause syncing**, wait,
   and resume. This clears many transient stalls.
2. Check for a blocking file: names with characters OneDrive rejects, or a file
   open in another app. Close the app or rename the file.
3. If still stuck, quit OneDrive fully and reopen it.
4. As a last step, reset the OneDrive client, which re-reads the folder without
   deleting files:

   ```powershell
   & "$env:LOCALAPPDATA\Microsoft\OneDrive\onedrive.exe" /reset
   ```

   If OneDrive does not reopen on its own, start it from the Start menu.
5. Confirm a test file syncs to the web and to a second device.

:::tip
Hover over the tray icon first. The exact status message ("file in use",
"sign in again", "storage full") usually names the fix.
:::

:::caution
A reset re-downloads cloud files but does not delete them. Still, make sure the
user is not mid-edit on a large unsynced change before you reset.
:::

## Escalate when

- Sync fails with a specific error code after a reset: pass the code to L2.
- The account shows storage or licensing problems you cannot change.

## Prevent it

Keep the client updated, keep some free disk space, and steer users away from
unsupported characters in file names.

## Related

- [Outlook or Teams will not connect or load](/ITsupportGuide/microsoft-365/outlook-and-teams-fixes/)
