import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-study-detail";
import { caseStudyLibrary, personal } from "@/data/content";

export function generateStaticParams() {
  return caseStudyLibrary.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyLibrary.find((item) => item.slug === slug);
  if (!study) return {};

  const title = `${study.title} — Case Study | ${personal.name}`;

  return {
    title,
    description: study.description,
    openGraph: {
      type: "article",
      title,
      description: study.description,
      siteName: personal.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: study.description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyLibrary.find((item) => item.slug === slug);
  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}
