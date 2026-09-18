import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const themes = {
  botcleaner: { accent: "#2c8fe9", ink: "#185a9c", hover: "#164f89", soft: "#e8f3ff", wash: "#f5faff", border: "#b8d9f7", deep: "#152d45" },
  marketing: { accent: "#8b5cf6", ink: "#6130ae", hover: "#542994", soft: "#f0e7ff", wash: "#faf7ff", border: "#dac7fa", deep: "#28183e" },
} as const;

export function ProductPage({ theme, children }: { theme: keyof typeof themes; children: ReactNode }) {
  const colors = themes[theme];
  const style = Object.fromEntries(Object.entries(colors).map(([key, value]) => [`--app-${key}`, value])) as CSSProperties;
  return (
    <div style={style} className="product-page flex min-h-screen flex-col bg-brand-bg">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

type HeroProps = {
  name: string;
  icon: string;
  iconAlt: string;
  badge: string;
  lines: string[];
  description: string;
  note: string;
  actions: ReactNode;
  visual: ReactNode;
  pillars: string[];
};

export function ProductHero({ name, icon, iconAlt, badge, lines, description, note, actions, visual, pillars }: HeroProps) {
  return (
    <section className="overflow-hidden border-b border-brand-border py-14 sm:py-20 lg:py-24">
      <div className="layout-container grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Image src={icon} alt={iconAlt} width={44} height={44} sizes="44px" className="rounded-xl" />
            <p className="text-xs font-bold tracking-wide text-app-ink sm:text-sm">{name}</p>
          </div>
          <p className="mb-5 inline-flex rounded-full border border-app-border bg-app-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-app-ink">{badge}</p>
          <h1 className="font-display text-4xl font-black leading-[1.09] tracking-tight sm:text-5xl xl:text-6xl">
            {lines.map((line, index) => <span key={line} className={`block ${index === 1 ? "text-app-ink" : ""}`}>{line}</span>)}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-brand-secondary sm:text-base">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>
          <p className="mt-5 max-w-xl text-xs leading-relaxed text-brand-muted">{note}</p>
        </div>
        <div className="relative mx-auto flex w-full max-w-lg flex-col items-center rounded-[2.5rem] border border-app-border bg-app-soft px-6 py-10 sm:px-10 sm:py-14">
          <div aria-hidden="true" className="absolute left-7 top-7 h-16 w-16 rounded-full border border-app-border sm:h-24 sm:w-24" />
          <div aria-hidden="true" className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-app-border sm:h-36 sm:w-36" />
          <div className="relative z-10 w-full">{visual}</div>
          <div className="relative z-10 mt-9 flex flex-wrap justify-center gap-2">
            {pillars.map((pillar) => (
              <span key={pillar} className="inline-flex items-center gap-1.5 rounded-full border border-white bg-white/85 px-3 py-2 text-[11px] font-bold text-app-ink">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />{pillar}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductHeading({ eyebrow, title, description, centered = false, id }: { eyebrow?: string; title: string; description?: string; centered?: boolean; id?: string }) {
  return (
    <div className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-app-ink">{eyebrow}</p>}
      <h2 id={id} className="product-section-title">{title}</h2>
      {description && <p className="mt-4 text-sm leading-relaxed text-brand-secondary sm:text-base">{description}</p>}
    </div>
  );
}

export function ProductFaq({ title, faqs }: { title: string; faqs: { question: string; answer: string }[] }) {
  return (
    <section className="product-section border-t border-brand-border bg-brand-card">
      <div className="layout-container max-w-4xl">
        <ProductHeading title={title} centered />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-brand-border bg-brand-bg">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold marker:content-none sm:p-6 sm:text-base">
                <span>{faq.question}</span><ChevronDown className="h-4 w-4 shrink-0 text-app-ink transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-brand-secondary sm:px-6 sm:pb-6">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
