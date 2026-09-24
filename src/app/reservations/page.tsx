import type { Metadata } from "next";
import { PhotoImage } from "@/components/PhotoImage";
import { ReservationForm } from "@/components/ReservationForm";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { business, galleryImages, reservationsImage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reservations | Drago's Corner Cup",
  description: "Reserve a table at Drago's Corner Cup, a cozy coffee shop in Boston, MA.",
};

const spaces = [galleryImages[3], galleryImages[7], galleryImages[11]];

export default function ReservationsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Reservations"
        image={reservationsImage}
        title={
          <>
            Save a <em className="font-medium text-accent">seat</em> by the window
          </>
        }
      >
        Bringing a group, hosting a meeting, or celebrating something special? Let us know and we&apos;ll
        set a table aside. For parties larger than 10, call{" "}
        <a href={business.phoneHref} className="font-medium text-accent underline-offset-4 hover:underline">
          {business.phone}
        </a>
        .
      </PageHero>

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[7fr_5fr] lg:py-28">
        <Reveal>
          <div className="glass rounded-[2rem] p-6 shadow-2xl shadow-black/25 sm:p-10">
            <h2 className="font-display text-3xl font-semibold text-fg">Request a table</h2>
            <p className="mt-2 text-sm text-fg/60">We confirm every request by email or phone.</p>
            <div className="mt-8">
              <ReservationForm />
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={120}>
            <p className="eyebrow">Our spaces</p>
          </Reveal>
          {spaces.map((space, i) => (
            <Reveal key={space.label} delay={200 + i * 120}>
              <TiltCard tiltLimit={10} className="on-dark group aspect-[16/9] w-full rounded-3xl border border-fg/10 shadow-xl shadow-black/25">
                <PhotoImage
                  src={space.image}
                  alt={space.label}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full rounded-none"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 font-display text-xl font-semibold text-fg">{space.label}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
