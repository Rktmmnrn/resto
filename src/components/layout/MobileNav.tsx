"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site-config";

interface MobileNavProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

export function MobileNav({ isOpen, onLinkClick }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed inset-1 z-40 flex flex-col items-center justify-center gap-2 bg-ink transition-transform duration-300 ease-out lg:static lg:inset-auto lg:z-auto lg:flex lg:flex-row lg:gap-14 lg:bg-transparent lg:transition-none
        ${isOpen
          ? "visible translate-x-0 h-screen lg:h-auto"
          : "invisible translate-x-full lg:visible lg:translate-x-0"
        }`}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick}
            aria-current={isActive ? "page" : undefined}
            className={`flex w-full items-center justify-center py-6 font-display text-base uppercase transition-colors lg:w-auto lg:py-0
              ${isActive
                ? "bg-gold text-ink lg:bg-transparent lg:text-gold"
                : "text-white hover:bg-gold hover:text-ink lg:hover:bg-transparent lg:hover:text-gold"
              }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
