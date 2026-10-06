"use client";

import { useState } from "react";
import { apiPost } from "@/lib/api";
import FieldError from "./FieldError";

type State = "idle" | "sending" | "sent" | "error";

type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
  textarea?: boolean;
};

// All fields are required — the API enforces the same rules.
const fields: Field[] = [
  { name: "name", label: "Full name", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "+1 555 010 0000", autoComplete: "tel" },
  { name: "location", label: "Location", placeholder: "City, Country", autoComplete: "address-level2" },
  { name: "address", label: "Full address", placeholder: "Street, city, state / province, postal code, country", autoComplete: "street-address", textarea: true },
  { name: "link", label: "LinkedIn, GitHub or portfolio", type: "url", placeholder: "https://linkedin.com/in/you" },
  { name: "resumeUrl", label: "Resume link", type: "url", placeholder: "https://drive.google.com/…", hint: "Google Drive, Dropbox or similar — make sure anyone with the link can view it." },
  { name: "introVideoUrl", label: "Intro video link", type: "url", placeholder: "https://www.loom.com/share/…", hint: "A 1–2 minute video introducing yourself (Loom, YouTube unlisted, or Drive)." },
  { name: "message", label: "Why are you a good fit?", textarea: true },
];

const isUrl = (v: string) => /^https?:\/\/\S+\.\S+/.test(v);

function validate(data: Record<string, string>) {
  const errors: Record<string, string> = {};
  for (const f of fields) if (!data[f.name]?.trim()) errors[f.name] = "Required";
  if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) errors.email ??= "Enter a valid email";
  if (data.phone && !/^\+?[0-9\s\-().]{7,20}$/.test(data.phone)) errors.phone ??= "Enter a valid phone number";
  for (const k of ["link", "resumeUrl", "introVideoUrl"])
    if (data[k] && !isUrl(data[k])) errors[k] ??= "Enter a full URL starting with https://";
  return errors;
}

export default function ApplyForm({ role, slug }: { role: string; slug: string }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    const clientErrors = validate(data);
    if (Object.keys(clientErrors).length) {
      setFieldErrors(clientErrors);
      setError("Please fix the highlighted fields.");
      setState("error");
      return;
    }

    setState("sending");
    setError("");
    setFieldErrors({});
    const result = await apiPost("/api/applications", { ...data, role, jobSlug: slug });

    if (result.ok) return setState("sent");
    setError(result.message);
    setFieldErrors(result.fieldErrors);
    setState("error");
  }

  if (state === "sent")
    return (
      <div className="card">
        <h2 className="text-xl font-semibold">Application received</h2>
        <p className="mt-2 text-ink-soft">Thanks! We read every application and reply within 7 days.</p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="card space-y-4" noValidate>
      <div>
        <h2 className="text-xl font-semibold">Apply for this role</h2>
        <p className="mt-1 text-xs text-ink-muted">All fields are required.</p>
      </div>

      {fields.map((f) => {
        const err = fieldErrors[f.name];
        const common = {
          id: `apply-${f.name}`,
          name: f.name,
          placeholder: f.placeholder,
          autoComplete: f.autoComplete,
          required: true,
          "aria-invalid": !!err,
          "aria-describedby": f.hint ? `apply-${f.name}-hint` : undefined,
          className: `input ${err ? "!border-red-600" : ""} ${f.textarea ? "min-h-[96px]" : ""}`,
        };
        return (
          <div key={f.name}>
            <label htmlFor={common.id} className="mb-1 block text-sm font-medium">
              {f.label} <span className="text-red-700" aria-hidden>*</span>
            </label>
            {f.textarea ? <textarea {...common} /> : <input {...common} type={f.type ?? "text"} />}
            {f.hint && !err && <p id={`apply-${f.name}-hint`} className="mt-1 text-xs text-ink-muted">{f.hint}</p>}
            <FieldError message={err} />
          </div>
        );
      })}

      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button className="btn-primary w-full justify-center" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Submit application"}
      </button>
      {state === "error" && <p className="text-sm text-red-700">{error}</p>}
    </form>
  );
}