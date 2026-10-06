import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

const steps = [
  ["Discover", "A free call to understand the problem, users and constraints."],
  ["Plan", "Scope, architecture and a fixed milestone plan you can budget for."],
  ["Build", "Weekly demos and written updates. You see progress, not promises."],
  ["Launch & grow", "Deployment, monitoring and ongoing support as you scale."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From first prototype to production at scale."
        intro="Pick one service or combine them. Every engagement is led by a senior engineer and runs on short, visible milestones."
      />

      <section className="container-site space-y-6 pb-10">
        {services.map((s, i) => (
          <Reveal key={s.slug}>
            <article
              id={s.slug}
              className="card group grid scroll-mt-24 items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              {/* Image alternates left/right on desktop */}
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-paper-warm ${
                  i % 2 ? "md:order-last" : ""
                }`}
              >
                <SmartImage
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 768px) 540px, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div>
                <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-ink-soft">{s.summary}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3"><span className="text-accent">✓</span>{p}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span key={t} className="rounded-full bg-ink/5 px-3 py-1 font-mono text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="container-site py-16">
        <Reveal><p className="eyebrow">Process</p></Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 120}>
              <span className="font-mono text-sm text-ink-muted">Step {i + 1}</span>
              <h3 className="mt-2 font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}