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
      <body className={"text-textPrimary bg-paperLight dark:text-paperLight dark:bg-defaultDark "+ inter.className}>
        <div id="__next">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
