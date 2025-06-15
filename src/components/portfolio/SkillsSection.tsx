
export function SkillsSection() {
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
    "Node.js", "Git", "Figma", "Adobe XD", "Responsive Design", "UI/UX Design"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-700 hover:border-purple-500 transition-colors"
            >
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
