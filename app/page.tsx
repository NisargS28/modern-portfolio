import ParticleBackground from '@/components/ui/ParticleBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import StatsSection from '@/components/sections/StatsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <StatsSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
