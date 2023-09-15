"use client";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import {
  VerticalLine
} from "@/components";
import { EnvelopeIcon, PhoneIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full transition duration-150 ease-in">
        <section className="w-full h-8 flex justify-between items-center p-2 bg-paperLight shadow-sm dark:bg-paperDark dark:shadow-[#424242]">
          <div className="flex items-center gap-2">
            <Link href="#" className="">
              <EnvelopeIcon className="w-5 h-5" />
            </Link>
            {/* <VerticalLine color="textSecondary" height="5" /> */}
            <Link href="#" className="">
              <PhoneIcon className="w-4 h-4" />
            </Link>
            <Link href="#" className="">
              <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
            </Link>
          </div>
        <div>
        <ThemeSwitcher />
        </div>
        </section>
        <nav>
          Navbar
        </nav>
      </div>
    </>
  );
};
