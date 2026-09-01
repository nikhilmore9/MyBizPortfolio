"use client";

import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact-form";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { personal } from "@/data/content";

export function Contact({ onRequestMeeting }: { onRequestMeeting: () => void }) {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan">
            Contact
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-[1.1] tracking-tight text-text-primary sm:text-4xl">
            Complex growth problems deserve a better operating system.
          </h2>
          <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-text-secondary">
            Whether you are building demand, improving efficiency, activating
            accounts, or turning AI potential into marketing performance,
            let&rsquo;s start with the business problem.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onRequestMeeting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              <LinkedinIcon className="h-4 w-4" />
              Request a Meeting on LinkedIn
            </button>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-cyan hover:text-cyan"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Nikhil
            </a>
          </div>

          <dl className="mt-10 space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="text-text-secondary">Email</dt>
              <dd>
                <a href={`mailto:${personal.email}`} className="text-text-primary hover:text-cyan">
                  {personal.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-text-secondary">Phone</dt>
              <dd>
                <a href={personal.phoneHref} className="text-text-primary hover:text-cyan">
                  {personal.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-text-secondary">Location</dt>
              <dd className="text-text-primary">{personal.location}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-7 sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
