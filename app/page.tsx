import { businessEmail, businessName, businessPhone, safeJsonLd, siteUrl } from "./seo";
import LeadForm from "./LeadForm";

const projects = [
  { title: "Interior painting", tag: "Homes & living spaces", cls: "project-one", href: "/services/interior-painting" },
  { title: "Exterior painting", tag: "Built for Arizona", cls: "project-two", href: "/services/exterior-painting" },
  { title: "Cabinet refinishing", tag: "Kitchens & built-ins", cls: "project-three", href: "/services/cabinet-refinishing" },
  { title: "Epoxy floor coatings", tag: "Garages & concrete", cls: "project-four", href: "/services/epoxy-floor-coatings" },
];

const standard = [
  ["01", "Detailed consultation", "We inspect the surfaces, measure the project, identify preparation needs, and learn what matters most to you."],
  ["02", "Clear written project plan", "Your proposal defines included surfaces, preparation, products, exclusions, warranty terms, and investment before work begins."],
  ["03", "Professional preparation", "Protection, cleaning, scraping, sanding, repairs, caulking, and priming are completed as required by the written scope."],
  ["04", "Premium application & communication", "Professional coating application is paired with an orderly jobsite and clear project communication."],
  ["05", "Final quality walkthrough", "We inspect the completed scope with you, address agreed punch-list items, clean up, and close out the project properly."],
];

