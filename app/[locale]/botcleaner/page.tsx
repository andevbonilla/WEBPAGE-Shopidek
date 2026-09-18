import type { Metadata } from "next";
import Image from "next/image";
import { Check, ExternalLink, Bot, Coins, Target, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getMessages, getTranslations, localeInfo, resolveLocale } from "@/i18n/messages";
import { ProductPage, ProductHero, ProductHeading, ProductFaq } from "../../components/products/ProductPage";
import {
  PRODUCT_NAME, BOTCLEANER_INTERFACE, BOTCLEANER_INTERFACE_HEIGHT,
  BOTCLEANER_INTERFACE_WIDTH, BOTCLEANER_LOGO, BOTCLEANER_LOGO_HEIGHT,
  BOTCLEANER_LOGO_URL, BOTCLEANER_LOGO_WIDTH, SHOPIFY_APP_STORE_URL,
  SITE_MARK_HEIGHT, SITE_MARK_URL, SITE_MARK_WIDTH, SITE_URL, localizedPath,
} from "../../config";

type PageProps = { params: Promise<{ locale: string }> };
const storeLinkProps = { target: "_blank", rel: "noopener noreferrer" } as const;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const t = getTranslations(currentLocale, "BotCleaner");
  const path = localizedPath(currentLocale, "/botcleaner");
  return {
    metadataBase: new URL(SITE_URL),
    title: t("seoTitle"),
    description: t("seoDescription"),
    keywords: t("seoKeywords"),
    alternates: { canonical: path, languages: { en: "/botcleaner", es: "/es/botcleaner", "x-default": "/botcleaner" } },
    openGraph: {
      title: t("seoTitle"), description: t("seoDescription"), url: `${SITE_URL}${path}`,
      siteName: "ShopiDeck", type: "website",
      locale: localeInfo[currentLocale].openGraph, alternateLocale: localeInfo[currentLocale].alternateOpenGraph,
      images: [{ url: BOTCLEANER_LOGO, width: BOTCLEANER_LOGO_WIDTH, height: BOTCLEANER_LOGO_HEIGHT, alt: t("iconAlt") }],
    },
    twitter: { card: "summary", title: t("seoTitle"), description: t("seoDescription"), images: [{ url: BOTCLEANER_LOGO, alt: t("iconAlt") }] },
  };
}

function DesktopPreview({ alt, priority = false }: { alt: string; priority?: boolean }) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="rounded-[1.6rem] border-[6px] border-brand-main bg-brand-main p-1.5 shadow-premium sm:border-[10px] sm:p-2">
        <div className="overflow-hidden rounded-[0.9rem] bg-brand-card">
          <Image src={BOTCLEANER_INTERFACE} alt={alt} width={BOTCLEANER_INTERFACE_WIDTH} height={BOTCLEANER_INTERFACE_HEIGHT}
            sizes={priority ? "(max-width: 1024px) 80vw, 430px" : "(max-width: 1024px) 85vw, 860px"}
            className="block h-auto w-full" priority={priority} />
        </div>
      </div>
      <div aria-hidden="true" className="mx-auto h-10 w-20 bg-brand-main sm:h-12 sm:w-24" />
      <div aria-hidden="true" className="mx-auto h-2.5 w-36 rounded-full bg-brand-main sm:w-48" />
    </div>
  );
}

