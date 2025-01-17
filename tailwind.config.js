/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    files: ["./src/**/*.{js,jsx}", "./content/**/*.{md,html}"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
