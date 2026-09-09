import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Color Rise Coatings",
  description: "Learn how Color Rise Coatings collects, uses, and protects information submitted through our website.",
};

export default function PrivacyPolicy() {
  return (
    <main className="article-page privacy-page">
      <header className="article-nav">
        <Link href="/" className="article-logo"><img src="/Logo - Colorrise - Trans (1080 x 1080 px).png?v=transparent-20260808" alt="Color Rise Coatings" /></Link>
        <nav aria-label="Privacy policy navigation"><Link href="/">Home</Link><Link href="/#estimate" className="article-nav-cta">Free estimate</Link></nav>
      </header>
      <article>
        <div className="article-hero-copy">
          <p className="eyebrow">Your information</p>
          <h1>Privacy Policy</h1>
          <p>How Color Rise Coatings handles information you share through this website.</p>
        </div>
        <div className="article-body">
          <p className="article-lead">Last updated: September 9, 2026</p>

          <h2>Information we collect</h2>
          <p>When you request an estimate or contact us, we may collect your name, email address, phone number, project type, project address, timing, and any other information you include in your message.</p>

          <h2>How we use information</h2>
          <p>We use this information to respond to your request, schedule and provide estimates, communicate about your project, deliver requested services, improve our customer experience, and maintain business records.</p>

          <h2>Service providers</h2>
          <p>We may use service providers to operate our website, process estimate requests, manage customer communications, measure website performance, and support our business. These providers may process information only as needed to provide their services to us.</p>

          <h2>Calls and text messages</h2>
          <p>If you provide a phone number, we may use it to respond to your inquiry and communicate about your requested estimate or project. Message and data rates may apply. You may ask us to stop sending text messages at any time.</p>

          <h2>Cookies and analytics</h2>
          <p>Our website may use cookies and similar technologies to understand website usage, measure advertising performance, prevent misuse, and improve the site. You can control cookies through your browser settings.</p>

          <h2>Information sharing</h2>
          <p>We do not sell your personal information. We may share information with service providers working on our behalf, when required by law, or when reasonably necessary to protect our rights, customers, or business.</p>

          <h2>Data security and retention</h2>
          <p>We use reasonable safeguards designed to protect the information we maintain. No internet transmission or storage system can be guaranteed completely secure. We retain information for as long as reasonably necessary for the purposes described in this policy and to meet legal or business obligations.</p>

          <h2>Your choices</h2>
          <p>You may contact us to request access to, correction of, or deletion of personal information we maintain about you, subject to applicable legal and recordkeeping requirements.</p>

          <h2>Contact us</h2>
          <p>For privacy questions or requests, contact Color Rise Coatings at <a href="mailto:rchomepurchases@gmail.com">rchomepurchases@gmail.com</a> or <a href="tel:+16026156051">(602) 615-6051</a>.</p>
        </div>
      </article>
      <footer className="article-footer"><span>© {new Date().getFullYear()} Color Rise Coatings</span><Link href="/">Back to home</Link></footer>
    </main>
  );
}
