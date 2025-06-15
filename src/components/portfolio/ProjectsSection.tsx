
export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution built with React and TypeScript",
      tech: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark theme and animations",
      tech: ["React", "CSS3", "JavaScript"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
