import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import StatusBadge from "@/components/StatusBadge";
import { projectStatus, services, stackLayers, values } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-site grid items-center gap-12 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="eyebrow">Software studio · Remote worldwide</p>
          <h1 className="h1 mt-5">We turn ideas into software products that scale.</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            We design and build web apps, AI tools and cloud platforms for startups and small businesses in SaaS,
            EdTech, e-commerce and healthcare.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Start a project →</Link>
            <Link href="/work" className="btn-ghost">See our work</Link>
          </div>
        </Reveal>

        {/* Photo with floating project-status card */}
        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-paper-warm sm:aspect-[5/4] lg:aspect-[4/5]">
            <SmartImage
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
              alt="Team working together on laptops"
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="animate-slow-zoom object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>

          <div className="card animate-float relative mx-4 -mt-24 font-mono text-sm shadow-[0_24px_60px_-24px_rgba(20,20,15,0.45)] sm:mx-8 lg:absolute lg:-left-12 lg:bottom-10 lg:mx-0 lg:mt-0 lg:w-[360px]">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-ink-muted">~/projects</span>
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              </span>
            </div>
            <ul className="divide-y divide-ink/10">
              {projectStatus.map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-3 py-2.5">
                  <span className="truncate">{p.name}</span>
                  <StatusBadge status={p.status} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="border-y border-ink/10 bg-paper-warm">
        <Reveal className="container-site py-16">
          <p className="max-w-4xl text-2xl font-medium leading-snug sm:text-3xl">
            Every project starts with a working system, not a slide deck —
            <span className="text-ink-muted"> architecture, APIs and deployment are planned from day one.</span>
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section className="container-site py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="h2 mt-3">Services</h2>
          </div>
          <Link href="/services" className="text-sm underline underline-offset-4">All services →</Link>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 120}>
              <Link href={`/services#${s.slug}`} className="card group block h-full transition-colors hover:border-ink/40">
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl bg-paper-warm">
                  <SmartImage
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-mono text-xs backdrop-blur">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">
                  {s.title}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </h3>
                <p className="mt-2 text-ink-soft">{s.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.stack.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full bg-ink/5 px-3 py-1 font-mono text-xs">{t}</span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="container-site py-12">
        <Reveal><p className="eyebrow">Why teams choose us</p></Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="border-t border-ink pt-5">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="container-site py-20">
        <Reveal>
          <p className="eyebrow">How we build</p>
          <h2 className="h2 mt-3">A stack designed in layers</h2>
        </Reveal>
        <Reveal delay={100} className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-white">
          {stackLayers.map((l, i) => (
            <div key={l.layer} className={`grid gap-3 p-6 sm:grid-cols-[200px_1fr] ${i ? "border-t border-ink/10" : ""}`}>
              <span className="font-mono text-sm text-ink-muted">{String(i + 1).padStart(2, "0")} · {l.layer}</span>
              <div className="flex flex-wrap gap-2">
                {l.items.map((it) => (
                  <span key={it} className="rounded-lg border border-ink/10 px-3 py-1.5 text-sm">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}