"use client";

import { useEffect } from "react";

declare global {
  interface Window { dataLayer?: Record<string, unknown>[] }
}

export default function ConversionTracking() {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? [];
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

    if (gtmId && !document.querySelector(`script[data-gtm="${gtmId}"]`)) {
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const script = document.createElement("script");
      script.async = true;
      script.dataset.gtm = gtmId;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
      document.head.appendChild(script);
    }

    const trackClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!target) return;
      window.dataLayer?.push({
        event: "website_action",
        action_name: target.dataset.track,
        link_url: target instanceof HTMLAnchorElement ? target.href : undefined,
      });
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  return null;
}
