// app/post/[slug]/page.tsx
import Post from '@/app/components/Post';
import { getAllPosts } from '@/app/utils/blog';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = await getAllPosts(); // Assuming getAllPosts is async
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Page component for rendering a post
export default async function PostPage({ params }: Props) {
  const posts = await getAllPosts(); // Ensure async handling
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // Trigger a 404 page if no matching post is found
  }

  return <Post post={post} />;
}
