import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project, fullWidth }:any) => (
  <div className={`group rounded-lg bg-gray-100 overflow-hidden ${fullWidth ? 'col-span-full' : ''}`}>
    <div className="relative overflow-hidden">
      <Image
        width={1216}
        height={556}
        src={project.imgSrc} 
        alt={project.title}
        className={`w-full cursor-pointer object-cover transition-transform duration-300 group-hover:scale-110 ${fullWidth ? 'h-96' : 'h-48'}`}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>
      <p className="text-sm mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag:any, index:any) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectGrid = () => {
  const projects = [
    {
      title: "User Experience Design Dashboard Hotel Management",
      description: "In the context of user experience (UX) design, a hotel management dashboard should be designed with the needs and goals of the hotel staff in mind.",
      imgSrc: "/project1.png",
      tags: ["Design", "Research", "Presentation"]
    },
    {
      title: "Bring of User Experience Design to Policy Making",
      description: "User experience (UX) design is a discipline that focuses on creating products and services that are easy to use.",
      imgSrc: "/project2.png",
      tags: ["Research", "Presentation"]
    },
    {
      title: "UX review presentations & Bringing Design Process to Teams",
      description: "These are some different design processes that can be followed when creating a hotel management dashboard. Here are some tips for bringing a design process to design teams and solving user problems with data & inclusive collaboration.",
      imgSrc: "/project3.png",
      tags: ["Design", "Research", "Presentation", "Collaboration"]
    },
    {
      title: "Icon Package of Slin Icon",
      description: "An icon package is a collection of icons that can be used in various design projects.",
      imgSrc: "/project4.png",
      tags: ["Design", "Branding", "Identity"]
    },
    {
      title: "UX Review Presentations",
      description: "Guidelines and best practices for creating effective UX review presentations.",
      imgSrc: "/project5.png",
      tags: ["Design", "Research", "Presentation"]
    }
  ];

  return (
    <section className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={index} project={project} fullWidth={undefined} />
          ))}
          <ProjectCard project={projects[2]} fullWidth={true} />
          {projects.slice(3).map((project, index) => (
            <ProjectCard key={`last-${index}`} project={project} fullWidth={undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;