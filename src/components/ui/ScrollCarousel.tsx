"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface ScrollCarouselProps {
  children: ReactNode;
  className?: string;
  type?: "dark" | "light";
}

/**
"<" et ">" pour défillement de piste
 */
export function ScrollCarousel({ children, className = "", type = "dark" }: ScrollCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className={`relative flex items-center gap-3 ${className}`}>
      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        aria-label="Précédent"
        className={`absolute left-5 z-20 flex h-15 w-15 items-center justify-center rounded-full text-gold transition-colors
          ${type === "dark" ? "bg-ink hover:bg-gold hover:text-white" : "border bg-none hover:bg-ink hover:text-gold"}
          `}
      >
        <ChevronLeft />
      </button>

      <div
        ref={trackRef}
        className="flex w-full gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        aria-label="Suivant"
        className={`absolute right-5 z-20 flex h-15 w-15 items-center justify-center rounded-full text-gold transition-colors
          ${type === "dark" ? "bg-ink hover:bg-gold hover:text-white" : "border bg-none hover:bg-ink hover:text-gold"}
          `}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
