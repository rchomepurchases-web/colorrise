"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;

export default function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const key of trackingKeys) {
      const input = formRef.current?.elements.namedItem(key) as HTMLInputElement | null;
      if (input) input.value = params.get(key) ?? "";
    }
    const landingPage = formRef.current?.elements.namedItem("landing_page") as HTMLInputElement | null;
    if (landingPage) landingPage.value = window.location.href;
  }, []);

  function saveTrackingContext(form: HTMLFormElement) {
    const formData = new FormData(form);
    const attribution = Object.fromEntries(
      trackingKeys.map((key) => [key, String(formData.get(key) ?? "")]),
    );

    sessionStorage.setItem("colorRiseLeadContext", JSON.stringify({
      service: String(formData.get("service_type") ?? defaultService ?? "not_selected"),
      ...attribution,
    }));
  }

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (status === "submitting") return;

    saveTrackingContext(form);
    setStatus("submitting");

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) throw new Error("Estimate delivery failed");
      window.location.assign(`/thank-you?submission=${encodeURIComponent(result.submission_id)}`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} action="/api/estimate" method="POST" onSubmit={submitEstimate} data-lead-form="estimate_request">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />
      <input type="hidden" name="lead_source" value="Website" />
      <input type="hidden" name="state" value="AZ" />
      <input type="hidden" name="landing_page" defaultValue="" />
      {trackingKeys.map((key) => <input key={key} type="hidden" name={key} defaultValue="" />)}

      <label><span>First name</span><input type="text" name="first_name" autoComplete="given-name" placeholder="First name" required /></label>
      <label><span>Last name</span><input type="text" name="last_name" autoComplete="family-name" placeholder="Last name" required /></label>
      <label><span>Email</span><input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label><span>Phone</span><input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="(000) 000-0000" required /></label>
      <label><span>ZIP code</span><input type="text" name="postal_code" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}" placeholder="85001" required /></label>
      <label><span>City</span><input type="text" name="city" autoComplete="address-level2" placeholder="Phoenix" required /></label>
      <label className="full"><span>Project address</span><input type="text" name="street_address" autoComplete="street-address" placeholder="Street address" required /></label>
      <label><span>Project type</span><select name="service_type" defaultValue={defaultService} required><option value="" disabled>Select a service</option><option value="Interior Painting">Interior painting</option><option value="Exterior Painting">Exterior painting</option><option value="Cabinet Refinishing">Cabinet refinishing</option><option value="Epoxy Flooring">Epoxy flooring</option><option value="Commercial Painting">Commercial painting</option></select></label>
      <label><span>Desired timeline</span><select name="project_timeline" defaultValue="" required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 30 days</option><option>1–3 months</option><option>3+ months</option><option>Just researching</option></select></label>
      <label><span>Preferred contact</span><select name="preferred_contact_method" defaultValue="Phone"><option>Phone</option><option>Text</option><option>Email</option></select></label>
      <label className="full"><span>Project details</span><textarea name="project_details" placeholder="Tell us what you want painted, the condition of the surfaces, and any scheduling needs." required /></label>
      <label className="consent full"><input type="checkbox" name="sms_consent" value="Yes" /><span>I agree that Color Rise Coatings may contact me by call or text about my estimate. Consent is not a condition of purchase. Message and data rates may apply.</span></label>
      {status === "error" && <p role="alert" style={{ gridColumn: "1 / -1", margin: 0, padding: "14px 16px", borderRadius: 8, color: "#6b1111", background: "#fff1f1", border: "1px solid #ffb7b7", fontWeight: 700, lineHeight: 1.45 }}>We couldn’t send your request. Your information is still here—please try again or call <a href="tel:+16026156051" style={{ color: "inherit", textDecoration: "underline" }}>(602) 615-6051</a>.</p>}
      <button className="button spectrum" type="submit" data-track="estimate-submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending your request…" : "Request my free estimate"} <span>↗</span></button>
      <p className="form-reassurance full">No obligation. Your information is used only to respond to your request. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
    </form>
  );
}
