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
      <main className="pt-24 mx-10">
        <HeroSection />
        <AboutSection />
        <DevSkillsSection />
        <ExperienceSection /> 
        <SpokenLanguagesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
export default Home;
