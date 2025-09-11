# Configuración EmailJS

Para que funcione el envío de emails desde el formulario de contacto y agendamiento de citas, necesitas configurar EmailJS.

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita
- Verifica tu email

### 2. Configurar el servicio de email
- En el dashboard, ve a "Email Services"
- Añade un nuevo servicio (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu email `lagarlabs@gmail.com`

### 3. Crear templates de email

#### Template para formulario de contacto:
- Ve a "Email Templates"
- Crea un nuevo template con este contenido:

**Subject:** Nuevo mensaje de contacto - {{from_name}}

**Body:**
```
Has recibido un nuevo mensaje de contacto:

Nombre: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}
Tipo de proyecto: {{project_type}}
Presupuesto: {{budget}}

Mensaje:
{{message}}

---
Enviado desde tu página web
```

#### Template para agendamiento de citas:
- Crea otro template con este contenido:

**Subject:** Solicitud de cita - {{client_name}}

**Body:**
```
{{client_name}} quiere agendar una llamada contigo:

Información del cliente:
- Nombre: {{client_name}}
- Email: {{client_email}}
- Teléfono: {{client_phone}}

Fecha y hora preferida:
- Fecha: {{preferred_date}}
- Hora: {{preferred_time}}

Mensaje adicional:
{{message}}

---
Solicitud enviada desde tu página web
```

### 4. Obtener las credenciales
- **Service ID**: Cópialo desde "Email Services"
- **Template IDs**: Cópia los IDs de ambos templates
- **Public Key**: Ve a "Account" > "General" y copia tu Public Key

### 5. Actualizar el código
En `/components/Contact.tsx`, reemplaza estas líneas:

```javascript
// Reemplaza estos valores con tus credenciales reales
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID'; 
const appointmentTemplateId = 'YOUR_APPOINTMENT_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

Y descomenta estas líneas en ambas funciones:
```javascript
// await emailjs.send(serviceId, templateId, templateParams, publicKey);
// await emailjs.send(serviceId, appointmentTemplateId, templateParams, publicKey);
```

### 6. Testing
- Una vez configurado, prueba enviando un mensaje desde tu web
- Verifica que lleguen los emails a `lagarlabs@gmail.com`

## Límites de la cuenta gratuita:
- 200 emails por mes
- Perfecto para una landing page de servicios

## Variables disponibles en los templates:

### Formulario de contacto:
- `{{from_name}}` - Nombre del cliente
- `{{from_email}}` - Email del cliente  
- `{{company}}` - Empresa del cliente
- `{{project_type}}` - Tipo de proyecto
- `{{budget}}` - Presupuesto seleccionado
- `{{message}}` - Mensaje del cliente

### Agendamiento de citas:
- `{{client_name}}` - Nombre del cliente
- `{{client_email}}` - Email del cliente
- `{{client_phone}}` - Teléfono del cliente
- `{{preferred_date}}` - Fecha preferida
- `{{preferred_time}}` - Hora preferida
- `{{message}}` - Mensaje adicional del cliente