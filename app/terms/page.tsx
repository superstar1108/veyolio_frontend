import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="September 2026"
      sections={[
        ["Use of this website", `By using this website you agree to these terms. Content is provided by ${site.name} for general information only.`],
        ["Intellectual property", `All content, branding and design on this site belong to ${site.name} unless otherwise stated.`],
        ["Client work", "Project engagements are governed by a separate written agreement signed by both parties."],
        ["Liability", "The website is provided “as is” without warranties. We are not liable for losses arising from its use."],
        ["Contact", `Questions about these terms? Email ${site.email}.`],
      ]}
    />
  );
}
