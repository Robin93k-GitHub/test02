import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClient } from "@/lib/mongodb";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !links.some((l) => l.id === id)) {
    return NextResponse.json({ error: "invalid link id" }, { status: 400 });
  }

  const client = getClient();
  if (!client) {
    return NextResponse.json({ error: "database not configured" }, { status: 503 });
  }

  try {
    const db = (await client).db(process.env.MONGODB_DB ?? "linknamu");
    await db
      .collection("clicks")
      .updateOne({ linkId: id }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "failed to record click" }, { status: 500 });
  }
}
