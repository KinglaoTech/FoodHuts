/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  colors:{
    myRed:"#F54748",
    LightBrown:"#FEF9EF"
  },
  theme: {
    screens: {
      sm: '480px', 
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing:{
      '1':'8px',
      '2':'12px',
      '3':'16px',
      '4':'24px',
      '5':'32px',
      '6':'48px',
    },
    extend: {},
  },
  plugins: [],
}

