import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Clock, MessageSquare, Linkedin, Github } from 'lucide-react';
import { useCallback, useState } from 'react';

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
    <section id="contacto" className="py-20">
      <div className="section-shell">
        <div className="text-center mb-14">
          <h2 className="section-title mb-6">Convirtamos tu idea en un producto memorable</h2>
          <p className="section-subtitle">Cuéntame tu objetivo y te propongo una dirección clara para ejecutar rápido y bien.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="glass-card rounded-2xl lg:col-span-1">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-2xl text-white">Contacto directo</h3>
              {[
                { icon: Mail, title: 'Email', value: 'lagarlabs@gmail.com' },
                { icon: Phone, title: 'Teléfono', value: '+34 670 581 236' },
                { icon: MapPin, title: 'Ubicación', value: 'Agüimes, Las Palmas' },
                { icon: Clock, title: 'Respuesta', value: 'Menos de 24 horas' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-white">{item.title}</p>
                    <p className="text-slate-300 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3">
                <Button variant="outline" className="border-white/30 hover:bg-white/10" onClick={() => window.open('https://www.linkedin.com/in/josué-barrios-128339294', '_blank')}>
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10" onClick={() => window.open('https://github.com/lagarlabs', '_blank')}>
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card rounded-2xl lg:col-span-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-200">Nombre *</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleChange} className="mt-2 bg-white/10 border-white/20 text-white" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-200">Email *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-2 bg-white/10 border-white/20 text-white" placeholder="tu@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-slate-200">Empresa</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} className="mt-2 bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="project" className="text-slate-200">Tipo de proyecto *</Label>
                    <select id="project" name="project" required value={formData.project} onChange={handleChange} className="mt-2 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
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
                  <Label htmlFor="budget" className="text-slate-200">Presupuesto</Label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="mt-2 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
                    <option value="">Selecciona</option>
                    <option value="1000-3000">€1.000 - €3.000</option>
                    <option value="3000-5000">€3.000 - €5.000</option>
                    <option value="5000-10000">€5.000 - €10.000</option>
                    <option value="10000+">€10.000+</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-200">Cuéntame tu proyecto *</Label>
                  <Textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-2 bg-white/10 border-white/20 text-white resize-none" />
                </div>

                <label className="flex items-center gap-2 text-slate-200 text-sm">
                  <input type="checkbox" name="needsCall" checked={formData.needsCall} onChange={handleChange} />
                  Quiero agendar una llamada
                </label>

                {formData.needsCall && (
                  <div className="grid md:grid-cols-3 gap-4">
                    <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-white/10 border-white/20 text-white" placeholder="+34 ..." />
                    <Input name="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} className="bg-white/10 border-white/20 text-white" min={new Date().toISOString().split('T')[0]} />
                    <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white">
                      <option value="">Hora</option>
                      <option value="09:00">09:00</option><option value="10:00">10:00</option><option value="11:00">11:00</option><option value="12:00">12:00</option>
                      <option value="16:00">16:00</option><option value="17:00">17:00</option><option value="18:00">18:00</option>
                    </select>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:opacity-90 rounded-xl">
                  <MessageSquare className="mr-2 w-5 h-5" /> Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
