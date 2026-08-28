import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import {
  SITE_LOGO,
  SITE_LOGO_ALT,
  SITE_LOGO_HEIGHT,
  SITE_LOGO_URL,
  SITE_LOGO_WIDTH,
  SITE_APPLE_TOUCH_ICON,
  SITE_FAVICON_ICO,
  SITE_FAVICON_PNG,
  SITE_FAVICON_SVG,
  SITE_ICON,
  SITE_MARK_HEIGHT,
  SITE_MARK_URL,
  SITE_MARK_WIDTH,
  SITE_URL,
} from "../config";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShopiDeck | Focused tools for Shopify merchants",
  description: "ShopiDeck builds focused tools for Shopify merchants who want cleaner data, smarter marketing, and better growth decisions.",
  keywords: "Shopify tools, Klaviyo profile audit, ecommerce operations, merchant growth tools",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es", "x-default": "/" },
  },
  icons: {
    icon: [
      { url: SITE_FAVICON_SVG, type: "image/svg+xml" },
      { url: SITE_FAVICON_PNG, sizes: "96x96", type: "image/png" },
      { url: SITE_ICON, sizes: "512x512", type: "image/png" },
    ],
    shortcut: SITE_FAVICON_ICO,
    apple: SITE_APPLE_TOUCH_ICON,
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ShopiDeck | Focused tools for Shopify merchants",
    description: "ShopiDeck builds focused tools for Shopify merchants who want cleaner data, smarter marketing, and better growth decisions.",
    url: SITE_URL,
    siteName: "ShopiDeck",
    images: [
      {
        url: SITE_LOGO,
        width: SITE_LOGO_WIDTH,
        height: SITE_LOGO_HEIGHT,
        alt: SITE_LOGO_ALT,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopiDeck | Focused tools for Shopify merchants",
    description: "ShopiDeck builds focused tools for Shopify merchants who want cleaner data, smarter marketing, and better growth decisions.",
    images: [{ url: SITE_LOGO, alt: SITE_LOGO_ALT }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ShopiDeck",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: SITE_MARK_URL,
    width: SITE_MARK_WIDTH,
    height: SITE_MARK_HEIGHT,
  },
  image: SITE_LOGO_URL,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (locale !== "es" && locale !== "en") {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-main font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}

