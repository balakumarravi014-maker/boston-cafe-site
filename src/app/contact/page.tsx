import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { business, contactHeroImage } from "@/lib/content";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | Drago's Corner Cup",
  description: "Get in touch with Drago's Corner Cup, or find our hours and directions in Boston, MA.",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.address.mapQuery
  )}&output=embed`;

  const details = [
    {
      Icon: MapPinIcon,
      title: "Address",
      body: (
        <>
          {business.address.line1}
          <br />
          {business.address.line2}
        </>
      ),
    },
    {
      Icon: PhoneIcon,
      title: "Phone",
      body: (
        <a href={business.phoneHref} className="hover:text-accent">
          {business.phone}
        </a>
      ),
    },
    {
      Icon: MailIcon,
      title: "Email",
      body: (
        <a href={`mailto:${business.email}`} className="break-all hover:text-accent">
          {business.email}
        </a>
      ),
    },
    {
      Icon: ClockIcon,
      title: "Hours",
      body: business.hours.map((h) => (
        <span key={h.days} className="block">
          {h.days}: {h.time}
        </span>
      )),
    },
  ];

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        image={contactHeroImage}
        title={
          <>
            We&apos;d love to <em className="font-medium text-accent">hear</em> from you
          </>
        }
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {details.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <TiltCard tiltLimit={12} className="h-full rounded-3xl">
                <div className="glass h-full rounded-3xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-canvas">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 font-display text-lg font-semibold text-fg">{title}</p>
                  <p className="mt-1 text-sm text-fg/65">{body}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="glass rounded-[2rem] p-6 sm:p-10">
              <h2 className="font-display text-3xl font-semibold text-fg">Send a message</h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="h-full">
            <div className="h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-fg/10 shadow-2xl shadow-black/25">
              <iframe
                title="Drago's Corner Cup location map"
                src={mapSrc}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
