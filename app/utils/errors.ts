export class CommentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CommentError';
  }
}

export const validateComment = (content: string): string[] => {
  const errors: string[] = [];
  if (content.length < 3) errors.push('Comment must be at least 3 characters long');
  if (content.length > 1000) errors.push('Comment must not exceed 1000 characters');
  return errors;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}; 