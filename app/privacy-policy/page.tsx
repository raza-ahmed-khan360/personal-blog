import Hero from './sections/Hero';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-16">
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      <Hero title="PRIVACY POLICY" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg">
          <h2>Introduction</h2>
          <p>
            This Privacy Policy outlines how we collect, use, and protect your personal information
            when you visit our website. We are committed to ensuring your privacy and protecting
            any data you share with us.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Subscribe to our newsletter</li>
            <li>Leave comments on our blog posts</li>
            <li>Contact us through our contact form</li>
            <li>Create an account on our website</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul>
            <li>Send you our newsletter and updates</li>
            <li>Respond to your inquiries</li>
            <li>Improve our website and services</li>
            <li>Analyze website traffic and usage patterns</li>
          </ul>

          <h2>Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            personal data against unauthorized or unlawful processing, accidental loss,
            destruction, or damage.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request transfer of your personal data</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            privacy@personalblog.com
          </p>
        </div>
      </div>
    </div>
  );
}