export default async function BotCleanerPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const copy = getMessages(currentLocale, "BotCleaner");
  const t = getTranslations(currentLocale, "BotCleaner");
  const pricingPlans = copy.plans;
  const faqs = [1, 2, 3, 4, 5, 6, 7, 8].map((number) => ({
    question: t(`faqQuestion${number}` as keyof typeof copy),
    answer: t(`faqAnswer${number}` as keyof typeof copy),
  }));
  const steps = [1, 2, 3, 4, 5].map((number) => ({
    title: t(`tStep${number}Title` as keyof typeof copy).replace(/^\d+\.\s*/, ""),
    description: t(`tStep${number}Desc` as keyof typeof copy),
  }));
  const benefitIcons = [Bot, Coins, Target, ShieldCheck];
  const canonicalUrl = `${SITE_URL}${localizedPath(currentLocale, "/botcleaner")}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication", name: PRODUCT_NAME, applicationCategory: "BusinessApplication",
        operatingSystem: "Shopify Admin", image: BOTCLEANER_LOGO_URL, description: t("schemaDescription"),
        inLanguage: currentLocale, url: canonicalUrl,
        publisher: { "@type": "Organization", name: "ShopiDeck", logo: { "@type": "ImageObject", url: SITE_MARK_URL, width: SITE_MARK_WIDTH, height: SITE_MARK_HEIGHT } },
        offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: "0", highPrice: "49", offerCount: 4 },
      },
      {
        "@type": "WebPage", "@id": `${canonicalUrl}#webpage`, url: canonicalUrl,
        name: t("seoTitle"), description: t("seoDescription"), inLanguage: currentLocale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "ShopiDeck", item: `${SITE_URL}${localizedPath(currentLocale)}` },
          { "@type": "ListItem", position: 2, name: PRODUCT_NAME, item: canonicalUrl },
        ],
      },
      { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };

  return (
    <ProductPage theme="botcleaner">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <ProductHero
        name={PRODUCT_NAME} icon={BOTCLEANER_LOGO} iconAlt={t("iconAlt")} badge={t("badge")}
        lines={[t("title")]} description={t("subtitle")} note={t("note")} pillars={copy.pillars}
        actions={<>
          <a href={SHOPIFY_APP_STORE_URL} {...storeLinkProps} className="product-primary-button">
            <Image src="/shopify-logo-png-transparent.png" alt="" width={22} height={25} />{t("install")}
          </a>
          <a href="#how-it-works" className="product-secondary-button">{t("trySimulator")}</a>
        </>}
        visual={<DesktopPreview alt={t("interfaceAlt")} priority />}
      />

      <section className="product-section bg-brand-card">
        <div className="layout-container">
          <ProductHeading eyebrow={t("probBadge")} title={t("probTitle")} description={t("probDesc")} />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((number, index) => {
              const Icon = benefitIcons[index];
              return (
                <article key={number} className="rounded-3xl border border-brand-border bg-brand-bg p-6 sm:p-7">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-app-soft text-app-ink"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                  <h3 className="font-display text-lg font-black">{t(`probBox${number}Title` as keyof typeof copy)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{t(`probBox${number}Desc` as keyof typeof copy)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="product-section border-y border-app-border bg-app-wash">
        <div className="layout-container">
          <ProductHeading eyebrow={t("previewBadge")} title={t("previewTitle")} description={t("previewDescription")} centered />
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-app-border bg-app-soft p-5 sm:p-8 lg:p-10">
            <DesktopPreview alt={t("interfaceAlt")} />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="product-section scroll-mt-24 bg-brand-card">
        <div className="layout-container">
          <ProductHeading eyebrow={t("tutorialBadge")} title={t("tutorialTitle")} description={t("tutorialDesc")} centered />
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-brand-border p-6">
                <span aria-hidden="true" className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-main font-display text-sm font-black text-white">0{index + 1}</span>
                <h3 className="font-display text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-10 aspect-video w-full max-w-4xl overflow-hidden rounded-3xl border border-brand-border bg-brand-main shadow-soft">
            <iframe className="h-full w-full border-0" src="https://www.youtube.com/embed/Hf8XvH3ZgKY?si=SJzsG97XkP0aEbnS"
              title={t("walkthroughTitle")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="layout-container">
          <div className="grid gap-8 rounded-[2rem] bg-app-deep p-7 text-white sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            <div><ShieldCheck className="mb-5 h-8 w-8 text-brand-accent" aria-hidden="true" /><h2 className="product-section-title">{t("doesNotTitle")}</h2></div>
            <ul className="space-y-5 text-sm leading-relaxed text-white/85">
              {Array.from({ length: 8 }, (_, index) => (
                <li key={index} className="flex items-start gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" /><span>{t(`doesNot${index + 1}` as keyof typeof copy)}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="product-section scroll-mt-24 border-y border-app-border bg-app-wash">
        <div className="layout-container">
          <ProductHeading eyebrow={t("pricingBadge")} title={t("pricingTitle")} description={t("pricingDesc")} centered />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className={`flex flex-col rounded-3xl border bg-brand-card p-6 sm:p-7 ${plan.popular ? "border-app-ink ring-1 ring-app-ink" : "border-brand-border"}`}>
                {plan.popular && <p className="mb-4 w-fit rounded-full bg-app-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-app-ink">{t("pricingPopular")}</p>}
                <h3 className="font-display text-2xl font-black">{plan.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-brand-secondary">{plan.description}</p>
                <div className="my-6 flex items-baseline gap-2"><span className="font-display text-5xl font-black">{plan.price}</span><span className="text-xs text-brand-muted">/ {plan.period}</span></div>
                <ul className="flex-1 space-y-3 border-t border-brand-border pt-5 text-sm leading-relaxed text-brand-secondary">
                  {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-app-ink" aria-hidden="true" /><span>{feature}</span></li>)}
                </ul>
                <a href={SHOPIFY_APP_STORE_URL} {...storeLinkProps} className={`mt-7 ${plan.popular ? "product-primary-button" : "product-secondary-button"}`}>{t("install")}</a>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-brand-accent/40 bg-brand-warning p-4 text-center text-sm leading-relaxed text-brand-secondary">{t("savingsNote")}</p>
        </div>
      </section>

      <ProductFaq title={t("faqTitle")} faqs={faqs} />

      <section className="product-section border-t border-app-border bg-app-soft text-center">
        <div className="layout-container flex max-w-3xl flex-col items-center">
          <ShieldCheck className="mb-5 h-8 w-8 text-app-ink" aria-hidden="true" />
          <h2 className="product-section-title">{t("ctaTitle")}</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-secondary sm:text-base">{t("ctaDesc")}</p>
          <a href={SHOPIFY_APP_STORE_URL} {...storeLinkProps} className="product-primary-button mt-7">{t("ctaBtn")}<ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
          <Link href="/#features" className="mt-6 text-xs font-bold underline decoration-app-accent underline-offset-4">{t("suiteLink")}</Link>
        </div>
      </section>
    </ProductPage>
  );
}

