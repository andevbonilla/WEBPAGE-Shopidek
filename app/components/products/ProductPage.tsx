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
  lines: string[];
  description: string;
  note: string;
  actions: ReactNode;
  visual: ReactNode;
  pillars: string[];
};

export function ProductHero({ name, icon, iconAlt, lines, description, note, actions, visual, pillars }: HeroProps) {
  return (
    <section className="overflow-hidden border-b border-brand-border pt-14 sm:pt-20 lg:pt-24">
      <div className="layout-container">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Image src={icon} alt={iconAlt} width={44} height={44} sizes="44px" className="rounded-xl" />
            <p className="text-xs font-bold tracking-wide text-app-ink sm:text-sm">{name}</p>
          </div>
          <h1 className="font-display text-4xl font-black leading-[1.09] tracking-tight sm:text-5xl xl:text-6xl">
            {lines.map((line, index) => <span key={line} className={`block ${index === 1 ? "text-app-ink" : ""}`}>{line}</span>)}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-brand-secondary sm:text-base">{description}</p>
          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">{actions}</div>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-brand-muted">{note}</p>
        </div>
      </div>
      <div className="mt-12 bg-app-wash py-10 sm:mt-16 sm:py-14">
        <div className="layout-container">
          {visual}
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3">
            {pillars.map((pillar) => (
              <span key={pillar} className="inline-flex items-center gap-1.5 text-[11px] font-bold text-app-ink">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />{pillar}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductMonitor({ children }: { children: ReactNode }) {
  return (
    <div className="product-monitor mx-auto w-full max-w-4xl">
      <div className="rounded-[1.6rem] border-[6px] border-brand-main bg-brand-main p-1.5 shadow-premium sm:border-[10px] sm:p-2">
        <div className="overflow-hidden rounded-[0.9rem]">{children}</div>
      </div>
      <div aria-hidden="true" className="mx-auto h-10 w-20 bg-brand-main sm:h-12 sm:w-24" />
      <div aria-hidden="true" className="mx-auto h-2.5 w-36 rounded-full bg-brand-main sm:w-48" />
    </div>
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
