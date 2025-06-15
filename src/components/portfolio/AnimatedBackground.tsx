
import { useTheme } from "@/contexts/ThemeContext";

export function AnimatedBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient with more depth */}
      <div className={`absolute inset-0 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-purple-900/30 via-gray-900 to-black"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`} />
      
      {/* Moving geometric shapes */}
      <div className="absolute inset-0">
        {/* Floating circles with different speeds */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`circle-${i}`}
            className={`absolute rounded-full ${
              theme === "dark" ? "bg-purple-400/10" : "bg-purple-300/20"
            } animate-float`}
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${15 + (i * 8)}%`,
              width: `${40 + (i * 10)}px`,
              height: `${40 + (i * 10)}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i % 3)}s`,
            }}
          />
        ))}
        
        {/* Moving lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`line-${i}`}
              x1={`${10 + (i * 15)}%`}
              y1="0%"
              x2={`${30 + (i * 15)}%`}
              y2="100%"
              stroke={theme === "dark" ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.2)"}
              strokeWidth="1"
              className="animate-slide-vertical"
              style={{
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${8 + (i % 2)}s`,
              }}
            />
          ))}
        </svg>
        
        {/* Floating particles with physics */}
        {Array.from({ length: theme === "dark" ? 50 : 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              theme === "dark" ? "bg-white" : "bg-purple-300"
            } opacity-60 animate-float-random`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Theme-specific animated elements */}
      {theme === "dark" ? (
        <>
          {/* Animated moon with glow */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-100 rounded-full shadow-2xl animate-glow">
            <div className="absolute inset-2 bg-yellow-50 rounded-full opacity-80"></div>
          </div>
          
          {/* Twinkling stars */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
          
          {/* Moving constellation lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <path
              d="M 10,20 Q 30,10 50,30 T 90,20"
              stroke="rgba(139, 92, 246, 0.4)"
              strokeWidth="1"
              fill="none"
              className="animate-draw-path"
            />
          </svg>
        </>
      ) : (
        <>
          {/* Animated sun with rays */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full shadow-lg animate-rotate-slow">
            {/* Animated sun rays */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`ray-${i}`}
                className="absolute w-0.5 h-8 bg-yellow-400 animate-pulse"
                style={{
                  top: "-16px",
                  left: "50%",
                  transformOrigin: "50% 48px",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          
          {/* Moving clouds */}
          <div className="absolute top-32 left-20 w-24 h-16 bg-white/70 rounded-full animate-float-horizontal">
            <div className="absolute top-2 left-4 w-16 h-12 bg-white/50 rounded-full"></div>
            <div className="absolute top-4 right-2 w-12 h-8 bg-white/60 rounded-full"></div>
          </div>
          <div className="absolute top-40 right-32 w-20 h-12 bg-white/60 rounded-full animate-float-horizontal-reverse">
            <div className="absolute top-1 left-2 w-12 h-8 bg-white/40 rounded-full"></div>
          </div>
        </>
      )}
      
      {/* Moving geometric shapes with rotation */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-purple-400/40 animate-spin-slow-reverse" />
      <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-purple-400/20 animate-bounce-slow rotate-45" />
      <div className="absolute top-2/3 left-1/6 w-6 h-6 border border-purple-300/50 rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-10 h-10 border-2 border-purple-500/30 rotate-12 animate-float" />
      
      {/* Gradient orbs that move */}
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-xl animate-float-slow-reverse" />
    </div>
  );
}
