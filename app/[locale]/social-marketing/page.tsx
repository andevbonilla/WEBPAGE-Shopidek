import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Heart,
  Megaphone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  SITE_URL,
  SOCIAL_MARKETING_ICON,
  SOCIAL_MARKETING_ICON_SMALL,
  SOCIAL_MARKETING_ICON_SIZE,
  SOCIAL_MARKETING_NAME,
  TEAM_EMAIL,
  localizedPath,
} from "../../config";
import { getMessages, localeInfo, resolveLocale } from "@/i18n/messages";
import { ProductPage, ProductHero, ProductFaq } from "../../components/products/ProductPage";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const copy = getMessages(currentLocale, "LessTimeMarketing");
  const path = localizedPath(currentLocale, "/social-marketing");
  const image = { url: SOCIAL_MARKETING_ICON, width: SOCIAL_MARKETING_ICON_SIZE, height: SOCIAL_MARKETING_ICON_SIZE, alt: copy.iconAlt };

  return {
    metadataBase: new URL(SITE_URL),
    title: copy.seoTitle,
    description: copy.seoDescription,
    alternates: {
      canonical: path,
      languages: { en: "/social-marketing", es: "/es/social-marketing", "x-default": "/social-marketing" },
    },
    openGraph: {
      title: copy.seoTitle,
      description: copy.seoDescription,
      url: `${SITE_URL}${path}`,
      siteName: "ShopiDeck",
      type: "website",
      locale: localeInfo[currentLocale].openGraph,
      alternateLocale: localeInfo[currentLocale].alternateOpenGraph,
      images: [image],
    },
    twitter: { card: "summary", title: copy.seoTitle, description: copy.seoDescription, images: [{ url: SOCIAL_MARKETING_ICON, alt: copy.iconAlt }] },
  };
}

