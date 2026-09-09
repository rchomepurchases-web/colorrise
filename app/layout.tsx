import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { businessName, siteUrl } from "./seo";
import ConversionTracking from "./ConversionTracking";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Color Rise Coatings | Arizona Painting Contractors",
    template: "%s | Color Rise Coatings",
  },
  description: "Professional interior painting, exterior painting, cabinet refinishing, and epoxy floor coatings serving Phoenix, Tucson, Prescott, and surrounding Arizona communities.",
  applicationName: businessName,
  keywords: [
    "Arizona painting contractor",
    "Phoenix painters",
    "Tucson painters",
    "Prescott painters",
    "interior painting",
    "exterior painting",
    "cabinet refinishing",
    "epoxy floor coatings",
  ],
  authors: [{ name: businessName, url: siteUrl }],
  creator: businessName,
  publisher: businessName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: businessName,
    title: "Color Rise Coatings | Arizona Painting Contractors",
    description: "Interior, exterior, cabinet, and epoxy painting services across Phoenix, Tucson, Prescott, and surrounding Arizona communities.",
    images: [{ url: "/Logo - Colorrise - Trans (1080 x 1080 px).png", width: 1080, height: 1080, alt: businessName }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Rise Coatings | Arizona Painting Contractors",
    description: "Interior, exterior, cabinet, and epoxy painting services across Arizona.",
    images: ["/Logo - Colorrise - Trans (1080 x 1080 px).png"],
  },
  robots: { index: true, follow: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  icons: { icon: "/Logo - Colorrise - Favicon.png", apple: "/Logo - Colorrise - Webclip.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><ConversionTracking />{children}</body></html>;
}
