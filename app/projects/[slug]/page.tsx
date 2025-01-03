import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../data/projects';
import ProjectContent from './ProjectContent';

// Define the structure for the params
interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Awaited<Params>; // Direct async handling
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

export default function ProjectPage({
  params,
}: {
  params: Awaited<Params>; // Direct async handling
}) {
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
