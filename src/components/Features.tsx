import { Zap, Shield, Clock, Leaf } from "lucide-react";

const features = [
  {
    title: "Instant Access",
    description:
      "Scan a QR code on your equipment to instantly access its documentation",
    icon: Zap,
  },
  {
    title: "Version Control",
    description: "One source of truth for all your technical documentation",
    icon: Shield,
  },
  {
    title: "Built for the Field",
    description: "Access critical information right where you need it",
    icon: Clock,
  },
  {
    title: "Sustainable Choice",
    description: "Reduce paper waste while improving accessibility",
    icon: Leaf,
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Here's what we're building
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-gray-200 hover:border-secondary transition-colors animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
