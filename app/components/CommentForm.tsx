"use client";
import { useState } from 'react';
import { validateComment, validateEmail } from '../utils/errors';

interface CommentFormProps {
  onSubmit: (comment: { author: string; content: string; email: string }) => void;
  isReply?: boolean;
  onCancel?: () => void;
}

export default function CommentForm({ onSubmit, isReply, onCancel }: CommentFormProps) {
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    const newErrors: string[] = [];
    if (author.trim().length < 2) newErrors.push('Name must be at least 2 characters long');
    if (!validateEmail(email)) newErrors.push('Please enter a valid email address');
    newErrors.push(...validateComment(content));

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      await onSubmit({
        author: author.trim(),
        content: content.trim(),
        email: email.trim().toLowerCase(),
      });

      setAuthor('');
      setEmail('');
      setContent('');
    } catch (error) {
      setErrors([error instanceof Error ? error.message : 'Failed to post comment']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg">
          <ul className="list-disc list-inside">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {!isReply && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            minLength={2}
            maxLength={50}
            disabled={isSubmitting}
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            disabled={isSubmitting}
          />
        </div>
      )}

      <div className="relative">
        <textarea
          placeholder={isReply ? "Write a reply..." : "Write a comment..."}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 
                     min-h-[100px]"
          required
          maxLength={1000}
          disabled={isSubmitting}
        />
        <span className="absolute bottom-2 right-2 text-sm text-gray-500">
          {content.length}/1000
        </span>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                     transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? (isReply ? 'Replying...' : 'Posting...')
            : (isReply ? 'Reply' : 'Post Comment')}
        </button>

        {isReply && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 
                       rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors 
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
