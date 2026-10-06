import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { posts } from "@/lib/data";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHero eyebrow="Blog" title="Notes on building software products." intro="Lessons from shipping for startups — engineering, AI and process." />
      <section className="container-site grid gap-5 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card group flex flex-col transition-colors hover:border-ink/40">
            <span className="eyebrow">{p.category}</span>
            <h2 className="mt-3 text-xl font-semibold group-hover:underline group-hover:underline-offset-4">{p.title}</h2>
            <p className="mt-3 flex-1 text-sm text-ink-soft">{p.excerpt}</p>
            <p className="mt-6 font-mono text-xs text-ink-muted">{formatDate(p.date)} · {p.readTime}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
