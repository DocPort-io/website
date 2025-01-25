import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary py-20 px-4 relative overflow-hidden">
      {Array.from({ length: 128 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-[60px] h-[85px] bg-white/10 shadow-sm animate-fall"
          style={{
            animationDelay: `${Math.random() * -15}s`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <div className="max-w-6xl mx-auto text-center z-10">
        <h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          DocPort.io
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0"
          style={{ animationDelay: "400ms" }}
        >
          Scan here. Find anywhere.
        </p>
        <Button
          className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-lg text-lg animate-fade-up opacity-0"
          style={{ animationDelay: "600ms" }}
          asChild
        >
          <a href="#waitlist">
            Join Waitlist <ArrowRight className="ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};
