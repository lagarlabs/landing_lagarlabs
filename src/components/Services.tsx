import { motion } from 'motion/react';
import { Globe, Wrench, Paintbrush, Shield, Rocket, Settings, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Globe,
    title: 'Webs que convierten',
    description: 'Landings y sitios corporativos con foco en mensaje, claridad y conversiones.',
    features: ['Arquitectura de contenido', 'UI responsive', 'SEO técnico'],
    accent: 'from-cyan-500/25 to-blue-600/15',
    border: 'hover:border-cyan-500/35',
    iconBg: 'from-cyan-500/20 to-blue-500/15',
    iconColor: 'text-cyan-300',
    tag: 'Popular',
  },
  {
    icon: Wrench,
    title: 'Apps a medida',
    description: 'Herramientas internas o de cliente para digitalizar y automatizar procesos.',
    features: ['Flujos personalizados', 'Integración APIs', 'Paneles de control'],
    accent: 'from-violet-500/25 to-purple-600/15',
    border: 'hover:border-violet-500/35',
    iconBg: 'from-violet-500/20 to-purple-500/15',
    iconColor: 'text-violet-300',
    tag: null,
  },
  {
    icon: Paintbrush,
    title: 'Brand experience',
    description: 'Dirección visual moderna para dar una imagen más premium y diferenciada.',
    features: ['Sistema visual', 'Microinteracciones', 'Consistencia cross-device'],
    accent: 'from-pink-500/25 to-rose-600/15',
    border: 'hover:border-pink-500/35',
    iconBg: 'from-pink-500/20 to-rose-500/15',
    iconColor: 'text-pink-300',
    tag: null,
  },
  {
    icon: Shield,
    title: 'Mantenimiento continuo',
    description: 'Soporte técnico para mantener estabilidad, seguridad y evolución del producto.',
    features: ['Mejoras continuas', 'Hardening', 'Monitoreo'],
    accent: 'from-teal-500/25 to-emerald-600/15',
    border: 'hover:border-teal-500/35',
    iconBg: 'from-teal-500/20 to-emerald-500/15',
    iconColor: 'text-teal-300',
    tag: null,
  },
  {
    icon: Rocket,
    title: 'Optimización',
    description: 'Auditoría y mejoras en performance, UX y embudos de conversión.',
    features: ['Core Web Vitals', 'UX tuning', 'Iteración por datos'],
    accent: 'from-orange-500/25 to-amber-600/15',
    border: 'hover:border-orange-500/35',
    iconBg: 'from-orange-500/20 to-amber-500/15',
    iconColor: 'text-orange-300',
    tag: null,
  },
  {
    icon: Settings,
    title: 'Consultoría técnica',
    description: 'Ayuda estratégica para definir stack, roadmap y prioridades de desarrollo.',
    features: ['Plan tecnológico', 'Análisis de viabilidad', 'Estrategia de producto'],
    accent: 'from-indigo-500/25 to-blue-600/15',
    border: 'hover:border-indigo-500/35',
    iconBg: 'from-indigo-500/20 to-blue-500/15',
    iconColor: 'text-indigo-300',
    tag: null,
  }
];

export function Services() {
  const scrollToContact = () => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="servicios" className="glass-section py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-300 text-xs tracking-wide mb-5">
            <Globe className="w-3.5 h-3.5" />
            Servicios
          </div>
          <h2 className="section-title mb-5">Servicios para elevar tu presencia digital</h2>
          <p className="section-subtitle">No solo diseño bonito: creo producto digital sólido, usable y preparado para crecer.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className={`group relative glass-card rounded-2xl p-6 flex flex-col transition-all duration-300 border border-white/10 ${service.border} hover:shadow-[0_28px_60px_rgba(2,6,23,0.55)] hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} border border-white/12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  {service.tag && (
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-medium tracking-wide">
                      {service.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2.5">{service.title}</h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed flex-1">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${service.iconBg} border border-white/15 flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-2.5 h-2.5 ${service.iconColor}`} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  onClick={scrollToContact}
                  className="mt-auto w-full justify-between text-slate-300 hover:text-white hover:bg-white/8 rounded-xl text-sm group/btn"
                >
                  Solicitar propuesta
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
