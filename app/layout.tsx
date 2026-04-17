import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gigadroom — From Idea to Reality",
  description:
    "Gigadroom is a full-service consulting firm building AI systems, digital infrastructure, and world-class products for ambitious businesses.",
  keywords: [
    "AI consulting",
    "digital transformation",
    "product design",
    "app development",
    "website development",
    "Gigadroom",
  ],
  openGraph: {
    title: "Gigadroom — From Idea to Reality",
    description:
      "We build AI systems, digital presence, and end-to-end products for businesses ready to lead.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#0F0F0F] antialiased">
        {children}
      </body>
    </html>
  );
}
