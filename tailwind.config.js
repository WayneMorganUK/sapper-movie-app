const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
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
        '90':  '22.5rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '120': '30rem'
      },
      scale: {
        '60': '0.6',
        '44': '0.44'
      },
      gridTemplateRows: {
      'auto': 'repeat(auto-fill, minmax(0,auto))',
    }
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
