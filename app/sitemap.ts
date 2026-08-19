import type { MetadataRoute } from "next";
import { SITE_URL } from "./config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-11T00:00:00.000Z");
  const paths = [
    "",
    "/botcleaner",
    "/help",
    "/blog",
    "/blog/klaviyo-deliverability-hygiene",
    "/privacy",
    "/terms",
  ];

  return paths.flatMap((path) => [
    { url: `${SITE_URL}${path || "/"}`, lastModified, alternates: { languages: { en: `${SITE_URL}${path || "/"}`, es: `${SITE_URL}/es${path}` } } },
    { url: `${SITE_URL}/es${path}`, lastModified, alternates: { languages: { en: `${SITE_URL}${path || "/"}`, es: `${SITE_URL}/es${path}` } } },
  ]);
}
