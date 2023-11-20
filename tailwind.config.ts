import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        black: '#000112',
        'very-dark-grey': '#20212C',
        'dark-grey': '#2B2C37',
        'medium-grey': '#828FA3',
        'lines-dark': '#3E3F4E',
        'lines-light': '#E4EBFA',
        'light-grey': '#F4F7FD',
        white: '#FFFFFF',
        'main-purple': '#635FC7',
        'main-purple-hover': '#A8A4FF',
        red: '#EA5555',
        'red-hover': '#FF9898',
      },
      fontSize: {
        base: '0.938rem',
      },
    },
  },
  plugins: [],
};
export default config;
