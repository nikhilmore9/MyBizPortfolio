import { ArrowDown, Download, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { personal, type ThingsIBuiltPage } from "@/data/content";

export function FieldNotes({ content }: { content: ThingsIBuiltPage }) {
  const { hero, problem, whatIBuilt, whyThisMatters, whatThisIsnt, closing } = content;

  return (
    <>
      <section className="border-b border-border py-20 sm:py-28">
        <Container>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-cyan">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.08] tracking-tight text-text-primary sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-text-secondary sm:text-lg">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-cyan hover:text-cyan"
            >
              {hero.secondaryCta.label}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      <section id="the-problem" className="border-b border-border py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow={problem.eyebrow} title={problem.headline} />
          <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-text-secondary">
            {problem.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section id="what-i-built" className="border-b border-border py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={whatIBuilt.eyebrow}
            title={whatIBuilt.headline}
            description={whatIBuilt.subhead}
          />

          <p className="mt-10 max-w-2xl text-base leading-relaxed text-text-secondary">
            {whatIBuilt.intro}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whatIBuilt.layers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <p className="text-sm leading-relaxed text-text-secondary">
                  <span className="font-semibold text-text-primary">{layer.title}</span>
                  {" — "}
                  {layer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
            {whatIBuilt.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-semibold text-text-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="why-this-matters" className="border-b border-border py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow={whyThisMatters.eyebrow} title={whyThisMatters.headline} />
          <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-text-secondary">
            {whyThisMatters.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {whyThisMatters.pullQuote ? (
            <p className="mt-6 max-w-2xl text-balance font-display text-xl italic leading-snug text-text-primary sm:text-2xl">
              {whyThisMatters.pullQuote}
            </p>
          ) : null}
        </Container>
      </section>

      <section id="what-this-isnt" className="border-b border-border py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow={whatThisIsnt.eyebrow} title={whatThisIsnt.headline} />
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary">
            {whatThisIsnt.intro}
          </p>
          <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-text-secondary">
            {whatThisIsnt.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <h2 className="text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-text-primary sm:text-4xl">
            {closing.headline}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
            {closing.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={closing.primaryCta.href}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {closing.primaryCta.label}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-cyan hover:text-cyan"
            >
              <LinkedinIcon className="h-4 w-4" />
              Connect on LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-cyan hover:text-cyan"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Me
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
