/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "50px",
    },
    extend: {
      colors: {
        primary: "#0000FF",
        secondary: "#64748b",
        instagram: "#c32aa3",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
