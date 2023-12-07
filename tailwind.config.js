/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-100": "hsl(209, 61%, 16%)",
        "grey-500": "hsl(210, 22%, 49%)",
        "grey-900": "hsl(210, 36%, 96%)",
        white: "#fff",
        gold: "#c59d5f",
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      transitionDuration: {
        300: "0.3s",
      },
      spacing: {
        1: "0.1rem",
      },
      borderRadius: {
        sm: "0.25rem",
      },
      maxWidth: {
        1170: "1170px",
      },
    },
  },
  plugins: [],
};
