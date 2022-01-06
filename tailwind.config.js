const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      violet: colors.violet,
      pink: colors.pink,
      grayblue: {
        50: "#585f6c",
        100: "#4e5562",
        200: "#444b58",
        300: "#3a414e",
        400: "#303744",
        500: "#262d3a",
        600: "#1c2330",
        700: "#121926",
        800: "#080f1c",
        900: "#000512",
      },
    },
    fontFamily: {
      poopins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
