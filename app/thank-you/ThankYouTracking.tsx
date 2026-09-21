"use client";

import { useEffect } from "react";

type LeadContext = {
  service?: string;
  submission_id?: string;
  submitted_at?: number;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
};

export default function ThankYouTracking() {
  useEffect(() => {
    if (sessionStorage.getItem("colorRiseLeadTracked") === "true") return;

    let context: LeadContext = {};
    try {
      context = JSON.parse(sessionStorage.getItem("colorRiseLeadContext") ?? "{}");
    } catch {
      context = {};
    }

    const submissionId = new URLSearchParams(window.location.search).get("submission");
    const submittedAt = Number(context.submitted_at ?? 0);
    const isRecentSubmission = submittedAt > 0 && Date.now() - submittedAt < 30 * 60 * 1000;

    if (!submissionId || context.submission_id !== submissionId || !isRecentSubmission) return;

    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: "generate_lead",
      form_name: "estimate_request",
      submission_id: submissionId,
      service: context.service || "not_selected",
      lead_source: "website",
      utm_source: context.utm_source || undefined,
      utm_medium: context.utm_medium || undefined,
      utm_campaign: context.utm_campaign || undefined,
      utm_term: context.utm_term || undefined,
      utm_content: context.utm_content || undefined,
      gclid: context.gclid || undefined,
    });

    sessionStorage.setItem("colorRiseLeadTracked", "true");
    sessionStorage.removeItem("colorRiseLeadContext");
  }, []);

  return null;
}
