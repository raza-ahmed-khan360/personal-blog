// types/blog.ts
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



