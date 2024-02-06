/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "devfest-black": "#1A1A1A",
        "devfest-orange": "#FFBA00",
        "devfest-blue": "#2B82FB",
        "devfest-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
