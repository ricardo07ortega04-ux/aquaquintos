# AquaQuin — Sitio web de Corporativo Aquaquintos

Sitio estático (HTML/CSS/JS) para Corporativo Aquaquintos, empresa de Puebla dedicada a la
venta, instalación y mantenimiento de equipos de tratamiento de agua residencial, comercial
e industrial.

## Estructura

- `index.html` — página principal (inicio, soluciones, servicios, clientes, nosotros, contacto)
- `css/styles.css` — estilos
- `js/main.js` — menú móvil, año dinámico en footer y envío del formulario de contacto por WhatsApp
- `images/` — assets del sitio

## Desarrollo local

No requiere build ni dependencias. Basta con abrir `index.html` en el navegador, o servirlo
con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8000
```

## Pendientes / por confirmar con el cliente

- Sustituir el logo recreado en SVG por el archivo original de marca (PNG/SVG) cuando esté disponible.
- Agregar fotos reales de instalaciones/equipos y, si se autoriza, logos oficiales de los
  clientes mostrados en la sección "Empresas que confían en AquaQuin".
