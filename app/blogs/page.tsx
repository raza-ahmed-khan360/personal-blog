import { getAllPosts } from '../utils/blog';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
  <div className="max-w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <Breadcrumbs items={[{ label: 'Blogs', href: '/blogs' }]} />
  <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((post) => (
      <Link 
        href={`/post/${post.slug}`} 
        key={post.id}
        className="group"
      >
  <article className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 bg-white">
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
          <div className="p-6 flex flex-col gap-2">
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-2xl text-xs font-semibold transition-colors"
                  style={{ 
                    backgroundColor: tag.bgColor,
                    color: tag.color
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-900 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </article>
      </Link>
    ))}
  </div>
</div>
  );
}