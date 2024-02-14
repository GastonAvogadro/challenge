/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        blueDark: '#2F333A',
        redPrimary: '#E73C17',
        blackPrimary: '#191919'
      },
    },
  },
  plugins: [],
};
