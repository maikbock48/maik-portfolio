import { NextResponse } from "next/server";
import { logConsent } from "@/lib/consent-store";
import { checkRateLimit } from "@/lib/rate-limit";

const ID_RE = /^[a-zA-Z0-9-]{1,64}$/;

function validate(body) {
  const { id, categories } = body || {};

  if (typeof id !== "string" || !ID_RE.test(id)) return false;
  if (typeof categories !== "object" || categories === null) return false;
  if (typeof categories.essential !== "boolean") return false;
  if (typeof categories.analytics !== "boolean") return false;
  if (Object.keys(categories).length !== 2) return false;

  return true;
}

export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (!body || !validate(body)) {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed } = await checkRateLimit(`ratelimit:consent:${ip}`, 20, 600);
  if (!allowed) {
    return NextResponse.json({ error: "too many requests" }, { status: 429 });
  }

  const entry = {
    id: body.id,
    categories: { essential: body.categories.essential, analytics: body.categories.analytics },
    timestamp: new Date().toISOString(),
  };

  const result = await logConsent(entry);
  return NextResponse.json(result);
}
