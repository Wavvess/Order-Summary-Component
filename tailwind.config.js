/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'paleblue': 'hsl(225, 100%, 94%)',
      'brightblue': 'hsl(245, 75%, 52%)',
      'verypaleblue': 'hsl(225, 100%, 98%)',
      'desaturatedblue': 'hsl(224, 23%, 55%)',
      'darkblue': 'hsl(223, 47%, 23%)'
    },
    boxShadow: {
      'purple-lg': '0 8px 30px hsla(245, 75%, 52%, 0.3)'
    }
    
    },
  },
  plugins: [],
}

