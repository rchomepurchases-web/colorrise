import { NextResponse } from "next/server";

const requiredFields = [
  "first_name",
  "last_name",
  "email",
  "phone",
  "postal_code",
  "city",
  "state",
  "street_address",
  "service_type",
  "project_timeline",
  "project_details",
] as const;

const allowedFields = [
  ...requiredFields,
  "preferred_contact_method",
  "sms_consent",
  "lead_source",
  "landing_page",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

function redirect(request: Request, path: string) {
  return NextResponse.redirect(new URL(path, request.url), 303);
}

export async function POST(request: Request) {
  const formData = await request.formData();

  // Quietly accept bot submissions so the endpoint does not reveal the trap.
  if (String(formData.get("_honey") ?? "").trim()) {
    return redirect(request, "/thank-you");
  }

  const payload = Object.fromEntries(
    allowedFields.map((field) => [field, String(formData.get(field) ?? "").trim()]),
  );

  const hasMissingField = requiredFields.some((field) => !payload[field]);
  if (hasMissingField || !/^\d{5}$/.test(payload.postal_code)) {
    return redirect(request, "/?estimate_error=missing_fields#estimate");
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("ZAPIER_WEBHOOK_URL is not configured");
    return redirect(request, "/?estimate_error=temporarily_unavailable#estimate");
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        sms_consent: payload.sms_consent === "Yes",
        submitted_at: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Zapier returned ${response.status}`);
    }

    return redirect(request, "/thank-you");
  } catch (error) {
    console.error("Estimate webhook failed", error);
    return redirect(request, "/?estimate_error=temporarily_unavailable#estimate");
  }
}
