---
title: No internet or Wi-Fi keeps dropping
description: Work a "no internet" ticket from the device outward and stabilise a dropping Wi-Fi connection.
type: troubleshooting
category: networking
tags: [wifi, connectivity, dns]
platform: [windows, macos]
tier: L1
time_to_fix: 10-20 min
last_reviewed: 2026-10-01
---

## Symptoms

- The device shows "No internet" or a warning triangle on the network icon.
- Wi-Fi connects, then drops after a few minutes.
- Some sites load but others, or email, do not.

## Quick checks

1. Ask whether it affects one device or everyone nearby. Many devices down points
   to the network, not the PC.
2. Confirm the device is on the right network, not a guest or neighbour's SSID.
3. Check whether other sites or apps work, which hints at DNS rather than a dead
   link.

## Fix

1. Toggle Wi-Fi off and on, then reconnect. On a wired PC, reseat the cable.
2. Confirm the device has a real IP address, not a `169.254.x.x`
   self-assigned one:

   ```powershell
   ipconfig /all
   ```

   A `169.254` address means DHCP failed; see [DNS, DHCP, and VPN
   basics](/ITsupportGuide/networking/dns-dhcp-and-vpn-basics/).
3. Renew the lease and flush DNS:

   ```powershell
   ipconfig /release
   ipconfig /renew
   ipconfig /flushdns
   ```

4. Test name resolution versus raw connectivity:

   ```powershell
   ping 1.1.1.1
   nslookup example.com
   ```

   If the IP ping works but `nslookup` fails, it is a DNS problem.
5. For repeated drops, forget and rejoin the Wi-Fi network, and update the
   wireless driver.

:::tip
"Some sites work, others don't" is almost always DNS. Jump to the `nslookup`
test early.
:::

## Escalate when

- A whole area or site has no connectivity: this is a network or ISP issue for
  L2, not a device fix.
- The device gets an IP and resolves DNS but still cannot reach internal systems:
  possible routing, firewall, or VPN issue.

## Prevent it

Keep wireless drivers updated and avoid saving overlapping guest and corporate
SSIDs on the same device, which can cause it to hop between them.

## Related

- [DNS, DHCP, and VPN basics](/ITsupportGuide/networking/dns-dhcp-and-vpn-basics/)
- [Common ports and protocols cheat sheet](/ITsupportGuide/reference/cheat-sheets/common-ports-and-protocols/)
