import { Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    icon: Phone,
    title: "contact us",
    lines: [siteConfig.contact.phone, siteConfig.contact.email],
  },
  {
    icon: MapPin,
    title: "address here",
    lines: [siteConfig.contact.address.line1, siteConfig.contact.address.line2],
  },
  {
    icon: Clock,
    title: "opening time",
    lines: siteConfig.hours.map((h) => `${h.days} : ${h.time}`),
  },
];

export function ContactInfo() {
  return (
    <section className="grid grid-cols-1 gap-10 px-5 py-16 text-center text-ink sm:grid-cols-3 md:px-16 lg:py-20">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 0.1} className="flex flex-col items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
            <card.icon size={22} />
          </span>
          <h3 className="font-display text-lg uppercase">{card.title}</h3>
          {card.lines.map((line) => (
            <p key={line} className="text-sm text-ink/70">
              {line}
            </p>
          ))}
        </Reveal>
      ))}
    </section>
  );
}
