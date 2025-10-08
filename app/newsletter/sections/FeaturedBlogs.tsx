import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getAllPosts } from '../../utils/blog';

const BlogPosts = () => {
  const blogPosts = getAllPosts();

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
                  src={post.coverImage || "/featured.png"}
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