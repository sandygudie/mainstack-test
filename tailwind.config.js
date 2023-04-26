/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsla(19, 100%, 51%, 1)",
        "primary-light": "hsla(19, 100%, 95%, 1)",
        gray: "hsla(224, 27%, 95%, 1)",
        "gray-400": "hsla(208, 11%, 38%, 1)",
        "gray-500": "hsla(210, 11%, 22%, 1)",
        black: "hsla(240, 7%, 8%, 1)",
       
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
