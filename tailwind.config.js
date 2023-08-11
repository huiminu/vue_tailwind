/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100:"#F6F9F8",
          200:"#EDF3F0",
          300:"#DCE8E2",
          400:"#B8D1C5", 
          500:"#4E8B6F",
          600:"#3E6F59",
          700:"#4E8B6F",
          800:"#3E6F59",
          900:"#2F5343",
        },
        secondary: {
          400:"#ABD0F3",
          700:"#2C89E0",
          800:"#236EB3",
          900:"#1A5286",
        },
        success: {
          100:"#D1E7DD",
          200:"#A3CFBB",
          500:"#198754",
          600:"#198754",
        },
        danger: {
          100:"#DEC0C3",
          500:"#DC3545",
          600:"#B02A37",
        }, 
        warning: {
          100:"#FFF3CD",
          200:"#FFE69C",
          300:"#FFDA6A",
          500:"#FFC107",  
          600:"#CC9A06",
        },
        alert:{
          DEFAULT:"#FF8F6B",
        },
      },
    },
  },
  plugins: [],
}

