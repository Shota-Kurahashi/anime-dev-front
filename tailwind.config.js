/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh"],
      },
      colors: {
        "ct-gray-200": "#d9d9d9",
        "ct-gray-100": "#d7d7d7",
        "ct-black": "#0d0d0d",
        "ct-red-500": "#e42256",
        "ct-red-300": "#e46997",
        "ct-sky": "#67d2d5",
        "ct-blue-100": "#68bbe3",
        "ct-blue-200": "#0f86d3",
        "ct-blue-300": "#045a98",
        "ct-blue-400": "#003060",
        "ct-purple": "#bd97cb",
        "ct-yellow": "#fbc741",
      },
      animation: {
        appear: "appear 0.5s ease-in-out",
      },

      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
