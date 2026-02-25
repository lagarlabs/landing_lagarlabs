import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, Code2, Zap } from 'lucide-react';

const createNavItems = (scrollToTop: () => void, scrollToSection: (id: string) => void) => [
  { label: 'Inicio', action: scrollToTop },
  { label: 'Servicios', action: () => scrollToSection('servicios') },
  { label: 'Proceso', action: () => scrollToSection('proceso') },
  { label: 'Portfolio', action: () => scrollToSection('portfolio') },
  { label: 'Contacto', action: () => scrollToSection('contacto') }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('Inicio');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveNav('Inicio');
  };

  const navItems = createNavItems(scrollToTop, scrollToSection);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="section-shell">
        <div
          className={`rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'glass-card shadow-[0_8px_32px_rgba(2,6,23,0.50)]'
              : 'glass-card-soft'
          }`}
        >
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 blur-sm opacity-0 group-hover:opacity-60 transition-opacity" />
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-white tracking-wide">LagarLabs</span>
              <span className="text-[10px] text-cyan-400 tracking-widest uppercase flex items-center gap-1">
                <Zap className="w-2.5 h-2.5" /> Dev Studio
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { item.action(); setActiveNav(item.label); }}
                className={`relative px-3.5 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeNav === item.label
                    ? 'text-cyan-300'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {activeNav === item.label && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/8 border border-cyan-500/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection('contacto')}
              className="relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm px-5 py-2 hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(56,189,248,0.25)]"
            >
              Hablemos
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-200 hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden overflow-hidden mt-2"
            >
              <div className="glass-card rounded-2xl p-3 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => { item.action(); setActiveNav(item.label); }}
                    className="block w-full text-left px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-white/8 transition-colors text-sm"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-1 pb-1 px-1">
                  <Button
                    onClick={() => { scrollToSection('contacto'); setIsMenuOpen(false); }}
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm"
                  >
                    Hablemos
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
