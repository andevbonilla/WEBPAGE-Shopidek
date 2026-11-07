import type { MetadataRoute } from "next";
import { SITE_URL } from "./config";
import { getPosts } from "./[locale]/blog/posts";
import { legalProducts } from "./legal/productLegal";
import { LEGAL_UPDATED_ISO } from "./legal/shared";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date("2026-09-15T00:00:00.000Z");
  const staticPaths = [
    "",
    "/klaviyo-bot-cleaner",
    "/less-time-marketing",
    "/retracto-y-pqr",
    "/help",
    "/blog",
    "/privacy",
    "/terms",
    "/dpa",
    "/subprocessors",
    "/data-deletion",
    ...legalProducts.flatMap(({ slug }) => ["privacy", "terms", "dpa"].map((kind) => `/${kind}/${slug}`)),
  ];
  const paths = [
    ...staticPaths.map((path) => ({
      path,
      lastModified: /^\/(privacy|terms|dpa|subprocessors|data-deletion)(\/|$)/.test(path)
        ? new Date(LEGAL_UPDATED_ISO)
        : path === "/retracto-y-pqr"
        ? new Date("2026-11-07T00:00:00.000Z")
        : ["/less-time-marketing", "/klaviyo-bot-cleaner"].includes(path)
        ? new Date("2026-11-01T00:00:00.000Z")
        : ["", "/help"].includes(path)
        ? new Date("2026-09-18T00:00:00.000Z")
        : siteLastModified,
    })),
    ...getPosts("en").map((post) => ({
      path: `/blog/${post.id}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
    })),
  ];

  return paths.flatMap(({ path, lastModified }) => {
    const englishUrl = `${SITE_URL}${path || "/"}`;
    const spanishUrl = `${SITE_URL}/es${path}`;
    const languages = { en: englishUrl, es: spanishUrl, "x-default": englishUrl };

    return [
      { url: englishUrl, lastModified, alternates: { languages } },
      { url: spanishUrl, lastModified, alternates: { languages } },
    ];
  });
}

