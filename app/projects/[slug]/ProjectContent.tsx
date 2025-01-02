"use client";

import Image from 'next/image';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Project } from '../../types/project';

interface ProjectContentProps {
  project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <main className="container mx-auto px-4 py-16">
      <article className="max-w-[778px] mx-auto">
        <Breadcrumbs 
          items={[
            { label: 'Projects', href: '/projects' },
            { label: project.title }
          ]} 
        />
        <div className="mb-8 mt-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-0.5 rounded-2xl text-sm font-medium"
                style={{ 
                  backgroundColor: tag.bgColor,
                  color: tag.color
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <div className="relative w-full h-[426px] mb-8">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex gap-4 mb-8">
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              View Live Demo
            </a>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
            >
              View on GitHub
            </a>
          </div>
          <div 
            className="prose prose-lg max-w-none prose-p:text-gray-600 prose-headings:text-gray-900"
            dangerouslySetInnerHTML={{ __html: project.content }} 
          />
        </div>
      </article>
    </main>
  );
} 