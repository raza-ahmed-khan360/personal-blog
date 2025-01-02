"use client";
import { useState } from 'react';
import Link from 'next/link';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  likes: number;
}

interface SingleCommentProps {
  comment: Comment;
  onReply: (parentId: string, content: string) => Promise<void>;
  onEdit: (commentId: string, content: string) => Promise<void>;
  onDelete: (commentId: string) => Promise<void>;
  onLike: (commentId: string) => Promise<void>;
  csrfToken: string;
}

export default function SingleComment({
  comment,
  onReply,
  onEdit,
  onDelete,
  onLike,
  csrfToken,
}: SingleCommentProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [editContent, setEditContent] = useState(comment.content);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [editError, setEditError] = useState('');

  const handleReply = async () => {
    if (!replyContent.trim()) {
      setError('Reply cannot be empty');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await onReply(comment.id, replyContent);
      setReplyContent('');
      setIsReplying(false);
    } catch (err) {
      setError('Failed to post reply. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = async () => {
    if (!editContent.trim()) {
      setEditError('Comment cannot be empty');
      return;
    }

    setIsSubmitting(true);
    setEditError('');

    try {
      await onEdit(comment.id, editContent);
      setIsEditing(false);
    } catch (err) {
      setEditError('Failed to edit comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this comment?')) {
      return;
    }

    try {
      await onDelete(comment.id);
    } catch (err) {
      alert('Failed to delete comment. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{comment.author}</h3>
          <p className="text-sm text-gray-600">
            {new Date(comment.date).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsReplying(!isReplying)}
            className="text-purple-600 hover:text-purple-700"
          >
            Reply
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-purple-600 hover:text-purple-700"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-700"
          >
            Delete
          </button>
          <button
            onClick={() => onLike(comment.id)}
            className="text-purple-600 hover:text-purple-700"
          >
            Like ({comment.likes})
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-2">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isSubmitting}
          />
          {editError && (
            <p className="text-red-600 text-sm">{editError}</p>
          )}
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              disabled={isSubmitting}
              className="px-4 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditError('');
                setEditContent(comment.content);
              }}
              disabled={isSubmitting}
              className="px-4 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-700">{comment.content}</p>
      )}

      {isReplying && (
        <div className="mt-4 space-y-2">
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Write your reply..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isSubmitting}
          />
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          <div className="flex gap-2">
            <button
              onClick={handleReply}
              disabled={isSubmitting}
              className="px-4 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Posting...' : 'Post Reply'}
            </button>
            <button
              onClick={() => {
                setIsReplying(false);
                setError('');
                setReplyContent('');
              }}
              disabled={isSubmitting}
              className="px-4 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 