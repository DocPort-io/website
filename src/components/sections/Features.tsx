import {
  ScanLine,
  GitBranch,
  Wrench,
  Leaf,
  FileCheck2,
  History,
} from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "Instant Access",
    description:
      "One scan of the QR code on any piece of equipment delivers the correct documents immediately — no logins, no searching, no delays.",
    accent: true,
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "DocPort maintains a single authoritative source. When documents are updated, everyone gets the latest version automatically.",
    accent: false,
  },
  {
    icon: Wrench,
    title: "Field-Optimised",
    description:
      "Designed for the people who actually need it. Critical documentation is accessible on any device, even in challenging environments.",
    accent: false,
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description:
      "Replace bulky paper archives with a lean digital system. Less printing, less waste, and a lower environmental footprint across your operations.",
    accent: false,
  },
  {
    icon: FileCheck2,
    title: "All Document Types",
    description:
      "Electrical schematics, compliance certificates, maintenance history, technical specifications, etc... Everything tied to the equipment it belongs to.",
    accent: false,
  },
  {
    icon: History,
    title: "Maintenance History",
    description:
      "Keep a complete, verifiable service record on each asset. Know what was done, when, and by whom, every time.",
    accent: false,
  },
];

export default function Features() {
  return (
    <section
      id="how-it-works"
      className="border-b-2 border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-heading font-bold uppercase tracking-widest text-main">
            Features
          </p>
          <h2 className="mb-4 text-3xl font-heading font-bold sm:text-4xl">
            Everything You Need, Right Where You Need It
          </h2>
          <p className="text-lg font-base leading-relaxed text-foreground/70">
            DocPort is built around a simple idea: the right documentation
            should always be attached to the equipment it belongs to.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, accent }) => (
            <div
              key={title}
              className={`group relative rounded-base border-2 border-border p-6 shadow-[4px_4px_0px_0px_#000] transition-all hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0px_0px_#000] ${
                accent ? "bg-main" : "bg-secondary-background"
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-base border-2 border-border shadow-[2px_2px_0px_0px_#000] ${
                  accent ? "bg-secondary-background" : "bg-main"
                }`}
              >
                <Icon
                  className={`h-6 w-6 ${
                    accent ? "text-main" : "text-main-foreground"
                  }`}
                />
              </div>
              <h3
                className={`mb-2 text-lg font-heading font-bold ${
                  accent ? "text-main-foreground" : "text-foreground"
                }`}
              >
                {title}
              </h3>
              <p
                className={`font-base leading-relaxed ${
                  accent ? "text-main-foreground/80" : "text-foreground/70"
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
