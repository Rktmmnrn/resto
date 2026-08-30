export type MenuCategory = "special menu" | "drinks" | "seafood" | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: MenuCategory;
  description?: string;
}

export const menuCategories: MenuCategory[] = [
  "special menu",
  "drinks",
  "seafood",
  "desserts",
];

// Contenu "lorem ipsum" repris tel quel de l'ancien site, réparti sur les 4 catégories
// pour que le filtre ait vraiment quelque chose à filtrer. À remplacer par ta vraie carte.
function placeholderItems(category: MenuCategory, count: number): MenuItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${category.replace(/\s+/g, "-")}-${i + 1}`,
    name: "Lorem Ipsum",
    price: "24$",
    category,
    description: "Lorem ipsum dolor sit amet consectetur.",
  }));
}

export const menuItems: MenuItem[] = [
  ...placeholderItems("special menu", 6),
  ...placeholderItems("drinks", 6),
  ...placeholderItems("seafood", 6),
  ...placeholderItems("desserts", 6),
];
