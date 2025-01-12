/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        roti: {
          50: "#f9f7ed",
          100: "#f0ecd1",
          200: "#e3d8a5",
          300: "#d2be72",
          400: "#c9ad59",
          500: "#b5923d",
          600: "#9c7532",
          700: "#7d572b",
          800: "#69482a",
          900: "#5b3d28",
          950: "#342014",
        },
        blumine: {
          50: "#f1f9fe",
          100: "#e3f1fb",
          200: "#c1e4f6",
          300: "#8ad0ef",
          400: "#4bb7e5",
          500: "#249fd3",
          600: "#167fb3",
          700: "#136591",
          800: "#14587b",
          900: "#164864",
          950: "#0e2e43",
        },
      },
      fontFamily: {
        Baskervville: ["Baskervville", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
      },
    },
    screens: {
      sm: "359px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
