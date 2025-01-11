import { contactSection } from "@/data/portfolioData";

 function ContactSection() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900">{contactSection.title}</h2>
      <p className="mt-4 text-gray-600">{contactSection.description}</p>
      <div className="mt-6">
      </div>
      <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
        {contactSection.links.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
        <img src={link.icon} alt={link.name} className="w-6 h-6" />
        <span className="text-blue-600">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
export default ContactSection;