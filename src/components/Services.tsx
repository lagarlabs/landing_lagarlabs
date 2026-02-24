import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { 
  Globe, 
  Wrench, 
  Paintbrush, 
  Shield, 
  Rocket, 
  Settings,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Globe,
    title: 'Creación de Páginas Web',
    description: 'Desarrollo sitios web modernos, responsivos y optimizados para todos los dispositivos. Desde landing pages hasta aplicaciones web complejas.',
    features: ['Diseño Responsivo', 'SEO Optimizado', 'Carga Rápida', 'UI/UX Moderno'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Wrench,
    title: 'Herramientas Personalizadas',
    description: 'Construyo aplicaciones y herramientas específicas para las necesidades únicas de tu empresa. Automatización y eficiencia garantizada.',
    features: ['Automatización', 'Integración APIs', 'Dashboard Admin', 'Reportes Personalizados'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Paintbrush,
    title: 'Personalización y Acabados',
    description: 'Refinamiento de cada detalle para que tu proyecto refleje perfectamente la identidad de tu marca y objetivos de negocio.',
    features: ['Branding Personalizado', 'Animaciones Fluidas', 'Experiencia Usuario', 'Detalles Premium'],
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Shield,
    title: 'Mantenimiento y Soporte',
    description: 'Servicio continuo de mantenimiento, actualizaciones de seguridad, monitoreo y soporte técnico especializado.',
    features: ['Soporte 24/7', 'Actualizaciones', 'Backup Automático', 'Monitoreo Continuo'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Rocket,
    title: 'Optimización y Mejoras',
    description: 'Análisis continuo del rendimiento y implementación de mejoras para maximizar la velocidad y conversiones.',
    features: ['Análisis Performance', 'A/B Testing', 'Optimización SEO', 'Mejora Conversiones'],
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Settings,
    title: 'Consultoría Técnica',
    description: 'Asesoramiento especializado en arquitectura, tecnologías y estrategias digitales para el crecimiento sostenible.',
    features: ['Arquitectura Técnica', 'Roadmap Tecnológico', 'Auditoría Código', 'Estrategia Digital'],
    color: 'from-rose-500 to-rose-600'
  }
];

export function Services() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-20 glass-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Servicios Integrales
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Acompaño tu proyecto desde la idea inicial hasta el mantenimiento continuo, 
            asegurando resultados excepcionales en cada etapa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-3 text-white">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    onClick={scrollToContact}
                    className="w-full justify-between group-hover:bg-white/10 transition-colors duration-300"
                  >
                    Más información
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Solicitar Cotización
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}