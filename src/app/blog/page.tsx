import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { BlogPostCard } from "@/components/shared/BlogPostCard";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Actualités, coulisses et conseils du restaurant.",
  openGraph: {
    title: "Blog",
    description: "Actualités, coulisses et conseils du restaurant.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageHero image="/images/blog/hero.png" title="blog" />

      <section className="flex flex-col items-center gap-12 px-5 py-20 text-ink md:px-16 lg:py-28">
        <Reveal>
          <h2 className="text-center font-display text-2xl uppercase sm:text-3xl">new post</h2>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.1}>
              <BlogPostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
