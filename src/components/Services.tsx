import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Globe, Wrench, Paintbrush, Shield, Rocket, Settings, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Globe,
    title: 'Webs que convierten',
    description: 'Landings y sitios corporativos con foco en mensaje, claridad y conversiones.',
    features: ['Arquitectura de contenido', 'UI responsive', 'SEO técnico'],
  },
  {
    icon: Wrench,
    title: 'Apps a medida',
    description: 'Herramientas internas o de cliente para digitalizar y automatizar procesos.',
    features: ['Flujos personalizados', 'Integración APIs', 'Paneles de control'],
  },
  {
    icon: Paintbrush,
    title: 'Brand experience',
    description: 'Dirección visual moderna para dar una imagen más premium y diferenciada.',
    features: ['Sistema visual', 'Microinteracciones', 'Consistencia cross-device'],
  },
  {
    icon: Shield,
    title: 'Mantenimiento continuo',
    description: 'Soporte técnico para mantener estabilidad, seguridad y evolución del producto.',
    features: ['Mejoras continuas', 'Hardening', 'Monitoreo'],
  },
  {
    icon: Rocket,
    title: 'Optimización',
    description: 'Auditoría y mejoras en performance, UX y embudos de conversión.',
    features: ['Core Web Vitals', 'UX tuning', 'Iteración por datos'],
  },
  {
    icon: Settings,
    title: 'Consultoría técnica',
    description: 'Ayuda estratégica para definir stack, roadmap y prioridades de desarrollo.',
    features: ['Plan tecnológico', 'Análisis de viabilidad', 'Estrategia de producto'],
  }
];

export function Services() {
  const scrollToContact = () => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="servicios" className="glass-section py-20">
      <div className="section-shell">
        <div className="text-center mb-14">
          <h2 className="section-title mb-6">Servicios para elevar tu presencia digital</h2>
          <p className="section-subtitle">No solo diseño bonito: creo producto digital sólido, usable y preparado para crecer.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="glass-card h-full rounded-2xl">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <h3 className="text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-slate-300 mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" onClick={scrollToContact} className="mt-auto justify-between hover:bg-white/10">
                    Solicitar propuesta
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
