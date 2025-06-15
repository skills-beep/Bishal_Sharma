
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Linkedin } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1Rxomm0yP2-gtmaJM9vxU3k5Af5T0mCkO/view?usp=drive_link", "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/bishal-sharma-12b7211b6/", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Content - appears first on mobile */}
          <div className="flex-1 text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <p className="text-lg text-gray-400 mb-4">Hi there, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Bishal Sharma<span className="text-purple-400">.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4">
              Frontend Developer <span className="text-purple-400">&</span> UI/UX Enthusiast
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl lg:mx-0 mx-auto mb-8 lg:mb-12 leading-relaxed">
              I design and build clean, modern, and responsive web experiences that delight 
              users and help businesses grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-12 lg:mb-16">
              <Button
                onClick={scrollToProjects}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-full flex items-center gap-2 text-base sm:text-lg w-full sm:w-auto"
              >
                View Projects <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                onClick={openResume}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Resume
              </Button>
              <Button
                onClick={openLinkedIn}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Contact Me
              </Button>
            </div>

            <div className="hidden lg:flex flex-col items-center lg:items-start text-gray-500">
              <p className="mb-2">Scroll Down</p>
              <div className="animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Profile Image - appears second on mobile, moved down */}
          <div className="flex-shrink-0 animate-fade-in order-1 lg:order-2 mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="/lovable-uploads/45660422-64cd-4930-89c6-d2a81a4ab7c9.png"
                alt="Bishal Sharma"
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-purple-500/30 shadow-2xl animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
