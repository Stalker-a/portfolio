import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

const publicPaths = [
  "/",
  "/projects/3d-design-digital-platform",
  "/projects/3dd-telegram-automation",
  "/projects/private-cloud-home-lab",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.siteUrl;

  if (!siteUrl) {
    return [];
  }

  return publicPaths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
