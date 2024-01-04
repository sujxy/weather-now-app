/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      },
      colors: {
        primary: "#0085FF",
      },
    },
  },
  plugins: [],
};
