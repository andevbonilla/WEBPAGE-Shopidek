# ShopiDeck — AI Context for Main Website

## Purpose of this file

This file gives AI assistants the brand, design, and business context needed to work on the main ShopiDeck website.

This context is for:

shopideck.com

The website is the public marketing and content hub for the ShopiDeck brand.

It is not the internal Shopify embedded app for any specific tool.

## Brand context

ShopiDeck is the main brand and suite for Shopify-focused software tools.

The brand is designed to help Shopify merchants improve growth, marketing, analytics, data quality, automation, and store operations through simple, focused tools.

ShopiDeck should be presented as a suite, not as a single-product company.

Current and possible tools under the ShopiDeck brand may include:
- BotCleaner
- Cart Recovery
- Email Insights
- Product Bundles
- Fraud Signals
- Review Booster

BotCleaner is the current first tool of the ShopiDeck brand, but this website should not be built only around BotCleaner.

BotCleaner can be mentioned as one of the tools in the suite, but the main website should focus on the overall ShopiDeck brand.

## Website context

The main website will be built with Next.js and live at:

shopideck.com

The website is for:
- Main landing page
- Brand homepage
- Product overview pages
- Blog
- SEO content
- Pricing pages
- Privacy Policy
- Terms of Service
- Contact pages
- Help or resources pages
- Future suite-level information

The goal of the website is to make ShopiDeck look like a trustworthy, modern, Shopify-focused SaaS suite.

The site should explain what ShopiDeck is, what problems it helps solve, and what tools exist or may exist under the brand.

## Domain strategy

Use this separation:

- shopideck.com = main public website built with Next.js
- botcleaner.shopideck.com = Shopify app/tool surface using Shopify CLI configuration
- futuretool.shopideck.com = possible future Shopify app/tool surface

Important rules:
- The main website should not replace the Shopify app structure.
- The main website should not include Shopify embedded app logic.
- The main website should not include private app functionality.
- Shopify app subdomains should follow Shopify CLI configuration.
- shopideck.com should focus on marketing, SEO, blog, policies, pricing, and public-facing brand content.

## Business context

ShopiDeck is a suite of tools for Shopify merchants.

The brand helps merchants solve practical ecommerce problems such as:
- Improving marketing performance
- Cleaning or improving customer data
- Reducing wasted costs
- Recovering lost sales
- Understanding store signals
- Improving customer trust
- Making better growth decisions
- Automating repetitive tasks
- Managing store operations more efficiently

The suite should feel practical, useful, and merchant-first.

The brand should not feel like a vague software company. It should feel clearly focused on Shopify merchants.

## Main positioning

ShopiDeck builds focused tools for Shopify merchants who want cleaner data, smarter marketing, and better growth.

Alternative positioning lines:
- Smarter tools for cleaner Shopify growth.
- Practical growth tools for Shopify merchants.
- Simple Shopify tools to clean data, recover revenue, and improve decisions.
- A growing suite of focused tools for Shopify brands.

## Target customers

Primary customers:
- Shopify merchants
- Small and medium ecommerce businesses
- Store owners using marketing tools like Klaviyo
- Ecommerce operators
- Shopify agencies
- Email marketing agencies
- Growth-focused DTC brands
- Merchants who want simple tools instead of complex enterprise software

The audience is practical. They care about:
- Saving money
- Growing revenue
- Fixing store problems
- Improving marketing performance
- Saving time
- Understanding what is happening in their business
- Avoiding unnecessary complexity

## Design inspiration

Use Mailchimp as broad inspiration for the marketing website style, but do not copy Mailchimp assets, illustrations, exact layouts, logos, or brand elements.

Take inspiration from:
- Warm SaaS branding
- Friendly visual tone
- Bold headlines
- Editorial layouts
- Clear sections
- Playful but professional details
- Strong contrast
- Simple explanations
- Memorable landing page structure
- Human and approachable copy

Do not make the site look like a direct clone of Mailchimp.

## Visual design system

Use the design parameters from the ShopiDeck brand reference. :contentReference[oaicite:0]{index=0}

### Colors

