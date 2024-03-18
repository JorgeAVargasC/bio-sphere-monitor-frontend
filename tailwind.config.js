const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        disabledOpacity: '0.3', // opacity-[0.3]
        borderWidth: {
          small: '1px', // border-small
          medium: '1px', // border-medium
          large: '2px' // border-large
        }
      },
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#F3A60D',
              50: '#FCE6BC',
              100: '#FBDFA8',
              200: '#F9D182',
              300: '#F7C35B',
              400: '#F5B434',
              500: '#F3A60D',
              600: '#BE8209',
              700: '#895D07',
              800: '#543904',
              900: '#1E1501'
            },
            secondary: {
              DEFAULT: '#F3A60D',
              50: '#FCE6BC',
              100: '#FBDFA8',
              200: '#F9D182',
              300: '#F7C35B',
              400: '#F5B434',
              500: '#F3A60D',
              600: '#BE8209',
              700: '#895D07',
              800: '#543904',
              900: '#1E1501'
            }
          }
        },
        light: {
          colors: {
            primary: {
              DEFAULT: '#F3A60D',
              50: '#FCE6BC',
              100: '#FBDFA8',
              200: '#F9D182',
              300: '#F7C35B',
              400: '#F5B434',
              500: '#F3A60D',
              600: '#BE8209',
              700: '#895D07',
              800: '#543904',
              900: '#1E1501'
            },
            secondary: {
              DEFAULT: '#F3A60D',
              50: '#FCE6BC',
              100: '#FBDFA8',
              200: '#F9D182',
              300: '#F7C35B',
              400: '#F5B434',
              500: '#F3A60D',
              600: '#BE8209',
              700: '#895D07',
              800: '#543904',
              900: '#1E1501'
            }
          }
        }
      }
    })
  ]
}
