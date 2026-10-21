# ShopiDeck legal documents

Updated: 2026-10-21. These changes prepare the public website; they do not deploy it
or implement privacy, billing, or publishing behavior in any app repository.

## Structure and scope

- `/privacy`, `/terms`, `/dpa`: suite-wide framework only.
- `/{privacy,terms,dpa}/klaviyo-bot-cleaner`: Bot Cleaner schedules. The original
  detailed data fields, scopes, scan/history periods, prices, and review requirements
  remain scoped to this app in `messages/legal/en.json` and `messages/legal/es.json`.
- `/{privacy,terms,dpa}/less-time-marketing`: separate Less Time Marketing schedules.
- `/subprocessors`: recipients grouped by public website and app, with purpose,
  data, role, region information, and downstream AI recipients.
- `/data-deletion`: manual deletion instructions and contact. This is not a Meta
  callback or request-status API. No app credentials are handled by this website.
- All pages have English and `/es` versions, canonical URLs and language alternates.

Mandatory law prevails. The common DPA governs processor duties; app processing
schedules cannot reduce those duties. App-specific terms govern the relevant app
only. Approved Shopify plans govern the commercial fields displayed in approval,
without granting new data access. No app automatically inherits another app's
customer access, AI use, automatic publishing, credits, deletion periods, liability
cap, or connected-account authorization.

## Before publishing / app release verification

1. **Neon region remains unverified.** Read Project settings → Region in Neon or
   inspect only the region component of the deployment's connection hostname.
   Do not copy credentials or the full `DATABASE_URL` into source, chat, or logs.
   Update the app addendum and provider register with the verified location.
2. **External AI training restrictions are pending contractual confirmation.**
   The owner reports no DPA or written no-training clause in the app repository.
   Obtain the applicable fal.ai contract/DPA and evidence for downstream routing,
   input/output retention, media URLs, logging, training, deletion, entities,
   processing countries, transfer safeguards, and subprocessor obligations.
   A general website privacy notice does not establish API/model contract terms.
   Public notices expressly avoid a no-training guarantee for external providers.
   Do not treat a disclosure of this pending verification as satisfying legal or
   platform contract requirements. Verify the general DPA obligations against
   actually executed provider agreements before personal-data processing begins.
3. The owner supplied the following deployed/planned generation chain. All AI
   calls pass through fal.ai; one key does not eliminate downstream recipients:

   | Operation | Reported routing/models |
   | --- | --- |
   | Text | Claude Haiku 5.5 through `openrouter/router`; fallback GPT-6 Luna |
   | Creative ideas / selection | Claude Sonnet 5.5 / Claude Opus 5.5 |
   | Standard / maximum images | Nano Banana 2 Edit (Google) / GPT Image 2.5 Sunburst Edit (OpenAI) |
   | Standard / maximum 5-second video | MiniMax H3 Max / Gemini Omni Flash (Google) |
   | 10/15/30-second and creative video | Seedance 2.0 Mini (ByteDance) |
   | Background music | Kling video-to-audio (Kuaishou) |
   | Subtitles / assembly | fal auto-subtitle / FFmpeg on fal |
   | Old reserved jobs only | Seedance 2.5 and Wan 3.0 |

   Verify exact endpoints, recipient legal entities, actual routes, and legacy
   job exposure in the **app repository**. Public notices use provider/function
   categories rather than presenting unverified model names as provider contracts.
   In that repository, `docs/privacy.md` reportedly names only Anthropic/OpenAI;
   it must be brought into line with the fuller chain. This website task does not
   edit that unavailable repository.
4. Confirm product behavior matches the supplied PDFs: `read_products`/`write_files`,
   AES-256-GCM social-token encryption, immediate token removal, defaults and
   one-hour autoapproval, explicit TikTok approval/options, 7 days/60 trial credits,
   package expiry, credit refunds, cancellation behavior, and nightly Files cleanup.
   Confirm the backend enforces YouTube deletion within 30 calendar days of
   revocation or a deletion request. No backend behavior is proven by editing copy.
5. Confirm retention jobs: completed campaigns 365 days, generation-credit history
   24 months, deletion on `shop/redact`, minimum residual privacy/trial hashes and
   their necessity/deletion criteria, backups, provider copies, and legal records.
   The old blanket "everything deleted in 48 hours" has been corrected: Shopify's
   event timing is not a guarantee of simultaneous deletion across all providers.
