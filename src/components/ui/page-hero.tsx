import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  image: string;
  children?: ReactNode;
};

/** Full-bleed photo header with a slow Ken Burns drift. */
export function PageHero({ eyebrow, title, image, children }: PageHeroProps) {
  return (
    <section className="on-dark relative isolate -mt-[72px] flex min-h-[64vh] items-end overflow-hidden">
      <Image src={image} alt="" fill preload sizes="100vw" className="animate-ken-burns -z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-canvas via-canvas/65 to-canvas/30" />
      <div className="container-page w-full pb-14 pt-40 lg:pb-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-fg sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-fg/75">{children}</div>}
      </div>
    </section>
  );
}
