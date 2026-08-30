import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { navItems, siteConfig } from "@/data/site-config";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  youtube: FaYoutube,
};

export function Footer() {
  return (
    <footer className="mt-20 bg-ink px-5 text-white lg:mt-[120px] lg:px-16">
      <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-display text-2xl uppercase">{siteConfig.name}</span>
            <span className="text-[5px] uppercase">{siteConfig.tagline}</span>
          </div>
          <p className="text-sm">{siteConfig.description}</p>
          <div className="flex gap-4">
            {siteConfig.social.map((s) => {
              const Icon = socialIcons[s.icon as keyof typeof socialIcons];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="transition-transform hover:scale-125 border border-gold text-gold p-2 rounded-full"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-gold pt-3 sm:border-none sm:pt-0">
          <p className="uppercase text-gold">Quick Links</p>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:text-gold">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-gold pt-3 sm:border-none sm:pt-0">
          <p className="uppercase text-gold">Location</p>
          <p className="text-sm text-gold">Address</p>
          <p className="text-sm">
            {siteConfig.contact.address.line1} {siteConfig.contact.address.line2}
          </p>
          <p className="text-sm text-gold">Booking &amp; Contact</p>
          <p className="text-sm">
            {siteConfig.contact.email}
            <br />
            {siteConfig.contact.phone}
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-gold pt-3 sm:border-none sm:pt-0">
          <p className="uppercase text-gold">Latest News</p>
          <p className="text-sm text-gold">
            Register your email to not miss any news and offers from us
          </p>
          {/* TODO phase contact */}
          <form className="flex items-center border border-gold px-3 py-2">
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full bg-transparent text-sm outline-none placeholder:text-white"
            />
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-gold py-5 text-xs lg:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Policy</Link>
        </div>
      </div>
    </footer>
  );
}
