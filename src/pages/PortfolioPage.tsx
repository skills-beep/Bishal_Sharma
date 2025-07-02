
import { useState, useEffect } from "react";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { WhyHireMeSection } from "@/components/portfolio/WhyHireMeSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificatesSection } from "@/components/portfolio/CertificatesSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { LoadingAnimation } from "@/components/portfolio/LoadingAnimation";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <PortfolioNavbar />
        
        {/* Enhanced section animations with intersection observer triggers */}
        <div className="animate-fade-in">
          <HeroSection />
        </div>
        
        <div className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
          <AboutSection />
        </div>
        
        <div className="animate-scale-in" style={{ animationDelay: '300ms' }}>
          <WhyHireMeSection />
        </div>
        
        <div className="animate-slide-in-right" style={{ animationDelay: '400ms' }}>
          <SkillsSection />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
          <ProjectsSection />
        </div>
        
        <div className="animate-scale-in" style={{ animationDelay: '600ms' }}>
          <CertificatesSection />
        </div>
        
        <div className="animate-slide-in-left" style={{ animationDelay: '700ms' }}>
          <EducationSection />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