export default async function SocialMarketingPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const copy = getMessages(currentLocale, "LessTimeMarketing");
  const canonicalUrl = `${SITE_URL}${localizedPath(currentLocale, "/social-marketing")}`;
  const contactUrl = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(copy.contactSubject)}`;
  const benefitIcons = [Megaphone, ShoppingBag, CalendarDays, ShieldCheck];
  const campaignIcons = [ShoppingBag, Heart, Sparkles];
  const cardColors = ["bg-app-soft text-app-ink", "bg-brand-main text-app-border", "bg-brand-accent text-brand-main"];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: copy.seoTitle,
        description: copy.seoDescription,
        inLanguage: currentLocale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@type": "Thing", name: SOCIAL_MARKETING_NAME, description: copy.heroDescription },
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${SOCIAL_MARKETING_ICON}`, width: SOCIAL_MARKETING_ICON_SIZE, height: SOCIAL_MARKETING_ICON_SIZE },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ShopiDeck", item: `${SITE_URL}${localizedPath(currentLocale)}` },
          { "@type": "ListItem", position: 2, name: SOCIAL_MARKETING_NAME, item: canonicalUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };

  return (
    <ProductPage theme="marketing">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

        <ProductHero
          name={SOCIAL_MARKETING_NAME}
          icon={SOCIAL_MARKETING_ICON_SMALL}
          iconAlt={copy.iconAlt}
          badge={copy.badge}
          lines={copy.heroLines}
          description={copy.heroDescription}
          note={copy.timingNote}
          pillars={copy.pillars}
          actions={<>
            <a href={contactUrl} className="product-primary-button">{copy.primaryCta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href="#campaign-concept" className="product-secondary-button">{copy.secondaryCta}</a>
          </>}
          visual={
            <div className="mx-auto w-fit rounded-[2rem] border-[8px] border-white bg-white shadow-premium sm:-rotate-6">
              <Image src={SOCIAL_MARKETING_ICON} alt={copy.iconAlt} width={SOCIAL_MARKETING_ICON_SIZE} height={SOCIAL_MARKETING_ICON_SIZE} sizes="(max-width: 640px) 220px, 280px" priority className="h-auto w-52 rounded-[1.4rem] sm:w-64" />
            </div>
          }
        />

        <section id="campaign-concept" className="scroll-mt-24 bg-brand-card product-section">
          <div className="layout-container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-app-ink">{copy.previewLabel}</p>
              <h2 className="product-section-title">{copy.previewTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-secondary sm:text-base">{copy.previewDescription}</p>
            </div>
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-app-border bg-app-wash p-5 sm:p-8 lg:p-10">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-app-border pb-5">
                <h3 className="font-display text-lg font-black sm:text-xl">{copy.previewCampaign}</h3>
                <p className="rounded-full bg-white px-3 py-2 text-xs font-bold text-app-ink">{copy.previewRange}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {copy.previewCards.map((card, index) => {
                  const Icon = campaignIcons[index];
                  return (
                    <article key={card.title} className="overflow-hidden rounded-2xl border border-brand-border bg-white">
                      <div className={`relative flex h-44 items-center justify-center overflow-hidden sm:h-52 ${cardColors[index]}`} aria-hidden="true">
                        <div className="absolute h-36 w-36 rotate-12 rounded-[2rem] border border-current opacity-20" />
                        <div className="absolute h-28 w-28 -rotate-12 rounded-[1.5rem] border border-current opacity-20" />
                        <Icon className="relative h-16 w-16 stroke-[1.5]" />
                      </div>
                      <div className="p-5">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-app-ink">{card.label}</p>
                        <h4 className="font-display text-lg font-black leading-tight">{card.title}</h4>
                        <p className="mt-3 text-xs leading-relaxed text-brand-secondary">{card.caption}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="mt-7 grid items-center gap-5 rounded-2xl border border-app-border bg-white p-5 sm:grid-cols-[1fr_1.2fr]">
                <div>
                  <CalendarDays className="mb-2 h-5 w-5 text-app-ink" aria-hidden="true" />
                  <p className="font-display text-sm font-black sm:text-base">{copy.calendarLabel}</p>
                  <p className="mt-2 text-xs text-brand-muted">{copy.calendarLegend}</p>
                </div>
                <div aria-hidden="true" className="grid grid-cols-7 gap-2">
                  {copy.calendarDays.map((day, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 rounded-xl border border-brand-border/60 bg-brand-bg px-1 py-3 text-[10px] font-bold text-brand-muted">
                      <span>{day}</span>
                      <span className={`h-4 w-4 rounded-md ${index % 3 === 0 ? "bg-app-accent" : index % 3 === 1 ? "bg-brand-accent" : "bg-brand-border"}`} />
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-center text-[11px] leading-relaxed text-brand-muted">{copy.previewNote}</p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-brand-bg product-section">
          <div className="layout-container">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-app-ink">{copy.benefitsEyebrow}</p>
              <h2 className="product-section-title">{copy.benefitsTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-secondary">{copy.benefitsDescription}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {copy.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <article key={benefit.title} className="rounded-3xl border border-brand-border bg-brand-card p-6 sm:p-7">
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-app-soft text-app-ink">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-black">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section aria-labelledby="comparison-title" className="bg-app-wash product-section">
          <div className="layout-container">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-app-ink">{copy.comparisonEyebrow}</p>
              <h2 id="comparison-title" className="product-section-title">{copy.comparisonTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-secondary">{copy.comparisonDescription}</p>
            </div>
            <div className="space-y-4 md:hidden">
              {copy.comparisonRows.map((row) => (
                <article key={row.criterion} className="overflow-hidden rounded-2xl border border-app-border bg-white">
                  <h3 className="border-b border-brand-border px-5 py-4 font-display text-lg font-black">{row.criterion}</h3>
                  <dl>
                    {[row.manual, row.volume, row.shopideck].map((value, index) => (
                      <div key={index} className={`px-5 py-4 ${index === 2 ? "bg-app-soft" : "border-b border-brand-border/60"}`}>
                        <dt className={`text-xs font-bold ${index === 2 ? "text-app-ink" : "text-brand-main"}`}>{copy.comparisonHeaders[index + 1]}</dt>
                        <dd className="mt-2 text-sm leading-relaxed text-brand-secondary">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
            <div className="hidden overflow-hidden rounded-3xl border border-app-border md:block">
              <table className="w-full table-fixed border-collapse bg-white text-left text-xs leading-relaxed lg:text-sm">
                <caption className="sr-only">{copy.comparisonTitle}</caption>
                <thead>
                  <tr>
                    {copy.comparisonHeaders.map((header, index) => (
                      <th key={header} scope="col" className={`border-b border-brand-border p-5 font-bold ${index === 0 ? "w-[16%]" : ""} ${index === 3 ? "bg-app-ink text-white" : "bg-brand-bg"}`}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {copy.comparisonRows.map((row) => (
                    <tr key={row.criterion}>
                      <th scope="row" className="border-b border-brand-border/60 p-5 align-top font-bold">{row.criterion}</th>
                      {[row.manual, row.volume, row.shopideck].map((value, index) => (
                        <td key={index} className={`border-b border-brand-border/60 p-5 align-top ${index === 2 ? "bg-app-soft text-app-ink" : "text-brand-secondary"}`}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 max-w-4xl text-xs leading-relaxed text-brand-muted">{copy.comparisonNote}</p>
          </div>
        </section>

        <section className="bg-brand-card product-section">
          <div className="layout-container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-app-ink">{copy.workflowEyebrow}</p>
              <h2 className="product-section-title">{copy.workflowTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-secondary">{copy.workflowDescription}</p>
            </div>
            <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {copy.steps.map((step, index) => (
                <li key={step.title} className="rounded-3xl border border-brand-border p-6">
                  <span aria-hidden="true" className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-main font-display text-sm font-black text-white">0{index + 1}</span>
                  <h3 className="font-display text-lg font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-0 pb-16 sm:pb-24">
          <div className="layout-container">
            <div className="grid gap-8 rounded-[2rem] bg-app-deep p-7 text-white sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
              <div>
                <Target className="mb-5 h-8 w-8 text-brand-accent" aria-hidden="true" />
                <h2 className="product-section-title">{copy.controlTitle}</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/75">{copy.controlDescription}</p>
              </div>
              <ul className="flex flex-col justify-center gap-5 text-sm leading-relaxed text-white/85">
                {copy.controlPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ProductFaq title={copy.faqTitle} faqs={copy.faqs} />

        <section className="border-t border-app-border bg-app-soft py-16 text-center sm:py-24">
          <div className="layout-container flex max-w-3xl flex-col items-center">
            <Sparkles className="mb-5 h-8 w-8 text-app-ink" aria-hidden="true" />
            <h2 className="product-section-title">{copy.closingTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-secondary sm:text-base">{copy.closingDescription}</p>
            <a href={contactUrl} className="product-primary-button mt-7">{copy.primaryCta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <Link href="/#features" className="mt-6 text-xs font-bold underline decoration-app-accent underline-offset-4">{copy.suiteLink}</Link>
          </div>
        </section>
      </ProductPage>
  );
}
