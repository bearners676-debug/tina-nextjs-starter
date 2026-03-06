import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B-earners - Digital Products Store",
  description: "Curated digital products designed to inspire creativity, boost productivity, and transform your daily routine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
