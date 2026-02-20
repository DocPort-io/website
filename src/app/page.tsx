import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Features from "@/components/sections/Features";
import Waitlist from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Features />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
