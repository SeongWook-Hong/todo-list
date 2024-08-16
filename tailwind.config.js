/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: { colors: { primary: 'rgb(37, 147, 255)' } },
  },
  safelist: ['btn_primary', 'btn_delete'],
  plugins: [],
};
