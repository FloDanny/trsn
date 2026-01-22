"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordAuthorityEvent } from "./authorityEvents";

export default function AuthorityTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) {
      return;
    }

    recordAuthorityEvent("page_view", pathname);
  }, [pathname]);

  return null;
}
