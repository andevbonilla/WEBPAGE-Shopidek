
import { getMessages, resolveLocale } from "@/i18n/messages";
import { ExternalLink } from "lucide-react";
import CopyLinkButton from "./CopyLinkButton";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { localizedPath } from "../config";
import type { LegalDocument, LegalLink, LegalSection, Locale } from "../legal/legalContent";

type Props = {
  document: LegalDocument;
  locale: Locale;
};

function linkHref(link: LegalLink, locale: Locale) {
  if (link.external) return link.href;
  const cleanPath = link.href.startsWith("/es") ? link.href.substring(3) || "/" : link.href;
  return localizedPath(locale, cleanPath);
}

function SectionLinks({ links, locale }: { links: LegalLink[]; locale: Locale }) {
  return (
    <ul className="mt-4 flex flex-col gap-2 text-sm">
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          <a
            href={linkHref(link, locale)}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 font-semibold text-brand-main underline decoration-brand-accent decoration-2 underline-offset-4 hover:text-brand-accent-hover"
          >
            {link.label}
            {link.external && <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />}
          </a>
        </li>
      ))}
    </ul>
  );
}

function LegalSectionContent({ section, locale }: { section: LegalSection; locale: Locale }) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-28">
      <h2 id={`${section.id}-heading`} className="font-display text-xl font-black tracking-tight text-brand-main sm:text-2xl">
        {section.title}
      </h2>

      {section.paragraphs?.map((paragraph, index) => (
        <p key={`${section.id}-paragraph-${index}`} className="mt-4 text-sm leading-7 text-brand-secondary sm:text-base">
          {paragraph}
        </p>
      ))}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-brand-secondary sm:text-base">
          {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      )}

      {section.table && (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-brand-border">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <thead className="bg-brand-cream text-brand-main">
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header} scope="col" className="border-b border-brand-border px-4 py-3 font-display font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, rowIndex) => (
                <tr key={`${section.id}-row-${rowIndex}`} className="align-top even:bg-brand-bg/50">
                  {row.map((cell, cellIndex) => (
                    <td key={`${section.id}-row-${rowIndex}-cell-${cellIndex}`} className="border-b border-brand-border px-4 py-3 leading-6 text-brand-secondary last:border-b-0">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.links && <SectionLinks links={section.links} locale={locale} />}
    </section>
  );
}

export default function LegalDocumentPage({ document, locale }: Props) {
  const pageLabel = getMessages(resolveLocale(locale), "UI").onThisPage;
  const contactLabel = getMessages(resolveLocale(locale), "UI").legalContact;
  const lastUpdatedLabel = getMessages(resolveLocale(locale), "UI").lastUpdated;

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-main">
      <Navbar />
      <main className="flex-1 bg-brand-card py-12 pb-24 sm:py-16">
        <div className="layout-container max-w-7xl">
          <article>
            <header className="max-w-4xl space-y-5">
              <span className="inline-block rounded-md border border-brand-accent/30 bg-brand-warning px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-main">
                {document.category}
              </span>
              <h1 className="font-display text-3xl font-black tracking-tight text-brand-main sm:text-5xl">
                {document.title}
              </h1>
              <p className="text-base leading-8 text-brand-secondary sm:text-lg">{document.intro}</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-brand-border py-4 text-xs font-medium text-brand-muted">
                <span>{getMessages(resolveLocale(locale), "UI").effective}: {document.effectiveDate}</span>
                <span aria-hidden="true">•</span>
                <span>{lastUpdatedLabel}: {document.lastUpdated}</span>
              </div>
            </header>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              <aside className="self-start lg:sticky lg:top-28 lg:col-span-3" aria-label={pageLabel}>
                <div className="rounded-2xl border border-brand-border bg-brand-bg p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">{contactLabel}</p>
                  <a href="mailto:team@shopideck.com" className="mt-2 block break-all text-sm font-semibold text-brand-main underline decoration-brand-accent decoration-2 underline-offset-4">
                    team@shopideck.com
                  </a>
                </div>

                <nav className="mt-6 hidden lg:block" aria-label={pageLabel}>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-brand-muted">{pageLabel}</p>
                  <ol className="space-y-2 border-l border-brand-border pl-4 text-xs leading-5 text-brand-secondary">
                    {document.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="hover:text-brand-main hover:underline hover:decoration-brand-accent hover:decoration-2 hover:underline-offset-4">
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="mt-6">
                  <CopyLinkButton locale={locale} />
                </div>
              </aside>

              <div className="space-y-10 lg:col-span-9">
                {document.sections.map((section) => (
                  <LegalSectionContent key={section.id} section={section} locale={locale} />
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