Primary background:
#f8f7f2

Primary accent:
#ffbd59

Secondary color:
#000000

Recommended supporting colors:
- Main text: #111111
- Secondary text: #444444
- Muted text: #6b6b6b
- Card background: #ffffff
- Soft cream section: #fff9ec
- Soft border: #dedbd2
- Light warning/notice background: #fff3d6

### Typography

Logo style inspiration:
More Sugar Canva

Titles:
Montserrat

Body text:
Open Sans

If exact fonts are not practical, use similar fallbacks:
- Logo: rounded, playful display font
- Titles: geometric sans-serif
- Body: clean, readable sans-serif

Typography rules:
- Use large, bold headlines
- Keep body text very readable
- Use short paragraphs
- Avoid dense blocks of text
- Use generous line height
- Use strong hierarchy between headings, subheadings, and body copy

## UI style

The site should feel:
- Warm
- Clean
- Bold
- Friendly
- Modern
- Trustworthy
- Practical
- Slightly playful
- SaaS-like but not generic

Use:
- Large hero sections
- Warm off-white backgrounds
- Bold black headlines
- Yellow-orange accent buttons
- Rounded cards
- Soft borders
- Simple icons
- Clean layouts
- Clear CTAs
- Spacious sections
- Friendly illustrations or abstract shapes

Avoid:
- Cold corporate design
- Overly dark UI
- Generic startup templates
- Too many gradients
- Too many emojis
- Crowded layouts
- Hard-to-read text
- Overly technical messaging

## Buttons and CTAs

Primary buttons:
- Background: #ffbd59
- Text: black
- Rounded corners
- Strong but friendly appearance

Secondary buttons:
- White or transparent background
- Black text
- Soft border
- Rounded corners

CTA examples:
- Explore the suite
- View tools
- Read the blog
- See pricing
- Contact us
- Learn more

## Icon and illustration style

Use professional icons or simple custom illustrations.

Recommended:
- Lucide React
- Heroicons
- Material Symbols
- Simple outline icons

Avoid heavy use of emojis because they can look inconsistent across devices.

Illustrations can be:
- Abstract
- Friendly
- Soft
- Slightly playful
- Ecommerce-related
- Data-related
- Growth-related
- Human but simple

Do not use copyrighted Mailchimp illustrations or assets.

## Copywriting style

The voice should be:
- Clear
- Friendly
- Direct
- Simple
- Helpful
- Merchant-focused
- Confident but not exaggerated

Avoid:
- Overly technical language
- Corporate jargon
- Hype
- Unrealistic claims
- Long paragraphs

Good copy style:
- “Tools that help Shopify merchants clean data, recover revenue, and make better decisions.”
- “Focused apps for practical ecommerce problems.”
- “Built for merchants who want simple tools that solve real store issues.”
- “A growing suite of Shopify tools for cleaner growth.”

Avoid claims like:
- “Guaranteed revenue growth”
- “Perfect automation”
- “Official Shopify partner tool” unless verified
- “Guaranteed savings”
- “Works for every store automatically”


## Trust and safety rules

Do not claim:
- Official partnership with Shopify unless verified
- Official partnership with Klaviyo unless verified
- Guaranteed savings
- Guaranteed legal compliance
- Guaranteed revenue growth
- Perfect detection
- Automatic results with no merchant review

Always communicate:
- Transparency
- Merchant control
- Practical benefits
- Clear product limits
- Responsible handling of data
- Review-first workflows when relevant

## Technical context for AI agents

This markdown is for the main Next.js website at:

shopideck.com

When generating code or content:
- Use Next.js
- Focus on the public website
- Follow the ShopiDeck visual design system
- Keep the site brand-level, not only BotCleaner-specific
- Use warm, clear SaaS copy
- Keep the design inspired by Mailchimp’s friendliness and boldness, without copying it
- Do not add Shopify embedded app logic
- Do not add Klaviyo API logic
- Do not include private credentials, passwords, API keys, or secrets
- Do not build internal app dashboards here
- Do not create Shopify CLI app code inside the marketing website
- Keep public website content separate from product subdomain app code