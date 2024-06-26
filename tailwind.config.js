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
        primary: "#167351",
      },
    },
  },
  plugins: [],
};
