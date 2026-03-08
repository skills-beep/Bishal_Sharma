
import { useTheme } from "@/contexts/ThemeContext";

export function AnimatedBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base - pure black/white */}
      <div className={`absolute inset-0 ${
        theme === "dark" 
          ? "bg-black"
          : "bg-white"
      }`} />
      
      {/* Subtle grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: theme === "dark" 
          ? `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`
          : `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />
      
      {/* Floating particles */}
      {Array.from({ length: theme === "dark" ? 30 : 15 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute rounded-full ${
            theme === "dark" ? "bg-white/20" : "bg-black/10"
          } animate-float-random`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Moving lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <line
            key={`line-${i}`}
            x1={`${15 + (i * 20)}%`}
            y1="0%"
            x2={`${35 + (i * 20)}%`}
            y2="100%"
            stroke={theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}
            strokeWidth="1"
            className="animate-slide-vertical"
            style={{
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + (i % 2) * 3}s`,
            }}
          />
        ))}
      </svg>
      
      {/* Gradient orbs - monochrome */}
      <div className={`absolute top-1/3 left-1/2 w-[400px] h-[400px] rounded-full blur-[150px] animate-float-slow ${
        theme === "dark" ? "bg-white/[0.03]" : "bg-black/[0.02]"
      }`} />
      <div className={`absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[120px] animate-float-slow-reverse ${
        theme === "dark" ? "bg-white/[0.02]" : "bg-black/[0.015]"
      }`} />
    </div>
  );
}
