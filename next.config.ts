import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const replacedPosts = [
      ["clean-fake-klaviyo-profiles-shopify", "save-money-klaviyo-marketing"],
      ["klaviyo-deliverability-hygiene", "sell-more-with-klaviyo"],
    ];
    return ["", "/es", "/en"].flatMap((prefix) =>
      replacedPosts.map(([oldSlug, newSlug]) => ({
        source: `${prefix}/blog/${oldSlug}`,
        destination: `${prefix === "/en" ? "" : prefix}/blog/${newSlug}`,
        permanent: true,
      })),
    );
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