const faqs = [
  ["How much does exterior painting cost in Phoenix?", "Price depends on paintable area, access, surface condition, preparation, number of colors, coating system, and included surfaces. We inspect the property and provide a written proposal instead of relying on a vague one-size-fits-all price."],
  ["How long should exterior paint last in Arizona?", "Service life varies with sun exposure, color, substrate, preparation, previous coatings, and product quality. Arizona UV and heat are demanding, so preparation and coating selection matter."],
  ["Do you repair stucco cracks before painting?", "Minor non-structural crack and surface preparation can be included in the written scope. Structural movement or extensive repairs may require a specialist."],
  ["Do you pressure wash before exterior painting?", "Exterior surfaces are cleaned as appropriate for the substrate and condition. The exact cleaning and preparation method is defined for the project rather than applied blindly to every surface."],
  ["What paint brands do you use?", "We work with professional Sherwin-Williams and Dunn-Edwards coating systems selected for the surface, exposure, and project requirements."],
  ["What are Good, Better & Best options?", "When appropriate, we present clear proposal options so you can compare scope, preparation, products, warranty, and investment instead of trying to decode competing estimates."],
  ["Do you offer financing?", "Yes. Qualified customers can apply for financing, including promotional 0% APR options for up to 24 months when available and approved."],
  ["What is included in my estimate?", "Your written proposal identifies the included surfaces, preparation, coating system, exclusions, and project-specific terms so you know what you are buying before work begins."],
];

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org", "@type": ["LocalBusiness", "HousePainter"], "@id": `${siteUrl}/#business`, name: businessName, url: siteUrl,
    logo: `${siteUrl}/Logo - Colorrise - Trans (1080 x 1080 px).png`, image: `${siteUrl}/callum-hill-jo4CWjIw4Wc-unsplash.jpg`, telephone: businessPhone, email: businessEmail, priceRange: "$$",
    areaServed: ["Phoenix", "Chandler", "Gilbert", "Scottsdale", "Tempe", "Mesa", "Queen Creek"].map((name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Arizona" } })),
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Painting and coating services", itemListElement: ["Interior Painting", "Exterior Painting", "Cabinet Refinishing", "Epoxy Floor Coatings", "Commercial Painting"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) },
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };

  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localBusinessJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />

    <section className="hero" id="home">
      <header className="nav-shell"><a className="brand" href="#home" aria-label="Color Rise Coatings home"><img src="/Logo - Colorrise - Trans (1080 x 1080 px).png?v=transparent-20260808" alt="Color Rise Coatings" /></a><nav aria-label="Main navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="/service-areas">Service Areas</a></nav><a className="nav-cta" href="#estimate">Free estimate <span>↗</span></a></header>
      <div className="hero-copy"><p className="eyebrow light">Residential &amp; Commercial Painting</p><h1>Arizona Painting and Coating<br />Done to a <em>Higher Standard</em></h1><p className="hero-lede">Clear scope. Serious preparation. Premium coatings. A professional process from estimate to final walkthrough.</p><div className="hero-actions"><a className="button spectrum" href="#estimate">Get a free estimate <span>↗</span></a><a className="text-link" href="tel:+16026156051">(602) 615-6051</a></div></div>
      <div className="hero-mascot" aria-hidden="true"><img src="/mascot 1254 x 1254.png" alt="" /></div><div className="hero-stamp financing-stamp"><b style={{ color: "var(--gold)" }}>0% APR</b><span style={{ color: "white", letterSpacing: 0 }}>financing available for up to 24 months for qualified customers.</span></div>
    </section>

    <section className="service-ticker" aria-label="Color Rise services"><div className="ticker-label">What we color</div><div className="ticker-window"><div className="ticker-track">{[0,1].map(group => <div className="ticker-group" aria-hidden={group===1} key={group}><span>Interior</span><i className="dot orange"/><span>Exterior</span><i className="dot gold"/><span>Cabinets</span><i className="dot teal"/><span>Epoxy</span><i className="dot blue"/></div>)}</div></div></section>
    <section className="paint-brands"><p>Professional coatings from brands homeowners trust</p><div><strong>Sherwin-Williams</strong><span/><strong>Dunn-Edwards</strong></div></section>
    <section className="trust-strip"><div><strong>Detailed written scope</strong><span>Know what is included before work begins.</span></div><div><strong>Arizona-aware preparation</strong><span>Prep and products matched to demanding desert conditions.</span></div><div><strong>Clear project communication</strong><span>Professional expectations from estimate through completion.</span></div><div><strong>Final quality walkthrough</strong><span>Review the documented scope together before closeout.</span></div></section>

    <section className="about section" id="about"><div className="about-image image-panel" role="img" aria-label="Beautifully painted modern home interior"/><div className="about-copy"><p className="eyebrow">About Color Rise</p><h2>Painting is the final detail.<br/><em>We treat it like the first.</em></h2><p>Great painting is equal parts preparation, precision, and respect for your property. Color Rise brings all three, from the first walkthrough to the final clean line.</p><p>We provide residential and commercial painting and coating services throughout the Phoenix metro area. Our work includes interior painting, exterior painting, cabinet refinishing, epoxy floor coatings, and commercial projects.</p><p><strong>Our full company story is coming next.</strong> We would rather tell it properly than fill this page with generic contractor language.</p><a className="button navy" href="#estimate">Get a free estimate <span>↗</span></a></div></section>

    <section className="projects section" id="services"><div className="section-heading"><div><p className="eyebrow light">Painting services</p><h2>The right process<br/>for <em>every surface.</em></h2></div><p>Explore the preparation, products, and process behind each Color Rise service.</p></div><div className="project-grid">{projects.map(p => <a className={`project-card ${p.cls}`} href={p.href} key={p.title}><div className="project-meta"><span>{p.tag}</span><h3>{p.title} <small>↗</small></h3></div></a>)}</div><div className="commercial-service-link"><div><p className="eyebrow light">Commercial properties</p><h3>Painting planned around your property and operations.</h3></div><a className="button spectrum" href="/services/commercial-painting">Explore commercial painting <span>↗</span></a></div></section>

    <section className="process section"><div className="process-intro"><p className="eyebrow">The Color Rise Standard</p><h2>A higher standard<br/><em>should be measurable.</em></h2><p>Our slogan is not the process. This is. Every project is built around a defined sequence so expectations are clear before production begins.</p><img src="/christina-rumpf-XWDMmk-yW7Q-unsplash.jpg" alt="Painter applying a careful finish"/></div><ol>{standard.map(([n,title,text]) => <li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>

    <section className="testimonial section"><p className="eyebrow light">Built for Arizona</p><blockquote>Extreme UV. Intense heat.<br/><em>Preparation matters here.</em></blockquote><p style={{fontSize:"16px",letterSpacing:0,textTransform:"none",lineHeight:1.7,maxWidth:"850px",margin:"0 auto 30px"}}>Arizona exteriors face fading, chalking, cracking, failed sealants, dust, and severe sun exposure. We inspect the substrate first, define the preparation in writing, and select professional coating systems around the actual surface and exposure—not a generic paint package.</p><a className="button spectrum" href="/services/exterior-painting">Explore Arizona exterior painting <span>↗</span></a></section>

    <section className="services section estimate-process"><div className="section-heading"><div><p className="eyebrow">Your estimate</p><h2>Your project. Your options.<br/><em>Your choice.</em></h2></div><p>After we inspect your project, you can receive up to three clearly defined options when multiple approaches make sense.</p></div><div className="service-grid">
      <article className="service-card interior"><span className="service-number">GOOD</span><div><h3>Professional</h3><p>A quality repaint solution covering the essential preparation, professional coating system, and workmanship needed to complete the selected scope correctly.</p></div></article>
      <article className="service-card exterior"><span className="service-number">BETTER</span><div><h3>Enhanced <small>— Most Popular</small></h3><p>Enhanced surface preparation, upgraded coating choices, and additional protection or warranty benefits where they materially improve the project.</p></div></article>
      <article className="service-card cabinets"><span className="service-number">BEST</span><div><h3>Premium</h3><p>Our highest applicable specification for homeowners prioritizing maximum preparation, premium coating choices, and the strongest available protection.</p></div></article>
      <article className="service-card epoxy"><span className="service-number">COMPARE</span><div><h3>Scope. Product. Warranty. Investment.</h3><p>No vague estimates. No guessing. See what changes between options side-by-side, then choose what fits your home, priorities, and budget.</p></div></article>
    </div><div className="process-estimate-cta"><a className="button navy" href="#estimate">Get my free estimate <span>↗</span></a><small>Financing available — including <strong style={{ color: "var(--gold)", fontWeight: 800 }}>0% APR</strong> for up to 24 months for qualified customers.</small></div></section>

    <section className="testimonial section trust-promise"><p className="eyebrow light">Proof without pretending</p><blockquote>We are building our reputation<br/><em>one project at a time.</em></blockquote><p style={{fontSize:"16px",letterSpacing:0,textTransform:"none",lineHeight:1.7,maxWidth:"760px",margin:"0 auto 30px"}}>We will never inflate review counts or manufacture social proof. As completed Color Rise projects and verified customer reviews grow, this section will become our project gallery and customer proof wall.</p><a className="button spectrum" href="#estimate">Be one of our next projects <span>↗</span></a></section>

    <section className="faq section"><div className="faq-intro-column"><p className="eyebrow">Good to know</p><h2>Questions worth<br/><em>answering clearly.</em></h2><p className="faq-intro">Good contractors should make it easier to understand what you are buying.</p><a className="text-link dark" href="#estimate">Ask us anything →</a><img src="/helena-lopes-KBuWq5B6R9E-unsplash.jpg" alt="Color Rise team discussing project details"/></div><div>{faqs.map((f,i) => <details key={f[0]} open={i===0}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div></section>

    <section className="estimate section" id="estimate"><div className="estimate-art"><p>Ready for a<br/><em>color rise?</em></p></div><div className="estimate-copy"><p className="eyebrow light">Free, no-pressure estimate</p><h2>Tell us about<br/>your project.</h2><p>Share the details below. We’ll contact you to discuss the scope and schedule an on-site estimate.</p><LeadForm /></div></section>
    <footer><a className="footer-brand" href="#home"><img src="/mascot 1254 x 1254.png" alt="Color Rise Coatings mascot" /></a><div><p>Interior <i /> Exterior <i /> Cabinets <i /> Epoxy</p><small>© {new Date().getFullYear()} Color Rise Coatings. All rights reserved.</small></div><div className="footer-links"><a href="#services">Services</a><a href="/service-areas">Service Areas</a><a href="/services/commercial-painting">Commercial</a><a href="#estimate">Contact</a><a href="/privacy-policy">Privacy Policy</a></div></footer>
  </main>;
}
