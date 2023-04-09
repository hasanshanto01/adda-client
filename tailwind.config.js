/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0AB0DA",

          "secondary": "#463AA1",

          "accent": "#C149AD",

          "neutral": "#021431",

          "base-100": "#FFFFFF",

          "info": "#93E6FB",

          "success": "#34A853",

          "warning": "#FBBC05",

          "error": "#EA4335",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

