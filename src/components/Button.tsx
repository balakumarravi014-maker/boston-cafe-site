import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-accent text-canvas shadow-[0_5px_0_0_var(--accent-shadow),0_18px_36px_-14px_var(--accent)] hover:shadow-[0_7px_0_0_var(--accent-shadow),0_24px_44px_-14px_var(--accent)] active:shadow-[0_1px_0_0_var(--accent-shadow)]"
      : "border border-fg/25 bg-fg/5 text-fg backdrop-blur-sm hover:border-fg hover:bg-fg hover:text-canvas";

  return <Link {...props} className={`${base} ${styles} ${className}`} />;
}
