import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../data/projects';
import ProjectContent from './ProjectContent';

// Define the props directly to avoid conflicts
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
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

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
