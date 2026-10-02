---
title: Ticket lifecycle and SLAs
description: How a ticket moves from raised to resolved, and what an SLA actually promises.
type: concept
category: start-here
tags: [tickets, slas, process]
platform: [any]
tier: L1
last_reviewed: 2026-10-01
---

## In one sentence

A ticket is the record of one user's issue as it moves through fixed states, and
the SLA is the clock that says how fast you must respond and resolve it.

## How it works

Most ticketing tools move a ticket through the same stages, whatever they call
them:

1. **New / Open** — the ticket has been raised but no one owns it yet.
2. **In progress / Assigned** — a tech owns it and is working on it.
3. **Pending / On hold** — waiting on the user, a vendor, or a change window.
   The SLA clock often pauses here.
4. **Resolved** — a fix was applied and the tech believes it is done.
5. **Closed** — the user confirmed, or enough time passed with no reply.

A **Service Level Agreement (SLA)** sets target times for a ticket, usually split
into two clocks:

- **Response time** — how long until a human first picks it up.
- **Resolution time** — how long until it is fixed.

Targets scale with **priority**, which is usually a mix of impact (how many
people) and urgency (how badly it blocks work):

| Priority | Example | Typical response |
|---|---|---|
| P1 Critical | A whole site is offline | Minutes |
| P2 High | One team cannot work | Within an hour |
| P3 Medium | One user, has a workaround | Same day |
| P4 Low | A request, no time pressure | A few days |

:::tip
Set the priority honestly when you log a ticket. Over-flagging everything as P1
makes the real P1s harder to see.
:::

## Why it matters on the helpdesk

The SLA is how your work is measured, so keep tickets in the right state. Move a
ticket to **Pending** when you are genuinely waiting on the user, update it every
time something changes, and never resolve a ticket you have not confirmed is
actually fixed.

## Related

- [L1, L2, and L3 support, and escalation](/ITsupportGuide/start-here/helpdesk-basics/support-tiers-and-escalation/)
- [Writing good ticket notes](/ITsupportGuide/start-here/talking-to-users/writing-good-ticket-notes/)
