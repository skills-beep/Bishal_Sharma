
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Elements - Light mode optimized */}
      <div className="absolute inset-0 opacity-30 dark:opacity-25">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/60 to-purple-300/50 dark:from-violet-500/40 dark:to-purple-600/40 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-rose-200/50 to-pink-300/40 dark:from-rose-500/30 dark:to-pink-600/40 rounded-full blur-3xl animate-float-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-sky-200/40 to-indigo-300/30 dark:from-sky-500/20 dark:to-indigo-600/30 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-10 w-8 h-8 text-violet-300/60 dark:text-violet-400/40 animate-float" />
        <Sparkles className="absolute top-40 right-20 w-6 h-6 text-rose-300/60 dark:text-rose-400/40 animate-float-random" />
        <Code className="absolute bottom-32 left-1/4 w-6 h-6 text-sky-300/60 dark:text-sky-400/40 animate-float-slow" />
        <Sparkles className="absolute bottom-20 right-1/3 w-8 h-8 text-purple-300/60 dark:text-purple-400/40 animate-float-horizontal" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Content - Improved for light mode */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-700 dark:text-slate-400 mb-4 transform transition-all duration-700 hover:text-violet-700 dark:hover:text-violet-400 hover:scale-105">Hi there, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 transform transition-all duration-1000 hover:scale-105">
                <span className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 dark:from-white dark:via-violet-200 dark:to-purple-200 bg-clip-text text-transparent animate-slide-in-left">
                  Bishal Sharma
                </span>
                <span className="text-violet-600 dark:text-violet-400 animate-bounce">.</span>
              </h1>
              <div className="relative mb-4">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-slate-300 animate-slide-in-right transition-all duration-700 hover:text-violet-700 dark:hover:text-violet-200">
                  Frontend Developer <span className="text-violet-600 dark:text-violet-400 animate-pulse">&</span> UI/UX Enthusiast
                </p>
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-200/30 to-purple-200/20 dark:from-violet-600/20 dark:to-purple-600/20 rounded-lg blur opacity-75 animate-pulse"></div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 dark:text-slate-400 max-w-2xl lg:mx-0 mx-auto mb-8 lg:mb-12 leading-relaxed transform transition-all duration-700 hover:text-gray-600 dark:hover:text-slate-300 animate-fade-in">
                I design and build clean, modern, and responsive web experiences that delight 
                users and help businesses grow. Let's turn your ideas into digital reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-12 lg:mb-16 animate-scale-in">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-full flex items-center gap-2 text-base sm:text-lg w-full sm:w-auto transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/30 group border-0"
              >
                View Projects 
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-500" />
              </Button>
              <Button
                onClick={openResume}
                variant="outline"
                className="border-2 border-violet-500 bg-white/90 dark:bg-transparent text-violet-700 dark:text-violet-300 hover:bg-violet-50 hover:border-violet-600 dark:hover:bg-violet-500/20 dark:hover:border-violet-400 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/20 group backdrop-blur-sm"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:animate-bounce" />
                Resume
              </Button>
              <Button
                onClick={openLinkedIn}
                variant="outline"
                className="border-2 border-sky-500 bg-white/90 dark:bg-transparent text-sky-700 dark:text-sky-300 hover:bg-sky-50 hover:border-sky-600 dark:hover:bg-sky-500/20 dark:hover:border-sky-400 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/20 group backdrop-blur-sm"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                LinkedIn
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-rose-500 bg-white/90 dark:bg-transparent text-rose-700 dark:text-rose-300 hover:bg-rose-50 hover:border-rose-600 dark:hover:bg-rose-500/20 dark:hover:border-rose-400 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-rose-500/20 group backdrop-blur-sm"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                Contact Me
              </Button>
            </div>

            <div className="hidden lg:flex flex-col items-center lg:items-start text-gray-600 dark:text-slate-500 animate-fade-in">
              <p className="mb-2 transform transition-all duration-500 hover:text-violet-600 dark:hover:text-violet-400">Scroll Down</p>
              <div className="animate-bounce hover:animate-pulse transition-all duration-500 hover:scale-125 hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Profile Image - Light mode optimized */}
          <div className="flex-shrink-0 order-1 lg:order-2 mt-8 lg:mt-0 animate-scale-in">
            <div className="relative group">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-300/60 to-purple-400/50 dark:from-violet-500/40 dark:to-purple-600/40 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-rose-300/40 to-pink-400/40 dark:from-rose-500/30 dark:to-pink-600/30 animate-spin-slow-reverse"></div>
              
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma"
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-violet-400/60 dark:border-violet-500/40 shadow-2xl relative z-10 transform transition-all duration-700 group-hover:scale-110 group-hover:shadow-violet-500/60 animate-float"
              />
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-300/0 to-purple-400/0 group-hover:from-violet-300/40 group-hover:to-purple-400/30 dark:group-hover:from-violet-500/30 dark:group-hover:to-purple-600/30 transition-all duration-700 animate-pulse"></div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-violet-500 dark:bg-violet-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-rose-500 dark:bg-rose-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-2 w-1 h-1 bg-sky-500 dark:bg-sky-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
