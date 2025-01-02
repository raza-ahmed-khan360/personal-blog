import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tag } from '../../types/blog';

interface BlogPost {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tags: Tag[];
}

const BlogPosts = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      date: 'Sunday, 1 Jan 2023',
      title: 'Bill Walsh leadership lessons',
      description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
      image: '/fb1.png',
      tags: [
        { label: "Leadership", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Management", bgColor: "#fdf2fa", color: "#c11574" },
        { label: "Presentation", bgColor: "#f0f9ff", color: "#026aa2" },
      ],
    },
    {
      id: '2',
      date: 'Sunday, 1 Jan 2023',
      title: 'PM mental models',
      description: 'Mental models are simple expressions of complex processes or relationships.',
      image: '/fb2.png',
      tags: [
        { label: "Product", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Research", bgColor: "#fdf2fa", color: "#c11574" },
        { label: "Frameworks", bgColor: "#f0f9ff", color: "#026aa2" },
      ],
    },
    {
      id: '3',
      date: 'Sunday, 1 Jan 2023',
      title: 'What is Wireframing?',
      description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
      image: '/fb3.png',
      tags: [
        { label: "Design", bgColor: "#f9f5ff", color: "#6840c6" },
        { label: "Research", bgColor: "#fdf2fa", color: "#c11574" },
        { label: "Presentation", bgColor: "#f0f9ff", color: "#026aa2" },
      ],
    }
  ];

  return (
    <div className="w-full bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-gray-900">All blog posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col gap-8">
                <Image
                  width={384}
                  height={240}
                  src={post.image} 
                  alt={post.title}
                  className="w-full aspect-[16/10] object-cover rounded-lg"
                />
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <time className="text-sm font-semibold text-gray-600">
                      {post.date}
                    </time>
                    
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
                        {post.title}
                      </h3>
                    </div>
                    
                    <p className="text-base text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;