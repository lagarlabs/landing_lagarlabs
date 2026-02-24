import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { 
  MessageSquare, 
  Lightbulb, 
  Code2, 
  TestTube, 
  Rocket, 
  HeadphonesIcon 
} from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consulta Inicial',
    description: 'Conversamos sobre tus objetivos, necesidades y visión del proyecto para entender perfectamente lo que buscas.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Lightbulb,
    title: 'Estrategia y Diseño',
    description: 'Desarrollo la estrategia técnica y creo los diseños que mejor se adapten a tu marca y objetivos de negocio.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description: 'Escribo código limpio, escalable y optimizado utilizando las mejores prácticas y tecnologías modernas.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: TestTube,
    title: 'Pruebas y Ajustes',
    description: 'Realizamos pruebas exhaustivas, refinamos detalles y nos aseguramos de que todo funcione perfectamente.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Rocket,
    title: 'Lanzamiento',
    description: 'Implementamos el proyecto en producción con todas las optimizaciones y configuraciones necesarias.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte Continuo',
    description: 'Te acompaño después del lanzamiento con mantenimiento, actualizaciones y mejoras continuas.',
    color: 'from-rose-500 to-rose-600'
  }
];

export function Process() {
  return (
    <section className="py-20 glass-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Mi Proceso de Trabajo
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Un enfoque estructurado y colaborativo que garantiza resultados excepcionales 
            y una experiencia transparente desde el primer día.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full border-4 border-blue-200 flex items-center justify-center z-10">
                <span className="text-sm text-blue-600">{index + 1}</span>
              </div>

              <Card className="h-full glass-card group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl mb-4 text-white">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connection Line (except for last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-0"></div>
              )}
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
          <div className="glass-card-soft p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-white">¿Listo para empezar?</h3>
            <p className="text-slate-300 mb-6">
              El primer paso es una conversación sin compromiso donde exploramos tu proyecto 
              y definimos la mejor estrategia para alcanzar tus objetivos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Consulta gratuita
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Sin compromiso
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Respuesta en 24h
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}