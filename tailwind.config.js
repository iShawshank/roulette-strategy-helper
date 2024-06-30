/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#3ef016',
        'light-black': '#1c1f24;',
        'neutral-2': '#2a2e34',
      },
    },
  },
  plugins: [],
};
