module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        loading: 'loading 1.2s linear infinite',
        'loading-gap': 'loading 1.2s .6s linear infinite'
      },
      keyframes: {
        loading: {
          '0%': {
            transform: 'scale(0)',
            opacity: 0
          },
          '50%': {
            transform: 'scale(.5)',
            opacity: 1
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 0
          }
        }
      }
    },
  },
  plugins: [],
}
