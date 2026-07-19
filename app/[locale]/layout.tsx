import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
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
  title: "ShopiDeck | Smarter Tools for Shopify Store Growth",
  description: "ShopiDeck is a growing suite of simple, focused Shopify tools that help merchants improve data quality, recover lost cart revenue, and automate store operations.",
  keywords: "Shopify apps, Shopify growth tools, Shopify marketing tools, Shopify data cleanup, Shopify cart recovery, ecommerce tools",
  metadataBase: new URL("https://shopideck.com"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "ShopiDeck | Smarter Tools for Shopify Store Growth",
    description: "ShopiDeck is a growing suite of simple, focused Shopify tools that help merchants improve data quality, recover lost cart revenue, and automate store operations.",
    url: "https://shopideck.com",
    siteName: "ShopiDeck",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "ShopiDeck Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopiDeck | Smarter Tools for Shopify Store Growth",
    description: "ShopiDeck is a growing suite of simple, focused Shopify tools that help merchants improve data quality, recover lost cart revenue, and automate store operations.",
    images: ["/android-chrome-512x512.png"],
  },
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
        {children}
      </body>
    </html>
  );
}
