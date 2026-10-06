import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 2026"
      sections={[
        ["Information we collect", "When you contact us or apply for a role, we collect the details you submit, such as your name, email address and message. We may also collect basic, anonymous analytics about how the site is used."],
        ["How we use it", "We use your information only to respond to enquiries, evaluate applications and improve our website. We do not sell your personal data."],
        ["Sharing", "We share data only with service providers that help us operate (for example email and hosting), under appropriate agreements."],
        ["Retention", "We keep enquiries and applications only as long as needed for the purpose they were submitted for."],
        ["Your rights", `You can ask to access, correct or delete your data at any time by emailing ${site.email}.`],
      ]}
    />
  );
}
