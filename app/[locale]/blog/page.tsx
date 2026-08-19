import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getPosts } from "./posts";
import { Clock } from "lucide-react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import { SITE_URL, localizedPath } from "../../config";

const dictionaries = { en, es };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  const path = localizedPath(currentLocale, "/blog");
  const title = currentLocale === "en" ? "ShopiDeck Blog | Practical Shopify guides" : "Blog de ShopiDeck | Guías prácticas para Shopify";
  const description = currentLocale === "en"
    ? "Practical guides for reviewing suspicious Klaviyo profiles and building clearer Shopify growth workflows."
    : "Guías prácticas para revisar perfiles sospechosos de Klaviyo y construir flujos de crecimiento más claros en Shopify.";
  return { metadataBase: new URL(SITE_URL), title, description, alternates: { canonical: path, languages: { en: "/blog", es: "/es/blog", "x-default": "/blog" } }, openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: "ShopiDeck", type: "website" } };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";
  const dict = dictionaries[currentLocale].Blog as Record<string, string>;
  
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

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* HEADER */}
      <Navbar />

      {/* BLOG MAIN HEADER */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-brand-bg to-brand-cream/30 border-b border-brand-border">
        <div className="layout-container text-left flex flex-col gap-3">
          <h1 className="font-display font-black text-4xl sm:text-5xl leading-none text-brand-main tracking-tight uppercase">
            {currentLocale === "en" ? "Practical Shopify guides" : "Guías prácticas para Shopify"}
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
                    <div className="flex items-center gap-3 text-[11px] font-bold tracking-wider uppercase text-brand-muted">
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
                {currentLocale === "en" ? "More Tech News" : "Más Artículos"}
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

                      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-brand-muted mb-3">
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
