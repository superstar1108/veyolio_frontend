import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/CtaBanner";
import { posts } from "@/lib/data";
import { formatDate } from "@/lib/format";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="container-site max-w-3xl py-16">
        <Link href="/blog" className="text-sm text-ink-muted hover:text-ink">← All posts</Link>
        <p className="eyebrow mt-8">{post.category}</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-4 font-mono text-xs text-ink-muted">{formatDate(post.date)} · {post.readTime}</p>
        <div className="prose-site mt-10 text-lg">
          {post.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
