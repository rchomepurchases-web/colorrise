import { businessEmail, businessName, businessPhone, safeJsonLd, siteUrl } from "./seo";
import LeadForm from "./LeadForm";

const journalArticles = [
  { n: "01", title: "Modern office spaces", text: "How thoughtful paint colors improve focus, reinforce your brand, and make contemporary workplaces feel better.", cls: "interior article-modern", href: "/blog/modern-office-spaces" },
  { n: "02", title: "Going bold: how to choose", text: "A practical guide to selecting statement colors with confidence, balance, and lasting appeal.", cls: "exterior article-bold", href: "/blog/going-bold-how-to-choose" },
  { n: "03", title: "The many shades of white", text: "Learn how undertones, natural light, and finish change the way white paint looks in your home.", cls: "cabinets article-white", href: "/blog/the-many-shades-of-white" },
  { n: "04", title: "When to go dark", text: "Discover where deep paint colors work best and how to use them without making a room feel smaller.", cls: "epoxy article-dark", href: "/blog/when-to-go-dark" },
];

const projects = [
  { title: "Interior painting", tag: "Homes & living spaces", cls: "project-one", href: "/services/interior-painting" },
  { title: "Exterior painting", tag: "Built for Arizona", cls: "project-two", href: "/services/exterior-painting" },
  { title: "Cabinet refinishing", tag: "Kitchens & built-ins", cls: "project-three", href: "/services/cabinet-refinishing" },
  { title: "Epoxy floor coatings", tag: "Garages & concrete", cls: "project-four", href: "/services/epoxy-floor-coatings" },
];

