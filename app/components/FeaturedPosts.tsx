import { getAllPosts } from '../utils/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedPosts() {
  const posts = getAllPosts().slice(0, 3); 

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              href={`/post/${post.slug}`}
              key={post.id}
              className="group"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={post.coverImage || "/featured.png"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold group-hover:text-purple-600 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 