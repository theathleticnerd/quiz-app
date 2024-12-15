/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".clip-half-circle": {
          clipPath: "inset(0 0 50% 0)" // Clips the bottom half
        }
      });
    })
  ]
};
