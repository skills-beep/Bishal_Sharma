import { useEffect, useState, useRef } from "react";

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'initial' | 'name' | 'title' | 'reveal' | 'done'>('initial');
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock body scroll on mobile to prevent iOS rubber-banding showing white edges
    const prevOverflow = document.body.style.overflow;
    const prevOverscroll = document.documentElement.style.overscrollBehavior;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';

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
      document.body.style.overflow = prevOverflow;
      document.documentElement.style.overscrollBehavior = prevOverscroll;
    };
  }, [onComplete]);

  const nameLetters = "BISHAL".split("");
  const surnameLetters = "SHARMA".split("");

  return (
    <div
      ref={containerRef}
      className={`splash-root fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-700 ${phase === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{
        // iOS Safari–safe full viewport height with progressive fallbacks
        height: '100vh',
        minHeight: '-webkit-fill-available',
        perspective: '1000px',
        WebkitPerspective: '1000px',
        maxWidth: '100vw',
      }}
    >
      {/* Prefer dvh on browsers that support it (handles iOS Safari URL bar) */}
      <style>{`
        @supports (height: 100dvh) {
          .splash-root { height: 100dvh !important; }
        }
      `}</style>

      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0b1f1a_0%,_#05060a_55%,_#000_100%)]" />

      {/* Color glow orbs — kept inside viewport on mobile */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[220px] h-[220px] sm:left-1/4 sm:translate-x-[-50%] sm:w-[600px] sm:h-[600px] bg-emerald-500/15 rounded-full blur-[90px] sm:blur-[180px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[200px] h-[200px] sm:left-auto sm:right-1/4 sm:translate-x-1/2 sm:w-[500px] sm:h-[500px] bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[160px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[700px] sm:h-[700px] bg-teal-400/[0.06] rounded-full blur-[110px] sm:blur-[200px]" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Cross lines */}
      <div className={`absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent transition-all duration-1000 origin-center ${phase === 'initial' ? 'scale-x-0' : 'scale-x-100'}`} />
      <div className={`absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent transition-all duration-1000 delay-200 origin-center ${phase === 'initial' ? 'scale-y-0' : 'scale-y-100'}`} />

      <div className="text-center z-10 relative px-4 sm:px-6 w-full max-w-full">
        {/* Top label */}
        <div className="overflow-hidden mb-3 sm:mb-6">
          <p
            className="tracking-[0.35em] sm:tracking-[0.5em] uppercase text-emerald-400/70 font-medium"
            style={{
              fontSize: 'clamp(8px, 2.5vw, 12px)',
              opacity: phase === 'initial' ? 0 : 1,
              transform: phase === 'initial' ? 'translateY(20px)' : 'translateY(0)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            ◆ Portfolio · 2026
          </p>
        </div>

        {/* First name — gradient fill (fluid sizing prevents overflow on every phone) */}
        <div className="overflow-hidden mb-1" style={{ perspective: '800px' }}>
          <div className="flex justify-center" style={{ gap: 'clamp(1px, 0.3vw, 4px)' }}>
            {nameLetters.map((letter, i) => (
              <span
                key={`first-${i}`}
                className="font-black tracking-tighter inline-block bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent leading-none"
                style={{
                  fontSize: 'clamp(2.25rem, 13vw, 8.5rem)',
                  transitionDelay: `${i * 70 + 200}ms`,
                  opacity: phase === 'initial' ? 0 : 1,
                  transform: phase === 'initial' ? 'translateY(100%) rotateX(80deg)' : 'translateY(0) rotateX(0)',
                  transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: phase === 'initial' ? 'blur(8px)' : 'blur(0)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Last name — outlined */}
        <div className="overflow-hidden mb-5 sm:mb-8" style={{ perspective: '800px' }}>
          <div className="flex justify-center" style={{ gap: 'clamp(1px, 0.3vw, 4px)' }}>
            {surnameLetters.map((letter, i) => (
              <span
                key={`last-${i}`}
                className="font-black text-transparent tracking-tighter inline-block leading-none"
                style={{
                  fontSize: 'clamp(2.25rem, 13vw, 8.5rem)',
                  WebkitTextStroke: '1.2px rgba(52, 211, 153, 0.6)',
                  transitionDelay: `${i * 70 + 600}ms`,
                  opacity: phase === 'initial' ? 0 : 1,
                  transform: phase === 'initial' ? 'translateY(100%) rotateX(80deg)' : 'translateY(0) rotateX(0)',
                  transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: phase === 'initial' ? 'blur(8px)' : 'blur(0)',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Divider dot row */}
        <div
          className="flex justify-center items-center gap-2 mb-4 sm:mb-5"
          style={{
            opacity: phase === 'title' || phase === 'reveal' ? 1 : 0,
            transition: 'opacity 0.6s ease-out',
          }}
        >
          <span className="h-[1px] w-6 sm:w-8 bg-gradient-to-r from-transparent to-emerald-400/60" />
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="h-[1px] w-6 sm:w-8 bg-gradient-to-l from-transparent to-emerald-400/60" />
        </div>

        {/* Title */}
        <div className="overflow-hidden">
          <p
            className="tracking-[0.25em] sm:tracking-[0.4em] uppercase text-neutral-300 font-light px-2"
            style={{
              fontSize: 'clamp(9px, 2.6vw, 16px)',
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
        <div className="mt-7 sm:mt-14 mx-auto" style={{ width: 'min(75vw, 18rem)' }}>
          <div
            className="flex justify-between items-center mb-2 tracking-[0.2em] sm:tracking-[0.3em] uppercase text-neutral-500 font-mono"
            style={{ fontSize: 'clamp(8px, 2.2vw, 10px)' }}
          >
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

      {/* Corner accents — refined, smaller on mobile */}
      {[
        'top-2 left-2 sm:top-6 sm:left-6 border-l border-t',
        'top-2 right-2 sm:top-6 sm:right-6 border-r border-t',
        'bottom-2 left-2 sm:bottom-6 sm:left-6 border-l border-b',
        'bottom-2 right-2 sm:bottom-6 sm:right-6 border-r border-b',
      ].map((pos, i) => (
        <div
          key={pos}
          className={`absolute ${pos} w-5 h-5 sm:w-14 sm:h-14 border-emerald-400/30 transition-all duration-1000 ${phase === 'initial' ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ))}

      {/* Bottom signature — hidden on tiny screens to avoid collision */}
      <div
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.4em] uppercase text-neutral-600 font-mono whitespace-nowrap"
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
