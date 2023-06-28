/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'tomato':'hsl(4,100%,67%)',
        'dark-slate-grey':'#232742',
        'charcoal-grey':'hsl(235, 18%, 26%)',
        'grey2':'hsl(231, 7%, 60%)'
      }
    },
  },
  plugins: [],
};
