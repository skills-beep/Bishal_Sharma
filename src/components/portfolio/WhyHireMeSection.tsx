
import { 
  Award, Briefcase, CheckCheck, Handshake, Star, Users, Code, Zap, Target, Lightbulb
} from "lucide-react";

export function WhyHireMeSection() {
  const reasons = [
    { icon: Code, title: "Full-Stack Expertise", description: "Proficient in modern web technologies including React, TypeScript, Node.js, and cloud platforms." },
    { icon: Zap, title: "Fast & Efficient", description: "I deliver high-quality code quickly without compromising on standards." },
    { icon: Target, title: "Problem Solver", description: "I approach challenges with analytical thinking and creative solutions." },
    { icon: Users, title: "Team Player", description: "Strong communication skills and collaborative mindset for the best solutions." },
    { icon: Lightbulb, title: "Continuous Learner", description: "Constantly learning new technologies and best practices to stay ahead." },
    { icon: Star, title: "Quality Focused", description: "Clean, maintainable code with proper documentation that scales." }
  ];

  const achievements = [
    { icon: Award, number: "4+", label: "Live Projects", description: "Successfully deployed web applications" },
    { icon: CheckCheck, number: "100%", label: "On Time", description: "Project delivery success rate" },
    { icon: Briefcase, number: "Multiple", label: "Tech Stacks", description: "Expertise across various technologies" },
    { icon: Handshake, number: "Client", label: "Focused", description: "Dedicated to your success" }
  ];

  return (
    <section id="why-hire-me" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
            Why Hire Me?
          </h2>
          <p className="text-xl sm:text-2xl text-white/40 max-w-3xl mx-auto leading-relaxed">
            I don't just write code—I create solutions that drive results.
          </p>
          <div className="w-32 h-[2px] bg-white/20 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative bg-white/[0.03] backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-500 hover:scale-105 hover:bg-white/[0.06]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-2xl bg-white/10 mb-6 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-white/80" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {reason.description}
                </p>
                
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white/30 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/10">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
            Track Record
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={achievement.label} className="text-center group" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="inline-flex p-4 rounded-2xl bg-white/10 mb-4 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-white/80" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-white/70 mb-1">{achievement.label}</div>
                  <div className="text-sm text-white/30">{achievement.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-white/40 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Let's Work Together
              <Handshake className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
