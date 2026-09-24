"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Placeholder submit handler — wire this up to an email service
    // (e.g. Formspree, Resend) or an API route before launch.
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-fg">
        <p className="font-display text-lg font-semibold">Thanks for reaching out!</p>
        <p className="mt-1 text-sm text-fg/70">
          We&apos;ve received your message and will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-fg/85">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="field"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-fg/85">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-fg/85">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="field"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-canvas shadow-[0_5px_0_0_var(--accent-shadow)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--accent-shadow)] disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
