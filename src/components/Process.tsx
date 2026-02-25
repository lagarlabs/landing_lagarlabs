import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Code2, TestTube, Rocket, HeadphonesIcon, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Discovery',
    description: 'Entendemos objetivos, público y expectativas del proyecto para alinear visión.',
    iconColor: 'text-cyan-300',
    iconBg: 'from-cyan-500/20 to-blue-500/15',
    border: 'border-cyan-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Dirección creativa',
    description: 'Definimos concepto visual, tono y arquitectura de pantalla antes de escribir código.',
    iconColor: 'text-yellow-300',
    iconBg: 'from-yellow-500/20 to-orange-500/15',
    border: 'border-yellow-500/20',
  },
  {
    icon: Code2,
    title: 'Build',
    description: 'Desarrollo en componentes modernos, optimizados y completamente responsivos.',
    iconColor: 'text-violet-300',
    iconBg: 'from-violet-500/20 to-purple-500/15',
    border: 'border-violet-500/20',
  },
  {
    icon: TestTube,
    title: 'QA & refinamiento',
    description: 'Pulimos interacciones, responsive y calidad final hasta alcanzar la perfección.',
    iconColor: 'text-teal-300',
    iconBg: 'from-teal-500/20 to-emerald-500/15',
    border: 'border-teal-500/20',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Despliegue con checklist técnico completo y analítica activada desde el primer día.',
    iconColor: 'text-orange-300',
    iconBg: 'from-orange-500/20 to-red-500/15',
    border: 'border-orange-500/20',
  },
  {
    icon: HeadphonesIcon,
    title: 'Iteración',
    description: 'Mejora continua con soporte activo y evolución de features basada en datos.',
    iconColor: 'text-pink-300',
    iconBg: 'from-pink-500/20 to-rose-500/15',
    border: 'border-pink-500/20',
  }
];

export function Process() {
  return (
    <section id="proceso" className="py-24 overflow-hidden">
      <div className="orb orb-teal w-72 h-72 bottom-10 right-10 opacity-20" />
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-300 text-xs tracking-wide mb-5">
            <ArrowRight className="w-3.5 h-3.5" />
            Proceso de trabajo
          </div>
          <h2 className="section-title mb-5">Un proceso claro, rápido y colaborativo</h2>
          <p className="section-subtitle">Trabajo por fases para reducir riesgo y acelerar resultados.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className={`group glass-card-soft rounded-2xl p-6 border ${step.border} border-opacity-40 hover:border-opacity-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(2,6,23,0.50)]`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.iconBg} border border-white/12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                </div>
                <span className="step-number">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2.5">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>

              <div className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${step.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 glass-card rounded-2xl p-8 text-center border border-white/10"
        >
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Desde la primera conversación hasta el lanzamiento en{' '}
            <span className="text-cyan-300 font-semibold">2–4 semanas</span>.
            Transparencia total en cada paso del proceso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
