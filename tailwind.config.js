/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        flame: {
          200: "#E25822",
        },
        chartreuse: {
          50: "#b0d091",
          100: "#799b56",
          200: "#4f6538",
          300: "#28341d",
        },
        azure: {
          50: "#b5c8de",
          100: "#6994be",
          200: "#45617c",
          300: "#233240",
        },
        rose: {
          50: "#e0bccd",
          100: "#c877a0",
          200: "#874b6a",
          300: "#462736",
        },
      },
    },
  },
  plugins: [],
};
