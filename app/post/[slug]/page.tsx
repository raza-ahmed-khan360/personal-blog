import Post from '@/app/components/Post';
import { getAllPosts } from '@/app/utils/blog';
import { notFound } from 'next/navigation';

// Correct typing of the props to satisfy Next.js expectations
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Assuming getAllPosts is async
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Page component for rendering a post
export default async function PostPage({ params }: Awaited<PageProps>) {
  // Resolve the params Promise if required
  const resolvedParams = await params;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound(); // Trigger a 404 page if no matching post is found
  }

  return <Post/>;
}
