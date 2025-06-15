
import { useState, useEffect } from "react";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { LoadingAnimation } from "@/components/portfolio/LoadingAnimation";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 animate-fade-in">
        <PortfolioNavbar />
        <div className="animate-slide-in-left">
          <HeroSection />
        </div>
        <div className="animate-fade-in animate-delay-200">
          <AboutSection />
        </div>
        <div className="animate-slide-in-right animate-delay-300">
          <SkillsSection />
        </div>
        <div className="animate-fade-in animate-delay-400">
          <ProjectsSection />
        </div>
        <div className="animate-scale-in animate-delay-500">
          <EducationSection />
        </div>
        <div className="animate-fade-in animate-delay-300">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
