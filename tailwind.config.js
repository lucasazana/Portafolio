module.exports = {
  safelist: [
    'bg-gengar',
    'bg-gengar-pastel/40',
    'shadow-gengar-strong',
    'shadow-gengar-soft',
    'text-dark-card',
    'text-black',
    'text-white',
  ],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // colores gengar (tema principal)
        gengar: {
          primary: "#4C2A85",
          secondary: "#6D28D9", 
          accent: "#9333EA",
          light: "#A855F7",
          pastel: "#C084FC",
          DEFAULT: "#4C2A85",
        },
        // utilidades directas para clases usadas en el navbar
        'gengar': "#4C2A85",
        'gengar-pastel': "#C084FC",
      },
      boxShadow: {
        // Sombras personalizadas Gengar
        'gengar-strong': '0 10px 25px -5px rgba(76, 42, 133, 0.25), 0 4px 6px -2px rgba(76, 42, 133, 0.15)',
        'gengar-soft': '0 4px 12px -2px rgba(192, 132, 252, 0.25)',
        'gengar': '0 10px 25px -5px rgba(76, 42, 133, 0.15), 0 4px 6px -2px rgba(76, 42, 133, 0.05)',
        'gengar-lg': '0 20px 40px -10px rgba(76, 42, 133, 0.2), 0 8px 16px -4px rgba(76, 42, 133, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },

      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },

      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },

      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },

      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

