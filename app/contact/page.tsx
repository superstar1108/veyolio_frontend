import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you're building." intro="We reply to every message within one business day." />
      <section className="container-site grid gap-12 pb-20 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm />
        <div className="space-y-8">
          {[
            ["Email", site.email, `mailto:${site.email}`],
            ["Phone", site.phone, `tel:${site.phone.replace(/[^+\d]/g, "")}`],
          ].map(([label, value, href]) => (
            <div key={label}>
              <p className="eyebrow">{label}</p>
              <a href={href} className="mt-2 block text-lg hover:underline">{value}</a>
            </div>
          ))}
          <div>
            <p className="eyebrow">Office</p>
            <p className="mt-2 text-lg">{site.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
