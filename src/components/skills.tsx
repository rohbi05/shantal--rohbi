import React from 'react';
import { Code2, Server, Database, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 size={24} />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Javascript                               '],
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['Node.js',  'Python', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: <Database size={24} />,
    skills: ['SQLAlchemy' ,'sqlite3'],
  },
  {
    title: 'Design',
    icon: <Palette size={24} />,
    skills: ['Figma', 'Adobe XD', 'UI/UX', ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4 text-indigo-600 dark:text-indigo-400">
                {category.icon}
                <h3 className="ml-2 text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}