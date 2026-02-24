import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, Code } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
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
  };

  const navItems = createNavItems(scrollToTop, scrollToSection);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-2xl bg-slate-900/60 border-b border-white/10 shadow-[0_12px_40px_rgba(2,6,23,0.45)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-shell py-3">
        <div className="glass-card-soft rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
          <button onClick={scrollToTop} className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </span>
            <span className="text-lg text-white tracking-wide">LagarLabs</span>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-slate-200 hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl"
            >
              Hablemos
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-100 p-2 rounded-lg hover:bg-white/10"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="glass-card-soft mt-2 rounded-xl p-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="block w-full text-left px-3 py-2 rounded-lg text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
