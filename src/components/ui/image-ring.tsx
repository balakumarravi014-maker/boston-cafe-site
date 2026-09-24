import Image from "next/image";
import type { CSSProperties } from "react";

type ImageRingProps = {
  images: { label: string; image: string }[];
  /** Width of each panel in px */
  panelWidth?: number;
};

/** A slowly rotating 3D carousel of photos. Hover pauses it. */
export function ImageRing({ images, panelWidth = 220 }: ImageRingProps) {
  const count = images.length;
  const radius = Math.round(panelWidth / 2 / Math.tan(Math.PI / count)) + 24;

  return (
    <div
      className="ring-scene relative flex h-[360px] w-full items-center justify-center overflow-hidden [perspective:1400px] sm:h-[440px]"
      style={{ "--radius": `${radius}px` } as CSSProperties}
    >
      <div className="scale-[0.5] [transform-style:preserve-3d] sm:scale-75 lg:scale-100">
        <div className="ring-stage relative [transform-style:preserve-3d]" style={{ width: panelWidth, height: panelWidth * 1.35 }}>
          {images.map((img, i) => (
            <figure
              key={img.label}
              className="on-dark absolute inset-0 overflow-hidden rounded-2xl border border-fg/10 shadow-2xl shadow-black/25"
              style={{ transform: `rotateY(${(360 / count) * i}deg) translateZ(${radius}px)` }}
            >
              <Image src={img.image} alt={img.label} fill sizes={`${panelWidth}px`} className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-fg">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-canvas to-transparent" />
    </div>
  );
}
