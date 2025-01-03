import { Metadata } from 'next';
import Post from '@/app/components/Post';
import { getAllPosts } from '@/app/utils/blog';
import { notFound } from 'next/navigation';

// Define correct props interface for Next.js page components
type Props = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Optionally generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

// Page component for rendering a post
export default async function PostPage({ params }: Props) {
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />;
}
