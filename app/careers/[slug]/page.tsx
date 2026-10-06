import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ApplyForm from "@/components/ApplyForm";
import { jobs } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const job = jobs.find((j) => j.slug === params.slug);
  return job ? { title: job.title, description: job.summary } : {};
}

function List({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-ink-soft"><span className="text-accent">—</span>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default function JobPage({ params }: Props) {
  const job = jobs.find((j) => j.slug === params.slug);
  if (!job) notFound();

  return (
    <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
      <article>
        <Link href="/careers#open-roles" className="text-sm text-ink-muted hover:text-ink">← All roles</Link>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">{job.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
          <span className="rounded-full bg-ink/5 px-3 py-1">{job.type}</span>
          <span className="rounded-full bg-ink/5 px-3 py-1">{job.location}</span>
        </div>
        <p className="mt-8 text-lg text-ink-soft">{job.about}</p>
        <List title="What you'll do" items={job.responsibilities} />
        <List title="What we're looking for" items={job.requirements} />
        <List title="Nice to have" items={job.niceToHave} />
      </article>
      <aside className="lg:self-start">
        <ApplyForm role={job.title} slug={job.slug} />
      </aside>
    </div>
  );
}
