
export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Chandigarh University",
      year: "2022-2025",
      description: "Focused on computer science fundamentals, software engineering principles, and modern development practices",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
              <p className="text-purple-400 mb-2">{edu.school} • {edu.year}</p>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
