
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const { ref, isInView } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Section accent - gradient strip */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Get to know me</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Card glow effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-neutral-700/50 via-neutral-800/30 to-neutral-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-b from-neutral-900/80 to-neutral-950/60 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-neutral-800/60 hover:border-neutral-700/60 transition-all duration-500">
              <div className="text-base sm:text-lg text-neutral-400 leading-relaxed space-y-6 sm:space-y-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl sm:text-2xl text-center font-light text-neutral-300 mb-8 sm:mb-10 leading-relaxed italic border-l-2 border-neutral-700 pl-6 mx-auto max-w-2xl text-left"
                >
                  "Code is poetry written in logic, and I'm here to compose digital symphonies."
                </motion.p>
                
                {[
                  <>I'm currently serving as an <span className="font-semibold text-white">IT Associate Manager at Tashi Commercial Corporation</span>, where I lead technology initiatives and drive digital transformation. My journey combines a passion for computer science with real-world business impact.</>,
                  <>What drives me is the endless possibility of turning innovative ideas into reality through code. I oversee IT infrastructure, implement strategic technology solutions, and lead digital initiatives that enhance business efficiency and growth.</>,
                  <>From mastering React's intricacies to understanding AI fundamentals, from digital marketing strategies to enterprise IT management - I'm constantly expanding my skillset to stay at the forefront of technology.</>,
                  <>When I'm not managing IT operations, I'm exploring emerging technologies, contributing to open-source projects, and sharing knowledge. My goal is to create digital experiences that are truly meaningful and impactful.</>
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                    className="leading-8 sm:leading-9 text-lg hover:text-neutral-300 transition-colors duration-300"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
