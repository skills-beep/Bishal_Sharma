
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Linkedin, MapPin, Briefcase } from "lucide-react";
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

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[180px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-min">
          
          {/* Main intro card - spans 8 cols */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 bg-gradient-to-br from-neutral-900/80 to-neutral-950/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 border border-neutral-800/50 relative overflow-hidden group hover:border-neutral-700/50 transition-all duration-700"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-full blur-[80px] group-hover:from-emerald-500/10 transition-all duration-700" />
            
            <p className="text-xs sm:text-sm text-neutral-500 tracking-[0.3em] uppercase mb-4 relative z-10">
              Hi there, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 relative z-10">
              <span className="text-white block">Bishal</span>
              <span className="text-transparent block mt-1" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>
                Sharma
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 font-light mb-2 relative z-10">
              Frontend Developer <span className="text-emerald-400/80">&</span> UI/UX Enthusiast
            </p>
            <p className="text-sm text-neutral-500 max-w-md leading-relaxed relative z-10">
              I design and build clean, modern, and responsive web experiences
              that delight users and help businesses grow.
            </p>
          </motion.div>

          {/* Profile image card - spans 4 cols */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 bg-gradient-to-br from-neutral-900/80 to-neutral-950/60 backdrop-blur-xl rounded-3xl border border-neutral-800/50 relative overflow-hidden group hover:border-neutral-700/50 transition-all duration-700 flex items-center justify-center p-6"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full border border-neutral-800/50 group-hover:border-emerald-500/20 transition-all duration-700 group-hover:rotate-6" />
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-full lg:h-auto lg:max-w-[240px] object-cover rounded-full shadow-2xl shadow-black/50 relative z-10 transform transition-all duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute bottom-2 right-2 z-20 flex items-center gap-2 bg-neutral-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-700 shadow-lg">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-neutral-300">Available</span>
              </div>
            </div>
          </motion.div>

          {/* CTA buttons row */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 backdrop-blur-xl rounded-3xl p-6 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-700"
          >
            <div className="flex flex-wrap gap-3">
              <Button onClick={scrollToProjects} className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)] group border-0">
                View Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={openResume} variant="outline" className="border border-neutral-700 hover:border-neutral-500 bg-transparent text-neutral-300 hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5 group">
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" /> Resume
              </Button>
              <Button onClick={openLinkedIn} variant="outline" className="border border-neutral-700 hover:border-neutral-500 bg-transparent text-neutral-300 hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5">
                <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
              </Button>
              <Button onClick={scrollToContact} variant="outline" className="border border-neutral-700 hover:border-neutral-500 bg-transparent text-neutral-300 hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5">
                <Mail className="h-4 w-4 mr-2" /> Contact
              </Button>
            </div>
          </motion.div>

          {/* Location & Role cards */}

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 backdrop-blur-xl rounded-3xl p-6 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-700 flex flex-col justify-center items-center text-center"
          >
            <MapPin className="h-5 w-5 text-neutral-500 mb-2" />
            <span className="text-xs text-neutral-400 tracking-wider">Bhutan</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 backdrop-blur-xl rounded-3xl p-6 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-700 flex flex-col justify-center items-center text-center"
          >
            <Briefcase className="h-5 w-5 text-neutral-500 mb-2" />
            <span className="text-xs text-neutral-400 tracking-wider">IT Manager</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex flex-col items-center text-neutral-600">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3">Scroll</p>
            <div className="w-5 h-8 border border-neutral-700 rounded-full flex justify-center relative">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 bg-emerald-400 rounded-full mt-1.5"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
