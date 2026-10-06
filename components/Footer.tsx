import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-site grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm text-paper/60">{site.description}</p>
        </div>
        <div>
          <p className="eyebrow !text-paper/40">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="text-paper/70 hover:text-paper">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow !text-paper/40">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/70">
            <li>{site.address}</li>
            <li><a href={`mailto:${site.email}`} className="hover:text-paper">{site.email}</a></li>
            <li><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-paper">{site.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-paper">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-paper">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
