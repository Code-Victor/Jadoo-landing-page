const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: {
        100: "#FFF1DA",
        500: "#F1A501",
        900: "#DF6951",
      },
      "blue-gray": "#006380",
      "sky-blue":"#59B1E6",
      icons:{
        1:'#F0BB1F',
        2:'#F15A2B',
        3:'#006380',
      },
      "indigo":{
        100: "#F9F7FE",
        300:'#D5AEE4',
        500: "#747DEF",
        900:"#5E3BE1"
      }
    },

  },
  plugins: [],
};
