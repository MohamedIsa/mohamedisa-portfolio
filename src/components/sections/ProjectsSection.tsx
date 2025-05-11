"use client";
import { projectsSection } from "@/data/projects";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { GitHubIcon, GlobeIcon } from "@/components/ui/icons";

function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="MyWork" className="py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{projectsSection.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project showcases different skills and technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projectsSection.projects.map((project, index) => (
          <Card 
            key={project.id}
            className={`group overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors duration-300 ${
              hoveredProject === index ? 'shadow-xl' : 'shadow-md hover:shadow-lg'
            }`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-40 bg-gradient-to-r from-blue-100 to-indigo-100 overflow-hidden">
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-2 right-2 flex gap-2">
                {project.technologies?.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-white/90 text-xs px-2 py-1 rounded-md text-gray-800 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <CardHeader className="py-4">
              <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {project.name}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
              
              <div className="flex justify-between mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <GitHubIcon />
                    Code
                  </a>
                )}
                
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  >
                    <GlobeIcon />
                    Live Demo
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;