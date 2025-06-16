
export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Chandigarh University",
      year: "2022-2025",
      cgpa: "8.6",
      description: "Currently pursuing my Bachelor's degree with exceptional academic performance. Focused on cutting-edge computer science fundamentals, software engineering principles, and modern development practices. Consistently maintaining high academic standards while actively engaging in practical projects and real-world applications.",
      highlights: [
        "Specialized in Full-Stack Web Development",
        "Advanced Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering & Project Management",
        "Artificial Intelligence & Machine Learning",
        "Cloud Computing Technologies"
      ]
    },
    {
      degree: "Higher Secondary Education",
      school: "Samtse Higher Secondary School",
      year: "",
      grade: "Science Stream",
      description: "Completed my higher secondary education with distinction in the Science stream, laying a strong foundation in mathematics, physics, and computer science. This period was crucial in developing my analytical thinking and problem-solving skills that now drive my passion for technology and innovation.",
      highlights: [
        "Mathematics & Advanced Calculus",
        "Physics & Applied Sciences",
        "Computer Science Fundamentals",
        "Strong analytical and logical reasoning",
        "Leadership roles in student activities",
        "Consistent academic excellence"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 via-background to-muted/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A foundation built on academic excellence and practical application
          </p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-card/60 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-border/50 hover:border-purple-400/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <p className="text-blue-400 font-semibold text-lg">{edu.school}</p>
                    {edu.year && (
                      <>
                        <span className="hidden sm:block text-muted-foreground">•</span>
                        <p className="text-muted-foreground">{edu.year}</p>
                      </>
                    )}
                  </div>
                  {edu.cgpa && (
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 px-4 py-2 rounded-full border border-green-500/20 mb-4">
                      <span className="text-green-400 font-bold">CGPA: {edu.cgpa}</span>
                    </div>
                  )}
                  {edu.grade && (
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-500/20 mb-4">
                      <span className="text-purple-400 font-semibold">{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {edu.description}
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Areas of Study:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
