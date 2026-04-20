import { useEffect, useState, useRef } from "react";

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'initial' | 'name' | 'title' | 'reveal' | 'done'>('initial');
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setPhase('name'), 100));
    timers.push(setTimeout(() => setPhase('title'), 900));
    timers.push(setTimeout(() => setPhase('reveal'), 2000));
    timers.push(setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2700));

    // Smooth progress counter
    const start = performance.now();
    const duration = 2000;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
  }, [onComplete]);

  const nameLetters = "BISHAL".split("");
  const surnameLetters = "SHARMA".split("");

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-700 ${phase === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0b1f1a_0%,_#05060a_55%,_#000_100%)]" />

      {/* Color glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-400/[0.06] rounded-full blur-[200px]" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Cross lines */}
      <div className={`absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-all duration-1000 ${phase === 'initial' ? 'scale-x-0' : 'scale-x-100'}`} />
      <div className={`absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent transition-all duration-1000 delay-200 ${phase === 'initial' ? 'scale-y-0' : 'scale-y-100'}`} />

      <div className="text-center z-10 relative px-6">
        {/* Top label */}
        <div className="overflow-hidden mb-6">
          <p
            className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-emerald-400/70 font-medium"
            style={{
              opacity: phase === 'initial' ? 0 : 1,
              transform: phase === 'initial' ? 'translateY(20px)' : 'translateY(0)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            ◆ Portfolio · 2026
          </p>
        </div>

        {/* First name — gradient fill */}
        <div className="overflow-hidden mb-1">
          <div className="flex justify-center gap-[2px] sm:gap-1">
            {nameLetters.map((letter, i) => (
              <span
                key={`first-${i}`}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black tracking-tighter inline-block bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent"
                style={{
                  transitionDelay: `${i * 70 + 200}ms`,
                  opacity: phase === 'initial' ? 0 : 1,
                  transform: phase === 'initial' ? 'translateY(100%) rotateX(80deg)' : 'translateY(0) rotateX(0)',
                  transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: phase === 'initial' ? 'blur(8px)' : 'blur(0)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Last name — outlined */}
        <div className="overflow-hidden mb-8">
          <div className="flex justify-center gap-[2px] sm:gap-1">
            {surnameLetters.map((letter, i) => (
              <span
                key={`last-${i}`}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black text-transparent tracking-tighter inline-block"
                style={{
                  WebkitTextStroke: '1.5px rgba(52, 211, 153, 0.6)',
                  transitionDelay: `${i * 70 + 600}ms`,
                  opacity: phase === 'initial' ? 0 : 1,
                  transform: phase === 'initial' ? 'translateY(100%) rotateX(80deg)' : 'translateY(0) rotateX(0)',
                  transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: phase === 'initial' ? 'blur(8px)' : 'blur(0)',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Divider dot row */}
        <div
          className="flex justify-center items-center gap-2 mb-5"
          style={{
            opacity: phase === 'title' || phase === 'reveal' ? 1 : 0,
            transition: 'opacity 0.6s ease-out',
          }}
        >
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-emerald-400/60" />
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
        </div>

        {/* Title */}
        <div className="overflow-hidden">
          <p
            className="text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase text-neutral-300 font-light"
            style={{
              opacity: phase === 'title' || phase === 'reveal' ? 1 : 0,
              transform: phase === 'title' || phase === 'reveal' ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Product Engineer
            <span className="text-emerald-400/80"> · </span>
            Bhutan Telecom
          </p>
        </div>

        {/* Progress + counter */}
        <div className="mt-14 w-56 sm:w-72 mx-auto">
          <div className="flex justify-between items-center mb-2 text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-mono">
            <span>Loading</span>
            <span className="text-emerald-400/80 tabular-nums">{String(progress).padStart(3, '0')}%</span>
          </div>
          <div className="h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <div
              className="h-full absolute left-0 top-0 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 rounded-full"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 12px rgba(52, 211, 153, 0.6)',
                transition: 'width 0.1s linear',
              }}
            />
          </div>
        </div>
      </div>

      {/* Corner accents — refined */}
      {[
        'top-6 left-6 border-l border-t',
        'top-6 right-6 border-r border-t',
        'bottom-6 left-6 border-l border-b',
        'bottom-6 right-6 border-r border-b',
      ].map((pos, i) => (
        <div
          key={pos}
          className={`absolute ${pos} w-10 h-10 sm:w-14 sm:h-14 border-emerald-400/30 transition-all duration-1000 ${phase === 'initial' ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}

      {/* Bottom signature */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] uppercase text-neutral-600 font-mono"
        style={{
          opacity: phase === 'initial' ? 0 : 1,
          transition: 'opacity 1s ease-out 0.6s',
        }}
      >
        Crafted in Bhutan 🇧🇹
      </div>

      {/* Wipe reveal overlay — dark to blend with site */}
      <div
        className="absolute inset-0 z-20 bg-gradient-to-b from-[#0a0a0a] to-black"
        style={{
          transform: phase === 'reveal' ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      />
    </div>
  );
}
