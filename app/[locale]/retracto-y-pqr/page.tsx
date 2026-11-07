import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BellRing, Check, ClipboardList, FileCheck2, FileText, Mail, MessageSquare, PackageCheck, Scale, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getMessages, localeInfo, resolveLocale } from "@/i18n/messages";
import { RETRACTO_DISPLAY_NAME, RETRACTO_ICON, RETRACTO_ICON_SIZE, SITE_URL, SUPPORT_EMAIL, localizedPath } from "../../config";
import { ProductFaq, ProductHeading, ProductHero, ProductMonitor, ProductPage } from "../../components/products/ProductPage";

type PageProps = { params: Promise<{ locale: string }> };
const PAGE_PATH = "/retracto-y-pqr";
const ARTICLE_PATH = "/blog/retracto-y-pqr-shopify-colombia";
const featureIcons = [PackageCheck, ClipboardList, BellRing, MessageSquare, FileText, ShieldCheck];
const stageIcons = [ClipboardList, MessageSquare, FileCheck2];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLocale = resolveLocale((await params).locale);
  const copy = getMessages(currentLocale, "Retracto");
  const path = localizedPath(currentLocale, PAGE_PATH);
  const image = { url: RETRACTO_ICON, width: RETRACTO_ICON_SIZE, height: RETRACTO_ICON_SIZE, alt: copy.iconAlt };
  return {
    metadataBase: new URL(SITE_URL),
    title: copy.seoTitle,
    description: copy.seoDescription,
    icons: { icon: { url: RETRACTO_ICON, type: "image/webp" }, apple: RETRACTO_ICON },
    alternates: { canonical: path, languages: { en: PAGE_PATH, es: `/es${PAGE_PATH}`, "x-default": PAGE_PATH } },
    openGraph: {
      title: copy.seoTitle, description: copy.seoDescription, url: `${SITE_URL}${path}`,
      siteName: "ShopiDeck", type: "website", locale: localeInfo[currentLocale].openGraph,
      alternateLocale: localeInfo[currentLocale].alternateOpenGraph, images: [image],
    },
    twitter: { card: "summary", title: copy.seoTitle, description: copy.seoDescription, images: [image] },
  };
}

