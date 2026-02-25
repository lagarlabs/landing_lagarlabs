import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './ProjectModal';
import industrialTasksImage from 'figma:asset/ff9042262e8dc6eb70cae3a3d0d0944368170561.png';
import comprasVentasImage from 'figma:asset/f6f0776c106dd066443b414192024fe07651dbb9.png';

const projects = [
  {
    title: 'App de Tareas Industrial',
    description: 'Gestión operativa para tareas, equipos y personal en entornos industriales con dashboard en tiempo real.',
    image: industrialTasksImage,
    technologies: ['React', 'Vite', 'CSS'],
    category: 'Gestión Industrial',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/app-de-tareas-industrial',
    readme: 'Dashboard de operaciones, seguimiento de tareas y control de equipos.',
    accent: 'from-cyan-500/20 to-blue-600/10',
    tagColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
  },
  {
    title: 'App de Gestión de Compras y Ventas',
    description: 'Sistema integral para compras, ventas, stock y reportes ejecutivos con trazabilidad completa.',
    image: comprasVentasImage,
    technologies: ['React', 'Vite', 'CSS'],
    category: 'ERP Industrial',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/app-gestion-compras-ventas',
    readme: 'KPIs, control de inventario y trazabilidad de operaciones.',
    accent: 'from-violet-500/20 to-purple-600/10',
    tagColor: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
  },
  {
    title: 'EventoPro',
    description: 'Plataforma para organizar eventos con asistentes, agenda y gestión de proveedores integrada.',
    image: 'https://images.unsplash.com/photo-1712903276003-b814091e7770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    technologies: ['Base44', 'Node.js', 'CSS'],
    category: 'Eventos',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/eventopro',
    readme: 'Gestión de eventos en un flujo centralizado.',
    accent: 'from-teal-500/20 to-emerald-600/10',
    tagColor: 'bg-teal-500/15 border-teal-500/30 text-teal-300',
  },
  {
    title: 'Medidesk',
    description: 'Asistente médico virtual con seguimiento de pacientes, agenda y gestión de consultas.',
    image: 'https://images.unsplash.com/photo-1659353887019-b142198f2668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    technologies: ['Base44', 'Node.js', 'CSS'],
    category: 'Salud',
    featured: true,
    githubUrl: 'https://github.com/lagarlabs/medidesk',
    readme: 'Orientado a experiencia de paciente y gestión de consultas.',
    accent: 'from-pink-500/20 to-rose-600/10',
    tagColor: 'bg-pink-500/15 border-pink-500/30 text-pink-300',
  }
];

type Project = typeof projects[0];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="glass-section py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/25 bg-teal-500/8 text-teal-300 text-xs tracking-wide mb-5">
            <Layers className="w-3.5 h-3.5" />
            Portfolio
          </div>
          <h2 className="section-title mb-5">Portfolio con enfoque en producto real</h2>
          <p className="section-subtitle">Soluciones construidas para uso real, con usabilidad, rendimiento y visión de negocio.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
              className="group"
            >
              <div className={`glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-white/18 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_32px_72px_rgba(2,6,23,0.60)]`}>
                <div className="portfolio-img-wrap relative h-56">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-60 transition-opacity duration-400 pointer-events-none" style={{ background: `linear-gradient(135deg, ${project.accent.replace('from-', '').replace('to-', '').replace('/20', '').replace('/10', '')})` }} />
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`text-xs px-3 py-1.5 rounded-full border backdrop-blur-sm font-medium ${project.tagColor}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-40 transition-opacity duration-400 pointer-events-none`} />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2.5">{project.title}</h3>
                  <p className="text-sm text-slate-400 mb-5 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white/8 text-slate-300 border border-white/15 text-xs px-2.5 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openProjectModal(project)}
                      className="rounded-xl border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Ver caso
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="rounded-xl hover:bg-white/8 text-slate-300 hover:text-white text-xs"
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Código
                    </Button>
                  </div>
                </div>
              </div>
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
