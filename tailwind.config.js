/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "640px", // Mobile
        md: "768px", // Tablets
        lg: "1024px", //Laptops
        xl: "1280px", // Large screens
      },
      colors: {
        light: {
          bg: "#e0f7fa",
          panel: "#81d4fa",
          primary: "#004d40",
          listItem: "#c9e7ff",
          highlight: "#005b75",
          playlist: "#b2dfdb",
          nowplaying: "#ffcc80",
          hover: "#80deea",
          footer: "#e6b977",
        },
        dark: {
          bg: "#003b46",
          panel: "#004d60",
          primary: "#b23bf2",
          highlight: "#f57c00",
          playlist: "#004d40",
          nowplaying: "#ffab40",
          hover: "#00838f",
          footer: "#cc8c4b",
        },
      },
    },
  },
  plugins: [],
};
