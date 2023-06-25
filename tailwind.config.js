/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'bright-red': '#E93224',
      'dull-red': '#BA3345',
      'dull-pink': '#C22D61',
      'dull-purple': '#47206D',
      'dull-blue': '#358FAF',
      'dull-green': '#66B234',
      'bright-green': '#00E225',
      black: '#1100B',
    },
  },
  plugins: [],
};
