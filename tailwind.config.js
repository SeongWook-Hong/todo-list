/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(37, 147, 255)',
        customGray: 'rgb(156, 163, 175)',
      },
    },
  },
  safelist: ['btn_primary', 'btn_delete'],
  plugins: [],
};
