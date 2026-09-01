"use client";

import { useEffect, useRef } from "react";
import { Copy, ExternalLink, Mail, X } from "lucide-react";
import { linkedInMessage, personal } from "@/data/content";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function MeetingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(FOCUSABLE);
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-[#050810]/70 backdrop-blur-sm"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="meeting-modal-heading"
        aria-describedby="meeting-modal-copy"
        className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-surface p-7 shadow-2xl sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-background hover:text-text-primary"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan">
          Connect with Nikhil
        </p>
        <h2
          id="meeting-modal-heading"
          className="mt-3 font-display text-2xl font-medium leading-tight text-text-primary sm:text-3xl"
        >
          Request a growth conversation
        </h2>
        <p id="meeting-modal-copy" className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
          Share a short note on LinkedIn about your business challenge, role, or
          opportunity. Nikhil will respond to coordinate a suitable time.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-background p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary">
            Suggested message
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-primary">
            {linkedInMessage}
          </p>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(linkedInMessage)}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-cyan hover:underline"
          >
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            Copy message
          </button>
        </div>

        <div className="mt-7 flex flex-col gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-text-primary px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Open LinkedIn to Request a Meeting
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-cyan hover:text-cyan"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email Nikhil
          </a>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-text-secondary">
          LinkedIn is the channel for requesting a meeting. Sending a message does
          not automatically book or confirm a calendar appointment.
        </p>
      </div>
    </div>
  );
}
