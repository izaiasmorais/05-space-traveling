/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      colors: {
        background: "#1A1D23",
        heading: "#F8F8F8",
        highlight: "#FF57B2",
        info: "#BBBBBB",
        body: "#D7D7D7",
      },
    },
  },
  plugins: [],
};
