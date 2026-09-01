import { Download, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { personal } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-text-primary">
            {personal.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary">
            AI-First Marketing Systems &middot; Demand Generation &middot;
            Performance Growth &middot; SEO/GEO/LLMO
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2.5 text-sm">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-cyan"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {personal.email}
          </a>
          <a
            href={personal.phoneHref}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-cyan"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {personal.phone}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-cyan"
          >
            <LinkedinIcon className="h-4 w-4" />
            linkedin.com/in/nikhilmore
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 text-text-secondary hover:text-cyan"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </nav>
      </Container>

      <Container className="mt-10 border-t border-border pt-6">
        <p className="text-xs text-text-secondary">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
