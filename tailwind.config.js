export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#FEF2EE',
            100: '#FDE5DD',
            200: '#FBCBBB',
            300: '#F9B199',
            400: '#F79777',
            500: '#F57D55',
            600: '#942E06',
            700: '#752505',
            800: '#561C04',
            900: '#371202',
            DEFAULT: '#942e06',
            light: '#F57D55',
            dark: '#752505',
          },
          accent: '#DAA520',
          dark: '#2D2D2D',
          light: '#F5F5F5',
          white: '#FFFFFF',
        },
        fontFamily: {
          serif: ['Playfair Display', 'serif'],
          sans: ['Inter', 'sans-serif']
        }
      },
    },
    plugins: [],
  }