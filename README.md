
# ShopiDeck public website

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

Until Shopify assigns the public listing URL, installation CTAs go to the Help
Center. After publication, set the Vercel variable below to the real App Store
URL and redeploy:

```text
NEXT_PUBLIC_SHOPIFY_APP_STORE_URL=https://apps.shopify.com/your-real-listing
```
