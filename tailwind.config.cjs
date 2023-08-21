/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      beige: '#DCC1AB',
      green: '#1B5B31',
      white: '#fff',
      grey: '#F5F0EC',
      black: '#111111',
    },
    extend: {
      width: {
        calc: '(calc(100%-40px)/3)',
      },
      boxShadow:{
        card: 'box-shadow: black 0px -90px 36px -28px inset;'
      }
    },
    plugins: [],
  },
};
