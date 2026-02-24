import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Code, Mail, Phone, MapPin, Linkedin, Github, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="glass-section mt-10">
      <div className="section-shell py-12">
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 flex items-center justify-center"><Code className="w-5 h-5 text-white" /></span>
                <span className="text-white text-xl">LagarLabs</span>
              </div>
              <p className="text-slate-300">Desarrollo de experiencias web modernas, rápidas y orientadas a negocio.</p>
            </div>

            <div>
              <h3 className="text-white mb-3">Navegación</h3>
              <div className="space-y-2 text-slate-300">
                <button onClick={() => scrollToSection('servicios')} className="block hover:text-cyan-300">Servicios</button>
                <button onClick={() => scrollToSection('proceso')} className="block hover:text-cyan-300">Proceso</button>
                <button onClick={() => scrollToSection('portfolio')} className="block hover:text-cyan-300">Portfolio</button>
                <button onClick={() => scrollToSection('contacto')} className="block hover:text-cyan-300">Contacto</button>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-3">Contacto</h3>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> lagarlabs@gmail.com</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +34 670 581 236</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Agüimes, Las Palmas</p>
              </div>
            </div>

            <div>
              <h3 className="text-white mb-3">Social</h3>
              <div className="flex gap-3">
                <Button variant="outline" className="border-white/30 hover:bg-white/10" onClick={() => window.open('https://www.linkedin.com/in/josué-barrios-128339294', '_blank')}>
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10" onClick={() => window.open('https://github.com/lagarlabs', '_blank')}>
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} LagarLabs. Diseño y desarrollo web moderno.</p>
            <Button onClick={scrollToTop} className="rounded-xl bg-white/10 hover:bg-white/20">
              <ArrowUp className="w-4 h-4 mr-1" /> Subir
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
