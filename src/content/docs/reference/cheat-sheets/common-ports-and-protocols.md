---
title: Common ports and protocols cheat sheet
description: The ports and protocols an L1 tech sees most often, with what each one is for.
type: cheatsheet
category: reference
tags: [ports, protocols, networking]
platform: [any]
tier: L1
last_reviewed: 2026-10-01
---

A quick reference for the ports and protocols that come up on everyday tickets.
"TCP" is connection-based; "UDP" is connectionless.

## Web and remote access

| Port | Protocol | Used for |
|---|---|---|
| 80 | HTTP (TCP) | Unencrypted web traffic |
| 443 | HTTPS (TCP) | Encrypted web traffic |
| 3389 | RDP (TCP) | Windows Remote Desktop |
| 22 | SSH (TCP) | Secure shell and secure file transfer |

## Email

| Port | Protocol | Used for |
|---|---|---|
| 25 | SMTP (TCP) | Mail server to mail server |
| 587 | SMTP (TCP) | Sending mail from a client (submission) |
| 993 | IMAP over TLS (TCP) | Reading mail, synced across devices |
| 995 | POP3 over TLS (TCP) | Reading mail, downloaded to one device |

## Core network services

| Port | Protocol | Used for |
|---|---|---|
| 53 | DNS (UDP/TCP) | Resolving names to IP addresses |
| 67 / 68 | DHCP (UDP) | Handing out IP addresses |
| 123 | NTP (UDP) | Time synchronisation |
| 389 | LDAP (TCP) | Directory lookups (unencrypted) |
| 636 | LDAPS (TCP) | Directory lookups (encrypted) |
| 445 | SMB (TCP) | Windows file and printer sharing |

## Related

- [DNS, DHCP, and VPN basics](/ITsupportGuide/networking/dns-dhcp-and-vpn-basics/)
- [CMD and PowerShell cheat sheet](/ITsupportGuide/reference/cheat-sheets/cmd-and-powershell/)
