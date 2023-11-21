import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { cn } from "@/lib/utils";
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
      <body className={cn(courier.className, "bg-no-repeat bg-cover bg-[url('/BG.jpg')]")}>{children}</body>
    </html>
  );
}
