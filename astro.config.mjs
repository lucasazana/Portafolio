// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-dominio.com', // Cambia esto por tu dominio
  integrations: [tailwind(), sitemap()],
});
