import Link from "next/link";

export default function CtaBanner({
  title = "Have an idea? Let's build it into a product that scales.",
  button = "Start a conversation",
  href = "/contact",
}: { title?: string; button?: string; href?: string }) {
  return (
    <section className="container-site py-20">
      <div className="rounded-3xl bg-ink px-8 py-14 text-paper sm:px-14">
        <h2 className="h2 max-w-2xl">{title}</h2>
        <Link href={href} className="btn mt-8 bg-paper text-ink hover:bg-paper-warm">{button} →</Link>
      </div>
    </section>
  );
}
