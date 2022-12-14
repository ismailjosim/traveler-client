module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#029E9D",

          "secondary": "#FDC703",

          "accent": "#ffbc00",

          "neutral": "#17233E",

          "base-100": "#FFFFFF",

          "info": "#17233E",

          "success": "#029E9D",

          "warning": "#27334C",

          "error": "#F32B42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

