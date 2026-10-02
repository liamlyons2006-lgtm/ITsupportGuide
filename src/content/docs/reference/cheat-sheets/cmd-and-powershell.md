---
title: CMD and PowerShell cheat sheet
description: The everyday Windows command-line commands an L1 tech reaches for, in copyable rows.
type: cheatsheet
category: reference
tags: [cmd, powershell, windows, commands]
platform: [windows]
tier: L1
last_reviewed: 2026-10-01
---

Each command sits in its own row so you can copy it straight into a terminal. Run
an elevated terminal (Run as administrator) for anything that changes system
state.

## Network

| Command | What it does |
|---|---|
| `ipconfig /all` | Show full IP configuration, including DNS and DHCP |
| `ipconfig /release` | Release the current DHCP lease |
| `ipconfig /renew` | Request a new DHCP lease |
| `ipconfig /flushdns` | Clear the DNS resolver cache |
| `ping 1.1.1.1` | Test raw connectivity to an IP |
| `nslookup example.com` | Test DNS name resolution |
| `tracert example.com` | Show the route packets take to a host |

## System and files

| Command | What it does |
|---|---|
| `sfc /scannow` | Repair protected Windows system files |
| `DISM /Online /Cleanup-Image /RestoreHealth` | Repair the Windows component store |
| `chkdsk C: /f` | Check and fix file-system errors on C: (needs a reboot) |
| `systeminfo` | Print OS, uptime, and hardware summary |
| `gpupdate /force` | Reapply Group Policy immediately |

## Services and processes (PowerShell)

| Command | What it does |
|---|---|
| `Get-Service spooler` | Show the status of a service |
| `Restart-Service spooler` | Restart the print spooler |
| `Get-Process \| Sort-Object CPU -Descending` | List processes by CPU use |
| `Stop-Process -Name notepad` | Stop a process by name |

## Active Directory (PowerShell, needs the module)

| Command | What it does |
|---|---|
| `Unlock-ADAccount -Identity jdoe` | Unlock a locked account |
| `Search-ADAccount -LockedOut` | List all locked accounts |
| `Set-ADAccountPassword -Identity jdoe -Reset` | Reset a user's password |

## Related

- [Common ports and protocols cheat sheet](/ITsupportGuide/reference/cheat-sheets/common-ports-and-protocols/)
- [Repair Windows with sfc, DISM, and Safe Mode](/ITsupportGuide/windows/sfc-dism-and-safe-mode/)
