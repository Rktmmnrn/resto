import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="flex h-full flex-col gap-4">
      <div className="relative aspect-[4/3] w-full">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
        <div className="absolute left-0 top-0 flex flex-col items-center bg-ink px-3 py-2 text-white">
          <span className="font-display text-2xl text-gold">{post.date.day}</span>
          <p className="text-xs">{post.date.month}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-stone pb-3 text-xs uppercase text-ink/70">
        <span>● by {post.author}</span>
        <span>● {post.categories.join(", ")}</span>
      </div>
      <h3 className="text-left font-display text-lg text-ink">{post.title}</h3>
      <p className="text-sm text-ink/70">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-auto w-fit border-b border-ink pb-1 font-body text-sm uppercase tracking-wide"
      >
        read more
      </Link>
    </article>
  );
}
