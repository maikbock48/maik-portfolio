import { NextResponse } from "next/server";
import { logConsent } from "@/lib/consent-store";

export async function POST(request) {
  const body = await request.json();
  const { id, categories } = body || {};

  if (!id || typeof categories !== "object") {
    return NextResponse.json({ error: "invalid payload" }, { status: 400 });
  }

  const entry = {
    id,
    categories,
    timestamp: new Date().toISOString(),
  };

  const result = await logConsent(entry);
  return NextResponse.json(result);
}