export default async function RetractoPage({ params }: PageProps) {
  const currentLocale = resolveLocale((await params).locale);
  const copy = getMessages(currentLocale, "Retracto");
  const canonicalUrl = `${SITE_URL}${localizedPath(currentLocale, PAGE_PATH)}`;
  const contactUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(copy.contactSubject)}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${canonicalUrl}#webpage`, url: canonicalUrl, name: copy.seoTitle, description: copy.seoDescription, inLanguage: currentLocale },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "ShopiDeck", item: `${SITE_URL}${localizedPath(currentLocale)}` },
        { "@type": "ListItem", position: 2, name: RETRACTO_DISPLAY_NAME, item: canonicalUrl },
      ] },
      { "@type": "FAQPage", mainEntity: copy.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    ],
  };

  return (
    <ProductPage theme="retracto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <ProductHero
        name={RETRACTO_DISPLAY_NAME} icon={RETRACTO_ICON} iconAlt={copy.iconAlt}
        lines={copy.heroLines} description={copy.subtitle} note={copy.note} pillars={copy.pillars}
        actions={<>
          <a href={contactUrl} className="product-primary-button">{copy.contact}<ArrowRight className="cta-arrow h-4 w-4" aria-hidden="true" /></a>
          <a href="#how-it-works" className="product-secondary-button">{copy.how}</a>
        </>}
        visual={
          <ProductMonitor>
            <div className="bg-brand-card p-5 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-border pb-4">
                <span className="flex items-center gap-2 text-xs font-bold"><Scale className="h-4 w-4 text-app-ink" aria-hidden="true" />{RETRACTO_DISPLAY_NAME}</span>
                <span className="rounded-full border border-app-border bg-app-soft px-3 py-1.5 text-[10px] font-bold text-app-ink">{copy.previewLabel}</span>
              </div>
              <div className="flex flex-col items-center py-7 text-center sm:py-10">
                <Image src={RETRACTO_ICON} alt="" width={96} height={96} sizes="96px" priority className="mb-5 rounded-3xl shadow-soft" />
                <p className="font-display text-xl font-black sm:text-3xl">{copy.previewTitle}</p>
                <p className="mt-3 text-xs leading-relaxed text-brand-secondary sm:text-sm">{copy.previewDesc}</p>
              </div>
              <ol className="grid gap-3 sm:grid-cols-3">
                {copy.previewStages.map((stage, index) => {
                  const Icon = stageIcons[index];
                  return <li key={stage} className="flex items-center gap-3 rounded-2xl border border-app-border bg-app-wash p-4 sm:flex-col sm:text-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-app-soft text-app-ink"><Icon className="h-4 w-4" aria-hidden="true" /></span>
                    <span className="text-xs font-bold">{stage}</span>
                  </li>;
                })}
              </ol>
              <p className="mt-5 text-center text-[10px] leading-relaxed text-brand-muted">{copy.previewCaption}</p>
            </div>
          </ProductMonitor>
        }
      />

      <section className="product-section bg-brand-card">
        <div className="layout-container">
          <ProductHeading eyebrow={copy.featuresEyebrow} title={copy.featuresTitle} description={copy.featuresDesc} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return <article key={feature.title} className="rounded-3xl border border-brand-border bg-brand-bg p-6 sm:p-7">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-app-soft text-app-ink"><Icon className="h-5 w-5" aria-hidden="true" /></div>
                <h3 className="font-display text-lg font-black">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{feature.description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="product-section scroll-mt-24 border-t border-brand-border">
        <div className="layout-container">
          <ProductHeading eyebrow={copy.workflowEyebrow} title={copy.workflowTitle} description={copy.workflowDesc} centered />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.steps.map((step, index) => <li key={step.title} className="rounded-3xl border border-brand-border bg-brand-card p-6">
              <span aria-hidden="true" className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-app-ink font-display text-sm font-black text-white">0{index + 1}</span>
              <h3 className="font-display text-lg font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{step.description}</p>
            </li>)}
          </ol>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="layout-container">
          <div className="grid gap-8 rounded-[2rem] bg-app-deep p-7 text-white sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            <div><ShieldCheck className="mb-5 h-8 w-8 text-app-accent" aria-hidden="true" /><h2 className="product-section-title">{copy.controlTitle}</h2></div>
            <ul className="space-y-5 text-sm leading-relaxed text-white/85">
              {copy.controlItems.map((item) => <li key={item} className="flex items-start gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-app-accent" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="product-section scroll-mt-24 border-y border-app-border bg-app-wash">
        <div className="layout-container">
          <ProductHeading eyebrow={copy.pricingEyebrow} title={copy.pricingTitle} description={copy.pricingDesc} centered />
          <article className="mx-auto flex max-w-lg flex-col rounded-3xl border border-app-ink bg-brand-card p-7 shadow-soft sm:p-10">
            <h3 className="font-display text-2xl font-black">{copy.planName}</h3>
            <div className="my-6 flex items-baseline gap-2"><span className="font-display text-5xl font-black">{copy.price}</span><span className="text-sm text-brand-muted">{copy.period}</span></div>
            <p className="mb-6 rounded-xl bg-app-soft p-3 text-center text-sm font-bold text-app-ink">{copy.trial}</p>
            <ul className="space-y-4 border-t border-brand-border pt-6 text-sm text-brand-secondary">
              {copy.planFeatures.map((feature) => <li key={feature} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-app-ink" aria-hidden="true" /><span>{feature}</span></li>)}
            </ul>
            <a href={contactUrl} className="product-primary-button mt-8">{copy.contact}<ArrowRight className="cta-arrow h-4 w-4" aria-hidden="true" /></a>
          </article>
          <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-relaxed text-brand-muted">{copy.billingNote}</p>
        </div>
      </section>

      <ProductFaq title={copy.faqTitle} faqs={copy.faqs} visibleCount={4} moreLabel={copy.faqMore} lessLabel={copy.faqLess} />

      <section className="product-section border-t border-brand-border">
        <div className="layout-container">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-brand-border bg-brand-card p-7 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-xl"><h2 className="font-display text-2xl font-black">{copy.articleTitle}</h2><p className="mt-4 text-sm leading-relaxed text-brand-secondary">{copy.articleDesc}</p></div>
            <Link href={ARTICLE_PATH} className="product-secondary-button shrink-0 gap-2">{copy.articleLabel}<ArrowRight className="cta-arrow h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="product-section border-t border-app-border bg-app-soft text-center">
        <div className="layout-container flex max-w-3xl flex-col items-center">
          <Mail className="mb-5 h-8 w-8 text-app-ink" aria-hidden="true" />
          <h2 className="product-section-title">{copy.ctaTitle}</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-secondary sm:text-base">{copy.ctaDesc}</p>
          <a href={contactUrl} className="product-primary-button mt-7">{copy.contact}<ArrowRight className="cta-arrow h-4 w-4" aria-hidden="true" /></a>
        </div>
      </section>
    </ProductPage>
  );
}
