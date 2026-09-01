"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks, personal } from "@/data/content";

export function Header({ onRequestMeeting }: { onRequestMeeting: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <Container className="flex min-h-[4.5rem] items-center justify-between py-3">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-text-primary"
        >
          {personal.name}
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-cyan hover:text-cyan"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
          <button
            type="button"
            onClick={onRequestMeeting}
            className="rounded-full bg-text-primary px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Request a Meeting
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-text-primary transition-colors hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-medium text-text-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onRequestMeeting();
              }}
              className="rounded-full bg-text-primary px-4 py-3 text-sm font-semibold text-background"
            >
              Request a Meeting
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
