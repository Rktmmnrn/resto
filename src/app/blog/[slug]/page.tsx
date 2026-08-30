import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <section className="relative flex h-[50vh] min-h-[320px] w-full items-end overflow-hidden text-white">
        <Image src={post.image} alt={post.title} fill priority className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-ink/60" />
        <div className="mx-5 mb-10 md:mx-16">
          <p className="text-xs uppercase text-gold">
            {post.date.day} {post.date.month}
          </p>
          <h1 className="mt-2 font-display text-3xl uppercase sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <Reveal className="mx-auto flex max-w-2xl flex-col gap-6 px-5 py-16 text-ink md:py-20">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-stone pb-4 text-xs uppercase text-ink/70">
          <span>By {post.author}</span>
          <span>{post.categories.join(", ")}</span>
        </div>
        <p className="text-base leading-relaxed text-ink/80">{post.excerpt}</p>
        <p className="text-sm italic text-ink/50">
          (Le contenu complet de cet article n&apos;a pas encore été rédigé — remplace ce
          paragraphe par le vrai texte quand il sera prêt.)
        </p>
        <Link
          href="/blog"
          className="mt-4 w-fit border-b border-ink pb-1 text-sm uppercase tracking-wide"
        >
          ← back to blog
        </Link>
      </Reveal>
    </article>
  );
}
