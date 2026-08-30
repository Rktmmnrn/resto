import Image from "next/image";
import { Play } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function VideoTeaser() {
  return (
    <Reveal>
      <section className="relative flex h-[70vh] min-h-[400px] w-full items-center justify-center overflow-hidden my-[120px]">
        <Image
          src="/images/home/video-teaser.png"
          alt="Aperçu du restaurant"
          fill
          className="object-cover"
        />
        <button
          type="button"
          aria-label="Lancer la vidéo"
          className="relative flex h-24 w-24 items-center justify-center rounded-full bg-ink/90 text-gold transition-transform hover:scale-110"
        >
          <Play size={32} fill="currentColor" />
        </button>
      </section>
    </Reveal>
  );
}
