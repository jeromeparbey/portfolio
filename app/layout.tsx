// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PARBEY Komlan Jerome | Portfolio",
  description: "Développeur Full Stack Next.js Node.js TypeScript",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#0a0a0c] text-white">
        {children} 
      </body>
    </html>
  );
}
