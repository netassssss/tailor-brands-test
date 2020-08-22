module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        cardItem: '#dedede',
        pageColor: '#bdbdbd',
        topBar: '#373737',
      },
      spacing: {
        'special5': '0 5px',
        20: '20px',
        40: '40px',
        'special10': '0 10px 10px 10px',
      },
      minHeight: {
        30: '30px',
      },
      height: {
        200: '200px',
        20: '20px',
        60: '60px',
        '30Of': 'calc(100% - 30px)',
      },
      width: {
        20: '20px',
        'special10': 'calc(100% - 20px)',
      },
      maxWidth: {
        360: '360px',
      },
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
