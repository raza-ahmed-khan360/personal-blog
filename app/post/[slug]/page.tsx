import { notFound } from 'next/navigation';
import Post from '@/app/components/Post';
import { getAllPosts } from '@/app/utils/blog';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// This function generates static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts(); // Ensure this function supports async if it fetches data
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Main component for displaying the post
export default async function PostPage({ params }: PostPageProps) {
  const posts = await getAllPosts(); // Support asynchronous fetch
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}
