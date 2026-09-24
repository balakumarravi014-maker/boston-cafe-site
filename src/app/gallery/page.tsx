import type { Metadata } from "next";
import { PhotoImage } from "@/components/PhotoImage";
import { ImageRing } from "@/components/ui/image-ring";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { galleryHeroImage, galleryImages, marqueeImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery | Drago's Corner Cup",
  description: "Photos of the cafe interior, coffee, and pastries at Drago's Corner Cup in Boston.",
};

// Varying heights give the masonry columns some rhythm.
const heights = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[4/3]", "aspect-[2/3]"];

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        image={galleryHeroImage}
        title={
          <>
            A look <em className="font-medium text-accent">inside</em> Drago&apos;s Corner Cup
          </>
        }
      >
        From our espresso bar to the morning bake, here&apos;s a peek at the cafe.
      </PageHero>

      <section className="overflow-hidden py-20">
        <Reveal className="container-page">
          <p className="eyebrow">In the round</p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-fg sm:text-5xl">Our favorite cups</h2>
          <p className="mt-3 text-fg/60">Hover to pause the carousel.</p>
        </Reveal>
        <div className="mt-8">
          <ImageRing images={marqueeImages} panelWidth={240} />
        </div>
      </section>

      <section className="container-page pb-28">
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryImages.map((image, i) => (
            <Reveal key={image.label} delay={(i % 4) * 100} className="break-inside-avoid">
              <TiltCard tiltLimit={12} className={`on-dark group w-full rounded-2xl border border-fg/10 ${heights[i % heights.length]}`}>
                <PhotoImage
                  src={image.image}
                  alt={image.label}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="h-full w-full rounded-none"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 translate-y-2 font-display text-lg font-semibold text-fg opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.label}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
