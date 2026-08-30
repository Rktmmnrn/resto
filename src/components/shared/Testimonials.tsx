import { ScrollCarousel } from "@/components/ui/ScrollCarousel";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    id: "t1",
    title: "elegant dinning experience",
    quote:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "Sophia R.",
  },
  {
    id: "t2",
    title: "elegant dinning experience",
    quote:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "Sophia R.",
  },
];

export function Testimonials() {
  return (
    <Reveal>
      <section className="px-5 py-16 md:px-16 lg:py-20">
        <ScrollCarousel type="light">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex w-full shrink-0 flex-col items-center gap-4 border border-gold px-8 py-10 text-center sm:w-[calc(50%-10px)]"
            >
              <span className="font-display text-6xl text-gold">&ldquo;</span>
              <h4 className="font-body text-sm uppercase text-ink">{t.title}</h4>
              <p className="text-sm font-light text-ink/80">{t.quote}</p>
              <p className="text-sm font-medium uppercase text-ink">{t.author}</p>
            </article>
          ))}
        </ScrollCarousel>
      </section>
    </Reveal>
  );
}
