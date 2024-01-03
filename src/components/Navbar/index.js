"use client";
import Link from "next/link";
import ThemeToggler from "./themeToggler";

function Navbar() {
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <span className="text-xl font-bold tracking-wide text-gray-500 uppercase dark:text-white">
              Fabrice Madre
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/blog">
                  <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
                    My Blog
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="flex flex-wrap items-center p-3 bg-slate-200 dark:bg-gray-900 ">
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
      </nav> */}
    </>
  );
}

export default Navbar;
