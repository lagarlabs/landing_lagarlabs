import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import industrialTasksImage from 'figma:asset/ff9042262e8dc6eb70cae3a3d0d0944368170561.png';
import comprasVentasImage from 'figma:asset/f6f0776c106dd066443b414192024fe07651dbb9.png';

const projects = [
  {
    title: 'App de Tareas Industrial',
    description: 'Gestión operativa para tareas, equipos y personal en entornos industriales.',
    image: industrialTasksImage,
    technologies: ['React', 'Vite', 'CSS'],
    category: 'Gestión Industrial',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/app-de-tareas-industrial',
    readme: 'Dashboard de operaciones, seguimiento de tareas y control de equipos.'
  },
  {
    title: 'App de Gestión de Compras y Ventas',
    description: 'Sistema integral para compras, ventas, stock y reportes ejecutivos.',
    image: comprasVentasImage,
    technologies: ['React', 'Vite', 'CSS'],
    category: 'ERP Industrial',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/app-gestion-compras-ventas',
    readme: 'KPIs, control de inventario y trazabilidad de operaciones.'
  },
  {
    title: 'EventoPro',
    description: 'Plataforma para organizar eventos con asistentes, agenda y proveedores.',
    image: 'https://images.unsplash.com/photo-1712903276003-b814091e7770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    technologies: ['Base44', 'Node.js', 'CSS'],
    category: 'Eventos',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/eventopro',
    readme: 'Gestión de eventos en un flujo centralizado.'
  },
  {
    title: 'Medidesk',
    description: 'Asistente médico virtual con seguimiento de pacientes y agenda.',
    image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    technologies: ['Base44', 'Node.js', 'CSS'],
    category: 'Salud',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/medidesk',
    readme: 'Orientado a experiencia de paciente y gestión de consultas.'
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="glass-section py-20">
      <div className="section-shell">
        <div className="text-center mb-14">
          <h2 className="section-title mb-6">Portfolio con enfoque en producto real</h2>
          <p className="section-subtitle">Soluciones construidas para uso real, con usabilidad, rendimiento y visión de negocio.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="glass-card overflow-hidden rounded-2xl h-full">
                <div className="relative">
                  <ImageWithFallback src={project.image} alt={project.title} className="w-full h-60 object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-black/45 text-white border border-white/30">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/10 text-slate-100 border border-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" onClick={() => openProjectModal(project)} className="border-white/30 hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" /> Ver caso
                    </Button>
                    <Button variant="ghost" onClick={() => window.open(project.githubUrl, '_blank')} className="hover:bg-white/10">
                      <Github className="w-4 h-4 mr-2" /> Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
        )}
      </div>
    </section>
  );
}
