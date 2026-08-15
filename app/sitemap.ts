import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog/modern-office-spaces`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/blog/going-bold-how-to-choose`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/blog/the-many-shades-of-white`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/blog/when-to-go-dark`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
