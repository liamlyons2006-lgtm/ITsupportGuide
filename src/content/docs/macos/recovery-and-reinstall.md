---
title: Reinstall macOS from Recovery
description: Boot into macOS Recovery to repair the disk or reinstall the operating system.
type: howto
category: macos
tags: [recovery, reinstall]
platform: [macos]
tier: L1
time_to_fix: 30-60 min
last_reviewed: 2026-10-01
---

## Before you start

- Confirm there is a backup. A reinstall should not erase data, but a disk repair
  that fails can, so treat it as if data is at risk.
- Know whether the Mac has **Apple silicon** or an **Intel** chip: the way you
  enter Recovery differs.
- Have the user's account password and, if FileVault is on, the recovery key.

## Steps

1. Enter macOS Recovery:
   - **Apple silicon**: shut down, then press and hold the **power button** until
     "Loading startup options" appears, choose **Options**, then **Continue**.
   - **Intel**: restart and hold **Command (⌘) + R** until the Apple logo appears.
2. In **Disk Utility**, run **First Aid** on the startup disk to repair file
   system errors. Quit Disk Utility when done.
3. If the OS is still broken, choose **Reinstall macOS** and follow the prompts.
   Reinstalling over the top keeps user data in place.
4. Let it download and install; the Mac restarts several times.
5. Sign in and confirm the original problem is resolved.

:::caution
Only **Erase** the disk if you intend to wipe the Mac. Reinstalling macOS over
the existing system does not erase data; erasing does. Do not confuse the two.
:::

## Verify it worked

- Disk Utility First Aid reports the volume appears to be OK.
- The Mac boots normally and the user can sign in.

## Related

- [Mac login or Keychain keeps asking for a password](/ITsupportGuide/macos/login-and-keychain-issues/)
