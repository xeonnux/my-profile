"use client";
import Link from "next/link";

const index = () => {
  return (
    <>
      <div className="p-2 mt-6 mr-4 text-gray-500 rounded-full min-h-12 dark:text-white">
        <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
          {'(c) '}copyrigth reserved
        </span>
        {/* <Link href="#">
          <span className="px-4 py-2 mr-2 text-gray-500 uppercase dark:text-white">
            Credits
          </span>
        </Link> */}
      </div>
    </>
  );
};

export default index;
