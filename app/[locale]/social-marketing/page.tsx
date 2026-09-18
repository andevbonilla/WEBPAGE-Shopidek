import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Heart,
  Megaphone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  SITE_URL,
  SOCIAL_MARKETING_ICON,
  SOCIAL_MARKETING_ICON_SMALL,
  SOCIAL_MARKETING_ICON_SIZE,
  SOCIAL_MARKETING_NAME,
  TEAM_EMAIL,
  localizedPath,
} from "../../config";
import { socialMarketingContent } from "./content";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  const copy = socialMarketingContent[currentLocale];
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
      locale: currentLocale === "en" ? "en_US" : "es_ES",
      alternateLocale: currentLocale === "en" ? "es_ES" : "en_US",
      images: [image],
    },
    twitter: { card: "summary", title: copy.seoTitle, description: copy.seoDescription, images: [{ url: SOCIAL_MARKETING_ICON, alt: copy.iconAlt }] },
  };
}

export default async function SocialMarketingPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  const copy = socialMarketingContent[currentLocale];
  const canonicalUrl = `${SITE_URL}${localizedPath(currentLocale, "/social-marketing")}`;
  const contactUrl = `mailto:${TEAM_EMAIL}?subject=${encodeURIComponent(copy.contactSubject)}`;
  const benefitIcons = [Megaphone, ShoppingBag, CalendarDays, ShieldCheck];
  const campaignIcons = [ShoppingBag, Heart, Sparkles];
  const cardColors = ["bg-[#f0e7ff] text-[#542994]", "bg-brand-main text-[#e0caff]", "bg-brand-accent text-brand-main"];
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
    <div className="flex min-h-screen flex-col bg-brand-bg">
      <Navbar />
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />

        <section className="overflow-hidden border-b border-brand-border py-14 sm:py-20 lg:py-24">
          <div className="layout-container grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Image src={SOCIAL_MARKETING_ICON_SMALL} alt={copy.iconAlt} width={44} height={44} sizes="44px" className="rounded-xl" />
                <p className="text-xs font-bold tracking-wide text-[#6130ae] sm:text-sm">{copy.eyebrow}</p>
              </div>
              <p className="mb-5 inline-flex rounded-full border border-[#8b5cf6]/25 bg-[#f0e7ff] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6130ae]">{copy.badge}</p>
              <h1 className="font-display text-4xl font-black leading-[1.09] tracking-tight sm:text-5xl xl:text-6xl">
                {copy.heroLines.map((line, index) => (
                  <span key={line} className={`block ${index === 1 ? "text-[#7540c5]" : ""}`}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-brand-secondary sm:text-base">{copy.heroDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={contactUrl} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#7540c5] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#6130ae] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7540c5]">
                  {copy.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#campaign-concept" className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-brand-border bg-brand-card px-6 py-4 text-sm font-bold transition-colors hover:bg-brand-cream">{copy.secondaryCta}</a>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-relaxed text-brand-muted">{copy.timingNote}</p>
            </div>

            <div className="relative mx-auto flex w-full max-w-lg flex-col items-center rounded-[2.5rem] border border-[#8b5cf6]/20 bg-[#eee5fc] px-6 py-10 sm:px-10 sm:py-14">
              <div aria-hidden="true" className="absolute left-7 top-7 h-16 w-16 rounded-full border border-[#8b5cf6]/25 sm:h-24 sm:w-24" />
              <div aria-hidden="true" className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-[#8b5cf6]/25 sm:h-36 sm:w-36" />
              <div className="relative z-10 rounded-[2rem] border-[8px] border-white bg-white shadow-[0_24px_60px_-16px_rgba(84,41,148,0.3)] sm:-rotate-6">
                <Image src={SOCIAL_MARKETING_ICON} alt={copy.iconAlt} width={SOCIAL_MARKETING_ICON_SIZE} height={SOCIAL_MARKETING_ICON_SIZE} sizes="(max-width: 640px) 220px, 280px" priority className="h-auto w-52 rounded-[1.4rem] sm:w-64" />
              </div>
              <div className="relative z-10 mt-9 flex flex-wrap justify-center gap-2">
                {copy.pillars.map((pillar) => (
                  <span key={pillar} className="inline-flex items-center gap-1.5 rounded-full border border-white bg-white/85 px-3 py-2 text-[11px] font-bold text-[#542994]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="campaign-concept" className="scroll-mt-24 bg-brand-card py-16 sm:py-24">
          <div className="layout-container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7540c5]">{copy.previewLabel}</p>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">{copy.previewTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-secondary sm:text-base">{copy.previewDescription}</p>
            </div>
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#8b5cf6]/20 bg-[#faf7ff] p-5 sm:p-8 lg:p-10">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-[#8b5cf6]/15 pb-5">
                <h3 className="font-display text-lg font-black sm:text-xl">{copy.previewCampaign}</h3>
                <p className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#6130ae]">{copy.previewRange}</p>
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
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#7540c5]">{card.label}</p>
                        <h4 className="font-display text-lg font-black leading-tight">{card.title}</h4>
                        <p className="mt-3 text-xs leading-relaxed text-brand-secondary">{card.caption}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
              <div className="mt-7 grid items-center gap-5 rounded-2xl border border-[#8b5cf6]/15 bg-white p-5 sm:grid-cols-[1fr_1.2fr]">
                <div>
                  <CalendarDays className="mb-2 h-5 w-5 text-[#7540c5]" aria-hidden="true" />
                  <p className="font-display text-sm font-black sm:text-base">{copy.calendarLabel}</p>
                  <p className="mt-2 text-xs text-brand-muted">{copy.calendarLegend}</p>
                </div>
                <div aria-hidden="true" className="grid grid-cols-7 gap-2">
                  {copy.calendarDays.map((day, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 rounded-xl border border-brand-border/60 bg-brand-bg px-1 py-3 text-[10px] font-bold text-brand-muted">
                      <span>{day}</span>
                      <span className={`h-4 w-4 rounded-md ${index % 3 === 0 ? "bg-[#b791ee]" : index % 3 === 1 ? "bg-brand-accent" : "bg-brand-border"}`} />
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-center text-[11px] leading-relaxed text-brand-muted">{copy.previewNote}</p>
            </div>
          </div>
        </section>

        <section className="border-y border-brand-border bg-brand-bg py-16 sm:py-24">
          <div className="layout-container">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7540c5]">{copy.benefitsEyebrow}</p>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">{copy.benefitsTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-secondary">{copy.benefitsDescription}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {copy.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <article key={benefit.title} className="rounded-3xl border border-brand-border bg-brand-card p-6 sm:p-7">
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0e7ff] text-[#7540c5]">
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

        <section className="bg-brand-card py-16 sm:py-24">
          <div className="layout-container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7540c5]">{copy.workflowEyebrow}</p>
              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">{copy.workflowTitle}</h2>
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
            <div className="grid gap-8 rounded-[2rem] bg-[#28183e] p-7 text-white sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
              <div>
                <Target className="mb-5 h-8 w-8 text-brand-accent" aria-hidden="true" />
                <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">{copy.controlTitle}</h2>
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

        <section className="border-t border-brand-border bg-brand-card py-16 sm:py-24">
          <div className="layout-container max-w-4xl">
            <h2 className="mb-10 text-center font-display text-3xl font-black tracking-tight sm:text-4xl">{copy.faqTitle}</h2>
            <div className="space-y-3">
              {copy.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-brand-border bg-brand-bg">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold marker:content-none sm:p-6 sm:text-base">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-[#7540c5] transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-brand-secondary sm:px-6 sm:pb-6">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#8b5cf6]/20 bg-[#eee5fc] py-16 text-center sm:py-24">
          <div className="layout-container flex max-w-3xl flex-col items-center">
            <Sparkles className="mb-5 h-8 w-8 text-[#7540c5]" aria-hidden="true" />
            <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl">{copy.closingTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-secondary sm:text-base">{copy.closingDescription}</p>
            <a href={contactUrl} className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#7540c5] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#6130ae]">{copy.primaryCta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <Link href="/#features" className="mt-6 text-xs font-bold underline decoration-[#8b5cf6] underline-offset-4">{copy.suiteLink}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
