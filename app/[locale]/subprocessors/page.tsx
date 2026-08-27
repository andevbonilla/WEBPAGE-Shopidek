import type { Metadata } from "next";
import SubprocessorsPage from "../../components/SubprocessorsPage";
import { subprocessors, type Locale } from "../../legal/legalContent";
import { SITE_LOGO, SITE_LOGO_ALT, SITE_LOGO_HEIGHT, SITE_LOGO_WIDTH, SITE_URL, localizedPath } from "../../config";

type PageProps = {
  params: Promise<{ locale: string }>;
};

function getLocale(locale: string): Locale {
  return locale === "es" ? "es" : "en";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = getLocale(locale);
  const title = currentLocale === "es" ? "Subencargados | ShopiDeck" : "Subprocessors | ShopiDeck";
  const description = currentLocale === "es"
    ? "Lista de subencargados de ShopiDeck: Klaviyo Bot Cleaner, servicios, finalidades, regiones y documentos públicos."
    : "ShopiDeck subprocessor list for Klaviyo Bot Cleaner, including services, purposes, regions, and public documents.";
  const path = localizedPath(currentLocale, "/subprocessors");
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path, languages: { en: "/subprocessors", es: "/es/subprocessors", "x-default": "/subprocessors" } },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "ShopiDeck",
      type: "article",
      images: [{ url: SITE_LOGO, width: SITE_LOGO_WIDTH, height: SITE_LOGO_HEIGHT, alt: SITE_LOGO_ALT }],
    },
    twitter: { card: "summary_large_image", title, description, images: [SITE_LOGO] },
  };
}

export default async function SubprocessorsRoute({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = getLocale(locale);
  return <SubprocessorsPage locale={currentLocale} items={subprocessors[currentLocale]} />;
}

