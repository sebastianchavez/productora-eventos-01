# 🎉 Eventos Lumière — Landing Page Template

Landing page completa para una **productora de eventos premium**, con 8 páginas totalmente funcionales, datos mockeados, animaciones y diseño responsive.

## ✨ Características

- **8 páginas HTML** completas
- **Tailwind CSS** (vía CDN)
- **JavaScript nativo** (sin frameworks)
- **Datos mockeados** listos para personalizar
- **Diseño responsive** (mobile-first)
- **Paleta premium**: negro/dorado
- **Animaciones suaves** con Intersection Observer
- **Galería con filtros** y lightbox
- **Formulario validado** en tiempo real
- **Navbar fija** con efecto scroll
- **Menú móvil** hamburguesa

## 📂 Estructura

```
productora-eventos-01/
├── index.html              # Inicio
├── sobre-nosotros.html     # Sobre nosotros
├── servicios.html          # Servicios
├── galeria.html            # Galería
├── precios.html            # Precios
├── contacto.html           # Contacto
├── privacidad.html         # Política de privacidad
├── terminos.html           # Términos y condiciones
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   ├── data.js             # Datos mockeados (editable)
│   ├── main.js             # Funcionalidades globales
│   ├── galeria.js          # Galería + lightbox
│   └── contacto.js         # Validación formulario
└── README.md
```

## 🚀 Uso

1. **Abre `index.html`** en tu navegador
2. **Personaliza los datos** editando `js/data.js`:
   - Nombre de la marca
   - Servicios
   - Galería
   - Testimonios
   - Precios
   - Información de contacto
3. **Personaliza estilos** en `css/styles.css` (variables CSS al inicio)

## 🎨 Personalización rápida

### Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
  --color-gold: #d4af37;       /* Color principal */
  --color-bg: #0a0a0a;          /* Fondo */
  --color-text: #f5f5f5;        /* Texto */
}
```

### Tailwind config
En cada HTML, dentro de `<script>tailwind.config = {...}</script>`, puedes extender:
- Colores (`gold`)
- Fuentes (`serif`, `sans`)

### Datos
Toda la información mockeada está en `js/data.js`:
- `LUMIERE_DATA.brand` — Marca, contacto, horarios, redes
- `LUMIERE_DATA.services` — 6 servicios
- `LUMIERE_DATA.team` — Equipo
- `LUMIERE_DATA.gallery` — 16 imágenes
- `LUMIERE_DATA.testimonials` — 5 testimonios
- `LUMIERE_DATA.pricing` — 3 planes
- `LUMIERE_DATA.extras` — 8 servicios adicionales
- `LUMIERE_DATA.faq` — 6 preguntas
- `LUMIERE_DATA.timeline` — 6 hitos
- `LUMIERE_DATA.upcomingEvents` — 3 eventos próximos

## 🛠️ Tecnologías

- HTML5
- Tailwind CSS 3.x (CDN play)
- JavaScript ES6+ (vanilla)
- Google Fonts (Playfair Display + Inter)
- Imágenes vía Unsplash CDN

## 📞 Datos de contacto (mockeados - Chile)

- **Email:** hola@eventoslumiere.cl
- **Teléfono:** +56 2 2898 4500
- **WhatsApp:** +56 9 7845 1230
- **Dirección:** Av. Apoquindo 4501, Piso 12, Las Condes, Santiago
- **Horarios:** Lun-Vie 9-19h | Sáb 10-14h

## 💰 Moneda

Todos los precios están expresados en **CLP (Pesos Chilenos)** e incluyen IVA.

## 📜 Licencia

Template libre para uso comercial y personal. Las imágenes provienen de [Unsplash](https://unsplash.com) y son libres de uso bajo su licencia.
