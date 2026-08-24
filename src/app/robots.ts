import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      userAgent: "*",
    },
    ...(siteConfig.siteUrl
      ? {
          host: siteConfig.siteUrl,
          sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
        }
      : {}),
  };
}
