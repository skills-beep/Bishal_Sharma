
export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma - Frontend Developer"
                className="w-64 h-64 object-cover rounded-2xl shadow-2xl border border-border/20 animate-float-slow"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 lg:order-1">
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                I'm a passionate frontend developer with a love for creating beautiful and functional web experiences. 
                With expertise in modern web technologies, I bring designs to life with clean, efficient code.
              </p>
              <p>
                My journey in web development started with curiosity about how websites work, and has evolved into 
                a career focused on user experience and modern development practices. I believe in writing code 
                that not only works well but is also maintainable and scalable.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I'm always excited to take on new challenges 
                and collaborate on innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
