import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ShareButtons from "../../../components/ShareButtons";
import { getPostBySlug, getPosts } from "../posts";
import { ArrowLeft, Clock, User, Sparkles, ExternalLink } from "lucide-react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

const dictionaries = { en, es };

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
    title: `${post.title} | ShopiDeck Blog`,
    description: post.excerpt,
    keywords: `Shopify, Klaviyo, email marketing, deliverability, data hygiene, ${post.category.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
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
  const dict = dictionaries[currentLocale].Blog;

  const t = (key: string) => {
    return (dict as any)[key] || "";
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* HEADER */}
      <Navbar />

      {/* SUBNAV / BREADCRUMBS */}
      <div className="bg-brand-cream border-b border-brand-border py-3">
        <div className="layout-container flex items-center justify-between text-xs font-bold text-brand-muted">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <span className="truncate">ShopiDeck Journal</span>
            <span>&gt;</span>
            <span className="truncate">{post.category}</span>
            <span>&gt;</span>
            <span className="text-brand-main truncate max-w-[200px] sm:max-w-none">{post.title}</span>
          </div>
          <Link href="/blog" className="hover:text-brand-main transition-colors flex items-center gap-1 flex-shrink-0">
            ← {t("back")}
          </Link>
        </div>
      </div>

      {/* TECHCRUNCH STYLE ARTICLE VIEW */}
      <main className="py-12 pb-24 bg-brand-card flex-1">
        <div className="layout-container max-w-4xl">
          <article className="space-y-8">
            
            {/* Category and Title */}
            <div className="space-y-4">
              <span className="inline-block text-xs font-extrabold text-brand-main bg-brand-warning px-3 py-1 rounded-md border border-brand-accent/25 uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-brand-main tracking-tight uppercase">
                {post.title}
              </h1>
            </div>

            {/* Author, Timestamp & Shared Options */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-brand-border py-4 mt-2">
              <div className="flex items-center gap-3">
                {/* Author Avatar circle */}
                <div className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center font-bold text-brand-main text-sm uppercase">
                  {post.author[0]}
                </div>
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

                <div>
                  <p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-2">
                    {currentLocale === "en" ? "Category" : "Categoría"}
                  </p>
                  <span className="inline-block text-xs font-semibold text-brand-secondary bg-brand-bg px-2.5 py-0.5 rounded border border-brand-border">
                    {post.category}
                  </span>
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

            {/* HIGH-IMPACT BOTCLEANER CTA BANNER */}
            <div className="bg-brand-cream border border-brand-accent/30 rounded-3xl p-8 md:p-10 shadow-soft mt-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent rounded-full opacity-10 blur-xl"></div>
              
              <div className="space-y-3 text-center md:text-left relative z-10 max-w-xl">
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-brand-accent-hover fill-brand-accent-hover" />
                  <span>Klaviyo BotCleaner</span>
                </span>
                <h3 className="font-display font-black text-xl md:text-2xl text-brand-main uppercase tracking-tight leading-tight">
                  {currentLocale === "en" 
                    ? "Protect your Klaviyo sender reputation on autopilot." 
                    : "Protege tu reputación en Klaviyo en piloto automático."}
                </h3>
                <p className="text-xs text-brand-secondary font-light leading-relaxed">
                  {currentLocale === "en"
                    ? "Block automated checkout spambots, identify disposable temporary email signups, and keep your lists running at peak deliverability."
                    : "Bloquea spambots de checkout, identifica correos temporales basura y mantén tus listas operando con la mejor entregabilidad posible."}
                </p>
              </div>

              <div className="relative z-10 w-full md:w-auto flex-shrink-0">
                <a
                  href="https://apps.shopify.com/klaviyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-main font-bold py-3.5 px-6 rounded-xl border border-brand-main/15 shadow-soft transition-all duration-200 hover:-translate-y-0.5 text-xs uppercase"
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
