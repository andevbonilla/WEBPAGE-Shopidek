
import { getMessages, resolveLocale, getTranslations, localeInfo } from "@/i18n/messages";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import {
  PRODUCT_NAME,
  BOTCLEANER_ICON,
  SOCIAL_MARKETING_NAME,
  SEO_TOOL_NAME,
  SOCIAL_MARKETING_ICON_SMALL,
  SHOPIFY_APP_STORE_URL,
  SITE_LOGO,
  SITE_LOGO_ALT,
  SITE_LOGO_HEIGHT,
  SITE_LOGO_WIDTH,
  SITE_URL,
  localizedPath,
} from "../config";
import {
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Coins,
  Target,
  Headphones,
  Bot,
  DollarSign,
  TrendingUp,
  Search,
} from "lucide-react";
import type { Metadata } from "next";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const path = localizedPath(currentLocale);
  const title = getMessages(resolveLocale(currentLocale), "UI").shopideckFocusedToolsForShopifyMerchants;
  const description = getMessages(resolveLocale(currentLocale), "UI").focusedToolsForShopifyMerchantsWhoWant;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path, languages: { en: "/", es: "/es", "x-default": "/" } },
    openGraph: {
      locale: localeInfo[currentLocale].openGraph,
      alternateLocale: localeInfo[currentLocale].alternateOpenGraph,
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "ShopiDeck",
      type: "website",
      images: [{ url: SITE_LOGO, width: SITE_LOGO_WIDTH, height: SITE_LOGO_HEIGHT, alt: SITE_LOGO_ALT }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: SITE_LOGO, alt: SITE_LOGO_ALT }] },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const dict = getMessages(currentLocale, "Home");

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
      id: "social-marketing",
      name: SOCIAL_MARKETING_NAME,
      icon: SOCIAL_MARKETING_ICON_SMALL,
      description: t("prodSocialDesc"),
      brandColor: "bg-[#f2eaff] text-[#6b35c8] border-[#8b5cf6]/30",
      link: "/social-marketing",
      active: false,
      hasLanding: true,
    },
    {
      id: "botcleaner",
      name: PRODUCT_NAME,
      icon: BOTCLEANER_ICON,
      description: t("prodBotDesc"),
      brandColor: "bg-[#ffbd59]/10 text-[#ffbd59] border-[#ffbd59]/30",
      link: "/botcleaner",
      active: true,
      hasLanding: true,
    },
    {
      id: "seo-that-sells",
      name: SEO_TOOL_NAME,
      icon: "",
      description: t("prodSeoDesc"),
      brandColor: "bg-brand-cream text-brand-main border-brand-accent/50",
      link: "/help",
      active: false,
      hasLanding: false,
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

  const heroCards = [
    {
      label: getMessages(resolveLocale(currentLocale), "UI").cleanerData,
      icon: Bot,
      cardClass: "bg-brand-accent text-brand-main border-brand-main/10",
      rotationClass: "-rotate-6",
      offsetClass: "lg:translate-y-7",
    },
    {
      label: getMessages(resolveLocale(currentLocale), "UI").fasterWorkflows,
      icon: Zap,
      cardClass: "bg-brand-main text-brand-accent border-brand-main",
      rotationClass: "rotate-3",
      offsetClass: "lg:-translate-y-2",
    },
    {
      label: getMessages(resolveLocale(currentLocale), "UI").lowerWaste,
      icon: DollarSign,
      cardClass: "bg-brand-card text-brand-main border-brand-accent/60",
      rotationClass: "-rotate-2",
      offsetClass: "lg:translate-y-10",
    },
    {
      label: getMessages(resolveLocale(currentLocale), "UI").smarterGrowth,
      icon: TrendingUp,
      cardClass: "bg-brand-cream text-brand-main border-brand-main/10",
      rotationClass: "rotate-5",
      offsetClass: "lg:translate-y-1",
    },
    {
      label: getMessages(resolveLocale(currentLocale), "UI").merchantControl,
      icon: Shield,
      cardClass: "bg-brand-accent text-brand-main border-brand-main/10",
      rotationClass: "-rotate-4",
      offsetClass: "lg:translate-y-8",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* HEADER / NAVIGATION */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-brand-border/60 bg-brand-bg py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="layout-container relative z-10 flex flex-col items-center text-center">
          <h1 className="max-w-4xl font-display text-4xl font-black leading-[1.05] tracking-tight text-brand-main sm:text-5xl lg:text-6xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-brand-secondary sm:text-base">
            {t("heroSubtitle")}
          </p>
          <a
            href="#features"
            className="mt-8 inline-flex items-center justify-center rounded-2xl border border-brand-main/15 bg-brand-accent px-8 py-4 text-sm font-bold text-brand-main transition-colors duration-200 hover:bg-brand-accent-hover sm:px-10 sm:text-base"
          >
            {t("activeApps")}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>

          <div className="mt-12 grid w-full max-w-6xl grid-cols-2 gap-x-3 gap-y-6 sm:mt-16 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:items-end lg:gap-7">
            {heroCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  role="img"
                  aria-label={card.label}
                  className={`relative flex min-h-44 items-end justify-center ${card.offsetClass} ${index === heroCards.length - 1 ? "col-span-2 mx-auto w-full max-w-[13rem] sm:col-span-1 sm:max-w-none" : ""}`}
                >
                  <div
                    className={`relative z-10 flex min-h-32 w-full max-w-[13rem] items-center justify-center rounded-[2rem] border p-5 shadow-premium ${card.cardClass} ${card.rotationClass}`}
                  >
                    <Icon className="h-14 w-14 stroke-[2.1] sm:h-16 sm:w-16" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-brand-card rounded-3xl border border-brand-border/60 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Card Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Square Icon sitting alone on its own row */}
                    <div className="mb-5">
                      <div className={`w-14 h-14 rounded-2xl border ${prod.brandColor} flex items-center justify-center font-display font-black text-lg select-none shadow-soft flex-shrink-0 overflow-hidden`}>
                        {prod.icon ? (
                          <Image
                            src={prod.icon}
                            alt={getTranslations(resolveLocale(currentLocale), "UI")("appIcon", { productName: prod.name })}
                            width={56}
                            height={56}
                            sizes="56px"
                          />
                        ) : (
                          <Search className="h-7 w-7" aria-hidden="true" />
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
                    <p className="text-brand-secondary text-sm leading-relaxed mb-6">
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
                          <span className="truncate">{getMessages(resolveLocale(currentLocale), "UI").installOnShopify}</span>
                        </a>
                        {/* White details button with thin border */}
                        <Link
                          href={prod.link}
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-card hover:bg-zinc-50 border border-brand-border text-brand-main text-xs font-bold py-3.5 px-4 rounded-xl transition-colors group/details"
                        >
                          <span className="truncate">{getMessages(resolveLocale(currentLocale), "UI").viewDetails}</span>
                          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transform group-hover/details:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    ) : prod.hasLanding ? (
                      <Link
                        href={prod.link}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#8b5cf6]/30 bg-[#f2eaff] px-4 py-3.5 text-xs font-bold text-[#5a2aa8] transition-colors hover:bg-[#e8d9ff]"
                      >
                        {t("details")} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
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
                  <div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-border/60 flex items-center justify-center text-brand-accent shadow-soft">
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

