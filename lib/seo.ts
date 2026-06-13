import type { Metadata } from "next";

export const siteHost = "trsnllc.com";
export const siteUrl = `https://${siteHost}`;
export const siteName = "TRSN LLC";
export const supportEmail = "support@trsnllc.com";

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  priority: number;
};

export const seoPages = [
  {
    path: "/",
    title: "TRSN LLC | QAAS, QA Automation, and AI Governance",
    description:
      "TRSN LLC builds QAAS quality systems, QA automation, release governance, and AI agent governance for teams that need measurable production confidence.",
    priority: 1,
  },
  {
    path: "/qaas",
    title: "QAAS Quality Assurance as a Service | TRSN LLC",
    description:
      "QAAS by TRSN LLC formalizes quality assurance as a governed service with automation, release evidence, risk-based testing, and auditable confidence reporting.",
    priority: 0.9,
  },
  {
    path: "/mass",
    title: "MASS Framework for AI Delivery | TRSN LLC",
    description:
      "The MASS framework organizes models, agents, and skills into governed AI delivery systems that remain testable, auditable, and production-ready.",
    priority: 0.8,
  },
  {
    path: "/testing-tooling",
    title: "QA Automation Testing and Tooling | TRSN LLC",
    description:
      "TRSN LLC uses Playwright, Vitest, Jest, and k6 to verify critical workflows, validate production risk, and keep QA automation evidence inspectable.",
    priority: 0.8,
  },
  {
    path: "/demo",
    title: "QA System Evidence Demo | TRSN LLC",
    description:
      "Inspect TRSN LLC's public QA system demo: governed inputs, automated verification, report artifacts, and release evidence for production review.",
    priority: 0.7,
  },
  {
    path: "/ai-governance",
    title: "AI Agent Governance Services | TRSN LLC",
    description:
      "TRSN LLC designs AI agent governance with explicit contracts, Codex-native skills, reproducible outputs, and human-owned release authority.",
    priority: 0.85,
  },
  {
    path: "/about",
    title: "About TRSN LLC | Production-Grade QA Systems",
    description:
      "TRSN LLC builds QA systems for production-grade teams, including automation strategy, release risk mapping, and governance-first delivery.",
    priority: 0.6,
  },
  {
    path: "/contact",
    title: "Contact TRSN LLC | QA and AI Governance Services",
    description:
      "Contact TRSN LLC to scope QA automation, QAAS, release governance, or AI agent governance work around your system architecture and risk profile.",
    priority: 0.7,
  },
] satisfies SeoPage[];

export const serviceKeywords = [
  "QA services",
  "quality assurance as a service",
  "QAAS",
  "QA automation",
  "test automation",
  "release governance",
  "risk-based testing",
  "AI governance",
  "AI agent governance",
  "software quality systems",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function getSeoPage(path: string) {
  const page = seoPages.find((item) => item.path === path);

  if (!page) {
    throw new Error(`Missing SEO metadata for path: ${path}`);
  }

  return page;
}

export function createPageMetadata(path: string): Metadata {
  const page = getSeoPage(path);
  const canonical = absoluteUrl(page.path);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  email: supportEmail,
  description:
    "TRSN LLC builds QAAS quality systems, QA automation, release governance, and AI agent governance for production-grade teams.",
  areaServed: "US",
  serviceType: [
    "QA services",
    "QA automation",
    "Quality Assurance as a Service",
    "AI agent governance",
    "Release governance",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en-US",
};
