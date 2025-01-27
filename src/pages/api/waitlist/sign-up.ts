export const prerender = false;

import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";

const turnstileURL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, turnstileToken } = await request.json();

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

    const outcome = await turnstileResponse.json();

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
