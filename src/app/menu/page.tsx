import type { Metadata } from "next";
import { menu } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menu | Beacon & Bean",
  description: "Coffee, tea, pastries, breakfast, and lunch menu for Beacon & Bean, Boston.",
};

export default function MenuPage() {
  return (
    <div className="container-page py-16 lg:py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Our Menu
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-espresso sm:text-5xl">
        Something for every part of the day
      </h1>
      <p className="mt-4 max-w-2xl text-espresso/70">
        All prices are for dine-in or takeout. Ask about seasonal specials on our chalkboard — we
        rotate them monthly.
      </p>

      <div className="mt-12 space-y-14">
        {menu.map((section) => (
          <div key={section.category}>
            <h2 className="font-display text-2xl font-semibold text-espresso">{section.category}</h2>
            <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {section.items.map((item) => (
                <div key={item.name} className="flex justify-between gap-4 border-b border-espresso/10 pb-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-espresso">{item.name}</h3>
                    <p className="mt-1 text-sm text-espresso/60">{item.description}</p>
                  </div>
                  <p className="shrink-0 font-semibold text-terracotta">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
