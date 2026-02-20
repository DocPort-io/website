import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-secondary-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/favicon.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-base border-2 border-border"
          />
          <span className="text-lg font-heading font-bold">DocPort.io</span>
        </Link>

        <p className="text-sm font-base text-foreground/60">
          © {new Date().getFullYear()} DocPort.io. All rights reserved.
        </p>

        <div className="flex gap-4 text-sm font-base">
          <a
            href="https://app.docport.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-main transition-colors"
          >
            App
          </a>
        </div>
      </div>
    </footer>
  );
}
