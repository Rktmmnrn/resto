import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function LocationMap() {
  return (
    <Reveal>
      <section className="relative h-[400px] w-full px-5 md:px-16">
        <div className="relative h-full w-full">
          <Image
            src="/images/home/map.png"
            alt="Localisation du restaurant"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </Reveal>
  );
}
