
import { Award, Briefcase, CheckCheck, Handshake, Star, Users, Code, Zap, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function WhyHireMeSection() {
  const { ref, isInView } = useScrollAnimation(0.1);

  const reasons = [
    { icon: Code, title: "Full-Stack Expertise", description: "React, TypeScript, Node.js, and cloud platforms." },
    { icon: Zap, title: "Fast & Efficient", description: "High-quality code delivered quickly without compromise." },
    { icon: Target, title: "Problem Solver", description: "Analytical thinking with creative solutions." },
    { icon: Users, title: "Team Player", description: "Strong communication and collaborative mindset." },
    { icon: Lightbulb, title: "Continuous Learner", description: "Always staying ahead of industry trends." },
    { icon: Star, title: "Quality Focused", description: "Clean, maintainable, well-documented code." }
  ];

  const achievements = [
    { icon: Award, number: "4+", label: "Live Projects" },
    { icon: CheckCheck, number: "100%", label: "On Time" },
    { icon: Briefcase, number: "Multiple", label: "Tech Stacks" },
    { icon: Handshake, number: "Client", label: "Focused" }
  ];

  return (
    <section id="why-hire-me" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Why me</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">Why Hire Me?</h2>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto mt-6 leading-relaxed">I create solutions that drive results.</p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-b from-neutral-700/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-b from-neutral-900/60 to-neutral-950/40 p-7 rounded-3xl border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500 hover:translate-y-[-4px]">
                  <div className="inline-flex p-3 rounded-2xl bg-neutral-800/60 mb-5 group-hover:scale-110 group-hover:bg-neutral-800 transition-all duration-300 border border-neutral-700/30">
                    <IconComponent className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-neutral-200 group-hover:text-white transition-colors">{reason.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm group-hover:text-neutral-400 transition-colors">{reason.description}</p>
                  <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-neutral-700/0 to-transparent group-hover:via-neutral-600/50 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative group"
        >
          <div className="absolute -inset-[1px] bg-gradient-to-r from-neutral-700/20 via-neutral-600/30 to-neutral-700/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative bg-gradient-to-r from-neutral-900/60 via-neutral-900/80 to-neutral-900/60 p-8 sm:p-12 rounded-3xl border border-neutral-800/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1, type: "spring" }}
                    className="text-center group/item"
                  >
                    <div className="inline-flex p-3 rounded-2xl bg-neutral-800/60 mb-4 group-hover/item:scale-110 transition-transform border border-neutral-700/30">
                      <Icon className="w-6 h-6 text-neutral-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-white mb-1">{a.number}</div>
                    <div className="text-sm font-medium text-neutral-400">{a.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-neutral-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Let's Work Together <Handshake className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
