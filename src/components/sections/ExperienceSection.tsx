"use client";
import { experienceSection } from "@/data/experience";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useState } from "react";

function ExperienceSection() {
    const [hoveredExp, setHoveredExp] = useState<number | null>(null);

    return (
        <section id="experience" className="py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{experienceSection.title}</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {experienceSection.experiences.map((exp, index) => (
                    <Card 
                        key={exp.id} 
                        className={`group transition-colors duration-300 border border-gray-200 hover:border-blue-300 ${
                            hoveredExp === index ? 'shadow-lg' : 'shadow hover:shadow-md'
                        }`}
                        onMouseEnter={() => setHoveredExp(index)}
                        onMouseLeave={() => setHoveredExp(null)}
                    >
                        <CardHeader className="p-6">
                            <div className="mb-2 flex justify-between items-start">
                                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{exp.title}</CardTitle>
                                <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                                    {exp.year}
                                </span>
                            </div>
                            <CardDescription className="text-base text-gray-600 font-medium">{exp.company}</CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                            <p className="text-gray-600">{exp.description}</p>
                            
                            {/* Add skills bullets if available */}
                            {exp.skills && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span 
                                            key={i} 
                                            className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
export default ExperienceSection;
