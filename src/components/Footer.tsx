import Link from "next/link";
import { business, nav } from "@/lib/content";
import { ClockIcon, CoffeeCupIcon, FacebookIcon, InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-espresso text-cream">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <CoffeeCupIcon className="h-6 w-6 text-gold" />
            <span className="font-display text-lg font-semibold">{business.name}</span>
          </div>
          <p className="mt-3 text-sm text-cream/70">{business.tagline}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-cream/20 p-2 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">Visit</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {business.address.line1}
                <br />
                {business.address.line2}
              </span>
            </li>
            <li className="flex gap-2">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={business.phoneHref} className="transition-colors hover:text-gold">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${business.email}`} className="transition-colors hover:text-gold">
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold">Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {business.hours.map((h) => (
              <li key={h.days} className="flex gap-2">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
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

      <div className="border-t border-cream/10 py-6">
        <p className="container-page text-center text-xs text-cream/50">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
