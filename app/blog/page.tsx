import Hero from '../home/sections/Hero';
import AllBlogs from '../home/sections/AllBlogs';
import TagCloud from '../components/TagCloud';

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-16">
      <Hero title="BLOG" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <AllBlogs />
          </div>
          <div className="lg:col-span-1">
            <TagCloud />
          </div>
        </div>
      </div>
    </div>
  );
} 