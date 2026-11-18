/**
 * ============================================================================
 *  RIDGECOVE — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://ridgecove.kevin-c4h.workers.dev', // no trailing slash — confirm after first Cloudflare deploy
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Ridgecove',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the Fictitious Business Name is filed (San Francisco County Clerk, City and County of San Francisco)
    owner: null, // optional
    foundingYear: null,

    phone: '(628) 305-0199',
    phoneE164: '+16283050199',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '369 Pine St', // real, staffed office — add suite if any
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94104',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['San Francisco, CA'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Pacific Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  /**
   * Contact form — submissions are POSTed to an n8n Webhook (production URL,
   * https://…/webhook/…). The n8n workflow routes them (email, sheet, CRM) and
   * should answer with a redirect to `redirect_to` (the /thank-you/ page).
   * Until webhookUrl is set, the form shows a "not connected yet" notice and won't send.
   * See docs/N8N-FORM-SETUP.md.
   */
  form: { name: 'consultation', provider: 'n8n', webhookUrl: null },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Slow-zoom photo hero (no verified San Francisco video matched the brand).
    // Pexels photo 12747722 — Golden Gate Bridge from a Marin Headlands ridge (Pexels License)
    heroVideo: { webm: null, mp4: null, poster: '/assets/media/hero.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      headlands: { src: '/assets/media/headlands.webp', pos: '60% 55%', alt: 'Golden Gate Bridge in front of the Marin Headlands hills' },
      fog: { src: '/assets/media/fog.webp', pos: '55% 50%', alt: 'Golden Gate Bridge with fog drifting over the hills at dusk' },
      bay: { src: '/assets/media/bay.webp', pos: '45% 50%', alt: 'Golden Gate Bridge and San Francisco Bay seen from the headlands' },
    },
  },
};
