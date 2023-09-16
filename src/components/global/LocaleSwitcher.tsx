"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";
import { Locale } from "@/i18n.config";

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative top-0 inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="text-sm hover:underline mb-0 font-bold bg-primaryMain dark:bg-defaultDark px-2 h-8 w-8 text-white focus:outline-none  dark:text-textSecondaryDark"
        >
          {lang}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 bg-white dark:bg-defaultDark w-24 rounded-md shadow-lg   dark:text-textSecondaryDark ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 flex-col"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {i18n.locales.map((locale, index) => (
              <Link
                className="w-full"
                href={redirectedPathName(locale)}
                key={locale}
              >
                <button
                  className="bg-white dark:bg-defaultDark text-defaultDark w-full hover:bg-gray-400 dark:text-paperLight py-2 px-4"
                  role="menuitem"
                  onClick={toggleDropdown}
                >
                  {locale}
                </button>
                {/* HR */}
                {index !== i18n.locales.length - 1 && (
                  <hr className="my-0.5 mx-1 border-gray-300 dark:border-gray-600" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
