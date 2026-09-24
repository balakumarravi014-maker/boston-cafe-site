import Image from "next/image";
import { Button } from "@/components/Button";
import { PhotoImage } from "@/components/PhotoImage";
import { FlipCard } from "@/components/ui/flip-card";
import { HeroScene } from "@/components/ui/hero-scene";
import { ImageMarquee } from "@/components/ui/image-marquee";
import { ImageRing } from "@/components/ui/image-ring";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import {
  business,
  ctaImage,
  featuredMenu,
  galleryImages,
  heroImage,
  heroLayers,
  marqueeImages,
  storyDetailImages,
  storyImage,
  testimonials,
  values,
} from "@/lib/content";
import { CoffeeCupIcon, HeartIcon, LeafIcon, RecycleIcon } from "@/components/icons";

const valueIcons = [LeafIcon, CoffeeCupIcon, HeartIcon, RecycleIcon];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-[72px] overflow-hidden pt-[72px]">
        <Image src={storyImage} alt="" fill preload sizes="100vw" className="-z-20 scale-110 object-cover opacity-20 blur-sm" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,var(--color-canvas)_70%)]" />
        <div className="container-page grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow">Newbury Street · Boston</p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.98] text-fg sm:text-6xl lg:text-7xl xl:text-8xl">
              Slow coffee
              <br />
              for <em className="font-medium text-accent">fast</em> city
              <br />
              mornings.
            </h1>
            <p className="mt-7 max-w-md text-lg text-fg/70">
              Locally roasted coffee, pastries baked before sunrise, and a warm corner of Back Bay to
              work, meet, or simply slow down.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/menu">Explore the Menu</Button>
              <Button href="/reservations" variant="secondary">
                Reserve a Table
              </Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-fg/10 pt-7">
              {[
                ["10+", "Years in Boston"],
                ["4.8", "Average rating"],
                ["7AM", "Doors open daily"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-3xl font-semibold text-fg">{value}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-fg/50">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <HeroScene main={heroImage} latte={heroLayers.latte} croissant={heroLayers.croissant} pour={heroLayers.pour} />
        </div>
      </section>

      {/* 3D image strip */}
      <section className="on-dark border-y border-fg/10 bg-canvas">
        <ImageMarquee images={marqueeImages} />
      </section>

      {/* Story */}
      <section className="container-page grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal className="relative">
          <PhotoImage src={storyImage} alt="Freshly roasted coffee beans" parallax className="aspect-[4/5] w-[82%] rounded-[2rem]" />
          <TiltCard
            tiltLimit={14}
            className="absolute -bottom-8 right-0 aspect-square w-[46%] rounded-[1.5rem] border-4 border-canvas shadow-2xl shadow-black/25"
          >
            <PhotoImage src={storyDetailImages[0]} alt="Espresso portafilters" sizes="25vw" className="h-full w-full rounded-none" />
          </TiltCard>
          <TiltCard
            tiltLimit={14}
            className="absolute -top-6 right-[8%] aspect-[4/3] w-[34%] rounded-[1.25rem] border-4 border-canvas shadow-2xl shadow-black/25"
          >
            <PhotoImage src={storyDetailImages[1]} alt="Friends toasting with lattes" sizes="20vw" className="h-full w-full rounded-none" />
          </TiltCard>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-fg sm:text-5xl">
            From one espresso cart to Back Bay&apos;s <em className="font-medium text-accent">living room</em>.
          </h2>
          <p className="mt-6 text-lg text-fg/70">
            What started as a single cart on Newbury Street has grown into a home for coffee lovers,
            remote workers, and neighbors across Boston. We still roast in small batches, bake every
            morning, and greet every regular by name.
          </p>
          <Button href="/about" variant="secondary" className="mt-8">
            Read Our Story →
          </Button>
        </Reveal>
      </section>

      {/* Featured menu — flip cards */}
      <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-sage/20 blur-[120px]" aria-hidden="true" />
        <div className="container-page relative">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Fan Favorites</p>
              <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">From the menu</h2>
              <p className="mt-3 text-fg/60">Hover or tap a card to turn it over.</p>
            </div>
            <Button href="/menu" variant="secondary">
              Full Menu →
            </Button>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMenu.map((item, i) => (
              <Reveal key={item.name} delay={i * 120}>
                <FlipCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values — image tiles */}
      <section className="container-page py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we stand for</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">
            Small batches. Big hearts.
          </h2>
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
                  <div className="absolute inset-x-0 bottom-0 p-6 [transform:translateZ(40px)]">
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

      {/* 3D ring gallery */}
      <section className="on-dark overflow-hidden border-y border-fg/10 bg-canvas py-24 lg:py-28">
        <Reveal className="container-page flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Inside Drago&apos;s Corner Cup</p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">Take a spin around the cafe</h2>
          </div>
          <Button href="/gallery" variant="secondary">
            View Full Gallery →
          </Button>
        </Reveal>
        <div className="mt-10">
          <ImageRing images={galleryImages.slice(0, 12)} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-24 lg:py-32">
        <Reveal className="text-center">
          <p className="eyebrow">What Neighbors Say</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">Loved by regulars across Boston</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 120}>
              <TiltCard tiltLimit={8} className="h-full rounded-3xl">
                <blockquote className="glass flex h-full flex-col rounded-3xl p-8">
                  <span className="font-display text-6xl leading-none text-accent/60">&ldquo;</span>
                  <p className="mt-2 flex-1 text-lg text-fg/85">{t.quote}</p>
                  <footer className="mt-6 flex items-center justify-between border-t border-fg/10 pt-5">
                    <span className="font-display font-semibold text-fg">{t.author}</span>
                    <span className="text-sm tracking-widest text-accent">★★★★★</span>
                  </footer>
                </blockquote>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visit CTA */}
      <section className="on-dark relative isolate overflow-hidden">
        <PhotoImage src={ctaImage} alt="" parallax sizes="100vw" className="absolute inset-0 -z-20 rounded-none" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-canvas via-canvas/85 to-canvas/30" />
        <div className="container-page py-28 lg:py-36">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Come say hello</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-tight text-fg sm:text-6xl">
              Your table is <em className="font-medium text-accent">waiting</em>.
            </h2>
            <p className="mt-5 text-lg text-fg/75">
              {business.address.line1}, {business.address.line2}
              <br />
              Open daily — see full hours on our contact page.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/reservations">Reserve a Table</Button>
              <Button href="/contact" variant="secondary">
                Get Directions
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
