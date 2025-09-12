# Integración WhatsApp

Los formularios de contacto y agendamiento de citas están configurados para enviar los datos directamente a WhatsApp.

## Funcionamiento:

### Formulario de contacto principal:
- El usuario completa sus datos (nombre, email, empresa, tipo de proyecto, presupuesto, mensaje)
- Al hacer clic en "Enviar por WhatsApp", se abre WhatsApp Web/App con un mensaje formateado
- El mensaje incluye todos los detalles del proyecto organizados de forma clara

### Modal de agendamiento de citas:
- El usuario selecciona fecha, hora y completa sus datos
- Al hacer clic en "Enviar por WhatsApp", se abre WhatsApp con los detalles de la cita
- El mensaje incluye la fecha formateada en español y toda la información de contacto

## Número de WhatsApp configurado:
**+34 670 581 236**

## Formato de URL de WhatsApp:
```
https://wa.me/34670581236?text=MENSAJE_CODIFICADO
```

## Ventajas de esta implementación:
- ✅ No requiere configuración de servicios externos
- ✅ Respuesta más rápida y directa
- ✅ Los clientes pueden continuar la conversación en WhatsApp
- ✅ No hay límites de mensajes
- ✅ Más familiar para los usuarios españoles
- ✅ Funciona tanto en móvil como desktop

## Ejemplos de mensajes:

### Mensaje de contacto:
```
¡Hola! Me interesa contactarte para un proyecto web.

📝 Mis datos:
• Nombre: [Nombre del cliente]
• Email: [Email del cliente]
• Empresa: [Empresa o "No especificada"]

🎯 Proyecto:
• Tipo: [Tipo seleccionado]
• Presupuesto: [Presupuesto seleccionado]

💬 Descripción:
[Mensaje del cliente]

¡Espero tu respuesta!
```

### Mensaje de cita:
```
📞 ¡Hola! Quiero agendar una llamada contigo.

👤 Mis datos:
• Nombre: [Nombre del cliente]
• Email: [Email del cliente]
• Teléfono: [Teléfono o "No especificado"]

📅 Fecha y hora preferida:
• [Fecha formateada en español]
• [Hora seleccionada]

💬 Mensaje adicional:
[Mensaje o "Sin mensaje adicional."]

¿Te viene bien esa fecha y hora? ¡Confirma cuando puedas!
```