import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Routes",
  description: "App Routes",
};

export default function RoutesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }