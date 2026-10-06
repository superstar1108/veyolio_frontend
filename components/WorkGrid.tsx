"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import SmartImage from "./SmartImage";
export default function WorkGrid() {
  const industries = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.industry === filter);

  return (
    <section className="container-site pb-10">
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by industry">
        {industries.map((i) => (
          <button
            key={i}
            role="tab"
            aria-selected={filter === i}
            onClick={() => setFilter(i)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${filter === i ? "bg-ink text-paper" : "border border-ink/15 hover:border-ink"}`}
          >
            {i}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((p) => (
          <article key={p.slug} className="card group flex flex-col">
            <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl bg-paper-warm">
              <SmartImage
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="eyebrow">{p.industry}</span>
            <h2 className="mt-2 text-2xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-ink-soft">{p.summary}</p>
            <p className="mt-4 border-l-2 border-accent pl-3 text-sm font-medium">{p.result}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-ink/5 px-3 py-1 font-mono text-xs">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
