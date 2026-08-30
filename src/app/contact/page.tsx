import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { LocationMap } from "@/components/shared/LocationMap";

export const metadata: Metadata = {
  title: "Contact",
  description: "Réservez une table ou contactez-nous pour toute question.",
  openGraph: {
    title: "Contact",
    description: "Réservez une table ou contactez-nous pour toute question.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero image="/images/blog/hero.png" title="contact" />
      <ContactInfo />
      <ContactFormSection />
      <LocationMap />
    </>
  );
}
