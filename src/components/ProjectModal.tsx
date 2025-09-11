import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  CheckCircle,
  Monitor,
  Users,
  ClipboardList
} from 'lucide-react';
import dashboardImage from 'figma:asset/ff9042262e8dc6eb70cae3a3d0d0944368170561.png';
import tareasImage from 'figma:asset/73fb9fd86e5b141cc7f18a351fcd6af7b7d2ea53.png';
import gestionPersonalImage from 'figma:asset/6df158117ba92f53e164c32d62fd6d04e917c5d7.png';
// Imágenes reales del proyecto de compras y ventas
import dashboardEjecutivoImage from 'figma:asset/f6f0776c106dd066443b414192024fe07651dbb9.png';
import gestionComprasImage from 'figma:asset/f5b7cfccb38de7175054a4ba9745b1307c484d20.png';
import gestionVentasImage from 'figma:asset/6394cccd12575823580b6c98bdba45fc3d58c437.png';
import gestionInventarioImage from 'figma:asset/01df28bc134c2248073b91a887d99d7c70d8ab2a.png';
import gestionReportesImage from 'figma:asset/c607138c28ddbcc4d887bcc1dfd0b81a1d6bd414.png';
import modoOscuroImage from 'figma:asset/700f9d1850e16098d76433c37e298347aec3d292.png';
// Imagen real de EventoPro
import eventoProImage from 'figma:asset/d875effb634e24278b9dd19fe47cb2bbadd6b7ee.png';
// Imagen real de Medidesk
import medideskImage from 'figma:asset/118d1c8b042598a789ad07e11b7c85bd49ab78c5.png';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

// Función para obtener las secciones específicas de cada proyecto
const getProjectSections = (projectTitle: string) => {
  if (projectTitle === 'App de Tareas Industrial') {
    return [
      {
        id: 0,
        title: 'Dashboard Principal',
        icon: Monitor,
        image: dashboardImage,
        description: 'Panel de control central que proporciona una vista completa del estado operacional de la empresa. Muestra estadísticas en tiempo real, alertas importantes y métricas de rendimiento.',
        features: [
          'Vista general del estado de todas las operaciones',
          'Estadísticas en tiempo real de tareas completadas y pendientes',
          'Alertas y notificaciones importantes',
          'Gráficos de rendimiento y productividad',
          'Acceso rápido a funciones principales'
        ]
      },
      {
        id: 1,
        title: 'Gestión de Tareas',
        icon: ClipboardList,
        image: tareasImage,
        description: 'Sistema completo para la creación, asignación y seguimiento de tareas. Permite un control detallado del flujo de trabajo y el progreso de cada actividad.',
        features: [
          'Creación de tareas con descripciones detalladas',
          'Asignación de tareas a empleados específicos',
          'Seguimiento del progreso en tiempo real',
          'Sistema de prioridades y fechas límite',
          'Historial completo de cambios y actualizaciones'
        ]
      },
      {
        id: 2,
        title: 'Gestión de Personal',
        icon: Users,
        image: gestionPersonalImage, // Imagen real de Gestión de Personal - Interface de empleados
        description: 'Módulo integral para la administración del personal de la empresa. Controla roles, responsabilidades y el desempeño de cada empleado.',
        features: [
          'Lista completa de empleados por departamentos',
          'Control de estados activo/inactivo de personal',
          'Organización por áreas: Producción, Mantenimiento',
          'Perfiles con roles específicos (Supervisor, Operador, Técnico)',
          'Gestión visual con avatares e indicadores de estado'
        ]
      }
    ];
  } else if (projectTitle === 'App de Gestión de Compras y Ventas') {
    return [
      {
        id: 0,
        title: 'Dashboard Ejecutivo',
        icon: Monitor,
        image: dashboardEjecutivoImage, // Nueva imagen del dashboard ejecutivo
        description: 'Visualización clara de KPIs, ventas, órdenes activas, productos en stock y clientes activos. Resumen de operaciones diarias con indicadores clave.',
        features: [
          'Gráficos de ventas vs compras en tiempo real',
          'Distribución de inventario por categorías',
          'Alertas de stock bajo y productos críticos',
          'Actividad reciente y transacciones',
          'Métricas de clientes activos y nuevos'
        ]
      },
      {
        id: 1,
        title: 'Gestión de Compras',
        icon: ClipboardList,
        image: gestionComprasImage, // Imagen real de Gestión de Compras
        description: 'Administración completa de órdenes de compra, proveedores y recepción de materiales. Control total del proceso de adquisiciones.',
        features: [
          'Creación y gestión de órdenes de compra',
          'Base de datos de proveedores y contactos',
          'Seguimiento de estados de pedidos',
          'Control de recepción de materiales',
          'Historial de compras y precios'
        ]
      },
      {
        id: 2,
        title: 'Gestión de Ventas',
        icon: ExternalLink,
        image: gestionVentasImage, // Imagen real de Gestión de Ventas
        description: 'Control de órdenes de venta, clientes y facturación. Gestión completa del proceso comercial desde la cotización hasta el cobro.',
        features: [
          'Gestión de pedidos y cotizaciones',
          'Base de datos de clientes y contactos',
          'Seguimiento del estado de ventas y pagos',
          'Generación de facturas automática',
          'Reportes de vendedores y comisiones'
        ]
      },
      {
        id: 3,
        title: 'Gestión de Inventario',
        icon: Users,
        image: gestionInventarioImage, // Imagen real de Gestión de Inventario
        description: 'Control detallado de productos, categorías, stock actual y ubicaciones. Sistema completo de gestión de almacén.',
        features: [
          'Control de stock en tiempo real',
          'Gestión de ubicaciones y almacenes',
          'Movimientos de inventario detallados',
          'Alertas de stock mínimo y máximo',
          'Categorización y códigos de productos'
        ]
      },
      {
        id: 4,
        title: 'Gestión de Reportes',
        icon: ClipboardList,
        image: gestionReportesImage, // Imagen real de Gestión de Reportes
        description: 'Panel de análisis avanzado con tendencias financieras, estadísticas de ventas y KPIs ejecutivos en tiempo real.',
        features: [
          'Gráficos de tendencias financieras interactivos',
          'Análisis de margen de ganancia en tiempo real',
          'Distribución de ingresos por categoría',
          'Principales clientes y productos más vendidos',
          'Rotación de inventario y métricas operativas'
        ]
      },
      {
        id: 5,
        title: 'Modo Oscuro',
        icon: Monitor,
        image: modoOscuroImage, // Imagen real del Modo Oscuro
        description: 'Interfaz optimizada para trabajo nocturno y ambientes con poca luz. Misma funcionalidad con diseño elegante y moderno.',
        features: [
          'Tema oscuro profesional y elegante',
          'Reducción de fatiga visual para uso prolongado',
          'Gráficos optimizados para modo oscuro',
          'Mantenimiento de legibilidad y contraste',
          'Transición fluida entre temas claro y oscuro'
        ]
      }
    ];
  }
  
  if (projectTitle === 'EventoPro') {
    return [
      {
        id: 0,
        title: 'EventoPro - Plataforma Completa',
        icon: Monitor,
        image: eventoProImage,
        description: 'Interface principal de EventoPro que muestra todas las funcionalidades para gestionar eventos de forma integral. Incluye gestión de invitados, lista de compras, tareas pendientes, estadísticas y calendario.',
        features: [
          'Dashboard principal con navegación intuitiva',
          'Gestión de invitados con confirmaciones y restricciones alimentarias',
          'Lista de compras organizada para el evento',
          'Control de tareas pendientes con seguimiento',
          'Estadísticas y métricas del progreso del evento',
          'Calendario integrado para planificación temporal'
        ]
      }
    ];
  }
  
  if (projectTitle === 'Medidesk') {
    return [
      {
        id: 0,
        title: 'Medidesk - Asistente Médico Virtual',
        icon: Monitor,
        image: medideskImage,
        description: 'Interface completa del asistente médico virtual que muestra la generación de informes médicos detallados. La plataforma incluye evaluación general del estado actual, diagnósticos probables y recomendaciones de tratamiento basadas en inteligencia artificial médica.',
        features: [
          'Generación automática de informes médicos completos',
          'Evaluación integral del estado de salud del paciente',
          'Análisis de signos vitales y síntomas reportados',
          'Diagnósticos probables con niveles de confianza',
          'Recomendaciones de tratamiento personalizadas',
          'Interface médica profesional con navegación lateral completa',
          'Gestión de pacientes, agenda, historiales y configuración',
          'Cumplimiento de estándares médicos y normativas de privacidad'
        ]
      }
    ];
  }
  
  return [];
};

const getMainFeatures = (projectTitle: string) => {
  if (projectTitle === 'App de Tareas Industrial') {
    return [
      'Dashboard interactivo para monitorear el estado general de operaciones',
      'Gestión avanzada de tareas: creación, asignación, seguimiento y cierre',
      'Gestión de personal: registro, asignación de roles y control de desempeño',
      'Historial y reportes de actividades',
      'Control de equipos y áreas',
      'Interfaz amigable, adaptable a diferentes dispositivos'
    ];
  } else if (projectTitle === 'App de Gestión de Compras y Ventas') {
    return [
      'Dashboard ejecutivo con KPIs y métricas en tiempo real',
      'Gestión completa de compras: órdenes, proveedores y recepción',
      'Control de ventas: pedidos, clientes y facturación automática',
      'Gestión de inventario: stock, ubicaciones y alertas',
      'Sistema de reportes avanzado con modo oscuro',
      'Interfaz optimizada para entornos industriales'
    ];
  } else if (projectTitle === 'EventoPro') {
    return [
      'Dashboard de eventos con calendario y cronogramas integrados',
      'Gestión completa de asistentes: invitaciones, registro y confirmaciones',
      'Control de proveedores y recursos necesarios para eventos',
      'Planificación de agenda y programación de actividades',
      'Sistema de notificaciones y recordatorios automáticos',
      'Análisis de métricas y reportes post-evento'
    ];
  } else if (projectTitle === 'Medidesk') {
    return [
      'Asistente médico virtual con IA conversacional avanzada',
      'Evaluación preliminar de síntomas y recomendaciones personalizadas',
      'Historial médico digital seguro y centralizado',
      'Seguimiento de tratamientos y control de medicación',
      'Red de profesionales médicos integrada para teleconsulta',
      'Sistema de alertas médicas y cumplimiento normativo'
    ];
  }
  return [];
};

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentSection, setCurrentSection] = useState(0);
  
  const projectSections = getProjectSections(project.title);
  const mainFeatures = getMainFeatures(project.title);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % projectSections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + projectSections.length) % projectSections.length);
  };

  const currentSectionData = projectSections[currentSection];
  
  // Reset section when project changes
  useEffect(() => {
    setCurrentSection(0);
  }, [project.title]);

  // Si no hay secciones para este proyecto, no renderizar el modal
  if (projectSections.length === 0) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[98vw] !w-[98vw] h-[90vh] p-0 overflow-hidden sm:!max-w-[98vw]">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            Detalles completos del proyecto {project.title} - {project.description}
          </DialogDescription>
        </DialogHeader>
        
        {/* MAIN CONTENT - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-h-full overflow-hidden">
          
          {/* LEFT COLUMN - Text Content */}
          <div className="flex flex-col h-full border-r border-border min-w-0 w-full overflow-hidden">
            
            {/* Fixed Header */}
            <div className="p-8 border-b bg-white flex-shrink-0">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <Badge className="mb-3 bg-emerald-600 text-white">
                    {project.category}
                  </Badge>
                  <h2 className="text-3xl text-slate-900 mb-4">{project.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Scrollable Content */}
            <ScrollArea className="flex-1 h-0">
              <div className="p-8 space-y-8 pr-4">
                
                {/* Main Features */}
                <div>
                  <h3 className="text-xl text-slate-900 mb-4">Características Principales</h3>
                  <div className="space-y-3">
                    {mainFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Current Section Details */}
                {currentSectionData && (
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <currentSectionData.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl text-slate-900">{currentSectionData.title}</h3>
                    </div>
                    
                    <p className="text-slate-600 mb-5 leading-relaxed text-base">
                      {currentSectionData.description}
                    </p>
                    
                    <div className="space-y-3">
                      {currentSectionData.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Technical Details */}
                <div className="bg-slate-50 p-6 rounded-xl border">
                  <h3 className="text-xl text-slate-900 mb-4">Detalles Técnicos</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h4 className="text-base text-slate-900 mb-2">Arquitectura</h4>
                      <p className="text-slate-600 text-sm">
                        Aplicación web responsive desarrollada con React y componentes modulares. 
                        Implementa un patrón de diseño component-based para máxima reutilización y mantenibilidad.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base text-slate-900 mb-2">Funcionalidades Clave</h4>
                      <p className="text-slate-600 text-sm">
                        Sistema de gestión integral con interfaz intuitiva, notificaciones en tiempo real, 
                        reportes automáticos y panel de administración completo.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base text-slate-900 mb-2">Optimización</h4>
                      <p className="text-slate-600 text-sm">
                        Código optimizado para rendimiento, carga rápida, compatibilidad cross-browser 
                        y experiencia de usuario fluida en dispositivos móviles y desktop.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
                  <h3 className="text-xl mb-3">¿Interesado en un proyecto similar?</h3>
                  <p className="text-blue-100 mb-5 text-base">
                    Cada solución está diseñada específicamente para las necesidades de tu empresa.
                  </p>
                  <div className="text-base text-slate-600">
                    Navega por las imágenes para ver todas las funcionalidades
                  </div>
                  <div className="flex gap-4">
                    {project.title === 'EventoPro' ? (
                      <Button
                        onClick={() => window.open('https://app--event-master-0693e55f.base44.app/Home', '_blank')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Ver Aplicación
                      </Button>
                    ) : project.title === 'Medidesk' ? (
                      <Button
                        onClick={() => window.open('https://app--medi-desk-8a875304.base44.app/PatientDetail?id=67a925e1d6141bbe8a87586f', '_blank')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Ver Aplicación
                      </Button>
                    ) : (
                      <Button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Visitar Repositorio
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>

          {/* RIGHT COLUMN - Images - RESPETA LÍMITES DEL MODAL */}
          <div className="h-full max-h-full bg-slate-50 min-w-0 w-full grid grid-rows-[auto_1fr] overflow-hidden">
            
            {/* Section Navigation - ROW 1 */}
            <div className="p-4 border-b bg-white flex-shrink-0">
              <div className="flex gap-2 flex-wrap">
                {projectSections.map((section, index) => (
                  <Button
                    key={section.id}
                    variant={currentSection === index ? "default" : "outline"}
                    onClick={() => setCurrentSection(index)}
                    className="flex items-center gap-2 px-3 py-2 text-sm"
                  >
                    <section.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{section.title}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Image Display - ROW 2 - EXACTAMENTE EL ESPACIO DISPONIBLE */}
            <div className="min-h-0 h-full bg-slate-50 p-4 overflow-hidden">
              <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {currentSectionData && (
                    <motion.img
                      key={currentSection}
                      src={currentSectionData.image}
                      alt={currentSectionData.title}
                      className="max-w-[85%] max-h-[85%] object-contain"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  onClick={prevSection}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg h-10 w-10 p-0"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  onClick={nextSection}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg h-10 w-10 p-0"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Section Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {projectSections.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSection(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentSection === index 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}