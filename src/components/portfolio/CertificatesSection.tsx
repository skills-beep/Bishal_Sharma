
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Star } from "lucide-react";

export function CertificatesSection() {
  const certificates = [
    {
      title: "Certificate of Academic Excellence",
      issuer: "Chandigarh University",
      description: "Awarded for outstanding academic performance and securing top rank in examinations during December 2022 and May 2023",
      link: "https://drive.google.com/file/d/1R-rMCPlw81V3MeMJWtjXgahFchXFfo4W/view?usp=drive_link",
      featured: true,
      isHighlight: true,
    },
    {
      title: "Google AI Essentials",
      issuer: "Google",
      description: "Comprehensive understanding of AI fundamentals and practical applications",
      link: "https://drive.google.com/file/d/1hmKM_vPOim-zwLRPSgnmW7_DHloALDSL/view?usp=drive_link",
      featured: true,
    },
    {
      title: "Advanced React",
      issuer: "Meta",
      description: "Advanced React concepts including hooks, context, and performance optimization",
      link: "https://drive.google.com/file/d/1byzlbN-wYdK-4Pj5RlW9DV1kzhfEqRVI/view?usp=drive_link",
      featured: true,
    },
    {
      title: "Advertising with Meta",
      issuer: "Meta",
      description: "Digital marketing strategies and social media marketing best practices",
      link: "https://drive.google.com/file/d/1-c7TrLYXOmESqPg2HxIBYv-LVSfF8m1L/view?usp=drive_link",
      featured: false,
    },
    {
      title: "Advanced Python",
      issuer: "Certification Authority",
      description: "Advanced Python programming concepts and data structures",
      link: "https://drive.google.com/file/d/1v2x5cvs6gseDRyCpKn_-7wEjcVsyv1T8/view?usp=drive_link",
      featured: false,
    },
    {
      title: "Linux System Administration Basics",
      issuer: "Certification Authority",
      description: "Fundamental Linux system administration skills and command-line operations",
      link: "https://drive.google.com/file/d/1nQbz1Y4FMPoNQXlNYYluXy72dExOB8jS/view?usp=drive_link",
      featured: false,
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float-slow-reverse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent transform transition-all duration-500 hover:scale-105">
            Certificates & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-scale-in"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto animate-slide-in-left">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-500 hover:scale-105 animate-fade-in ${
                cert.featured ? 'md:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {cert.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className={`rounded-full p-2 animate-pulse ${
                    cert.isHighlight 
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 shadow-[0_0_20px_rgba(251,191,36,0.5)]' 
                      : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                  }`}>
                    <Star className="h-4 w-4 text-white fill-current" />
                  </div>
                </div>
              )}
              
              <div className={`bg-card/50 backdrop-blur-sm p-6 rounded-xl border transition-all duration-500 hover:shadow-2xl group-hover:border-purple-400/50 relative overflow-hidden ${
                cert.isHighlight
                  ? 'border-amber-500/50 hover:border-amber-400/90 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-orange-500/10 shadow-[0_0_30px_rgba(251,191,36,0.15)]'
                  : cert.featured 
                    ? 'border-purple-500/30 hover:border-purple-400/70 bg-gradient-to-br from-purple-500/5 to-blue-500/5' 
                    : 'border-border hover:border-purple-500/30'
              }`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  cert.isHighlight
                    ? 'bg-gradient-to-r from-amber-500/0 via-yellow-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:via-yellow-500/10 group-hover:to-orange-500/10'
                    : 'bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5'
                }`}></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      cert.isHighlight
                        ? 'bg-gradient-to-r from-amber-500/30 to-orange-500/30 group-hover:from-amber-500/40 group-hover:to-orange-500/40'
                        : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30'
                    }`}>
                      <Award className={`h-8 w-8 transition-colors duration-300 ${
                        cert.isHighlight
                          ? 'text-amber-400 group-hover:text-amber-300'
                          : 'text-purple-400 group-hover:text-purple-300'
                      }`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      cert.isHighlight
                        ? 'text-card-foreground group-hover:text-amber-300'
                        : 'text-card-foreground group-hover:text-purple-300'
                    }`}>
                      {cert.title}
                    </h3>
                    <p className={`mb-3 font-medium transition-colors duration-300 ${
                      cert.isHighlight
                        ? 'text-amber-400 group-hover:text-amber-300'
                        : 'text-purple-400 group-hover:text-purple-300'
                    }`}>
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {cert.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:text-purple-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn backdrop-blur-sm"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