6. Configure each app's platform/OAuth listings with its **own** privacy and terms
   URLs, linked general documents, and deletion instructions. If using Meta's
   callback option, implement and verify its callback and status response in the
   app backend; do not configure this static instructions page as that callback.
7. Confirm the existing legal operator/address remain accurate. No company, NIT,
   EU/UK representative, DPO, transfer agreement, certification, or partnership
   was invented to fill PDF placeholders. Assess any applicable EU/UK representative
   duties and execute transfer instruments where required. Have qualified counsel
   review final factual/legal fit before publication; this edit is not a compliance
   certification. Retain published versions and implement promised notices before
   changing existing merchants' agreements.

## Add another app

1. Add a stable app key under `products` in both `messages/legal/en.json` and
   `messages/legal/es.json`, with its name and complete privacy, terms, and DPA
   schedule documents. Include scope, data/sources,
   purposes/bases, roles, permission actions, third parties, automation/review,
   retention/deletion, commercial rules, and any app-specific liability terms.
2. `app/legal/productLegal.ts` derives the registry from those JSON entries.
   General sections with `productIndex`, static routes, provider groups, and the
   sitemap include registered apps automatically. Unregistered product slugs return 404.
3. Add scoped recipients to `providers` in both legal JSON catalogs. Shared infrastructure gets
   a separate entry in each applicable scope; do not infer cross-app data access.
4. Change common text only for genuinely common practices. Identify affected apps,
   preserve prior versions, update dates, issue notices, and obtain new consent or
   Shopify approval where required. Do not register unreleased concepts without
   their actual notices and processing information.
5. Run `node node_modules/eslint/bin/eslint.js app i18n proxy.ts`,
   `npx tsc --noEmit`, and `npm run build`; inspect legal routes in both languages,
   links/anchors, unknown slugs, and sitemap entries. The targeted lint command
   avoids traversing the existing local `.pnpm-store`.

## Source documents and verification references

The supplied Spanish PDFs, dated October 21, 2026, were treated as product-source
material, including their unresolved placeholders, not as instructions to access
credentials or to make unverified guarantees:

- `C:\Users\andre\Downloads\Less Time Marketing — Política de privacidad.pdf`
- `C:\Users\andre\Downloads\Less Time Marketing — Términos del servicio.pdf`

Official references consulted for the public drafting:

- [Shopify privacy compliance events](https://shopify.dev/docs/apps/build/compliance/privacy-law-compliance)
- [YouTube API developer policies](https://developers.google.com/youtube/terms/developer-policies)
- [Google API Services User Data Policy / Limited Use](https://developers.google.com/terms/api-services-user-data-policy)
- [TikTok content sharing guidelines](https://developers.tiktok.com/docs/en/content-sharing-guidelines)
- [SIC: statutory inquiry/complaint procedures](https://sedeelectronica.sic.gov.co/politica-de-tratamiento-de-datos-personales)
- [fal.ai public privacy notice](https://fal.ai/legal/privacy-policy)
- [Neon DPA](https://neon.com/pdf/DPA.pdf)

## Localization and SEO

All legal prose, document metadata, and provider descriptions are JSON content in
`messages/legal/en.json` and `messages/legal/es.json`. TypeScript contains the typed
loader, registry, route logic, and structural checks only. Server Components render
these dictionaries into HTML; users and crawlers do not wait for a client-side
translation fetch. JSON storage improves editing/translation organization, rather
than ranking by itself. Canonical URLs, language alternates, and the sitemap remain
localized. The existing project uses custom typed i18n helpers, not next-intl; adding
next-intl is not required for server-rendered legal content or these SEO signals.

- [Next.js internationalization and server dictionaries](https://nextjs.org/docs/app/guides/internationalization)
- [Next.js metadata language alternates](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

## Verification performed for this change

- ESLint over `app`, `i18n`, and `proxy.ts`: passed.
- TypeScript and production Next.js build: passed. Google Fonts download required
  network access; no font substitutions or production font changes were made.
- 20 legal documents fetched from the production preview in EN/ES: HTTP 200,
  prose present in server HTML, correct canonical and Spanish language alternate.
- Both provider pages contain the expanded generation chain.
- Unknown app slugs (including the unregistered SEO concept): HTTP 404.
- New legal documents and deletion instructions appear in the sitemap.
- Internal legal links/anchors checked in both catalogs; visual browser inspection
  covered the Spanish privacy addendum and grouped provider page.
