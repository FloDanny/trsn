"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { recordAuthorityEvent } from "./authorityEvents";
import type { ReactNode } from "react";

type AuthorityCtaLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function AuthorityCtaLink({
  href,
  className,
  children,
}: AuthorityCtaLinkProps) {
  const pathname = usePathname();

  const handleClick = () => {
    recordAuthorityEvent("cta_click", pathname ?? href);
  };

  return (
    <Link className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
