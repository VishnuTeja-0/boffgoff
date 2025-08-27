/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        dark:{
          bg:{
            dark: "hsl(0,0%,10%)",
            medium: "hsl(0,0%,20%)",
            light: "hsl(0,0%,25%)",
          },
          text:{
            primary: "hsl(0,0%,85%)",
            muted: "hsl(0,0%,70%)",
          }
        },
        light:{
          bg:{
            dark: "hsl(0,0%,90%)",
            medium: "hsl(0,0%,80%)",
            light: "hsl(0,0%,75%)",
          },
          text:{
            primary: "hsl(0,0%,15%)",
            muted: "hsl(0,0%,30%)"
          }
        },
        accent:{
          primary: "hsl(297,45%,45%)",
        }
      }
    },
  },
  plugins: [],
}