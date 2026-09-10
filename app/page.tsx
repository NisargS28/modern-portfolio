import HeroSection from '@/components/sections/HeroSection';
import MotionExperience from '@/components/ui/MotionExperience';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <MotionExperience />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      {/* <StatsSection /> */}
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
