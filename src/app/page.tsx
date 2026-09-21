import { Button } from "@/components/Button";
import { PhotoImage } from "@/components/PhotoImage";
import { TiltCard } from "@/components/ui/tilt-card";
import { business, ctaImage, featuredMenu, galleryImages, heroImage, storyImage, testimonials, values } from "@/lib/content";
import { CoffeeCupIcon, HeartIcon, LeafIcon, RecycleIcon } from "@/components/icons";

const valueIcons = [LeafIcon, CoffeeCupIcon, HeartIcon, RecycleIcon];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-page grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Boston, Massachusetts
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl lg:text-6xl">
            {business.tagline}
          </h1>
          <p className="mt-5 max-w-md text-base text-espresso/70">
            Stop by for locally roasted coffee, fresh-baked pastries, and a warm neighborhood spot to
            work, meet, or just slow down for a while.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/menu">View Menu</Button>
            <Button href="/reservations" variant="secondary">
              Reserve a Table
            </Button>
          </div>
          <div className="mt-10 flex gap-8 border-t border-espresso/10 pt-6">
            <div>
              <p className="font-display text-2xl font-semibold text-espresso">10+</p>
              <p className="text-sm text-espresso/60">Years in Boston</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-espresso">4.8/5</p>
              <p className="text-sm text-espresso/60">Average rating</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-espresso">7AM</p>
              <p className="text-sm text-espresso/60">Open daily from</p>
            </div>
          </div>
        </div>
        <TiltCard tiltLimit={8} scale={1.02} className="aspect-[4/3] w-full rounded-2xl shadow-xl shadow-espresso/20">
          <PhotoImage src={heroImage} alt="Beacon & Bean storefront and counter" priority className="h-full w-full" />
        </TiltCard>
      </section>

      {/* Story teaser */}
      <section className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <PhotoImage
          src={storyImage}
          alt="Freshly roasted coffee beans"
          className="aspect-[4/3] w-full lg:order-2"
        />
        <div className="lg:order-1">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
            Our Story
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso sm:text-4xl">
            A neighborhood cafe, brewed with care since day one.
          </h2>
          <p className="mt-4 text-espresso/70">
            What started as a single espresso cart on Newbury Street has grown into a home for coffee
            lovers, remote workers, and neighbors across Boston. We still roast in small batches, bake
            every morning, and greet every regular by name.
          </p>
          <Button href="/about" variant="secondary" className="mt-6">
            Read Our Story
          </Button>
        </div>
      </section>

      {/* Featured menu */}
      <section className="bg-cream-dark py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
                Fan Favorites
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-espresso sm:text-4xl">
                From the menu
              </h2>
            </div>
            <Button href="/menu" variant="secondary">
              Full Menu
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMenu.map((item) => (
              <div key={item.name} className="rounded-2xl bg-cream p-4 shadow-sm shadow-espresso/5">
                <TiltCard tiltLimit={12} className="aspect-square w-full rounded-xl">
                  <PhotoImage src={item.image} alt={item.name} className="h-full w-full rounded-xl" />
                </TiltCard>
                <h3 className="mt-4 font-display text-lg font-semibold text-espresso">{item.name}</h3>
                <p className="mt-1 text-sm text-espresso/60">{item.description}</p>
                <p className="mt-3 font-semibold text-terracotta">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <div key={value.title} className="text-center sm:text-left">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/10 text-terracotta sm:mx-0">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-espresso">{value.title}</h3>
                <p className="mt-2 text-sm text-espresso/60">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="bg-cream-dark py-16 lg:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
                Inside Beacon &amp; Bean
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-espresso sm:text-4xl">
                A look around the cafe
              </h2>
            </div>
            <Button href="/gallery" variant="secondary">
              View Full Gallery
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {galleryImages.slice(0, 6).map((image) => (
              <TiltCard key={image.label} tiltLimit={14} className="aspect-square w-full rounded-2xl">
                <PhotoImage src={image.image} alt={image.label} label={image.label} className="h-full w-full" />
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-16 lg:py-20">
        <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
          What Neighbors Say
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-semibold text-espresso sm:text-4xl">
          Loved by regulars across Boston
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="rounded-2xl border border-espresso/10 bg-cream p-6">
              <p className="text-espresso/80">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 font-display text-sm font-semibold text-terracotta">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Visit CTA */}
      <section className="bg-espresso py-16 text-cream lg:py-20">
        <div className="container-page grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Come say hello</h2>
            <p className="mt-3 max-w-md text-cream/70">
              {business.address.line1}, {business.address.line2}
              <br />
              Open daily — see full hours on our contact page.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact">Get Directions</Button>
              <Button href="/reservations" variant="secondary" className="border-cream/30 text-cream hover:bg-cream hover:text-espresso">
                Reserve a Table
              </Button>
            </div>
          </div>
          <PhotoImage src={ctaImage} alt="Beacon & Bean cafe interior" className="aspect-[16/9] w-full" />
        </div>
      </section>
    </>
  );
}
