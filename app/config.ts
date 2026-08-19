export const SITE_URL = "https://shopideck.com";
export const SUPPORT_EMAIL = "support@shopideck.com";
export const PRIVACY_EMAIL = "privacy@shopideck.com";
export const PRODUCT_NAME = "ShopiDeck: Klaviyo Bot Cleaner";

// Set NEXT_PUBLIC_SHOPIFY_APP_STORE_URL only after Shopify has assigned the
// published app listing URL. Until then, visitors get a useful waitlist/help
// destination instead of a broken or unrelated App Store link.
export const SHOPIFY_APP_STORE_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_APP_STORE_URL || "/help";

export const SUPPORT_HOURS = "Email support during published support hours";

export function localizedPath(locale: "en" | "es", path = "/") {
  if (locale === "es") return `/es${path === "/" ? "" : path}`;
  return path;
}
