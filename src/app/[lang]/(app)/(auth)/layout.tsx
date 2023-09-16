import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Auth",
  description: "App Auth",
};

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }