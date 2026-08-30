import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full flex-col justify-center items-start overflow-hidden text-white">
      <Image
        src="/images/hero/hero-dining.png"
        alt="Salle du restaurant, ambiance chaleureuse"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/40" />

      <Reveal className="z-10 mx-5 mb-12 max-w-xl md:mx-16">
        <h1 className="font-display text-4xl uppercase leading-tight sm:text-5xl md:text-7xl">
          savor the art of fine dining
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/90 sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Vulputate a vitae eget volutpat integer. Id ut
          vitae eget integer. Eu curabitur nam facilisi semper in.
        </p>
        <Button href="/menu" variant="gold" className="mt-6 font-black">
          discover menu
        </Button>
      </Reveal>

      {/* Barre de réservation */}
      <div className="absolute z-10 w-full grid grid-cols-2 bottom-0 gap-3 bg-ink p-5 sm:grid-cols-4 md:gap-4 md:px-10 md:py-6 lg:mb-0 lg:w-fit lg:flex lg:flex-grid lg:right-0">
        <div className="flex items-center justify-center border border-gold px-5 py-3 font-display text-sm">
          1 Person
        </div>
        <div className="flex items-center justify-between gap-3 border border-gold px-5 py-3 font-display text-sm">
          11/12/2024 <span className="text-gold">⌄</span>
        </div>
        <div className="flex items-center justify-center border border-gold px-5 py-3 font-display text-sm">
          09:00 pm
        </div>
        <button
          type="button"
          className="border border-gold px-5 py-3 font-body text-xs uppercase tracking-wide text-white transition-colors hover:bg-gold hover:text-ink cursor-pointer"
        >
          book now
        </button>
      </div>
    </section>
  );
}
