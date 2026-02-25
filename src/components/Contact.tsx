import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Clock, MessageSquare, Linkedin, Github, Send } from 'lucide-react';
import { useCallback, useState } from 'react';
import { motion } from 'motion/react';

const contactDetails = [
  { icon: Mail, title: 'Email', value: 'lagarlabs@gmail.com', color: 'text-cyan-300', bg: 'from-cyan-500/20 to-blue-500/15', border: 'border-cyan-500/25' },
  { icon: Phone, title: 'Teléfono', value: '+34 670 581 236', color: 'text-violet-300', bg: 'from-violet-500/20 to-purple-500/15', border: 'border-violet-500/25' },
  { icon: MapPin, title: 'Ubicación', value: 'Agüimes, Las Palmas', color: 'text-teal-300', bg: 'from-teal-500/20 to-emerald-500/15', border: 'border-teal-500/25' },
  { icon: Clock, title: 'Respuesta', value: 'Menos de 24 horas', color: 'text-yellow-300', bg: 'from-yellow-500/20 to-orange-500/15', border: 'border-yellow-500/25' },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', project: '', budget: '', message: '', phone: '', preferredDate: '', preferredTime: '', needsCall: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formattedDate = '';
    if (formData.preferredDate) {
      formattedDate = new Date(formData.preferredDate).toLocaleDateString('es-ES', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
    }

    let message = `¡Hola! Me interesa contactarte para un proyecto web.\n\n📝 *Mis datos:*\n• Nombre: ${formData.name}\n• Email: ${formData.email}\n• Empresa: ${formData.company || 'No especificada'}`;
    if (formData.phone) message += `\n• Teléfono: ${formData.phone}`;
    message += `\n\n🎯 *Proyecto:*\n• Tipo: ${formData.project}\n• Presupuesto: ${formData.budget}`;
    if (formData.needsCall && formData.preferredDate && formData.preferredTime) {
      message += `\n\n📞 *Llamada solicitada:*\n• Fecha preferida: ${formattedDate}\n• Hora preferida: ${formData.preferredTime}`;
    }
    message += `\n\n💬 *Descripción:*\n${formData.message}\n\n¡Espero tu respuesta!`;

    window.open(`https://wa.me/34670581236?text=${encodeURIComponent(message)}`, '_blank');
    setFormData({ name: '', email: '', company: '', project: '', budget: '', message: '', phone: '', preferredDate: '', preferredTime: '', needsCall: false });
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const inputElement = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? inputElement.checked : value }));
  }, []);

  return (
    <section id="contacto" className="py-24 overflow-hidden">
      <div className="orb orb-violet w-64 h-64 bottom-0 left-0 opacity-20" />
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-300 text-xs tracking-wide mb-5">
            <MessageSquare className="w-3.5 h-3.5" />
            Contacto
          </div>
          <h2 className="section-title mb-5">Convirtamos tu idea en un producto memorable</h2>
          <p className="section-subtitle">Cuéntame tu objetivo y te propongo una dirección clara para ejecutar rápido y bien.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-2xl p-7 lg:col-span-1 border border-white/12 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Contacto directo</h3>

            <div className="space-y-4 flex-1">
              {contactDetails.map((item) => (
                <div key={item.title} className={`flex items-center gap-4 p-3.5 rounded-xl bg-gradient-to-r ${item.bg} border ${item.border}`}>
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 leading-none mb-1">{item.title}</p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-400 mb-4">Sígueme en redes</p>
              <div className="flex gap-3">
                <button
                  onClick={() => window.open('https://www.linkedin.com/in/josué-barrios-128339294', '_blank')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open('https://github.com/lagarlabs', '_blank')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass-card rounded-2xl p-7 lg:col-span-2 border border-white/12"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-slate-300 text-sm mb-2 block">Nombre *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-input rounded-xl"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-300 text-sm mb-2 block">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input rounded-xl"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-slate-300 text-sm mb-2 block">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="glass-input rounded-xl"
                    placeholder="Nombre de empresa"
                  />
                </div>
                <div>
                  <Label htmlFor="project" className="text-slate-300 text-sm mb-2 block">Tipo de proyecto *</Label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    className="glass-select w-full rounded-xl px-3 py-2 text-sm"
                  >
                    <option value="">Selecciona</option>
                    <option value="landing">Landing page</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="webapp">Aplicación web</option>
                    <option value="corporate">Web corporativa</option>
                    <option value="custom">Herramienta personalizada</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="budget" className="text-slate-300 text-sm mb-2 block">Presupuesto</Label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="glass-select w-full rounded-xl px-3 py-2 text-sm"
                >
                  <option value="">Selecciona tu rango</option>
                  <option value="1000-3000">€1.000 - €3.000</option>
                  <option value="3000-5000">€3.000 - €5.000</option>
                  <option value="5000-10000">€5.000 - €10.000</option>
                  <option value="10000+">€10.000+</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="text-slate-300 text-sm mb-2 block">Cuéntame tu proyecto *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-input rounded-xl resize-none"
                  placeholder="Describe brevemente tu proyecto, objetivos y cualquier detalle relevante..."
                />
              </div>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="needsCall"
                    checked={formData.needsCall}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-md border transition-all ${formData.needsCall ? 'bg-cyan-500 border-cyan-500' : 'border-white/25 bg-white/5'} flex items-center justify-center`}>
                    {formData.needsCall && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Quiero agendar una llamada</span>
              </label>

              {formData.needsCall && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid md:grid-cols-3 gap-4"
                >
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="glass-input rounded-xl"
                    placeholder="+34 ..."
                  />
                  <Input
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="glass-input rounded-xl"
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="glass-select w-full rounded-xl px-3 py-2 text-sm"
                  >
                    <option value="">Hora</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                  </select>
                </motion.div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:opacity-90 transition-opacity rounded-xl shadow-[0_8px_28px_rgba(16,185,129,0.25)] text-white font-medium"
              >
                <Send className="mr-2 w-4 h-4" />
                Enviar por WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
