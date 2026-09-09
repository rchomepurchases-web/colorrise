import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "../LeadForm";
import { businessName, safeJsonLd, siteUrl } from "../seo";
import { featuredServiceAreas } from "./data";

export const metadata: Metadata = {
  title: "Painting Service Areas | Phoenix Metro | Color Rise Coatings",
  description: "Color Rise Coatings serves homeowners across the Phoenix metro with interior painting, exterior painting, cabinet refinishing, and epoxy floor coatings.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Color Rise Coatings service areas",
    itemListElement: featuredServiceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/service-areas/${area.slug}`,
      name: `${area.city}, Arizona`,
    })),
  };

  return (
    <main className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <header className="service-nav">
        <Link className="service-logo" href="/" aria-label={`${businessName} home`}><img src="/Logo - Colorrise - Trans (1080 x 1080 px).png?v=transparent-20260808" alt={businessName} /></Link>
        <nav aria-label="Service area navigation"><Link href="/#services">Services</Link><Link href="/#about">About</Link><Link href="/#estimate" className="article-nav-cta">Free estimate</Link></nav>
      </header>

      <section className="service-hero">
        <div className="service-hero-copy"><p className="eyebrow light">Where we work</p><h1>Painting Services Across<br /><em>the Phoenix Metro.</em></h1><p>Color Rise Coatings provides residential and commercial painting throughout the Valley, with a focus on professional preparation, premium coatings, clear communication, and dependable project management.</p><div className="hero-actions"><a className="button spectrum" href="#service-estimate">Get a free estimate <span>↗</span></a></div></div>
        <img src="/callum-hill-jo4CWjIw4Wc-unsplash.jpg" alt="Professional painting services across the Phoenix metro" />
      </section>

      <section className="service-benefits section"><div><p className="eyebrow">Featured service areas</p><h2>Local pages built around<br /><em>the communities we serve.</em></h2></div><div className="benefit-grid">{featuredServiceAreas.map((area, index) => <article key={area.slug}><span>{String(index + 1).padStart(2, "0")}</span><h3><Link href={`/service-areas/${area.slug}`}>{area.city}, AZ →</Link></h3><p>{area.description}</p></article>)}</div></section>

      <section className="service-process section"><p className="eyebrow light">Additional Phoenix metro coverage</p><h2>Serving homeowners<br /><em>throughout the Valley.</em></h2><ol>{["Paradise Valley", "Mesa", "Queen Creek", "Peoria", "Tempe", "Glendale", "Goodyear", "Avondale"].map((city, index) => <li key={city}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{city}</h3><p>Contact Color Rise to confirm service availability for your property.</p></div></li>)}</ol></section>

      <section className="estimate section service-estimate" id="service-estimate"><div className="estimate-art"><p>Ready for a<br /><em>color rise?</em></p></div><div className="estimate-copy"><p className="eyebrow light">Free, no-pressure estimate</p><h2>Tell us about<br />your project.</h2><p>Don’t see your city listed? Send us your project details and we’ll confirm availability.</p><LeadForm /></div></section>

      <footer className="article-footer"><span>© {new Date().getFullYear()} {businessName}</span><span><Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/">Home</Link></span></footer>
    </main>
  );
}
