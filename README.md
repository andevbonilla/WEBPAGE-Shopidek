
# ShopiDeck public website

Legal pages use a suite-wide framework and independent app schedules in English
and Spanish. See [legal maintenance](docs/legal-maintenance.md) for routes, how to
add another app, and factual/contractual items to verify before publication.

The public catalog contains only SD: Less Time Marketing, SD: Klaviyo Bot Cleaner,
and SD: Retracto y PQR. Retracto y PQR replaces the retired SEO app concept.

## SD: Retracto y PQR product page

The landing is at `/retracto-y-pqr` and `/es/retracto-y-pqr`, with localized copy
in the `Retracto` namespace of the EN/ES catalogs. It uses the shared product
landing components and a Shopify green theme. The supplied Colombian-flag logo
is optimized as WebP in `public/brand/products/retracto-y-pqr/`.
The related article is at `/blog/retracto-y-pqr-shopify-colombia` (and `/es/blog/...`);
its bilingual content lives in `app/[locale]/blog/retractoPost.ts`.

Content follows the supplied November 2026 product summary. The app is presented
as coming soon, pending real-store validation, production setup, and legal review.
The planned price is US$15/month with a 14-day free trial, billed through Shopify.
Information CTAs open an email to `team@shopideck.com` with the app in the subject;
they do not reuse the marketing app's waitlist or imply installation is available.
The hero is explicitly labelled as a conceptual workflow. Refunds remain a merchant
action, and no legal-compliance guarantee is made. Product-specific legal addenda
are still required before the new app processes customer data.

## SD: Less Time Marketing product page

The public product concept is available at `/less-time-marketing` in English and
`/es/less-time-marketing` in Spanish. Its localized copy lives in
`messages/en.json` and `messages/es.json` (LessTimeMarketing namespace); optimized icons and the preserved
original are in `public/brand/products/social-marketing/`.

SD: Less Time Marketing is presented as in development. Both early-access CTAs
use `app/components/products/EarlyAccessButton.tsx` to open Tally form `9qe6yp`
in a centered modal. The widget loads only on this landing, after hydration,
and Next.js deduplicates it across CTAs. The supplied wave animation, immediate
close after submission (`auto-close=0`), and form-event forwarding are preserved.
If JavaScript is disabled or the widget fails to load, the links open the public
form at `https://tally.so/r/9qe6yp`. Responses are handled by Tally; no API key or
backend integration is required here. Button labels use the EN/ES catalogs;
form wording, translations, design, and response notifications are managed in
Tally, not translated automatically by the website. Requesting early access does
not create a product account or guarantee access.

The page content follows the Less Time Marketing landing brief (1 November 2026):
plans, credits, trial, image and video formats, and FAQs match the app code at that
date. Social networks are not named until each platform approves the app. The
hero visual is an illustrative mock, labelled as such, until real screenshots exist.
The comparison names three alternatives (Predis, Outfy, Xyla) using only facts from
their public Shopify App Store listings, read on 2 November 2026; re-check those
listings before changing prices or claims. Workflow screenshots and the example image
live in `public/brand/products/less-time-marketing/`.
Old paths `/social-marketing` and `/botcleaner` redirect permanently to
`/less-time-marketing` and `/klaviyo-bot-cleaner` (see `next.config.ts`).

## Suite design and localization

App landing pages share ProductPage, ProductHero, ProductMonitor, ProductHeading, and ProductFaq
in `app/components/products/ProductPage.tsx`. Only the icon-based theme and
product content vary: blue for Bot Cleaner, purple for Less Time Marketing,
and green for Retracto y PQR.
Typography, spacing, and card radii are shared. Retracto y PQR uses green product
CTAs; the other apps retain their suite-orange primary buttons.
Bot Cleaner pricing and limits are unchanged.
Heroes use centered, two-tone headings with a desktop monitor below the copy,
not a side panel. Bot Cleaner displays its dashboard only once; upcoming apps
use a themed screen with localized Coming soon text.
Catalog details buttons share one neutral style. CTA arrow icons use the
`cta-arrow` class for a one-shot hover/focus nudge that returns to its origin
and is disabled for reduced-motion preferences.

`i18n/messages.ts` resolves typed EN/ES catalogs and interpolated messages.
Public copy, accessibility labels, pricing, and metadata come from catalogs,
not language ternaries. Content is rendered on the server under separate
language URLs with canonical links, hreflang, and localized structured data.

## Support form

The Help Center form sends a structured support request to `team@shopideck.com`
through the Resend API. Configure these variables in Vercel before publishing:

```text
RESEND_API_KEY=your_resend_api_key
```

The `shopideck.com` sending domain must be verified in Resend. The sender is
fixed in the application as `team@shopideck.com`; visitor emails are used only
as the reply-to address.

## Shopify installation link

All Bot Cleaner installation CTAs share the published listing URL in
`app/config.ts` (`SHOPIFY_APP_STORE_URL`). The `getShopifyAppStoreUrl` helper
sets the listing language to match the current ShopiDeck page (`en` or `es`).
Update the constant if the listing URL changes, then redeploy.
