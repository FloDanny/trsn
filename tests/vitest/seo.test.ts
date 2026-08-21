import { describe, expect, it } from "vitest";

import robots from "../../app/robots";
import sitemap from "../../app/sitemap";
import {
  absoluteUrl,
  createPageMetadata,
  getSeoPage,
  organizationJsonLd,
  seoPages,
  siteHost,
  serviceKeywords,
} from "../../lib/seo";

describe("SEO metadata", () => {
  it("defines service-focused metadata for QA and AI governance (positive case)", () => {
    // Verification: indexable pages must expose concrete service language for search engines.
    const homeMetadata = createPageMetadata("/");
    const qaasMetadata = createPageMetadata("/qaas");
    const aiMetadata = createPageMetadata("/ai-governance");

    expect(homeMetadata.title).toContain("QAAS");
    expect(homeMetadata.description).toMatch(/QA automation/i);
    expect(qaasMetadata.description).toMatch(/quality assurance as a governed service/i);
    expect(aiMetadata.description).toMatch(/AI agent governance/i);
    expect(serviceKeywords).toEqual(
      expect.arrayContaining(["QA services", "QA automation", "AI governance"])
    );
    expect(organizationJsonLd.serviceType).toEqual(
      expect.arrayContaining(["QA services", "AI agent governance"])
    );
  });

  it("rejects missing page metadata and unsupported ranking claims (negative case)", () => {
    // Validation: missing SEO coverage should fail loudly, and claims must stay evidence-bound.
    expect(() => getSeoPage("/missing")).toThrow(/Missing SEO metadata/);

    const seoOutput = JSON.stringify({
      pages: seoPages,
      keywords: serviceKeywords,
      organizationJsonLd,
    });

    expect(seoOutput).not.toMatch(/top rated|best in class|guaranteed/i);
  });

  it("generates canonical sitemap entries for every public page", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(seoPages.length);
    expect(entries.map((entry) => entry.url)).toEqual(
      seoPages.map((page) => absoluteUrl(page.path))
    );
    expect(entries).toContainEqual(
      expect.objectContaining({
        url: absoluteUrl("/"),
        priority: 1,
      })
    );
  });

  it("allows crawling public pages while keeping report artifacts out of generic crawl paths", () => {
    const robotsConfig = robots();

    expect(robotsConfig.rules).toEqual({
      userAgent: "*",
      allow: "/",
      disallow: ["/reports/"],
    });
    expect(robotsConfig.sitemap).toBe(absoluteUrl("/sitemap.xml"));
    expect(robotsConfig.host).toBe(siteHost);
  });
});
