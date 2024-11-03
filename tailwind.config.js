/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     "darkModeElements": "hsl(209, 23%, 22%)",
     "darkModeBackground": "hsl(207, 26%, 17%)",
     "lightModeText": "hsl(200, 15%, 8%)",
     "lightModeInput": "hsl(0, 0%, 52%)",
     "lightModeBackground": "hsl(0, 0%, 98%)",
     "darkModeTextLightModeElements": "hsl(0, 0%, 100%)",
     "slater":"hsl(244, 63%, 55%)",
     "darkBck": "hsl(216,11%,14%)",
     "red":"red"
    },
    extend: {
      keyframes: {
        grow: {
          "0%": { 
            height: "0px",
            opacity: 0
          },
          "50%": {
            height: "100px", 
            opacity: .5
          },
          "100%": { 
            height: "200px", 
            opacity: 1 
          }
        },
        rotate: {
          "0%": { 
           transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(180deg)"
          }
        },
        ungrow: {
          "0%": { 
            height: "200px",
            opacity: 1
          },
          "50%": {
            height: "100px", 
            opacity: .5
          },
          "100%": { 
            height: "0px", 
            opacity: 0
          }
        },
        unrotate: {
          "0%": { 
           transform: "rotate(180deg)"
          },
          "100%": {
            transform: "rotate(0deg)"
          }
        }
      },
      animation:{
        grow:"grow 0.3s ease-out forwards",
        rotate:"rotate 0.3s ease-in forwards",
        ungrow:"ungrow 0.3s ease-in forwards",
        unrotate:"unrotate 0.3s ease-in forwards"
      }
    },
  },
  plugins: [],
}