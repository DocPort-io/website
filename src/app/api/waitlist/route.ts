import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";
import z from "zod";

export const runtime = "edge";

const emailSchema = z.email().max(255);

export async function POST(request: Request) {
  let email: string;

  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validateEmailResult = emailSchema.safeParse(email);

  if (!email || !validateEmailResult.success) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    await env.DB.prepare(
      "INSERT INTO waitlist (email, created_at) VALUES (?, datetime('now'))"
    )
      .bind(validateEmailResult.data)
      .run();

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes("UNIQUE")) {
      return NextResponse.json({ success: true });
    }

    console.error("D1 insert error:", message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
