
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GraduationCap, BookOpen, Users, Trophy, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function GraduationSection() {
  const { ref, isInView } = useScrollAnimation(0.05);

  const graduationImages = [
    { src: "/lovable-uploads/a83192a6-702d-4d19-ad6a-253948350ae9.png", alt: "Graduation", caption: "TOP 2% Universities Worldwide" },
    { src: "/lovable-uploads/fd5e6b3e-79d4-442c-969c-399347add64d.png", alt: "Ceremony", caption: "Graduation Ceremony - June 28, 2025" },
    { src: "/lovable-uploads/6bc20c1b-d470-47ef-98fc-ca61b29ef4f0.png", alt: "Achievement", caption: "A moment of achievement" },
    { src: "/lovable-uploads/f21ea6f0-e3e7-4cee-9186-4c821af7276c.png", alt: "Speech", caption: "Delivering graduation speech" },
    { src: "/lovable-uploads/af9bbb9c-8aa9-43e4-ad50-6c8accb6778e.png", alt: "Final", caption: "3 years of hard work" }
  ];

  const learnings = [
    { icon: BookOpen, title: "Technical Excellence", description: "Programming, algorithms, and software development." },
    { icon: Users, title: "Collaborative Growth", description: "Teamwork and diverse perspectives." },
    { icon: Target, title: "Problem-Solving", description: "Analytical and systematic thinking." },
    { icon: Trophy, title: "Perseverance", description: "Resilience through challenges." },
    { icon: Heart, title: "Innovation Passion", description: "Creating meaningful technology." }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } }
  };

  return (
    <section id="graduation" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-sm mb-6">
            <GraduationCap className="w-4 h-4 text-emerald-400/70" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-neutral-500 font-medium">Milestone</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Graduation Journey</h2>
          <p className="text-neutral-500 text-sm mt-4 max-w-md mx-auto">Three years of dedication at Chandigarh University, culminating in a Computer Science degree.</p>
        </motion.div>

        {/* Main content - stacked layout */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800/40 bg-neutral-950/60 backdrop-blur-sm">
            <Carousel className="w-full">
              <CarouselContent>
                {graduationImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative group/img">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[320px] sm:h-[420px] object-cover transition-all duration-700 group-hover/img:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-white/90 text-sm font-medium tracking-wide">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 bg-black/50 border-white/10 text-white/70 hover:bg-black/70 hover:text-white backdrop-blur-sm" />
              <CarouselNext className="right-3 bg-black/50 border-white/10 text-white/70 hover:bg-black/70 hover:text-white backdrop-blur-sm" />
            </Carousel>
          </div>
        </motion.div>

        {/* Learnings grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {learnings.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/40 hover:border-neutral-700/50 backdrop-blur-sm transition-colors duration-300 group/item"
              >
                <div className="p-2 rounded-lg bg-neutral-800/50 border border-neutral-700/20 w-fit mb-3 group-hover/item:bg-emerald-500/10 group-hover/item:border-emerald-500/20 transition-colors duration-300">
                  <Icon className="w-4 h-4 text-neutral-500 group-hover/item:text-emerald-400 transition-colors duration-300" />
                </div>
                <h4 className="text-sm font-semibold text-neutral-300 group-hover/item:text-white transition-colors">{l.title}</h4>
                <p className="text-neutral-600 text-xs mt-1 leading-relaxed">{l.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-neutral-900/50 border border-neutral-800/40 backdrop-blur-sm">
            <Trophy className="w-4 h-4 text-emerald-400/60" />
            <div className="text-center">
              <span className="text-sm font-bold text-white">Top 2% Universities Worldwide</span>
              <span className="text-neutral-600 text-xs ml-2">QS Rankings 2026 • #575</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
