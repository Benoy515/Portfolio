/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          // "10px 10px 0 rgba(255,255, 255, 0.35)",
          "0px 0px 10px rgba(255, 255,255, 1)",
        ],
      },
    },
  },
  plugins: [],
}

