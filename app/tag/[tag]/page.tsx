import { getPostsByTag } from '../../utils/blog';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '../../utils/blog';

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagPage({ params }: PageProps) {
  const resolvedParams = await params;
  const posts = getPostsByTag(decodeURIComponent(resolvedParams.tag));

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Posts tagged with "{decodeURIComponent(resolvedParams.tag)}"
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            href={`/post/${post.slug}`} 
            key={post.id}
            className="group hover:shadow-lg transition-shadow duration-200 rounded-lg overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <time className="text-sm text-gray-600 dark:text-gray-400">
                {formatDate(post.date)}
              </time>
              <h2 className="text-xl font-bold mt-2 group-hover:text-purple-600">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
