/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "figtree": ["Figtree", "sans-serif"]
      },
      colors:{
        "bgMain": "hsl(47, 88%, 63%)",
        "blackAccent": "hsl(0, 0%, 7%)",
        "fontGrey": "hsl(0, 0%, 50%)"
      },
      boxShadow:{
        "bx": "0.5rem 0.5rem hsl(0, 0%, 7%)"
      }
    },
  },
  plugins: [],
}

