import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MenuExplorer } from "@/components/menu/MenuExplorer";

export const metadata: Metadata = {
  title: "Menu",
  description: "Découvrez notre carte : plats signature, boissons, fruits de mer et desserts.",
  openGraph: {
    title: "Menu",
    description: "Découvrez notre carte : plats signature, boissons, fruits de mer et desserts.",
    url: "/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      <PageHero image="/images/menu/hero.png" title="menu" />

      <section className="flex flex-col items-center gap-10 px-5 pt-20 text-white md:px-0 lg:pt-28 overflow-hidden">
        <div className="hidden lg:flex w-full relative">
          <figure className="absolute flex w-[30%] h-80 left-[-40px] top-[-200px] z-30">
            <Image
              src="/images/menu/top-left.png"
              alt="deco 1"
              fill
              className="object-cover" />
          </figure>
          <figure className="absolute flex w-[23%] h-80 right-[-40px] top-[-200px] z-30">
            <Image
              src="/images/menu/top-right.png"
              alt="deco 2"
              fill
              className="object-cover" />
          </figure>
        </div>

        <Reveal className="flex flex-col items-center gap-10">
          <SectionHeading
            eyebrow="taste the best that surprise you"
            title="our special menu"
            tone="light"
          />
          <p className="max-w-md text-center text-md text-ink/80 font-light">
            Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
            placerat turpis. Ut ullamcorper condimentum tincidunt orci quis.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="grid w-full grid-cols-1 items-start gap-8 px-5 lg:grid-cols-[1fr_2fr_1fr] lg:px-0"
        >
          <div className="relative hidden lg:flex items-center justify-center w-full h-full">
            <span className="w-4/5 h-5/6 flex border border-gold"></span>
            <figure className="absolute flex h-[70%] w-full left-0">
              <Image
                src="/images/home/menu-left.png"
                alt="Plat du menu"
                fill
                className="object-cover" />
            </figure>
          </div>

          <MenuExplorer />

          <div className="relative hidden lg:flex items-center justify-center w-full h-full">
            <span className="w-4/5 h-5/6 flex border border-gold"></span>
            <figure className="absolute h-[70%] w-full">
              <Image
                src="/images/home/menu-right.png"
                alt="Plat du menu"
                fill
                className="object-cover" />
            </figure>
          </div>
        </Reveal>
      </section>
    </>
  );
}
