"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="max-w-full h-16 flex justify-between items-center p-2 bg-paperLight shadow-sm dark:bg-paperDark dark:shadow-[#424242] md:px-4 xl:px-8">
        <div className="flex items-center justify-between w-full lg:w-9/12 lg:mx-auto">
          {/* Navbar */}
          <div className="flex items-center">
            <Link
              href="/"
              className="bold text-defaultDark font-bold hover:text-gray-800 focus:outline-none dark:text-defaultLight dark:hover:text-paperLight dark:focus:text-paperLight"
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
    </>
  );
}
