/** @type {import('tailwindcss').Config} */

import heroimage from "./src/assets/heroimage.png";

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
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right bottom, rgba(49, 84, 44, 0.8), rgba(16, 71, 52, 0.8)), url(heroimage)",
      },

      colors: {
        primary: "#167351",
      },
    },
  },
  plugins: [],
};
