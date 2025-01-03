import { BlogPost } from "../types/blog";

// data/posts.ts
export const post: BlogPost[] = [
  {
    id: '1',
    slug: 'bill-walsh-leadership',
    title: 'Bill Walsh leadership lessons',
    author: 'Alec Whitten',
    date: '2024-01-01',
    excerpt: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Bill Walsh's transformation of the San Francisco 49ers from the NFL's worst team to a three-time Super Bowl champion is one of sports' greatest turnaround stories. Here are the key leadership lessons we can learn from his journey.
        </p>

        <h2 class="text-lg font-bold">The Standard of Performance</h2>
        <p class="text-base leading-normal">
          Walsh's first step wasn't about winning games - it was about establishing what he called the "Standard of Performance." This meant defining how everyone in the organization - from players to coaches to staff - should conduct themselves and perform their duties.
        </p>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/b1.png" 
            alt="Bill Walsh Leadership" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
          <p class="text-center max-w-[567px] mx-auto">
            Bill Walsh during a 49ers training session, implementing his leadership principles.
          </p>
        </div>

        <h2 class="text-lg font-bold">Key Leadership Principles</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Focus on the process, not the outcome</li>
          <li>Teach players to think like coaches</li>
          <li>Maintain high standards in everything</li>
          <li>Innovation is key to staying ahead</li>
          <li>Leadership starts with teaching</li>
        </ul>

        <h2 class="text-lg font-bold">The Walsh Way: Teaching Excellence</h2>
        <p class="text-base leading-normal">
          Walsh believed that teaching was the foundation of leadership. He didn't just tell players what to do - he showed them why and how. This approach created a team of thinking players who could adapt and excel under pressure.
        </p>

        <blockquote class="border-l-4 border-[#6840c6] pl-4 italic">
          "Champions behave like champions before they're champions." - Bill Walsh
        </blockquote>
      </div>
    `,
    coverImage: '/b1.png',
    tags: [
      { label: 'Leadership', color: '#6840c6', bgColor: '#f9f5ff' },
      { label: 'Management', color: '#c01573', bgColor: '#fdf1f9' }
    ],
    description: "",
    image: ""
  },
  {
    id: '2',
    slug: 'pm-mental-models',
    title: 'PM mental models',
    author: 'Demi Wilkinson',
    date: '2024-01-01',
    excerpt: 'Mental models are simple expressions of complex processes or relationships.',
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Mental models are frameworks for thinking. They help us understand life's complexities and make better decisions. For Product Managers, these models are essential tools for problem-solving and decision-making.
        </p>

        <h2 class="text-lg font-bold">Essential Mental Models for PMs</h2>
        
        <h3 class="text-base font-bold">1. First Principles Thinking</h3>
        <p class="text-base leading-normal">
          Break down complex problems into their most fundamental truths and build up from there. This helps in avoiding assumptions and finding innovative solutions.
        </p>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/b2.png" 
            alt="Mental Models Diagram" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
          <p class="text-center max-w-[567px] mx-auto">
            Visual representation of how mental models connect different aspects of product management.
          </p>
        </div>

        <h3 class="text-base font-bold">2. The 80/20 Rule</h3>
        <p class="text-base leading-normal">
          Also known as the Pareto Principle, this model suggests that 80% of outcomes come from 20% of causes. Use this to prioritize features and efforts.
        </p>

        <h2 class="text-lg font-bold">Applying Mental Models in Product Management</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>User Research and Understanding</li>
          <li>Feature Prioritization</li>
          <li>Problem-Solving Approaches</li>
          <li>Decision-Making Frameworks</li>
        </ul>
      </div>
    `,
    coverImage: '/b2.png',
    tags: [
      { label: 'Product', color: '#027947', bgColor: '#ebfdf2' },
      { label: 'Research', color: '#3537cc', bgColor: '#eef3ff' },
      { label: 'Frameworks', color: '#c01573', bgColor: '#fdf1f9' }
    ],
    description: "",
    image: ""
  },
  {
    id: '3',
    slug: 'what-is-wireframing',
    title: 'What is Wireframing?',
    author: 'Candice Wu',
    date: '2024-01-01',
    excerpt: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Wireframing is the foundation of great UI/UX design. It's a visual guide that represents the skeletal framework of a website or application, focusing on layout and functionality before visual design.
        </p>

        <h2 class="text-lg font-bold">Understanding Wireframes</h2>
        <p class="text-base leading-normal">
          Think of wireframes as the blueprint of your digital product. Just as architects don't start by choosing paint colors, designers shouldn't start with visual details.
        </p>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/b3.png" 
            alt="Wireframing Example" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
          <p class="text-center max-w-[567px] mx-auto">
            Example of low-fidelity vs high-fidelity wireframes in the design process.
          </p>
        </div>

        <h2 class="text-lg font-bold">Types of Wireframes</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Low-fidelity wireframes</li>
          <li>Mid-fidelity wireframes</li>
          <li>High-fidelity wireframes</li>
        </ul>

        <h2 class="text-lg font-bold">Benefits of Wireframing</h2>
        <p class="text-base leading-normal">
          Wireframing allows teams to focus on structure and user flow without getting distracted by colors, fonts, and other visual elements. It's a crucial step in the UX design process.
        </p>
      </div>
    `,
    coverImage: '/b3.png',
    tags: [
      { label: 'Design', color: '#6840c6', bgColor: '#f9f5ff' },
      { label: 'Research', color: '#3537cc', bgColor: '#eef3ff' }
    ],
    description: "",
    image: ""
  },
  {
    id: '4',
    slug: 'how-collaboration-makes-better-designers',
    title: 'How collaboration makes us better designers',
    author: 'Natali Craig',
    date: '2024-01-01',
    excerpt: 'Collaboration can make our teams stronger, and our individual designs better.',
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          In the world of design, the myth of the lone genius has been replaced by the reality of collaborative success. Let's explore how working together elevates our design capabilities and outcomes.
        </p>

        <h2 class="text-lg font-bold">The Power of Collaborative Design</h2>
        <p class="text-base leading-normal">
          When designers collaborate, they bring diverse perspectives, experiences, and skills to the table. This diversity leads to more innovative solutions and robust design outcomes.
        </p>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/b4.png" 
            alt="Design Collaboration" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
          <p class="text-center max-w-[567px] mx-auto">
            Teams collaborating on a design project, sharing ideas and feedback.
          </p>
        </div>

        <h2 class="text-lg font-bold">Key Benefits of Design Collaboration</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Diverse perspectives lead to better solutions</li>
          <li>Faster problem-solving through shared knowledge</li>
          <li>Improved design consistency across projects</li>
          <li>Enhanced learning opportunities</li>
          <li>Stronger team cohesion</li>
        </ul>

        <blockquote class="border-l-4 border-[#6840c6] pl-4 italic my-6">
          "The best design solutions come from collaborative minds working together towards a common goal."
        </blockquote>

        <h2 class="text-lg font-bold">Best Practices for Design Collaboration</h2>
        <p class="text-base leading-normal">
          Effective collaboration doesn't happen by accident. It requires intentional practices and the right environment to flourish.
        </p>
      </div>
    `,
    coverImage: '/b4.png',
    tags: [
      { label: 'Design', color: '#6840c6', bgColor: '#f9f5ff' },
      { label: 'Research', color: '#3537cc', bgColor: '#eef3ff' }
    ],
    description: "",
    image: ""
  },
  {
    id: '5',
    slug: 'top-10-javascript-frameworks',
    title: 'Our top 10 Javascript frameworks to use',
    author: 'Drew Cano',
    date: '2024-01-01',
    excerpt: 'JavaScript frameworks make development easy with extensive features and functionalities.',
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          In the ever-evolving world of web development, choosing the right JavaScript framework can make or break your project. Here's our curated list of the top 10 frameworks that stand out in 2024.
        </p>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/b5.png" 
            alt="JavaScript Frameworks" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
          <p class="text-center max-w-[567px] mx-auto">
            Popular JavaScript frameworks and their ecosystem.
          </p>
        </div>

        <h2 class="text-lg font-bold">1. React</h2>
        <p class="text-base leading-normal">
          Still the king of JavaScript frameworks, React continues to dominate with its robust ecosystem and flexible architecture.
        </p>

        <h2 class="text-lg font-bold">2. Next.js</h2>
        <p class="text-base leading-normal">
          The React framework that's revolutionizing full-stack development with its powerful features and excellent developer experience.
        </p>

        <h2 class="text-lg font-bold">3. Vue.js</h2>
        <p class="text-base leading-normal">
          Known for its gentle learning curve and excellent documentation, Vue.js remains a top choice for many developers.
        </p>

        <div class="bg-[#1a1a1a] p-6 rounded-lg my-6">
          <pre class="text-sm"><code>
// Example of modern JavaScript framework usage
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count is {count}
    </button>
  );
}
          </code></pre>
        </div>
      </div>
    `,
    coverImage: '/b5.png',
    tags: [
      { label: 'Software Development', color: '#027947', bgColor: '#ebfdf2' },
      { label: 'Tools', color: '#3537cc', bgColor: '#eef3ff' },
      { label: 'SaaS', color: '#c01573', bgColor: '#fdf1f9' }
    ],
    description: "",
    image: ""
  },
  {
    id: '6',
    slug: 'creating-better-cx-community',
    title: 'Podcast: Creating a better CX Community',
    author: 'Orlando Diggs',
    date: '2024-01-01',
    excerpt: "Starting a community doesn't need to be complicated, but how do you get started?",
    content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Building a strong Customer Experience (CX) community is crucial for any business looking to improve their service and create lasting customer relationships. Let's explore how to build and nurture such a community.
        </p>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/b6.png" 
            alt="CX Community" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
          <p class="text-center max-w-[567px] mx-auto">
            Community engagement and customer experience interaction.
          </p>
        </div>

        <h2 class="text-lg font-bold">Why Community Matters in CX</h2>
        <p class="text-base leading-normal">
          A strong community creates a feedback loop that helps businesses understand their customers better while providing customers with a platform to share experiences and get support.
        </p>

        <h2 class="text-lg font-bold">Key Steps to Building a CX Community</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Define your community's purpose</li>
          <li>Choose the right platform</li>
          <li>Create engaging content</li>
          <li>Foster meaningful discussions</li>
          <li>Measure and iterate</li>
        </ul>

        <div class="bg-[#1a1a1a] p-6 rounded-lg my-6">
          <p class="text-sm font-bold mb-2">🎙️ Podcast Highlights</p>
          <ul class="list-disc pl-4 space-y-2 text-sm">
            <li>Understanding community dynamics</li>
            <li>Tools and platforms for community building</li>
            <li>Engagement strategies that work</li>
            <li>Measuring community success</li>
          </ul>
        </div>
      </div>
    `,
    coverImage: '/b6.png',
    tags: [
      { label: 'Podcasts', color: '#6840c6', bgColor: '#f9f5ff' },
      { label: 'Customer Success', color: '#c01573', bgColor: '#fdf1f9' }
    ],
    description: "",
    image: ""
  }
];