
import { useEffect, useState } from "react";

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const texts = [
    "Initializing portfolio...",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${240 + Math.random() * 60}, 70%, ${60 + Math.random() * 30}%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-purple-400/40 rotate-45 animate-spin-slow" />
        <div className="absolute top-32 right-32 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce-slow" />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-cyan-300/30 animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-500/30 rounded-full animate-float" />
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 transform rotate-45 animate-float-random" />
        <div className="absolute top-10 right-1/4 w-14 h-14 border border-pink-400/40 rounded-full animate-float-horizontal" />
      </div>

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
        <path
          d="M0,300 Q250,200 500,300 T1000,300"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-draw-path"
        />
        <path
          d="M0,700 Q250,600 500,700 T1000,700"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          className="animate-draw-path"
          style={{animationDelay: '2s'}}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="text-center z-10 relative">
        {/* Enhanced logo with better effects */}
        <div className="mb-16 relative">
          <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 animate-glow">
            Portfolio
          </div>
          <div className="absolute inset-0 text-7xl font-bold text-purple-400 blur-2xl opacity-30 animate-pulse">
            Portfolio
          </div>
          {/* Additional glow layers */}
          <div className="absolute inset-0 text-7xl font-bold text-pink-400 blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
            Portfolio
          </div>
        </div>
        
        {/* Enhanced typewriter text */}
        <div className="h-10 mb-16">
          <div className="text-2xl text-gray-200 font-light tracking-wide">
            {currentText}
            {isTyping && <span className="animate-pulse text-purple-400 ml-1">|</span>}
          </div>
        </div>
        
        {/* Enhanced progress bar with multiple layers */}
        <div className="relative w-96 h-4 bg-slate-800/60 rounded-full overflow-hidden border border-purple-500/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full"></div>
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400 transition-all duration-300 ease-out relative rounded-full"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse rounded-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-300/50 to-pink-300/50 blur-sm rounded-full" />
          </div>
        </div>
        
        <div className="mt-8 text-xl text-purple-200 font-medium tracking-wider">
          {progress.toFixed(0)}%
        </div>
        
        {/* Enhanced animated loading dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full animate-bounce"
              style={{ 
                background: `linear-gradient(45deg, hsl(${240 + i * 20}, 70%, 60%), hsl(${260 + i * 20}, 70%, 70%))`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>

        {/* Enhanced rotating rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-[32rem] h-[32rem] border border-purple-400/15 rounded-full animate-spin-slow" />
          <div className="absolute inset-12 border border-pink-300/20 rounded-full animate-spin-slow-reverse" />
          <div className="absolute inset-24 border border-cyan-300/25 rounded-full animate-rotate-slow" />
        </div>

        {/* Orbital elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full absolute animate-float-horizontal" style={{top: '-12rem', left: '0'}} />
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full absolute animate-float-horizontal-reverse" style={{bottom: '-8rem', right: '2rem'}} />
        </div>
      </div>
    </div>
  );
}
