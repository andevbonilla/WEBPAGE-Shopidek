
import { getMessages, resolveLocale, localeInfo } from "@/i18n/messages";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getPosts } from "./posts";
import { Clock } from "lucide-react";
import {
  SITE_LOGO,
  SITE_LOGO_ALT,
  SITE_LOGO_HEIGHT,
  SITE_LOGO_WIDTH,
  SITE_MARK_HEIGHT,
  SITE_MARK_URL,
  SITE_MARK_WIDTH,
  SITE_URL,
  localizedPath,
} from "../../config";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const path = localizedPath(currentLocale, "/blog");
  const title = getMessages(resolveLocale(currentLocale), "UI").shopideckBlogPracticalShopifyGuides;
  const description = getMessages(resolveLocale(currentLocale), "UI").practicalShopifyGuidesAboutFakeKlaviyoProfiles;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path, languages: { en: "/blog", es: "/es/blog", "x-default": "/blog" } },
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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = resolveLocale(locale);
  const dict = getMessages(currentLocale, "Blog") as Record<string, string>;
  
  const t = (key: string, values?: Record<string, string | number>) => {
    let text = dict[key] || "";
    if (values) {
      Object.keys(values).forEach((k) => {
        text = text.replace(`{${k}}`, String(values[k]));
      });
    }
    return text;
  };

  const posts = getPosts(currentLocale);
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);
  const blogUrl = `${SITE_URL}${localizedPath(currentLocale, "/blog")}`;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${blogUrl}#blog`,
    url: blogUrl,
    name: t("title"),
    description: t("subtitle"),
    inLanguage: currentLocale,
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
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      url: `${SITE_URL}${localizedPath(currentLocale, `/blog/${post.id}`)}`,
      inLanguage: currentLocale,
    })),
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c") }}
      />
      {/* HEADER */}
      <Navbar />

      {/* BLOG MAIN HEADER */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-brand-bg to-brand-cream/30 border-b border-brand-border">
        <div className="layout-container text-left flex flex-col gap-3">
          <h1 className="font-display font-black text-4xl sm:text-5xl leading-none text-brand-main tracking-tight uppercase">
            {getMessages(resolveLocale(currentLocale), "UI").practicalShopifyGuides}
          </h1>
          <p className="text-sm md:text-base text-brand-secondary max-w-2xl font-light leading-relaxed">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* TECHCRUNCH STYLE BLOG FEED */}
      <section className="py-12 pb-24 bg-brand-card flex-1">
        <div className="layout-container">
          
          {/* 1. Large Featured Post (TechCrunch Headline Style) */}
          {featuredPost && (
            <div className="mb-16 border-b border-brand-border pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left Side: Massive Image Aspect Ratio 16:9 */}
                <div className="lg:col-span-7 relative min-h-[300px] md:min-h-[400px] bg-zinc-100 rounded-3xl overflow-hidden border border-brand-border group shadow-soft">
                  <Link href={`/blog/${featuredPost.id}`} className="absolute inset-0 block">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-[1.015] transition-transform duration-500"
                    />
                  </Link>
                </div>

                {/* Right Side: Editorial Information */}
                <div className="lg:col-span-5 flex flex-col justify-between py-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-wider uppercase text-brand-muted">
                      <span className="rounded-full bg-brand-cream px-3 py-1 text-brand-main">{featuredPost.category}</span>
                      <span>{featuredPost.date}</span>
                    </div>

                    <Link href={`/blog/${featuredPost.id}`} className="group">
                      <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-brand-main leading-[1.15] tracking-tight group-hover:text-brand-accent-hover transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    <p className="text-brand-secondary text-sm leading-relaxed font-light mt-2">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mt-6 border-t border-brand-border/60 pt-6">
                    {/* Author Badge */}
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-xs font-bold text-brand-main">{featuredPost.author}</p>
                        <p className="text-[9px] text-brand-muted uppercase font-bold tracking-wider">{featuredPost.authorRole}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs font-bold text-brand-main mt-1">
                      <span className="flex items-center gap-1.5 text-brand-muted font-medium">
                        <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* 2. Grid for remaining posts */}
          {remainingPosts.length > 0 && (
            <div>
              <h3 className="font-display font-black text-lg text-brand-main uppercase tracking-widest border-b-2 border-brand-main pb-3 mb-8">
                {getMessages(resolveLocale(currentLocale), "UI").moreArticles}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {remainingPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-brand-bg rounded-3xl border border-brand-border p-6 flex flex-col justify-between shadow-soft group"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden border border-brand-border/60 mb-5">
                        <Link href={`/blog/${post.id}`} className="absolute inset-0 block">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                          />
                        </Link>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-3">
                        <span className="rounded-full bg-brand-cream px-2.5 py-1 text-brand-main">{post.category}</span>
                        <span>{post.date}</span>
                      </div>

                      <Link href={`/blog/${post.id}`}>
                        <h3 className="font-display font-black text-lg md:text-xl text-brand-main tracking-tight leading-tight group-hover:text-brand-accent-hover transition-colors mb-3">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-brand-secondary text-xs md:text-sm leading-relaxed font-light mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-brand-border/50 pt-4">
                      {/* Author */}
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="text-[10px] font-bold text-brand-main">{post.author}</p>
                          <p className="text-[8px] text-brand-muted uppercase font-bold tracking-wider leading-none">{post.authorRole}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs font-bold text-brand-main">
                        <span className="flex items-center gap-1 text-brand-muted font-medium">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

