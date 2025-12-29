"use client";
import { posts } from "@/data/posts";

export const BlogTitle = ({ slug }: { slug: string }) => {
  const post = posts.find((post) => post.slug === slug);

  return (
    <div className="flex flex-col gap-2 mb-8">
      <p className="text-lg text-gray-500 font-bold dark:text-gray-400">
        {"Miguel's Blog"}
      </p>
      <div className="flex items-center gap-6 justify-between">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
          {post?.title}
        </h1>
      </div>
    </div>
  );
};
