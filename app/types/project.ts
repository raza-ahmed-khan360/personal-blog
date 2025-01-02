import { Tag } from './blog';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  demoUrl: string;
  githubUrl: string;
  tags: Tag[];
} 