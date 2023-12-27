import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import Card from "../../components/Card";
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
    <div className="flex flex-col items-start p-12">
      <h1 className="text-3xl">My journey to become a better developer</h1>
      <section className="container flex flex-wrap gap-4 max-w-700px">
        {allPosts.map(({ id, date, image, description, title }) => (
          <Link key={id} href={`/blog/${id}`}>
            <Card
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
