
import { useEffect, useState, useRef } from "react";

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'initial' | 'name' | 'title' | 'reveal' | 'done'>('initial');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    
    // Phase 1: Show first name letters animate in
    timers.push(setTimeout(() => setPhase('name'), 400));
    // Phase 2: Show title
    timers.push(setTimeout(() => setPhase('title'), 1800));
    // Phase 3: Reveal animation
    timers.push(setTimeout(() => setPhase('reveal'), 3200));
    // Phase 4: Complete
    timers.push(setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 4200));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const nameLetters = "BISHAL".split("");
  const surnameLetters = "SHARMA".split("");

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden transition-opacity duration-700 ${phase === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Horizontal line animation */}
      <div className={`absolute left-0 right-0 top-1/2 h-[1px] bg-white/20 transition-all duration-1000 ${phase === 'initial' ? 'scale-x-0' : 'scale-x-100'}`} />
      
      {/* Vertical line */}
      <div className={`absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/10 transition-all duration-1000 delay-200 ${phase === 'initial' ? 'scale-y-0' : 'scale-y-100'}`} />

      <div className="text-center z-10 relative">
        {/* First name */}
        <div className="overflow-hidden mb-2">
          <div className={`flex justify-center gap-[2px] sm:gap-1 transition-all duration-700 ${phase === 'initial' ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            {nameLetters.map((letter, i) => (
              <span
                key={`first-${i}`}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter inline-block"
                style={{
                  transitionDelay: `${i * 80 + 200}ms`,
                  opacity: phase === 'initial' ? 0 : 1,
                  transform: phase === 'initial' ? 'translateY(100%) rotateX(90deg)' : 'translateY(0) rotateX(0)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Last name */}
        <div className="overflow-hidden mb-6">
          <div className={`flex justify-center gap-[2px] sm:gap-1 transition-all duration-700 ${phase === 'initial' ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
            {surnameLetters.map((letter, i) => (
              <span
                key={`last-${i}`}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent tracking-tighter inline-block"
                style={{
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.7)',
                  transitionDelay: `${i * 80 + 600}ms`,
                  opacity: phase === 'initial' ? 0 : 1,
                  transform: phase === 'initial' ? 'translateY(100%) rotateX(90deg)' : 'translateY(0) rotateX(0)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Title line */}
        <div className="overflow-hidden">
          <p
            className="text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase text-white/50 font-light"
            style={{
              opacity: phase === 'title' || phase === 'reveal' ? 1 : 0,
              transform: phase === 'title' || phase === 'reveal' ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Frontend Developer & UI/UX Enthusiast
          </p>
        </div>

        {/* Minimal loading bar */}
        <div className="mt-12 w-48 sm:w-64 mx-auto">
          <div className="h-[1px] bg-white/10 relative overflow-hidden">
            <div 
              className="h-full bg-white absolute left-0 top-0"
              style={{
                width: phase === 'initial' ? '0%' : phase === 'name' ? '30%' : phase === 'title' ? '70%' : '100%',
                transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-8 left-8 w-12 h-12 border-l border-t border-white/20 transition-all duration-1000 ${phase === 'initial' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
      <div className={`absolute top-8 right-8 w-12 h-12 border-r border-t border-white/20 transition-all duration-1000 delay-100 ${phase === 'initial' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
      <div className={`absolute bottom-8 left-8 w-12 h-12 border-l border-b border-white/20 transition-all duration-1000 delay-200 ${phase === 'initial' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
      <div className={`absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/20 transition-all duration-1000 delay-300 ${phase === 'initial' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />

      {/* Wipe reveal overlay */}
      <div 
        className="absolute inset-0 bg-white z-20"
        style={{
          transform: phase === 'reveal' ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      />
    </div>
  );
}
