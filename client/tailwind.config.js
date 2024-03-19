/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      objectPosition: {
        custom: "50% 0%",
      },
    },
  },
  plugins: [],
};
