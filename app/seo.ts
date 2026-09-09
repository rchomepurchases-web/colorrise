import type { Metadata } from "next";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://colorrisecoatings.com";

export const siteUrl = configuredUrl.startsWith("http")
  ? configuredUrl.replace(/\/$/, "")
  : `https://${configuredUrl.replace(/\/$/, "")}`;

export const businessName = "Color Rise Coatings";
export const businessPhone = "+1-602-615-6051";
export const businessEmail = "rc@colorrisecoatings.com";

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function createArticleMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
