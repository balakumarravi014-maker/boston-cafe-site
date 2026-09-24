import Image from "next/image";

type ImageMarqueeProps = {
  images: { label: string; image: string }[];
};

/** Endless strip of photos, tipped back in 3D space. */
export function ImageMarquee({ images }: ImageMarqueeProps) {
  const loop = [...images, ...images];

  return (
    <div className="marquee overflow-hidden py-12 [perspective:1400px]" aria-hidden="true">
      <div className="[transform:rotateX(20deg)_rotateZ(-4deg)] [transform-style:preserve-3d]">
        <div className="marquee-track flex w-max gap-5 [transform-style:preserve-3d]">
          {loop.map((img, i) => (
            <div
              key={`${img.label}-${i}`}
              className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border border-fg/10 shadow-xl shadow-black/25 transition-transform duration-500 hover:[transform:translateZ(70px)] sm:h-56 sm:w-80"
            >
              <Image src={img.image} alt="" fill sizes="320px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
