import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import FootprintTracker from "../components/FootprintTracker";
import { PRODUCT_NAME, SHOPIFY_APP_STORE_URL } from "../config";
import {
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Coins,
  Target,
  Headphones
} from "lucide-react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import type { Metadata } from "next";
import { SITE_URL, localizedPath } from "../config";

const dictionaries = { en, es };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  const path = localizedPath(currentLocale);
  const title = currentLocale === "en" ? "ShopiDeck | Focused tools for Shopify merchants" : "ShopiDeck | Herramientas enfocadas para Shopify";
  const description = currentLocale === "en"
    ? "Focused tools for Shopify merchants who want cleaner data, smarter marketing, and better growth decisions."
    : "Herramientas enfocadas para comerciantes de Shopify que quieren datos más limpios, marketing más inteligente y mejores decisiones de crecimiento.";
  return { metadataBase: new URL(SITE_URL), title, description, alternates: { canonical: path, languages: { en: "/", es: "/es", "x-default": "/" } }, openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: "ShopiDeck", type: "website" } };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";
  const dict = dictionaries[currentLocale].Home;

  const t = (key: string, values?: Record<string, string | number>) => {
    let text = (dict as Record<string, string>)[key] || "";
    if (values) {
      Object.keys(values).forEach((k) => {
        text = text.replace(`{${k}}`, String(values[k]));
      });
    }
    return text;
  };

  const products = [
    {
      id: "botcleaner",
      name: PRODUCT_NAME,
      initials: "Bc",
      icon: "/favicons-botcleaner/android-chrome-192x192.png",
      description: t("prodBotDesc"),
      benefits: [
        t("prodBotB1"),
        t("prodBotB2"),
        t("prodBotB3")
      ],
      brandColor: "bg-[#ffbd59]/10 text-[#ffbd59] border-[#ffbd59]/30",
      accentBg: "bg-[#ffbd59]",
      link: "/botcleaner",
      coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      active: true
    },
    {
      id: "cart-recovery",
      name: "Cart Recovery",
      initials: "Cr",
      icon: "",
      description: t("prodCartDesc"),
      benefits: [
        t("prodCartB1"),
        t("prodCartB2"),
        t("prodCartB3")
      ],
      brandColor: "bg-indigo-50 text-indigo-400 border-indigo-200/60",
      accentBg: "bg-indigo-300",
      link: "/help",
      coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
      active: false
    },
    {
      id: "review-booster",
      name: "Review Booster",
      initials: "Rb",
      icon: "",
      description: t("prodRevDesc"),
      benefits: [
        t("prodRevB1"),
        t("prodRevB2"),
        t("prodRevB3")
      ],
      brandColor: "bg-emerald-50 text-emerald-400 border-emerald-200/60",
      accentBg: "bg-emerald-300",
      link: "/help",
      coverImage: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=600&q=80",
      active: false
    }
  ];

  const faqs = [
    {
      question: t("faq1Q"),
      answer: t("faq1A")
    },
    {
      question: t("faq2Q"),
      answer: t("faq2A")
    },
    {
      question: t("faq3Q"),
      answer: t("faq3A")
    },
    {
      question: t("faq4Q"),
      answer: t("faq4A")
    }
  ];

  const whyCards = [
    {
      titleKey: "valTransparency",
      descKey: "valTransparencyDesc",
      icon: Shield,
    },
    {
      titleKey: "valSpeed",
      descKey: "valSpeedDesc",
      icon: Zap,
    },
    {
      titleKey: "valSimplicity",
      descKey: "valSimplicityDesc",
      icon: CheckCircle2,
    },
    {
      titleKey: "valNoHiddenCosts",
      descKey: "valNoHiddenCostsDesc",
      icon: Coins,
    },
    {
      titleKey: "valSpecificApps",
      descKey: "valSpecificAppsDesc",
      icon: Target,
    },
    {
      titleKey: "valSupport",
      descKey: "valSupportDesc",
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* HEADER / NAVIGATION */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden w-full h-[90vh] min-h-[500px] flex items-center justify-center py-20 md:py-28 bg-brand-bg border-b border-brand-border/60 select-none">
        {/* Passive Visual Footprint layer (isolated client-side mouse tracker) */}
        <FootprintTracker />

        {/* Static Background Stars/Sparkles in the Corners (Replacing the Hands) */}
        {/* Top-Right set of 30% transparent stars */}
        <div className="absolute top-10 right-10 md:top-16 md:right-16 flex gap-4 pointer-events-none select-none opacity-30 z-0">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-brand-main animate-pulse">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2Z" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-brand-main translate-y-6 -translate-x-2">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2Z" />
          </svg>
        </div>

        {/* Bottom-Left set of 30% transparent stars */}
        <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 flex gap-4 pointer-events-none select-none opacity-30 z-0">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-brand-main animate-pulse">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2Z" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-brand-main -translate-y-6 translate-x-2">
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2Z" />
          </svg>
        </div>

        {/* Main Centered Content (100% Server Component, perfect for SEO!) */}
        <div className="layout-container relative z-20 flex flex-col items-center text-center gap-6 max-w-4xl px-4 pointer-events-auto">
          <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl leading-[1.25] tracking-tight text-brand-main max-w-3xl">
            {t("heroTitle")}
          </h1>
          <p className="text-sm md:text-base text-brand-secondary/90 leading-relaxed max-w-2xl font-light lowercase">
            {t("heroSubtitle")}
          </p>
          <div className="mt-4">
            <a
              href="#features"
              className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-brand-main text-center px-10 py-4.5 rounded-2xl font-bold border border-brand-main/15 transition-colors duration-200 text-base"
            >
              {t("activeApps")}
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW SECTION (ADOBE CATALOG INSPIRED GRID) */}
      <section id="features" className="py-20 md:py-28 bg-brand-card border-y border-brand-border">
        <div className="layout-container">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight uppercase">
              {t("portfolioTitle")}
            </h2>
            <p className="text-brand-secondary text-sm md:text-base leading-relaxed font-light">
              {t("portfolioDesc")}
            </p>
          </div>

          {/* Adobe-Style App Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className={`bg-brand-card rounded-3xl border border-brand-border/60 flex flex-col justify-between relative group overflow-hidden ${!prod.active ? "opacity-90" : ""
                  }`}
              >
                {/* Full-width Cover Image (Adobe Style - Sleek Smaller Height) */}
                <div className="relative h-[140px] w-full overflow-hidden bg-zinc-100 border-b border-brand-border/50">
                  <Image
                    src={prod.coverImage}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Card Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Square Icon sitting alone on its own row */}
                    <div className="mb-5">
                      <div className={`w-14 h-14 rounded-2xl border ${prod.brandColor} flex items-center justify-center font-display font-black text-lg select-none shadow-soft flex-shrink-0 overflow-hidden`}>
                        {prod.icon ? (
                          <Image
                            src={prod.icon}
                            alt={`${prod.name} Icon`}
                            width={56}
                            height={56}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <span className="text-xl">?</span>
                        )}
                      </div>
                    </div>

                    {/* App Title & Category Status */}
                    <div className="mb-3">
                      <h3 className="font-display font-black text-xl text-brand-main leading-tight">
                        {prod.name}
                      </h3>
                      <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider block mt-1">
                        {t("comingSoon")}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-brand-secondary text-xs md:text-sm leading-relaxed mb-6 font-light">
                      {prod.description}
                    </p>
                  </div>

                  <div>

                    {/* Horizontal Divider separating body from actions */}
                    <hr className="border-brand-border/60 mb-5" />

                    {prod.active ? (
                       /* Product status: availability and details */
                      <div className="flex flex-col items-center gap-3">
                        {/* Green Shopify Install Button */}
                        <a
                          href={SHOPIFY_APP_STORE_URL}
                          target={SHOPIFY_APP_STORE_URL.startsWith("http") ? "_blank" : undefined}
                          rel={SHOPIFY_APP_STORE_URL.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="w-full flex-1 inline-flex items-center justify-center gap-2 bg-[#F2F2F0] hover:bg-[#d7d7d5] text-black text-xs font-bold py-3.5 px-4 rounded-xl transition-colors"
                        >
                          <Image src="/shopify-logo-png-transparent.png" alt="Shopify Icon" width={20} height={20} />
                          <span className="truncate">{currentLocale === "en" ? "Install on Shopify" : "Instalar en Shopify"}</span>
                        </a>
                        {/* White details button with thin border */}
                        <Link
                          href={prod.link}
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-card hover:bg-zinc-50 border border-brand-border text-brand-main text-xs font-bold py-3.5 px-4 rounded-xl transition-colors group/details"
                        >
                          <span className="truncate">{currentLocale === "en" ? "View Details" : "Ver detalles"}</span>
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transform group-hover/details:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    ) : (
                      <div className="w-full inline-flex items-center justify-center bg-brand-card text-brand-muted text-xs font-bold py-3.5 px-4 rounded-xl border border-brand-border/80 uppercase">
                        <span className="truncate">{t("comingSoon")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Idea Suggestion Card at the bottom of Products */}
          <div className="mt-16 bg-brand-card p-8 rounded-3xl border border-brand-border/60 shadow-soft max-w-2xl mx-auto text-center flex flex-col items-center gap-4">
            <h4 className="font-display font-black text-lg text-brand-main uppercase tracking-tight">
              {t("ideaTitle")}
            </h4>
            <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed font-light">
              {t("ideaDesc")}
            </p>
            <Link
              href="/help#contact-form-anchor"
              className="mt-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-main px-8 py-3 rounded-2xl text-xs font-bold border border-brand-main/15 transition-colors duration-200"
            >
              {t("ideaCta")}
            </Link>
          </div>

        </div>
      </section>

      {/* WHY US / PHILOSOPHY SECTION */}
      <section id="why-us" className="py-20 md:py-28 bg-brand-bg">
        <div className="layout-container">
          
          {/* Centered Headers */}
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight uppercase leading-tight">
              {t("whyTitle")}
            </h2>
            <p className="text-brand-secondary text-sm md:text-base leading-relaxed font-light">
              {t("whyDesc")}
            </p>
          </div>

          {/* 3x2 Grid showing 6 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-brand-card p-8 rounded-3xl border border-brand-border/60 shadow-soft flex flex-col gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-border/60 flex items-center justify-center text-brand-accent shadow-soft group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-brand-accent-hover" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-main leading-tight mb-2">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-secondary font-light leading-relaxed">
                      {t(card.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 md:py-28 bg-brand-card border-t border-brand-border">
        <div className="layout-container">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
            <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight uppercase">
              {t("faqTitle")}
            </h2>
            <p className="text-brand-secondary text-sm font-light">
              {t("faqDesc")}
            </p>
          </div>
          <FaqSection faqs={faqs} />
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 md:py-28 bg-brand-cream border-t border-brand-border relative overflow-hidden">
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-accent rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-200 rounded-full opacity-10 blur-2xl"></div>

        <div className="layout-container text-center relative z-10 flex flex-col gap-6 items-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-main tracking-tight uppercase">
            {t("ctaTitle")}
          </h2>
          <p className="text-sm md:text-base text-brand-secondary max-w-2xl font-light">
            {t("ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#features"
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-main px-8 py-4 rounded-2xl font-bold border border-brand-main/15 transition-colors duration-200 text-base"
            >
              {t("ctaButton")}
            </a>
            <Link
              href="/help"
              className="bg-brand-card hover:bg-zinc-50 text-brand-main px-8 py-4 rounded-2xl font-semibold border border-brand-border transition-colors duration-200 text-base"
            >
              {t("ctaHelp")}
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

