import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhirup Basu",
  description: "Full Stack Engineer | (React + Next + Node).js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
