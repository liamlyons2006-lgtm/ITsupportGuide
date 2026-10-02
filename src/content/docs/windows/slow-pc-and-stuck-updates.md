---
title: PC is slow or a Windows update is stuck
description: Work through a sluggish Windows PC and unstick an update that will not finish.
type: troubleshooting
category: windows
tags: [performance, windows-update]
platform: [windows]
tier: L1
time_to_fix: 15-30 min
last_reviewed: 2026-10-01
---

## Symptoms

- The PC is slow to log in or launch apps.
- A Windows update sits at a percentage for a long time, or keeps failing.
- The fan runs constantly and the machine feels hot.

## Quick checks

1. Ask what changed: a recent update, a new program, or "it's always been slow"?
2. Confirm it is slow at the desktop, not just one website or app.
3. Check free disk space: a nearly full system drive slows everything down.

## Fix

1. Restart the PC. Many "slow" machines have simply not rebooted in weeks.
2. Open **Task Manager** (Ctrl+Shift+Esc), sort by **CPU**, then **Memory**, and
   note what is using the most. Close or uninstall anything unexpected.
3. Check **Settings > System > Storage** and free space if the drive is nearly
   full.
4. For a stuck update, let it run for a while first, then if it is truly frozen:

   ```powershell
   # Stop the update services, clear the cache, restart them
   Stop-Service wuauserv, bits
   Rename-Item "$env:windir\SoftwareDistribution" SoftwareDistribution.old
   Start-Service wuauserv, bits
   ```

5. Reboot and check for updates again from **Settings > Windows Update**.

:::tip
Reboot before you investigate. It is faster than any analysis and fixes a large
share of "slow PC" tickets.
:::

:::caution
Do not kill a Windows update that is genuinely mid-install. Give it time, and
only clear the cache if it is clearly stuck (no disk activity for a long while).
:::

## Escalate when

- The disk shows failing SMART health or constant 100% disk usage after basics.
- Updates keep failing with the same error code after clearing the cache: pass
  the code to L2.

## Prevent it

Schedule restarts, keep the system drive from filling up, and let updates install
on a regular cadence rather than deferring them for months.

## Related

- [Repair Windows with sfc, DISM, and Safe Mode](/ITsupportGuide/windows/sfc-dism-and-safe-mode/)
- [The 7-step troubleshooting method](/ITsupportGuide/start-here/troubleshooting-method/the-7-step-method/)
