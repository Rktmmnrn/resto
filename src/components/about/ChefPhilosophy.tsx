import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ChefPhilosophy() {
  return (
    <Reveal>
      <section className="grid grid-cols-1 items-center gap-8 px-5 py-20 text-ink md:px-16 lg:grid-cols-[1fr_1.4fr_1fr] lg:py-28">
        <div className="relative order-2 aspect-[3/4] w-full lg:order-1">
          <Image src="/images/about/chef-1.png" alt="Notre chef" fill className="object-cover" />
        </div>
        <div className="order-1 flex flex-col items-center gap-4 text-center lg:order-2">
          <SectionHeading eyebrow="our chef" title="our food philosophy" />
          <p className="text-sm text-ink/80 sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
            placerat turpis. Ut ullamcorper condimentum tincidunt orci quis ullamcorper. Arcu ut
            tincidunt egestas mauris mi. Ultrices egestas rhoncus nec morbi sed pelle.
          </p>
          <Button variant="ink" className="mt-2">
            meet all the chef
          </Button>
        </div>
        <div className="relative order-3 aspect-[3/4] w-full">
          <Image src="/images/about/chef-2.png" alt="Notre équipe" fill className="object-cover" />
        </div>
      </section>
    </Reveal>
  );
}
