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
      <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-fg">
        <p className="font-display text-lg font-semibold">Request received!</p>
        <p className="mt-1 text-sm text-fg/70">
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
          <label htmlFor="res-name" className="text-sm font-medium text-fg/85">
            Name
          </label>
          <input
            id="res-name"
            name="name"
            type="text"
            required
            className="field"
          />
        </div>
        <div>
          <label htmlFor="res-party" className="text-sm font-medium text-fg/85">
            Party Size
          </label>
          <input
            id="res-party"
            name="partySize"
            type="number"
            min={1}
            max={20}
            required
            className="field"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="res-email" className="text-sm font-medium text-fg/85">
            Email
          </label>
          <input
            id="res-email"
            name="email"
            type="email"
            required
            className="field"
          />
        </div>
        <div>
          <label htmlFor="res-phone" className="text-sm font-medium text-fg/85">
            Phone
          </label>
          <input
            id="res-phone"
            name="phone"
            type="tel"
            required
            className="field"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="res-date" className="text-sm font-medium text-fg/85">
            Date
          </label>
          <input
            id="res-date"
            name="date"
            type="date"
            required
            className="field"
          />
        </div>
        <div>
          <label htmlFor="res-time" className="text-sm font-medium text-fg/85">
            Time
          </label>
          <input
            id="res-time"
            name="time"
            type="time"
            required
            className="field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="res-notes" className="text-sm font-medium text-fg/85">
          Special Requests <span className="text-fg/40">(optional)</span>
        </label>
        <textarea
          id="res-notes"
          name="notes"
          rows={4}
          className="field"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-canvas shadow-[0_5px_0_0_var(--accent-shadow)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--accent-shadow)] disabled:opacity-60"
      >
        {sending ? "Submitting…" : "Request Reservation"}
      </button>
    </form>
  );
}
