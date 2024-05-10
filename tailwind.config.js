/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#d0d1d2",
          200: "#a1a2a5",
          300: "#737477",
          400: "#44454a",
          500: "#15171d",
          600: "#111217",
          700: "#0d0e11",
          800: "#08090c",
          900: "#040506",
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
