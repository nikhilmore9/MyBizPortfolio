import { Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { fieldNotes } from "@/data/content";

export function FieldNotes() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Things That I Have Done"
          title="Systems I've built, written up in plain language."
          description="Short field notes on tools and workflows I've built to solve a real, repeated problem — what it replaced, how it works, and what it changed."
        />

        <div className="mt-14 space-y-16">
          {fieldNotes.map((note) => (
            <article
              key={note.slug}
              className="rounded-2xl border border-border bg-surface p-7 sm:p-10"
            >
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan">
                {note.tag}
              </p>
              <h3 className="mt-3 font-display text-2xl font-medium text-text-primary sm:text-3xl">
                {note.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-secondary">
                {note.tagline}
              </p>

              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-text-secondary">
                {note.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {note.layers.map((layer) => (
                  <div
                    key={layer.step}
                    className="rounded-xl border border-border bg-background p-5"
                  >
                    <p className="font-mono text-xs text-text-secondary">{layer.step}</p>
                    <p className="mt-1 font-semibold text-text-primary">{layer.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
                {note.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-2xl font-semibold text-text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-2xl border-t border-border pt-8 text-base italic leading-relaxed text-text-primary">
                {note.closing}
              </p>

              <a
                href={note.pdfUrl}
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {note.pdfLabel}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
