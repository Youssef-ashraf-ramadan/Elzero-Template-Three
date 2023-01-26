/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 10px #ddd ',
      },
      screens: {
        'laptop': { 'max': '991px' },
        // => @media (max-width: 991px) { ... }

        'tablet': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'desktop': { 'max': '1280px' },
        // => @media (min-width: 1280px) { ... }
      },
      keyframes: {
        bounce: {
          '0%, 100%': { top: '0', transform: 'none' },
          '50%': { top: '-50px', transform: 'none' },
        },
        up: {
          '0%, 10%, 20%, 50%, 80%, 100%': { transform: 'none' },
          '40% , 60%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        bounce: 'bounce 5s linear infinite',
        up: 'up 1.5s linear infinite'
      },

    },
  },
  plugins: [],
}
