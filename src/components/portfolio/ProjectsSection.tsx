
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ProjectsSection() {
  const { ref, isInView } = useScrollAnimation(0.1);

  const projects = [
    { title: "Druk Scholars Guide", description: "Educational web platform for Bhutanese students to explore scholarships and career tips.", tech: ["TypeScript", "Vite", "TailwindCSS"], link: "https://druk-scholars-guide.vercel.app", githubLink: "https://github.com/skills-beep/druk-scholars-guide" },
    { title: "Pulse Robot", description: "Fast, responsive web app template with clean design and modular components.", tech: ["Vite", "TailwindCSS", "TypeScript"], link: "https://p-794466.vercel.app", githubLink: "https://github.com/skills-beep/Pulse_Robot" },
    { title: "Druk Textiles", description: "Modern web app for smart textile technology with modular UI components.", tech: ["React", "TypeScript", "TailwindCSS", "Vite"], link: "https://druk-textiles.vercel.app", githubLink: "https://github.com/skills-beep/Druk-Textiles" },
    { title: "Midnight Chess Mastery", description: "AI-powered chess web app with modern UI, theme customization, and smooth animations.", tech: ["React", "TypeScript", "Vite", "AI"], link: "https://midnight-chess-mastery.vercel.app", githubLink: "https://github.com/skills-beep/midnight-chess-mastery" },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Projects</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Hover glow border */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-neutral-600/40 via-neutral-700/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-b from-neutral-900/70 to-neutral-950/40 p-6 rounded-2xl border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500 hover:translate-y-[-4px] h-full flex flex-col">
                {/* Project number accent */}
                <span className="text-[80px] font-black text-neutral-900/40 absolute top-2 right-4 leading-none select-none group-hover:text-neutral-800/40 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold mb-3 text-neutral-200 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-neutral-500 mb-4 leading-relaxed group-hover:text-neutral-400 transition-colors text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-neutral-800/40 text-neutral-500 rounded-lg text-xs border border-neutral-800/50 group-hover:border-neutral-700/50 group-hover:text-neutral-400 transition-colors">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 relative z-10">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-white text-black rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                    Live Demo
                    <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 hover:bg-white/5 rounded-lg transition-all duration-300 text-sm font-medium">
                    GitHub
                    <svg className="w-3.5 h-3.5 ml-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
