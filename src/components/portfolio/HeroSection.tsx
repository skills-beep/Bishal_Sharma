
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Linkedin, MapPin, Briefcase, FileText, Eye, X } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const RESUME_FILE_ID = "1ByXBtR0fbb_qdNlmqUIgpaQ8eFjBOS9x";
const RESUME_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=drive_link`;
const RESUME_PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

export function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const downloadResume = () => window.open(RESUME_DOWNLOAD_URL, "_blank");
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/bishal-sharma-12b7211b6/", "_blank");
  };

  // 3D scroll parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Mouse-based 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative overflow-hidden" style={{ perspective: 1200 }}>
      {/* Ambient glow — richer */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-teal-400/[0.06] rounded-full blur-[140px]" />

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
            
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <span className="h-[1px] w-8 bg-gradient-to-r from-emerald-400/60 to-transparent" />
              <p className="text-xs sm:text-sm text-emerald-400/80 tracking-[0.3em] uppercase font-medium">
                Hi there, I'm
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 relative z-10">
              <span className="block bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent">Bishal</span>
              <span className="text-transparent block mt-1" style={{ WebkitTextStroke: '1.5px rgba(52, 211, 153, 0.55)' }}>
                Sharma
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-light mb-3 relative z-10">
              Product Engineer <span className="text-emerald-400">&</span> UI/UX Enthusiast
            </p>
            <p className="text-sm text-neutral-500 max-w-md leading-relaxed relative z-10">
              I design and build clean, modern, and responsive web experiences
              that delight users and help businesses grow.
            </p>
          </motion.div>

          {/* Profile image card - spans 4 cols - 3D tilt + scroll parallax */}
          <motion.div
            variants={itemVariants}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ y: imageY, scale: imageScale, transformStyle: "preserve-3d" }}
            className="lg:col-span-4 bg-gradient-to-br from-neutral-900/80 to-neutral-950/60 backdrop-blur-xl rounded-3xl border border-neutral-800/50 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-700 flex items-center justify-center p-6 min-h-[340px] lg:min-h-[420px]"
          >
            {/* Animated gradient aura */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-cyan-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-cyan-500/5 group-hover:to-emerald-500/10 transition-all duration-1000" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-20 opacity-30"
              style={{ background: "conic-gradient(from 0deg, transparent, rgba(52,211,153,0.15), transparent, rgba(34,211,238,0.15), transparent)" }}
            />

            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-emerald-500/30"
              />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500/40 via-cyan-400/30 to-emerald-500/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-emerald-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-neutral-950" />
              </div>
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma — Product Engineer"
                style={{ transform: "translateZ(40px)" }}
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative z-10 transition-all duration-700 group-hover:scale-105"
              />
              <motion.div
                style={{ transform: "translateZ(60px)" }}
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-neutral-900/95 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-500/30 shadow-2xl shadow-emerald-500/20"
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-neutral-200 tracking-wide">Available for Work</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA buttons row */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 backdrop-blur-xl rounded-3xl p-6 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-700"
          >
            <div className="flex flex-wrap gap-3">
              <Button onClick={scrollToProjects} className="bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] group border-0">
                View Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => setResumeOpen(true)} className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] border-0">
                <Eye className="h-4 w-4" /> View Resume / CV
              </Button>
              <Button onClick={downloadResume} variant="outline" className="border border-neutral-700 hover:border-emerald-500/50 bg-transparent text-neutral-300 hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5 group">
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" /> Download
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
            className="lg:col-span-3 bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 backdrop-blur-xl rounded-3xl p-6 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-700 flex flex-col justify-center items-center text-center group"
            whileHover={{ scale: 1.05, y: -4 }}
          >
            <MapPin className="h-5 w-5 text-emerald-400/70 mb-2 group-hover:text-emerald-400 transition-colors" />
            <span className="text-xs text-neutral-400 tracking-wider">Bhutan</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 bg-gradient-to-br from-neutral-900/60 to-neutral-950/40 backdrop-blur-xl rounded-3xl p-6 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-700 flex flex-col justify-center items-center text-center group"
            whileHover={{ scale: 1.05, y: -4 }}
          >
            <Briefcase className="h-5 w-5 text-cyan-400/70 mb-2 group-hover:text-cyan-400 transition-colors" />
            <span className="text-xs text-neutral-400 tracking-wider">Product Engineer</span>
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

      {/* Resume / CV viewer modal */}
      <Dialog open={resumeOpen} onOpenChange={setResumeOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] bg-neutral-950 border-neutral-800 p-0 overflow-hidden">
          <DialogHeader className="px-6 py-4 border-b border-neutral-800 flex flex-row items-center justify-between space-y-0">
            <DialogTitle className="text-neutral-100 flex items-center gap-2">
              <FileText className="h-5 w-5 text-emerald-400" /> Resume & CV — Bishal Sharma
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button size="sm" onClick={downloadResume} className="bg-emerald-500 hover:bg-emerald-400 text-black rounded-full">
                <Download className="h-4 w-4 mr-2" /> Download
              </Button>
              <Button size="sm" variant="outline" onClick={() => window.open(RESUME_URL, "_blank")} className="border-neutral-700 text-neutral-300 hover:text-white rounded-full">
                Open in Drive
              </Button>
            </div>
          </DialogHeader>
          <iframe
            src={RESUME_PREVIEW_URL}
            title="Bishal Sharma Resume"
            className="w-full h-full bg-white"
            allow="autoplay"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
