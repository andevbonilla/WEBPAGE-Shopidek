import type { Metadata } from "next";
import { SITE_URL, localizedPath } from "../../config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  const path = localizedPath(currentLocale, "/help");
  const title = currentLocale === "en" ? "Help Center | ShopiDeck" : "Centro de Ayuda | ShopiDeck";
  const description = currentLocale === "en"
    ? "Practical help for Klaviyo Bot Cleaner, OAuth, audits, suppression, billing, privacy, and support."
    : "Ayuda práctica sobre OAuth, auditorías, supresión, facturación, privacidad y soporte de Klaviyo Bot Cleaner.";
  return { metadataBase: new URL(SITE_URL), title, description, alternates: { canonical: path, languages: { en: "/help", es: "/es/help", "x-default": "/help" } }, openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: "ShopiDeck", type: "website" } };
}

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return children;
}

