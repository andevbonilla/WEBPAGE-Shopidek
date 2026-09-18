
import { getMessages, resolveLocale } from "@/i18n/messages";
import { ExternalLink } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CopyLinkButton from "./CopyLinkButton";
import { localizedPath } from "../config";
import type { Locale, Subprocessor } from "../legal/legalContent";

type Props = {
  locale: Locale;
  items: Subprocessor[];
};

export default function SubprocessorsPage({ locale, items }: Props) {
  const resourceLabels: Record<string, string> = getMessages(locale, "UI").resourceLabels;
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-main">
      <Navbar />
      <main className="flex-1 bg-brand-card py-12 pb-24 sm:py-16">
        <div className="layout-container max-w-7xl">
          <article>
            <header className="max-w-4xl space-y-5">
              <h1 className="font-display text-3xl font-black tracking-tight sm:text-5xl">
                {getMessages(resolveLocale(locale), "UI").subprocessors}
              </h1>
              <p className="max-w-4xl text-base leading-8 text-brand-secondary sm:text-lg">
                {getMessages(resolveLocale(locale), "UI").thisPageIdentifiesTheProvidersThatMay}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-brand-border py-4 text-xs font-medium text-brand-muted">
                <span>{getMessages(resolveLocale(locale), "UI").effective}: {getMessages(resolveLocale(locale), "UI").september12026}</span>
                <span aria-hidden="true">•</span>
                <span>{getMessages(resolveLocale(locale), "UI").lastUpdated}: {getMessages(resolveLocale(locale), "UI").september12026}</span>
              </div>
            </header>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <aside className="self-start lg:sticky lg:top-28 lg:col-span-3">
                <div className="rounded-2xl border border-brand-border bg-brand-bg p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">{getMessages(resolveLocale(locale), "UI").contact}</p>
                  <a href="mailto:team@shopideck.com" className="mt-2 block break-all text-sm font-semibold underline decoration-brand-accent decoration-2 underline-offset-4">team@shopideck.com</a>
                </div>
                <nav className="mt-6 space-y-2 text-xs" aria-label={getMessages(resolveLocale(locale), "UI").legalPages}>
                  <a href={localizedPath(locale, "/privacy")} className="block text-brand-secondary underline decoration-brand-accent decoration-2 underline-offset-4">{getMessages(resolveLocale(locale), "UI").privacyPolicy}</a>
                  <a href={localizedPath(locale, "/terms")} className="block text-brand-secondary underline decoration-brand-accent decoration-2 underline-offset-4">{getMessages(resolveLocale(locale), "UI").termsOfUse}</a>
                  <a href={localizedPath(locale, "/dpa")} className="block text-brand-secondary underline decoration-brand-accent decoration-2 underline-offset-4">{getMessages(resolveLocale(locale), "UI").dataProcessingAddendum2}</a>
                </nav>
                <div className="mt-6"><CopyLinkButton locale={locale} /></div>
              </aside>

              <div className="space-y-6 lg:col-span-9">
                {items.map((item) => (
                  <section key={item.name} className="rounded-3xl border border-brand-border bg-brand-bg p-6 sm:p-8" aria-labelledby={`${item.name.toLowerCase()}-heading`}>
                    <h2 id={`${item.name.toLowerCase()}-heading`} className="font-display text-2xl font-black tracking-tight">{item.name}</h2>
                    <dl className="mt-6 grid gap-5 text-sm sm:grid-cols-2">
                      <div><dt className="font-bold text-brand-main">{getMessages(resolveLocale(locale), "UI").service}</dt><dd className="mt-1 leading-6 text-brand-secondary">{item.service}</dd></div>
                      <div><dt className="font-bold text-brand-main">{getMessages(resolveLocale(locale), "UI").purpose}</dt><dd className="mt-1 leading-6 text-brand-secondary">{item.purpose}</dd></div>
                      <div className="sm:col-span-2"><dt className="font-bold text-brand-main">{getMessages(resolveLocale(locale), "UI").countryOrRegion}</dt><dd className="mt-1 leading-6 text-brand-secondary">{item.region}</dd></div>
                    </dl>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-brand-border pt-5 text-sm">
                      {item.links.map((link) => (
                        <a key={`${item.name}-${link.label}`} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-brand-main underline decoration-brand-accent decoration-2 underline-offset-4 hover:text-brand-accent-hover">
                          {resourceLabels[link.label] ?? link.label}
                          <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
