"use client";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div className="p-2 mr-4 text-gray-500 rounded-full min-h-32 dark:text-white">
        <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
          {'(c) '}copyrigth reserved
        </span>
        {/* <Link href="/credits">
          <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
            Credits
          </span>
        </Link>

        <Link href="/">
          <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
            Home
          </span>
        </Link>
        <Link href="/blog">
          <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
            Blog
          </span>
        </Link>
        <Link href="/about">
          <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
            About
          </span>
        </Link> */}
      </div>
    </>
  );
};

export default index;
