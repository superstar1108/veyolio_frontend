import { NextResponse } from "next/server";

// Handles both the contact form and job applications.
// Set CONTACT_WEBHOOK_URL (e.g. Slack, Zapier, Make) to forward submissions,
// or swap this for an email provider such as Resend / SendGrid.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot hit — silently ignore

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
    return NextResponse.json({ error: "Name, valid email and message are required." }, { status: 422 });
  }

  const payload = { ...body, receivedAt: new Date().toISOString() };
  const hook = process.env.CONTACT_WEBHOOK_URL;

  if (hook) {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: `New ${body.kind ?? "message"} from ${name} <${email}>`, ...payload }),
    }).catch(() => null);
    if (!res?.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  } else {
    console.log("[contact] submission", payload);
  }

  return NextResponse.json({ ok: true });
}
