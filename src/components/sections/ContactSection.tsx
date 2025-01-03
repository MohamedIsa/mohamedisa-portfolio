import { Button } from "@/components/ui/button";
import { contactSection } from "@/data/portfolioData";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900">{contactSection.title}</h2>
      <p className="mt-4 text-gray-600">{contactSection.description}</p>
      <div className="mt-6">
        <Button variant="outline" className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-100">
          {contactSection.buttonText}
        </Button>
      </div>
    </section>
  );
}
