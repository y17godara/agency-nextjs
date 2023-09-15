"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import VerticalLine from "./VerticalLine";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
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
          <Link href="/en-En" className="text-sm hover:underline">
              en-US
            </Link>
            <VerticalLine color="gray-400" height="4" />
            <Link href="/auth/login" className="text-sm hover:underline">
              Login
            </Link>
            <VerticalLine color="gray-400" height="4" />
            <ThemeSwitcher />
          </div>
        </section>
        <div className="w-full border-b dark:border-gray-400 "></div>
        <nav className="max-w-full h-16 flex justify-between items-center p-2 bg-paperLight shadow-sm dark:bg-paperDark dark:shadow-[#424242] md:px-4 xl:px-8">
          <div className="flex items-center justify-between w-full lg:w-9/12 lg:mx-auto">
            {/* Navbar */}
            <div className="flex items-center">
              <Link href="/"
                className="bold text-defaultDark hover:text-gray-800 focus:outline-none dark:text-defaultLight dark:hover:text-paperLight dark:focus:text-paperLight"
              >
                LOGO
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-800 focus:outline-none dark:text-defaultLight dark:hover:text-paperLight dark:focus:text-paperLight"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Mobile Menu */}
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } md:hidden mt-2 py-2 bg-white shadow-lg rounded-lg`}
            >
              {/* Your mobile menu items go here */}
              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
