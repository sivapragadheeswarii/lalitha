/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF7F0',
          50: '#FDFCF9',
          100: '#FAF7F0',
          200: '#F3EFE6',
          300: '#EAE2D3',
        },
        gold: {
          DEFAULT: '#C6A15B',
          light: '#DFC78F',
          dark: '#A68239',
          50: '#FBF8F1',
          100: '#F5EEDC',
          200: '#EBDCB9',
          300: '#E0CA96',
          400: '#D3B574',
          500: '#C6A15B',
          600: '#A68239',
          700: '#836528',
        },
        maroon: {
          DEFAULT: '#651D32',
          light: '#7F2742',
          dark: '#4A1223',
          900: '#320B17',
        },
        charcoal: {
          DEFAULT: '#25211D',
          light: '#3C3631',
          muted: '#696259',
          border: '#E5DFD5',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
