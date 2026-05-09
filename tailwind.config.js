

export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        soil: {
          50: '#FBF5EF',
          100: '#F2E4D5',
          200: '#E8D2B5',
          300: '#D9A87A',
          400: '#C58A4D',
          500: '#B5651D',
          600: '#9A551A',
          700: '#7A3F12',
          800: '#5C2F0E',
          900: '#3E1F08'
        },
        leaf: {
          50: '#F0F4E8',
          300: '#8FB339',
          500: '#5B7F2A',
          700: '#3A5318',
          900: '#1F2E0C'
        },
        avocado: {
          50: '#f0f7e8',
          100: '#e1efd0',
          200: '#c5e8a0',
          300: '#a8c84a',
          400: '#8aab3a',
          500: '#5B7F2A',
          600: '#4f9a3a',
          700: '#3A5318',
          800: '#2d5a1b',
          900: '#1e3d11'
        },
        sand: {
          50: '#FAF7F1',
          100: '#EDE6D6',
          300: '#C9BFA9',
          500: '#6B6354',
          900: '#2C2820'
        },
        bark: '#2C2820',
        bone: '#FAF7F1',
        status: {
          info: '#3b82f6',
          warning: '#D97706',
          danger: '#B23A26',
          success: '#5B7F2A',
        },
        danger: '#B23A26',
        warning: '#D97706',
        success: '#5B7F2A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        'network-pattern': "url('https://cdn.magicpatterns.com/uploads/okXjMcoqrZqdYLq8Cd2RMJ/Gemini_Generated_Image_3nzz6m3nzz6m3nzz_1.png')",
      }
    },
  },
  plugins: [],
}

