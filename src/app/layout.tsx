import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  alternates: siteConfig.siteUrl ? { canonical: "/" } : undefined,
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  openGraph: {
    description: siteConfig.description,
    title: siteConfig.title,
    type: "website",
    url: siteConfig.siteUrl ?? undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full bg-[var(--background)]">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
