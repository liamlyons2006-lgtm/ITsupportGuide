---
title: DNS, DHCP, and VPN basics
description: What these three do, so "no internet" tickets make sense instead of feeling like magic.
type: concept
category: networking
tags: [dns, dhcp, vpn]
platform: [any]
tier: L1
last_reviewed: 2026-10-01
---

## In one sentence

DHCP hands a device its address, DNS turns names into addresses, and a VPN builds
a private tunnel over a public network so remote devices reach internal systems.

## How it works

**DHCP (Dynamic Host Configuration Protocol)** gives a device joining the network
its IP address, subnet mask, gateway, and DNS servers, on a time-limited lease.
If DHCP fails, the device self-assigns a `169.254.x.x` address and cannot reach
anything useful.

**DNS (Domain Name System)** is the network's phone book. When a device wants
`example.com`, it asks a DNS server for the matching IP address. If DNS is broken,
names fail to resolve even though the connection itself is fine, which is why
"some sites work, others don't" so often means DNS.

**VPN (Virtual Private Network)** creates an encrypted tunnel from a remote device
back to the organisation, so it behaves as if it were on the internal network.
Common VPN snags: the tunnel is up but DNS still points at public servers, or
split-tunnel rules send some traffic the wrong way.

:::tip
Troubleshoot in this order: do I have an address (DHCP), can I resolve names
(DNS), and if remote, is the tunnel up (VPN). It matches how the layers depend on
each other.
:::

## Why it matters on the helpdesk

Most "no internet" tickets are really one of these three failing. Knowing which
layer is broken turns a vague problem into a specific one you can fix or escalate
with the right detail.

## Related

- [No internet or Wi-Fi keeps dropping](/ITsupportGuide/networking/no-internet-and-wifi-drops/)
- [Common ports and protocols cheat sheet](/ITsupportGuide/reference/cheat-sheets/common-ports-and-protocols/)
