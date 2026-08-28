export const SITE_URL = "https://shopideck.com";
export const BRAND_ASSET_BASE = "/brand";

export const NAVBAR_LOGO = `${BRAND_ASSET_BASE}/logos/shopideck-logo-horizontal-light.png`;
export const NAVBAR_LOGO_WIDTH = 1896;
export const NAVBAR_LOGO_HEIGHT = 518;
export const NAVBAR_LOGO_DISPLAY_WIDTH = 183;

export const SITE_LOGO = `${BRAND_ASSET_BASE}/logos/shopideck-logo-horizontal-light.png`;
export const SITE_LOGO_URL = `${SITE_URL}${SITE_LOGO}`;
export const SITE_LOGO_WIDTH = 1896;
export const SITE_LOGO_HEIGHT = 518;
export const SITE_LOGO_ALT = "ShopiDeck";
export const FOOTER_LOGO = `${BRAND_ASSET_BASE}/logos/shopideck-logo-horizontal-dark.png`;
export const FOOTER_LOGO_WIDTH = 478;
export const FOOTER_LOGO_HEIGHT = 133;
export const FOOTER_LOGO_DISPLAY_WIDTH = 230;
export const SITE_MARK = `${BRAND_ASSET_BASE}/icons/shopideck-icon.png`;
export const SITE_MARK_URL = `${SITE_URL}${SITE_MARK}`;
export const SITE_MARK_WIDTH = 2000;
export const SITE_MARK_HEIGHT = 2000;

export const SITE_FAVICON_SVG = `${BRAND_ASSET_BASE}/favicons/favicon.svg`;
export const SITE_FAVICON_PNG = `${BRAND_ASSET_BASE}/favicons/favicon-96x96.png`;
export const SITE_FAVICON_ICO = `${BRAND_ASSET_BASE}/favicons/favicon.ico`;
export const SITE_APPLE_TOUCH_ICON = `${BRAND_ASSET_BASE}/favicons/apple-touch-icon.png`;
export const SITE_ICON = `${BRAND_ASSET_BASE}/favicons/web-app-manifest-512x512.png`;

export const BOTCLEANER_ICON = `${BRAND_ASSET_BASE}/products/bot-cleaner/shopideck-klaviyo-bot-cleaner-icon.png`;
export const BOTCLEANER_LOGO = `${BRAND_ASSET_BASE}/products/bot-cleaner/shopideck-klaviyo-bot-cleaner-logo-light.png`;
export const BOTCLEANER_LOGO_URL = `${SITE_URL}${BOTCLEANER_LOGO}`;
export const BOTCLEANER_LOGO_WIDTH = 1935;
export const BOTCLEANER_LOGO_HEIGHT = 506;
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

