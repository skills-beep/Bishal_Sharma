
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-violet-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Refined background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-200/30 dark:bg-violet-500/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-200/20 dark:bg-rose-500/8 rounded-full blur-[100px] animate-float-slow-reverse" />
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Code className="absolute top-24 left-[10%] w-5 h-5 text-violet-400/20 dark:text-violet-400/10 animate-float" />
        <Sparkles className="absolute top-[30%] right-[15%] w-4 h-4 text-rose-400/20 dark:text-rose-400/10 animate-float-random" />
        <Code className="absolute bottom-[25%] left-[20%] w-4 h-4 text-sky-400/20 dark:text-sky-400/10 animate-float-slow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground tracking-wide animate-fade-in">
                Hi there, I'm
              </p>
              
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight animate-fade-in">
                <span className="text-foreground block">
                  Bishal
                </span>
                <span className="text-transparent block mt-1" style={{ WebkitTextStroke: '2px', WebkitTextStrokeColor: 'hsl(var(--foreground))' }}>
                  Sharma
                </span>
                <span className="text-violet-600 dark:text-violet-400 text-6xl sm:text-7xl lg:text-9xl leading-none">.</span>
              </h1>
              
              <div className="relative">
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground animate-fade-in font-light">
                  Frontend Developer <span className="text-violet-600 dark:text-violet-400 font-normal">&</span> UI/UX Enthusiast
                </p>
              </div>
              
              <p className="text-base text-muted-foreground max-w-xl lg:mx-0 mx-auto leading-relaxed animate-fade-in">
                I design and build clean, modern, and responsive web experiences that delight 
                users and help businesses grow. Let's turn your ideas into digital reality.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-10 animate-fade-in">
              <Button
                onClick={scrollToProjects}
                className="bg-foreground hover:bg-foreground/90 text-background px-7 py-3 rounded-full flex items-center gap-2 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group border-0"
              >
                View Projects 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={openResume}
                variant="outline"
                className="border-2 border-foreground/20 hover:border-foreground/40 bg-transparent px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 group"
              >
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Resume
              </Button>
              <Button
                onClick={openLinkedIn}
                variant="outline"
                className="border-2 border-foreground/20 hover:border-violet-500 bg-transparent hover:text-violet-600 dark:hover:text-violet-400 px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 group"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-foreground/20 hover:border-rose-500 bg-transparent hover:text-rose-600 dark:hover:text-rose-400 px-7 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 group"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>

            <div className="hidden lg:flex flex-col items-start text-muted-foreground mt-16 animate-fade-in">
              <p className="mb-2 text-sm tracking-widest uppercase">Scroll</p>
              <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-bounce" />
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 mt-8 lg:mt-0 animate-scale-in">
            <div className="relative group">
              {/* Clean ring */}
              <div className="absolute -inset-3 rounded-full border border-violet-500/20 dark:border-violet-400/10 group-hover:border-violet-500/40 transition-all duration-700" />
              <div className="absolute -inset-6 rounded-full border border-violet-500/10 dark:border-violet-400/5 group-hover:border-violet-500/20 transition-all duration-700 delay-100" />
              
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma"
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl shadow-violet-500/10 dark:shadow-violet-500/5 relative z-10 transform transition-all duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
              />
              
              {/* Status dot */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50 shadow-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-foreground">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
