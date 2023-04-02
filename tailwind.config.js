module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e57869",

          "secondary": "#4fcc79",

          "accent": "#2ac9c4",

          "neutral": "#292524",

          "base-100": "#292524",

          "info": "#689DDF",

          "success": "#198A59",

          "warning": "#CFA417",

          "error": "#F06076",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  //...
}