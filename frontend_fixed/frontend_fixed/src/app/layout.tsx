import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinical Sanctuary | Hospital Management SaaS",
  description: "A premium, clinical-grade medical management interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface text-on-surface min-h-full">
        {children}
      </body>
    </html>
  );
}
