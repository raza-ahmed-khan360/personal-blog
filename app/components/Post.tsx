// components/Post.tsx
import Image from 'next/image';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/blog';
import RelatedPosts from '../components/RelatedPosts';
import CommentSection from '../components/CommentSection';
import Newsletter from '../components/Newsletter';
import { post } from '../data/post'

interface PostProps {
  post: BlogPost;
  posts: BlogPost[]; // Ensure posts prop is passed
}

const Post = ({ post, posts }: PostProps) => {
  return (
    <article className="max-w-4xl mx-auto p-6">
      {/* Date */}
      <p className="text-sm text-gray-500">{formatDate(post.date)}</p>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>

      {/* Author */}
      <p className="text-lg text-gray-700 mt-2">By {post.author}</p>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="my-6">
          <Image
            src={post.coverImage}
            alt={`Cover image for ${post.title}`}
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-lg my-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Tags</h2>
          <ul className="flex flex-wrap gap-2 mt-2">
            {post.tags.map((tag, index) => (
              <li
                key={index}
                className="text-sm bg-gray-200 px-3 py-1 rounded-full"
              >
                {tag.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Posts */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold">Related Posts</h2>
        <RelatedPosts currentPost={post} posts={posts} />
      </div>

      {/* Comment Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold">Comments</h2>
        <CommentSection postId={post.id} />
      </div>

      {/* Newsletter Section */}
      <div className="mt-12">
        <Newsletter />
      </div>
    </article>
  );
};

export default Post;
