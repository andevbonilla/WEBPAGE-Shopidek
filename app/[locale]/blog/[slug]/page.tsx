import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ShareButtons from "../../../components/ShareButtons";
import { getPostBySlug, getPosts } from "../posts";
import { Clock, ExternalLink } from "lucide-react";
import { SHOPIFY_APP_STORE_URL, SITE_URL, localizedPath } from "../../../config";

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

  return {
    metadataBase: new URL(SITE_URL),
    title: `${post.title} | ShopiDeck Blog`,
    description: post.excerpt,
    alternates: {
      canonical: localizedPath(locale === "es" ? "es" : "en", `/blog/${post.id}`),
      languages: {
        en: `/blog/${post.id}`,
        es: `/es/blog/${post.id}`,
        "x-default": `/blog/${post.id}`,
      },
    },
    keywords: `Shopify, Klaviyo, email marketing, deliverability, data hygiene, ${post.category.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}${localizedPath(locale === "es" ? "es" : "en", `/blog/${post.id}`)}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 800,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
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

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* HEADER */}
      <Navbar />

      {/* TECHCRUNCH STYLE ARTICLE VIEW */}
      <main className="py-12 pb-24 bg-brand-card flex-1">
        <div className="layout-container max-w-4xl">
          <article className="space-y-8">
            
            {/* Category and Title */}
            <div className="space-y-4">
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

                <ShareButtons title={post.title} locale={currentLocale} />
              </div>

              {/* Right Column (Rich Article Content) */}
              <div className="lg:col-span-9 space-y-6 text-brand-secondary text-base leading-[1.8] font-light">
                {post.content.map((paragraph, idx) => {
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
              </div>

            </div>

            {/* CONTEXTUAL PRODUCT CTA */}
            <div className="mt-16 border-t border-brand-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <h3 className="font-display font-black text-xl md:text-2xl text-brand-main uppercase tracking-tight leading-tight">
                  {currentLocale === "en" 
                    ? "Turn profile hygiene into a review-first workflow."
                    : "Convierte la higiene de perfiles en un flujo de revisión primero."}
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
                  <span>{currentLocale === "en" ? "Check availability" : "Ver disponibilidad"}</span>
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
