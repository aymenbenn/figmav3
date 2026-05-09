
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
          300: '#D9A87A',
          500: '#B5651D',
          700: '#7A3F12',
          900: '#3E1F08'
        },
        leaf: {
          50: '#F0F4E8',
          300: '#8FB339',
          500: '#5B7F2A',
          700: '#3A5318',
          900: '#1F2E0C'
        },
        sand: {
          50: '#FAF7F1',
          100: '#EDE6D6',
          300: '#C9BFA9',
          500: '#6B6354',
          900: '#2C2820'
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
