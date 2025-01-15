import { meta } from "@/data/site-metadata";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${meta.siteUrl}/sitemap.xml`,
    host: meta.siteUrl,
  };
}
