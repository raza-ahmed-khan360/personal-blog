import { BlogPost, Tag } from '../types/blog';

// Mock data - replace with actual data fetching logic
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "bill-walsh-leadership",
    author: "Alec Whitten",
    date: "2023-01-01",
    title: "Bill Walsh leadership lessons",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/b1.png",
    tags: [
      { label: "Leadership", bgColor: "#f9f5ff", color: "#6840c6" },
      { label: "Management", bgColor: "#fdf2fa", color: "#c11574" },
    ],
    excerpt: '',
    content: '',
    coverImage: ''
  },
  // Add more blog posts here
];

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