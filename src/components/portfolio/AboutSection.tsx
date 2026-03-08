
export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-[2px] bg-white/30 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.01]">
            <div className="text-base sm:text-lg text-white/60 leading-relaxed space-y-6 sm:space-y-8">
              <p className="text-xl sm:text-2xl text-center font-medium text-white/80 mb-8 sm:mb-10 leading-relaxed italic">
                "Code is poetry written in logic, and I'm here to compose digital symphonies."
              </p>
              
              <p className="leading-8 sm:leading-9 text-lg">
                I'm currently serving as an <span className="font-semibold text-white">IT Associate Manager at Tashi Commercial Corporation</span>, 
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
