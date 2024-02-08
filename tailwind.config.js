/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Components/**/*.{js,jsx,ts,tsx}", "./Screens/**/*/.{js,jsx,ts}", "./Navigator.js"],
  theme: {
    extend: {
      textColor: {
        primary: "#0D34BF",
        secondary: "#4C536E"
      }
    },
  },
  plugins: [],
}
