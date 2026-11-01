import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarDays,
  Check,
  Clapperboard,
  GalleryHorizontal,
  Images,
  Layers,
  Lightbulb,
  Megaphone,
  PenLine,
  Send,
  ShieldCheck,
  Sparkles,
  Store,
  Info,
  BookOpen,
  Laugh,
  Wand2,
  Mail,
} from "lucide-react";
import {
  SITE_URL,
  SOCIAL_MARKETING_ICON,
  SOCIAL_MARKETING_ICON_SMALL,
  SOCIAL_MARKETING_ICON_SIZE,
  SOCIAL_MARKETING_NAME,
  SUPPORT_EMAIL,
  localizedPath,
} from "../../config";
import { getMessages, localeInfo, resolveLocale } from "@/i18n/messages";
import { ProductPage, ProductHero, ProductHeading, ProductFaq, ProductMonitor } from "../../components/products/ProductPage";
import { EarlyAccessButton } from "../../components/products/EarlyAccessButton";

type PageProps = { params: Promise<{ locale: string }> };
type Copy = ReturnType<typeof getMessages<"LessTimeMarketing">>;

const PAGE_PATH = "/less-time-marketing";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const copy = getMessages(currentLocale, "LessTimeMarketing");
  const path = localizedPath(currentLocale, PAGE_PATH);
  const image = { url: SOCIAL_MARKETING_ICON, width: SOCIAL_MARKETING_ICON_SIZE, height: SOCIAL_MARKETING_ICON_SIZE, alt: copy.iconAlt };

  return {
    metadataBase: new URL(SITE_URL),
    title: copy.seoTitle,
    description: copy.seoDescription,
    icons: {
      icon: { url: SOCIAL_MARKETING_ICON_SMALL, type: "image/webp" },
      shortcut: SOCIAL_MARKETING_ICON_SMALL,
      apple: SOCIAL_MARKETING_ICON_SMALL,
    },
    alternates: {
      canonical: path,
      languages: { en: PAGE_PATH, es: `/es${PAGE_PATH}`, "x-default": PAGE_PATH },
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

// Illustrative mock of the post review screen. Not a screenshot of the app.
function ReviewMock({ mock }: { mock: Copy["mock"] }) {
  return (
    <div role="img" aria-label={mock.alt} className="relative flex bg-white text-left text-brand-main sm:aspect-[1528/969]">
      <span className="absolute right-3 top-3 z-10 rounded-full bg-brand-main px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white sm:right-4 sm:top-4 sm:text-[10px]">
        {mock.label}
      </span>
      <aside aria-hidden="true" className="hidden w-[24%] flex-col gap-2 border-r border-brand-border bg-app-wash p-4 sm:flex lg:p-5">
        <div className="mb-3 flex items-center gap-2">
          <Image src={SOCIAL_MARKETING_ICON_SMALL} alt="" width={22} height={22} className="rounded-md" />
          <span className="text-[10px] font-bold lg:text-xs">{mock.app}</span>
        </div>
        <p className="text-[9px] font-bold uppercase tracking-wider text-brand-muted lg:text-[10px]">{mock.campaign}</p>
        {mock.sections.map((section, index) => (
          <span
            key={section}
            className={`rounded-lg px-2.5 py-2 text-[10px] font-bold lg:text-xs ${index === 1 ? "bg-app-ink text-white" : "text-brand-secondary"}`}
          >
            {section}
          </span>
        ))}
      </aside>
      <div aria-hidden="true" className="grid flex-1 gap-4 p-4 pt-12 sm:grid-cols-[1fr_1.1fr] sm:gap-5 sm:p-5 lg:gap-7 lg:p-7">
        <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl bg-app-soft sm:h-auto sm:rounded-2xl">
          <div className="absolute h-[70%] w-[70%] rotate-12 rounded-[2rem] bg-app-border/70" />
          <div className="absolute h-[55%] w-[55%] -rotate-6 rounded-[1.6rem] bg-brand-accent/80" />
          <Images className="relative h-1/4 w-1/4 stroke-[1.4] text-app-ink" />
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-2 sm:gap-3">
          <span className="w-fit rounded-full bg-brand-accent/25 px-2 py-0.5 text-[10px] font-bold text-brand-main lg:text-xs">{mock.status}</span>
          <p className="text-[10px] font-bold uppercase tracking-wider text-app-ink">{mock.postType}</p>
          <p className="font-display text-sm font-black leading-snug lg:text-lg">{mock.caption}</p>
          <p className="text-[10px] font-bold text-app-ink sm:text-[11px] lg:text-xs">{mock.hashtags}</p>
          <p className="flex items-center gap-1.5 text-[10px] text-brand-muted sm:text-[11px] lg:text-xs">
            <CalendarDays className="h-3 w-3 sm:h-3.5 sm:w-3.5" />{mock.date}
          </p>
          <div className="mt-1 flex flex-wrap gap-2 sm:mt-2">
            <span className="rounded-lg bg-brand-accent px-3 py-1.5 text-[10px] font-bold sm:text-[11px] lg:text-xs">{mock.approve}</span>
            <span className="rounded-lg border border-brand-border px-3 py-1.5 text-[10px] font-bold sm:text-[11px] lg:text-xs">{mock.edit}</span>
            <span className="hidden rounded-lg border border-brand-border px-3 py-1.5 text-[11px] font-bold sm:inline lg:text-xs">{mock.another}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function LessTimeMarketingPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const copy = getMessages(currentLocale, "LessTimeMarketing");
  const canonicalUrl = `${SITE_URL}${localizedPath(currentLocale, PAGE_PATH)}`;
  const benefitIcons = [CalendarDays, Store, Clapperboard, ShieldCheck];
  const stepIcons = [Store, Layers, PenLine, Send];
  const imageTypeIcons = [Megaphone, Info, Lightbulb, BookOpen, Laugh, Wand2];
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
        lines={copy.heroLines}
        description={copy.heroDescription}
        note={copy.heroNote}
        pillars={copy.pillars}
        actions={<>
          <EarlyAccessButton label={copy.primaryCta} />
          <a href="#how-it-works" className="product-secondary-button">{copy.secondaryCta}</a>
        </>}
        visual={<ProductMonitor><ReviewMock mock={copy.mock} /></ProductMonitor>}
      />

      {/* Benefits: same four-card pattern as Klaviyo Bot Cleaner, last card highlighted. */}
      <section className="product-section bg-brand-card">
        <div className="layout-container">
          <ProductHeading eyebrow={copy.benefitsEyebrow} title={copy.benefitsTitle} description={copy.benefitsDescription} />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {copy.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              const highlighted = index === copy.benefits.length - 1;
              return (
                <article
                  key={benefit.title}
                  className={`rounded-3xl border p-6 sm:p-7 ${highlighted ? "border-app-ink bg-app-ink text-white" : "border-brand-border bg-brand-bg"}`}
                >
                  <div className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl ${highlighted ? "bg-white/15 text-white" : "bg-app-soft text-app-ink"}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-black">{benefit.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${highlighted ? "text-white/85" : "text-brand-secondary"}`}>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="product-section scroll-mt-24 border-t border-brand-border bg-brand-card">
        <div className="layout-container">
          <ProductHeading eyebrow={copy.workflowEyebrow} title={copy.workflowTitle} description={copy.workflowDescription} centered />
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {copy.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <li key={step.title} className="rounded-3xl border border-brand-border p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-main font-display text-sm font-black text-white">0{index + 1}</span>
                    <Icon className="h-5 w-5 text-app-ink" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="what-it-makes" className="product-section scroll-mt-24 border-y border-app-border bg-app-wash">
        {/* Keeps old /social-marketing#campaign-concept links landing here. */}
        <span id="campaign-concept" aria-hidden="true" className="block scroll-mt-24" />
        <div className="layout-container">
          <ProductHeading eyebrow={copy.makesEyebrow} title={copy.makesTitle} description={copy.makesDescription} />
          <h3 className="mb-5 font-display text-xl font-black">{copy.imageTypesTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.imageTypes.map((type, index) => {
              const Icon = imageTypeIcons[index];
              return (
                <article key={type.title} className="flex gap-4 rounded-2xl border border-brand-border bg-brand-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-app-soft text-app-ink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-black">{type.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-secondary">{type.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_2fr]">
            <article className="rounded-3xl border border-brand-border bg-brand-card p-6 sm:p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-app-soft text-app-ink">
                <GalleryHorizontal className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-black">{copy.carouselTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{copy.carouselDescription}</p>
            </article>
            <article className="rounded-3xl bg-app-deep p-6 text-white sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <Clapperboard className="h-6 w-6 text-brand-accent" aria-hidden="true" />
                <h3 className="font-display text-xl font-black">{copy.videoTitle}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {copy.videos.map((video) => (
                  <div key={video.length} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                    <p className="font-display text-3xl font-black">{video.length}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-brand-accent">{video.plans}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">{video.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <p className="mt-6 max-w-4xl text-xs leading-relaxed text-brand-muted">{copy.makesNote}</p>
        </div>
      </section>

      <section className="product-section">
        <div className="layout-container">
          <div className="grid gap-8 rounded-[2rem] bg-app-deep p-7 text-white sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            <div>
              <ShieldCheck className="mb-5 h-8 w-8 text-brand-accent" aria-hidden="true" />
              <h2 className="product-section-title">{copy.controlTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{copy.controlDescription}</p>
            </div>
            <ul className="space-y-5 text-sm leading-relaxed text-white/85">
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

      <section id="pricing" className="product-section scroll-mt-24 border-y border-app-border bg-app-wash">
        <div className="layout-container">
          <ProductHeading eyebrow={copy.pricingEyebrow} title={copy.pricingTitle} description={copy.pricingDescription} centered />
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {copy.plans.map((plan) => (
              <article key={plan.name} className={`relative flex flex-col rounded-3xl border bg-brand-card p-6 sm:p-7 ${plan.popular ? "border-app-ink ring-1 ring-app-ink" : "border-brand-border"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-app-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{copy.popularLabel}</span>
                )}
                <h3 className="font-display text-2xl font-black">{plan.name}</h3>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-brand-secondary">{plan.tagline}</p>
                <div className="my-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-black">{plan.price}</span>
                  <span className="text-xs text-brand-muted">/ {copy.perMonth}</span>
                </div>
                <p className="mb-5 rounded-xl bg-app-soft px-4 py-3 text-sm font-bold text-app-ink">
                  {plan.credits} {copy.creditsLabel}
                  <span className="mt-1 block text-xs font-normal text-brand-secondary">{plan.estimate}</span>
                </p>
                <ul className="flex-1 space-y-3 border-t border-brand-border pt-5 text-sm leading-relaxed text-brand-secondary">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-app-ink" aria-hidden="true" /><span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <EarlyAccessButton label={copy.primaryCta} className="mt-7" variant={plan.popular ? "primary" : "secondary"} />
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-brand-border bg-brand-card p-6 sm:p-7">
              <Sparkles className="mb-4 h-6 w-6 text-app-ink" aria-hidden="true" />
              <h3 className="font-display text-xl font-black">{copy.trialTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{copy.trialDescription}</p>
            </article>
            <article className="rounded-3xl border border-brand-border bg-brand-card p-6 sm:p-7">
              <Layers className="mb-4 h-6 w-6 text-app-ink" aria-hidden="true" />
              <h3 className="font-display text-xl font-black">{copy.packsTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-secondary">{copy.packsDescription}</p>
              <ul className="mt-5 grid grid-cols-3 gap-3">
                {copy.packs.map((pack) => (
                  <li key={pack.credits} className={`rounded-2xl border p-3 text-center sm:p-4 ${pack.recommended ? "border-app-ink bg-app-soft" : "border-brand-border bg-brand-bg"}`}>
                    <p className="font-display text-xl font-black sm:text-2xl">{pack.price}</p>
                    <p className="mt-1 text-[11px] text-brand-secondary sm:text-xs">{pack.credits}</p>
                    {pack.recommended && <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-app-ink">{copy.recommendedLabel}</p>}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mx-auto mt-5 grid max-w-6xl gap-5 lg:grid-cols-[1.2fr_1fr]">
            <div className="overflow-hidden rounded-3xl border border-brand-border bg-brand-card">
              <table className="w-full border-collapse text-left text-sm">
                <caption className="border-b border-brand-border px-6 py-5 text-left font-display text-xl font-black">{copy.creditsTitle}</caption>
                <thead className="sr-only">
                  <tr>{copy.creditsHeaders.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
                </thead>
                <tbody>
                  {copy.creditsRows.map((row) => (
                    <tr key={row.action} className="border-b border-brand-border/60 last:border-0">
                      <th scope="row" className="px-6 py-3 font-normal text-brand-secondary">{row.action}</th>
                      <td className="px-6 py-3 text-right font-bold">{row.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <article className="rounded-3xl border border-brand-border bg-brand-card p-6 sm:p-7">
              <ShieldCheck className="mb-4 h-6 w-6 text-app-ink" aria-hidden="true" />
              <h3 className="font-display text-xl font-black">{copy.fairBillingTitle}</h3>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-brand-secondary">
                {copy.fairBilling.map((item) => (
                  <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-app-ink" aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-brand-muted">{copy.pricingNote}</p>
        </div>
      </section>

      <section aria-labelledby="comparison-title" className="product-section bg-brand-card">
        <div className="layout-container">
          <ProductHeading id="comparison-title" eyebrow={copy.comparisonEyebrow} title={copy.comparisonTitle} description={copy.comparisonDescription} />
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

      <ProductFaq title={copy.faqTitle} faqs={copy.faqs} />

      <section id="join" className="product-section scroll-mt-24 border-t border-app-border bg-app-soft text-center">
        <div className="layout-container flex max-w-3xl flex-col items-center">
          <Sparkles className="mb-5 h-8 w-8 text-app-ink" aria-hidden="true" />
          <h2 className="product-section-title">{copy.closingTitle}</h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-secondary sm:text-base">{copy.closingDescription}</p>
          <EarlyAccessButton label={copy.primaryCta} className="mt-7" />
          <nav aria-label={SOCIAL_MARKETING_NAME} className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold text-app-ink">
            <a href={localizedPath(currentLocale, "/terms/less-time-marketing")} className="hover:underline">{copy.legalTerms}</a>
            <a href={localizedPath(currentLocale, "/privacy/less-time-marketing")} className="hover:underline">{copy.legalPrivacy}</a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center gap-1.5 hover:underline">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />{copy.legalSupport}: {SUPPORT_EMAIL}
            </a>
          </nav>
        </div>
      </section>
    </ProductPage>
  );
}
