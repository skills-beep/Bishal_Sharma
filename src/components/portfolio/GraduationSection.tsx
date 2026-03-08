
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GraduationCap, BookOpen, Users, Trophy, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function GraduationSection() {
  const { ref, isInView } = useScrollAnimation(0.1);

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

  return (
    <section id="graduation" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-7 h-7 text-neutral-500" />
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">Milestone</span>
            <GraduationCap className="w-7 h-7 text-neutral-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Graduation Journey</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <Card className="bg-gradient-to-b from-neutral-900/70 to-neutral-950/40 backdrop-blur-xl border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500 group">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-neutral-500" /> Graduation Moments
                </CardTitle>
                <CardDescription className="text-neutral-500">Chandigarh University CS Journey</CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {graduationImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative group/img">
                          <img src={image.src} alt={image.alt} className="w-full h-72 object-cover rounded-xl grayscale-[40%] group-hover/img:grayscale-0 transition-all duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500">
                            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{image.caption}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-neutral-900/90 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white" />
                  <CarouselNext className="right-2 bg-neutral-900/90 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white" />
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 lg:order-2 space-y-5"
          >
            <Card className="bg-gradient-to-b from-neutral-900/70 to-neutral-950/40 backdrop-blur-xl border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-neutral-500" /> What I Learned
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {learnings.map((l, i) => {
                  const Icon = l.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                      className="flex gap-3 p-3 rounded-xl bg-neutral-800/20 hover:bg-neutral-800/40 border border-neutral-800/30 hover:border-neutral-700/40 transition-all duration-300 group/item hover:translate-x-1"
                    >
                      <div className="p-2 rounded-lg bg-neutral-800/60 border border-neutral-700/30 group-hover/item:scale-110 transition-transform flex-shrink-0">
                        <Icon className="w-4 h-4 text-neutral-500 group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-300 group-hover/item:text-white transition-colors">{l.title}</h4>
                        <p className="text-neutral-600 text-xs group-hover/item:text-neutral-400 transition-colors">{l.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/30 border-neutral-700/40 hover:border-neutral-600/50 transition-all duration-500 hover:translate-y-[-2px]">
                <CardContent className="pt-5 pb-5">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800/60 border border-neutral-700/40 mb-3">
                      <Trophy className="w-3 h-3 text-neutral-400" />
                      <span className="text-xs font-medium text-neutral-400">Achievement</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Top 2% Universities Worldwide</h3>
                    <p className="text-neutral-500 text-xs">QS World University Rankings 2026 • #575</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-neutral-700/20 via-neutral-600/30 to-neutral-700/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-gradient-to-b from-neutral-900/60 to-neutral-950/40 backdrop-blur-xl p-8 rounded-2xl border border-neutral-800/50">
              <blockquote className="text-lg italic text-neutral-400 leading-relaxed">
                "Learning never stops. Every challenge was a stepping stone, every failure a foundation for future success."
              </blockquote>
              <cite className="text-xs text-neutral-600 mt-4 block">— Reflecting on my journey</cite>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
