import { motion } from 'motion/react';
import { MessageSquare, Lightbulb, Code2, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  { icon: MessageSquare, title: 'Discovery', description: 'Entendemos objetivos, público y expectativas del proyecto.' },
  { icon: Lightbulb, title: 'Dirección creativa', description: 'Definimos concepto visual, tono y arquitectura de pantalla.' },
  { icon: Code2, title: 'Build', description: 'Desarrollo en componentes modernos y optimizados.' },
  { icon: TestTube, title: 'QA & refinamiento', description: 'Pulimos interacciones, responsive y calidad final.' },
  { icon: Rocket, title: 'Launch', description: 'Despliegue con checklist técnico y analítica activada.' },
  { icon: HeadphonesIcon, title: 'Iteración', description: 'Mejora continua con soporte y evolución de features.' }
];

export function Process() {
  return (
    <section id="proceso" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14">
          <h2 className="section-title mb-5">Un proceso claro, rápido y colaborativo</h2>
          <p className="section-subtitle">Trabajo por fases para reducir riesgo y acelerar resultados.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card-soft rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <step.icon className="w-7 h-7 text-cyan-300" />
                <span className="text-xs text-slate-300 px-2 py-1 rounded-full border border-white/20">0{index + 1}</span>
              </div>
              <h3 className="text-xl text-white mb-2">{step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
