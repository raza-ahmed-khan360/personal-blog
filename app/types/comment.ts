export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
  likes: number;
  isEdited: boolean;
  parentId?: string;
  replies: Comment[];
  authorEmail?: string;
  authorImage?: string;
} 