import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../../types/blog";
import { post } from "../../data/post";

interface BlogPost {
  id: string;
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tags: Tag[];
}

function AllBlogs() {
  const blogPosts: BlogPost[] = [
    post
  ];

  return (
    <div className="py-10 bg-white flex flex-col items-center gap-12">
      <div className="w-full max-w-7xl px-4 sm:px-8 flex flex-col gap-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          All Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/post/${post.slug}`}
              className="group flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  height={240}
                  width={384}
                  src={post.image}
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
                <p className="text-sm text-gray-600">
                  {post.excerpt}
                </p>
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
  );
}

export default AllBlogs;