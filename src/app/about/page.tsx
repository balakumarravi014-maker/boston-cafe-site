import type { Metadata } from "next";
import { PhotoImage } from "@/components/PhotoImage";
import { TiltCard } from "@/components/ui/tilt-card";
import { Button } from "@/components/Button";
import { aboutHeroImage, team, values } from "@/lib/content";
import { CoffeeCupIcon, HeartIcon, LeafIcon, RecycleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About | Beacon & Bean",
  description: "The story, values, and team behind Beacon & Bean, a neighborhood coffee shop in Boston.",
};

const valueIcons = [LeafIcon, CoffeeCupIcon, HeartIcon, RecycleIcon];

export default function AboutPage() {
  return (
    <div>
      <section className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            About Us
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-espresso sm:text-5xl">
            Rooted in Boston, brewed with care
          </h1>
          <p className="mt-5 text-espresso/70">
            Beacon &amp; Bean opened its doors on Newbury Street with one goal: bring the neighborhood
            together over a genuinely great cup of coffee. Over a decade later, we still roast in
            small batches, bake every pastry from scratch each morning, and know most of our regulars
            by their order.
          </p>
          <p className="mt-4 text-espresso/70">
            What began as a single espresso cart has grown into a full cafe with a bakery counter,
            all-day breakfast and lunch, and a community table that&apos;s hosted everything from book
            clubs to local art shows.
          </p>
        </div>
        <PhotoImage src={aboutHeroImage} alt="Beacon & Bean cafe interior" className="aspect-[4/3] w-full" />
      </section>

      <section className="bg-cream-dark py-16 lg:py-20">
        <div className="container-page">
          <h2 className="text-center font-display text-3xl font-semibold text-espresso sm:text-4xl">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <div key={value.title} className="rounded-2xl bg-cream p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-espresso">{value.title}</h3>
                  <p className="mt-2 text-sm text-espresso/60">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <h2 className="text-center font-display text-3xl font-semibold text-espresso sm:text-4xl">
          Meet the team
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <TiltCard tiltLimit={10} className="aspect-square w-full rounded-2xl">
                <PhotoImage src={member.image} alt={member.name} className="h-full w-full" />
              </TiltCard>
              <h3 className="mt-4 font-display text-lg font-semibold text-espresso">{member.name}</h3>
              <p className="text-sm text-espresso/60">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-espresso py-16 text-center text-cream lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Come meet us in person</h2>
          <p className="mx-auto mt-3 max-w-md text-cream/70">
            We&apos;d love to pour you a cup. Stop by, or reserve a table for your next visit.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Get Directions</Button>
            <Button
              href="/reservations"
              variant="secondary"
              className="border-cream/30 text-cream hover:bg-cream hover:text-espresso"
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
