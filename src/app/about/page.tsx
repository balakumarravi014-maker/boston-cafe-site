import type { Metadata } from "next";
import { PhotoImage } from "@/components/PhotoImage";
import { TiltCard } from "@/components/ui/tilt-card";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ImageMarquee } from "@/components/ui/image-marquee";
import {
  aboutHeroImage,
  marqueeImages,
  nameMeaning,
  storefrontImage,
  storyDetailImages,
  team,
  values,
} from "@/lib/content";
import { CoffeeCupIcon, HeartIcon, LeafIcon, RecycleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About | Drago's Corner Cup",
  description: "The story, values, and team behind Drago's Corner Cup, a neighborhood coffee shop in Boston.",
};

const valueIcons = [LeafIcon, CoffeeCupIcon, HeartIcon, RecycleIcon];

const timeline = [
  { year: "2014", text: "A single espresso cart parks on Newbury Street." },
  { year: "2016", text: "We open our doors — six tables and a borrowed roaster." },
  { year: "2019", text: "The bakery counter arrives, with pastries made before sunrise." },
  { year: "Today", text: "A full cafe, a community table, and hundreds of regulars." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        image={aboutHeroImage}
        title={
          <>
            Rooted in Boston, <em className="font-medium text-accent">brewed with care</em>
          </>
        }
      >
        Over a decade of small-batch roasting, scratch baking, and knowing our regulars by their order.
      </PageHero>

      <section className="container-page pt-24 lg:pt-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What&apos;s in a name?</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">
            Drago&apos;s Corner Cup, <em className="font-medium text-accent">word by word</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {nameMeaning.map((part, i) => (
            <Reveal key={part.word} delay={i * 150}>
              <TiltCard tiltLimit={10} className="group h-full rounded-3xl border border-fg/10 bg-surface shadow-xl shadow-black/10">
                <div className="on-dark relative aspect-[4/3] overflow-hidden">
                  <PhotoImage
                    src={part.image}
                    alt={part.word}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="h-full w-full rounded-none"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-transparent" />
                  <p className="absolute bottom-4 left-6 font-display text-5xl font-semibold text-fg">{part.word}</p>
                  <span className="absolute right-5 top-4 text-sm font-semibold text-accent">0{i + 1}</span>
                </div>
                <p className="p-6 text-fg/75">{part.meaning}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="font-display text-2xl text-fg sm:text-3xl">
            Put together: <em className="text-accent">Drago&apos;s own corner of Boston</em>, where there&apos;s always
            a cup waiting for you.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal>
          <p className="eyebrow">How it started</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">
            One cart. One goal. A great cup.
          </h2>
          <p className="mt-6 text-lg text-fg/70">
            Drago&apos;s Corner Cup opened on Newbury Street with one goal: bring the neighborhood together over
            a genuinely great cup of coffee. We still roast in small batches and bake every pastry from
            scratch each morning.
          </p>
          <p className="mt-4 text-fg/70">
            Our community table has hosted everything from book clubs to local art shows — and it&apos;s
            always open to you.
          </p>
          <ol className="mt-10 space-y-5 border-l border-accent/30 pl-6">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-canvas" />
                <p className="font-display text-lg font-semibold text-accent">{t.year}</p>
                <p className="text-fg/70">{t.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={150} className="relative">
          <TiltCard tiltLimit={8} className="aspect-[4/5] w-[85%] rounded-[2rem] shadow-2xl shadow-black/25">
            <PhotoImage src={storefrontImage} alt="Drago's Corner Cup at night" className="h-full w-full rounded-none" />
          </TiltCard>
          <TiltCard
            tiltLimit={14}
            className="absolute -bottom-10 right-0 aspect-square w-[45%] rounded-[1.5rem] border-4 border-canvas shadow-2xl shadow-black/25"
          >
            <PhotoImage src={storyDetailImages[0]} alt="Espresso portafilters" sizes="25vw" className="h-full w-full rounded-none" />
          </TiltCard>
        </Reveal>
      </section>

      <section className="on-dark border-y border-fg/10 bg-canvas">
        <ImageMarquee images={marqueeImages} />
      </section>

      <section className="container-page py-24 lg:py-32">
        <Reveal className="text-center">
          <p className="eyebrow">Our values</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">What we stand for</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <Reveal key={value.title} delay={i * 120}>
                <TiltCard tiltLimit={12} className="on-dark group aspect-[3/4] w-full rounded-3xl border border-fg/10">
                  <PhotoImage
                    src={value.image}
                    alt=""
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="absolute inset-0 rounded-none"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-canvas/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-canvas">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-fg">{value.title}</h3>
                    <p className="mt-2 text-sm text-fg/70">{value.description}</p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32">
        <div className="container-page">
          <Reveal className="text-center">
            <p className="eyebrow">The people</p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">Meet the team</h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 150}>
                <TiltCard tiltLimit={12} className="on-dark group aspect-[4/5] w-full rounded-3xl border border-fg/10 shadow-2xl shadow-black/25">
                  <PhotoImage
                    src={member.image}
                    alt={member.name}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="h-full w-full rounded-none"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-semibold text-fg">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark relative isolate overflow-hidden text-center">
        <PhotoImage src={storyDetailImages[1]} alt="" parallax sizes="100vw" className="absolute inset-0 -z-20 rounded-none" />
        <div className="absolute inset-0 -z-10 bg-canvas/80" />
        <Reveal className="container-page py-28 lg:py-36">
          <h2 className="font-display text-5xl font-semibold text-fg sm:text-6xl">Come meet us in person</h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-fg/75">
            We&apos;d love to pour you a cup. Stop by, or reserve a table for your next visit.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/reservations">Reserve a Table</Button>
            <Button href="/contact" variant="secondary">
              Get Directions
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
