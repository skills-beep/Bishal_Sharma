
import { useState, useEffect } from "react";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { WorkExperienceSection } from "@/components/portfolio/WorkExperienceSection";
import { WhyHireMeSection } from "@/components/portfolio/WhyHireMeSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificatesSection } from "@/components/portfolio/CertificatesSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { GraduationSection } from "@/components/portfolio/GraduationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { LoadingAnimation } from "@/components/portfolio/LoadingAnimation";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <PortfolioNavbar />
        
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <WhyHireMeSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <EducationSection />
        <GraduationSection />
        <ContactSection />
      </div>
    </div>
  );
}
