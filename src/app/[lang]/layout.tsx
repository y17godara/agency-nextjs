import { Provider, cn } from "@/lib";
import React from "react";
import { Header, Footer } from "@/components";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Locale, i18n } from "@/i18n.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App",
  description: "App",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          " text-textPrimary bg-paperLight dark:text-textSecondaryDark dark:bg-defaultDark ",
          inter.className
        )}
      >
        <Provider>
          <div id="__next" className="relative">
            <header className="relative z-[999]">
              <Header lang={params.lang} />
              {/* <Header land={params.lang} />  */}
            </header>
            <main className="w-full pt-24">{children}</main>
            <footer className="w-full">
              <Footer />
            </footer>
          </div>
        </Provider>
      </body>
    </html>
  );
}
