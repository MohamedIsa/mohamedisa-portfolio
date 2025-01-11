import { portfolioSection } from "@/data/portfolioData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900">{portfolioSection.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {portfolioSection.projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                >
                  View Project
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
export default PortfolioSection;