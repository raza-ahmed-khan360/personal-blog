import { getAllPosts } from '../utils/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-7xl dark:bg-[#090d1f] bg-white mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <Link 
        href={`/post/${post.slug}`} 
        key={post.id}
        className="group"
      >
        <article className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          {post.coverImage && (
            <div className="relative h-48 w-full">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 rounded-2xl text-sm font-medium"
                  style={{ 
                    backgroundColor: tag.bgColor,
                    color: tag.color
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {post.title}
            </h2>
            <p className=" mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm">
                {post.author}
              </span>
              <span className="text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </article>
      </Link>
    ))}
  </div>
</div>
  );
}