import { FileText, Settings, Shield, Wrench } from "lucide-react";

const useCases = [
  {
    title: "Electrical Schematics",
    description: "Access cabinet documentation instantly with a simple scan",
    icon: FileText,
  },
  {
    title: "Technical Specifications",
    description:
      "Critical specifications available when and where you need them",
    icon: Settings,
  },
  {
    title: "Compliance Documents",
    description:
      "Never lose track of important certificates and compliance documents",
    icon: Shield,
  },
  {
    title: "Maintenance Records",
    description: "Keep maintenance history at your fingertips",
    icon: Wrench,
  },
];

export const UseCases = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Built for real-world needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="flex items-start space-x-4 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <useCase.icon className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
