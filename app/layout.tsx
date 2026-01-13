import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "João Morais | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and Spring Boot. Founder at Flavibyte. Building enterprise software at Prozis.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "Portugal",
    "Software Engineer",
  ],
  authors: [{ name: "João Morais" }],
  openGraph: {
    title: "João Morais | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and Spring Boot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
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
