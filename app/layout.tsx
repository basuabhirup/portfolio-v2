import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Clarity from "@microsoft/clarity";

const projectId = "rrj5qadh5g";

Clarity.init(projectId);

export const metadata: Metadata = {
  title: "Abhirup Basu",
  description: "Full Stack Engineer | (React + Node + Next).js",
  metadataBase: new URL("https://abhirupbasu.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className="max-w-7xl mx-auto bg-background dark:bg-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
