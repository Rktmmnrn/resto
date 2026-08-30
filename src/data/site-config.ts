// Informations générales du restaurant — modifie ces valeurs, le reste du site s'appuiera dessus.
//
// ⚠️ Repris tel quel de l'ancien site, deux points à trancher avec toi :
//  - le nom du restaurant n'a jamais été renseigné ("logo" est un placeholder partout)
//  - les horaires diffèrent selon la page : "monday-sunday 7h-21h" dans le panneau latéral,
//    mais "Mon-Sat 7h-21h / Sunday Closed" sur la page contact. J'ai gardé la version contact
//    (plus précise) — dis-moi si c'est la bonne.

export const siteConfig = {
  name: "Logo", // TODO: remplacer par le vrai nom du restaurant
  tagline: "restaurant.bar.coffee.bistro",
  description:
    "Restaurant, bar, coffee & bistro in Utica, Pennsylvania. Book your table for a refined dining experience.",
  url: "https://example.com", // TODO: remplacer par le vrai domaine une fois déployé
  contact: {
    email: "kenzi.lawson@example.com",
    phone: "(316) 555-0116",
    address: {
      line1: "3517 W. Gray St.",
      line2: "Utica, Pennsylvania 57867",
      // Champs structurés (pour le JSON-LD / SEO local) — mêmes infos que line1/line2 ci-dessus
      city: "Utica",
      region: "PA",
      postalCode: "57867",
      country: "US",
    },
  },
  hours: [
    { days: "Monday – Saturday", time: "7:00 – 21:00" },
    { days: "Sunday", time: "Closed" },
  ],
  social: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
