
import { 
  Award, 
  Briefcase, 
  CheckCheck, 
  Handshake, 
  Star, 
  Users,
  Code,
  Zap,
  Target,
  Lightbulb
} from "lucide-react";

export function WhyHireMeSection() {
  const reasons = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Proficient in modern web technologies including React, TypeScript, Node.js, and cloud platforms. I can handle both frontend and backend development seamlessly.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "I deliver high-quality code quickly without compromising on standards. My experience with modern frameworks allows for rapid prototyping and development.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "I approach challenges with analytical thinking and creative solutions. Every project is an opportunity to solve real problems and create meaningful impact.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong communication skills and collaborative mindset. I work well in teams and believe the best solutions come from diverse perspectives and ideas.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Technology evolves rapidly, and so do I. I'm constantly learning new technologies and best practices to stay ahead of industry trends.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Star,
      title: "Quality Focused",
      description: "I write clean, maintainable code with proper documentation. Quality isn't just about working code—it's about code that scales and evolves with your business.",
      color: "from-red-500 to-rose-500"
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: "4+",
      label: "Live Projects",
      description: "Successfully deployed web applications"
    },
    {
      icon: CheckCheck,
      number: "100%",
      label: "On Time",
      description: "Project delivery success rate"
    },
    {
      icon: Briefcase,
      number: "Multiple",
      label: "Tech Stacks",
      description: "Expertise across various technologies"
    },
    {
      icon: Handshake,
      number: "Client",
      label: "Focused",
      description: "Dedicated to your success"
    }
  ];

  return (
    <section id="why-hire-me" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-float-slow-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Why Hire Me?
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I don't just write code—I create solutions that drive results and exceed expectations.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Key Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative bg-card/60 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-card-foreground group-hover:text-purple-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {reason.description}
                </p>
                
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-card/40 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-border/50 shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Track Record of Success
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.label}
                  className="text-center group"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold text-card-foreground mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-card-foreground">
              Ready to Build Something Amazing Together?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with clean, efficient, and scalable solutions.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
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
