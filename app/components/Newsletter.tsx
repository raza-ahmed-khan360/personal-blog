import Link from 'next/link';

export default function Newsletter() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg my-8">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Subscribe to our newsletter
        </h3>
        <p className="text-gray-600 mb-6">
          Get the latest posts delivered right to your inbox
        </p>
        <form className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
} 