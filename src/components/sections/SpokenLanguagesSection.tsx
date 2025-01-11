import { spokenLanguages } from "@/data/portfolioData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

 function SpokenLanguagesSection() {
    return (
        <section id="languages" className="py-16">
            <h2 className="text-3xl font-bold text-gray-900">Spoken Languages</h2>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spokenLanguages.map((language, index) => (
                    <li key={index} className="mb-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>{language.language}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">{language.proficiency}</p>
                            </CardContent>
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
}
export default SpokenLanguagesSection;