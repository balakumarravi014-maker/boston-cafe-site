import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** Drift the photo against the scroll direction (where the browser supports it) */
  parallax?: boolean;
};

export function PhotoImage({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  parallax = false,
}: PhotoImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-surface-2", parallax && "parallax", className)}>
      <Image src={src} alt={alt} fill preload={priority} sizes={sizes} className={cn("object-cover", imgClassName)} />
      {label && (
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
