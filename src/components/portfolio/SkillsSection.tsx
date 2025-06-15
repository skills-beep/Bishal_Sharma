
import { 
  Code, 
  Database, 
  Palette, 
  Globe, 
  GitBranch, 
  Smartphone,
  Monitor,
  Layers,
  Zap,
  Cpu,
  Brush,
  Layout
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    { name: "React", icon: Code, color: "text-blue-400" },
    { name: "TypeScript", icon: Cpu, color: "text-blue-500" },
    { name: "JavaScript", icon: Zap, color: "text-yellow-400" },
    { name: "HTML5", icon: Globe, color: "text-orange-500" },
    { name: "CSS3", icon: Palette, color: "text-blue-300" },
    { name: "Tailwind CSS", icon: Brush, color: "text-cyan-400" },
    { name: "Node.js", icon: Database, color: "text-green-500" },
    { name: "Git", icon: GitBranch, color: "text-red-400" },
    { name: "Figma", icon: Layout, color: "text-purple-400" },
    { name: "Adobe XD", icon: Layers, color: "text-pink-400" },
    { name: "Responsive Design", icon: Smartphone, color: "text-indigo-400" },
    { name: "UI/UX Design", icon: Monitor, color: "text-emerald-400" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-cyan-500 blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl p-6 rounded-2xl border border-border/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Animated underline */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Always learning, always growing</span>
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
