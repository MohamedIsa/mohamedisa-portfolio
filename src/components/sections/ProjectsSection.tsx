import { projectsSection } from "@/data/projects";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

function ProjectsSection() {
  return (
    <section id="MyWork" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900">{projectsSection.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projectsSection.projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
              <div className="flex flex-col mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 text-blue-600 hover:text-blue-800"
                  >
                    <span className="flex items-center gap-2">
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-6 h-6"/> 
                    View Project
                    </span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <span className="flex items-center gap-2">
                    <span className="material-icons text-black">public</span>
                    View Live
                    </span>
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