/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'google-dark': '#bdc1c6',
      },
      height: {
        15: '3.75rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
