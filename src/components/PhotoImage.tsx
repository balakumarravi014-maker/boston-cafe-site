import Image from "next/image";

type PhotoImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PhotoImage({
  src,
  alt,
  label,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: PhotoImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-cream-dark ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      {label && (
        <span className="absolute left-4 top-4 rounded-full bg-black/35 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
