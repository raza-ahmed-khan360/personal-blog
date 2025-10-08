import BlogPosts from './sections/FeaturedBlogs'
import NewsletterHero from './sections/Hero'
import Breadcrumbs from '../components/Breadcrumbs';

function Newletter() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Newsletter', href: '/newsletter' }]} />
      <NewsletterHero/>
      <BlogPosts/>
    </div>
  )
}

export default Newletter