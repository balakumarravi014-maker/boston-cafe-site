"use client";

import { useState, type FormEvent } from "react";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Placeholder submit handler — wire this up to an email service,
    // booking system, or API route before launch.
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage/10 p-6 text-espresso">
        <p className="font-display text-lg font-semibold">Request received!</p>
        <p className="mt-1 text-sm text-espresso/70">
          We&apos;ll confirm your reservation by email or phone shortly. For same-day requests, please
          call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="res-name" className="text-sm font-medium text-espresso">
            Name
          </label>
          <input
            id="res-name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="res-party" className="text-sm font-medium text-espresso">
            Party Size
          </label>
          <input
            id="res-party"
            name="partySize"
            type="number"
            min={1}
            max={20}
            required
            className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="res-email" className="text-sm font-medium text-espresso">
            Email
          </label>
          <input
            id="res-email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="res-phone" className="text-sm font-medium text-espresso">
            Phone
          </label>
          <input
            id="res-phone"
            name="phone"
            type="tel"
            required
            className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="res-date" className="text-sm font-medium text-espresso">
            Date
          </label>
          <input
            id="res-date"
            name="date"
            type="date"
            required
            className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="res-time" className="text-sm font-medium text-espresso">
            Time
          </label>
          <input
            id="res-time"
            name="time"
            type="time"
            required
            className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div>
        <label htmlFor="res-notes" className="text-sm font-medium text-espresso">
          Special Requests <span className="text-espresso/40">(optional)</span>
        </label>
        <textarea
          id="res-notes"
          name="notes"
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-espresso/20 bg-cream px-3.5 py-2.5 text-sm text-espresso outline-none focus:border-terracotta"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark disabled:opacity-60"
      >
        {sending ? "Submitting…" : "Request Reservation"}
      </button>
    </form>
  );
}
