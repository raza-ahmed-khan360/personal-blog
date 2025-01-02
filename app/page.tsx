import Hero from './home/sections/Hero';
import Featured from './home/sections/Featured';
import AllBlogs from './home/sections/AllBlogs';

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <Hero title="THE BLOG" />
      <Featured />
      <AllBlogs />
    </div>
  );
}
