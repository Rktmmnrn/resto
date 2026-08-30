import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "gold" | "ink";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  gold: "border-gold text-gold hover:bg-gold hover:text-ink",
  ink: "border-ink text-ink hover:bg-ink hover:text-white",
};

/**
 * Les boutons "outline qui se remplit au hover" reviennent partout dans
 * l'ancien site (`.btn` / `.btn-wrapper`), avec 2 jeux de couleurs selon
 * le fond (doré sur fond sombre, encre sur fond clair).
 */
export function Button({
  children,
  variant = "gold",
  href,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex w-fit items-center justify-center border px-7 py-3 font-body text-xs uppercase tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold
  ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
