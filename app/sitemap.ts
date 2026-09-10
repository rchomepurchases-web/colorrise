import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = ["interior-painting", "exterior-painting", "cabinet-refinishing", "epoxy-floor-coatings", "commercial-painting"];
  const serviceAreaPages = ["scottsdale-az", "phoenix-az", "chandler-az", "gilbert-az"];
  const lastModified = new Date("2026-09-10");
  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    ...servicePages.map((slug) => ({ url: `${siteUrl}/services/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${siteUrl}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...serviceAreaPages.map((slug) => ({ url: `${siteUrl}/service-areas/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.85 })),
    { url: `${siteUrl}/blog/modern-office-spaces`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/blog/going-bold-how-to-choose`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/blog/the-many-shades-of-white`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/blog/when-to-go-dark`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
