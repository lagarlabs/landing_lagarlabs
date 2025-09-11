import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO, TechStart Solutions',
    content: 'Increíble trabajo y atención al detalle. Nuestro e-commerce incrementó las ventas un 300% después del rediseño. El soporte post-lanzamiento ha sido excepcional.',
    rating: 5,
    initials: 'MG'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Fundador, InnovaApps',
    content: 'La aplicación web que desarrolló transformó completamente nuestros procesos internos. La automatización nos ahorra 20 horas semanales. Altamente recomendado.',
    rating: 5,
    initials: 'CR'
  },
  {
    name: 'Ana Martínez',
    role: 'Directora Marketing, CreativeHub',
    content: 'Profesionalismo absoluto desde el día uno. Cumplió todos los plazos y superó nuestras expectativas. El dashboard de analytics es exactamente lo que necesitábamos.',
    rating: 5,
    initials: 'AM'
  },
  {
    name: 'Luis Fernández',
    role: 'CTO, DataFlow Corp',
    content: 'Código limpio, arquitectura sólida y documentación perfecta. Nuestro equipo pudo continuar el desarrollo sin problemas. Un verdadero profesional.',
    rating: 5,
    initials: 'LF'
  },
  {
    name: 'Sandra López',
    role: 'Gerente, RetailMax',
    content: 'La landing page que creó aumentó nuestras conversiones un 85%. El diseño es hermoso y la velocidad de carga impresionante. Excelente inversión.',
    rating: 5,
    initials: 'SL'
  },
  {
    name: 'Miguel Torres',
    role: 'Director, FinanceBot',
    content: 'Desarrolló nuestra plataforma fintech cumpliendo todos los estándares de seguridad. Su experiencia en el sector fue clave para el éxito del proyecto.',
    rating: 5,
    initials: 'MT'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Lo Que Dicen Mis Clientes
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            La satisfacción de mis clientes es mi prioridad. Aquí puedes ver algunos 
            testimonios de empresas que han confiado en mi trabajo.
          </p>
        </motion.div>

        {/* Featured Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-lg text-slate-900 mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-blue-200 group-hover:text-blue-300 transition-colors" />
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed text-lg italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Grid of Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.slice(2).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h5 className="text-slate-900 mb-1">{testimonial.name}</h5>
                      <p className="text-xs text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl mb-2">50+</div>
                  <div className="text-blue-100">Proyectos Completados</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">100%</div>
                  <div className="text-blue-100">Satisfacción Cliente</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">98%</div>
                  <div className="text-blue-100">Proyectos a Tiempo</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">24h</div>
                  <div className="text-blue-100">Tiempo de Respuesta</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}