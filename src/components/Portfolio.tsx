import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import industrialTasksImage from 'figma:asset/ff9042262e8dc6eb70cae3a3d0d0944368170561.png';
import comprasVentasImage from 'figma:asset/f6f0776c106dd066443b414192024fe07651dbb9.png'; // Nueva imagen del dashboard ejecutivo

const projects = [
  {
    title: 'App de Tareas Industrial',
    description: 'Solución integral para la gestión operativa en entornos industriales. Permite a las empresas organizar, asignar y monitorear tareas, así como gestionar el personal, optimizar procesos y mejorar la productividad.',
    image: industrialTasksImage,
    technologies: ['React', 'HTML', 'CSS', 'Vite'],
    category: 'Gestión Industrial',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/app-de-tareas-industrial',
    readme: `Características principales:
• Dashboard interactivo para monitorear el estado general de operaciones
• Gestión avanzada de tareas: creación, asignación, seguimiento y cierre
• Gestión de personal: registro, asignación de roles y control de desempeño
• Historial y reportes de actividades
• Control de equipos y áreas
• Interfaz amigable, adaptable a diferentes dispositivos

Áreas del programa:
Dashboard: Vista general y centralizada de todas las operaciones del sistema
Gestión de tareas: Creación, asignación y seguimiento de tareas específicas
Gestión de personal: Administración de plantilla, roles y desempeño`
  },
  {
    title: 'App de Gestión de Compras y Ventas',
    description: 'Sistema integral de gestión para compras, ventas e inventario en entornos industriales, diseñado para optimizar operaciones, mejorar la visibilidad de datos y facilitar la toma de decisiones.',
    image: comprasVentasImage,
    technologies: ['React', 'HTML', 'CSS', 'Vite'],
    category: 'Gestión Industrial',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/app-gestion-compras-ventas',
    readme: `Características Principales:

• Dashboard Ejecutivo: Visualización clara de KPIs, ventas, órdenes activas, productos en stock y clientes activos
• Gestión de Compras: Administración de órdenes de compra, proveedores y recepción de materiales
• Gestión de Ventas: Control de órdenes de venta, clientes y facturación
• Gestión de Inventario: Control de stock, ubicaciones, movimientos y alertas
• Reportes: Acceso rápido a informes clave para la operación
• Modo Oscuro: Experiencia amigable para distintos ambientes de trabajo

Capturas de Pantalla:

1. Dashboard Ejecutivo
Resumen de operaciones diarias, con indicadores clave y gráficos de ventas vs compras, distribución de inventario, alertas de stock y actividad reciente.

[imagen 1]

2. Gestión de Compras
Visualiza y administra órdenes de compra con estados, proveedores, fechas y montos.

[imagen 2]

3. Gestión de Ventas
Gestión de pedidos, clientes y seguimiento del estado de las ventas y pagos.

[imagen 3]

4. Gestión de Inventario
Control detallado de productos, categorías, stock actual y ubicaciones.

[imagen 4]

5. Gestión de Reportes
Controla los reportes de tu equipo.

[imagen 5, imagen 5 modo oscuro]

Uso:
• Accede al dashboard para consultar métricas y alertas
• Navega por las secciones de compras, ventas e inventario para gestionar órdenes y productos
• Exporta reportes y consulta el historial de actividad`
  },
  {
    title: 'EventoPro',
    description: 'Plataforma integral de gestión de eventos que permite crear, organizar y administrar eventos de cualquier escala. Centraliza la operación completa desde la planificación hasta la ejecución.',
    image: 'https://images.unsplash.com/photo-1712903276003-b814091e7770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG1hbmFnZW1lbnQlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NTc1NTMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Base44', 'Node.js', 'HTML', 'CSS', 'Claude Sonnet 3.5'],
    category: 'Gestión de Eventos',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/eventopro',
    readme: `EventoPro - Gestión Integral de Eventos

Características principales:
• Dashboard de eventos con vista de calendario y cronogramas
• Gestión de asistentes: registro, invitaciones y confirmaciones
• Control de proveedores y recursos necesarios
• Planificación de agenda y programación de actividades
• Sistema de notificaciones y recordatorios automáticos
• Generación de reportes post-evento

Funcionalidades clave:
• Creación de eventos paso a paso con templates personalizables
• Gestión de capacidad y control de aforo
• Integración con sistemas de pago para eventos premium
• Panel de control en tiempo real durante el evento
• Análisis de métricas y satisfacción de asistentes`
  },
  {
    title: 'Medidesk',
    description: 'Asistente médico virtual inteligente que revoluciona la atención sanitaria. Facilita la gestión de consultas, diagnósticos preliminares y seguimiento de pacientes utilizando IA avanzada.',
    image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYXNzaXN0YW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc1NTMwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Base44', 'Node.js', 'HTML', 'CSS', 'Claude Sonnet 3.5'],
    category: 'Asistente Virtual Médico',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/medidesk',
    readme: `Medidesk - Asistente Médico Virtual

Características principales:
• Evaluación preliminar de síntomas mediante IA conversacional
• Agenda inteligente para citas médicas y recordatorios
• Historial médico digital seguro y centralizado
• Seguimiento de tratamientos y medicación
• Red de profesionales médicos integrada
• Sistema de alertas y emergencias médicas

Funcionalidades avanzadas:
• Análisis de síntomas con recomendaciones personalizadas
• Integración con dispositivos de monitoreo de salud
• Generación de reportes médicos automáticos
• Teleconsulta con médicos especialistas
• Base de conocimiento médico actualizada constantemente
• Cumplimiento de normativas de privacidad médica (HIPAA)`
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Optimización: mover filtros fuera del render
  const featuredProjects = useMemo(() => projects.filter(project => project.featured), []);
  const otherProjects = useMemo(() => projects.filter(project => !project.featured), []);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cada proyecto es una oportunidad para crear soluciones innovadoras que 
            generan resultados reales y crecimiento sostenible para mis clientes.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-emerald-600 text-white">
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-2xl mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-blue-50 hover:border-blue-300"
                      onClick={() => openProjectModal(project)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Proyecto
                    </Button>
                    {project.title === 'EventoPro' ? (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="hover:bg-slate-100"
                        onClick={() => window.open('https://app--event-master-0693e55f.base44.app/Home', '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver App
                      </Button>
                    ) : project.title === 'Medidesk' ? (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="hover:bg-slate-100"
                        onClick={() => window.open('https://app--medi-desk-8a875304.base44.app/PatientDetail?id=67a925e1d6141bbe8a87586f', '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver App
                      </Button>
                    ) : (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="hover:bg-slate-100"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Render other projects only if they exist */}
        {otherProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className="text-lg mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="w-full justify-center hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => openProjectModal(project)}
                    >
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl mb-4 text-slate-900">¿Tienes un proyecto en mente?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único y merece una solución personalizada. 
              Hablemos sobre tu idea y creemos algo extraordinario juntos.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Empezar Mi Proyecto
            </Button>
          </div>
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={isModalOpen}
            onClose={closeModal}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
}