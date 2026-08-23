export const SITE_URL = "https://shopideck.com";
export const SITE_LOGO = "/shopideck_logo.png";
export const SITE_LOGO_URL = `${SITE_URL}${SITE_LOGO}`;
export const SITE_LOGO_WIDTH = 595;
export const SITE_LOGO_HEIGHT = 222;
export const SITE_LOGO_ALT = "ShopiDeck";
export const SITE_ICON = "/android-chrome-512x512.png";
export const BOTCLEANER_ICON = "/favicons-botcleaner/android-chrome-192x192.png";
export const TEAM_EMAIL = "team@shopideck.com";
export const SUPPORT_EMAIL = TEAM_EMAIL;
export const PRIVACY_EMAIL = TEAM_EMAIL;
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

