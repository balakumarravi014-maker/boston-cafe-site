import type { Metadata } from "next";
import { PhotoImage } from "@/components/PhotoImage";
import { FlipCard } from "@/components/ui/flip-card";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { featuredMenu, menu, menuHeroImage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu | Drago's Corner Cup",
  description: "Coffee, tea, pastries, breakfast, and lunch menu for Drago's Corner Cup, Boston.",
};

export default function MenuPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Menu"
        image={menuHeroImage}
        title={
          <>
            Something for <em className="font-medium text-accent">every</em> part of the day
          </>
        }
      >
        All prices are for dine-in or takeout. Ask about seasonal specials on our chalkboard — we rotate
        them monthly.
      </PageHero>

      <nav className="sticky top-[72px] z-40 border-b border-fg/10 bg-canvas/85 backdrop-blur-xl">
        <div className="container-page flex gap-2 overflow-x-auto py-3">
          {menu.map((section) => (
            <a
              key={section.category}
              href={`#${slug(section.category)}`}
              className="shrink-0 rounded-full border border-fg/15 px-4 py-2 text-sm text-fg/80 transition-colors hover:border-accent hover:text-accent"
            >
              {section.category}
            </a>
          ))}
        </div>
      </nav>

      <section className="container-page py-20">
        <Reveal>
          <p className="eyebrow">Start here</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">House favorites</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredMenu.map((item, i) => (
            <Reveal key={item.name} delay={i * 120}>
              <FlipCard {...item} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="container-page space-y-24 pb-28">
        {menu.map((section, i) => (
          <section
            key={section.category}
            id={slug(section.category)}
            className="grid scroll-mt-40 items-start gap-10 lg:grid-cols-[5fr_7fr]"
          >
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <TiltCard tiltLimit={10} className="on-dark group aspect-[4/3] w-full rounded-3xl border border-fg/10 shadow-2xl shadow-black/25 lg:aspect-[4/5]">
                <PhotoImage
                  src={section.image}
                  alt={section.category}
                  parallax
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-sm font-semibold text-accent">0{i + 1}</p>
                  <h2 className="font-display text-3xl font-semibold text-fg sm:text-4xl">{section.category}</h2>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal delay={120} className="lg:pt-6">
              <ul className="divide-y divide-fg/10">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex items-baseline gap-4 py-5 transition-transform duration-300 hover:translate-x-2"
                  >
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold text-fg transition-colors group-hover:text-accent">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-fg/55">{item.description}</p>
                    </div>
                    <span className="mb-1 flex-1 border-b border-dotted border-fg/20" aria-hidden="true" />
                    <p className="shrink-0 font-display text-lg font-semibold text-accent">{item.price}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
