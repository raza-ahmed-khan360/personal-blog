import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Tag {
  label: string;
  bgColor: string;
  color: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  tags: Tag[];
}

import { getAllPosts } from "../../utils/blog";

function RecentPost() {
  const recentPosts = getAllPosts().slice(0, 3); // Show only the latest 3 posts

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 items-start">
            <h2 className="text-3xl font-bold text-gray-900 text-left">Recent blog posts</h2>
            <p className="text-gray-600 text-left">The latest industry news, interviews, technologies, and resources.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
               <Link 
              key={post.id} 
              href={`/post/${post.slug}`}
              className="group flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  height={240}
                  width={384}
                  src={post.coverImage || "/featured.png"}
                  alt={post.title}
                  className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-4 p-4">
                <p className="text-sm font-semibold text-gray-600">
                  {post.author} • {post.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 leading-6 group-hover:text-purple-600">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-gray-600">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-2xl text-sm font-medium transition-colors hover:opacity-80"
                      style={{
                        backgroundColor: tag.bgColor,
                        color: tag.color,
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;