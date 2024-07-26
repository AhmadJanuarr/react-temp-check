/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/public/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
