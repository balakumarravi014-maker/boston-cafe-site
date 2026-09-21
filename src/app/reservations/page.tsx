import type { Metadata } from "next";
import { PhotoImage } from "@/components/PhotoImage";
import { ReservationForm } from "@/components/ReservationForm";
import { business, reservationsImage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reservations | Beacon & Bean",
  description: "Reserve a table at Beacon & Bean, a cozy coffee shop in Boston, MA.",
};

export default function ReservationsPage() {
  return (
    <div className="container-page py-16 lg:py-20">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
        Reservations
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-espresso sm:text-5xl">
        Reserve a table
      </h1>
      <p className="mt-4 max-w-2xl text-espresso/70">
        Planning to bring a group, host a meeting, or celebrate something special? Let us know and
        we&apos;ll set a table aside for you. For parties larger than 10, please call us directly at{" "}
        <a href={business.phoneHref} className="font-medium text-terracotta">
          {business.phone}
        </a>
        .
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-espresso/10 p-6 sm:p-8">
          <ReservationForm />
        </div>
        <PhotoImage
          src={reservationsImage}
          alt="Cozy seating area at Beacon & Bean"
          className="aspect-[4/3] w-full lg:aspect-auto lg:h-full"
        />
      </div>
    </div>
  );
}
