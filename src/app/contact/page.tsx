import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/lib/content";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Beacon & Bean",
  description: "Get in touch with Beacon & Bean, or find our hours and directions in Boston, MA.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.address.mapQuery
  )}&output=embed`;

  return (
    <div className="container-page py-16 lg:py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-espresso sm:text-5xl">
        We&apos;d love to hear from you
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-espresso">Send a message</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>

          <div className="grid gap-4 border-t border-espresso/10 pt-8 sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPinIcon className="h-5 w-5 shrink-0 text-terracotta" />
              <div>
                <p className="font-medium text-espresso">Address</p>
                <p className="text-sm text-espresso/60">
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-terracotta" />
              <div>
                <p className="font-medium text-espresso">Phone</p>
                <a href={business.phoneHref} className="text-sm text-espresso/60 hover:text-terracotta">
                  {business.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <MailIcon className="h-5 w-5 shrink-0 text-terracotta" />
              <div>
                <p className="font-medium text-espresso">Email</p>
                <a href={`mailto:${business.email}`} className="text-sm text-espresso/60 hover:text-terracotta">
                  {business.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <ClockIcon className="h-5 w-5 shrink-0 text-terracotta" />
              <div>
                <p className="font-medium text-espresso">Hours</p>
                {business.hours.map((h) => (
                  <p key={h.days} className="text-sm text-espresso/60">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-espresso/10">
          <iframe
            title="Beacon & Bean location map"
            src={mapSrc}
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
