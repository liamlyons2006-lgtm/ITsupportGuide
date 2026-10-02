---
title: Enrol a phone in MDM
description: Enrol an iOS or Android device into mobile device management so it can reach work resources.
type: howto
category: hardware
tags: [mdm, intune, mobile, enrolment]
platform: [ios, android]
tier: L1
time_to_fix: 15-30 min
last_reviewed: 2026-10-01
---

## Before you start

- Confirm the user is licensed for mobile access and the device meets the minimum
  OS version.
- Explain what enrolment does and does not do: it applies work policies and lets
  IT manage work data, not personal photos or messages.
- Have the user's work account credentials and a working MFA method ready.

## Steps

1. Install the company portal or management app your organisation uses (for
   Microsoft Intune, this is the **Company Portal** app).
2. Open the app and sign in with the work account; complete MFA if prompted.
3. Follow the prompts to register the device and accept the required policies.
4. Wait for policies to apply. The device may install a work profile, set a
   passcode requirement, or deploy work apps.
5. Confirm a work app (for example, Outlook) signs in and syncs.

:::tip
On Android, "work profile" enrolment keeps work and personal apps separate, so
personal data stays private. Reassure users who worry about being monitored.
:::

:::caution
Enrolment can enforce a device passcode and allow a remote wipe of **work** data.
Make sure the user understands this before enrolling a personal device.
:::

## Verify it worked

- The device appears as compliant in the management console.
- A work app signs in and syncs on the device.

## Related

- [Re-register MFA on a new phone](/ITsupportGuide/accounts/re-register-mfa-on-a-new-phone/)
- [Printer, dock, or external monitor is not working](/ITsupportGuide/hardware/printers-docks-and-monitors/)
