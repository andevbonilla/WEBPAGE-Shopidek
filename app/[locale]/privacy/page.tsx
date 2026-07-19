import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CopyLinkButton from "../../components/CopyLinkButton";
import { Link } from "@/i18n/navigation";
import { Clock } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";

  const title = currentLocale === "en"
    ? "Privacy Policy | ShopiDeck Shopify SaaS Suite"
    : "Política de Privacidad | ShopiDeck Suite de Shopify";

  const description = currentLocale === "en"
    ? "ShopiDeck Privacy Policy. Learn how we securely process Shopify store data and Klaviyo integrations under strict data compliance."
    : "Política de Privacidad de ShopiDeck. Conoce cómo procesamos los datos de tiendas Shopify y Klaviyo de forma segura.";

  const canonicalPath = `/${currentLocale}/privacy`;

  return {
    metadataBase: new URL("https://shopideck.com"),
    title,
    description,
    keywords: currentLocale === "en"
      ? "ShopiDeck privacy policy, Shopify data security, Klaviyo compliance, GDPR Shopify app, merchant control"
      : "política de privacidad ShopiDeck, seguridad Shopify, protección de datos Klaviyo, RGPD Shopify, control de datos",
    alternates: {
      canonical: canonicalPath,
      languages: {
        "en": "/en/privacy",
        "es": "/es/privacy",
        "x-default": "/en/privacy"
      }
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";
  const isEn = currentLocale === "en";

  const privacyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isEn ? "Privacy Policy of ShopiDeck" : "Política de Privacidad de ShopiDeck",
    "description": isEn
      ? "Privacy Policy of ShopiDeck. Learn how we collect, process, and protect your store and customer data."
      : "Política de Privacidad de ShopiDeck. Conoce cómo recopilamos, procesamos y protegemos tus datos de forma segura.",
    "publisher": {
      "@type": "Organization",
      "name": "ShopiDeck",
      "url": "https://shopideck.com"
    },
    "dateModified": "2026-06-01"
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* Dynamic JSON-LD Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd).replace(/</g, '\\u003c') }}
      />
      <Navbar />

      {/* SUBNAV / BREADCRUMBS */}
      <div className="bg-brand-cream border-b border-brand-border py-3 mt-16 md:mt-20">
        <div className="layout-container flex items-center justify-between text-xs font-bold text-brand-muted">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <span className="truncate">ShopiDeck Suite</span>
            <span>&gt;</span>
            <span className="text-brand-main truncate">
              {isEn ? "Privacy Policy" : "Política de Privacidad"}
            </span>
          </div>
          <Link href="/" className="hover:text-brand-main transition-colors flex items-center gap-1 flex-shrink-0">
            ← {isEn ? "Back" : "Volver"}
          </Link>
        </div>
      </div>

      {/* EDITORIAL BLOG-STYLE CONTENT LAYOUT */}
      <main className="py-12 pb-24 bg-brand-card flex-1">
        <div className="layout-container max-w-4xl">
          <article className="space-y-8">
            
            {/* Category and Title */}
            <div className="space-y-4">
              <span className="inline-block text-xs font-extrabold text-brand-main bg-brand-warning px-3 py-1 rounded-md border border-brand-accent/25 uppercase tracking-wider">
                {isEn ? "Legal & Compliance" : "Legal y Cumplimiento"}
              </span>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-brand-main tracking-tight uppercase">
                {isEn ? "Privacy Policy" : "Política de Privacidad"}
              </h1>
            </div>

            {/* Top Timestamp info bar (Only date and reading time) */}
            <div className="flex items-center gap-4 border-y border-brand-border py-4 mt-2 text-xs font-medium text-brand-muted font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-muted" /> {isEn ? "8 min read" : "8 min de lectura"}
              </span>
              <span>&bull;</span>
              <span>{isEn ? "June 1, 2026" : "1 de Junio, 2026"}</span>
            </div>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6">
              
              {/* Left Column (Only DPO and CopyLinkButton) */}
              <div className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28 self-start border-t lg:border-t-0 border-brand-border pt-6 lg:pt-0">
                <div>
                  <p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-2">
                    {isEn ? "DPO Contact" : "Contacto DPO"}
                  </p>
                  <span className="inline-block text-xs font-semibold text-brand-secondary bg-brand-bg px-2.5 py-0.5 rounded border border-brand-border font-mono break-all">
                    privacy@shopideck.com
                  </span>
                </div>

                <div className="h-px bg-brand-border/60 w-full" />

                <CopyLinkButton locale={currentLocale} />
              </div>

              {/* Right Column (Rich Policy Content) */}
              <div className="lg:col-span-9 space-y-6 text-brand-secondary text-base leading-[1.8] font-light font-sans">
                {isEn ? (
                  // English Content
                  <>
                    <p className="font-sans">
                      ShopiDeck is a suite of applications for Shopify and e-commerce. Our apps help merchants improve operations, marketing, data hygiene, automation, analytics, and store performance.
                    </p>
                    <p className="font-sans">
                      This Privacy Policy explains how ShopiDeck collects, uses, protects, and shares information when you visit our website, install a ShopiDeck app, use our tools, or communicate with us.
                    </p>
                    <p className="font-sans">
                      This policy applies to the ShopiDeck suite in general. Some apps may process additional data depending on their function. The section &quot;ShopiDeck: Klaviyo Bot Cleaner&quot; explains specific details of that app.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      1. Who We Are
                    </h2>
                    <p className="font-sans">
                      ShopiDeck operates tools and applications for Shopify merchants.
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>Privacy contact: <code className="bg-brand-bg px-1.5 py-0.5 rounded font-mono text-xs text-brand-main font-bold">privacy@shopideck.com</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>Website: <code className="bg-brand-bg px-1.5 py-0.5 rounded font-mono text-xs text-brand-main font-bold">https://shopideck.com</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>Apps: ShopiDeck apps installed from Shopify or used by e-commerce merchants.</span>
                      </li>
                    </ul>
                    <p className="font-sans">
                      When we process personal data of a Shopify store&apos;s end customers, the merchant typically acts as the data controller and ShopiDeck acts as a data processor. When we process data related to the merchant&apos;s account, support, billing, or direct app usage, ShopiDeck may act as the data controller.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      2. Data We May Collect
                    </h2>
                    <p className="font-sans">
                      Depending on the app or service used, we may process:
                    </p>
                    <ul className="space-y-3 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Shopify store data:</strong> domain, store ID, installation status, granted permissions, and app configuration.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Merchant data:</strong> name, email, company, support messages, and preferences.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Usage data:</strong> actions inside the app, features used, technical errors, plan limits, and operational metrics.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Billing data:</strong> active plan, subscription status, and billing events managed by Shopify.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Technical data:</strong> IP address, browser, device, security logs, necessary cookies, and session data.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Integration data:</strong> OAuth tokens, account IDs, authorized scopes, and data required to connect with external services like Klaviyo or other merchant-authorized tools.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>End-customer data:</strong> only when an app requires it to perform its function and the merchant authorizes it.
                        </div>
                      </li>
                    </ul>
                    <p className="font-sans">
                      We do not sell personal data. We do not use end-customer data from stores for third-party behavioral advertising.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      3. Why We Use the Data
                    </h2>
                    <p className="font-sans">
                      We use data to:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Install, authenticate, and operate our apps.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Provide the features contracted by the merchant.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Connect with Shopify and authorized external tools.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Calculate usage limits, plans, and feature access.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Improve security, prevent abuse, and resolve errors.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Provide technical support.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Comply with legal, privacy, and Shopify obligations.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Send operational communications about the app, important changes, or support.</span></li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      4. Legal Basis in the European Union
                    </h2>
                    <p className="font-sans">
                      When GDPR applies, we rely on legal bases such as:
                    </p>
                    <ul className="space-y-3 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Performance of a contract:</strong> to provide our apps.</div></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Legitimate interest:</strong> for security, support, operational improvement, and abuse prevention.</div></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Legal compliance:</strong> when we must retain or deliver information due to a legal obligation.</div></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Consent:</strong> when required.</div></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Merchant instructions:</strong> when processing personal data of their store&apos;s end customers.</div></li>
                    </ul>
                    <p className="font-sans">
                      GDPR requires informing individuals clearly about what data is processed, why, for how long, who it is shared with, and what rights they have. We base this policy on that logic of transparency.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      5. Data Sharing
                    </h2>
                    <p className="font-sans">
                      We may share data with:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Shopify, for installation, authentication, billing, webhooks, and app operations.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Providers of infrastructure, hosting, database, security, and monitoring.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Support or communication providers when necessary.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Integrations authorized by the merchant.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Legal authorities, if required by law.</span></li>
                    </ul>
                    <p className="font-sans">
                      We require providers to process data only for the necessary purposes and with reasonable security measures.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      6. International Transfers
                    </h2>
                    <p className="font-sans">
                      ShopiDeck may process data in the United States or other countries. If data of individuals from the European Economic Area, United Kingdom, or Switzerland is transferred internationally, we will use appropriate legal mechanisms, such as standard contractual clauses or other recognized frameworks.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      7. Security
                    </h2>
                    <p className="font-sans">
                      We apply reasonable security measures, including:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Encryption of sensitive tokens when applicable.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Authentication and authorization on protected routes.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Separation between backend data and frontend-visible data.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Use of environment variables for secrets.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Input validation.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Restricting permissions to the minimum necessary.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Logs without tokens, secret keys, or passwords.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Review of access and anti-abuse measures.</span></li>
                    </ul>
                    <p className="font-sans">
                      No system is completely invulnerable, but we work to reduce risks in a reasonable manner.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      8. Data Retention
                    </h2>
                    <p className="font-sans">
                      We retain data only as long as necessary to operate the suite, fulfill contracts, maintain audit trails, resolve disputes, provide support, or comply with legal obligations.
                    </p>
                    <p className="font-sans">
                      When a store uninstalls an app or requests deletion, we process the erasure or anonymization as appropriate and according to Shopify requirements and applicable law.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      9. Privacy Rights
                    </h2>
                    <p className="font-sans">
                      Depending on your location, you may have the right to:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Access your data.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Correct inaccurate data.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Request erasure.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Request portability.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Limit or object to certain processing.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Withdraw consent where applicable.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Not receive discrimination for exercising privacy rights.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>File a complaint with a data protection authority.</span></li>
                    </ul>
                    <p className="font-sans">
                      If you are an end customer of a store using ShopiDeck, please contact the merchant first. We process those data following the merchant&apos;s instructions.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      10. Privacy in the United States
                    </h2>
                    <p className="font-sans">
                      Depending on the state, users may have rights of access, correction, deletion, portability, and opting out of the sale or sharing of personal data.
                    </p>
                    <p className="font-sans">
                      ShopiDeck does not sell personal data and does not share personal data for cross-context behavioral advertising.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      11. Cookies
                    </h2>
                    <p className="font-sans">
                      We may use cookies or technical storage to:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Maintain sessions.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Authenticate users.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Remember settings.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Improve security.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Analyze basic operation of the site or app.</span></li>
                    </ul>
                    <p className="font-sans">
                      Where required by law, we will display consent options.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      12. Minors
                    </h2>
                    <p className="font-sans">
                      ShopiDeck is directed at merchants and businesses. It is not designed for minors under 13 nor to intentionally collect data from minors.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      13. Changes to This Policy
                    </h2>
                    <p className="font-sans">
                      We may update this policy when our apps, providers, legal requirements, or privacy practices change. We will publish the updated version with a new date.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      14. Contact
                    </h2>
                    <p className="font-sans">
                      For privacy questions:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>ShopiDeck Suite</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>privacy@shopideck.com</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>https://shopideck.com</span></li>
                    </ul>

                    <h2 className="font-display font-black text-2xl text-brand-main uppercase tracking-tight pt-8 border-t border-brand-border mt-8">
                      Specific Section: ShopiDeck: Klaviyo Bot Cleaner
                    </h2>
                    <p className="font-sans">
                      ShopiDeck: Klaviyo Bot Cleaner is a Shopify app that helps merchants detect, review, and suppress suspicious or fake profiles in Klaviyo.
                    </p>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Specific Data Processed
                    </h3>
                    <p className="font-sans">
                      In addition to general suite data, this app may process:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Shopify store domain.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Installation status.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Active plan and plan limits.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Klaviyo account ID.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Encrypted Klaviyo OAuth tokens.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Authorized Klaviyo scopes.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Klaviyo profile emails.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Profile first and last name, if they exist.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Klaviyo profile ID.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Profile creation or update dates.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Suppression status when Klaviyo provides it.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Risk score.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Reasons for the score.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Scan results.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>History of merchant-requested suppressions.</span></li>
                    </ul>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Why We Use This Data
                    </h3>
                    <p className="font-sans">
                      The app uses this data to:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Connect Shopify with Klaviyo via OAuth.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Scan authorized profiles in Klaviyo.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Detect suspicious bot patterns or fake profiles.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Show explainable results to the merchant.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Allow manual review before any action.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Suppress profiles in Klaviyo only when confirmed by the merchant.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Avoid showing already suppressed profiles as pending.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Calculate monthly plan limits.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Generate usage metrics and estimated savings.</span></li>
                    </ul>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      How Detection Works
                    </h3>
                    <p className="font-sans">
                      The app uses explainable rules such as identifying temporary or disposable email addresses, malformed structures, absent or generic names, lack of normal customer activity signals, creation in high-volume patterns, or existing suppression status.
                    </p>
                    <p className="font-sans">
                      The scan results do not represent an absolute truth. The app assigns risk categories like &quot;Probable bot&quot;, &quot;Needs review&quot;, or &quot;Low risk&quot;. The merchant always reviews the profiles and makes the final decision.
                    </p>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Profile Actions
                    </h3>
                    <p className="font-sans">
                      The app does not permanently delete profiles in the current version. The primary action is suppression in Klaviyo, which prevents those profiles from receiving marketing campaigns or automated flows.
                    </p>
                    <p className="font-sans">
                      The app never suppresses profiles automatically without explicit merchant confirmation.
                    </p>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Specific Security of Klaviyo Bot Cleaner
                    </h3>
                    <p className="font-sans">
                      For this application, Klaviyo credentials and OAuth tokens are stored in encrypted format and are never exposed in the frontend. Subscription statuses are verified directly in the backend, and limits are enforced server-side. The app uses Shopify Billing for subscriptions, avoids storing full payloads unless necessary, and maintains a secure audit trail of all manual scans and suppressions.
                    </p>
                  </>
                ) : (
                  // Spanish Content
                  <>
                    <p className="font-sans">
                      ShopiDeck es una suite de aplicaciones para Shopify y comercio electrónico. Nuestras aplicaciones ayudan a los comerciantes a mejorar las operaciones, el marketing, la higiene de datos, la automatización, el análisis y el rendimiento de sus tiendas.
                    </p>
                    <p className="font-sans">
                      Esta Política de Privacidad explica cómo ShopiDeck recopila, utiliza, protege y comparte información cuando visita nuestro sitio web, instala una aplicación de ShopiDeck, utiliza nuestras herramientas o se comunica con nosotros.
                    </p>
                    <p className="font-sans">
                      Esta política se aplica a la suite ShopiDeck en general. Algunas aplicaciones pueden procesar datos adicionales según su función. La sección &quot;ShopiDeck: Klaviyo Bot Cleaner&quot; explica los detalles específicos de esa aplicación.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      1. Quiénes Somos
                    </h2>
                    <p className="font-sans">
                      ShopiDeck opera herramientas y aplicaciones para comerciantes de Shopify.
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>Contacto de privacidad: <code className="bg-brand-bg px-1.5 py-0.5 rounded font-mono text-xs text-brand-main font-bold">privacy@shopideck.com</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>Sitio web: <code className="bg-brand-bg px-1.5 py-0.5 rounded font-mono text-xs text-brand-main font-bold">https://shopideck.com</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>Aplicaciones: aplicaciones de ShopiDeck instaladas desde Shopify o utilizadas por comerciantes de comercio electrónico.</span>
                      </li>
                    </ul>
                    <p className="font-sans">
                      Cuando procesamos datos personales de los clientes finales de una tienda Shopify, el comerciante actúa generalmente como el responsable del tratamiento (data controller) y ShopiDeck actúa como el encargado del tratamiento (data processor). Cuando procesamos datos relacionados con la cuenta del comerciante, soporte, facturación o el uso directo de nuestras aplicaciones, ShopiDeck puede actuar como el responsable del tratamiento.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      2. Datos Que Podemos Recopilar
                    </h2>
                    <p className="font-sans">
                      Dependiendo de la aplicación o servicio utilizado, podemos procesar:
                    </p>
                    <ul className="space-y-3 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Datos de la tienda Shopify:</strong> dominio, ID de la tienda, estado de la instalación, permisos otorgados y configuración de la aplicación.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Datos del comerciante:</strong> nombre, correo electrónico, empresa, mensajes de soporte y preferencias.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Datos de uso:</strong> acciones dentro de la aplicación, funciones utilizadas, errores técnicos, límites del plan y métricas operativas.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Datos de facturación:</strong> plan activo, estado de la suscripción y eventos de facturación gestionados por Shopify.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Datos técnicos:</strong> dirección IP, navegador, dispositivo, registros de seguridad, cookies necesarias y datos de sesión.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Datos de integración:</strong> tokens de OAuth, IDs de cuenta, alcances autorizados y datos necesarios para conectarse con servicios externos como Klaviyo u otras herramientas autorizadas por el comerciante.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Datos de clientes finales:</strong> solo cuando una aplicación lo requiera para realizar su función y el comerciante lo autorice.
                        </div>
                      </li>
                    </ul>
                    <p className="font-sans">
                      No vendemos datos personales. No utilizamos datos de clientes finales para publicidad conductual dirigida de terceros.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      3. Por Qué Utilizaremos los Datos
                    </h2>
                    <p className="font-sans">
                      Utilizamos los datos para:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Instalar, autenticar y operar nuestras aplicaciones.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Proporcionar las funciones contratadas por el comerciante.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Conectar con Shopify y herramientas externas autorizadas.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Calcular límites de uso, planes y acceso a funciones.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Mejorar la seguridad, prevenir abusos y resolver errores.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Proporcionar soporte técnico.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Cumplir con las obligaciones legales, de privacidad y de Shopify.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Enviar comunicaciones operativas sobre la aplicación, cambios importantes o soporte.</span></li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      4. Base Legal en la Unión Europea
                    </h2>
                    <p className="font-sans">
                      Cuando se aplica el RGPD, nos basamos en:
                    </p>
                    <ul className="space-y-3 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Ejecución de un contrato:</strong> para proporcionar nuestras aplicaciones.</div></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Interés legítimo:</strong> para seguridad, soporte, mejora operativa y prevención de abusos.</div></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Cumplimiento legal:</strong> cuando debemos conservar o entregar información debido a una obligación legal.</div></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Consentimiento:</strong> cuando sea requerido.</div></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" /><div><strong>Instrucciones del comerciante:</strong> al procesar datos personales de los clientes finales de su tienda.</div></li>
                    </ul>
                    <p className="font-sans">
                      El RGPD exige informar a los interesados de forma clara y transparente sobre qué datos se procesan, por qué, durante cuánto tiempo, con quién se comparten y qué derechos tienen. Basamos esta política en esa lógica de transparencia.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      5. Compartir Datos
                    </h2>
                    <p className="font-sans">
                      Podemos compartir datos con:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Shopify, para instalación, autenticación, facturación, webhooks y operaciones de la aplicación.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Proveedores de infraestructura, alojamiento, bases de datos, seguridad y monitoreo.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Proveedores de soporte o comunicación cuando sea necesario.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Integraciones autorizadas por el comerciante.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Autoridades legales, si así lo exige la ley.</span></li>
                    </ul>
                    <p className="font-sans">
                      Exigimos a los proveedores que procesen los datos únicamente para los fines necesarios y con medidas de seguridad razonables.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      6. Transferencias Internacionales
                    </h2>
                    <p className="font-sans">
                      ShopiDeck puede procesar datos en los Estados Unidos u otros países. Si los datos de personas del Espacio Económico Europeo, el Reino Unido o Suiza se transfieren internacionalmente, utilizaremos los mecanismos legales adecuados, como las cláusulas contractuales tipo u otros marcos reconocidos.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      7. Seguridad
                    </h2>
                    <p className="font-sans">
                      Aplicamos medidas de seguridad razonables, que incluyen:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Cifrado de tokens confidenciales cuando corresponda.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Autenticación y autorización en rutas protegidas.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Separación entre datos del backend y datos visibles en el frontend.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Uso de variables de entorno para secretos.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Validación de entradas.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Restricción de permisos al mínimo necesario.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Registros sin tokens, claves secretas o contraseñas.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Revisión de accesos y medidas contra abusos.</span></li>
                    </ul>
                    <p className="font-sans">
                      Ningún sistema es completamente invulnerable, pero trabajamos para reducir los riesgos de manera razonable.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      8. Retención de Datos
                    </h2>
                    <p className="font-sans">
                      Conservamos los datos solo durante el tiempo necesario para operar la suite, cumplir contratos, mantener registros de auditoría, resolver disputas, brindar soporte o cumplir con obligaciones legales.
                    </p>
                    <p className="font-sans">
                      Cuando una tienda desinstala una aplicación o solicita la eliminación, procesamos la eliminación o anonimización según corresponda y de acuerdo con los requisitos de Shopify y la legislación aplicable.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      9. Derechos de Privacidad
                    </h2>
                    <p className="font-sans">
                      Dependiendo de su ubicación, puede tener derecho a:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Acceder a sus datos personales.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Corregir datos inexactos o incompletos.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Solicitar la eliminación o supresión.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Solicitar la portabilidad de los datos.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Limitar u oponerse a ciertos tratamientos.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Retirar el consentimiento cuando corresponda.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>No recibir un trato discriminatorio por ejercer sus derechos de privacidad.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Presentar una reclamación ante una autoridad de protección de datos.</span></li>
                    </ul>
                    <p className="font-sans">
                      Si es cliente final de una tienda que utiliza la suite ShopiDeck, póngase en contacto primero con el comerciante. Procesamos esos datos siguiendo las instrucciones del comerciante.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      10. Privacidad en los Estados Unidos
                    </h2>
                    <p className="font-sans">
                      Dependiendo del estado, los usuarios pueden tener derechos de acceso, rectificación, eliminación, portabilidad y exclusión de la venta o el intercambio de datos personales.
                    </p>
                    <p className="font-sans">
                      ShopiDeck no vende datos personales y no comparte datos personales para publicidad conductual en múltiples contextos.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      11. Cookies
                    </h2>
                    <p className="font-sans">
                      Podemos utilizar cookies o almacenamiento técnico para:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Mantener las sesiones de usuario.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Autenticar a los usuarios.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Recordar configuraciones y preferencias.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Mejorar la seguridad.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Analizar el funcionamiento básico de la web o de la aplicación.</span></li>
                    </ul>
                    <p className="font-sans">
                      Cuando lo exija la ley aplicable, mostraremos opciones para gestionar el consentimiento.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      12. Menores
                    </h2>
                    <p className="font-sans">
                      ShopiDeck está dirigido exclusivamente a comerciantes y empresas. Nuestras herramientas no están diseñadas para menores de 13 años ni recopilan intencionadamente datos personales de menores.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      13. Cambios en esta Política
                    </h2>
                    <p className="font-sans">
                      Podemos actualizar esta política de privacidad cuando cambien nuestras aplicaciones, proveedores, requisitos legales o prácticas de protección de datos. Publicaremos la versión actualizada con una nueva fecha de vigencia.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      14. Contacto
                    </h2>
                    <p className="font-sans">
                      Para cualquier pregunta sobre privacidad o protección de datos, puede comunicarse con nosotros en:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>ShopiDeck Suite</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>privacy@shopideck.com</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>https://shopideck.com</span></li>
                    </ul>

                    <h2 className="font-display font-black text-2xl text-brand-main uppercase tracking-tight pt-8 border-t border-brand-border mt-8">
                      Sección Específica: ShopiDeck: Klaviyo Bot Cleaner
                    </h2>
                    <p className="font-sans">
                      ShopiDeck: Klaviyo Bot Cleaner es una aplicación de Shopify que ayuda a los comerciantes a detectar, revisar y suprimir perfiles sospechosos o falsos en Klaviyo.
                    </p>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Datos Específicos Procesados
                    </h3>
                    <p className="font-sans">
                      Además de los datos generales de la suite, esta aplicación puede procesar:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Dominio de la tienda Shopify.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Estado de la instalación de la aplicación.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Plan activo y límites del plan mensual.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>ID de la cuenta de Klaviyo conectada.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Tokens de OAuth de Klaviyo cifrados.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Alcances (scopes) de Klaviyo autorizados.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Correos electrónicos de perfiles de Klaviyo analizados.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Nombres y apellidos asociados al perfil de Klaviyo (si existen).</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>ID del perfil en Klaviyo.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Fechas de creación o actualización del perfil.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Estado de supresión de Klaviyo.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Puntuación de riesgo asignada por la herramienta.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Motivos y detalles asociados a la puntuación de riesgo.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Resultados agregados de los análisis.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Historial de supresiones manuales solicitadas por el comerciante.</span></li>
                    </ul>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Por Qué Utilizaremos estos Datos
                    </h3>
                    <p className="font-sans">
                      La aplicación utiliza esta información para:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Conectar la tienda Shopify con la cuenta de Klaviyo a través de OAuth de forma segura.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Analizar de forma segura los perfiles autorizados dentro de la base de datos de Klaviyo.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Detectar patrones sospechosos de spambots o perfiles falsos que inflen artificialmente las tarifas.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Mostrar resultados detallados y explicables en el panel del comerciante.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Permitir la revisión manual de los perfiles antes de tomar cualquier decisión de supresión.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Suprimir perfiles en Klaviyo únicamente tras la confirmación manual y explícita del comerciante.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Evitar el análisis reiterado de perfiles ya marcados como suprimidos.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Gestionar y calcular el uso de acuerdo a los límites mensuales del plan seleccionado.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span>Generar estimaciones de ahorro financiero y de optimización de entregabilidad.</span></li>
                    </ul>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Cómo Funciona la Detección
                    </h3>
                    <p className="font-sans">
                      La aplicación evalúa perfiles de forma conservadora analizando indicadores clave como correos electrónicos con dominios temporales o desechables, formatos mal formados, nombres ausentes o genéricos, la total ausencia de señales normales de comportamiento, la creación masiva de cuentas y el estado de supresión anterior en Klaviyo.
                    </p>
                    <p className="font-sans">
                      Los resultados de la detección se presentan al comerciante clasificados en categorías útiles como &quot;Probable bot&quot;, &quot;Necesita revisión&quot; y &quot;Bajo riesgo&quot;. El comerciante siempre mantiene el control final sobre las acciones a realizar.
                    </p>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Acciones sobre los Perfiles
                    </h3>
                    <p className="font-sans">
                      La aplicación no borra de forma permanente los perfiles en Klaviyo. La acción principal realizada es la supresión de perfiles, lo cual evita que sigan recibiendo correos electrónicos de marketing y de automatización. Esto detiene de inmediato el impacto negativo en los costos del plan de Klaviyo y protege su entregabilidad.
                    </p>
                    <p className="font-sans">
                      Ningún perfil se suprime automáticamente sin que el comerciante lo apruebe explícitamente en el dashboard.
                    </p>

                    <h3 className="font-display font-bold text-lg text-brand-main mt-6 mb-2">
                      Seguridad Específica de Klaviyo Bot Cleaner
                    </h3>
                    <p className="font-sans">
                      Todos los tokens de OAuth de Klaviyo se almacenan de manera cifrada en la base de datos y nunca se transmiten al frontend. El acceso a los datos completos de los análisis se valida de forma estricta en el servidor para evitar filtraciones. La aplicación se integra con el sistema oficial de Shopify Billing para gestionar suscripciones seguras, no almacena cargas útiles de datos completas innecesariamente y genera un registro de auditoría seguro para control de los análisis realizados.
                    </p>
                  </>
                )}
              </div>

            </div>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
