/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        fillProgress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fillProgress: "fillProgress 1.5s ease-out forwards",
      },
      colors: {
        light: {
          primary: "#FFFFFF",
        },
        primary: "#000000",
        secondary: {
          100: "#f5ffff",
          200: "#bef0ff",
        },
      },
    },
  },
  plugins: [],
};
