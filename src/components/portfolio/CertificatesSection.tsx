
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Star } from "lucide-react";

export function CertificatesSection() {
  const certificates = [
    { title: "Certificate of Academic Excellence", issuer: "Chandigarh University", description: "Awarded for outstanding academic performance and securing top rank in examinations during December 2022 and May 2023", link: "https://drive.google.com/file/d/1R-rMCPlw81V3MeMJWtjXgahFchXFfo4W/view?usp=drive_link", featured: true, isHighlight: true },
    { title: "Google AI Essentials", issuer: "Google", description: "Comprehensive understanding of AI fundamentals and practical applications", link: "https://drive.google.com/file/d/1hmKM_vPOim-zwLRPSgnmW7_DHloALDSL/view?usp=drive_link", featured: true, isHighlight: false },
    { title: "Advanced React", issuer: "Meta", description: "Advanced React concepts including hooks, context, and performance optimization", link: "https://drive.google.com/file/d/1byzlbN-wYdK-4Pj5RlW9DV1kzhfEqRVI/view?usp=drive_link", featured: true, isHighlight: false },
    { title: "Advertising with Meta", issuer: "Meta", description: "Digital marketing strategies and social media marketing best practices", link: "https://drive.google.com/file/d/1-c7TrLYXOmESqPg2HxIBYv-LVSfF8m1L/view?usp=drive_link", featured: false, isHighlight: false },
    { title: "Advanced Python", issuer: "Certification Authority", description: "Advanced Python programming concepts and data structures", link: "https://drive.google.com/file/d/1v2x5cvs6gseDRyCpKn_-7wEjcVsyv1T8/view?usp=drive_link", featured: false, isHighlight: false },
    { title: "Linux System Administration Basics", issuer: "Certification Authority", description: "Fundamental Linux system administration skills and command-line operations", link: "https://drive.google.com/file/d/1nQbz1Y4FMPoNQXlNYYluXy72dExOB8jS/view?usp=drive_link", featured: false, isHighlight: false },
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white tracking-tight">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-[2px] bg-white/20 mx-auto"></div>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-500 hover:scale-105 ${cert.featured ? 'md:scale-[1.02]' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {cert.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className={`rounded-full p-2 ${cert.isHighlight ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-white/80'}`}>
                    <Star className="h-4 w-4 text-black fill-current" />
                  </div>
                </div>
              )}
              
              <div className={`bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl border transition-all duration-500 hover:bg-white/[0.06] relative overflow-hidden ${
                cert.isHighlight
                  ? 'border-white/30 hover:border-white/50'
                  : cert.featured 
                    ? 'border-white/15 hover:border-white/30' 
                    : 'border-white/10 hover:border-white/20'
              }`}>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className={`p-3 rounded-xl ${cert.isHighlight ? 'bg-white/15' : 'bg-white/10'} group-hover:bg-white/20 transition-colors duration-300`}>
                      <Award className="h-7 w-7 text-white/70 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-white transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="mb-3 font-medium text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {cert.issuer}
                    </p>
                    <p className="text-white/30 mb-4 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                      {cert.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white/60 hover:bg-white/10 hover:border-white/30 hover:text-white transform transition-all duration-300 hover:scale-105 group/btn backdrop-blur-sm bg-transparent"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
                
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
