import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-secondary-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/favicon.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-base border-2 border-border"
            priority
          />
          <span className="text-xl font-heading font-bold">DocPort.io</span>
        </Link>

        <a href="#waitlist">
          <Button size="sm">Join the Waitlist</Button>
        </a>
      </div>
    </header>
  );
}
