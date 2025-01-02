import Link from 'next/link';
import { getAllPosts } from '../utils/blog';

interface Tag {
  label: string;
  bgColor: string;
  color: string;
}

export default function TagCloud() {
  const posts = getAllPosts();
  const tags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">Popular Topics</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: Tag, index: number) => (
          <Link
            href={`/tag/${tag.label.toLowerCase()}`}
            key={index}
            className="px-3 py-1 rounded-full text-sm font-medium transition-colors hover:opacity-80"
            style={{
              backgroundColor: tag.bgColor,
              color: tag.color,
            }}
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
} 