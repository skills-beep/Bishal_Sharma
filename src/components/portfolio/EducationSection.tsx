
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function EducationSection() {
  const { ref, isInView } = useScrollAnimation(0.15);

  const education = [
    { degree: "Bachelor of Computer Science", school: "Chandigarh University", year: "2022-2025", cgpa: "8.6", description: "Exceptional academic performance focused on CS fundamentals, software engineering, and modern development." },
    { degree: "Higher Secondary Education", school: "Samtse Higher Secondary School", year: "", grade: "Science Stream", description: "Strong foundation in mathematics, physics, and computer science in the Science stream." }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Academic</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Education</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-neutral-700/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-b from-neutral-900/70 to-neutral-950/40 p-8 sm:p-10 rounded-3xl border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500 hover:translate-y-[-3px]">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white">{edu.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <p className="text-neutral-400 font-medium text-lg">{edu.school}</p>
                      {edu.year && (<><span className="hidden sm:block text-neutral-700">•</span><p className="text-neutral-500">{edu.year}</p></>)}
                    </div>
                    {edu.cgpa && (
                      <div className="inline-flex items-center gap-2 bg-neutral-800/40 px-4 py-2 rounded-full border border-neutral-700/40 mb-3">
                        <span className="text-white font-bold text-sm">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    {edu.grade && (
                      <div className="inline-flex items-center gap-2 bg-neutral-800/40 px-4 py-2 rounded-full border border-neutral-700/40 mb-3">
                        <span className="text-neutral-300 font-medium text-sm">{edu.grade}</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
