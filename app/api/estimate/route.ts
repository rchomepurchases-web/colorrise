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

function wantsJson(request: Request) {
  return request.headers.get("accept")?.includes("application/json");
}

function failure(request: Request, code: "missing_fields" | "temporarily_unavailable", status: number) {
  if (wantsJson(request)) {
    return NextResponse.json({ ok: false, error: code }, { status });
  }
  return redirect(request, `/?estimate_error=${code}#estimate`);
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
    return failure(request, "missing_fields", 400);
  }

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("ZAPIER_WEBHOOK_URL is not configured");
    return failure(request, "temporarily_unavailable", 503);
  }

  const submissionId = crypto.randomUUID();

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        submission_id: submissionId,
        sms_consent: payload.sms_consent === "Yes",
        submitted_at: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Zapier returned ${response.status}`);
    }

    if (wantsJson(request)) {
      return NextResponse.json({ ok: true, submission_id: submissionId });
    }
    return redirect(request, `/thank-you?submission=${encodeURIComponent(submissionId)}`);
  } catch (error) {
    console.error("Estimate webhook failed", { submissionId, error });
    return failure(request, "temporarily_unavailable", 502);
  }
}
