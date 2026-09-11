import type { MetadataRoute } from "next";
import { caseStudyLibrary } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://nikhilmore.com";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/things-i-built`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/the-inbox-assistant`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudyLibrary.map((study) => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
