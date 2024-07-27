/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customBorder: '#5E39FA', 
        customFont:  '#09115B', 
        customGreen: '#4CBB17',
        customYellow:'#D4CD16',
        customOrange:'#FCB001',
        customRed:'#FF3F00',
      }
    },
  },
  plugins: [],
}

