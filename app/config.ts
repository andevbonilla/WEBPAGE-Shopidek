export const SITE_URL = "https://shopideck.com";
export const BRAND_ASSET_BASE = "/shopidecks%20logo";

// The compact legacy wordmark is intentionally kept in the navbar because it
// has the tight horizontal crop needed at navigation height.
export const NAVBAR_LOGO = "/shopideck_logo.png";
export const NAVBAR_LOGO_WIDTH = 595;
export const NAVBAR_LOGO_HEIGHT = 222;

// Brand variants from the shared logo library.
export const SITE_LOGO = `${BRAND_ASSET_BASE}/ShopiDeck_logo_horizontal.png`;
export const SITE_LOGO_URL = `${SITE_URL}${SITE_LOGO}`;
export const SITE_LOGO_WIDTH = 2000;
export const SITE_LOGO_HEIGHT = 2000;
export const SITE_LOGO_ALT = "ShopiDeck";
export const FOOTER_LOGO = `${BRAND_ASSET_BASE}/ShopiDeck_logo_horizontal_fondo_negro.png`;
export const SITE_MARK = `${BRAND_ASSET_BASE}/ShopiDeck_square_icon.png`;
export const SITE_MARK_URL = `${SITE_URL}${SITE_MARK}`;
export const SITE_MARK_WIDTH = 2000;
export const SITE_MARK_HEIGHT = 2000;

export const SITE_FAVICON_SVG = `${BRAND_ASSET_BASE}/favicon/favicon.svg`;
export const SITE_FAVICON_PNG = `${BRAND_ASSET_BASE}/favicon/favicon-96x96.png`;
export const SITE_FAVICON_ICO = `${BRAND_ASSET_BASE}/favicon/favicon.ico`;
export const SITE_APPLE_TOUCH_ICON = `${BRAND_ASSET_BASE}/favicon/apple-touch-icon.png`;
export const SITE_ICON = `${BRAND_ASSET_BASE}/favicon/web-app-manifest-512x512.png`;

export const BOTCLEANER_ICON = `${BRAND_ASSET_BASE}/ShopiDeck_square_icon_app_botcleaner.png`;
export const BOTCLEANER_LOGO = `${BRAND_ASSET_BASE}/ShopiDeck_logo_app_botcleaner.png`;
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

