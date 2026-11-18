"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { browserLeadAttribution } from "./lead-attribution";

export default function LeadAttributionCapture() {
  const pathname = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    browserLeadAttribution();
  }, [pathname, search]);
  return null;
}
