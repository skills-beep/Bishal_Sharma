
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <p className="text-lg text-gray-400 mb-4">Hi there, I'm</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Bishal Sharma<span className="text-purple-400">.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Frontend Developer <span className="text-purple-400">&</span> UI/UX Enthusiast
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            I design and build clean, modern, and responsive web experiences that delight 
            users and help businesses grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={scrollToProjects}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2 text-lg"
            >
              View Projects <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full text-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full text-lg"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex flex-col items-center text-gray-500">
            <p className="mb-2">Scroll Down</p>
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
