import { aboutSection } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold text-gray-900">{aboutSection.title}</h2>
      <p className="mt-4 text-gray-700">{aboutSection.description}</p>
    </section>
  );
}
