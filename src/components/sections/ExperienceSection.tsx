import { experienceSection } from "@/data/experience";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

function ExperienceSection() {
    return (
        <section id="experience" className="py-16">
            <h2 className="text-3xl font-bold text-gray-900">{experienceSection.title}</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {experienceSection.experiences.map((exp) => (
                    <Card key={exp.id} className="mb-6 max-w-xs w-full mx-auto p-4">
                        <CardHeader className="p-4">
                            <CardTitle className="text-lg font-semibold text-gray-800">{exp.title}</CardTitle>
                            <CardDescription className="text-gray-600">{exp.company}</CardDescription>
                            <CardDescription className="text-gray-500">{exp.year}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                            <p className="text-gray-700 text-sm">{exp.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
export default ExperienceSection;
