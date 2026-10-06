import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Products we've designed, built and scaled."
        intro="A few recent projects. Client names are changed where we're under NDA."
      />
      <WorkGrid />
      <CtaBanner />
    </>
  );
}
