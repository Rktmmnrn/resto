import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AboutIntro } from "@/components/shared/AboutIntro";
import { Gallery } from "@/components/about/Gallery";
import { Stats } from "@/components/shared/Stats";
import { PrivateEvents } from "@/components/about/PrivateEvents";
import { ChefPhilosophy } from "@/components/about/ChefPhilosophy";
import { Testimonials } from "@/components/shared/Testimonials";

export const metadata: Metadata = {
  title: "About",
  description: "Découvrez notre histoire, notre philosophie culinaire et notre équipe.",
  openGraph: {
    title: "About",
    description: "Découvrez notre histoire, notre philosophie culinaire et notre équipe.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero image="/images/about/hero.png" title="about us" />

      <section className="px-5 py-20 md:px-16 lg:py-28">
        <Reveal>
          <AboutIntro image="/images/about/intro.jpg" ctaLabel="book a table" ctaHref="/contact" />
        </Reveal>
      </section>

      <Gallery />
      <Stats variant="about" />
      <PrivateEvents />
      <ChefPhilosophy />
      <Testimonials />
    </>
  );
}
