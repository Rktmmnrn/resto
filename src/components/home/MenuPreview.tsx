import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { menuCategories, menuItems } from "@/data/menu-items";

export function MenuPreview() {
  const preview = menuItems.slice(0, 6);

  return (
    <section className="flex flex-col items-center gap-10 bg-ink px-5 py-20 text-white md:px-0 lg:py-28">
      <Reveal className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="taste the best that surprise you"
          title="our special menu"
        />
        <p className="max-w-md text-center text-sm text-white/80">
          Lorem ipsum dolor sit amet consectetur. Pretium felis egestas aliquet et ut netus
          placerat turpis. Ut ullamcorper condimentum tincidunt orci quis.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`border px-6 py-3 font-body text-xs uppercase tracking-wide transition-colors border-gold text-gold hover:bg-gold hover:text-ink`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal
        delay={0.1}
        className="relative grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_2fr_1fr]"
      >
        <div className="relative hidden lg:flex items-center justify-center w-full h-full">
          <span className="w-4/5 h-5/6 flex border border-gold"></span>
          <figure className="absolute h-[70%] w-full">
            <Image
              src="/images/home/menu-left.png"
              alt="Plat du menu"
              fill
              className="object-cover" />
          </figure>
        </div>

        <div className="flex flex-col items-center gap-6 bg-ink-soft px-6 py-10 md:px-14">
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {preview.map((item) => (
              <div key={item.id}>
                <div className="flex items-center justify-between gap-3 font-display text-lg uppercase">
                  <span>{item.name}</span>
                  <span className="h-px flex-1 border-t border-white/40" />
                  <span>{item.price}</span>
                </div>
                {item.description && (
                  <p className="mt-1 text-sm text-white/70">{item.description}</p>
                )}
              </div>
            ))}
          </div>
          <Button href="/menu" variant="gold">
            view all menu
          </Button>
        </div>

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
  );
}
