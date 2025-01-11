import { devSkills } from "@/data/portfolioData";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

 function DevSkillsSection() {
    return (
        <section id="dev-skills" className="py-16">
            <h2 className="text-3xl font-bold text-gray-900">Development Skills</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {devSkills.map((skill, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>
                                <img src={skill.icon} alt={skill.name} className="inline-block w-11 h-11 mr-2" />
                                {skill.name}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </section>
    );
}
export default DevSkillsSection;