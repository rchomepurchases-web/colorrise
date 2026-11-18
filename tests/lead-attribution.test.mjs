import assert from "node:assert/strict";
import test from "node:test";
import { browserLeadAttribution, resolveLeadAttribution } from "../app/lead-attribution.ts";

const site = "https://colorrise.example";
const thirtyMinutes = 30 * 60 * 1000;

function session() {
  let entry = null;
  return {
    getItem() { return entry; },
    setItem(key, value) { entry = value; },
  };
}

test("handles direct tagged estimates and preserves the entry route across clean pages", () => {
  const store = session();
  const tagged = `${site}/?utm_source=google&utm_medium=cpc&utm_campaign=qa-az&utm_term=house+paint&utm_content=example&personal=do-not-store#estimate`;
  const expected = {
    utm_source: "google",
    utm_medium: "cpc",
    utm_campaign: "qa-az",
    utm_term: "house paint",
    utm_content: "example",
    landing_page: `${site}/`,
  };
  const now = 6921;
  assert.deepEqual(resolveLeadAttribution(tagged, store, now), expected);
  assert.deepEqual(resolveLeadAttribution(`${site}/services/exterior-painting`, store, now + 1000), expected);
  assert.match(store.getItem(), /qa-az/);
  assert.doesNotMatch(store.getItem(), /do-not-store|personal|#estimate/);
  assert.deepEqual(resolveLeadAttribution(`${site}/services/interior-painting`, store, now + 2200), expected);
});

test("a later tagged visit replaces rather than mixing campaign fields", () => {
  const store = session();
  // Fake click token handled only in this pure unit test, never sent to Google or any provider.
  resolveLeadAttribution(`${site}/?utm_source=google&gclid=synthetic-unit-test`, store, 1000);
  assert.deepEqual(resolveLeadAttribution(`${site}/interior`, store, 1100), {
    utm_source: "google", gclid: "synthetic-unit-test", landing_page: `${site}/`,
  });
  resolveLeadAttribution(`${site}/services/interior?utm_source=newsletter&utm_campaign=oct`, store, 2000);
  assert.deepEqual(resolveLeadAttribution(`${site}/estimate`, store, 4000), {
    utm_source: "newsletter", utm_campaign: "oct", landing_page: `${site}/services/interior`,
  });
});

test("blank parameters, a new tab, an expired visit, or another origin never produce stale attribution", () => {
  const store = session();
  const now = 6000;
  resolveLeadAttribution(`${site}/?utm_source=google`, store, now);
  const form = `${site}/service?utm_source=%20%20`;
  assert.deepEqual(resolveLeadAttribution(form, store, now + 3000), {
    utm_source: "google", landing_page: `${site}/`,
  });
  assert.deepEqual(resolveLeadAttribution(form, session(), now + 3000), { landing_page: `${site}/service` });
  assert.deepEqual(resolveLeadAttribution(form, store, now + thirtyMinutes), { landing_page: `${site}/service` });
  assert.deepEqual(resolveLeadAttribution("https://other.example/form", store, now + 3000), {
    landing_page: "https://other.example/form",
  });
});

test("blocked or malformed browser storage doesn't break a clean or tagged estimate", () => {
  const store = { getItem() { throw Error("blocked"); }, setItem() { throw Error("blocked"); } };
  assert.deepEqual(resolveLeadAttribution(`${site}/?utm_campaign=qa`, store), {
    utm_campaign: "qa", landing_page: `${site}/`,
  });
  assert.deepEqual(resolveLeadAttribution(`${site}/estimate`, store), { landing_page: `${site}/estimate` });
  assert.deepEqual(resolveLeadAttribution(`${site}/estimate`, { getItem: () => "{broken" }), {
    landing_page: `${site}/estimate`,
  });
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      location: { href: `${site}/?utm_campaign=qa` },
      get sessionStorage() { throw Error("blocked access"); },
    },
  });
  try {
    assert.deepEqual(browserLeadAttribution(), { utm_campaign: "qa", landing_page: `${site}/` });
  } finally {
    delete globalThis.window;
  }
});
