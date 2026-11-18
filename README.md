# Ridgecove: Website

A one-page site for Ridgecove, which provides Solo and self-directed 401(k) plan support from an
office in San Francisco, California (Financial District). It's static with no dependencies, built with Node and hosted on
**Cloudflare** (Workers static assets via `wrangler.jsonc`, or Pages).

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check (fails while placeholders remain)
```

## Deploy to Cloudflare

**Workers (current setup):** Workers & Pages → Create → Import a repository → this repo.
Build command `npm run build`, deploy command `npx wrangler deploy`. `wrangler.jsonc` serves `./dist`.
Every push to the branch redeploys automatically.

**Pages (alternative):** Build command `node build.mjs`, output directory `dist`.

Security headers and redirects live in `src/static/_headers` and `src/static/_redirects`, which
are copied into `dist/` and applied by Cloudflare. After the first deploy, set `site.url` in
`site.config.mjs` to the live address (or custom domain) so canonicals, the sitemap and the form's
thank-you redirect are correct.

## Contact form (n8n)

The meeting form posts to an **n8n Webhook**, and the n8n workflow routes each submission
(email, sheet, CRM) and redirects the visitor to `/thank-you/`. Put the webhook's production URL
in `form.webhookUrl` in `site.config.mjs`. Until then the form shows a "not connected yet" notice
and won't send. Setup steps: `docs/N8N-FORM-SETUP.md`.

## Office

**369 Pine St, San Francisco, CA 94104** (storefront office). Phone: **(628) 305-0199**.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under California law,
plus `/thank-you/` and `404.html`.

## Design

- **Palette:** deep cove `#14303A`, cove teal `#2C7A6A` (buttons, white text), golden grass `#E3B04B`, pale moss `#CFE0A8`, fog `#F7F9F6`
- **Type:** Petrona (display) and Schibsted Grotesk (text), both self-hosted
- **Logo:** a round badge with a golden sun over layered ridges folding down around a sheltered cove (`src/brand.mjs`)
- **Hero:** slow-zoom photo of the Golden Gate Bridge from a Marin Headlands ridge

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
