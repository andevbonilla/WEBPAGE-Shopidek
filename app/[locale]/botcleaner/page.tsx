import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProblemSolutionWorkflow from "../../components/ProblemSolutionWorkflow";
import FaqSection from "../../components/FaqSection";
import { 
  Check, 
  Zap, 
  ExternalLink,
  Shield,
  Globe,
  LineChart,
  Coins
} from "lucide-react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

const dictionaries = { en, es };

interface PageProps {
  params: Promise<{ locale: string }>;
}

// Generate organic SEO metadata specifically for the Klaviyo Bot Cleaner product page using latest Next.js conventions
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";
  
  const title = currentLocale === "en" 
    ? "Klaviyo BotCleaner | Stop Shopify Spam Email Signups & Protect Deliverability"
    : "Klaviyo BotCleaner | Evita Registros de Spam en Shopify y Protege la Entregabilidad";
    
  const description = currentLocale === "en"
    ? "Improve Klaviyo email open rates by 25%+. BotCleaner blocks temporary disposable email addresses, flags spambots in real-time, and secures Shopify storefront checkout logs."
    : "Mejora un 25%+ las aperturas en Klaviyo. BotCleaner bloquea correos temporales desechables, detecta spambots de checkout en tiempo real y protege tu base de datos.";
    
  const metadataBase = new URL("https://shopideck.com");
  const canonicalPath = `/${currentLocale}/botcleaner`;

  return {
    metadataBase,
    title,
    description,
    keywords: currentLocale === "en"
      ? "Shopify Klaviyo bot cleaner, Shopify spam email blocker, list hygiene tool Shopify, disposable email checker, checkout bots, spambots, email deliverability, improve open rates, email bounce rate"
      : "bot cleaner Shopify Klaviyo, bloquear correos falsos Shopify, higiene de listas Shopify, verificar correos temporales, bots de checkout, entregabilidad de email, mejorar tasa de apertura, tasa de rebote",
    alternates: {
      canonical: canonicalPath,
      languages: {
        "en": "/en/botcleaner",
        "es": "/es/botcleaner",
        "x-default": "/en/botcleaner"
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      }
    },
    icons: {
      icon: [
        { url: "/favicons-botcleaner/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicons-botcleaner/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      shortcut: "/favicons-botcleaner/favicon.ico",
      apple: "/favicons-botcleaner/apple-touch-icon.png",
    },
    manifest: "/favicons-botcleaner/site.webmanifest",
    openGraph: {
      title,
      description,
      url: `https://shopideck.com/${currentLocale}/botcleaner`,
      siteName: "ShopiDeck",
      locale: currentLocale === "en" ? "en_US" : "es_ES",
      type: "website",
      images: [
        {
          url: "/favicons-botcleaner/android-chrome-512x512.png",
          width: 512,
          height: 512,
          alt: "Klaviyo BotCleaner by ShopiDeck",
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/favicons-botcleaner/android-chrome-512x512.png"],
      creator: "@shopideck"
    }
  };
}

export default async function BotCleanerPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";
  const dict = dictionaries[currentLocale].BotCleaner as Record<string, string>;

  const t = (key: string, values?: Record<string, string | number>) => {
    let text = dict[key] || "";
    if (values) {
      Object.keys(values).forEach((k) => {
        text = text.replace(`{${k}}`, values[k]);
      });
    }
    return text;
  };

  const pricingPlans = [
    {
      name: "Free Audit",
      description: currentLocale === "en"
        ? "See your first audit and estimated savings before choosing a paid plan."
        : "Consulta tu primera auditoría y el ahorro estimado antes de elegir un plan de pago.",
      price: "$0",
      period: currentLocale === "en" ? "free forever" : "gratis para siempre",
      features: currentLocale === "en" ? [
        "One initial profile audit",
        "Up to 100,000 profiles in the initial audit",
        "Shows estimated potential savings"
      ] : [
        "Una auditoría inicial de perfiles",
        "Hasta 100,000 perfiles en la auditoría inicial",
        "Muestra el ahorro potencial estimado"
      ],
      cta: currentLocale === "en" ? "Free audit included" : "Auditoría gratis incluida",
      popular: false
    },
    {
      name: "Starter",
      description: currentLocale === "en"
        ? "Ideal for growing small stores"
        : "Ideal para tiendas pequeñas en crecimiento",
      price: "$9",
      period: currentLocale === "en" ? "per month" : "al mes",
      features: currentLocale === "en" ? [
        "Up to 5,000 scanned profiles/mo",
        "2 scans per month",
        "Up to 500 suppressions/mo",
        "Detailed information table for each profile"
      ] : [
        "Hasta 5,000 perfiles escaneados/mes",
        "2 scans mensuales",
        "Hasta 500 supresiones/mes",
        "Tabla de información detallada para cada perfil"
      ],
      cta: currentLocale === "en" ? "Current" : "Actual",
      popular: false
    },
    {
      name: "Growth",
      description: currentLocale === "en"
        ? "Most popular recommended plan"
        : "Plan recomendado más popular",
      price: "$19",
      period: currentLocale === "en" ? "per month" : "al mes",
      features: currentLocale === "en" ? [
        "Up to 25,000 scanned profiles/mo",
        "5 scans per month",
        "Up to 5,000 suppressions/mo",
        "Detailed information table for each profile",
        "CSV export of results"
      ] : [
        "Hasta 25,000 perfiles escaneados/mes",
        "5 scans mensuales",
        "Hasta 5,000 supresiones/mes",
        "Tabla de información detallada para cada perfil",
        "Exportación CSV de resultados"
      ],
      cta: currentLocale === "en" ? "Try 7 Days Free" : "Probar 7 Días Gratis",
      popular: true
    },
    {
      name: "Pro",
      description: currentLocale === "en"
        ? "Designed for large brands or agencies"
        : "Diseñado para marcas grandes o agencias",
      price: "$49",
      period: currentLocale === "en" ? "per month" : "al mes",
      features: currentLocale === "en" ? [
        "Up to 100,000 scanned profiles/mo",
        "15 scans per month",
        "Up to 25,000 suppressions/mo",
        "Dedicated priority support",
        "CSV export of results"
      ] : [
        "Hasta 100,000 perfiles escaneados/mes",
        "15 scans mensuales",
        "Hasta 25,000 supresiones/mes",
        "Soporte técnico prioritario",
        "Exportación CSV de resultados"
      ],
      cta: currentLocale === "en" ? "Choose Pro Plan" : "Elegir Plan Pro",
      popular: false
    }
  ];

  const faqs = [
    {
      question: t("faqQuestion1"),
      answer: t("faqAnswer1")
    },
    {
      question: t("faqQuestion2"),
      answer: t("faqAnswer2")
    },
    {
      question: t("faqQuestion3"),
      answer: t("faqAnswer3")
    }
  ];

  const tutorialSteps = [
    {
      step: 1,
      titleKey: "tStep1Title",
      descKey: "tStep1Desc",
      icon: Globe,
      videoUrl: "https://www.youtube.com/embed/Hf8XvH3ZgKY?start=9",
      showInstallButton: false
    },
    {
      step: 2,
      titleKey: "tStep2Title",
      descKey: "tStep2Desc",
      icon: Zap,
      videoUrl: "https://www.youtube.com/embed/Hf8XvH3ZgKY?start=35",
      showInstallButton: false
    },
    {
      step: 3,
      titleKey: "tStep3Title",
      descKey: "tStep3Desc",
      icon: LineChart,
      videoUrl: "https://www.youtube.com/embed/Hf8XvH3ZgKY?start=51",
      showInstallButton: false
    },
    {
      step: 4,
      titleKey: "tStep4Title",
      descKey: "tStep4Desc",
      icon: Coins,
      videoUrl: "https://www.youtube.com/embed/Hf8XvH3ZgKY?start=105",
      showInstallButton: false
    },
    {
      step: 5,
      titleKey: "tStep5Title",
      descKey: "tStep5Desc",
      icon: Shield,
      videoUrl: "https://www.youtube.com/embed/Hf8XvH3ZgKY?start=147",
      showInstallButton: false
    }
  ];

  // Google SEO Structured Data (JSON-LD) for Rich Results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Klaviyo BotCleaner by ShopiDeck",
    "operatingSystem": "Shopify / Server-side Integration",
    "applicationCategory": "BusinessApplication, SecurityApplication",
    "description": currentLocale === "en"
      ? "Klaviyo BotCleaner is a premium Shopify app that scans, flags, and suppresses spambot checkouts and temporary burner email addresses in real-time, improving list hygiene and deliverability."
      : "Klaviyo BotCleaner es una aplicación premium de Shopify que analiza, marca y suprime registros falsos de spambots y correos temporales desechables en tiempo real, mejorando la entregabilidad de tus campañas.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "49",
      "offerCount": "4",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Audit",
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": "9",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Growth Plan",
          "price": "19",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Pro Plan",
          "price": "49",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* Dynamic JSON-LD Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd).replace(/</g, '\\u003c') }}
      />
      {/* SHARED HEADER */}
      <Navbar />

      {/* BRAND SUBNAV BADGE */}
      <div className="bg-brand-cream border-b border-brand-border py-3">
        <div className="layout-container flex items-center justify-between text-xs font-bold text-brand-muted">
          <span>{currentLocale === "en" ? "Application > Klaviyo BotCleaner" : "Aplicación > Klaviyo BotCleaner"}</span>
          <Link href="/" className="hover:text-brand-main transition-colors flex items-center gap-1">
            ← {currentLocale === "en" ? "Back to Suite" : "Volver a la Suite"}
          </Link>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg to-brand-cream/40">
        <div className="layout-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <h1 className="font-display font-black text-3xl sm:text-4xl leading-tight text-brand-main tracking-tight uppercase">
              {t("title")}
            </h1>
            <p className="text-base text-brand-secondary leading-relaxed font-light">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="https://apps.shopify.com/klaviyo-bot-cleaner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F2F2F0] hover:bg-[#d7d7d5] text-black text-xs font-bold py-4 px-8 rounded-2xl transition-colors shadow-soft border border-brand-border/40"
              >
                <Image src="/shopify-logo-png-transparent.png" alt="Shopify Icon" width={20} height={20} />
                <span className="truncate">{currentLocale === "en" ? "Install on Shopify" : "Instalar en Shopify"}</span>
              </a>
              <a 
                href="#problem-solution" 
                className="bg-brand-card hover:bg-zinc-50 text-brand-main text-center px-8 py-4 rounded-2xl font-semibold border border-brand-border shadow-soft transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                {t("trySimulator")}
              </a>
            </div>
            <p className="text-xs text-brand-muted font-medium">
              {t("note")}
            </p>
          </div>

          <div className="lg:col-span-6 relative flex justify-center w-full">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-brand-border shadow-premium bg-brand-card">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
                alt="Klaviyo BotCleaner Dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <ProblemSolutionWorkflow
        locale={currentLocale}
        probBadge={t("probBadge")}
        probTitle={t("probTitle")}
        probDesc={t("probDesc")}
        probBox1Title={t("probBox1Title")}
        probBox1Desc={t("probBox1Desc")}
        probBox2Title={t("probBox2Title")}
        probBox2Desc={t("probBox2Desc")}
        probBox3Title={t("probBox3Title")}
        probBox3Desc={t("probBox3Desc")}
        probBox4Title={t("probBox4Title")}
        probBox4Desc={t("probBox4Desc")}
      />

      {/* DETAILED INSTALLATION TUTORIAL SECTION (TUTORIAL DE INSTALACIÓN) */}
      <section id="tutorial" className="py-20 md:py-28 bg-brand-bg border-b border-brand-border">
        <div className="layout-container">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
            <span className="font-display font-extrabold text-xs text-brand-accent bg-brand-main px-4 py-1.5 rounded-full self-center uppercase tracking-widest">
              {t("tutorialBadge")}
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight uppercase leading-tight">
              {t("tutorialTitle")}
            </h2>
            <p className="text-brand-secondary text-sm md:text-base leading-relaxed font-light">
              {t("tutorialDesc")}
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {tutorialSteps.map((stepItem, idx) => {
              const IconComponent = stepItem.icon;
              return (
                <div 
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                >
                  {/* Step Description Card */}
                  <div className="lg:col-span-5 bg-brand-card p-8 rounded-3xl border border-brand-border shadow-soft flex flex-col justify-between hover:shadow-premium transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-brand-accent-hover" />
                        </div>
                        <span className="text-[10px] bg-brand-bg px-2.5 py-1 rounded-full text-brand-muted uppercase font-black tracking-wider border border-brand-border/40">
                          {currentLocale === "en" ? `Step ${stepItem.step}` : `Paso ${stepItem.step}`}
                        </span>
                      </div>
                      <h4 className="font-display font-black text-lg text-brand-main mb-2">
                        {t(stepItem.titleKey)}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-secondary font-light leading-relaxed">
                        {t(stepItem.descKey)}
                      </p>

                      {stepItem.showInstallButton && (
                        <div className="mt-6">
                          <a
                            href="https://apps.shopify.com/klaviyo-bot-cleaner"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#F2F2F0] hover:bg-[#d7d7d5] text-black text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shadow-soft border border-brand-border/40 w-full sm:w-auto"
                          >
                            <Image src="/shopify-logo-png-transparent.png" alt="Shopify Icon" width={20} height={20} />
                            <span className="truncate">{currentLocale === "en" ? "Install on Shopify" : "Instalar en Shopify"}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Step Video Player Placeholder */}
                  <div className="lg:col-span-7 relative min-h-[220px] sm:min-h-[280px] lg:min-h-0 bg-zinc-950 rounded-3xl overflow-hidden border border-brand-border/40 shadow-soft hover:shadow-premium transition-all duration-300">
                    <iframe 
                      className="absolute inset-0 w-full h-full border-0"
                      src={stepItem.videoUrl}
                      title={`ShopiDeck Tutorial Step ${stepItem.step}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* PRICING PLANS */}
      <section id="pricing" className="py-20 bg-brand-cream/50 border-t border-brand-border">
        <div className="layout-container">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
            <span className="font-display font-extrabold text-xs text-brand-accent bg-brand-main px-4 py-1.5 rounded-full self-center uppercase tracking-wider">
              {t("pricingBadge")}
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight uppercase">
              {t("pricingTitle")}
            </h2>
            <p className="text-brand-secondary text-sm font-light">
              {t("pricingDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3.5">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-brand-card rounded-2xl border p-6 sm:p-7 min-h-[520px] flex flex-col justify-between shadow-soft hover:shadow-premium transition-all duration-300 relative overflow-hidden ${
                  plan.name === "Starter"
                    ? "border-brand-main ring-1 ring-brand-main"
                    : "border-brand-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-0 bg-brand-accent text-brand-main text-[10px] font-black uppercase tracking-wider px-7 py-4 rounded-bl-2xl">
                    {t("pricingPopular")}
                  </span>
                )}

                <div>
                  <h3 className="font-display font-black text-2xl text-brand-main mb-3 tracking-tight">{plan.name}</h3>
                  <p className="text-sm text-brand-secondary leading-relaxed min-h-[48px] mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1 mb-7">
                    <span className="text-5xl font-display font-black text-brand-main tracking-tight">{plan.price}</span>
                    <span className="text-sm text-brand-secondary font-bold">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-4 border-t border-brand-border/80 pt-7 mb-8 text-sm text-brand-secondary">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-brand-accent text-brand-accent">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="https://apps.shopify.com/klaviyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-4 rounded-xl font-black text-sm transition-colors border ${
                    plan.popular 
                      ? "bg-brand-accent hover:bg-brand-accent-hover text-brand-main border-brand-main/15 shadow-soft" 
                      : "bg-brand-bg hover:bg-zinc-100 text-brand-main border-brand-border"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS SECTION (ACCORDION CLIENT LEAF) */}
      <section className="py-20 bg-brand-card border-t border-brand-border">
        <div className="layout-container">
          <div className="text-center flex flex-col gap-4 mb-16">
            <span className="font-display font-extrabold text-xs text-brand-muted bg-brand-bg border border-brand-border px-3.5 py-1.5 rounded-full self-center uppercase tracking-wider">
              {t("faqBadge")}
            </span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight uppercase">
              {t("faqTitle")}
            </h2>
          </div>

          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-cream border-t border-brand-border text-center relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-2xl"></div>
        <div className="layout-container relative z-10 flex flex-col gap-6 items-center">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-main tracking-tight uppercase">
            {t("ctaTitle")}
          </h2>
          <p className="text-xs md:text-sm text-brand-secondary font-light max-w-xl">
            {t("ctaDesc")}
          </p>
          <a 
            href="https://apps.shopify.com/klaviyo" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent hover:bg-brand-accent-hover text-brand-main px-8 py-4 rounded-2xl font-bold border border-brand-main/15 shadow-premium transition-all duration-200 hover:-translate-y-0.5 text-base flex items-center justify-center gap-2"
          >
            <span>{t("ctaBtn")}</span>
            <ExternalLink className="w-4.5 h-4.5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
