import type { Metadata } from "next";
import { Tenor_Sans, Josefin_Sans } from "next/font/google";
import { MotionConfig } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

// Police "display" : titres, logo, prix — un seul poids (400) chez Tenor Sans
const tenorSans = Tenor_Sans({
  variable: "--font-tenor",
  subsets: ["latin"],
  weight: "400",
});

// Police "body" : texte courant, nav, boutons — variable de 300 à 600
const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const title = "Restaurant, Bar, Coffee, Bistro";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | Logo",
  },
  description: siteConfig.description,
  openGraph: {
    title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
};

// Schema.org attend des jours individuels (pas "Monday – Saturday" tel quel) —
// à ajuster si siteConfig.hours change un jour.
const OPEN_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Schema.org Restaurant — permet à Google d'afficher horaires/adresse/tel directement
// dans les résultats de recherche. Rien à faire ici quand tu changeras siteConfig.
function RestaurantJsonLd() {
  const [openHours] = siteConfig.hours; // "Monday – Saturday : 7:00 – 21:00" (Sunday = closed, omis)
  const [opens, closes] = openHours.time.split("–").map((t) => t.trim());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.line1,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: OPEN_DAYS,
        opens,
        closes,
      },
    ],
    sameAs: siteConfig.social.map((s) => s.href).filter((href) => href !== "#"),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${tenorSans.variable} ${josefinSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <RestaurantJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:font-body focus:text-xs focus:uppercase focus:text-ink"
        >
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
