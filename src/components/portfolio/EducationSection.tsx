
export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Chandigarh University",
      year: "2022-2025",
      cgpa: "8.6",
      description: "Currently pursuing my Bachelor's degree with exceptional academic performance. Focused on cutting-edge computer science fundamentals, software engineering principles, and modern development practices."
    },
    {
      degree: "Higher Secondary Education",
      school: "Samtse Higher Secondary School",
      year: "",
      grade: "Science Stream",
      description: "Completed my higher secondary education with distinction in the Science stream, laying a strong foundation in mathematics, physics, and computer science."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-40 left-20 w-64 h-64 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white tracking-tight">
            Educational Journey
          </h2>
          <div className="w-24 h-[2px] bg-white/20 mx-auto"></div>
          <p className="text-lg text-white/40 mt-6 max-w-2xl mx-auto">
            A foundation built on academic excellence and practical application
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.05]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <p className="text-white/60 font-semibold text-lg">{edu.school}</p>
                    {edu.year && (
                      <>
                        <span className="hidden sm:block text-white/20">•</span>
                        <p className="text-white/40">{edu.year}</p>
                      </>
                    )}
                  </div>
                  {edu.cgpa && (
                    <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-4">
                      <span className="text-white font-bold">CGPA: {edu.cgpa}</span>
                    </div>
                  )}
                  {edu.grade && (
                    <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-4">
                      <span className="text-white/70 font-semibold">{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-white/40 leading-relaxed text-lg group-hover:text-white/60 transition-colors">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
