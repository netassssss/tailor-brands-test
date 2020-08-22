module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        cardItem: '#dedede',
        pageColor: '#bdbdbd',
        topBar: '#373737',
      },
      spacing: {
        20: '20px',
        40: '40px',
      },
      minHeight: {
        30: '30px',
      },
      height: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
        200: '200px',
        20: '20px',
        60: '60px',
        '30Of': 'calc(100% - 30px)',
        full: '100%',
        screen: '100vh',
      }),
      width: {
        20: '20px',
      },
      maxWidth: (theme, { breakpoints }) => ({
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        360: '360px',
        full: '100%',
        ...breakpoints(theme('screens')),
      }),
      boxShadow: {
        default: '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {},
  plugins: [],
};
