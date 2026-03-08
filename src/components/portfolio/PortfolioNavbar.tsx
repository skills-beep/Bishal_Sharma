
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home", icon: "01" },
  { name: "About", href: "#about", icon: "02" },
  { name: "Experience", href: "#work-experience", icon: "03" },
  { name: "Why Hire Me", href: "#why-hire-me", icon: "04" },
  { name: "Skills", href: "#skills", icon: "05" },
  { name: "Projects", href: "#projects", icon: "06" },
  { name: "Certificates", href: "#certificates", icon: "07" },
  { name: "Education", href: "#education", icon: "08" },
  { name: "Contact", href: "#contact", icon: "09" },
];

export function PortfolioNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      // Detect active section
      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top minimal bar */}
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-10"
      >
        <span className="text-lg font-black tracking-tight text-white">
          B<span className="text-emerald-400">.</span>S
        </span>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-900">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500/80 to-cyan-500/80"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-400 hover:text-white hover:bg-white/5">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Desktop: current section label */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">
            {navItems.find(item => item.href === activeSection)?.name || "Home"}
          </span>
          <div className="w-8 h-[1px] bg-neutral-700" />
          <span className="text-xs font-mono text-neutral-600">
            {navItems.find(item => item.href === activeSection)?.icon || "01"}
          </span>
        </div>
      </motion.header>

      {/* Side dot navigation - desktop only */}
      <motion.nav
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3"
      >
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="group relative flex items-center"
          >
            {/* Label tooltip */}
            <span className="absolute right-8 px-3 py-1 rounded-md bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 text-xs text-neutral-300 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
              {item.name}
            </span>
            {/* Dot */}
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === item.href
                ? 'bg-emerald-400 scale-125 shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                : 'bg-neutral-700 hover:bg-neutral-500 group-hover:scale-110'
            }`} />
          </button>
        ))}
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-2xl font-light py-3 px-8 rounded-2xl transition-all duration-300 ${
                    activeSection === item.href
                      ? 'text-white bg-white/5'
                      : 'text-neutral-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-xs font-mono text-neutral-600 mr-4">{item.icon}</span>
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
