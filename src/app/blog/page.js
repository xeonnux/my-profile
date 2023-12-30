import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import BlogCard from "../../components/BlogCard";
import Link from "next/link";

export async function generateStaticParams() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

const index = () => {
  const getPosts = () => {
    const allPostsData = getSortedPostsData();
    return allPostsData;
  };
  const allPosts = getPosts();
  return (
    <div className="flex flex-col items-center p-12 bg-white dark:bg-gray-700">
      <h1 className="text-3xl text-gray-500 dark:text-white">
        My journey as a software developer
      </h1>
      <p className="text-gray-500 dark:text-white">
        I write about things I learn and projects I build.
      </p>
      <section className="container flex flex-wrap items-center justify-center p-5 max-w-700px">
        {allPosts.map(({ id, date, image, description, title }) => (
          <Link className="max-w-[75%]" key={id} href={`/blog/${id}`}>
            <BlogCard
              key={id}
              title={title}
              description={description}
              image={image}
              date={date}
              id={id}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default index;
