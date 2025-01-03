// app/post/[slug]/page.tsx
import Post from '@/app/components/Post';
import { getAllPosts } from '@/app/utils/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts(); // Ensure async handling
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Correcting the typing to match Next.js expectations
export default async function PostPage({
  params,
}: {
  params: { slug: string }; // Adjusted to directly destructure params
}) {
  const posts = await getAllPosts(); // Ensure async handling
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // Trigger a 404 if the post is not found
  }

  return <Post post={post} />;
}
