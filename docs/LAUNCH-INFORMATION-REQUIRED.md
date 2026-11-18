# Information Required Before Launch

Run `node build.mjs` to see what's still missing. Nothing on the site has been invented.

## Already set

- [x] Name: **Ridgecove**
- [x] Phone: **(628) 305-0199**
- [x] Site URL: `https://ridgecove.kevin-c4h.workers.dev`
- [x] Hours: **Monday–Friday, 9:00 AM – 5:00 PM (Pacific Time)**, office meetings by appointment
- [x] Business type: **storefront office** at **369 Pine St, San Francisco, CA 94104** (Google Business Profile "Local store")
- [x] Services confirmed: plan setup, records and valuations, Form 5500-EZ preparation, ongoing
      support, Self-Directed and Solo 401(k) education, and office meetings
- [x] Role: administrative support alongside the client's plan provider, at the sponsor's
      direction. The business is not a fiduciary, trustee, custodian, registered investment
      adviser or broker-dealer.
- [x] Format: a one-page site, with separate Privacy, Terms and Disclosures pages

## Required

| Item | Notes |
|---|---|
| **Contact form (n8n)** | Create the n8n workflow (see `docs/N8N-FORM-SETUP.md`) and put its production webhook URL in `form.webhookUrl` in `site.config.mjs`. Until then the form shows a notice and doesn't send. |
| **Register the business name** | California Fictitious Business Name statement with the San Francisco County Clerk (City and County of San Francisco), then publish it in a local newspaper once a week for 4 weeks. Then set `business.publicNameConfirmed: true`. Check the CA Secretary of State, the USPTO and Google Maps for "Ridgecove" conflicts first. |

Optional: `business.geo` with the office's real coordinates.

## Recommended before going public

- [ ] An attorney has reviewed the Privacy Policy, Terms and Disclosures (California law, administrative-services wording).
- [ ] An ERISA attorney has confirmed the administrative-services role.
- [ ] n8n: a test submission from the live site landed on the thank-you page and ran the workflow.
- [ ] Cloudflare Pages: the site is deployed. Then add the Search Console verification code to `site.googleSiteVerification`.

## Optional (hidden until set)

Business email, owner name, company history and credentials.
