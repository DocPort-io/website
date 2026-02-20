import { FolderX, Clock, ShieldAlert, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    icon: FolderX,
    title: "Lost Documentation",
    description:
      "Manuals, schematics, and certificates get misplaced, damaged, or thrown away. When you need them most, they're nowhere to be found.",
  },
  {
    icon: Clock,
    title: "Outdated Information",
    description:
      "Teams work from old revisions without knowing it. Obsolete documents cause costly mistakes, rework, and dangerous misunderstandings.",
  },
  {
    icon: ShieldAlert,
    title: "Liability & Compliance Risk",
    description:
      "Missing or unverifiable documentation creates legal and financial exposure, especially in regulated industries where audits are common.",
  },
  {
    icon: Leaf,
    title: "Environmental Waste",
    description:
      "Paper-heavy maintenance systems generate mountains of waste. Printing, re-printing, and disposing of outdated binders adds up fast.",
  },
];

export default function Problems() {
  return (
    <section className="border-b-2 border-border bg-secondary-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-heading font-bold uppercase tracking-widest text-main">
            The Problem
          </p>
          <h2 className="mb-4 text-3xl font-heading font-bold sm:text-4xl">
            Paper Documentation Is Costing You More Than You Think
          </h2>
          <p className="text-lg font-base leading-relaxed text-foreground/70">
            Every technician, facility manager, and field engineer has felt the
            pain. The right doc is never where you need it.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {problems.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-base border-2 border-border bg-main shadow-[2px_2px_0px_0px_#000]">
                  <Icon className="h-6 w-6 text-main-foreground" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-base leading-relaxed text-foreground/70">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
