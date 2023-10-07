/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-hero-2.jpeg')",
      },
      animation: {
        "blink-cursor": "blink 3s linear infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
