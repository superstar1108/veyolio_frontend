"use client";

import { useState } from "react";
import { apiPost } from "@/lib/api";
import FieldError from "./FieldError";

const budgets = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k+", "Not sure yet"];
type State = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    setFieldErrors({});

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = await apiPost("/api/contact", data);

    if (result.ok) return setState("sent");
    setError(result.message);
    setFieldErrors(result.fieldErrors);
    setState("error");
  }

  if (state === "sent")
    return (
      <div className="card">
        <h2 className="text-2xl font-semibold">Thanks — message received.</h2>
        <p className="mt-2 text-ink-soft">We'll be in touch within one business day.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="card grid gap-4 sm:grid-cols-2" noValidate>
      <div>
        <input className="input" name="name" placeholder="Your name" required />
        <FieldError message={fieldErrors.name} />
      </div>
      <div>
        <input className="input" name="email" type="email" placeholder="Email" required />
        <FieldError message={fieldErrors.email} />
      </div>
      <div className="sm:col-span-2">
        <input className="input" name="company" placeholder="Company (optional)" />
        <FieldError message={fieldErrors.company} />
      </div>
      <select className="input sm:col-span-2" name="budget" defaultValue="">
        <option value="">Estimated budget</option>
        {budgets.map((b) => <option key={b}>{b}</option>)}
      </select>
      <div className="sm:col-span-2">
        <textarea className="input min-h-[160px]" name="message" placeholder="Tell us about your project" required />
        <FieldError message={fieldErrors.message} />
      </div>
      {/* Honeypot field to catch bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="sm:col-span-2">
        <button className="btn-primary" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send message →"}
        </button>
        {state === "error" && <p className="mt-3 text-sm text-red-700">{error}</p>}
      </div>
    </form>
  );
}
