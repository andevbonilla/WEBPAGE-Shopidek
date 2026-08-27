import type { Metadata } from "next";
import LegalDocumentPage from "../../components/LegalDocumentPage";
import { legalDocuments, type Locale } from "../../legal/legalContent";
import { legalMetadata } from "../../legal/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

function getLocale(locale: string): Locale {
  return locale === "es" ? "es" : "en";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = getLocale(locale);
  return legalMetadata(legalDocuments.terms[currentLocale], currentLocale, "/terms");
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = getLocale(locale);
  return <LegalDocumentPage document={legalDocuments.terms[currentLocale]} locale={currentLocale} />;
}
