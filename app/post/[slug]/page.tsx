import { Metadata } from 'next';
import Post from '@/app/components/Post';
import { getAllPosts } from '@/app/utils/blog';
import { notFound } from 'next/navigation';

// Import the correct types from Next.js
import { ResolvingMetadata } from 'next';

// Define props using NextJS types
type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata with correct typing
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

// Page component with correct type annotations
const PostPage = async ({ params, searchParams }: Props) => {
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}

export default PostPage;
