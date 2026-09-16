import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ShareButtons from "../../../components/ShareButtons";
import { getPostBySlug, getPosts } from "../posts";
import { Clock, ExternalLink } from "lucide-react";
import {
  SHOPIFY_APP_STORE_URL,
  SITE_MARK_HEIGHT,
  SITE_MARK_URL,
  SITE_MARK_WIDTH,
  SITE_URL,
  localizedPath,
} from "../../../config";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Generate dynamic metadata for each blog article to optimize SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  
  if (!post) {
    return {
      title: "Article Not Found | ShopiDeck",
    };
  }

  const currentLocale = locale === "es" ? "es" : "en";
  const canonicalPath = localizedPath(currentLocale, `/blog/${post.id}`);
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: `${post.title} | ShopiDeck Blog`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: `/blog/${post.id}`,
        es: `/es/blog/${post.id}`,
        "x-default": `/blog/${post.id}`,
      },
    },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${SITE_URL}${canonicalPath}`,
      images: [
        {
          url: imageUrl,
          width: post.imageWidth,
          height: post.imageHeight,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

// Generate static paths for dynamic posts to optimize page compilation speeds
export async function generateStaticParams() {
  const locales = ["en", "es"];
  const paths: { locale: string; slug: string }[] = [];

  locales.forEach((locale) => {
    const posts = getPosts(locale);
    posts.forEach((post) => {
      paths.push({
        locale,
        slug: post.id,
      });
    });
  });

  return paths;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const currentLocale = (locale as "en" | "es") || "en";
  const canonicalUrl = `${SITE_URL}${localizedPath(currentLocale, `/blog/${post.id}`)}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;
  const articleSchema = {
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    url: canonicalUrl,
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: currentLocale,
    isAccessibleForFree: true,
    keywords: post.keywords.join(", "),
    mainEntityOfPage: canonicalUrl,
    author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ShopiDeck",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_MARK_URL,
        width: SITE_MARK_WIDTH,
        height: SITE_MARK_HEIGHT,
      },
    },
  };
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ShopiDeck", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: currentLocale === "en" ? "Blog" : "Blog",
        item: `${SITE_URL}${localizedPath(currentLocale, "/blog")}`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
    ],
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema,
      breadcrumbSchema,
      ...(post.faq?.length
        ? [{
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: post.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }]
        : []),
    ],
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* HEADER */}
      <Navbar />

      {/* TECHCRUNCH STYLE ARTICLE VIEW */}
      <main className="py-12 pb-24 bg-brand-card flex-1">
        <div className="layout-container max-w-4xl">
          <article className="space-y-8">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
            />

            <Link
              href="/blog"
              className="inline-flex text-xs font-bold text-brand-secondary underline decoration-brand-accent decoration-2 underline-offset-4 hover:text-brand-main"
            >
              ← {currentLocale === "en" ? "Back to all articles" : "Volver a todos los artículos"}
            </Link>
            
            {/* Category and Title */}
            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-brand-cream px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-main">
                {post.category}
              </p>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-brand-main tracking-tight uppercase">
                {post.title}
              </h1>
            </div>

            {/* Author, Timestamp & Shared Options */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-brand-border py-4 mt-2">
              <div className="flex items-center gap-3">
                {/* Author Avatar circle */}
                <div>
                  <p className="text-xs font-bold text-brand-main">{post.author}</p>
                  <p className="text-[9px] text-brand-muted uppercase font-bold tracking-wider leading-none">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-brand-muted">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
                <span>&bull;</span>
                <span>{post.date}</span>
              </div>
            </div>

            {/* Massive Hero Cover Image */}
            <div className="relative aspect-[16/9] w-full bg-zinc-100 rounded-3xl overflow-hidden border border-brand-border shadow-soft">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />
            </div>

            {/* Editorial Grid Layout (Left meta column / Right main content) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6">
              
              {/* Left Column (Metadata/Socials) */}
              <div className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28 self-start border-t lg:border-t-0 border-brand-border pt-6 lg:pt-0">
                <div>
                  <p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-2">
                    {currentLocale === "en" ? "Published by" : "Publicado por"}
                  </p>
                  <p className="text-xs font-bold text-brand-main">{post.author}</p>
                  <p className="text-[10px] text-brand-secondary leading-tight mt-0.5">{post.authorRole}</p>
                </div>

                <div className="h-px bg-brand-border/60 w-full" />

                <ShareButtons title={post.title} locale={currentLocale} url={canonicalUrl} />
              </div>

              {/* Right Column (Rich Article Content) */}
              <div className="lg:col-span-9 space-y-6 text-brand-secondary text-base leading-[1.8] font-light">
                {post.content.map((paragraph, idx) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={idx} className="pt-5 font-display text-2xl font-black leading-tight text-brand-main md:text-3xl">
                        {paragraph.slice(3)}
                      </h2>
                    );
                  }

                  // Style list elements or highlight items nicely if they begin with a number
                  const isListItem = /^[1-9]\.\s/.test(paragraph);
                  if (isListItem) {
                    return (
                      <div 
                        key={idx}
                        className="bg-brand-bg/50 border border-brand-border/60 p-5 rounded-2xl my-4 text-brand-main font-normal text-sm"
                      >
                        <p className="leading-relaxed font-sans">{paragraph}</p>
                      </div>
                    );
                  }
                  
                  return (
                    <p key={idx} className="font-sans">
                      {paragraph}
                    </p>
                  );
                })}

                {post.faq && post.faq.length > 0 && (
                  <section className="mt-10 border-t border-brand-border pt-8" aria-labelledby="article-faq-title">
                    <h2 id="article-faq-title" className="font-display text-2xl font-black leading-tight text-brand-main md:text-3xl">
                      {currentLocale === "en" ? "Frequently asked questions" : "Preguntas frecuentes"}
                    </h2>
                    <div className="mt-6 space-y-4">
                      {post.faq.map((item) => (
                        <article key={item.question} className="rounded-2xl border border-brand-border bg-brand-bg p-5">
                          <h3 className="font-display text-base font-black text-brand-main">{item.question}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-brand-secondary">{item.answer}</p>
                        </article>
                      ))}
                    </div>
                  </section>
                )}
              </div>

            </div>

            {/* CONTEXTUAL PRODUCT CTA */}
            <div className="mt-16 border-t border-brand-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <h3 className="font-display font-black text-xl md:text-2xl text-brand-main uppercase tracking-tight leading-tight">
                  {currentLocale === "en" 
                    ? "Turn profile hygiene into a review-first workflow."
                    : "Convierte la higiene de perfiles en un flujo con revisión previa."}
                </h3>
                <p className="text-xs text-brand-secondary font-light leading-relaxed">
                  {currentLocale === "en"
                    ? "Start with consent, domain authentication, and healthy segments. When suspicious profiles are already in Klaviyo, use ShopiDeck: Klaviyo Bot Cleaner to review signals and confirm selected suppressions."
                    : "Empieza por el consentimiento, la autenticación del dominio y segmentos saludables. Cuando ya existan perfiles sospechosos en Klaviyo, usa ShopiDeck: Klaviyo Bot Cleaner para revisar señales y confirmar supresiones seleccionadas."}
                </p>
              </div>

              <div className="w-full md:w-auto flex-shrink-0">
                <a
                  href={SHOPIFY_APP_STORE_URL}
                  target={SHOPIFY_APP_STORE_URL.startsWith("http") ? "_blank" : undefined}
                  rel={SHOPIFY_APP_STORE_URL.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-main font-bold py-3.5 px-6 rounded-xl border border-brand-main/15 transition-colors duration-200 text-xs uppercase"
                >
                  <span>{currentLocale === "en" ? "Install on Shopify" : "Instalar en Shopify"}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

