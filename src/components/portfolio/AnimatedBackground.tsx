
import { useTheme } from "@/contexts/ThemeContext";

export function AnimatedBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className={`absolute inset-0 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-purple-900/20 via-gray-900 to-black"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`} />
      
      {/* Floating particles */}
      {Array.from({ length: theme === "dark" ? 100 : 30 }).map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${
            theme === "dark" ? "bg-white" : "bg-purple-300"
          } opacity-60 animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Theme-specific elements */}
      {theme === "dark" ? (
        <>
          {/* Moon and stars for dark mode */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-100 rounded-full shadow-lg animate-pulse" />
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
            <line x1="25%" y1="35%" x2="40%" y2="25%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
            <line x1="70%" y1="15%" x2="85%" y2="30%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
            <line x1="60%" y1="60%" x2="75%" y2="75%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
            <line x1="15%" y1="70%" x2="30%" y2="80%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
          </svg>
        </>
      ) : (
        <>
          {/* Sun and clouds for light mode */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 rounded-full shadow-lg animate-pulse">
            {/* Sun rays */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-6 bg-yellow-400 animate-pulse"
                style={{
                  top: "-12px",
                  left: "50%",
                  transformOrigin: "50% 44px",
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </div>
          
          {/* Floating clouds */}
          <div className="absolute top-32 left-20 w-20 h-12 bg-white/60 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
          <div className="absolute top-40 right-32 w-16 h-8 bg-white/40 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        </>
      )}
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-purple-400/30 rotate-45 animate-spin" style={{ animationDuration: "20s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-purple-400/20 rotate-12 animate-pulse" style={{ animationDuration: "3s" }} />
      <div className="absolute top-3/4 left-1/6 w-4 h-4 border border-purple-300/40 rounded-full animate-bounce" style={{ animationDuration: "5s" }} />
    </div>
  );
}
