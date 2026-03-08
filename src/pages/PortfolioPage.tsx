
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
import { motion } from "framer-motion";

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <PortfolioNavbar />
        
        <HeroSection />
        
        {/* Section divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <AboutSection />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <WorkExperienceSection />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <WhyHireMeSection />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <SkillsSection />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <ProjectsSection />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <CertificatesSection />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <EducationSection />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <GraduationSection />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <ContactSection />
        </motion.div>

        {/* Footer */}
        <div className="py-8 text-center border-t border-neutral-900">
          <p className="text-xs text-neutral-600 tracking-widest uppercase">
            © 2024 Bishal Sharma — Built with passion
          </p>
        </div>
      </div>
    </div>
  );
}
