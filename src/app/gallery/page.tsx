import type { Metadata } from "next";
import { PhotoImage } from "@/components/PhotoImage";
import { TiltCard } from "@/components/ui/tilt-card";
import { galleryImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery | Beacon & Bean",
  description: "Photos of Beacon & Bean's cafe interior, coffee, and pastries in Boston.",
};

export default function GalleryPage() {
  return (
    <div className="container-page py-16 lg:py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Gallery
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-espresso sm:text-5xl">
        A look inside Beacon &amp; Bean
      </h1>
      <p className="mt-4 max-w-2xl text-espresso/70">
        From our espresso bar to the morning bake, here&apos;s a peek at the cafe.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image, i) => (
          <TiltCard
            key={image.label}
            tiltLimit={12}
            className={`w-full rounded-2xl ${i % 5 === 0 ? "aspect-square sm:col-span-2 sm:aspect-[2/1]" : "aspect-square"}`}
          >
            <PhotoImage src={image.image} alt={image.label} label={image.label} className="h-full w-full" />
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
