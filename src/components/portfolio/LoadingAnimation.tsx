
import { useEffect, useState } from "react";

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Preparing workspace...",
    "Loading professional profile...",
    "Showcasing innovative projects...",
    "Welcome to my digital space..."
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    
    const typeWriter = () => {
      if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText(texts[textIndex].substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeWriter, 80);
        } else {
          setTimeout(() => {
            textIndex++;
            charIndex = 0;
            if (textIndex < texts.length) {
              setCurrentText("");
              setTimeout(typeWriter, 300);
            } else {
              setIsTyping(false);
            }
          }, 1000);
        }
      }
    };

    typeWriter();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Professional particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${220 + Math.random() * 40}, 60%, ${50 + Math.random() * 30}%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Professional geometric elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-16 h-16 border border-blue-400/40 rotate-45 animate-spin-slow" />
        <div className="absolute top-32 right-32 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-40 left-1/4 w-10 h-10 border border-cyan-300/30 animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-purple-500/30 rounded-full animate-float" />
      </div>

      {/* Clean professional grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="text-center z-10 relative max-w-md mx-auto px-4">
        {/* Professional logo/brand */}
        <div className="mb-12 relative">
          <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-4">
            BS
          </div>
          <div className="text-xl text-gray-300 font-light tracking-wider">
            Developer
          </div>
          <div className="absolute inset-0 text-5xl md:text-6xl font-bold text-blue-400 blur-2xl opacity-20 animate-pulse">
            BS
          </div>
        </div>
        
        {/* Professional typewriter text */}
        <div className="h-8 mb-12">
          <div className="text-lg text-gray-200 font-light tracking-wide">
            {currentText}
            {isTyping && <span className="animate-pulse text-blue-400 ml-1">|</span>}
          </div>
        </div>
        
        {/* Clean progress bar */}
        <div className="relative w-full max-w-sm mx-auto h-2 bg-slate-800/60 rounded-full overflow-hidden border border-blue-500/20 backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-400 to-cyan-400 transition-all duration-300 ease-out relative rounded-full"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full" />
          </div>
        </div>
        
        <div className="mt-6 text-lg text-blue-200 font-medium">
          {progress.toFixed(0)}%
        </div>
        
        {/* Professional loading indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce"
              style={{ 
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1.2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
