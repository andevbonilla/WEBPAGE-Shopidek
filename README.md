
# ShopiDeck public website

The public catalog contains only SD: Less Time Marketing, SD: Klaviyo Bot Cleaner,
and SD: SEO That Sells. The latter is a forthcoming concept, not an installable app.

## SD: Less Time Marketing product page

The public product concept is available at `/social-marketing` in English and
`/es/social-marketing` in Spanish. Its localized copy lives in
`messages/en.json` and `messages/es.json` (LessTimeMarketing namespace); optimized icons and the preserved
original are in `public/brand/products/social-marketing/`.

SD: Less Time Marketing is presented as in development. Early-access CTAs open an
email to `team@shopideck.com`; they do not enroll visitors automatically. The
five-minute campaign claim is an approximate product goal. This repository
does not implement campaign generation or social publishing integrations.
Positioning focuses on marketing while you sleep, quality, and practicality.
The bilingual comparison describes working approaches rather than making
unverified claims about named competitors.

## Suite design and localization

App landing pages share ProductPage, ProductHero, ProductHeading, and ProductFaq
in `app/components/products/ProductPage.tsx`. Only the icon-based theme and
product content vary: blue for Bot Cleaner and purple for Less Time Marketing.
Typography, spacing, card radii, and suite-orange primary buttons are shared.
Bot Cleaner pricing and limits are unchanged.

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

Until Shopify assigns the public listing URL, installation CTAs open a focused
search inside Shopify App Store. After publication, set the Vercel variable
below to the exact App Store URL and redeploy:

```text
NEXT_PUBLIC_SHOPIFY_APP_STORE_URL=https://apps.shopify.com/your-real-listing
```
