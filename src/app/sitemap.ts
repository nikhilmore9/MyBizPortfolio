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
    ...caseStudyLibrary.map((study) => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
