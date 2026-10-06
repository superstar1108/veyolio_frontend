import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import { values } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const stats = [
  ["40+", "Products shipped"],
  ["12", "Countries served"],
  ["100%", "Remote team"],
  ["4.9/5", "Average client rating"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`${site.name} is a small team of engineers who build like owners.`}
        intro="We started as freelancers who kept getting asked to rescue half-finished products. So we built a studio around doing it right the first time."
      />
      <section className="container-site grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l} className="card">
            <p className="text-4xl font-semibold tracking-tight">{n}</p>
            <p className="mt-2 text-sm text-ink-muted">{l}</p>
          </div>
        ))}
      </section>
      <section className="container-site grid gap-12 py-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="h2 mt-3">Independent by design</h2>
        </div>
        <div className="prose-site">
          <p>We are fully independent — no investors, no pressure to upsell. That lets us recommend the smallest thing that works, even when it means a smaller project for us.</p>
          <p>Our team works remotely across several time zones, which means your project keeps moving while you sleep and you wake up to written progress updates.</p>
          <p>We work mostly with founders and small businesses in SaaS, EdTech, e-commerce and healthcare.</p>
        </div>
      </section>
      <section className="container-site py-12">
        <p className="eyebrow">What we value</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="border-t border-ink pt-5">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner title="Want to work with us — or for us?" button="See open roles" href="/careers" />
    </>
  );
}
