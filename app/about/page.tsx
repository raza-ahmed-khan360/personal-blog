import Hero from './sections/Hero';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    { name: 'Frontend Development', level: 'Advanced' },
    { name: 'Backend Development', level: 'Intermediate' },
    { name: 'UI/UX Design', level: 'Intermediate' },
    { name: 'Database Management', level: 'Advanced' },
    { name: 'DevOps', level: 'Intermediate' },
  ];

  return (
    <div className="min-h-screen pt-16">
      <Hero title="ABOUT ME" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hi, I'm a Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I specialize in building modern web applications using cutting-edge technologies.
              With a passion for clean code and user-centric design, I create solutions
              that make a difference.
            </p>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-900">{skill.name}</span>
                    <span className="text-purple-600 font-medium">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/profile.avif"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}