import { Provider, cn } from "@/lib";
import React from "react";
import { Header, Footer } from "@/components";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App",
  description: "App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          " text-textPrimary bg-paperLight dark:text-textSecondaryDark dark:bg-defaultDark ",
          inter.className
        )}
      >
        <Provider>
          <div id="__next" className="relative">
            <header className="relative z-[999]">
              <Header />
            </header>
            <main className="w-full pt-24">
              {children}
            </main>
            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}
