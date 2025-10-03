module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // colores primarios (autoridad tecnica)
        primary: {
          50: "#f8fafc", // gris muy claro
          100: "#f1f5f9", // gris claro
          200: "#e2e8f0", // gris suave
          300: "#cbd5e1", // gris medio claro
          400: "#94a3b8", // gris medio
          500: "#64748b", // gris neutro
          600: "#475569", // gris medio oscuro
          700: "#334155", // gris oscuro
          800: "#1e293b", // gris muy oscuro
          900: "#0f172a", // gris casi negro
          DEFAULT: "#1e293b", // color por defecto
        },
        
        // colores secundarios (texto de apoyo)
        secondary: {
          50: "#f8fafc", // gris muy claro
          100: "#f1f5f9", // gris claro
          200: "#e2e8f0", // gris suave
          300: "#cbd5e1", // gris medio claro
          400: "#94a3b8", // gris medio
          500: "#64748b", // gris neutro
          600: "#475569", // gris medio oscuro
          DEFAULT: "#475569", // color por defecto
        },

        // colores de acento (poder de llamada a la accion)
        accent: {
          50: "#eff6ff", // azul muy claro
          100: "#dbeafe", // azul claro
          200: "#bfdbfe", // azul suave
          300: "#93c5fd", // azul medio claro
          400: "#60a5fa", // azul medio
          500: "#3b82f6", // azul principal
          600: "#2563eb", // azul intenso
          700: "#1d4ed8", // azul oscuro
          800: "#1e40af", // azul muy oscuro
          900: "#1e3a8a", // azul profundo
          DEFAULT: "#3b82f6", // color por defecto
        },

        // colores de fondo
        background: "#ffffff", // blanco
        surface: "#f8fafc", // superficie gris claro

        // colores de texto
        text: {
          primary: "#0f172a", // texto principal
          secondary: "#64748b", // texto secundario
        },

        // colores de estado
        success: {
          50: "#ecfdf5", // verde muy claro
          100: "#d1fae5", // verde claro
          500: "#10b981", // verde principal
          600: "#059669", // verde intenso
          DEFAULT: "#10b981", // color por defecto
        },

        warning: {
          50: "#fffbeb", // amarillo muy claro
          100: "#fef3c7", // amarillo claro
          500: "#f59e0b", // amarillo principal
          600: "#d97706", // amarillo intenso
          DEFAULT: "#f59e0b", // color por defecto
        },

        error: {
          50: "#fef2f2", // rojo muy claro
          100: "#fee2e2", // rojo claro
          500: "#ef4444", // rojo principal
          600: "#dc2626", // rojo intenso
          DEFAULT: "#ef4444", // color por defecto
        },
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

