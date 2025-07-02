
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-10 w-8 h-8 text-purple-400/30 animate-float" />
        <Sparkles className="absolute top-40 right-20 w-6 h-6 text-blue-400/30 animate-float-random" />
        <Code className="absolute bottom-32 left-1/4 w-6 h-6 text-cyan-400/30 animate-float-slow" />
        <Sparkles className="absolute bottom-20 right-1/3 w-8 h-8 text-purple-400/30 animate-float-horizontal" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Content - Enhanced with better animations */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-400 mb-4 transform transition-all duration-500 hover:text-purple-400 hover:scale-105">Hi there, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 transform transition-all duration-700 hover:scale-105">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-slide-in-left">
                  Bishal Sharma
                </span>
                <span className="text-purple-400 animate-bounce">.</span>
              </h1>
              <div className="relative mb-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 animate-slide-in-right">
                  Frontend Developer <span className="text-purple-400 animate-pulse">&</span> UI/UX Enthusiast
                </p>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg blur opacity-75 animate-pulse"></div>
              </div>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl lg:mx-0 mx-auto mb-8 lg:mb-12 leading-relaxed transform transition-all duration-500 hover:text-gray-300 animate-fade-in">
                I design and build clean, modern, and responsive web experiences that delight 
                users and help businesses grow. Let's turn your ideas into digital reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-12 lg:mb-16 animate-scale-in">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 rounded-full flex items-center gap-2 text-base sm:text-lg w-full sm:w-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 group"
              >
                View Projects 
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                onClick={openResume}
                variant="outline"
                className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg group backdrop-blur-sm"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:animate-bounce" />
                Resume
              </Button>
              <Button
                onClick={openLinkedIn}
                variant="outline"
                className="border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg group backdrop-blur-sm"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto transform transition-all duration-300 hover:scale-110 hover:shadow-lg group backdrop-blur-sm"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Contact Me
              </Button>
            </div>

            <div className="hidden lg:flex flex-col items-center lg:items-start text-gray-500 animate-fade-in">
              <p className="mb-2 transform transition-all duration-300 hover:text-purple-400">Scroll Down</p>
              <div className="animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-125 hover:text-purple-400 cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 mt-8 lg:mt-0 animate-scale-in">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-spin-slow-reverse"></div>
              
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma"
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-purple-500/30 shadow-2xl relative z-10 transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-purple-500/50 animate-float"
              />
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500 animate-pulse"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
