
export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      year: "2020-2024",
      description: "Focused on software development and web technologies",
    },
    {
      degree: "Frontend Development Bootcamp",
      school: "Tech Academy",
      year: "2023",
      description: "Intensive program covering modern frontend frameworks",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-purple-400 mb-2">{edu.school} • {edu.year}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
