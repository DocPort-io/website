import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, ArrowRight, FileText, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background border-b-2 border-border">
      {/* Decorative grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <Badge className="self-start">Early Access</Badge>

            <h1 className="text-4xl font-heading font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bridge the Gap Between Physical Equipment and Digital Docs
            </h1>

            <p className="max-w-lg text-lg font-base leading-relaxed text-foreground/80">
              DocPort attaches a QR code to any piece of equipment. Scan it in
              the field and get instant access to the right documentation.
              Always up to date, always available.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#waitlist">
                <Button size="lg" className="gap-2">
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button size="lg" variant="neutral">
                  See How It Works
                </Button>
              </a>
            </div>
          </div>

          {/* Right — visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Flow diagram */}
              <div className="flex items-center gap-4">
                {/* QR card */}
                <div className="flex h-40 w-36 flex-col items-center justify-center gap-3 rounded-base border-2 border-border bg-secondary-background shadow-[4px_4px_0px_0px_#000]">
                  <QrCode className="h-16 w-16 text-main" strokeWidth={1.5} />
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-foreground/60">
                    Equipment
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-main shadow-[2px_2px_0px_0px_#000]">
                    <Zap className="h-5 w-5 text-main-foreground" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-foreground" />
                </div>

                {/* Docs card */}
                <div className="flex h-40 w-36 flex-col items-center justify-center gap-3 rounded-base border-2 border-border bg-secondary-background shadow-[4px_4px_0px_0px_#000]">
                  <FileText className="h-16 w-16 text-main" strokeWidth={1.5} />
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-foreground/60">
                    Documents
                  </span>
                </div>
              </div>

              {/* Labels */}
              <div className="mt-4 flex justify-between text-sm font-heading font-bold">
                <span className="w-36 text-center">Scan the tag</span>
                <span className="w-10" />
                <span className="w-36 text-center">Get the docs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
