import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaqSection from "../../components/FaqSection";
import { Check, ExternalLink } from "lucide-react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import {
  PRODUCT_NAME,
  BOTCLEANER_INTERFACE,
  BOTCLEANER_INTERFACE_HEIGHT,
  BOTCLEANER_INTERFACE_WIDTH,
  BOTCLEANER_LOGO,
  BOTCLEANER_LOGO_HEIGHT,
  BOTCLEANER_LOGO_URL,
  BOTCLEANER_LOGO_WIDTH,
  SHOPIFY_APP_STORE_URL,
  SITE_MARK_HEIGHT,
  SITE_MARK_URL,
  SITE_MARK_WIDTH,
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
        url: BOTCLEANER_LOGO,
        width: BOTCLEANER_LOGO_WIDTH,
        height: BOTCLEANER_LOGO_HEIGHT,
        alt: PRODUCT_NAME,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: BOTCLEANER_LOGO, alt: PRODUCT_NAME }],
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
    image: BOTCLEANER_LOGO_URL,
    publisher: {
      "@type": "Organization",
      name: "ShopiDeck",
      logo: { "@type": "ImageObject", url: SITE_MARK_URL, width: SITE_MARK_WIDTH, height: SITE_MARK_HEIGHT },
    },
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
        <section className="relative overflow-hidden bg-brand-bg pb-16 pt-16 md:pb-24 md:pt-24">
          <div className="layout-container relative z-10 flex flex-col items-center text-center">
            <div className="flex max-w-4xl flex-col items-center gap-6">
              <h1 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-brand-main sm:text-5xl lg:text-6xl">
                {t("title")}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-brand-secondary md:text-lg">
                {t("subtitle")}
              </p>
              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <a
                  href={SHOPIFY_APP_STORE_URL}
                  target={isExternalUrl(SHOPIFY_APP_STORE_URL) ? "_blank" : undefined}
                  rel={isExternalUrl(SHOPIFY_APP_STORE_URL) ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#f1f1ef] px-7 py-3.5 font-bold text-black transition-colors hover:bg-[#e3e3e0]"
                >
                  <Image
                    src="/shopify-logo-png-transparent.png"
                    alt=""
                    width={30}
                    height={34}
                    className="h-8 w-auto"
                  />
                  {t("install")}
                </a>
                <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-brand-main bg-brand-card px-7 py-3.5 font-bold text-brand-main transition-colors hover:bg-brand-cream">
                  {t("trySimulator")}
                </a>
              </div>
              <p className="text-xs text-brand-muted">{t("note")}</p>
            </div>

            <div className="relative mt-12 w-full max-w-6xl md:mt-16">
              <div aria-hidden="true" className="absolute inset-x-[8%] bottom-4 top-[18%] rounded-t-[50%] bg-brand-cream" />
              <div aria-hidden="true" className="absolute inset-x-[16%] bottom-7 top-[28%] rounded-t-[50%] border border-brand-accent/35" />

              <div className="absolute left-0 top-[18%] z-20 hidden w-44 -rotate-2 rounded-3xl border border-brand-border bg-brand-card p-4 text-left shadow-premium lg:block">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">OAuth</span>
                <p className="mt-1 font-display text-lg font-black text-brand-main">
                  {currentLocale === "en" ? "Secure connection" : "Conexión segura"}
                </p>
              </div>
              <div className="absolute right-0 top-[22%] z-20 hidden w-48 rotate-2 rounded-3xl border border-brand-accent/50 bg-brand-accent p-4 text-left shadow-premium lg:block">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-main/60">
                  {currentLocale === "en" ? "Risk signals" : "Señales de riesgo"}
                </span>
                <p className="mt-1 font-display text-xl font-black text-brand-main">
                  {currentLocale === "en" ? "Explainable" : "Explicables"}
                </p>
              </div>
              <div className="absolute bottom-[12%] left-[2%] z-20 hidden w-48 rounded-3xl border border-brand-main bg-brand-main p-4 text-left text-brand-bg shadow-premium lg:block">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-bg/55">
                  {currentLocale === "en" ? "Workflow" : "Flujo"}
                </span>
                <p className="mt-1 font-display text-xl font-black">
                  {currentLocale === "en" ? "Review first" : "Revisa primero"}
                </p>
              </div>
              <div className="absolute bottom-[16%] right-[1%] z-20 hidden w-48 rounded-3xl border border-brand-border bg-brand-card p-4 text-left shadow-premium lg:block">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">
                  {currentLocale === "en" ? "Decisions" : "Decisiones"}
                </span>
                <p className="mt-1 font-display text-lg font-black text-brand-main">
                  {currentLocale === "en" ? "Merchant control" : "Control del comerciante"}
                </p>
              </div>

              <div className="relative z-10 mx-auto w-full max-w-4xl px-1 sm:px-8 lg:px-20">
                <div className="rounded-[1.6rem] border-[6px] border-brand-main bg-brand-main p-1.5 shadow-[0_30px_80px_-28px_rgba(17,17,17,0.45)] sm:border-[10px] sm:p-2">
                  <div className="overflow-hidden rounded-[0.9rem] bg-[#f1f1f1]">
                    <Image
                      src={BOTCLEANER_INTERFACE}
                      alt={currentLocale === "en"
                        ? "ShopiDeck Klaviyo Bot Cleaner profile audit dashboard displayed on a desktop monitor"
                        : "Panel de auditoría de perfiles de ShopiDeck Klaviyo Bot Cleaner mostrado en un monitor de escritorio"}
                      width={BOTCLEANER_INTERFACE_WIDTH}
                      height={BOTCLEANER_INTERFACE_HEIGHT}
                      sizes="(max-width: 1024px) 92vw, 760px"
                      className="block h-auto w-full"
                      priority
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="mx-auto h-12 w-24 bg-brand-main sm:h-16 sm:w-32" />
                <div aria-hidden="true" className="mx-auto h-3 w-48 rounded-full bg-brand-main shadow-soft sm:w-64" />
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
                  <h3 className="font-display font-black text-lg mb-3">{t(`probBox${number}Title`)}</h3>
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

