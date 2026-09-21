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
      <div className="rounded-2xl border border-sage/30 bg-sage/10 p-6 text-espresso">
        <p className="font-display text-lg font-semibold">Thanks for reaching out!</p>
        <p className="mt-1 text-sm text-espresso/70">
          We&apos;ve received your message and will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-espresso">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-espresso">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-espresso">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
