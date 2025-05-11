"use client";
import { devSkills } from "@/data/skills";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

function DevSkillsSection() {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    
    return (
        <section id="dev-skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Development Skills</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        These are the technologies and tools I'm proficient with, continuously expanding my expertise.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {devSkills.map((skill, index) => (
                        <Card 
                            key={index}
                            className={`transition-colors duration-300 cursor-pointer border border-gray-200 hover:border-blue-300 ${
                                hoveredSkill === index ? 'shadow-lg' : 'shadow hover:shadow-md'
                            }`}
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <CardHeader className="flex flex-col items-center text-center p-4">
                                <div className="p-4 rounded-full bg-blue-50 mb-3">
                                    <img 
                                        src={skill.icon} 
                                        alt={skill.name} 
                                        className="w-12 h-12"
                                    />
                                </div>
                                <CardTitle className="text-base font-medium text-gray-800">
                                    {skill.name}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <p className="text-gray-600 italic">
                        I'm always learning and adding new skills to my toolkit!
                    </p>
                </div>
            </div>
        </section>
    );
}
export default DevSkillsSection;