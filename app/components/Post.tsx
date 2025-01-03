import Image from 'next/image';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/blog';
import Newsletter from './Newsletter';

interface PostProps {
  post: BlogPost;
}

export default function Post({ post }: PostProps) {
  return (
    <article className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Date */}
        <div className="text-purple-600 text-sm font-semibold mb-4">
          {formatDate(post.date)}
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-2 text-gray-600 mb-8">
          <span className="font-medium">{post.author}</span>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-600">{post.content}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-2xl text-sm font-medium"
              style={{
                backgroundColor: tag.bgColor,
                color: tag.color,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Newsletter */}
        <Newsletter />
      </div>
    </article>
  );
} 