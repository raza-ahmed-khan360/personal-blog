import { BlogPost } from '../types/blog';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../utils/blog';

interface RelatedPostsProps {
  currentPost: BlogPost;
  posts: BlogPost[];
}

export default function RelatedPosts({ currentPost, posts }: RelatedPostsProps) {
  // Filter out current post and get posts with matching tags
  const relatedPosts = posts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.tags.some(tag => 
        currentPost.tags.some(currentTag => currentTag.label === tag.label)
      )
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
      <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Link 
            href={`/post/${post.slug}`}
            key={post.id}
            className="group"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-semibold group-hover:text-purple-600 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {formatDate(post.date)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
} 