import { Trash2, History, FolderSearch, Leaf } from "lucide-react";

const features = [
  {
    title: "Lost Documentation",
    description:
      "Time is often wasted searching for documents that have been lost or thrown away",
    icon: Trash2,
  },
  {
    title: "Outdated Information",
    description: "Outdated versions cause costly mistakes, rework, and delays",
    icon: History,
  },
  {
    title: "Liability",
    description:
      "Lost or damaged documents cost money or create liability issues",
    icon: FolderSearch,
  },
  {
    title: "Environmental Impact",
    description: "The environmental impact keeps growing with paper waste",
    icon: Leaf,
  },
];

export const Problem = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Paper documentation is holding you back
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
