export default function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: [string, string][] }) {
  return (
    <article className="container-site max-w-3xl py-16">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-3 font-mono text-xs text-ink-muted">Last updated {updated}</p>
      <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
        Template text — have this reviewed by a lawyer before publishing.
      </p>
      <div className="prose-site mt-10">
        {sections.map(([h, t]) => (
          <section key={h}>
            <h2 className="mb-3 mt-8 text-xl font-semibold text-ink">{h}</h2>
            <p>{t}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
