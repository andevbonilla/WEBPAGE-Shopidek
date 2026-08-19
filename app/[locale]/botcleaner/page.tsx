import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaqSection from "../../components/FaqSection";
import { Check, ExternalLink, ShieldCheck } from "lucide-react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import {
  PRODUCT_NAME,
  SHOPIFY_APP_STORE_URL,
  SITE_URL,
  localizedPath,
} from "../../config";

const dictionaries = { en, es };
type Locale = "en" | "es";

interface PageProps {
  params: Promise<{ locale: string }>;
}

function isExternalUrl(url: string) {
  return url.startsWith("http");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale: Locale = locale === "es" ? "es" : "en";
  const title = currentLocale === "en"
    ? `${PRODUCT_NAME} | Review suspicious Klaviyo profiles`
    : `${PRODUCT_NAME} | Revisión de perfiles sospechosos de Klaviyo`;
  const description = currentLocale === "en"
    ? "Audit suspicious Klaviyo profiles with OAuth, explainable risk signals, merchant review, and confirmed suppression."
    : "Audita perfiles sospechosos de Klaviyo mediante OAuth, señales de riesgo explicables, revisión del comerciante y supresión confirmada.";
  const path = localizedPath(currentLocale, "/botcleaner");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: currentLocale === "en"
      ? "Klaviyo profile audit, Shopify Klaviyo app, profile suppression, disposable email signals"
      : "auditoría de perfiles Klaviyo, app Shopify Klaviyo, supresión de perfiles, señales de emails desechables",
    alternates: {
      canonical: path,
      languages: {
        en: "/botcleaner",
        es: "/es/botcleaner",
        "x-default": "/botcleaner",
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "ShopiDeck",
      locale: currentLocale === "en" ? "en_US" : "es_ES",
      type: "website",
      images: [{
        url: "/favicons-botcleaner/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: PRODUCT_NAME,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/favicons-botcleaner/android-chrome-512x512.png"],
    },
  };
}

export default async function BotCleanerPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale: Locale = locale === "es" ? "es" : "en";
  const dict = dictionaries[currentLocale].BotCleaner as Record<string, string>;
  const t = (key: string) => dict[key] || "";

  const pricingPlans = currentLocale === "en"
    ? [
        {
          name: "Free Audit",
          price: "$0",
          period: "initial audit",
          description: "Understand the aggregate findings before choosing a paid plan.",
          features: [
            "One initial audit per Shopify store",
            "Up to 100,000 unsuppressed profiles in that initial audit",
            "Aggregate findings only",
            "No profile suppression",
            "No CSV export",
          ],
        },
        {
          name: "Starter",
          price: "$9",
          period: "month",
          description: "For stores that need a small recurring review workflow.",
          features: [
            "2 scans per month",
            "Up to 5,000 profiles scanned per month",
            "Up to 500 suppressions per month",
            "Detailed results",
            "Scan and suppression history",
          ],
        },
        {
          name: "Growth",
          price: "$19",
          period: "month",
          description: "For growing lists and recurring profile audits.",
          popular: true,
          features: [
            "7-day trial for eligible new Growth subscriptions, if configured in Shopify",
            "5 scans per month",
            "Up to 25,000 profiles scanned per month",
            "Up to 5,000 suppressions per month",
            "Full results, CSV export, and history",
          ],
        },
        {
          name: "Pro",
          price: "$49",
          period: "month",
          description: "For larger brands and agencies with higher review volume.",
          features: [
            "15 scans per month",
            "Up to 100,000 profiles scanned per month",
            "Up to 25,000 suppressions per month",
            "Full results, CSV export, and history",
          ],
        },
      ]
    : [
        {
          name: "Free Audit",
          price: "$0",
          period: "auditoría inicial",
          description: "Entiende los hallazgos agregados antes de elegir un plan de pago.",
          features: [
            "Una auditoría inicial por tienda Shopify",
            "Hasta 100.000 perfiles no suprimidos en esa auditoría",
            "Solo hallazgos agregados",
            "Sin supresión de perfiles",
            "Sin exportación CSV",
          ],
        },
        {
          name: "Starter",
          price: "$9",
          period: "mes",
          description: "Para tiendas que necesitan un flujo recurrente de revisión pequeño.",
          features: [
            "2 escaneos al mes",
            "Hasta 5.000 perfiles analizados al mes",
            "Hasta 500 supresiones al mes",
            "Resultados detallados",
            "Historial de escaneos y supresiones",
          ],
        },
        {
          name: "Growth",
          price: "$19",
          period: "mes",
          description: "Para listas en crecimiento y auditorías recurrentes.",
          popular: true,
          features: [
            "Prueba de 7 días para nuevas suscripciones Growth elegibles, si está configurada en Shopify",
            "5 escaneos al mes",
            "Hasta 25.000 perfiles analizados al mes",
            "Hasta 5.000 supresiones al mes",
            "Resultados completos, exportación CSV e historial",
          ],
        },
        {
          name: "Pro",
          price: "$49",
          period: "mes",
          description: "Para marcas y agencias con un volumen de revisión mayor.",
          features: [
            "15 escaneos al mes",
            "Hasta 100.000 perfiles analizados al mes",
            "Hasta 25.000 supresiones al mes",
            "Resultados completos, exportación CSV e historial",
          ],
        },
      ];

  const faqKeys = [1, 2, 3, 4, 5, 6, 7, 8];
  const faqs = faqKeys.map((number) => ({
    question: t(`faqQuestion${number}`),
    answer: t(`faqAnswer${number}`),
  }));

  const steps = [1, 2, 3, 4, 5].map((step) => ({
    title: t(`tStep${step}Title`),
    description: t(`tStep${step}Desc`),
  }));

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: PRODUCT_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Shopify Admin",
    description: currentLocale === "en"
      ? "A merchant-controlled audit and suppression workflow for existing Klaviyo profiles."
      : "Un flujo controlado por el comerciante para auditar y suprimir perfiles existentes de Klaviyo.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "49",
      offerCount: 4,
    },
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg to-brand-cream/50">
          <div className="layout-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h1 className="font-display font-black text-3xl sm:text-5xl leading-tight text-brand-main tracking-tight">
                {t("title")}
              </h1>
              <p className="text-base md:text-lg text-brand-secondary leading-relaxed max-w-2xl">
                {t("subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SHOPIFY_APP_STORE_URL}
                  target={isExternalUrl(SHOPIFY_APP_STORE_URL) ? "_blank" : undefined}
                  rel={isExternalUrl(SHOPIFY_APP_STORE_URL) ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-main px-7 py-4 rounded-2xl font-bold border border-brand-main/15 transition-colors"
                >
                  {t("install")}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a href="#how-it-works" className="inline-flex items-center justify-center bg-brand-card hover:bg-brand-bg text-brand-main px-7 py-4 rounded-2xl font-bold border border-brand-border transition-colors">
                  {t("trySimulator")}
                </a>
              </div>
              <p className="text-xs text-brand-muted">{t("note")}</p>
            </div>
            <div className="lg:col-span-5 bg-brand-card rounded-3xl border border-brand-border p-6 shadow-premium">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/favicons-botcleaner/android-chrome-192x192.png" alt={PRODUCT_NAME} width={48} height={48} className="rounded-xl" />
                <div>
                  <p className="font-display font-black text-lg">{t("dashboardTitle")}</p>
                  <p className="text-xs text-brand-muted">{t("dashboardDesc")}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-brand-bg p-4 border border-brand-border">
                  <p className="text-[10px] text-brand-muted font-bold tracking-wider">{t("total")}</p>
                  <p className="text-2xl font-display font-black mt-2">—</p>
                </div>
                <div className="rounded-2xl bg-brand-cream p-4 border border-brand-accent/40">
                  <p className="text-[10px] text-brand-muted font-bold tracking-wider">{t("filtered")}</p>
                  <p className="text-2xl font-display font-black mt-2">—</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-brand-border p-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-accent-hover" />
                <div>
                  <p className="text-sm font-bold">{t("recent")}</p>
                  <p className="text-xs text-brand-muted">{t("synchronized")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-card border-y border-brand-border">
          <div className="layout-container">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
              <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight">{t("probTitle")}</h2>
              <p className="text-brand-secondary leading-relaxed">{t("probDesc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((number) => (
                <article key={number} className={`rounded-3xl p-6 border shadow-soft ${number === 4 ? "bg-brand-cream border-brand-accent/50" : "bg-brand-bg border-brand-border"}`}>
                  <span className="text-xs font-bold text-brand-muted">{number}/4</span>
                  <h3 className="font-display font-black text-lg mt-4 mb-3">{t(`probBox${number}Title`)}</h3>
                  <p className="text-sm text-brand-secondary leading-relaxed">{t(`probBox${number}Desc`)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-brand-bg">
          <div className="layout-container">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-12">
              <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight">{t("tutorialTitle")}</h2>
              <p className="text-brand-secondary leading-relaxed">{t("tutorialDesc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              {steps.map((step, index) => (
                <article key={step.title} className="bg-brand-card border border-brand-border rounded-3xl p-6 shadow-soft">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-accent/40 flex items-center justify-center font-display font-black mb-5">{index + 1}</div>
                  <h3 className="font-display font-black text-base mb-3">{step.title.replace(/^\d+\.\s*/, "")}</h3>
                  <p className="text-sm text-brand-secondary leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>
            <div className="max-w-4xl mx-auto mt-10 w-full aspect-video rounded-3xl overflow-hidden border border-brand-border bg-zinc-950 shadow-soft">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/Hf8XvH3ZgKY?si=SJzsG97XkP0aEbnS"
                title={currentLocale === "en" ? "ShopiDeck: Klaviyo Bot Cleaner walkthrough" : "Recorrido de ShopiDeck: Klaviyo Bot Cleaner"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-card border-y border-brand-border">
          <div className="layout-container max-w-4xl">
            <div className="rounded-3xl bg-brand-main text-brand-bg p-8 md:p-12">
              <h2 className="font-display font-black text-2xl md:text-3xl mb-6">{t("doesNotTitle")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 8 }, (_, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-brand-bg/80">
                    <Check className="w-4 h-4 mt-0.5 text-brand-accent flex-shrink-0" />
                    <span>{t(`doesNot${index + 1}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-brand-cream/60">
          <div className="layout-container">
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-12">
              <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight">{t("pricingTitle")}</h2>
              <p className="text-brand-secondary">{t("pricingDesc")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {pricingPlans.map((plan) => (
                <article key={plan.name} className={`bg-brand-card rounded-3xl border p-6 flex flex-col ${plan.popular ? "border-brand-main ring-1 ring-brand-main" : "border-brand-border"}`}>
                  <h3 className="font-display font-black text-2xl">{plan.name}</h3>
                  <p className="text-sm text-brand-secondary mt-3 min-h-12">{plan.description}</p>
                  <div className="flex items-baseline gap-2 my-6">
                    <span className="font-display font-black text-5xl">{plan.price}</span>
                    <span className="text-xs text-brand-muted">/ {plan.period}</span>
                  </div>
                  <ul className="border-t border-brand-border pt-5 space-y-3 text-sm text-brand-secondary flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2"><Check className="w-4 h-4 text-brand-accent-hover mt-0.5 flex-shrink-0" /><span>{feature}</span></li>
                    ))}
                  </ul>
                  <a
                    href={SHOPIFY_APP_STORE_URL}
                    target={isExternalUrl(SHOPIFY_APP_STORE_URL) ? "_blank" : undefined}
                    rel={isExternalUrl(SHOPIFY_APP_STORE_URL) ? "noopener noreferrer" : undefined}
                    className={`mt-7 w-full text-center py-3.5 rounded-xl font-bold text-sm border transition-colors ${plan.popular ? "bg-brand-accent hover:bg-brand-accent-hover border-brand-main/15" : "bg-brand-bg hover:bg-brand-cream border-brand-border"}`}
                  >
                    {t("install")}
                  </a>
                </article>
              ))}
            </div>
            <p className="max-w-3xl mx-auto mt-8 text-center text-sm text-brand-secondary bg-brand-warning border border-brand-accent/40 rounded-2xl p-4">{t("savingsNote")}</p>
          </div>
        </section>

        <section className="py-20 bg-brand-card border-t border-brand-border">
          <div className="layout-container">
            <div className="text-center flex flex-col gap-4 mb-12">
              <h2 className="font-display font-black text-2xl md:text-4xl tracking-tight">{t("faqTitle")}</h2>
            </div>
            <FaqSection faqs={faqs} />
          </div>
        </section>

        <section className="py-20 bg-brand-cream border-t border-brand-border text-center">
          <div className="layout-container max-w-2xl flex flex-col items-center gap-5">
            <h2 className="font-display font-black text-3xl tracking-tight">{t("ctaTitle")}</h2>
            <p className="text-brand-secondary">{t("ctaDesc")}</p>
            <a
              href={SHOPIFY_APP_STORE_URL}
              target={isExternalUrl(SHOPIFY_APP_STORE_URL) ? "_blank" : undefined}
              rel={isExternalUrl(SHOPIFY_APP_STORE_URL) ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-main px-8 py-4 rounded-2xl font-bold border border-brand-main/15 transition-colors"
            >
              {t("ctaBtn")} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
