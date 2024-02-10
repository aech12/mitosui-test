/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/stories/**/*.{mdx,jsx,tsx,js,ts}",
    "./output/**/*.{jsx,tsx,js,ts}"
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
};
