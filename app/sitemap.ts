import type { MetadataRoute } from "next";
import { jobs, posts } from "@/lib/data";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...nav.map((n) => n.href), "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p === "/" ? "" : p}` })),
    ...jobs.map((j) => ({ url: `${site.url}/careers/${j.slug}` })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
