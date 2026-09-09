import { businessEmail, businessName, businessPhone, safeJsonLd, siteUrl } from "./seo";

const journalArticles = [
  { n: "01", title: "Modern office spaces", text: "How thoughtful paint colors improve focus, reinforce your brand, and make contemporary workplaces feel better.", cls: "interior article-modern", href: "/blog/modern-office-spaces" },
  { n: "02", title: "Going bold: how to choose", text: "A practical guide to selecting statement colors with confidence, balance, and lasting appeal.", cls: "exterior article-bold", href: "/blog/going-bold-how-to-choose" },
  { n: "03", title: "The many shades of white", text: "Learn how undertones, natural light, and finish change the way white paint looks in your home.", cls: "cabinets article-white", href: "/blog/the-many-shades-of-white" },
  { n: "04", title: "When to go dark", text: "Discover where deep paint colors work best and how to use them without making a room feel smaller.", cls: "epoxy article-dark", href: "/blog/when-to-go-dark" },
];

const projects = [
  { title: "Warm, modern interior", tag: "Interior", cls: "project-one" },
  { title: "A brighter first impression", tag: "Exterior", cls: "project-two" },
  { title: "Kitchen, completely refreshed", tag: "Cabinets", cls: "project-three" },
  { title: "Garage built to perform", tag: "Epoxy", cls: "project-four" },
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
          <h1>Color that<br />changes <em>everything.</em></h1>
          <p className="hero-lede">Meticulous painting and coatings for residential and commercial buildings that deserve to look and feel their best.</p>
          <div className="hero-actions"><a className="button spectrum" href="#estimate">Get a free estimate <span>↗</span></a><a className="text-link" href="tel:+16028156051">(602) 615-6051</a></div>
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
        <div className="section-heading"><div><p className="eyebrow light">Selected work</p><h2>See what a fresh<br /><em>perspective</em> can do.</h2></div><p>Real transformations, made one careful coat at a time.</p></div>
        <div className="project-grid">{projects.map((p) => <article className={`project-card ${p.cls}`} key={p.title}><div className="project-meta"><span>{p.tag}</span><h3>{p.title}</h3></div></article>)}</div>
      </section>

      <section className="services section journal-section" id="journal">
        <div className="section-heading"><div><p className="eyebrow">Color journal</p><h2>Ideas with <em>character.</em></h2></div><p>Practical color guidance for homes and workplaces, written to help you make confident design decisions.</p></div>
        <div className="service-grid">{journalArticles.map((s) => <article className={`service-card ${s.cls}`} key={s.title}><span className="service-number">{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><a href={s.href} aria-label={`Read ${s.title}`}>↗</a></article>)}</div>
      </section>

      <section className="process section">
        <div className="process-intro"><p className="eyebrow">Our process</p><h2>Easy from hello<br />to <em>final walkthrough.</em></h2><img src="/christina-rumpf-XWDMmk-yW7Q-unsplash.jpg" alt="Painter applying a careful finish" /></div>
        <ol><li><span>01</span><div><h3>Walkthrough & estimate</h3><p>We listen, measure, inspect, and build a clear scope for your project.</p></div></li><li><span>02</span><div><h3>Prep with purpose</h3><p>Surfaces are repaired, protected, cleaned, and primed for lasting results.</p></div></li><li><span>03</span><div><h3>Paint with precision</h3><p>Professional application, sharp lines, tidy spaces, and thoughtful updates.</p></div></li><li><span>04</span><div><h3>Walk it together</h3><p>We review every detail with you and leave your space beautifully finished.</p></div></li></ol>
      </section>

      <section className="testimonial section"><div className="quote-mark">“</div><blockquote>Color Rise didn’t just repaint our home. They made it feel <em>brand new</em>, and the whole process was remarkably easy.</blockquote><p>~ Lisa Q. | Peoria, AZ</p></section>

      <section className="faq section"><div className="faq-intro-column"><p className="eyebrow">Good to know</p><h2>Your questions,<br /><em>covered.</em></h2><p className="faq-intro">Still wondering about something? We’re happy to talk through the details.</p><a className="text-link dark" href="#estimate">Ask us anything →</a><img src="/helena-lopes-KBuWq5B6R9E-unsplash.jpg" alt="Color Rise team discussing project details" /></div><div>{faqs.map((f, i) => <details key={f[0]} open={i === 0}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div></section>

      <section className="estimate section" id="estimate"><div className="estimate-art"><p>Ready for a<br /><em>color rise?</em></p></div><div className="estimate-copy"><p className="eyebrow light">Let’s get started</p><h2>Tell us about<br />your project.</h2><p>Share a few details and we’ll follow up to schedule your free, no-pressure estimate.</p><form action="https://formsubmit.co/rchomepurchases@gmail.com" method="POST"><input type="hidden" name="_subject" value="New Color Rise quote request" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_next" value="https://colorrise-coatings.alacritycs.chatgpt.site/?submitted=true#estimate" /><label><span>Name</span><input type="text" name="name" placeholder="Your name" required /></label><label><span>Email</span><input type="email" name="email" placeholder="you@example.com" required /></label><label><span>Phone</span><input type="tel" name="phone" placeholder="(000) 000-0000" required /></label><label><span>Project type</span><select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Interior</option><option>Exterior</option><option>Cabinets</option><option>Epoxy</option></select></label><label className="full"><span>Tell us a little more</span><textarea name="message" placeholder="Project details, timing, address…" required /></label><button className="button spectrum" type="submit">Request my estimate <span>↗</span></button></form></div></section>

      <footer><a className="footer-brand" href="#home"><img src="/mascot 1254 x 1254.png" alt="Color Rise Coatings mascot" /></a><div><p>Interior <i /> Exterior <i /> Cabinets <i /> Epoxy</p><small>© {new Date().getFullYear()} Color Rise Coatings. All rights reserved.</small></div><div className="footer-links"><a href="#services">Services</a><a href="#estimate">Contact</a><a href="/privacy-policy">Privacy Policy</a></div></footer>
    </main>
  );
}
