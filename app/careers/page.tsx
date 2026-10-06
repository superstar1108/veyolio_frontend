import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import PageHero from "@/components/PageHero";
import { jobs } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Careers" };

const principles = [
  ["Own it end to end", "You'll see your work through from idea to production — no handing off and hoping."],
  ["Async over meetings", "Written updates, clear docs and focused time. Meetings only when they help."],
  ["Speak up early", "Raising a concern on day one beats fixing a surprise on day thirty."],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build products that matter, from anywhere."
        intro="All positions are fully remote and open to applicants worldwide."
      />

      <section className="container-site grid gap-10 py-10 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">How we work</p>
          <h2 className="h2 mt-3">Small team, real ownership</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {principles.map(([t, d]) => (
            <div key={t} className="border-t border-ink pt-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-10">
        <div className="relative flex aspect-[21/9] items-end overflow-hidden rounded-3xl bg-ink p-8 text-paper">
          <SmartImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
            alt="Team collaborating around laptops"
            fill
            priority
            sizes="(min-width: 1200px) 1136px, 100vw"
            className="object-cover"
          />
          {/* Dark fade so the white text stays readable on the photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <p className="relative max-w-md text-lg">Work from wherever you do your best thinking.</p>
        </div>
      </section>

      <section className="container-site py-16" id="open-roles">
        <p className="eyebrow">Open roles · {jobs.length}</p>
        <h2 className="h2 mt-3">Current openings</h2>
        <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {jobs.map((j) => (
            <li key={j.slug}>
              <Link href={`/careers/${j.slug}`} className="group grid gap-3 py-7 md:grid-cols-[2fr_1fr_auto] md:items-center">
                <div>
                  <h3 className="text-xl font-semibold group-hover:underline group-hover:underline-offset-4">{j.title}</h3>
                  <p className="mt-1 text-ink-soft">{j.summary}</p>
                </div>
                <div className="font-mono text-xs text-ink-muted">
                  <p>{j.type}</p>
                  <p className="mt-1">{j.location}</p>
                </div>
                <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-ink-soft">
          Don't see your role? Send your CV and a short note to{" "}
          <a href={`mailto:${site.careersEmail}`} className="font-medium text-ink underline underline-offset-4">{site.careersEmail}</a>.
        </p>
      </section>
    </>
  );
}