import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Linkedin,
  Github
} from 'lucide-react';
import { useState, useCallback } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    needsCall: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatear fecha si está disponible
    let formattedDate = '';
    if (formData.preferredDate) {
      formattedDate = new Date(formData.preferredDate).toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    
    // Crear mensaje base para WhatsApp
    let message = `¡Hola! Me interesa contactarte para un proyecto web.

📝 *Mis datos:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Empresa: ${formData.company || 'No especificada'}`;

    // Añadir teléfono si está disponible
    if (formData.phone) {
      message += `\n• Teléfono: ${formData.phone}`;
    }

    message += `

🎯 *Proyecto:*
• Tipo: ${formData.project}
• Presupuesto: ${formData.budget}`;

    // Añadir información de llamada si se solicitó
    if (formData.needsCall && formData.preferredDate && formData.preferredTime) {
      message += `

📞 *Llamada solicitada:*
• Fecha preferida: ${formattedDate}
• Hora preferida: ${formData.preferredTime}`;
    }

    message += `

💬 *Descripción:*
${formData.message}

¡Espero tu respuesta!`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/34670581236?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      budget: '',
      message: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      needsCall: false
    });
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const inputElement = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? inputElement.checked : value
    }));
  }, []);



  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Hablemos de Tu Proyecto
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ¿Listo para llevar tu idea al siguiente nivel? Contacta conmigo y 
            comencemos a crear algo extraordinario juntos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 text-slate-900">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600">lagarlabs@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 mb-1">Teléfono</h4>
                      <p className="text-slate-600">+34 670 581 236</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 mb-1">Ubicación</h4>
                      <p className="text-slate-600">Agüimes, Las Palmas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 mb-1">Horario de Respuesta</h4>
                      <p className="text-slate-600">24 horas máximo</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="text-slate-900 mb-4">Sígueme</h4>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-3 hover:bg-blue-50 hover:border-blue-300"
                      onClick={() => window.open('https://www.linkedin.com/in/josué-barrios-128339294', '_blank')}
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-3 hover:bg-slate-50 hover:border-slate-300"
                      onClick={() => window.open('https://github.com/lagarlabs', '_blank')}
                    >
                      <Github className="w-5 h-5 text-slate-600" />
                    </Button>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-slate-900">Consulta Gratuita</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Primera consulta sin compromiso para analizar tu proyecto y definir la mejor estrategia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-700">Nombre Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-slate-700">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    <div>
                      <Label htmlFor="project" className="text-slate-700">Tipo de Proyecto *</Label>
                      <select
                        id="project"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        <option value="">Selecciona un tipo</option>
                        <option value="landing">Landing Page</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="webapp">Aplicación Web</option>
                        <option value="corporate">Sitio Corporativo</option>
                        <option value="custom">Herramienta Personalizada</option>
                        <option value="maintenance">Mantenimiento</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-slate-700">Presupuesto Estimado</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="1000-3000">€1,000 - €3,000</option>
                      <option value="3000-5000">€3,000 - €5,000</option>
                      <option value="5000-10000">€5,000 - €10,000</option>
                      <option value="10000+">€10,000+</option>
                      <option value="discuss">Prefiero discutirlo</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700">Describe tu Proyecto *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 border-slate-200 focus:border-blue-400 focus:ring-blue-400 resize-none"
                      placeholder="Cuéntame sobre tu proyecto, objetivos, plazos y cualquier detalle relevante que me ayude a entender mejor tus necesidades..."
                    />
                  </div>

                  {/* Campos opcionales de contacto y llamada */}
                  <div className="border-t border-slate-200 pt-6">
                    <div className="mb-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="needsCall"
                          checked={formData.needsCall}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-slate-700">¿Te gustaría que agendemos una llamada?</span>
                      </label>
                    </div>

                    {formData.needsCall && (
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <Label htmlFor="phone" className="text-slate-700">Teléfono</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-2 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                            placeholder="+34 600 000 000"
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferredDate" className="text-slate-700">Fecha Preferida</Label>
                          <Input
                            id="preferredDate"
                            name="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="mt-2 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferredTime" className="text-slate-700">Hora Preferida</Label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                          >
                            <option value="">Selecciona hora</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <MessageSquare className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      Enviar por WhatsApp
                    </Button>

                  </div>
                </form>

                <div className="mt-8 p-4 bg-green-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageSquare className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm text-green-900 mb-1">Respuesta Inmediata</h4>
                      <p className="text-xs text-green-700">
                        Al enviar se abrirá WhatsApp con toda tu información organizada. Si marcas la opción de llamada, 
                        también incluirá tus datos de contacto y fecha preferida.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}