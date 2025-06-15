
export function ProjectsSection() {
  const projects = [
    {
      title: "Druk Scholars Guide",
      description: "An educational web platform built for Bhutanese students to explore scholarships, resources, and career tips. Features responsive UI, light/dark mode, and fast performance.",
      tech: ["TypeScript", "Vite", "TailwindCSS"],
      link: "https://druk-scholars-guide.vercel.app",
      githubLink: "https://github.com/skills-beep/druk-scholars-guide"
    },
    {
      title: "Pulse Robot",
      description: "A fast, responsive web app template built with modern technologies. Offers clean design, modular components, and easy customization for modern web projects.",
      tech: ["Vite", "TailwindCSS", "TypeScript"],
      link: "https://p-794466.vercel.app",
      githubLink: "https://github.com/skills-beep/Pulse_Robot"
    },
    {
      title: "Druk Textiles",
      description: "A modern web app for smart textile technology featuring modular UI with shadcn/ui for wearable data integration and rapid development.",
      tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
      link: "https://druk-textiles.vercel.app",
      githubLink: "https://github.com/skills-beep/Druk-Textiles"
    },
    {
      title: "Midnight Chess Mastery",
      description: "A sleek, AI-powered web app where you play chess against friends or AI opponents, featuring modern UI, theme customization, responsive design, and smooth animations.",
      tech: ["React", "TypeScript", "Vite", "AI Integration"],
      link: "https://midnight-chess-mastery.vercel.app",
      githubLink: "https://github.com/skills-beep/midnight-chess-mastery"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-sm font-medium"
                >
                  Live Demo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-md transition-colors text-sm font-medium"
                >
                  GitHub
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
