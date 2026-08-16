import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { AnnouncerProvider } from "@/components/a11y/Announcer";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://aanuni.com"),
  title: {
    default: "aanuni — Innovation, Made Graceful.",
    template: "%s — aanuni",
  },
  description:
    "aanuni designs graceful, dependable consumer technology — power banks, chargers, cables and connected accessories built for everyday life.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="bg-surface-0 text-midnight-800 flex min-h-full flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AnnouncerProvider>
          <Header />
          {children}
          <Footer />
        </AnnouncerProvider>
      </body>
    </html>
  );
}
