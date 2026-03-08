
import { Building2, Calendar, MapPin, Award, Code, Database } from "lucide-react";
import { differenceInMonths, differenceInDays } from "date-fns";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function WorkExperienceSection() {
  const { ref, isInView } = useScrollAnimation(0.15);
  const startDate = new Date(2025, 7, 15);
  const endDate = new Date(2026, 1, 7);
  const totalMonths = differenceInMonths(endDate, startDate);
  const remainingDays = differenceInDays(endDate, startDate) % 30;
  
  const focusAreas = ["SAP Software Development", "IT Infrastructure Management", "Digital Transformation Initiatives", "Enterprise System Integration", "Technology Strategy & Planning", "Team Leadership & Development"];

  return (
    <section id="work-experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Professional</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">Work Experience</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-b from-neutral-700/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-neutral-800/60 hover:border-neutral-700/60 transition-all duration-500 hover:scale-[1.01]">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative shrink-0"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-3 flex items-center justify-center border border-neutral-700/50">
                    <img src="/lovable-uploads/0d7c315e-a2fa-48fd-a02d-56ecb130a489.png" alt="Tashi Commercial Corporation" className="w-full h-full object-contain rounded-xl grayscale" />
                  </div>
                </motion.div>
                
                <div className="text-center sm:text-left flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">IT Associate Manager</h3>
                  <p className="text-lg text-neutral-400 font-medium mb-3">Tashi Commercial Corporation</p>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-sm text-neutral-500">
                    <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /><span>Aug 2025 – Feb 2026</span></div>
                    <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /><span>Bhutan</span></div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 bg-gradient-to-r from-neutral-800/50 to-neutral-900/30 rounded-xl p-5 border border-neutral-800/50"
              >
                <div className="flex items-center gap-4 justify-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center">
                    <Award className="h-6 w-6 text-neutral-300" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Experience</p>
                    <p className="text-xl font-bold text-white">{totalMonths} Months{remainingDays > 0 ? ` & ${remainingDays} Days` : ""}</p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-6">
                {[
                  { icon: Award, title: "Role & Responsibilities", text: "As IT Associate Manager, I oversaw IT operations, managed digital infrastructure, and implemented technology solutions for business efficiency." },
                  { icon: Code, title: "SAP Development", text: "Actively contributed to SAP software solutions, ensuring seamless integration with existing business processes." },
                  { icon: Building2, title: "About the Company", text: "Tashi Commercial Corporation is a leading business conglomerate in Bhutan with a diverse portfolio and commitment to innovation." }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="border-l-2 border-neutral-800 pl-6 hover:border-l-4 hover:border-neutral-500 transition-all duration-300 group/item"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-neutral-500 group-hover/item:text-neutral-300 transition-colors" />
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 leading-relaxed group-hover/item:text-neutral-300 transition-colors">{item.text}</p>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-gradient-to-br from-neutral-800/30 to-neutral-900/20 rounded-2xl p-6 mt-6 border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Database className="h-5 w-5 text-neutral-500" /> Key Focus Areas
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-neutral-400">
                    {focusAreas.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.9 + i * 0.05 }}
                        className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full" />{item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
