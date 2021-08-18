module.exports = {
  prefix: 'tw-',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontSize: {
      'less-less': '.20rem',
      less: '.40rem',
      less2: '.4444444rem', // 8px
      'less-more': '.5559rem',
      'xs-less': '.67rem', //  12px
      xs: '.75rem',
      'sm-less': '.777779rem', // 14px
      sm: '.875rem',
      'base-less': '.89rem',
      base: '1rem',
      more: '1.025rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xl2: '1.333333rem', // 24 px
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    extend: {
      margin: {
        6: '1.5rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        // mx-16	margin-left: 4rem; margin-right: 4rem;
        // mx-20	margin-left: 5rem; margin-right: 5rem
      },
      backgroundPosition: {
        'top-0': 'center top 0rem',
      },
      spacing: {
        0.25: '0.0625rem',
        4.25: '1.0625rem',
        4.5: '1.125rem',

        5: '1.25rem',
        5.3: '1.334rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
        8: '2rem', // default
        8.2: '2.15rem',
        13: '3.25rem',
        13.5: '3.375rem',
        18: '4.5rem',
        30: '7.5rem',
        68: '17rem',
        104: '25rem',
        112: '26rem',
        120: '27rem',
        126: '27.8rem',
        128: '28rem',
        136: '29rem',
        142: '30rem',
      },
      width: {
        3: '0.75rem',
        3.5: '0.825rem',
        4: '1rem',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      height: {
        1.8: '0.4rem', // 8px
        13: '3.25rem',
        13.5: '3.3333333rem', // 60px
        14: '3.5rem',
      },
      letterSpacing: {
        '2xwidest': '.15em', // 1.5px
      },
      backdropBlur: {
        'xs-less': '2px',
      },
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '1.125rem',
        md: '1.5rem',
        lg: '1rem',
        xl: '1.875rem',
        '2xl': '2.5rem',
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    backgroundColor: (theme) => ({
      ...require('tailwindcss/colors'),
      ...theme('colors'),
      // 'primary': '#3490dc',
      // 'secondary': '#ffed4a',
      // 'danger': '#e3342f',
      main: '#4440db',
      'main-100': '#4d5dd2',
      // 'true-gray': colors.trueGray,
      modal: 'rgba(255, 255, 255, 0.91)',
      'modal-overlay': 'rgba(255, 255, 255, 0.91)',
      'modal-text-bg': 'rgb(244, 244, 244)',
      'modal-border': 'rgba(0, 0, 0, 0.05)',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
