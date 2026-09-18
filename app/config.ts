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

export const BOTCLEANER_ICON = `${BRAND_ASSET_BASE}/products/bot-cleaner/shopideck-klaviyo-bot-cleaner-app-icon.png`;
export const BOTCLEANER_LOGO = BOTCLEANER_ICON;
export const BOTCLEANER_LOGO_URL = `${SITE_URL}${BOTCLEANER_LOGO}`;
export const BOTCLEANER_LOGO_WIDTH = 1254;
export const BOTCLEANER_LOGO_HEIGHT = 1254;
export const BOTCLEANER_INTERFACE = `${BRAND_ASSET_BASE}/products/bot-cleaner/shopideck-klaviyo-bot-cleaner-interface.png`;
export const BOTCLEANER_INTERFACE_WIDTH = 1528;
export const BOTCLEANER_INTERFACE_HEIGHT = 969;
export const TEAM_EMAIL = "team@shopideck.com";
export const SUPPORT_EMAIL = TEAM_EMAIL;
export const PRIVACY_EMAIL = TEAM_EMAIL;
export const PRODUCT_NAME = "ShopiDeck: Klaviyo Bot Cleaner";
export const SOCIAL_MARKETING_NAME = "ShopiDeck: Social Marketing";
export const SOCIAL_MARKETING_ICON = `${BRAND_ASSET_BASE}/products/social-marketing/shopideck-social-marketing-app-icon.webp`;
export const SOCIAL_MARKETING_ICON_SMALL = `${BRAND_ASSET_BASE}/products/social-marketing/shopideck-social-marketing-app-icon-small.webp`;
export const SOCIAL_MARKETING_ICON_SIZE = 512;

// Replace the fallback search with the exact listing as soon as Shopify assigns
// the public app URL. Installation CTAs must always stay on Shopify App Store.
export const SHOPIFY_APP_STORE_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_APP_STORE_URL ||
  "https://apps.shopify.com/search?q=ShopiDeck%20Klaviyo%20Bot%20Cleaner";

export const SUPPORT_HOURS = "Email support during published support hours";

export function localizedPath(locale: "en" | "es", path = "/") {
  if (locale === "es") return `/es${path === "/" ? "" : path}`;
  return path;
}

