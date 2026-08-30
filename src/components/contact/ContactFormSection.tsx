import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactFormSection() {
  return (
    <Reveal>
      <section className="grid grid-cols-1 items-center gap-10 px-5 py-16 md:px-16 lg:grid-cols-[1fr_2fr_1fr] lg:py-20">
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

        <ContactForm />

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
      </section>
    </Reveal>
  );
}
