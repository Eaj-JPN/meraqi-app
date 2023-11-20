import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Meraqi",
  description: "Meraqi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={courier.className}>{children}</body>
    </html>
  );
}
