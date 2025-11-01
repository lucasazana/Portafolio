# Portafolio de Lucas Azaña

¡Hola! Este es mi portafolio profesional, desarrollado con Astro, Tailwind CSS y tecnologías modernas. Aquí comparto mis proyectos, experiencia, habilidades y formas de contacto.

## Demo

🔗 [lucas-azana.netlify.app](https://lucas-azana.netlify.app/)

## Tecnologías principales

- [Astro](https://astro.build/) — Framework para sitios rápidos y modernos
- [Tailwind CSS](https://tailwindcss.com/) — Utilidades CSS para estilos personalizados y responsivos
- [Netlify](https://www.netlify.com/) — Hosting y despliegue continuo

## Características

- Modo claro y oscuro con cambio dinámico
- Paleta de colores personalizada (Gengar theme)
- Secciones: Hero, Proyectos, Experiencia, Skills, Contacto
- SEO optimizado y sitemap.xml generado automáticamente
- Responsive y accesible

## Estructura del proyecto

```text
src/
	components/         # Componentes Astro reutilizables
		sections/         # Secciones principales del sitio
		ui/               # Elementos de UI (Navbar, Footer, etc)
	layouts/            # Layout principal
	pages/              # Páginas y rutas (index, 404, sitemap)
	styles/             # CSS global, temas y utilidades
	scripts/            # Scripts JS para interacción (tema, idioma, etc)
public/
	img/                # Imágenes y assets
	data/               # Archivos de datos (i18n)
```

## Instalación y desarrollo local

```bash
git clone https://github.com/lucasazana/portafolio.git
cd portafolio
npm install
npm run dev
```

## Despliegue

El sitio está desplegado en Netlify. Si quieres, puedes hacer tu propio fork y conectar el repo para despliegue automático.

## Licencia

MIT
