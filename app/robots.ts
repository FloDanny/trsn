import type { MetadataRoute } from "next";

import { absoluteUrl, siteHost } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/reports/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteHost,
  };
}
