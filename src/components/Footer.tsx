import Image from "next/image";
import Link from "next/link";
import { business, galleryImages, nav } from "@/lib/content";
import { ClockIcon, CoffeeCupIcon, FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export function Footer() {
  return (
    <footer className="on-dark relative border-t border-fg/10 bg-canvas text-fg">
      {/* Instagram-style photo strip */}
      <div className="grid grid-cols-4 sm:grid-cols-8">
        {galleryImages.slice(0, 8).map((img) => (
          <a
            key={img.label}
            href={business.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden"
            aria-label={`${img.label} on Instagram`}
          >
            <Image
              src={img.image}
              alt=""
              fill
              sizes="(min-width: 640px) 12.5vw, 25vw"
              className="object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>

      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-canvas">
              <CoffeeCupIcon className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold">{business.name}</span>
          </div>
          <p className="mt-4 text-sm text-fg/60">{business.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-fg/20 p-2.5 text-fg/80 transition-colors hover:border-accent hover:text-accent"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-fg/20 p-2.5 text-fg/80 transition-colors hover:border-accent hover:text-accent"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-5 space-y-2.5 text-sm text-fg/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Visit</h3>
          <ul className="mt-5 space-y-3 text-sm text-fg/75">
            <li className="flex gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {business.address.line1}
                <br />
                {business.address.line2}
              </span>
            </li>
            <li className="flex gap-2">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={business.phoneHref} className="transition-colors hover:text-accent">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${business.email}`} className="transition-colors hover:text-accent">
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Hours</h3>
          <ul className="mt-5 space-y-3 text-sm text-fg/75">
            {business.hours.map((h) => (
              <li key={h.days} className="flex gap-2">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  {h.days}
                  <br />
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="overflow-hidden border-t border-fg/10">
        <p className="container-page select-none py-6 text-center font-display text-[9vw] font-semibold leading-none text-fg/[0.06] sm:text-[7.5vw]">
          Drago&apos;s Corner Cup
        </p>
      </div>

      <div className="border-t border-fg/10 py-6">
        <p className="container-page text-center text-xs text-fg/40">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
