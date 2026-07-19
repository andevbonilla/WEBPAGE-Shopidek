import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getPosts } from "./posts";
import { BookOpen, Clock, ArrowRight, User } from "lucide-react";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

const dictionaries = { en, es };

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";
  const dict = dictionaries[currentLocale].Blog;
  
  const t = (key: string, values?: any) => {
    let text = (dict as any)[key] || "";
    if (values) {
      Object.keys(values).forEach((k) => {
        text = text.replace(`{${k}}`, values[k]);
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
          <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-[10px] font-bold bg-brand-warning text-brand-main border border-brand-accent/20 tracking-wider uppercase">
            <BookOpen className="w-3 h-3 text-brand-accent-hover" />
            <span>{t("badge")}</span>
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl leading-none text-brand-main tracking-tight uppercase">
            {currentLocale === "en" ? "ShopiDeck Journal" : "Diario ShopiDeck"}
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
                <div className="lg:col-span-7 relative min-h-[300px] md:min-h-[400px] bg-zinc-100 rounded-3xl overflow-hidden border border-brand-border group shadow-soft hover:shadow-premium transition-all duration-300">
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
                      <span className="bg-brand-warning text-brand-main px-2.5 py-1 rounded-lg border border-brand-accent/25">
                        {featuredPost.category}
                      </span>
                      <span>&bull;</span>
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
                      <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center font-bold text-brand-main text-xs uppercase">
                        {featuredPost.author[0]}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-main">{featuredPost.author}</p>
                        <p className="text-[9px] text-brand-muted uppercase font-bold tracking-wider">{featuredPost.authorRole}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs font-bold text-brand-main mt-1">
                      <span className="flex items-center gap-1.5 text-brand-muted font-medium">
                        <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                      </span>
                      <Link 
                        href={`/blog/${featuredPost.id}`} 
                        className="inline-flex items-center gap-1 hover:text-brand-accent-hover group/link transition-colors"
                      >
                        <span>{t("readFull")}</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
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
                    className="bg-brand-bg rounded-3xl border border-brand-border p-6 flex flex-col justify-between shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-0.5 group"
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
                        <span className="bg-brand-card border border-brand-border px-2.5 py-0.5 rounded-md font-bold text-brand-secondary">
                          {post.category}
                        </span>
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
                        <div className="w-7 h-7 rounded-full bg-brand-card border border-brand-border flex items-center justify-center font-bold text-brand-main text-[10px] uppercase">
                          {post.author[0]}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-brand-main">{post.author}</p>
                          <p className="text-[8px] text-brand-muted uppercase font-bold tracking-wider leading-none">{post.authorRole}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-xs font-bold text-brand-main">
                        <span className="flex items-center gap-1 text-brand-muted font-medium">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="hover:text-brand-accent-hover flex items-center gap-1 transition-colors group/link"
                        >
                          <span>{t("readFull")}</span>
                          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
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
