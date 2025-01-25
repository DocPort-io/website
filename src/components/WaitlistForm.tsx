import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for joining!",
        description: "We'll keep you updated on our progress.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 bg-primary text-white" id="waitlist">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up opacity-0">
          Help shape the future of technical documentation
        </h2>
        <p
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          We're looking for forward-thinking professionals to help us build the
          perfect solution.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 animate-fade-up opacity-0"
          style={{ animationDelay: "400ms" }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border-gray-700"
            required
          />
          <Button className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 rounded-lg text-lg">
            Join Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
};
