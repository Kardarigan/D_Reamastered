/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "slate-gray": "#6D6D6D",
        slate: {
          50: "#ffffff",
          100: "#f3f4f4",
          200: "#f1f1f2",
          300: "#a2a3a6",
          400: "#8b8d90",
          500: "#747679",
          600: "#5d5f63",
          700: "#45484d",
          800: "#2e3136",
          900: "#15171d",
          950: "#000",
        },
        red: {
          100: "#fcdddd",
          200: "#f9bbbb",
          300: "#f69898",
          400: "#f37676",
          500: "#f05454",
          600: "#c04343",
          700: "#903232",
          800: "#602222",
          900: "#301111",
        },
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
