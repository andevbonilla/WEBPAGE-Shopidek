import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const replacedPosts = [
      ["clean-fake-klaviyo-profiles-shopify", "save-money-klaviyo-marketing"],
      ["klaviyo-deliverability-hygiene", "sell-more-with-klaviyo"],
    ];
    // Product landings moved to names that match each app.
    const renamedPages = [
      ["botcleaner", "klaviyo-bot-cleaner"],
      ["social-marketing", "less-time-marketing"],
    ];
    return ["", "/es", "/en"].flatMap((prefix) => {
      const target = prefix === "/en" ? "" : prefix;
      return [
        ...replacedPosts.map(([oldSlug, newSlug]) => ({
          source: `${prefix}/blog/${oldSlug}`,
          destination: `${target}/blog/${newSlug}`,
          permanent: true,
        })),
        ...renamedPages.map(([oldPath, newPath]) => ({
          source: `${prefix}/${oldPath}`,
          destination: `${target}/${newPath}`,
          permanent: true,
        })),
      ];
    });
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
