import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { MenuPreview } from "@/components/home/MenuPreview";
import { VideoTeaser } from "@/components/home/VideoTeaser";
import { Philosophy } from "@/components/home/Philosophy";
import { Stats } from "@/components/shared/Stats";
import { Testimonials } from "@/components/shared/Testimonials";
import { NewsPreview } from "@/components/home/NewsPreview";
import { LocationMap } from "@/components/shared/LocationMap";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <MenuPreview />
      <VideoTeaser />
      <Philosophy />
      <Stats variant="home" />
      <Testimonials />
      <NewsPreview />
      <LocationMap />
    </>
  );
}
