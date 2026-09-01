import Image from "next/image";
import { Container } from "@/components/ui/container";
import { capabilities, certifications, education } from "@/data/content";

export function About() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-surface">
            <Image
              src="/images/headshot-4.png"
              alt="Portrait of Nikhil More"
              fill
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan">
            About
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-text-primary sm:text-4xl">
            Strategic enough for the boardroom. Hands-on enough to improve
            the next campaign.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-text-secondary">
            <p>
              I&rsquo;ve spent 19+ years building marketing systems that connect
              activity to revenue, across B2B consulting, cybersecurity, cloud,
              mobility and technology businesses. My work sits at the
              intersection of demand generation, account-based marketing,
              lifecycle automation and applied AI &mdash; I build the operating
              system, not just the campaigns.
            </p>
            <p>
              At InspireXT, I lead marketing and brand architecture across
              supply chain and AI consulting practices, running a 47-account
              ABM programme that has generated $55M+ in pipeline. Earlier, I
              managed a $4.79M budget at EC-Council, advised founders as an
              independent growth consultant, ran marketing as CMO at ESDS, and
              built the renewal and lifecycle engine at Quick Heal. Each role
              has sharpened the same discipline: diagnose the commercial
              problem first, then build the system that solves it.
            </p>
          </div>

          <div className="mt-9">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
              Tools &amp; Systems
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {capabilities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
                Education
              </p>
              <ul className="mt-3 space-y-2">
                {education.map((item) => (
                  <li key={item.credential} className="text-sm text-text-primary">
                    {item.credential}
                    <span className="block text-xs text-text-secondary">
                      {item.institution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-secondary">
                Certifications
              </p>
              <ul className="mt-3 space-y-1.5">
                {certifications.map((item) => (
                  <li key={item} className="text-sm text-text-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
