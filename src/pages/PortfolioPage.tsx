
import { useState } from "react";
import { PortfolioNavbar } from "@/components/portfolio/PortfolioNavbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Starry background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-black"></div>
        {/* Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        {/* Constellation lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
          <line x1="25%" y1="35%" x2="40%" y2="25%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
          <line x1="70%" y1="15%" x2="85%" y2="30%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
          <line x1="60%" y1="60%" x2="75%" y2="75%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
          <line x1="15%" y1="70%" x2="30%" y2="80%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <PortfolioNavbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
}
