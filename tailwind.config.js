/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      body: "#edf4ff",
      black: "#242424",
      grey: "#F3F3F3",
      "dark-grey": "#6B6B6B",
      red: "#FF4E4E",
      transparent: "transparent",
      twitter: "#1DA1F2",
      purple: "#8B46FF",
      text_color1: "#000000",
      text_color2: "#42506a",
      text_color3: "#627edf",
      footer_text_color1: "#434446",
      footer_text_color1: "#616161",
      buttons_1: "#eb0249",
      buttons_2: "#f18032",
      button_text_color1: "#fefdfb",
      button_text_color2: "#fefaf7",
      overlay: "#1c3fdb",
    },
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
      },
    },
  },
  plugins: [],
};
