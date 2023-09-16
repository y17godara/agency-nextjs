
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import VerticalLine from "./VerticalLine";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import { Locale } from '@/i18n.config'
import LocaleSwitcher from "./LocaleSwitcher";
import { getDictionary } from "@/lib/dictionary";

export const Header = async({ lang }: { lang: Locale }) => {
  const { navigation } = await getDictionary(lang)
  return (
    <>
      <div className="fixed top-0 w-full transition duration-150 ease-in">
        <section className="w-full h-8 flex justify-between items-center p-2 bg-paperLight shadow-sm dark:bg-paperDark dark:shadow-[#424242] md:px-4 xl:px-8">
          <div className="flex items-center gap-2 md:gap-2 xl:gap-4">
            <Link href="#" className="">
              <EnvelopeIcon className="w-5 h-5" />
            </Link>
            <VerticalLine color="gray-400" height="4" />

            <Link href="#" className="">
              <PhoneIcon className="w-4 h-4" />
            </Link>
            <VerticalLine color="gray-400" height="4" />

            <Link href="#" className="">
              <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex items-center gap-1 md:gap-2 xl:gap-4">
            {/* <Link href="/en-En" className="text-sm hover:underline">
              en-US
            </Link> */}
            <LocaleSwitcher />
            <VerticalLine color="gray-400" height="4" />
            <Link href="/auth/login" className="text-sm hover:underline">
              Login
            </Link>
            <VerticalLine color="gray-400" height="4" />
            <ThemeSwitcher />
          </div>
        </section>
        <div className="w-full border-b dark:border-gray-400 "></div>
        <Navbar />
      </div>
    </>
  );
};
