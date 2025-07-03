
import { useState, useEffect } from "react";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
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
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simple fade-in animation with intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Wait for content to load before applying animations
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        if (section.id !== 'home') { // Don't hide hero section
          htmlSection.style.opacity = '0';
          htmlSection.style.transform = 'translateY(50px)';
          htmlSection.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          observer.observe(section);
        }
      });
    }, 100);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      observer.disconnect();
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <PortfolioNavbar />
        
        <HeroSection />
        <AboutSection />
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
