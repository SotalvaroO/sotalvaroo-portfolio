/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
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
