
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const openResume = () => {
    window.open("https://drive.google.com/file/d/1jnTVqiNuBN51vE7mCBi6TuBGDwRzvXVO/view?usp=drive_link", "_blank");
  };
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/bishal-sharma-12b7211b6/", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neutral-800/20 to-transparent rounded-full blur-[100px]" />
      
      {/* Horizontal accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-neutral-500 tracking-[0.3em] uppercase"
              >
                Hi there, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight"
              >
                <span className="text-white block">Bishal</span>
                <span className="text-transparent block mt-1" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.5)' }}>
                  Sharma
                </span>
                <span className="text-neutral-600 text-6xl sm:text-7xl lg:text-9xl leading-none">.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-neutral-400 font-light"
              >
                Frontend Developer <span className="text-neutral-300">&</span> UI/UX Enthusiast
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base text-neutral-500 max-w-xl lg:mx-0 mx-auto leading-relaxed"
              >
                I design and build clean, modern, and responsive web experiences that delight 
                users and help businesses grow.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mt-10"
            >
              <Button onClick={scrollToProjects} className="bg-white hover:bg-neutral-200 text-black px-7 py-3 rounded-full flex items-center gap-2 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] group border-0">
                View Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={openResume} variant="outline" className="border border-neutral-700 hover:border-neutral-500 bg-transparent text-neutral-300 hover:text-white px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5 group">
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" /> Resume
              </Button>
              <Button onClick={openLinkedIn} variant="outline" className="border border-neutral-700 hover:border-neutral-500 bg-transparent text-neutral-300 hover:text-white px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5">
                <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
              </Button>
              <Button onClick={scrollToContact} variant="outline" className="border border-neutral-700 hover:border-neutral-500 bg-transparent text-neutral-300 hover:text-white px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5">
                <Mail className="h-4 w-4 mr-2" /> Contact
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="hidden lg:flex flex-col items-start text-neutral-600 mt-16"
            >
              <p className="mb-2 text-xs tracking-[0.3em] uppercase">Scroll</p>
              <div className="w-[1px] h-12 bg-neutral-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-neutral-400 animate-bounce" />
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 order-1 lg:order-2 mt-8 lg:mt-0"
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full border border-neutral-800 group-hover:border-neutral-600 transition-all duration-700 group-hover:rotate-6" />
              <div className="absolute -inset-8 rounded-full border border-neutral-900 group-hover:border-neutral-700 transition-all duration-700 delay-100 group-hover:-rotate-3" />
              
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma"
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl shadow-black/50 relative z-10 transform transition-all duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
              />
              
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-neutral-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-700 shadow-lg">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-neutral-300">Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
