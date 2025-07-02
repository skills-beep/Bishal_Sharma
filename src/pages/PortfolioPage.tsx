
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
    
    // Enhanced scroll animations with intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(section);
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      observer.disconnect();
    };
  }, []);

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <PortfolioNavbar />
        
        {/* Enhanced section animations with improved staggering */}
        <div className="animate-fade-in opacity-100" style={{ transform: 'translateY(0)' }}>
          <HeroSection />
        </div>
        
        <div className="opacity-0" style={{ animationDelay: '100ms' }}>
          <AboutSection />
        </div>
        
        <div className="opacity-0" style={{ animationDelay: '200ms' }}>
          <WhyHireMeSection />
        </div>
        
        <div className="opacity-0" style={{ animationDelay: '300ms' }}>
          <SkillsSection />
        </div>
        
        <div className="opacity-0" style={{ animationDelay: '400ms' }}>
          <ProjectsSection />
        </div>
        
        <div className="opacity-0" style={{ animationDelay: '500ms' }}>
          <CertificatesSection />
        </div>
        
        <div className="opacity-0" style={{ animationDelay: '600ms' }}>
          <EducationSection />
        </div>
        
        <div className="opacity-0" style={{ animationDelay: '700ms' }}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
