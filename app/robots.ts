import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sodiqolatunde.com/sitemap.xml",
    host: "https://sodiqolatunde.com",
  };
}
