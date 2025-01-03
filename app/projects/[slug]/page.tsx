import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../data/projects';
import ProjectContent from './ProjectContent';

// Adjusted type for PageProps
interface PageProps {
  params: {
    slug: string;
  };
}

// Metadata generation function
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | NxtDev`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

// Main ProjectPage component
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}

// Generating static paths
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
