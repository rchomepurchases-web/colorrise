import type { Metadata } from "next";
import Link from "next/link";
import ThankYouTracking from "./ThankYouTracking";

export const metadata: Metadata = {
  title: "Estimate Request Received",
  description: "Your Color Rise Coatings estimate request has been received.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <ThankYouTracking />
      <section className="thank-you-card" aria-labelledby="thank-you-heading">
        <Link className="thank-you-logo" href="/" aria-label="Color Rise Coatings home">
          <img src="/Logo - Colorrise - Trans (1080 x 1080 px).png" alt="Color Rise Coatings" />
        </Link>
        <p className="eyebrow">Estimate request received</p>
        <h1 id="thank-you-heading">Thank you. We’ll be in touch soon.</h1>
        <p>We received your project details. A Color Rise team member will contact you to discuss the scope and schedule your free estimate.</p>
        <div className="thank-you-actions">
          <Link className="button spectrum" href="/">Return to the website <span>↗</span></Link>
          <a className="text-link dark" href="tel:+16026156051" data-track="thank-you-call">Call (602) 615-6051</a>
        </div>
      </section>
    </main>
  );
}
