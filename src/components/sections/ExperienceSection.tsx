import { experienceSection } from "@/data/portfolioData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-16">
            <h2 className="text-3xl font-bold text-gray-900">{experienceSection.title}</h2>
            <div className="mt-8">
                {experienceSection.experiences.map((exp) => (
                    <Card key={exp.id} className="mb-6">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-800">{exp.title}</CardTitle>
                            <CardDescription className="text-gray-600">{exp.company}</CardDescription>
                            <CardDescription className="text-gray-500">{exp.year}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700">{exp.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
