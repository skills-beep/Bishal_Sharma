
export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20 dark:opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
            <div className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 sm:space-y-8">
              <p className="text-xl sm:text-2xl text-center font-medium text-purple-600 dark:text-purple-400 mb-8 sm:mb-10 leading-relaxed">
                "Code is poetry written in logic, and I'm here to compose digital symphonies."
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                I'm currently serving as an <span className="font-semibold text-purple-600 dark:text-purple-400">IT Associate Manager at Tashi Commercial Corporation</span>, 
                where I lead technology initiatives and drive digital transformation across the organization. 
                My journey combines a passion for computer science with real-world business impact, 
                believing that technology has the power to transform lives and solve complex problems.
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                What drives me is the endless possibility of turning innovative ideas into reality through code. 
                In my current role, I oversee IT infrastructure, implement strategic technology solutions, 
                and lead digital initiatives that enhance business efficiency and growth. Whether it's 
                building responsive web applications, exploring AI frontiers, or managing enterprise systems, 
                I approach each challenge with enthusiasm and commitment to excellence.
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                From mastering React's intricacies to understanding AI fundamentals, from digital marketing 
                strategies to advanced Python development and enterprise IT management - I'm constantly 
                expanding my skillset to stay at the forefront of technology. I believe that the best 
                developers and IT leaders are lifelong learners, always ready to embrace new challenges.
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                When I'm not managing IT operations or immersed in code, I'm exploring emerging technologies, 
                contributing to open-source projects, and sharing knowledge with fellow developers and IT 
                professionals. My goal is to create digital experiences and infrastructure solutions that 
                are not just functional, but truly meaningful and impactful for businesses and users alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
