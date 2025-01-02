import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'next-js-ecommerce',
    title: 'Next.js E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js 14, TypeScript, and Tailwind CSS.',
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Built a modern e-commerce platform using Next.js 14, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.
        </p>

        <h2 class="text-lg font-bold">Key Features</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Server-side rendering for optimal performance</li>
          <li>Stripe payment integration</li>
          <li>Real-time inventory tracking</li>
          <li>Admin dashboard with analytics</li>
          <li>Responsive design for all devices</li>
        </ul>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/projects/ecommerce.png" 
            alt="E-commerce Platform" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
        </div>

        <h2 class="text-lg font-bold">Technologies Used</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Next.js 14</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Prisma</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    `,
    coverImage: '/b1.png',
    demoUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/yourusername/next-ecommerce',
    tags: [
      { label: 'Next.js', color: '#000000', bgColor: '#f1f5f9' },
      { label: 'TypeScript', color: '#3178c6', bgColor: '#e6f6ff' },
      { label: 'E-commerce', color: '#16a34a', bgColor: '#f0fdf4' }
    ]
  },
  {
    id: '2',
    slug: 'ai-image-generator',
    title: 'AI Image Generation App',
    description: 'An AI-powered image generation application using DALL-E API and React.',
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Created an AI image generation application that allows users to create unique images from text descriptions using OpenAI's DALL-E API.
        </p>

        <h2 class="text-lg font-bold">Features</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Text-to-image generation</li>
          <li>Image variation creation</li>
          <li>Gallery of generated images</li>
          <li>Social sharing capabilities</li>
        </ul>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/projects/ai-generator.png" 
            alt="AI Image Generator" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
        </div>

        <h2 class="text-lg font-bold">Tech Stack</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>React</li>
          <li>OpenAI API</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    `,
    coverImage: '/b2.png',
    demoUrl: 'https://ai-generator.example.com',
    githubUrl: 'https://github.com/yourusername/ai-generator',
    tags: [
      { label: 'React', color: '#61dafb', bgColor: '#f0f9ff' },
      { label: 'AI', color: '#ef4444', bgColor: '#fef2f2' },
      { label: 'Node.js', color: '#16a34a', bgColor: '#f0fdf4' }
    ]
  },
  {
    id: '3',
    slug: 'social-media-dashboard',
    title: 'Social Media Analytics Dashboard',
    description: 'A comprehensive analytics dashboard for social media management.',
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Developed a real-time social media analytics dashboard that aggregates data from multiple platforms and provides actionable insights.
        </p>

        <h2 class="text-lg font-bold">Core Features</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Real-time data visualization</li>
          <li>Multi-platform integration</li>
          <li>Customizable dashboards</li>
          <li>Automated reporting</li>
        </ul>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/projects/dashboard.png" 
            alt="Analytics Dashboard" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
        </div>

        <h2 class="text-lg font-bold">Technologies</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Vue.js</li>
          <li>D3.js</li>
          <li>Firebase</li>
          <li>Social Media APIs</li>
        </ul>
      </div>
    `,
    coverImage: '/b3.png',
    demoUrl: 'https://dashboard.example.com',
    githubUrl: 'https://github.com/yourusername/social-dashboard',
    tags: [
      { label: 'Vue.js', color: '#42b883', bgColor: '#f0fdf4' },
      { label: 'Analytics', color: '#6366f1', bgColor: '#eef2ff' },
      { label: 'Firebase', color: '#f59e0b', bgColor: '#fffbeb' }
    ]
  }
]; 