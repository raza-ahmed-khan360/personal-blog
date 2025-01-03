// app/post/[slug]/page.tsx
import { Metadata } from 'next';
import { getAllPosts, getPostBySlug } from '@/app/utils/blog';
import Post from '@/app/components/Post';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | NxtDev',
    };
  }

  return {
    title: `${post.title} | NxtDev`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <Post post={post} />;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
