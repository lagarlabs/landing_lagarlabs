import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Code, Layers3, Rocket } from 'lucide-react';

const metrics = [
  { value: '60+', label: 'Proyectos lanzados' },
  { value: '4.9/5', label: 'Valoración media' },
  { value: '<24h', label: 'Respuesta inicial' }
];

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-36 pb-14">
      <div className="section-shell">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-[2rem] p-8 lg:p-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-soft text-cyan-100 text-sm mb-7">
              <Sparkles className="w-4 h-4" />
              Diseño + desarrollo para marcas que quieren destacar
            </div>

            <h1 className="text-5xl lg:text-7xl leading-[1.02] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-violet-100 mb-6">
              Landing moderna,
              <span className="block mt-2">impacto real.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
              Diseño experiencias digitales premium con estética contemporánea, animaciones fluidas y enfoque en conversión para transformar visitas en oportunidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button onClick={scrollToContact} size="lg" className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90">
                Quiero rediseñar mi web
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-xl border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                Ver casos reales
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="glass-card-soft rounded-xl p-4 text-center">
                  <p className="text-2xl text-cyan-300">{m.value}</p>
                  <p className="text-sm text-slate-300">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            {[{ icon: Code, title: 'Frontend premium', text: 'UI moderna, tipografía cuidada y animación elegante.' }, { icon: Layers3, title: 'Arquitectura limpia', text: 'Componentes escalables para crecer sin fricción.' }, { icon: Rocket, title: 'Performance primero', text: 'Carga rápida y experiencia sólida en móvil y desktop.' }].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6">
                <item.icon className="w-8 h-8 text-cyan-300 mb-4" />
                <h3 className="text-xl text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
