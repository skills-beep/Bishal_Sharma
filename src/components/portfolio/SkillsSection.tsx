
import { Code, Database, Palette, Globe, GitBranch, Smartphone, Monitor, Layers, Zap, Cpu, Brush, Layout } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function SkillsSection() {
  const { ref, isInView } = useScrollAnimation(0.1);

  const skills = [
    { name: "JavaScript", icon: Zap }, { name: "Java", icon: Code }, { name: "C++", icon: Cpu },
    { name: "C", icon: Code }, { name: "Python", icon: Code }, { name: "PHP", icon: Code },
    { name: "React", icon: Code }, { name: "TypeScript", icon: Cpu }, { name: "HTML5", icon: Globe },
    { name: "CSS3", icon: Palette }, { name: "Tailwind CSS", icon: Brush }, { name: "Node.js", icon: Database },
    { name: "Git", icon: GitBranch }, { name: "Figma", icon: Layout }, { name: "Adobe XD", icon: Layers },
    { name: "Responsive Design", icon: Smartphone }, { name: "UI/UX Design", icon: Monitor }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Technologies</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Skills</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-b from-neutral-600/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="relative bg-gradient-to-b from-neutral-900/60 to-neutral-950/40 p-5 rounded-2xl border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-400 hover:translate-y-[-3px] cursor-pointer">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-2.5 rounded-xl bg-neutral-800/60 group-hover:scale-110 group-hover:bg-neutral-800 transition-all duration-300 border border-neutral-700/30">
                      <IconComponent className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors">{skill.name}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-neutral-900/60 border border-neutral-800/50">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
            <span className="text-xs text-neutral-500 tracking-wider">Always learning, always growing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
