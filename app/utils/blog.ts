import { post } from '../data/post';
import { BlogPost, Tag } from '../types/blog';

const blogPosts: BlogPost[] = post;

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.tags.some(t => t.label.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllTags(): Tag[] {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      tags.add(JSON.stringify(tag));
    });
  });
  return Array.from(tags).map(tag => JSON.parse(tag));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
