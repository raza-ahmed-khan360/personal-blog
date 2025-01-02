"use client";
import { projects } from '../data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ProjectsPage() {
  const router = useRouter();

  const navigateToProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16">
      <Breadcrumbs 
        items={[
          { label: 'Projects' }
        ]} 
      />
      <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article 
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => navigateToProject(project.slug)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
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
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Live Demo
                </Link>
                <Link 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}