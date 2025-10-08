// types/blog.ts
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Tag {
  label: string;
  bgColor: string;
  color: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  description: string;
  excerpt?: string;
  content?: string;
  image?: string | StaticImport;
  coverImage?: string | StaticImport;
  tags: Tag[];

}




