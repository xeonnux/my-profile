"use client";
import ThemeToggler from "../Navbar/themeToggler";

import Link from "next/link";

const index = () => {
  return (
    <div className="flex items-center justify-between p-2 mt-6 mr-4 text-gray-500 min-h-12 dark:text-white">
      <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
        &copy; 2023 copyright reserved
      </span>
      <ThemeToggler />

      {/* <Link href="#">
          <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
            Credits
          </span>
        </Link> */}
    </div>
  );
};

export default index;
