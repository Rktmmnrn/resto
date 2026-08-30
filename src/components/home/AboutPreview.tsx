import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site-config";

export function AboutPreview() {
  return (
    <section className="flex flex-col gap-20 px-5 py-20 text-ink md:px-16 lg:py-28">
      <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-[583px]">
          <Image
            src="/images/home/about-1.png"
            alt="Intérieur du restaurant"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <SectionHeading
            eyebrow="about restaurant"
            title="our commitment to quality and taste"
            align="left"
            tone="light"
          />
          <p className="text-sm text-ink/80 sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
            placerat turpis. Ut ullamcorper condimentum tincidunt orci quis ullamcorper. Arcu ut
            tincidunt egestas mauris mi. Ultrices egestas rhoncus nec morbi sed pellentesque.
          </p>
          <p className="text-sm text-ink/80 sm:text-base">
            Tellus tellus in neque id. Mauris praesent consectetur orci porta ut elementum.
          </p>
          <Button href="/about" variant="ink" className="mt-2">
            read more about us
          </Button>
        </div>
      </Reveal>

      <Reveal className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm text-ink/80 sm:text-base">
            We&apos;re delighted to serve you. Check out our opening hours below.
          </p>
          <p className="text-sm text-ink/80 sm:text-base">
            Whether you&apos;re joining us for a quick lunch, a cozy dinner, or weekend brunch, we
            look forward to making your visit memorable!
          </p>
          <p className="text-sm text-ink/80 sm:text-base">
            For reservations or special events, feel free to contact us.
          </p>
          <Button href="/contact" variant="ink" className="mt-2">
            book a table
          </Button>
        </div>

        <div className="relative flex h-[400px] md:h-[500px] lg:h-[600px] lg:items-center">
          <div className="absolute flex aspect-square h-4/5 lg:h-full w-3/5 bottom-0 right-0">
            <Image
              src="/images/home/about-2.png"
              alt="Notre table"
              fill
              className="object-cover right-0"
            />
          </div>
          <div className="flex flex-col gap-4 bg-ink text-white absolute justify-center items-center left-0 w-3/5 h-4/5 p-4 lg:p-8 lg:h-3/5">
            <h3 className="font-display text-lg uppercase text-gold">opening time hours</h3>
            <div className="flex flex-col gap-3">
              {siteConfig.hours.map((h) => (
                <div key={h.days} className="flex items-center justify-between gap-4 text-lg font-light">
                  <span>{h.days}</span>
                  <span className="h-px flex-1 border-t border-white/40" />
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
