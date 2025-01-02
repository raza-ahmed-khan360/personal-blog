"use client";
import { useState, useEffect } from 'react';
import { validateComment, validateEmail } from '../utils/errors';
import { sanitizeInput, RateLimiter } from '../utils/security';

const rateLimiter = new RateLimiter(5, 60); // 5 attempts per minute

interface CommentFormProps {
  onSubmit: (comment: { author: string; content: string; email: string }) => void;
  isReply?: boolean;
  onCancel?: () => void;
  csrfToken?: string;
}

export default function CommentForm({ onSubmit, isReply, onCancel, csrfToken }: CommentFormProps) {
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    // Rate limiting
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    if (timeSinceLastSubmit < 2000) { // 2 seconds cooldown
      setErrors(['Please wait a moment before submitting again']);
      return;
    }

    if (rateLimiter.isRateLimited(`${author}-${email}`)) {
      setErrors(['Too many attempts. Please try again later']);
      return;
    }

    // Input validation
    const newErrors: string[] = [];
    if (author.trim().length < 2) newErrors.push('Name must be at least 2 characters long');
    if (!validateEmail(email)) newErrors.push('Please enter a valid email address');
    newErrors.push(...validateComment(content));

    // Check for potential spam patterns
    if (content.includes('http') || content.includes('www.')) {
      newErrors.push('Links are not allowed in comments');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      setLastSubmitTime(now);

      // Sanitize inputs before submission
      const sanitizedComment = {
        author: sanitizeInput(author.trim()),
        content: sanitizeInput(content.trim()),
        email: email.trim().toLowerCase(),
      };

      // Add CSRF token to request
      const headers = new Headers({
        'X-CSRF-Token': csrfToken || '',
        'Content-Type': 'application/json',
      });

      await onSubmit(sanitizedComment);
      
      // Reset form on success
      setContent('');
      setAuthor('');
      setEmail('');
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
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
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
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
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
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px] disabled:opacity-60"
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
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {isReply ? 'Replying...' : 'Posting...'}
            </span>
          ) : (
            isReply ? 'Reply' : 'Post Comment'
          )}
        </button>
        {isReply && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
} 