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

function RecentPost() {
  const recentPosts: Post[] = [
    {
      id: 1,
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/Post1.png",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      tags: [
        { label: "Design", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Research", bgColor: "#fdf2fa", color: "#c11574" },
      ],
    },
    // Add more posts as needed
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-gray-900">Recent blog posts</h2>
            <p className="text-gray-600">The latest industry news, interviews, technologies, and resources.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link href={`/post/${post.id}`} key={post.id} className="group">
                <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-0.5 rounded-2xl text-sm font-medium transition-colors hover:opacity-80"
                          style={{
                            backgroundColor: tag.bgColor,
                            color: tag.color,
                          }}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;