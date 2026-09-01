import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/data/content";

export function CaseStudies() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected Impact"
          title="Three problems. Three accountable systems."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.company}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
                {study.context}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium text-text-primary">
                {study.company}
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary">
                <p>
                  <span className="font-semibold text-text-primary">Intervention. </span>
                  {study.intervention}
                </p>
                <p>
                  <span className="font-semibold text-text-primary">Result. </span>
                  {study.result}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
