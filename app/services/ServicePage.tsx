import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "../LeadForm";
import { businessName, businessPhone, safeJsonLd, siteUrl } from "../seo";

export type ServiceContent = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  image: string;
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faqs: [string, string][];
};

export function serviceMetadata(service: ServiceContent): Metadata {
  const title = `${service.name} in Phoenix, AZ`;
  return {
    title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { type: "website", url: `/services/${service.slug}`, title, description: service.description, images: [{ url: service.image, alt: service.name }] },
    twitter: { card: "summary_large_image", title, description: service.description, images: [service.image] },
  };
}

export default function ServicePage({ service }: { service: ServiceContent }) {
  const serviceUrl = `${siteUrl}/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${serviceUrl}#service`, name: service.name, description: service.description, provider: { "@id": `${siteUrl}/#business` }, areaServed: { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } }, url: serviceUrl },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/#services` },
        { "@type": "ListItem", position: 3, name: service.shortName, item: serviceUrl },
      ] },
      { "@type": "FAQPage", mainEntity: service.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };

  return (
    <main className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <header className="service-nav">
        <Link className="service-logo" href="/" aria-label={`${businessName} home`}><img src="/Logo - Colorrise - Trans (1080 x 1080 px).png?v=transparent-20260808" alt={businessName} /></Link>
        <nav aria-label="Service page navigation"><Link href="/#services">All services</Link><Link href="/#about">About</Link><Link href="/#estimate" className="article-nav-cta" data-track="service-nav-estimate">Free estimate</Link></nav>
      </header>

      <section className="service-hero">
        <div className="service-hero-copy"><p className="eyebrow light">{service.eyebrow}</p><h1>{service.name}<br /><em>in Phoenix, Arizona.</em></h1><p>{service.description}</p><div className="hero-actions"><a className="button spectrum" href="#service-estimate" data-track="service-hero-estimate">Get a free estimate <span>↗</span></a><a className="text-link" href={`tel:${businessPhone.replace(/[^+\d]/g, "")}`} data-track="service-call">(602) 615-6051</a></div></div>
        <img src={service.image} alt={`${service.shortName} project by ${businessName}`} />
      </section>

      <section className="trust-strip" aria-label="What to expect"><div><strong>Clear written scope</strong><span>Know what is included before work begins.</span></div><div><strong>Careful preparation</strong><span>Protection and prep matched to every surface.</span></div><div><strong>Final walkthrough</strong><span>Review the finished work together.</span></div></section>

      <section className="service-benefits section"><div><p className="eyebrow">Built around your property</p><h2>A better finish starts<br />before the <em>first coat.</em></h2></div><div className="benefit-grid">{service.benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></section>

      <section className="service-process section"><p className="eyebrow light">Our process</p><h2>Clear steps. <em>Careful execution.</em></h2><ol>{service.process.map((step, index) => <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></section>

      <section className="service-faq section"><div><p className="eyebrow">Good to know</p><h2>{service.shortName}<br /><em>questions answered.</em></h2></div><div>{service.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="estimate section service-estimate" id="service-estimate"><div className="estimate-art"><p>Ready for a<br /><em>higher standard?</em></p></div><div className="estimate-copy"><p className="eyebrow light">Free, no-pressure estimate</p><h2>Tell us about<br />your project.</h2><p>Share the details below. We’ll contact you to discuss the scope and schedule an on-site estimate.</p><LeadForm defaultService={service.name} /></div></section>

      <footer className="article-footer"><span>© {new Date().getFullYear()} {businessName}</span><span><Link href="/privacy-policy">Privacy Policy</Link> · <Link href="/">Home</Link></span></footer>
    </main>
  );
}
