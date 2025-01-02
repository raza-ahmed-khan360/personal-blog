"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const NewsletterHero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email) {
      setStatus({ type: 'error', message: 'Please enter your email address' });
      return;
    }

    try {
      setIsLoading(true);
      setStatus({ type: '', message: '' });
      
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success scenario
      setStatus({ 
        type: 'success', 
        message: 'Thanks for subscribing! Check your email for confirmation.' 
      });
      setEmail('');
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-[#090d1f] mx-auto pt-28 flex flex-col items-center gap-16">
      <div className="w-full px-4 md:px-8 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-10">
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-full flex flex-col items-center gap-3">
              <div className="w-full text-center font-semibold">Newsletters</div>
              <h1 className="w-full text-center text-3xl md:text-5xl font-semibold leading-tight">
                Stories and interviews
              </h1>
            </div>
            <p className="w-full max-w-3xl text-center text-lg md:text-xl">
              Subscribe to learn about new product features, the latest in technology, solutions, and updates.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-start justify-center gap-4">
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1.5">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 text-black rounded-lg border shadow-sm focus:outline-none focus:ring-2 
                      ${status.type === 'error' ? 'border-red-300 focus:ring-red-200' : 
                        status.type === 'success' ? 'border-green-300 focus:ring-green-200' : 
                        'focus:ring-blue-200'}`}
                    disabled={isLoading}
                  />
                  {status.message && (
                    <p className={`text-sm ${
                      status.type === 'error' ? 'text-red-500' : 
                      status.type === 'success' ? 'text-green-500' : ''
                    }`}>
                      {status.message}
                    </p>
                  )}
                </div>
                <p className="text-sm">
                  We care about your data in our <Link href="/privacy-policy" className="underline hover:opacity-80">privacy policy</Link>
                </p>
              </div>
            </div>
            
            <button 
              type="submit"
              disabled={isLoading}
              className={`px-5 py-3 rounded-lg shadow-sm text-white bg-[#7F56D9] font-medium transition-all duration-200
                ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}
                ${status.type === 'success' ? 'bg-green-500 text-white border-green-500' : ''}`}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterHero;