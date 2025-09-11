import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  X, 
  CheckCircle,
  Monitor,
  Users,
  ClipboardList
} from 'lucide-react';

// Importar las imágenes
import dashboardImage from 'figma:asset/ff9042262e8dc6eb70cae3a3d0d0944368170561.png';
import tareasImage from 'figma:asset/73fb9fd86e5b141cc7f18a351fcd6af7b7d2ea53.png';
import personalImage from 'figma:asset/6df158117ba92f53e164c32d62fd6d04e917c5d7.png';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    category: string;
  };
}

const projectSections = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: Monitor,
    image: dashboardImage,
    description: 'El dashboard ofrece una vista general y centralizada de todas las operaciones del sistema, permitiendo controlar el avance de las tareas, el rendimiento del personal y el estado de las áreas de trabajo.',
    features: [
      'Visualización de tareas activas, pendientes y completadas',
      'Indicadores de desempeño y alertas',
      'Acceso rápido a las principales acciones administrativas'
    ]
  },
  {
    id: 'tareas',
    title: 'Gestión de Tareas',
    icon: ClipboardList,
    image: tareasImage,
    description: 'Esta sección permite a los usuarios crear, asignar y dar seguimiento a tareas específicas dentro de diferentes áreas de la empresa.',
    features: [
      'Creación y edición de tareas con descripción, prioridad y fecha límite',
      'Asignación de responsables y equipos',
      'Seguimiento del progreso y cierre de tareas',
      'Filtros por estado, área y responsable'
    ]
  },
  {
    id: 'personal',
    title: 'Gestión de Personal',
    icon: Users,
    image: personalImage,
    description: 'Permite administrar la plantilla de trabajadores, sus roles y su desempeño dentro del sistema.',
    features: [
      'Registro y edición de datos de empleados',
      'Asignación de roles y áreas de trabajo',
      'Control de desempeño y cumplimiento',
      'Historial de tareas realizadas por cada empleado'
    ]
  }
];

const mainFeatures = [
  'Dashboard interactivo para monitorear el estado general de operaciones',
  'Gestión avanzada de tareas: creación, asignación, seguimiento y cierre',
  'Gestión de personal: registro, asignación de roles y control de desempeño',
  'Historial y reportes de actividades',
  'Control de equipos y áreas',
  'Interfaz amigable, adaptable a diferentes dispositivos'
];

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % projectSections.length);
  };

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + projectSections.length) % projectSections.length);
  };

  const currentSectionData = projectSections[currentSection];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-3xl mb-2 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                {project.title}
              </DialogTitle>
              <Badge className="bg-emerald-100 text-emerald-700 mb-4">
                {project.category}
              </Badge>
              <p className="text-slate-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="ml-4 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {/* Technologies */}
          <div className="px-6 mb-6">
            <h3 className="text-lg mb-3 text-slate-900">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Main Features */}
          <div className="px-6 mb-8">
            <h3 className="text-lg mb-4 text-slate-900">Características Principales</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {mainFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Carousel Section */}
          <div className="px-6 mb-8">
            <h3 className="text-lg mb-4 text-slate-900">Áreas del Programa</h3>
            
            {/* Section Navigation */}
            <div className="flex gap-2 mb-4">
              {projectSections.map((section, index) => (
                <Button
                  key={section.id}
                  variant={currentSection === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentSection(index)}
                  className="flex items-center gap-2"
                >
                  <section.icon className="w-4 h-4" />
                  {section.title}
                </Button>
              ))}
            </div>

            {/* Image and Content */}
            <Card className="overflow-hidden">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSection}
                    src={currentSectionData.image}
                    alt={currentSectionData.title}
                    className="w-full h-80 object-cover"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSection}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSection}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>

                {/* Section Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {projectSections.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSection === index ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <currentSectionData.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-xl text-slate-900">{currentSectionData.title}</h4>
                </div>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {currentSectionData.description}
                </p>
                
                <div className="space-y-2">
                  {currentSectionData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-0 border-t bg-slate-50">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="text-sm text-slate-600">
              Navega por las secciones para ver todas las funcionalidades de la aplicación
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                <Github className="w-4 h-4 mr-2" />
                Ver Código
              </Button>
              <Button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visitar Repositorio
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}