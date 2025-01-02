import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "../../types/blog";

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
    {
      id: "1",
      slug: "bill-walsh-leadership",
      author: "Alec Whitten",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/b1.png",
      tags: [
        { label: "Leadership", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Management", bgColor: "#fdf2fa", color: "#c11574" },
      ],
    },
    {
      id: "2",
      slug: "pm-mental-models",
      author: "Demi Wilkinson",
      date: "1 Jan 2023",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/b2.png",
      tags: [
        { label: "Product", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Research", bgColor: "#fdf2fa", color: "#c11574" },
        { label: "Frameworks", bgColor: "#f0f9ff", color: "#026aa2" },
      ],
    },
    {
      id: "3",
      slug: "what-is-wireframing",
      author: "Candice Wu",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/b3.png",
      tags: [
        { label: "Design", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Research", bgColor: "#fdf2fa", color: "#c11574" },
      ],
    },
    {
      id: "4",
      slug: "collaboration-makes-better-designers",
      author: "Natali Craig",
      date: "1 Jan 2023",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/b4.png",
      tags: [
        { label: "Design", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Research", bgColor: "#fdf2fa", color: "#c11574" },
      ],
    },
    {
      id: "5",
      slug: "top-10-javascript-frameworks",
      author: "Drew Cano",
      date: "1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/b5.png",
      tags: [
        { label: "Software Development", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Tools", bgColor: "#fdf2fa", color: "#c11574" },
        { label: "SaaS", bgColor: "#f0f9ff", color: "#026aa2" },
      ],
    },
    {
      id: "6",
      slug: "creating-better-cx-community",
      author: "Orlando Diggs",
      date: "1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/b6.png",
      tags: [
        { label: "Podcasts", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Customer Success", bgColor: "#fdf2fa", color: "#c11574" },
      ],
    },
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
                  {post.description}
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