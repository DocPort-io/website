"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Early access before public launch",
  "Shape the product with your feedback",
  "Development updates straight to your inbox",
  "No spam, unsubscribe any time",
];

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (res.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("Could not reach the server. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="waitlist"
      className="bg-main border-b-2 border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — copy */}
          <div>
            <p className="mb-2 text-sm font-heading font-bold uppercase tracking-widest text-main-foreground/60">
              Early Access
            </p>
            <h2 className="mb-4 text-3xl font-heading font-bold text-main-foreground sm:text-4xl">
              Be Among the First Forward-Thinking Professionals
            </h2>
            <p className="mb-8 max-w-lg font-base text-lg leading-relaxed text-main-foreground/80">
              DocPort is actively being built. Join the waitlist and help shape
              a product that finally makes field documentation effortless.
            </p>

            <ul className="space-y-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 font-base font-medium text-main-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="rounded-base border-2 border-border bg-secondary-background p-8 shadow-[6px_6px_0px_0px_#000]">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-main shadow-[2px_2px_0px_0px_#000]">
                  <CheckCircle2 className="h-8 w-8 text-main-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold">
                  You&apos;re on the list!
                </h3>
                <p className="font-base text-foreground/70">
                  We&apos;ll reach out when it&apos;s your turn. Keep an eye on
                  your inbox.
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-2 text-2xl font-heading font-bold">
                  Join the Waitlist
                </h3>
                <p className="mb-6 font-base text-foreground/70">
                  Drop your email and we&apos;ll keep you in the loop.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="waitlist-email"
                      className="mb-1.5 block text-sm font-heading font-bold"
                    >
                      Work Email
                    </label>
                    <Input
                      id="waitlist-email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Join the Waitlist"}
                    {status !== "loading" && <ArrowRight className="h-4 w-4" />}
                  </Button>

                  {status === "error" && (
                    <p className="text-sm font-base text-red-600">
                      {errorMessage}
                    </p>
                  )}

                  <p className="text-center text-xs font-base text-foreground/50">
                    No spam. Unsubscribe any time.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
