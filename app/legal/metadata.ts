import { localeInfo } from "@/i18n/messages";
import type { Metadata } from "next";
import { SITE_LOGO, SITE_LOGO_ALT, SITE_LOGO_HEIGHT, SITE_LOGO_WIDTH, SITE_URL, localizedPath } from "../config";
import type { LegalDocument, Locale } from "./legalContent";

export function legalMetadata(document: LegalDocument, locale: Locale, path: string): Metadata {
  const localized = localizedPath(locale, path);
  return {
    metadataBase: new URL(SITE_URL),
    title: `${document.title} | ShopiDeck`,
    description: document.intro,
    alternates: {
      canonical: localized,
      languages: { en: path, es: `/es${path}`, "x-default": path },
    },
    openGraph: {
      locale: localeInfo[locale].openGraph,
      alternateLocale: localeInfo[locale].alternateOpenGraph,
      title: `${document.title} | ShopiDeck`,
      description: document.intro,
      url: `${SITE_URL}${localized}`,
      siteName: "ShopiDeck",
      type: "article",
      images: [{ url: SITE_LOGO, width: SITE_LOGO_WIDTH, height: SITE_LOGO_HEIGHT, alt: SITE_LOGO_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${document.title} | ShopiDeck`,
      description: document.intro,
      images: [{ url: SITE_LOGO, alt: SITE_LOGO_ALT }],
    },
  };
}
