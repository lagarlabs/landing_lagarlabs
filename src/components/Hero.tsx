import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Code2, Layers3, Rocket, Star } from 'lucide-react';

const metrics = [
  { value: '60+', label: 'Proyectos lanzados', color: 'text-cyan-300' },
  { value: '4.9/5', label: 'Valoración media', color: 'text-violet-300' },
  { value: '<24h', label: 'Respuesta inicial', color: 'text-teal-300' }
];

const features = [
  {
    icon: Code2,
    title: 'Frontend premium',
    text: 'UI moderna, tipografía cuidada y animación elegante que convierte visitantes.',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-300',
  },
  {
    icon: Layers3,
    title: 'Arquitectura limpia',
    text: 'Componentes escalables y código mantenible para crecer sin fricción.',
    gradient: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-300',
  },
  {
    icon: Rocket,
    title: 'Performance primero',
    text: 'Carga rápida y experiencia sólida en móvil y desktop desde el primer día.',
    gradient: 'from-teal-500/20 to-emerald-500/10',
    border: 'border-teal-500/20',
    iconColor: 'text-teal-300',
  }
];

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="orb orb-cyan w-96 h-96 top-10 -left-20 opacity-40" />
      <div className="orb orb-violet w-80 h-80 top-32 right-0 opacity-30" />

      <div className="section-shell relative z-10">
        <div className="grid lg:hero-grid gap-6 items-stretch">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card-premium liquid-shimmer rounded-[2rem] p-8 lg:p-12 flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-start mb-7 border border-cyan-500/25 bg-cyan-500/8"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 icon-glow-cyan" />
              <span className="text-cyan-200 text-xs tracking-wide">Diseño + desarrollo para marcas que quieren destacar</span>
            </motion.div>

            <h1 className="text-5xl lg:text-[4.5rem] leading-[1.00] font-bold tracking-tight mb-6">
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #bae6fd 40%, #c4b5fd 80%, #e0f2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Landing moderna,
              </span>
              <span
                className="block mt-1"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 55%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                impacto real.
              </span>
            </h1>

            <p className="text-base lg:text-lg text-slate-400 max-w-xl leading-relaxed mb-8">
              Diseño experiencias digitales premium con estética contemporánea, animaciones fluidas y enfoque en conversión para transformar visitas en oportunidades.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:opacity-90 transition-opacity shadow-[0_8px_28px_rgba(56,189,248,0.30)] text-sm px-6"
              >
                Quiero rediseñar mi web
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 text-sm px-6"
              >
                Ver casos reales
              </Button>
            </div>

            <div className="grid sm:metrics-grid gap-3 mt-auto">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="glass-card-soft rounded-2xl p-4 text-center border border-white/10"
                >
                  <p className={`text-2xl font-bold ${m.color} mb-0.5`}>{m.value}</p>
                  <p className="text-xs text-slate-400 leading-snug">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`glass-hover glass-card rounded-2xl p-6 border ${item.border} flex-1`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} border ${item.border} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="glass-card-soft rounded-2xl p-5 border border-yellow-500/15"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 border-2 border-slate-900 flex items-center justify-center text-[9px] font-bold text-white">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-400">+60 clientes satisfechos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
