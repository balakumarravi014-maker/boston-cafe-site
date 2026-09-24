"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CloseIcon, CoffeeCupIcon, MenuIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-[72px] transition-colors duration-500",
        "border-b border-fg/10 bg-canvas/85 backdrop-blur-xl", solid && "shadow-lg shadow-black/5"
      )}
    >
      <div className="container-page flex h-full items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-canvas transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)]">
            <CoffeeCupIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold text-fg">Drago&apos;s Corner Cup</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-fg/10 bg-surface/60 p-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "bg-fg text-canvas" : "text-fg/80 hover:text-fg"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/reservations"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Reserve a Table
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-fg/10 bg-canvas/95 backdrop-blur-xl md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  pathname === item.href ? "bg-surface-2 text-accent" : "text-fg"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
