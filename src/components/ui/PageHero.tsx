import Image from "next/image";

interface PageHeroProps {
  image: string;
  title: string;
  imageAlt?: string;
}

/**
 * Le hero "image pleine largeur + grand titre centré" est identique sur
 * menu/about/blog/contact dans l'ancien site (seule l'image et le titre
 * changent) — un seul composant partagé plutôt que 4 copies.
 */
export function PageHero({ image, title, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex h-[100vh] min-h-[500px] w-full items-center justify-center overflow-hidden text-white z-40">
      <Image src={image} alt={imageAlt ?? title} fill priority className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-ink/50" />
      <h1 className="font-display text-4xl uppercase sm:text-5xl md:text-6xl">{title}</h1>
    </section>
  );
}
