export const prerender = false;

import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";

const turnstileURL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type SignUpRequest = {
  email: string;
  turnstileToken: string;
};

export const POST: APIRoute = async ({ request, locals }) => {
  const { env } = locals.runtime;

  try {
    const { email, turnstileToken } = await request.json<
      Partial<SignUpRequest>
    >();

    if (!turnstileToken) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please verify you're human",
        }),
        { status: 401 }
      );
    }

    if (!getSecret("TURNSTILE_SECRET_KEY")) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Turnstile secret key not found",
        }),
        { status: 500 }
      );
    }

    const turnstileResponse = await fetch(turnstileURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: getSecret("TURNSTILE_SECRET_KEY"),
        response: turnstileToken,
      }),
    });

    const outcome = await turnstileResponse.json<any>();

    if (!outcome.success) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please verify you're human",
        }),
        { status: 401 }
      );
    }

    if (!email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please enter your email",
        }),
        { status: 400 }
      );
    }

    await env.DATABASE.exec("CREATE TABLE IF NOT EXISTS waitlist (email TEXT)");

    const existing = await env.DATABASE.prepare(
      "SELECT * FROM waitlist WHERE email = ?"
    )
      .bind(email)
      .first();

    if (existing) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "You're already on the waitlist",
        }),
        { status: 200 }
      );
    }

    await env.DATABASE.prepare("INSERT INTO waitlist (email) VALUES (?)")
      .bind(email)
      .run();

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong",
      }),
      { status: 500 }
    );
  }
};
