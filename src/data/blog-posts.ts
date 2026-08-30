export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  categories: string[];
  date: { day: string; month: string };
  image: string;
}

// Les 6 articles de l'ancien site. Le texte "excerpt" (identique partout dans la
// source, repris du témoignage Sophia R.) et 2 titres avec coquilles ("employe",
// "consistancy") ont été corrigés. Contenu toujours à remplacer par de vrais articles.
export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-design-a-small-restaurant",
    title: "How to design a small restaurant",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Casual Dinning", "Coffees"],
    date: { day: "05", month: "OCT 24" },
    image: "/images/home/blog-1.jpeg",
  },
  {
    slug: "how-real-restaurants-approach-benefits",
    title: "How real restaurants approach benefits",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Food", "Industry Expertise"],
    date: { day: "05", month: "OCT 24" },
    image: "/images/home/blog-2.jpeg",
  },
  {
    slug: "food-is-the-foundation-of-true",
    title: "Food is the foundation of true",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Food", "Restaurants"],
    date: { day: "05", month: "OCT 24" },
    image: "/images/home/blog-3.jpeg",
  },
  {
    slug: "10-ways-to-improve-restaurant-employee-experience",
    title: "10 ways to improve restaurant employee experience",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Industry Expertise"],
    date: { day: "05", month: "OCT 24" },
    image: "/images/blog/post-4.jpeg",
  },
  {
    slug: "white-castle-among-business",
    title: "White castle among business",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Industry Expertise", "Pizzerias"],
    date: { day: "06", month: "OCT 24" },
    image: "/images/blog/post-5.jpeg",
  },
  {
    slug: "how-to-lock-in-beverage-consistency",
    title: "How to lock in beverage consistency",
    excerpt:
      "Every bite was a masterpiece. The ambiance was warm, and the service made me feel like royalty. This is my go-to spot for any celebration",
    author: "John Doe",
    categories: ["Casual Dinning", "Restaurant"],
    date: { day: "06", month: "OCT 24" },
    image: "/images/blog/post-6.jpeg",
  },
];
