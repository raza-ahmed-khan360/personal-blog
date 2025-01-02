// components/Post.tsx
import Image from 'next/image';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/blog';
import RelatedPosts from '../components/RelatedPosts';
import CommentSection from '../components/CommentSection';
import { getAllPosts } from '../utils/blog';
import Newsletter from '../components/Newsletter';

interface PostProps {
  post: BlogPost;
}

const Post = ({ post }: PostProps) => {
  const allPosts = getAllPosts();

  return (
    <article className="flex flex-col gap-8 max-w-[778px] mx-auto px-4 md:px-0">
      {/* Date */}
      <div className="text-[#6840c6] text-sm font-semibold">
        {formatDate(post.date)}
      </div>

      {/* Title */}
      <div className="flex gap-4">
        <h1 className="text-2xl md:text-4xl font-bold leading-loose">
          {post.title}
        </h1>
      </div>

      {/* Author */}
      <div className="flex items-center gap-2 text-gray-600">
        <span className="font-medium">{post.author}</span>
      </div>

      {/* Cover Image */}
      <div className="relative w-full h-[250px] md:h-[426px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6">
        <div 
          className="prose prose-lg max-w-none prose-p:text-gray-600 prose-headings:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content || '' }} 
        />

        {/* Tags */}
        <div className="flex gap-2">
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
      </div>

      {/* Related Posts */}
      <RelatedPosts currentPost={post} posts={allPosts} />

      {/* Add CommentSection before Newsletter */}
      <CommentSection postId={post.id} />

      {/* Newsletter Section */}
      <div className="mt-16">
        <Newsletter />
      </div>
    </article>
  );
};

export default Post;