import type { MetadataRoute } from "next";

const SITE_URL = "https://smartlogix.com.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/equipo/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
