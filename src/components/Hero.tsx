import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-primary py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
                    DocPort.io
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
                    Scan here. Find anywhere.
                </p>
                <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-lg text-lg animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
                    Join Waitlist <ArrowRight className="ml-2" />
                </Button>
            </div>
        </section>
    )
}
