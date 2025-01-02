import Image from 'next/image'
import React from 'react'

const ContentSection = ({ title, children }:any) => (
  <div className="space-y-4">
    <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
    <div className="text-sm md:text-base opacity-65 space-y-2">
      {children}
    </div>
  </div>
)

function Content() {
  const skills = [
    "Extensive experience in UI design, with a strong portfolio of completed projects",
    "Proficiency in design tools such as Adobe Creative Suite and Sketch",
    "Excellent visual design skills, with a strong understanding of layout, color theory, and typography",
    "Ability to create wireframes and prototypes to communicate design concepts",
    "Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams",
    "Experience conducting user research and gathering insights to inform design decisions",
    "Proficiency in HTML, CSS, and JavaScript"
  ]

  const experiences = [
    "5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries",
    "Led the design of a successful e-commerce website, resulting in a 25% increase in online sales",
    "Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage",
    "Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic"
  ]

  const education = [
    "Bachelor's degree in Graphic Design",
    "Certified User Experience Designer (CUED)"
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-[#090d1f]">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-8 md:space-y-12">
        {/* Hero Image */}
        <Image
            width={1216}
            height={556}
            className="w-full aspect-video object-cover object-top rounded-lg" 
            src="/picture.avif" 
            alt="Portfolio hero" 
        />
        
        {/* About Section */}
        <ContentSection title="About Me">
          <p>
            As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user experiences that meet the needs of my clients and their users. I have a strong understanding of design principles and a proficiency in design tools, and I am comfortable working with cross-functional teams to bring projects to fruition. I am confident in my ability to create designs that are both visually appealing and functional, and I am always looking for new challenges and opportunities to grow as a designer.
          </p>
        </ContentSection>

        {/* Skills Section */}
        <ContentSection title="Skills">
          <ul className="list-disc pl-5 space-y-2">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </ContentSection>

        {/* Experience Section */}
        <ContentSection title="Experience">
          <ul className="list-disc pl-5 space-y-2">
            {experiences.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </ul>
        </ContentSection>

        {/* Education Section */}
        <ContentSection title="Education">
          <ul className="list-disc pl-5 space-y-2">
            {education.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </ContentSection>
      </div>
    </main>
  )
}

export default Content