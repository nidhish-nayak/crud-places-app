/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'title': ['Patrick Hand', 'cursive'],
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: ["prettier-plugin-tailwindcss"],
  mode: 'jit',
}