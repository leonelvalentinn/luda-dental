/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c2545",
        secondary: "#046c9c",
      },
    },
  },
  plugins: [],
};
