export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="container-site pb-12 pt-16 sm:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="h1 mt-4 max-w-4xl">{title}</h1>
      {intro && <p className="mt-6 max-w-2xl text-lg text-ink-soft">{intro}</p>}
    </section>
  );
}
