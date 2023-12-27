"use client";
import Link from "next/link";
import ThemeToggler from "./themeToggler";

function Navbar() {
  return (
    <>
      <nav className="flex flex-wrap items-center p-3 bg-slate-200 dark:bg-gray-900 ">
        <div className="p-2 mr-4 text-gray-500 rounded-full dark:text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#cbabc8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <Link href="/">
          <span className="text-xl font-bold tracking-wide text-gray-500 uppercase dark:text-white">
            Fabrice Madre
          </span>
        </Link>
        <div className="ml-auto">
          <Link href="/blog">
            <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
              Blog
            </span>
          </Link>
          <Link href="/about">
            <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
              About
            </span>
          </Link>
        </div>
        <ThemeToggler />
      </nav>
    </>
  );
}

export default Navbar;
