
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CertificatesSection() {
  const { ref, isInView } = useScrollAnimation(0.1);

  const certificates = [
    { title: "Certificate of Academic Excellence", issuer: "Chandigarh University", description: "Outstanding academic performance, top rank in Dec 2022 & May 2023", link: "https://drive.google.com/file/d/1R-rMCPlw81V3MeMJWtjXgahFchXFfo4W/view?usp=drive_link", featured: true, isHighlight: true },
    { title: "Google AI Essentials", issuer: "Google", description: "AI fundamentals and practical applications", link: "https://drive.google.com/file/d/1hmKM_vPOim-zwLRPSgnmW7_DHloALDSL/view?usp=drive_link", featured: true, isHighlight: false },
    { title: "Advanced React", issuer: "Meta", description: "Hooks, context, and performance optimization", link: "https://drive.google.com/file/d/1byzlbN-wYdK-4Pj5RlW9DV1kzhfEqRVI/view?usp=drive_link", featured: true, isHighlight: false },
    { title: "Advertising with Meta", issuer: "Meta", description: "Digital marketing and social media strategies", link: "https://drive.google.com/file/d/1-c7TrLYXOmESqPg2HxIBYv-LVSfF8m1L/view?usp=drive_link", featured: false, isHighlight: false },
    { title: "Advanced Python", issuer: "Certification Authority", description: "Advanced Python programming and data structures", link: "https://drive.google.com/file/d/1v2x5cvs6gseDRyCpKn_-7wEjcVsyv1T8/view?usp=drive_link", featured: false, isHighlight: false },
    { title: "Linux System Administration", issuer: "Certification Authority", description: "Linux sysadmin skills and command-line operations", link: "https://drive.google.com/file/d/1nQbz1Y4FMPoNQXlNYYluXy72dExOB8jS/view?usp=drive_link", featured: false, isHighlight: false },
  ];

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Achievements</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Certificates</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mt-6" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group"
            >
              {cert.featured && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className={`rounded-full p-1.5 ${cert.isHighlight ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'bg-neutral-600'}`}>
                    <Star className={`h-3 w-3 ${cert.isHighlight ? 'text-black' : 'text-white'} fill-current`} />
                  </div>
                </div>
              )}
              
              <div className="absolute -inset-[1px] bg-gradient-to-b from-neutral-600/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`relative bg-gradient-to-b from-neutral-900/70 to-neutral-950/40 p-6 rounded-2xl border transition-all duration-500 hover:translate-y-[-3px] overflow-hidden ${
                cert.isHighlight ? 'border-neutral-600/50 hover:border-neutral-500/50' : 'border-neutral-800/50 hover:border-neutral-700/50'
              }`}>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className={`p-3 rounded-xl ${cert.isHighlight ? 'bg-neutral-700/40' : 'bg-neutral-800/60'} group-hover:bg-neutral-700/50 transition-colors border border-neutral-700/30`}>
                      <Award className="h-6 w-6 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-1 text-neutral-200 group-hover:text-white transition-colors">{cert.title}</h3>
                    <p className="mb-2 text-sm font-medium text-neutral-500 group-hover:text-neutral-400 transition-colors">{cert.issuer}</p>
                    <p className="text-neutral-600 mb-4 text-sm leading-relaxed group-hover:text-neutral-500 transition-colors">{cert.description}</p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neutral-700 text-neutral-400 hover:bg-white/5 hover:border-neutral-500 hover:text-white text-xs transition-all duration-300 hover:scale-105 group/btn bg-transparent"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      View <ExternalLink className="h-3 w-3 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
                
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-1000 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
