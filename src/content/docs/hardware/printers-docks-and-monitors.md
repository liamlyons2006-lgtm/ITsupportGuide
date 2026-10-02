---
title: Printer, dock, or external monitor is not working
description: "Work the most common desk-hardware tickets: nothing prints, no external display, dock not detected."
type: troubleshooting
category: hardware
tags: [printers, docks, monitors, peripherals]
platform: [windows, macos]
tier: L1
time_to_fix: 10-20 min
last_reviewed: 2026-10-01
---

## Symptoms

- A print job sits in the queue and never prints.
- An external monitor connected through a dock stays black.
- The dock's network, keyboard, or mouse stop working.

## Quick checks

1. Confirm power and cables: the device is on, and the cable is fully seated at
   both ends.
2. Ask what changed: a new cable, a different desk, or a recent update.
3. Confirm the user selected the right printer or input source.

## Fix

1. **Printer, nothing prints:**
   - Open the print queue, cancel stuck jobs, and try again.
   - Confirm the printer is online and not out of paper or toner.
   - Restart the print spooler:

     ```powershell
     Restart-Service spooler
     ```

2. **External monitor is black:**
   - Reseat the video cable and try a different port on the dock.
   - Press the keyboard's display-switch key, or use **Win+P** (Windows) to pick
     **Extend** or **Duplicate**.
   - Try the monitor connected directly to the laptop to isolate the dock.
3. **Dock not detected:**
   - Unplug the dock from power and from the laptop, wait, and reconnect.
   - Try a different USB-C/Thunderbolt port on the laptop.
   - Update the dock firmware and the laptop's USB and graphics drivers.

:::tip
Isolate the dock by plugging the monitor straight into the laptop. If that works,
the dock or its cable is the fault, not the display.
:::

## Escalate when

- The device is faulty after swapping cables and ports: raise a hardware
  repair or replacement.
- A network printer is unreachable for everyone: likely a print-server or network
  issue for L2.

## Prevent it

Standardise on known-good cables and docks, and keep dock firmware and graphics
drivers current.

## Related

- [Enrol a phone in MDM](/ITsupportGuide/hardware/phones-and-mdm-enrolment/)
- [PC is slow or a Windows update is stuck](/ITsupportGuide/windows/slow-pc-and-stuck-updates/)
