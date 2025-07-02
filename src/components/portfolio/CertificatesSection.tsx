
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

export function CertificatesSection() {
  const certificates = [
    {
      title: "Google AI Essentials",
      issuer: "Google",
      description: "Comprehensive understanding of AI fundamentals and practical applications",
      link: "https://drive.google.com/file/d/1hmKM_vPOim-zwLRPSgnmW7_DHloALDSL/view?usp=drive_link",
    },
    {
      title: "Advanced React",
      issuer: "Meta",
      description: "Advanced React concepts including hooks, context, and performance optimization",
      link: "https://drive.google.com/file/d/1byzlbN-wYdK-4Pj5RlW9DV1kzhfEqRVI/view?usp=drive_link",
    },
    {
      title: "Advertising with Meta",
      issuer: "Meta",
      description: "Digital marketing strategies and social media marketing best practices",
      link: "https://drive.google.com/file/d/1-c7TrLYXOmESqPg2HxIBYv-LVSfF8m1L/view?usp=drive_link",
    },
    {
      title: "Advanced Python",
      issuer: "Certification Authority",
      description: "Advanced Python programming concepts and data structures",
      link: "https://drive.google.com/file/d/1v2x5cvs6gseDRyCpKn_-7wEjcVsyv1T8/view?usp=drive_link",
    },
    {
      title: "Linux System Administration Basics",
      issuer: "Certification Authority",
      description: "Fundamental Linux system administration skills and command-line operations",
      link: "https://drive.google.com/file/d/1nQbz1Y4FMPoNQXlNYYluXy72dExOB8jS/view?usp=drive_link",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Award className="h-8 w-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{cert.title}</h3>
                  <p className="text-purple-400 mb-3 font-medium">{cert.issuer}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
