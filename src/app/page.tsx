import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import DevSkillsSection from "@/components/sections/DevSkillsSection"; 
import ExperienceSection from "@/components/sections/ExperienceSection";
import SpokenLanguagesSection from "@/components/sections/SpokenLanguagesSection";

function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSection />
        </div>
        <DevSkillsSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExperienceSection /> 
          <SpokenLanguagesSection />
        </div>
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsSection />
          </div>
        </div>
        <div className="bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactSection />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
