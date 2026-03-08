
import { 
  Code, Database, Palette, Globe, GitBranch, Smartphone, Monitor, Layers, Zap, Cpu, Brush, Layout
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    { name: "JavaScript", icon: Zap },
    { name: "Java", icon: Code },
    { name: "C++", icon: Cpu },
    { name: "C", icon: Code },
    { name: "Python", icon: Code },
    { name: "PHP", icon: Code },
    { name: "React", icon: Code },
    { name: "TypeScript", icon: Cpu },
    { name: "HTML5", icon: Globe },
    { name: "CSS3", icon: Palette },
    { name: "Tailwind CSS", icon: Brush },
    { name: "Node.js", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "Figma", icon: Layout },
    { name: "Adobe XD", icon: Layers },
    { name: "Responsive Design", icon: Smartphone },
    { name: "UI/UX Design", icon: Monitor }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white tracking-tight">
            Skills
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-[2px] bg-white/20 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-white/[0.03] backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-500 hover:scale-105 hover:bg-white/[0.06] cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <div className="w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10">
            <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
            <span className="text-sm text-white/40">Always learning, always growing</span>
            <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
