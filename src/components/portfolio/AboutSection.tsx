
export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/40 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-border/50 shadow-2xl">
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-6 sm:space-y-8">
              <p className="text-xl sm:text-2xl text-center font-medium text-purple-400 mb-8 sm:mb-10 leading-relaxed">
                "Code is poetry written in logic, and I'm here to compose digital symphonies."
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                I'm a passionate computer science student and developer who believes that technology 
                has the power to transform lives and solve real-world problems. My journey began with 
                curiosity about how digital experiences are crafted, and has evolved into a deep love 
                for creating innovative solutions that make a difference.
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                What drives me is the endless possibility of turning ideas into reality through code. 
                Whether it's building responsive web applications, exploring the frontiers of artificial 
                intelligence, or diving deep into advanced programming concepts, I approach each project 
                with enthusiasm and a commitment to excellence.
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                From mastering React's intricacies to understanding AI fundamentals, from digital marketing 
                strategies to advanced Python development - I'm constantly expanding my skillset to stay 
                at the forefront of technology. I believe that the best developers are lifelong learners, 
                always ready to embrace new challenges and technologies.
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                When I'm not immersed in code, I'm exploring emerging technologies, contributing to 
                open-source projects, or sharing knowledge with fellow developers. My goal is to create 
                digital experiences that are not just functional, but truly meaningful and impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
