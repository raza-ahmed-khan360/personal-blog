import { useState } from 'react';
import { formatDate } from '../utils/blog';

interface CommentSectionProps {
  postId: string;
}

const commentStyles = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,
  comment: `
    animation: fadeIn 0.3s ease-out;
  `,
};

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      postId,
      author: authorName,
      content: newComment,
      date: new Date().toISOString(),
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
      <h2 className="text-2xl font-bold mb-8">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Post Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-6 ${commentStyles.comment}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="font-medium text-purple-600 dark:text-purple-400">
                {comment.author}
              </div>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(comment.date)}
              </time>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          No comments yet. Be the first to comment!
        </p>
      )}
    </div>
  );
}
