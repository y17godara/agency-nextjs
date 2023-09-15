import { Provider } from "@/lib";
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
      <Provider>
      <body className={"min-h-screen mx-auto max-w-6xl flex flex-col text-textPrimary bg-paperLight dark:text-paperLight dark:bg-defaultDark "+ inter.className}>
        <div id="__next">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
      </Provider>
    </html>
  );
}
