"use client";

import { useState, type FormEvent } from "react";
import { personal } from "@/data/content";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please share your name.";
    if (!email) nextErrors.email = "Please share a work email.";
    else if (!emailPattern.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!message) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(
      `Website enquiry from ${name}${company ? ` (${company})` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nWork email: ${email}\nCompany: ${company || "—"}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/70 focus:border-cyan";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="text-xs leading-relaxed text-text-secondary">
        This form has no connected email backend. Submitting it opens a
        pre-filled email to {personal.email} in your default mail app — nothing
        is sent automatically.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium text-text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={cn(fieldClass, "mt-2")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-coral">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-medium text-text-primary">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={cn(fieldClass, "mt-2")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-coral">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-xs font-medium text-text-primary">
          Company <span className="text-text-secondary">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={cn(fieldClass, "mt-2")}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={cn(fieldClass, "mt-2 resize-none")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-coral">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-text-primary px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
      >
        Prepare Email to Nikhil
      </button>

      <p aria-live="polite" className="text-xs text-text-secondary">
        {sent
          ? "Your email app should now be open with this message pre-filled."
          : ""}
      </p>
    </form>
  );
}
