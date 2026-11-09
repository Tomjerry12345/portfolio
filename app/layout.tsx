import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andri Alfiandi — Frontend & Full-Stack Developer",
  description:
    "Portfolio of Andri Alfiandi: web and mobile apps built with React, Next.js, TypeScript and Flutter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
