/* eslint global-require: 0 */
module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
  ],
};
