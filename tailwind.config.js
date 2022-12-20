/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#ff3b3f',
          primary: '#DD4B39'
        },
        orange: {
          DEFAULT: '#ff861d',
          primary: '#FF9933'
        },
        yellow: {
          DEFAULT: '#ffae34',
          primary: '#e9dfd1'
        },
        blue: {
          DEFAULT: '#76bad2',
          primary: '#37B9EB',
          dark: '#3D5998'
        },
        black: {
          DEFAULT: '#000000',
          primary: '#181818',
          shallower: '#444444',
        },
        white: {
          DEFAULT: '#ffffff',
          primary: '#efefef'
        },
        gray: {
          DEFAULT: '#b8b8b8',
          primary: '#979797',
          depper: '#6f6f6f',
          dark: '#555057'
        },
        brown: {
          DEFAULT: '#423334'
        }
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
