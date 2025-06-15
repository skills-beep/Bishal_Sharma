
export function SkillsSection() {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
    "Node.js", "Git", "Figma", "Adobe XD", "Responsive Design", "UI/UX Design"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="bg-card/50 backdrop-blur-sm p-4 rounded-lg text-center border border-border hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="text-card-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
