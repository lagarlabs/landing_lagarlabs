import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Code2, Mail, Phone, MapPin, Linkedin, Github, ArrowUp, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Servicios', id: 'servicios' },
  { label: 'Proceso', id: 'proceso' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contacto', id: 'contacto' },
];

const contactInfo = [
  { icon: Mail, value: 'lagarlabs@gmail.com' },
  { icon: Phone, value: '+34 670 581 236' },
  { icon: MapPin, value: 'Agüimes, Las Palmas' },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative mt-8 overflow-hidden">
      <div className="orb orb-cyan w-96 h-96 -bottom-32 -right-16 opacity-10" />
      <div className="orb orb-violet w-64 h-64 -bottom-20 left-10 opacity-10" />

      <div className="section-shell py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-3xl p-8 md:p-10 border border-white/10"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 blur-sm opacity-50" />
                  <div className="relative w-10 h-10 rounded-xl flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-white font-semibold text-base block">LagarLabs</span>
                  <span className="text-[10px] text-cyan-400 tracking-widest uppercase flex items-center gap-1">
                    <Zap className="w-2.5 h-2.5" /> Dev Studio
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                Desarrollo de experiencias web modernas, rápidas y orientadas a negocio.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navegación</h3>
              <div className="space-y-2.5">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span className="border-b border-transparent group-hover:border-cyan-500/40 pb-px transition-all">
                      {link.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <p key={item.value} className="flex items-center gap-2.5 text-sm text-slate-400">
                    <item.icon className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    {item.value}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Social</h3>
              <div className="space-y-3">
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/josué-barrios-128339294', '_blank')}
                  className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl border border-white/12 bg-white/4 hover:bg-white/8 hover:border-cyan-500/25 transition-all text-sm text-slate-300 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open('https://github.com/lagarlabs', '_blank')}
                  className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl border border-white/12 bg-white/4 hover:bg-white/8 hover:border-cyan-500/25 transition-all text-sm text-slate-300 hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} LagarLabs. Diseño y desarrollo web moderno.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500">Hecho con ♥ en Las Palmas</span>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="rounded-xl bg-white/8 hover:bg-white/14 border border-white/12 text-white text-xs"
              >
                <ArrowUp className="w-3.5 h-3.5 mr-1" />
                Subir
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
