import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <Reveal>
      <section className="grid grid-cols-1 items-center gap-10 px-5 py-20 text-ink md:px-16 lg:grid-cols-2 lg:gap-14 lg:py-28">
        <div className="relative aspect-square w-full lg:h-[600px]">
          <Image
            src="/images/home/philosophy.png"
            alt="Préparation en cuisine"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <SectionHeading
            eyebrow="quality and balance"
            title="our food philosophy"
            align="left"
            tone="light"
          />
          <p className="text-sm text-ink/80 sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
            placerat turpis. Ut ullamcorper condimentum tincidunt orci quis ullamcorper. Arcu ut
            tincidunt egestas mauris mi. Ultrices egestas rhoncus nec morbi sed.
          </p>
          <Button href="/about" variant="ink" className="mt-2">
            view all the chef
          </Button>
        </div>
      </section>
    </Reveal>
  );
}
