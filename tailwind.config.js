/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        danger: "	#df4759",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
