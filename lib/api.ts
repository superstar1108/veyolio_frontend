// Small client for the Veyolio API (the separate Veyolio-api project).
// Set NEXT_PUBLIC_API_URL in .env.local — defaults to the local API.
export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000").replace(/\/$/, "");

type ApiError = {
  code: string;
  message: string;
  details?: { fieldErrors?: Record<string, string[] | undefined> };
};

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; message: string; fieldErrors: Record<string, string> };

export async function apiPost<T = unknown>(path: string, body: unknown): Promise<ApiResult<T>> {
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return { ok: false, message: "Can't reach the server. Check your connection and try again.", fieldErrors: {} };
  }

  const json = (await res.json().catch(() => null)) as { data?: T; error?: ApiError } | null;
  if (res.ok && json && "data" in json) return { ok: true, data: json.data as T };

  // Flatten Zod field errors to { field: "first message" } for showing under inputs.
  const fieldErrors: Record<string, string> = {};
  for (const [field, msgs] of Object.entries(json?.error?.details?.fieldErrors ?? {})) {
    if (msgs?.[0]) fieldErrors[field] = msgs[0];
  }
  return {
    ok: false,
    message: json?.error?.message ?? `Request failed (${res.status})`,
    fieldErrors,
  };
}
