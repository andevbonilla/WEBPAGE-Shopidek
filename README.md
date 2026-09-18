
# ShopiDeck public website

## Social Marketing product page

The public product concept is available at `/social-marketing` in English and
`/es/social-marketing` in Spanish. Its localized copy lives in
`app/[locale]/social-marketing/content.ts`; optimized icons and the preserved
original are in `public/brand/products/social-marketing/`.

Social Marketing is presented as in development. Early-access CTAs open an
email to `team@shopideck.com`; they do not enroll visitors automatically. The
five-minute campaign claim is an approximate product goal. This repository
does not implement campaign generation or social publishing integrations.

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
