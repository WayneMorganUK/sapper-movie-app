const plugin = require('tailwindcss/plugin')
module.exports = {
  future: {},
  purge: {
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Source Sans Pro']
      },
      colors: {
        'primary':      "var(--primary-colour)",
        'secondary':     "var(--secondary-colour)",
        'bgcolour':     "var(--background-colour)",
        'textLight':    "var(--light-text)",
        'textDark':     "var(--dark-text)",
        'border':       "var(--border-colour)",
        'selected':     "var(--selected)"
      },
      spacing: {
        '42': '10.5rem',
        '66': '16.5rem',
        '90': '22.5rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '120': '30rem',
        '16/9': '56.25%'
      },
      scale: {
        '60': '0.6',
        '44': '0.44'
      },
      gridTemplateRows: {
      'auto': 'repeat(auto-fill, minmax(0,auto))',
      },

    },
  },
  variants: {

    extend: {
      backgroundColor: ['active'],
      transform: ['group-hover']
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000' :{
          'perspective': '1000px',
        },
        '.backface-hidden' :{
        'backface-visibility': 'hidden',
        },
        '.rotate-y-0': {
          transform: 'rotateY(0deg)'
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)'
        },
      }

      addUtilities(newUtilities, ['group-hover'])
    }),
    require('@tailwindcss/line-clamp')
  ],
}