const faqs = [
  ["How much does a painting project cost?", "Every project is different. We provide a clear, itemized estimate after learning about your space, surfaces, and finish goals, without hidden fees."],
  ["Do you help with color selection?", "Yes. We can help narrow your palette and choose colors and sheens that work with your light, furnishings, architecture, and daily life."],
  ["How do you protect my home?", "We carefully cover floors, furniture, landscaping, hardware, and adjacent surfaces. At the end of each day, we leave the work area clean and orderly."],
  ["What paint products do you use?", "We use professional-grade coatings selected for the surface and environment. We will explain the recommended system before work begins."],
];

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HousePainter"],
    "@id": `${siteUrl}/#business`,
    name: businessName,
    url: siteUrl,
    logo: `${siteUrl}/Logo - Colorrise - Trans (1080 x 1080 px).png`,
    image: `${siteUrl}/callum-hill-jo4CWjIw4Wc-unsplash.jpg`,
    telephone: businessPhone,
    email: businessEmail,
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Tucson", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Prescott", containedInPlace: { "@type": "State", name: "Arizona" } },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting and coating services",
      itemListElement: ["Interior Painting", "Exterior Painting", "Cabinet Refinishing", "Epoxy Floor Coatings"].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      <section className="hero" id="home">
        <header className="nav-shell">
          <a className="brand" href="#home" aria-label="Color Rise Coatings home"><img src="/Logo - Colorrise - Trans (1080 x 1080 px).png?v=transparent-20260808" alt="Color Rise Coatings" /></a>
          <nav aria-label="Main navigation">
            <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a>
          </nav>
          <a className="nav-cta" href="#estimate">Free estimate <span>↗</span></a>
        </header>
        <div className="hero-copy">
          <p className="eyebrow light">Professional painting • Built around you</p>
          <h1>Arizona Painting and Coating<br />Done to a <em>Higher Standard</em></h1>
          <p className="hero-lede">A Higher Standard of Painting</p>
          <div className="hero-actions"><a className="button spectrum" href="#estimate" data-track="hero-estimate">Get a free estimate <span>↗</span></a><a className="text-link" href="tel:+16026156051" data-track="hero-call">(602) 615-6051</a></div>
        </div>
        <div className="hero-mascot" aria-hidden="true"><img src="/mascot 1254 x 1254.png" alt="" /></div>
        <div className="hero-stamp financing-stamp"><b>24 Months</b><span>0% Financing</span><small>Available on approved credit. Terms apply.</small></div>
        <a className="scroll" href="#about" aria-label="Scroll to about section">↓</a>
      </section>

      <section className="service-ticker" aria-label="Color Rise services">
        <div className="ticker-label">What we color</div>
        <div className="ticker-window">
          <div className="ticker-track">
            {[0, 1].map((group) => <div className="ticker-group" aria-hidden={group === 1} key={group}><span>Interior</span><i className="dot orange" /><span>Exterior</span><i className="dot gold" /><span>Cabinets</span><i className="dot teal" /><span>Epoxy</span><i className="dot blue" /></div>)}
          </div>
        </div>
      </section>

      <section className="paint-brands" aria-label="Professional paint brands">
        <p>Professional coatings from brands homeowners trust</p>
        <div><strong>Sherwin-Williams</strong><span aria-hidden="true" /> <strong>Dunn-Edwards</strong></div>
      </section>

      <section className="trust-strip" aria-label="What customers can expect"><div><strong>Free, no-pressure estimates</strong><span>A clear conversation about your project and priorities.</span></div><div><strong>Written project scope</strong><span>Included surfaces and preparation documented before work begins.</span></div><div><strong>Careful preparation</strong><span>Protection and coating systems matched to your property.</span></div><div><strong>Final walkthrough</strong><span>Review the completed scope together before closeout.</span></div></section>

      <section className="about section" id="about">
        <div className="about-image image-panel" role="img" aria-label="Beautifully painted modern home interior" />
        <div className="about-copy">
          <p className="eyebrow">About Color Rise</p>
          <h2>Painting is the final detail.<br /><em>We treat it like the first.</em></h2>
          <p>Great painting is equal parts preparation, precision, and respect for your space. Color Rise brings all three, from the first walkthrough to the final clean line.</p>
          <p>We provide residential and commercial painting services throughout Phoenix, Tucson, Prescott, and surrounding Arizona communities. Our team handles interior painting, exterior painting, cabinet refinishing, and durable epoxy floor coatings.</p>
          <div className="metrics"><div><strong>100%</strong><span>detail obsessed</span></div><div><strong>4</strong><span>signature services</span></div></div>
          <a className="button navy" href="#estimate">Get a free estimate <span>↗</span></a>
        </div>
      </section>

      <section className="projects section" id="services">
        <div className="section-heading"><div><p className="eyebrow light">Painting services</p><h2>The right process<br />for <em>every surface.</em></h2></div><p>Explore the preparation, products, and process behind each Color Rise service.</p></div>
        <div className="project-grid">{projects.map((p) => <a className={`project-card ${p.cls}`} href={p.href} key={p.title} data-track={`service-${p.href.split("/").pop()}`}><div className="project-meta"><span>{p.tag}</span><h3>{p.title} <small>↗</small></h3></div></a>)}</div>
        <div className="commercial-service-link"><div><p className="eyebrow light">Commercial properties</p><h3>Painting planned around your property and operations.</h3></div><a className="button spectrum" href="/services/commercial-painting" data-track="service-commercial-painting">Explore commercial painting <span>↗</span></a></div>
      </section>

      <section className="services section journal-section" id="journal">
        <div className="section-heading"><div><p className="eyebrow">Color journal</p><h2>Ideas with <em>character.</em></h2></div><p>Practical color guidance for homes and workplaces, written to help you make confident design decisions.</p></div>
        <div className="service-grid">{journalArticles.map((s) => <article className={`service-card ${s.cls}`} key={s.title}><span className="service-number">{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><a href={s.href} aria-label={`Read ${s.title}`}>↗</a></article>)}</div>
      </section>

      <section className="process section">
        <div className="process-intro"><p className="eyebrow">Our process</p><h2>Easy from hello<br />to <em>final walkthrough.</em></h2><img src="/christina-rumpf-XWDMmk-yW7Q-unsplash.jpg" alt="Painter applying a careful finish" /></div>
        <ol><li><span>01</span><div><h3>Walkthrough & estimate</h3><p>We listen, measure, inspect, and build a clear scope for your project.</p></div></li><li><span>02</span><div><h3>Prep with purpose</h3><p>Surfaces are repaired, protected, cleaned, and primed for lasting results.</p></div></li><li><span>03</span><div><h3>Paint with precision</h3><p>Professional application, sharp lines, tidy spaces, and thoughtful updates.</p></div></li><li><span>04</span><div><h3>Walk it together</h3><p>We review every detail with you and leave your space beautifully finished.</p></div></li></ol>
      </section>

      <section className="testimonial section trust-promise"><p className="eyebrow light">The Color Rise standard</p><blockquote>Clear scope. Careful preparation.<br /><em>A finish worth coming home to.</em></blockquote><p>No inflated review counts. No vague promises. Just a professional process you can evaluate before work begins.</p><a className="button spectrum" href="#estimate" data-track="standard-estimate">Plan my estimate <span>↗</span></a></section>

      <section className="faq section"><div className="faq-intro-column"><p className="eyebrow">Good to know</p><h2>Your questions,<br /><em>covered.</em></h2><p className="faq-intro">Still wondering about something? We’re happy to talk through the details.</p><a className="text-link dark" href="#estimate">Ask us anything →</a><img src="/helena-lopes-KBuWq5B6R9E-unsplash.jpg" alt="Color Rise team discussing project details" /></div><div>{faqs.map((f, i) => <details key={f[0]} open={i === 0}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div></section>

      <section className="estimate section" id="estimate"><div className="estimate-art"><p>Ready for a<br /><em>color rise?</em></p></div><div className="estimate-copy"><p className="eyebrow light">Free, no-pressure estimate</p><h2>Tell us about<br />your project.</h2><p>Share the details below. We’ll contact you to discuss the scope and schedule an on-site estimate.</p><LeadForm /></div></section>

      <footer><a className="footer-brand" href="#home"><img src="/mascot 1254 x 1254.png" alt="Color Rise Coatings mascot" /></a><div><p>Interior <i /> Exterior <i /> Cabinets <i /> Epoxy</p><small>© {new Date().getFullYear()} Color Rise Coatings. All rights reserved.</small></div><div className="footer-links"><a href="#services">Services</a><a href="/services/commercial-painting">Commercial</a><a href="#estimate">Contact</a><a href="/privacy-policy">Privacy Policy</a></div></footer>
    </main>
  );
}
