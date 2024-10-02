/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "hsl(162, 100%, 40%)",
          2: "hsl(162, 100%, 25%)",
          3: "#21232c",
          4: "#3a3c48",
          5: "#858DFF",
          6: "#FF98E2",
        },
      },
    },
  },
  plugins: [],
};
