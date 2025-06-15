
import { useEffect, useState } from "react";

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Welcome to my portfolio...",
    "Loading creative work...",
    "Preparing amazing projects...",
    "Almost ready..."
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-gray-900 to-black overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-spin-slow" />
        <div className="absolute top-40 right-32 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-32 left-1/4 w-8 h-8 border border-purple-300/40 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-purple-500/20 rounded-full animate-float" />
      </div>

      <div className="text-center z-10 relative">
        {/* Logo with glow effect */}
        <div className="mb-12 relative">
          <div className="text-6xl font-bold text-purple-400 mb-6 animate-glow">
            Bishal<span className="text-white">.</span>
          </div>
          <div className="absolute inset-0 text-6xl font-bold text-purple-400 blur-lg opacity-50 animate-pulse">
            Bishal<span className="text-white">.</span>
          </div>
        </div>
        
        {/* Typewriter text */}
        <div className="h-8 mb-12">
          <div className="text-xl text-gray-300 font-light">
            {currentText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        </div>
        
        {/* Enhanced progress bar */}
        <div className="w-80 h-3 bg-gray-800/50 rounded-full overflow-hidden border border-purple-500/20 backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>
        
        <div className="mt-6 text-lg text-purple-300 font-medium">
          {progress.toFixed(0)}%
        </div>
        
        {/* Animated loading dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>

        {/* Rotating ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-96 h-96 border border-purple-400/10 rounded-full animate-spin-slow" />
          <div className="absolute inset-8 border border-purple-300/20 rounded-full animate-spin-slow-reverse" />
        </div>
      </div>
    </div>
  );
}
