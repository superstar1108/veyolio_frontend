import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h1 mt-4">Page not found</h1>
      <Link href="/" className="btn-primary mt-8">Back home</Link>
    </section>
  );
}
