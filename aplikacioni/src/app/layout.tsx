import type { ReactNode } from "react";
import Pwa from "@/components/Pwa";
// @ts-expect-error Next.js handles this stylesheet import at runtime.
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="sq">
      <body><Pwa />{children}</body>
    </html>
  );
}
