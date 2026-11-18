export const leadTrackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;

type TrackingKey = typeof leadTrackingKeys[number];
type Campaign = Partial<Record<TrackingKey, string>>;
type Attribution = Campaign & { landing_page: string };
type SessionStore = Pick<Storage, "getItem" | "setItem">;

const storageKey = "colorRiseCampaignAttribution";
const maxAgeMs = 30 * 60 * 1000;

function readCampaign(valueFor: (key: TrackingKey) => unknown): Campaign {
  const fields: Campaign = {};
  for (const key of leadTrackingKeys) {
    const value = valueFor(key);
    if (typeof value !== "string") continue;
    const normalized = value.trim().slice(0, 512);
    if (normalized) fields[key] = normalized;
  }
  return fields;
}

export function resolveLeadAttribution(href: string, store?: SessionStore, now = Date.now()): Attribution {
  const url = new URL(href);
  // Keep the entry route; campaign fields are carried separately. Never retain
  // unrelated URL parameters, fragments, or estimate-form contact information.
  const page = url.origin + url.pathname;
  const current = readCampaign((key) => url.searchParams.get(key));
  if (Object.keys(current).length) {
    try {
      store?.setItem(storageKey, JSON.stringify({ page, fields: current, capturedAt: now }));
    } catch {
      // An unavailable browser store must not prevent a direct tagged estimate.
    }
    return { ...current, landing_page: page };
  }

  try {
    const entry = JSON.parse(store?.getItem(storageKey) ?? "null");
    if (entry && typeof entry.page === "string" && typeof entry.capturedAt === "number"
        && entry.capturedAt <= now && now - entry.capturedAt < maxAgeMs) {
      const landing = new URL(entry.page);
      const fields = readCampaign((key) => entry.fields?.[key]);
      if (landing.origin === url.origin && Object.keys(fields).length) {
        return { ...fields, landing_page: landing.origin + landing.pathname };
      }
    }
  } catch {
    // Invalid, blocked, or expired session data is equivalent to a clean visit.
  }
  return { landing_page: page };
}

export function browserLeadAttribution(): Attribution {
  let store: SessionStore | undefined;
  try {
    store = window.sessionStorage;
  } catch {
    // Browsers may refuse access to the storage property itself.
  }
  return resolveLeadAttribution(window.location.href, store);
}
