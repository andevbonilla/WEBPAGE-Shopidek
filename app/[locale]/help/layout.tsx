
import { getMessages, resolveLocale, localeInfo } from "@/i18n/messages";
import type { Metadata } from "next";
import { SITE_LOGO, SITE_LOGO_ALT, SITE_LOGO_HEIGHT, SITE_LOGO_WIDTH, SITE_URL, localizedPath } from "../../config";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  const path = localizedPath(currentLocale, "/help");
  const title = getMessages(resolveLocale(currentLocale), "UI").helpCenterShopideck;
  const description = getMessages(resolveLocale(currentLocale), "UI").practicalHelpForKlaviyoBotCleanerOauth;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path, languages: { en: "/help", es: "/es/help", "x-default": "/help" } },
    openGraph: {
      locale: localeInfo[currentLocale].openGraph,
      alternateLocale: localeInfo[currentLocale].alternateOpenGraph,
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "ShopiDeck",
      type: "website",
      images: [{ url: SITE_LOGO, width: SITE_LOGO_WIDTH, height: SITE_LOGO_HEIGHT, alt: SITE_LOGO_ALT }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: SITE_LOGO, alt: SITE_LOGO_ALT }] },
  };
}

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return children;
}

