import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DocPort.io - Documentation, Instantly",
  description:
    "DocPort connects physical equipment to digital documents via QR codes. Technicians get instant access to the right documentation, right where they need it.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "DocPort.io - Documentation, Instantly",
    description:
      "Bridge the gap between physical equipment and digital documentation. Scan a QR code, get the right docs instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
