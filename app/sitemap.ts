import type { MetadataRoute } from "next";
import { SITE_URL } from "./config";
import { getPosts } from "./[locale]/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date("2026-09-15T00:00:00.000Z");
  const staticPaths = [
    "",
    "/botcleaner",
    "/social-marketing",
    "/help",
    "/blog",
    "/privacy",
    "/terms",
    "/dpa",
    "/subprocessors",
  ];
  const paths = [
    ...staticPaths.map((path) => ({
      path,
      lastModified: ["", "/help", "/social-marketing"].includes(path)
        ? new Date("2026-09-18T00:00:00.000Z")
        : siteLastModified,
    })),
    ...getPosts("en").map((post) => ({
      path: `/blog/${post.id}`,
      lastModified: new Date(post.publishedAt),
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

