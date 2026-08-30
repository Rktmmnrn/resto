import Image from "next/image";
import { ScrollCarousel } from "@/components/ui/ScrollCarousel";
import { Reveal } from "@/components/ui/Reveal";

const images = [
  "/images/about/gallery-1.jpeg",
  "/images/about/gallery-2.jpeg",
  "/images/about/gallery-3.jpeg",
];

export function Gallery() {
  return (
    <Reveal className="">
      <section className="px-0 py-16 lg:py-20">
        <ScrollCarousel type="dark">
          {images.map((src) => (
            <div key={src} className="relative shrink-0 aspect-[3/4] h-[300px] w-[82vw] sm:w-[60vw] md:h-[350px] lg:h-[400px] lg:w-[46vw]">
              <Image src={src} alt="Photo du restaurant" fill className="object-cover" />
            </div>
          ))}
        </ScrollCarousel>
      </section>
    </Reveal>
  );
}
