/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        crimsontext: ["Crimson Text", "serif"],
        nunitosans: ["Nunito Sans", "sans-serif"],
      },

      colors: {
        "primary-600": "#167351",
        "gray-800": "#292a2a",
        "dark-gray-900": "#111",
      },
    },
  },
  plugins: [],
};
