# Veyolio — Software Studio Website

A multi-page company website built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS**.
Structure: Home · Services · About · Work · Careers (+ job pages with apply form) · Blog (+ posts) · Contact · Privacy · Terms.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 18.17+.

## Customising

| What | Where |
|---|---|
| Brand name, email, phone, address | `lib/site.ts` |
| Services, projects, jobs, blog posts, tech stack | `lib/data.ts` |
| Colors & fonts | `tailwind.config.ts`, `app/layout.tsx` |
| Logo & favicon | `components/Logo.tsx`, `app/icon.svg` |
| Legal text (templates — get them reviewed) | `app/privacy/page.tsx`, `app/terms/page.tsx` |

Adding a job or blog post = add an object to the array in `lib/data.ts`. Pages, sitemap and routes are generated automatically.

## Forms

The contact form and job applications POST to `app/api/contact/route.ts`.
- With no config, submissions are logged to the server console.
- Set `CONTACT_WEBHOOK_URL` in `.env.local` (Slack / Zapier / Make webhook) to forward them, or replace the handler with an email service such as Resend or SendGrid.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) — no extra config needed. Update `site.url` in `lib/site.ts` to your domain for correct SEO metadata and sitemap.

## Project structure

```
app/
  page.tsx               Home
  services/ about/ work/ contact/ privacy/ terms/
  careers/page.tsx       Job list
  careers/[slug]/        Job detail + apply form
  blog/page.tsx          Post list
  blog/[slug]/           Post detail
  api/contact/route.ts   Form handler
  sitemap.ts robots.ts   SEO
components/              Header, Footer, forms, shared UI
lib/                     site config + content data
```
