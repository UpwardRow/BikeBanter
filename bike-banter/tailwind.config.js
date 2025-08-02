module.exports = {
  content: [
    './src/**/*.{html,jsx,tsx}',
    './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
  ],
  purge: [],
  darkMode: false, 
  theme: {
    extend: {
      animation: {
        glow: 'glow 1.5s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #ff00ff' },
          '50%': { boxShadow: '0 0 20px #ff00ff' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    }),
    require('@rewind-ui/core/plugin'),
  ],
}
