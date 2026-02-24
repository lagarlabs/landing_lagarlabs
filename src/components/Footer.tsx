import { motion } from 'motion/react';
import { Button } from './ui/button';
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  ArrowUp,
  Heart
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-section text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white">DevPro</span>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              Transformo ideas en experiencias digitales excepcionales. 
              Especializado en desarrollo web personalizado y soluciones innovadoras.
            </p>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="p-3 border-slate-600 hover:border-blue-400 hover:bg-blue-900/20 text-slate-300 hover:text-blue-400"
                onClick={() => window.open('https://www.linkedin.com/in/josué-barrios-128339294', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="p-3 border-slate-600 hover:border-slate-400 hover:bg-slate-800 text-slate-300 hover:text-white"
                onClick={() => window.open('https://github.com/lagarlabs', '_blank')}
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg mb-6 text-white">Servicios</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Desarrollo Web</li>
              <li>Aplicaciones Personalizadas</li>
              <li>E-commerce</li>
              <li>Consultoría Técnica</li>
              <li>Mantenimiento Web</li>
              <li>Optimización SEO</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg mb-6 text-white">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">lagarlabs@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">+34 670 581 236</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-slate-300">Agüimes, Las Palmas</span>
              </div>
            </div>

            <div className="mt-6 p-4 glass-card-soft rounded-lg">
              <h4 className="text-white text-sm mb-2">¿Tienes un proyecto?</h4>
              <p className="text-slate-300 text-xs mb-3">
                Hablemos sobre tu idea y cómo puedo ayudarte a hacerla realidad.
              </p>
              <Button
                onClick={() => scrollToSection('contacto')}
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Empezar Proyecto
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} DevPro. Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>en España</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <button className="hover:text-white transition-colors duration-200">
                Política de Privacidad
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Términos de Servicio
              </button>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </footer>
  );
}