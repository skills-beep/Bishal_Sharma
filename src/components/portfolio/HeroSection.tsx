
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Linkedin, Code, Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1jnTVqiNuBN51vE7mCBi6TuBGDwRzvXVO/view?usp=drive_link", "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/bishal-sharma-12b7211b6/", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden bg-black dark:bg-black">
      {/* Subtle radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-white/40 tracking-widest uppercase animate-fade-in">
                Hi there, I'm
              </p>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight animate-fade-in">
                <span className="text-white block">
                  Bishal
                </span>
                <span className="text-transparent block mt-1" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}>
                  Sharma
                </span>
                <span className="text-white/30 text-6xl sm:text-7xl lg:text-9xl leading-none">.</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/50 animate-fade-in font-light">
                Frontend Developer <span className="text-white/80 font-normal">&</span> UI/UX Enthusiast
              </p>
              
              <p className="text-base text-white/30 max-w-xl lg:mx-0 mx-auto leading-relaxed animate-fade-in">
                I design and build clean, modern, and responsive web experiences that delight 
                users and help businesses grow. Let's turn your ideas into digital reality.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-10 animate-fade-in">
              <Button
                onClick={scrollToProjects}
                className="bg-white hover:bg-white/90 text-black px-7 py-3 rounded-full flex items-center gap-2 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group border-0"
              >
                View Projects 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={openResume}
                variant="outline"
                className="border border-white/20 hover:border-white/40 bg-transparent text-white px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5 group"
              >
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Resume
              </Button>
              <Button
                onClick={openLinkedIn}
                variant="outline"
                className="border border-white/20 hover:border-white/40 bg-transparent text-white px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5 group"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border border-white/20 hover:border-white/40 bg-transparent text-white px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5 group"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>

            <div className="hidden lg:flex flex-col items-start text-white/30 mt-16 animate-fade-in">
              <p className="mb-2 text-sm tracking-widest uppercase">Scroll</p>
              <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 mt-8 lg:mt-0 animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-3 rounded-full border border-white/10 group-hover:border-white/20 transition-all duration-700" />
              <div className="absolute -inset-6 rounded-full border border-white/5 group-hover:border-white/10 transition-all duration-700 delay-100" />
              
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma"
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl shadow-white/5 relative z-10 transform transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-medium text-white/80">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
