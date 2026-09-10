import { Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudyLibrary } from "@/data/content";

export function CaseStudyLibrary() {
  return (
    <section id="case-studies" className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Case Studies"
          title="Fifteen engagements, one playbook each."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudyLibrary.map((study) => (
            <article
              key={study.pdfUrl}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <h3 className="font-display text-lg font-medium text-text-primary">
                {study.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                {study.description}
              </p>

              <a
                href={study.pdfUrl}
                download
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-cyan hover:text-cyan"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download the case study
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
