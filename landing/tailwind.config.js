/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        varta: ["Varta", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        karla: ["Karla", "sans-serif"],
      },
      colors: {
        terracotta: "#A06056",
        brownLight: "#706458",
        brownDark: "#534B42",
        cream: "#F3EEE8",
      },
    },
  },
  plugins: [],
};
