const colors: Record<string, string> = {
  Live: "bg-emerald-100 text-emerald-800",
  Deployed: "bg-emerald-100 text-emerald-800",
  Building: "bg-amber-100 text-amber-800",
  Agent: "bg-sky-100 text-sky-800",
};

export default function StatusBadge({ status }: { status: string }) {
  const cls = colors[status] ?? "bg-ink/5 text-ink-soft";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] ${cls}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
