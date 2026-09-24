import Image from "next/image";

type FlipCardProps = {
  name: string;
  description: string;
  price: string;
  image: string;
};

/** Menu card that turns over in 3D on hover (or tap/focus) to reveal the details. */
export function FlipCard({ name, description, price, image }: FlipCardProps) {
  return (
    <div className="on-dark flip-card aspect-[3/4] w-full rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-accent" tabIndex={0}>
      <div className="flip-inner relative h-full w-full">
        <div className="flip-face absolute inset-0 overflow-hidden rounded-3xl border border-fg/10 shadow-2xl shadow-black/25">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-sm font-semibold text-accent">{price}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-fg">{name}</h3>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.25em] text-fg/50">Turn me over ↻</p>
          </div>
        </div>
        <div className="flip-face flip-back absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-accent/30 bg-surface-2 p-6">
          <Image src={image} alt="" fill sizes="25vw" className="scale-125 object-cover opacity-15 blur-md" />
          <div className="relative">
            <p className="eyebrow">House favorite</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-fg">{name}</h3>
            <p className="mt-3 text-fg/70">{description}</p>
          </div>
          <div className="relative flex items-end justify-between border-t border-fg/10 pt-4">
            <span className="text-sm text-fg/50">Dine-in or takeout</span>
            <span className="font-display text-3xl font-semibold text-accent">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
