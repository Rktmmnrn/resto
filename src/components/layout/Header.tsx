"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Menu, Search, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { useSlideNav } from "@/hooks/useSlideNav";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { InfoDrawer } from "./InfoDrawer";

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center gap-1">
      <span className="font-display text-xl uppercase sm:text-2xl">{siteConfig.name}</span>
      <span className="text-[5px] uppercase">{siteConfig.tagline}</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { isOpen, close, toggle } = useSlideNav();

  const popupRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen || currentScrollY <= 0 || currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Ferme au clavier avec Echap (accessibilité)
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // click dehors
  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, close]);

  return (
    <header
      className={`absolute fixed w-full top-0 z-50 flex flex-col rounded-b-[20px] bg-ink text-white transition-transform duration-300 lg:rounded-none
          ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Barre de contact — absente sur l'accueil */}
      {!isHome && (
        <div className="flex items-center justify-between border-b border-gold/40 px-5 py-3 md:px-16 md:py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold">
              <Mail size={16} className="text-gold" />
            </span>
            <div className="hidden flex-col text-sm md:flex">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
            </div>
          </div>

          <Logo />

          <div className="flex items-center gap-3">
            <div className="hidden flex-col text-right text-sm md:flex">
              <p>{siteConfig.contact.address.line1}</p>
              <p>{siteConfig.contact.address.line2}</p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold">
              <MapPin size={16} className="text-gold" />
            </span>
          </div>
        </div>
      )}

      {/* Barre de navigation — logo + "book a table" sur l'accueil, recherche ailleurs */}
      <div className="flex items-center justify-between px-5 py-3 md:px-16 md:py-4">
        {isHome ? <Logo /> : (
          <button type="button" aria-label="Rechercher" className="text-white cursor-pointer">
            <Search size={20} />
          </button>
        )}

        <MobileNav isOpen={isOpen} onLinkClick={close} />

        <div className="flex items-center gap-4">
          {isHome && (
            <Button href="/contact" variant="gold" className="hidden lg:inline-flex">
              book a table
            </Button>
          )}
          <button
            type="button"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative z-50 text-gold cursor-pointer"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <InfoDrawer ref={popupRef} isOpen={isOpen} />
    </header>
  );
}
