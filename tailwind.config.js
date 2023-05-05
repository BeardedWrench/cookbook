/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "light-silver": "#fcfcfc",
      silver: "#f1f2f6",
      "dark-silver": "#cacaca",
      primary: "#4CD6A4",
      white: "#ffffff",
      dark: "#696969",
    },
    extend: {
      boxShadow: {
        form: "0px 0px 15px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
