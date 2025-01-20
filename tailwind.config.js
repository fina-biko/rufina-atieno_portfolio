/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  // Include the root HTML file
    "./src/**/*.{js,jsx,ts,tsx}"], // Include all JS/TS files in the src folder
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

