/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Hind-Light": ["Hind Light", "sans-serif", "font-weight-light"],
        "Hind-Regular": ["Hind", "sans-serif"],
        "Hind-Medium": ["Hind Medium", "sans-serif", "font-weight-medium"],
        "Hind-SemiBold": [
          "Hind Semi-Bold",
          "sans-serif",
          "font-weight-semi-bold",
        ],
        "Hind-Bold": ["Hind Bold", "sans-serif", "font-weight-bold"],
        "Montserrat-Regular": ["Montserrat Regular", "sans-serif"],
        "Montserrat-Italic": [
          "Montserrat Italic",
          "sans-serif",
          "font-style-italic",
        ],
      },
    },
  },
  plugins: [],
};
