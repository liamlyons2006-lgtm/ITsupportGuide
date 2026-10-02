---
title: Repair Windows with sfc, DISM, and Safe Mode
description: Repair corrupted system files and boot into Safe Mode to isolate a problem.
type: howto
category: windows
tags: [repair, system-files, safe-mode]
platform: [windows]
tier: L1
time_to_fix: 20-40 min
last_reviewed: 2026-10-01
---

## Before you start

- These tools repair Windows system files and the component store. Use them when
  apps crash, features misbehave, or an update will not install.
- Run the commands from an **elevated** terminal (Run as administrator).

## Steps

1. Run **System File Checker** to repair protected system files:

   ```powershell
   sfc /scannow
   ```

2. If `sfc` reports it could not fix everything, repair the component store with
   **DISM**, then run `sfc` again:

   ```powershell
   DISM /Online /Cleanup-Image /RestoreHealth
   sfc /scannow
   ```

3. To isolate whether a driver or startup app is the cause, boot into **Safe
   Mode**: **Settings > System > Recovery > Advanced startup > Restart now**, then
   **Troubleshoot > Advanced options > Startup Settings > Restart**, and choose
   **Safe Mode with Networking**.
4. Test the problem in Safe Mode. If it disappears, a third-party driver or
   startup item is likely to blame.
5. Reboot normally to leave Safe Mode.

:::tip
Run `DISM /RestoreHealth` before the second `sfc` pass: `sfc` repairs from the
component store, so a healthy store makes the repair succeed.
:::

:::caution
`DISM /RestoreHealth` needs a working internet connection or a known-good source
to pull replacement files. On a metered or offline connection it may stall.
:::

## Verify it worked

- `sfc /scannow` reports no integrity violations, or that it repaired them.
- The original symptom (crashing app, failing update) is gone.

## Related

- [PC is slow or a Windows update is stuck](/ITsupportGuide/windows/slow-pc-and-stuck-updates/)
- [CMD and PowerShell cheat sheet](/ITsupportGuide/reference/cheat-sheets/cmd-and-powershell/)
