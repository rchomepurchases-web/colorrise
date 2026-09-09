import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "../LeadForm";
import { businessName, businessPhone, safeJsonLd, siteUrl } from "../seo";
import type { ServiceArea } from "./data";

export function serviceAreaMetadata(area: ServiceArea): Metadata {
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: { type: "website", url: `/service-areas/${area.slug}`, title: area.title, description: area.description },
  };
}

export default function ServiceAreaPage({ area }: { area: ServiceArea }) {
  const pageUrl = `${siteUrl}/service-areas/${area.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Painting Services in ${area.city}, Arizona`,
        description: area.description,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: { "@type": "City", name: area.city, containedInPlace: { "@type": "State", name: "Arizona" } },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${siteUrl}/service-areas` },
          { "@type": "ListItem", position: 3, name: area.city, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <header className="service-nav">
        <Link className="service-logo" href="/" aria-label={`${businessName} home`}><img src="/Logo - Colorrise - Trans (1080 x 1080 px).png?v=transparent-20260808" alt={businessName} /></Link>
        <nav aria-label="Service area navigation"><Link href="/service-areas">Service areas</Link><Link href="/#services">Services</Link><Link href="/#estimate" className="article-nav-cta">Free estimate</Link></nav>
      </header>

      <section className="service-hero">
        <div className="service-hero-copy"><p className="eyebrow light">Phoenix metro service area</p><h1>House Painters<br /><em>in {area.city}, Arizona.</em></h1><p>{area.intro}</p><div className="hero-actions"><a className="button spectrum" href="#service-estimate">Get a free estimate <span>↗</span></a><a className="text-link" href={`tel:${businessPhone.replace(/[^+\d]/g, "")}`}>(602) 615-6051</a></div></div>
        <img src="/callum-hill-jo4CWjIw4Wc-unsplash.jpg" alt={`Professional painting service in ${area.city}, Arizona`} />
      </section>

      <section className="trust-strip" aria-label="What to expect"><div><strong>Interior painting</strong><span>Walls, ceilings, trim, doors, and living spaces.</span></div><div><strong>Exterior painting</strong><span>Arizona-ready prep and coatings for stucco and exterior surfaces.</span></div><div><strong>Cabinet refinishing</strong><span>Detailed preparation and durable kitchen finishes.</span></div></section>

      <section className="service-benefits section"><div><p className="eyebrow">Serving {area.city}</p><h2>Local service.<br /><em>A higher standard.</em></h2><p>{area.description}</p></div><div className="benefit-grid"><article><span>01</span><h3>Arizona-ready preparation</h3><p>We inspect surface condition and tailor preparation to sun exposure, stucco, trim, previous coatings, and the needs of your property.</p></article><article><span>02</span><h3>Clear project scope</h3><p>You receive a documented scope so included surfaces, preparation, and finish expectations are clear before work begins.</p></article><article><span>03</span><h3>Professional finish</h3><p>Clean lines, careful protection, professional coatings, and a final walkthrough are built into our process.</p></article></div></section>

      <section className="service-process section"><p className="eyebrow light">Areas we serve nearby</p><h2>{area.city} neighborhoods<br /><em>and surrounding communities.</em></h2><ol>{area.neighborhoods.map((name, index) => <li key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>Contact Color Rise to confirm availability and schedule a no-pressure painting estimate.</p></div></li>)}</ol></section>

      <section className="service-benefits section"><div><p className="eyebrow">Painting services</p><h2>One team for the<br /><em>surfaces that matter.</em></h2></div><div className="benefit-grid"><article><h3><Link href="/services/interior-painting">Interior Painting →</Link></h3><p>Professional repainting for occupied homes, remodels, and full interior refreshes.</p></article><article><h3><Link href="/services/exterior-painting">Exterior Painting →</Link></h3><p>Preparation and coatings selected for Arizona heat, UV exposure, and exterior wear.</p></article><article><h3><Link href="/services/cabinet-refinishing">Cabinet Refinishing →</Link></h3><p>Detailed refinishing for kitchens, built-ins, and painted cabinetry.</p></article></div></section>

      <section className="estimate section service-estimate" id="service-estimate"><div className="estimate-art"><p>Ready for a<br /><em>higher standard?</em></p></div><div className="estimate-copy"><p className="eyebrow light">Free, no-pressure estimate</p><h2>Tell us about<br />your {area.city} project.</h2><p>Share the details below. We’ll contact you to discuss the scope and schedule an on-site estimate.</p><LeadForm /></div></section>

      <footer className="article-footer"><span>© {new Date().getFullYear()} {businessName}</span><span><Link href="/service-areas">Service Areas</Link> · <Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/">Home</Link></span></footer>
    </main>
  );
}
