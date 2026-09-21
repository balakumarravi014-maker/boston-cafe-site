import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors";
  const styles =
    variant === "primary"
      ? "bg-terracotta text-cream hover:bg-terracotta-dark"
      : "border border-espresso/20 bg-transparent text-espresso hover:bg-espresso hover:text-cream";

  return <Link {...props} className={`${base} ${styles} ${className}`} />;
}
